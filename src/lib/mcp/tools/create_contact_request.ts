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
  name: "create_contact_request",
  title: "Submit a project inquiry to Pleco Lab",
  description:
    "Send Pleco Lab a project inquiry (CRM, website, AI agent, automation, WhatsApp solution) on behalf of the signed-in user. Returns the created request id.",
  inputSchema: {
    name: z.string().min(1).describe("Full name of the person making the request."),
    email: z.string().email().describe("Contact email address."),
    company: z.string().optional().describe("Company or organization name."),
    budget: z
      .string()
      .optional()
      .describe("Rough budget (e.g. '$5k-$15k', '$25k+'). Optional."),
    message: z
      .string()
      .min(10)
      .describe("What the user wants to build. Include goals, scope, timeline."),
  },
  annotations: { readOnlyHint: false, destructiveHint: false, openWorldHint: false },
  handler: async ({ name, email, company, budget, message }, ctx) => {
    if (!ctx.isAuthenticated()) {
      return { content: [{ type: "text", text: "Not authenticated" }], isError: true };
    }
    const { data, error } = await supabaseForUser(ctx)
      .from("contact_requests")
      .insert({
        user_id: ctx.getUserId(),
        name,
        email,
        company: company ?? null,
        budget: budget ?? null,
        message,
      })
      .select("id, created_at, status")
      .single();
    if (error) {
      return { content: [{ type: "text", text: error.message }], isError: true };
    }
    return {
      content: [
        {
          type: "text",
          text: `Contact request created (id: ${data.id}). The Pleco Lab team will follow up shortly.`,
        },
      ],
      structuredContent: { request: data },
    };
  },
});
