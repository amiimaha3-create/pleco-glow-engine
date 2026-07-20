import { defineTool, type ToolContext } from "@lovable.dev/mcp-js";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";

function supabaseForUser(ctx: ToolContext) {
  return createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_PUBLISHABLE_KEY!,
    {
      global: { headers: { Authorization: `Bearer ${ctx.getToken()}` } },
      auth: { persistSession: false, autoRefreshToken: false },
    },
  );
}

export default defineTool({
  name: "list_contact_requests",
  title: "List my project inquiries",
  description:
    "List the signed-in user's own project inquiries submitted to Pleco Lab, most recent first.",
  inputSchema: {
    limit: z
      .number()
      .int()
      .optional()
      .describe("Max rows to return. Default 20."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: async ({ limit }, ctx) => {
    if (!ctx.isAuthenticated()) {
      return { content: [{ type: "text", text: "Not authenticated" }], isError: true };
    }
    const cap = Math.min(Math.max(limit ?? 20, 1), 100);
    const { data, error } = await supabaseForUser(ctx)
      .from("contact_requests")
      .select("id, name, email, company, budget, message, status, created_at")
      .order("created_at", { ascending: false })
      .limit(cap);
    if (error) {
      return { content: [{ type: "text", text: error.message }], isError: true };
    }
    return {
      content: [
        {
          type: "text",
          text:
            data.length === 0
              ? "No contact requests yet."
              : `${data.length} contact request(s):\n\n` +
                data
                  .map(
                    (r) =>
                      `• [${r.status}] ${r.name} <${r.email}>${r.company ? ` @ ${r.company}` : ""} — ${r.message.slice(0, 120)}${r.message.length > 120 ? "…" : ""}`,
                  )
                  .join("\n"),
        },
      ],
      structuredContent: { requests: data },
    };
  },
});
