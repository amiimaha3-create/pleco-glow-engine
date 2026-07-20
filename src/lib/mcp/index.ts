import { auth, defineMcp } from "@lovable.dev/mcp-js";
import createContactRequestTool from "./tools/create_contact_request";
import listContactRequestsTool from "./tools/list_contact_requests";
import plecoServicesOverviewTool from "./tools/pleco_services_overview";

// Direct Supabase auth issuer (project ref survives publish; SUPABASE_URL is
// rewritten to the .lovable.cloud proxy on publish, which mcp-js rejects).
const projectRef = import.meta.env.VITE_SUPABASE_PROJECT_ID ?? "project-ref-unset";

export default defineMcp({
  name: "pleco-lab-mcp",
  title: "Pleco Lab",
  version: "0.1.0",
  instructions:
    "Tools for Pleco Lab — a premium product engineering studio. Use `pleco_services_overview` to learn what they build, `create_contact_request` to submit a project inquiry on behalf of the signed-in user, and `list_contact_requests` to review the user's own past inquiries.",
  auth: auth.oauth.issuer({
    issuer: `https://${projectRef}.supabase.co/auth/v1`,
    acceptedAudiences: "authenticated",
  }),
  tools: [plecoServicesOverviewTool, createContactRequestTool, listContactRequestsTool],
});
