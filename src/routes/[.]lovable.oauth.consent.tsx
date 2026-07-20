import { createFileRoute, redirect } from "@tanstack/react-router";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

type OAuthClient = { name?: string; client_uri?: string; redirect_uris?: string[] };
type AuthorizationDetails = {
  client?: OAuthClient | null;
  scope?: string;
  redirect_url?: string;
  redirect_to?: string;
};

// The @supabase/supabase-js auth.oauth namespace is currently beta and not
// exposed on the client's TS types. This local typed wrapper lets us call
// the SDK's real methods without any grepping into node_modules.
type OAuthApi = {
  getAuthorizationDetails: (id: string) => Promise<{ data: AuthorizationDetails | null; error: { message: string } | null }>;
  approveAuthorization: (id: string) => Promise<{ data: AuthorizationDetails | null; error: { message: string } | null }>;
  denyAuthorization: (id: string) => Promise<{ data: AuthorizationDetails | null; error: { message: string } | null }>;
};
function getOAuthApi(): OAuthApi {
  return (supabase.auth as unknown as { oauth: OAuthApi }).oauth;
}

function isSameOriginPath(value: string | null): value is string {
  return !!value && value.startsWith("/") && !value.startsWith("//");
}

export const Route = createFileRoute("/.lovable/oauth/consent")({
  ssr: false,
  validateSearch: (s: Record<string, unknown>) => ({
    authorization_id: typeof s.authorization_id === "string" ? s.authorization_id : "",
  }),
  beforeLoad: async ({ search, location }) => {
    if (!search.authorization_id) throw new Error("Missing authorization_id");
    const { data } = await supabase.auth.getSession();
    if (!data.session) {
      const next = location.pathname + location.searchStr;
      throw redirect({ to: "/auth", search: { next } });
    }
  },
  loader: async ({ location }) => {
    const authorizationId = new URLSearchParams(location.search).get("authorization_id")!;
    const { data, error } = await getOAuthApi().getAuthorizationDetails(authorizationId);
    if (error) throw error;
    const immediate = data?.redirect_url ?? data?.redirect_to;
    if (immediate && !data?.client) throw redirect({ href: immediate });
    return data as AuthorizationDetails;
  },
  component: Consent,
  errorComponent: ({ error }) => (
    <main className="flex min-h-screen items-center justify-center bg-[#060B1A] px-6 text-white">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">Could not load this authorization</h1>
        <p className="mt-2 text-sm text-white/60">
          {(error as Error)?.message ?? String(error)}
        </p>
      </div>
    </main>
  ),
});

function Consent() {
  const details = Route.useLoaderData();
  const { authorization_id } = Route.useSearch();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const clientName = details?.client?.name ?? "an app";
  const scope = details?.scope ?? "";

  async function decide(approve: boolean) {
    setBusy(true);
    setError(null);
    const api = getOAuthApi();
    const { data, error } = approve
      ? await api.approveAuthorization(authorization_id)
      : await api.denyAuthorization(authorization_id);
    if (error) {
      setBusy(false);
      setError(error.message);
      return;
    }
    const target = data?.redirect_url ?? data?.redirect_to;
    if (!target) {
      setBusy(false);
      setError("No redirect returned by the authorization server.");
      return;
    }
    if (isSameOriginPath(target)) {
      window.location.href = target;
    } else {
      window.location.href = target;
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#060B1A] px-6 text-white">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/[0.03] p-8 shadow-2xl backdrop-blur-xl">
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 font-bold">
          P
        </div>
        <h1 className="text-2xl font-semibold tracking-tight">
          Connect {clientName} to your Pleco Lab account
        </h1>
        <p className="mt-2 text-sm text-white/60">
          This lets {clientName} use Pleco Lab's tools as you — submit and view your
          project inquiries on your behalf.
        </p>
        {scope && (
          <p className="mt-4 text-xs text-white/40">
            Requested scope: <span className="text-white/60">{scope}</span>
          </p>
        )}
        <p className="mt-4 text-xs text-white/40">
          This does not bypass Pleco Lab's permissions or backend policies.
        </p>
        {error && (
          <p
            role="alert"
            className="mt-4 rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-200"
          >
            {error}
          </p>
        )}
        <div className="mt-6 flex gap-3">
          <button
            disabled={busy}
            onClick={() => decide(true)}
            className="flex-1 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 px-4 py-3 text-sm font-medium text-white shadow-lg shadow-indigo-500/30 transition-all hover:scale-[1.02] disabled:opacity-50"
          >
            Approve
          </button>
          <button
            disabled={busy}
            onClick={() => decide(false)}
            className="flex-1 rounded-xl border border-white/15 bg-white/[0.02] px-4 py-3 text-sm font-medium text-white/80 transition-colors hover:bg-white/[0.05] disabled:opacity-50"
          >
            Deny
          </button>
        </div>
      </div>
    </main>
  );
}
