import { defineTool } from "@lovable.dev/mcp-js";

const OVERVIEW = `Pleco Lab is a premium product engineering studio (HQ: Delhi, India · Global delivery).

Core solutions:
- Custom CRM Development — bespoke CRMs tailored to sales/ops workflows.
- Website Development — high-conversion marketing sites and web apps.
- Business Automation — internal tools, workflow automation, integrations.
- AI Agents — LLM-powered agents for sales, support, and operations.
- WhatsApp Automation — customer engagement, notifications, and chat commerce.
- Integrations & APIs — connect existing SaaS stacks and internal systems.

Industries served: Travel, Immigration, Education, Healthcare, Logistics, Retail, Real Estate, and SMEs.

Engagement: 24h response · NDA on request · Senior team · No-obligation consultation.
`;

export default defineTool({
  name: "pleco_services_overview",
  title: "Pleco Lab services overview",
  description:
    "Returns a summary of what Pleco Lab builds (CRMs, websites, AI agents, automation, WhatsApp), industries served, and how engagements work. Useful before creating a contact request.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({ content: [{ type: "text", text: OVERVIEW }] }),
});
