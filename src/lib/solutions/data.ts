import {
  Bot,
  Workflow,
  Smartphone,
  MessageCircle,
  Plug,
  Palette,
  Cloud,
  LineChart,
  MessagesSquare,
  Users,
  Headphones,
  BrainCircuit,
  GitBranch,
  ShieldCheck,
  Bell,
  Route as RouteIcon,
  AppWindow,
  Apple,
  Layers,
  Building2,
  BadgeCheck,
  ShoppingBag,
  ArrowLeftRight,
  Cable,
  Database,
  Activity,
  Ruler,
  Layout,
  MousePointerClick,
  Sparkles,
  Server,
  Globe2,
  Gauge,
  Rocket,
  BarChart3,
  PieChart,
  Table,
  Eye,
} from "lucide-react";
import type { SolutionConfig } from "./types";

/* ---------- shared accent presets ---------- */
const A = {
  violet: { from: "#7c3aed", to: "#a855f7", ring: "rgba(167,139,250,0.35)", glow: "rgba(139,92,246,0.35)", text: "#c4b5fd" },
  cyan:   { from: "#06b6d4", to: "#22d3ee", ring: "rgba(34,211,238,0.35)",  glow: "rgba(34,211,238,0.30)",  text: "#a5f3fc" },
  emerald:{ from: "#10b981", to: "#34d399", ring: "rgba(52,211,153,0.35)",  glow: "rgba(16,185,129,0.28)",  text: "#a7f3d0" },
  green:  { from: "#16a34a", to: "#22c55e", ring: "rgba(34,197,94,0.35)",   glow: "rgba(34,197,94,0.28)",   text: "#bbf7d0" },
  amber:  { from: "#f59e0b", to: "#fbbf24", ring: "rgba(251,191,36,0.35)",  glow: "rgba(245,158,11,0.28)",  text: "#fde68a" },
  rose:   { from: "#ef4444", to: "#f43f5e", ring: "rgba(244,63,94,0.35)",   glow: "rgba(239,68,68,0.28)",   text: "#fecaca" },
  sky:    { from: "#0ea5e9", to: "#38bdf8", ring: "rgba(56,189,248,0.35)",  glow: "rgba(56,189,248,0.28)",  text: "#bae6fd" },
  indigo: { from: "#4f46e5", to: "#6366f1", ring: "rgba(99,102,241,0.35)",  glow: "rgba(99,102,241,0.28)",  text: "#c7d2fe" },
};

/* ---------- 1. AI Agents ---------- */
export const aiAgents: SolutionConfig = {
  slug: "ai-agents",
  path: "/solutions/ai-agents",
  title: "AI Agents",
  tagline:
    "Intelligent digital employees that automate conversations, workflows, and decision-making across your business.",
  Icon: Bot,
  accent: A.violet,
  capabilities: ["Sales Assistant", "Customer Support", "HR Automation", "Knowledge Agent"],
  cardCta: "Explore AI Agents",
  heroBadge: "AI AGENTS",
  heroHeadline: "Autonomous AI agents that work like your best employees.",
  heroSub:
    "Deploy LLM-powered agents that handle sales conversations, resolve support tickets, orchestrate internal operations, and reason over your business knowledge — 24/7.",
  whatItIs: {
    paragraph:
      "Pleco Labs designs and deploys AI agents grounded in your company data. Each agent is trained on your product, tone, policies, and workflows — connected to your CRM, help desk, and internal tools — so it acts like a domain expert, not a generic chatbot.",
    problems: [
      "Response times too slow, teams overwhelmed by repetitive queries",
      "Sales opportunities lost during off-hours",
      "Institutional knowledge locked in scattered documents",
      "Manual triage across support, HR, and ops",
    ],
    industries: ["SaaS", "E-commerce", "Real Estate", "Healthcare", "Finance", "Education"],
  },
  features: [
    { title: "Sales Agent", desc: "Qualifies leads, answers product questions, and books meetings on your calendar.", Icon: MessagesSquare },
    { title: "Support Agent", desc: "Resolves tier-1 tickets, escalates intelligently, and updates your helpdesk.", Icon: Headphones },
    { title: "HR Agent", desc: "Handles onboarding, policy questions, and leave workflows.", Icon: Users },
    { title: "Knowledge Agent", desc: "Answers questions grounded in your docs with source-linked citations.", Icon: BrainCircuit },
  ],
  benefits: [
    { label: "Response time", metric: "-92%", desc: "Instant answers, day or night." },
    { label: "Support cost", metric: "-38%", desc: "Automate tier-1 volume." },
    { label: "Lead conversion", metric: "+27%", desc: "Never miss an inbound." },
    { label: "Time saved", metric: "40h/wk", desc: "Freed for high-value work." },
    { label: "CSAT", metric: "4.7/5", desc: "Consistent quality, every time." },
    { label: "Coverage", metric: "24/7", desc: "Around-the-clock operations." },
  ],
  steps: [
    { name: "Scope", desc: "Map the use case, personas, and success metrics." },
    { name: "Ground", desc: "Ingest your docs, CRM data, and product knowledge." },
    { name: "Design", desc: "Craft persona, tone, guardrails, and fallback flows." },
    { name: "Integrate", desc: "Wire into your CRM, helpdesk, and channels." },
    { name: "Evaluate", desc: "Run eval sets and shadow mode before go-live." },
    { name: "Launch", desc: "Monitor, iterate, and scale with confidence." },
  ],
  integrations: [
    { name: "OpenAI", initial: "O" },
    { name: "Anthropic", initial: "A" },
    { name: "Supabase", initial: "S" },
    { name: "Slack", initial: "SL" },
    { name: "WhatsApp", initial: "W" },
    { name: "HubSpot", initial: "H" },
    { name: "Zendesk", initial: "Z" },
    { name: "Microsoft", initial: "M" },
  ],
  faqs: [
    { q: "How is a Pleco Labs AI agent different from ChatGPT?", a: "Our agents are grounded in your company's data, integrated with your operational tools, and shaped by your brand voice — with strict guardrails and fallback flows so they never fabricate answers." },
    { q: "Can the agent take actions, not just chat?", a: "Yes. Agents create CRM records, book meetings, update tickets, trigger workflows, and hand off to humans when policies require." },
    { q: "How do you protect our data?", a: "We use isolated instances, encryption in transit and at rest, PII redaction, and can deploy on private cloud when needed." },
    { q: "How long does deployment take?", a: "A production-ready agent typically ships in 3–6 weeks depending on integrations and evaluation depth." },
  ],
  related: ["business-automation", "whatsapp-automation", "analytics-dashboards"],
  seo: {
    title: "AI Agents for Business | Custom LLM Agents & Automation | Pleco Labs",
    description:
      "Deploy custom AI agents that automate sales, customer support, HR, and internal operations. Grounded in your data, integrated with your tools. Built by Pleco Labs.",
  },
};

/* ---------- 2. Business Automation ---------- */
export const businessAutomation: SolutionConfig = {
  slug: "business-automation",
  path: "/solutions/business-automation",
  title: "Business Automation",
  tagline:
    "Automate repetitive work and connect your entire business into one intelligent workflow.",
  Icon: Workflow,
  accent: A.cyan,
  capabilities: ["Workflow Automation", "Approval Processes", "Task Routing", "Notifications"],
  cardCta: "Explore Business Automation",
  heroBadge: "BUSINESS AUTOMATION",
  heroHeadline: "One intelligent workflow across every tool your business runs on.",
  heroSub:
    "Eliminate manual handoffs, approvals, and copy-paste work. Pleco Labs designs automation systems that connect your SaaS stack, enforce process, and give leadership real-time visibility.",
  whatItIs: {
    paragraph:
      "We map your operating processes end-to-end, then automate the repeatable work with reliable, observable pipelines. From lead-to-cash to onboarding, procurement, and finance ops — automation runs quietly in the background while your team focuses on decisions.",
    problems: [
      "Teams stuck on manual data entry across disconnected tools",
      "Approvals lost in email threads and spreadsheets",
      "No visibility into where a task actually is",
      "Errors from copy-paste between systems",
    ],
    industries: ["Operations", "Finance", "HR", "Manufacturing", "Logistics", "Professional Services"],
  },
  features: [
    { title: "Workflow Engine", desc: "Multi-step processes with branching, retries, and audit logs.", Icon: GitBranch },
    { title: "Approvals", desc: "Structured sign-offs across teams with SLA tracking.", Icon: ShieldCheck },
    { title: "Task Routing", desc: "Smart assignment based on skills, load, and rules.", Icon: RouteIcon },
    { title: "Notifications", desc: "Email, Slack, WhatsApp, and mobile push — where your team lives.", Icon: Bell },
  ],
  benefits: [
    { label: "Manual work", metric: "-70%", desc: "Repetitive tasks eliminated." },
    { label: "Cycle time", metric: "-55%", desc: "Faster approvals and handoffs." },
    { label: "Errors", metric: "-83%", desc: "No more copy-paste mistakes." },
    { label: "Throughput", metric: "3x", desc: "Same team, more output." },
    { label: "Visibility", metric: "100%", desc: "Every step tracked." },
    { label: "ROI", metric: "6mo", desc: "Typical payback period." },
  ],
  steps: [
    { name: "Discover", desc: "Shadow your team and map current-state processes." },
    { name: "Redesign", desc: "Streamline steps before automating them." },
    { name: "Build", desc: "Implement workflows with reliability guarantees." },
    { name: "Integrate", desc: "Wire into every tool involved in the process." },
    { name: "Rollout", desc: "Phased launch with change management." },
    { name: "Optimize", desc: "Metrics-driven improvements post-launch." },
  ],
  integrations: [
    { name: "Slack", initial: "SL" },
    { name: "Google", initial: "G" },
    { name: "Microsoft", initial: "M" },
    { name: "HubSpot", initial: "H" },
    { name: "Stripe", initial: "S" },
    { name: "Notion", initial: "N" },
    { name: "Zapier", initial: "Z" },
    { name: "WhatsApp", initial: "W" },
  ],
  faqs: [
    { q: "How is this different from Zapier?", a: "Zapier is a great glue tool. We design and build custom, business-critical automations with error handling, retries, observability, and process ownership — plus a UI when your team needs one." },
    { q: "Can you automate approvals?", a: "Yes. We build structured approval flows with SLAs, escalations, and audit trails — usable from email, Slack, or a dedicated dashboard." },
    { q: "What if we already use a workflow tool?", a: "We extend what you have. If your current tool can't do what you need, we augment it — you don't have to rip and replace." },
    { q: "How do we measure success?", a: "Every automation ships with metrics: volume, cycle time, error rate, and business outcome (revenue, cost, satisfaction)." },
  ],
  related: ["ai-agents", "api-integrations", "analytics-dashboards"],
  seo: {
    title: "Business Automation | Workflow Automation & Process Automation | Pleco Labs",
    description:
      "Automate approvals, task routing, notifications, and cross-tool workflows. Pleco Labs builds custom business automation that eliminates manual work and scales operations.",
  },
};

/* ---------- 3. Mobile App Development ---------- */
export const mobileAppDevelopment: SolutionConfig = {
  slug: "mobile-app-development",
  path: "/solutions/mobile-app-development",
  title: "Mobile Apps",
  tagline:
    "Build premium mobile experiences that keep customers connected anywhere.",
  Icon: Smartphone,
  accent: A.rose,
  capabilities: ["Android", "iOS", "Cross Platform", "Enterprise Apps"],
  cardCta: "Explore Mobile Apps",
  heroBadge: "MOBILE APP DEVELOPMENT",
  heroHeadline: "Premium mobile products, engineered for scale.",
  heroSub:
    "From consumer apps to internal enterprise tools, Pleco Labs designs and ships iOS and Android products that feel native, load instantly, and stay reliable at scale.",
  whatItIs: {
    paragraph:
      "We build mobile-first products with a strong product mindset — deep discovery, thoughtful UX, and reliable engineering. Cross-platform where it makes sense, native where it matters. Every app ships with observability, crash reporting, and a release process your team can trust.",
    problems: [
      "Existing app feels slow, dated, or off-brand",
      "iOS and Android experiences are inconsistent",
      "Frequent crashes and store-review regressions",
      "Internal ops need a mobile tool, not another web dashboard",
    ],
    industries: ["Consumer", "Fintech", "Healthcare", "Logistics", "Retail", "Enterprise Field Ops"],
  },
  features: [
    { title: "iOS", desc: "Swift-native performance and Human Interface Guidelines fluency.", Icon: Apple },
    { title: "Android", desc: "Material 3 experiences that shine on every OEM.", Icon: AppWindow },
    { title: "Cross Platform", desc: "React Native / Expo for shared code with native quality.", Icon: Layers },
    { title: "Enterprise Apps", desc: "Field ops, MDM, offline-first, and secure identity.", Icon: Building2 },
  ],
  benefits: [
    { label: "Time to launch", metric: "-45%", desc: "Faster than typical agencies." },
    { label: "Crash-free", metric: "99.9%", desc: "Reliability baked in." },
    { label: "App size", metric: "-40%", desc: "Lean bundles, fast installs." },
    { label: "Cold start", metric: "<1.5s", desc: "Snappy on real devices." },
    { label: "Store rating", metric: "4.7+", desc: "Design and craft users notice." },
    { label: "Retention", metric: "+31%", desc: "Better onboarding and UX." },
  ],
  steps: [
    { name: "Product", desc: "Define audience, jobs-to-be-done, and success metrics." },
    { name: "Design", desc: "Prototype flows, motion, and system components." },
    { name: "Build", desc: "Ship modular, testable code with CI/CD." },
    { name: "QA", desc: "Device labs, snapshot tests, and beta cohorts." },
    { name: "Release", desc: "Store submission, phased rollouts, feature flags." },
    { name: "Iterate", desc: "Analytics-driven improvements every sprint." },
  ],
  integrations: [
    { name: "Apple", initial: "A" },
    { name: "Google", initial: "G" },
    { name: "Firebase", initial: "F" },
    { name: "Supabase", initial: "S" },
    { name: "Stripe", initial: "$" },
    { name: "Sentry", initial: "SN" },
    { name: "Segment", initial: "SG" },
    { name: "OneSignal", initial: "OS" },
  ],
  faqs: [
    { q: "Do you build native or cross-platform?", a: "Both. We pick per project. Cross-platform for most consumer and enterprise apps; native when the product needs deep platform APIs or extreme performance." },
    { q: "Can you take over an existing codebase?", a: "Yes. We audit the code, stabilize it, then set a clear plan for redesign, rewrite, or incremental modernization." },
    { q: "Do you handle store submission?", a: "Yes. App Store, Play Store, review responses, and phased rollouts are part of every launch." },
    { q: "Do you build backends too?", a: "Yes — with Supabase, Firebase, or custom stacks depending on scale and constraints." },
  ],
  related: ["ui-ux-design", "cloud-solutions", "api-integrations"],
  seo: {
    title: "Mobile App Development | iOS, Android & Cross-Platform Apps | Pleco Labs",
    description:
      "Premium iOS and Android app development with React Native and native tooling. Pleco Labs designs, builds, and scales consumer and enterprise mobile products.",
  },
};

/* ---------- 4. WhatsApp Automation ---------- */
export const whatsappAutomation: SolutionConfig = {
  slug: "whatsapp-automation",
  path: "/solutions/whatsapp-automation",
  title: "WhatsApp Automation",
  tagline:
    "Turn WhatsApp into a full sales, support, and commerce channel — automated end to end.",
  Icon: MessageCircle,
  accent: A.green,
  capabilities: ["Broadcast Campaigns", "Chat Commerce", "Support Bots", "CRM Sync"],
  cardCta: "Explore WhatsApp Automation",
  heroBadge: "WHATSAPP AUTOMATION",
  heroHeadline: "WhatsApp as a first-class channel for sales, support, and commerce.",
  heroSub:
    "Verified business messaging, automated flows, and human handoff — powered by the WhatsApp Business Platform and integrated with your CRM.",
  whatItIs: {
    paragraph:
      "Pleco Labs designs and ships WhatsApp experiences that convert. From verified business setup and template approvals to bot flows, agent inboxes, and analytics — we cover the full stack, tuned for your funnel and compliance requirements.",
    problems: [
      "Fragmented communication across channels",
      "High cost-per-conversation on legacy support channels",
      "Cart abandonment with no re-engagement path",
      "Manual, inconsistent customer journeys",
    ],
    industries: ["E-commerce", "Real Estate", "Travel", "Healthcare", "Education", "Financial Services"],
  },
  features: [
    { title: "Broadcast Campaigns", desc: "Template messages with segmentation and consent tracking.", Icon: Bell },
    { title: "Chat Commerce", desc: "Product catalog, cart, checkout — all inside WhatsApp.", Icon: ShoppingBag },
    { title: "Support Bots", desc: "Instant answers with clean escalation to human agents.", Icon: Headphones },
    { title: "CRM Sync", desc: "Every conversation logged and enriched into your CRM.", Icon: ArrowLeftRight },
  ],
  benefits: [
    { label: "Open rate", metric: "98%", desc: "Vs 20% for email." },
    { label: "CTR", metric: "45%+", desc: "Conversations convert." },
    { label: "Support cost", metric: "-40%", desc: "Automate the routine." },
    { label: "Response time", metric: "<10s", desc: "Instant, always on." },
    { label: "Conversion", metric: "+3.2x", desc: "Faster path to purchase." },
    { label: "Retention", metric: "+28%", desc: "Personal, ongoing touchpoints." },
  ],
  steps: [
    { name: "Verify", desc: "Business verification and WhatsApp API access." },
    { name: "Design", desc: "Conversation flows, templates, and tone." },
    { name: "Build", desc: "Bot logic, integrations, and agent inbox." },
    { name: "Approve", desc: "Template submission and compliance review." },
    { name: "Launch", desc: "Onboard your team and go live." },
    { name: "Optimize", desc: "A/B test flows and monitor performance." },
  ],
  integrations: [
    { name: "WhatsApp", initial: "W" },
    { name: "Meta", initial: "M" },
    { name: "Shopify", initial: "SH" },
    { name: "Stripe", initial: "$" },
    { name: "HubSpot", initial: "H" },
    { name: "Supabase", initial: "S" },
    { name: "OpenAI", initial: "O" },
    { name: "Google", initial: "G" },
  ],
  faqs: [
    { q: "Do we need Meta business verification?", a: "Yes. We handle the entire verification and WhatsApp Business API onboarding as part of the engagement." },
    { q: "Can it hand off to a human agent?", a: "Yes. Every flow supports smooth escalation with full context — into a shared inbox or your existing helpdesk." },
    { q: "Can it drive purchases?", a: "Yes. We build catalog, cart, and payment flows compliant with WhatsApp Commerce policy." },
    { q: "Is it GDPR compliant?", a: "Yes. Consent capture, data retention, and audit trails are built into every deployment." },
  ],
  related: ["ai-agents", "business-automation", "api-integrations"],
  seo: {
    title: "WhatsApp Automation | WhatsApp Business API & Chat Commerce | Pleco Labs",
    description:
      "Broadcast campaigns, chat commerce, and support bots on WhatsApp Business Platform. Verified setup, CRM sync, and human handoff — engineered by Pleco Labs.",
  },
};

/* ---------- 5. API Integrations ---------- */
export const apiIntegrations: SolutionConfig = {
  slug: "api-integrations",
  path: "/solutions/api-integrations",
  title: "API Integrations",
  tagline: "Connect your SaaS stack with reliable, observable pipelines.",
  Icon: Plug,
  accent: A.indigo,
  capabilities: ["REST & GraphQL", "Webhooks", "ETL Pipelines", "Realtime Sync"],
  cardCta: "Explore API Integrations",
  heroBadge: "API INTEGRATIONS",
  heroHeadline: "Every system talking to every other, reliably.",
  heroSub:
    "Custom integrations, webhooks, and data pipelines that keep your CRM, ERP, marketing, and finance tools perfectly in sync — with observability you can trust.",
  whatItIs: {
    paragraph:
      "We design and operate integration layers between your business tools. Whether it's syncing customers to marketing, orders to finance, or events across platforms — we build resilient pipelines with retries, dead-letter queues, and dashboards that show what's flowing where.",
    problems: [
      "Data trapped in silos across tools",
      "Fragile integrations that break silently",
      "No visibility into what's syncing",
      "Vendor iPaaS costs scaling unpredictably",
    ],
    industries: ["SaaS", "E-commerce", "Finance", "Healthcare", "Manufacturing", "Media"],
  },
  features: [
    { title: "REST & GraphQL", desc: "Type-safe clients and servers with schema-driven contracts.", Icon: Cable },
    { title: "Webhooks", desc: "Signed, retried, and audit-logged event pipelines.", Icon: Activity },
    { title: "ETL Pipelines", desc: "Batch and streaming data movement with quality checks.", Icon: Database },
    { title: "Realtime Sync", desc: "Bi-directional sync with conflict resolution.", Icon: ArrowLeftRight },
  ],
  benefits: [
    { label: "Uptime", metric: "99.99%", desc: "Redundant, monitored pipelines." },
    { label: "Data freshness", metric: "<5s", desc: "Realtime where it matters." },
    { label: "Integration cost", metric: "-50%", desc: "Vs traditional iPaaS." },
    { label: "Error rate", metric: "<0.01%", desc: "Retries and DLQs." },
    { label: "Team effort", metric: "-70%", desc: "Ops runs itself." },
    { label: "Visibility", metric: "100%", desc: "Every flow observable." },
  ],
  steps: [
    { name: "Audit", desc: "Map every source, sink, and data contract." },
    { name: "Design", desc: "Choose sync topology and error strategy." },
    { name: "Build", desc: "Implement with typed clients and tests." },
    { name: "Observe", desc: "Dashboards, alerts, and SLAs from day one." },
    { name: "Harden", desc: "Chaos test, backfill, and secure secrets." },
    { name: "Operate", desc: "SLA-backed monitoring and on-call." },
  ],
  integrations: [
    { name: "Stripe", initial: "$" },
    { name: "HubSpot", initial: "H" },
    { name: "Salesforce", initial: "SF" },
    { name: "Shopify", initial: "SH" },
    { name: "Supabase", initial: "S" },
    { name: "AWS", initial: "AW" },
    { name: "Google", initial: "G" },
    { name: "Microsoft", initial: "M" },
  ],
  faqs: [
    { q: "Do you replace tools like Zapier or Make?", a: "Sometimes. For business-critical, high-volume, or complex integrations, custom is cheaper and more reliable long-term. We help you choose per use case." },
    { q: "Can you integrate legacy systems?", a: "Yes. SOAP, XML, SFTP, on-prem databases — we've seen it all and can build resilient bridges." },
    { q: "Who owns the integration after launch?", a: "You do. Code, infrastructure, and documentation are yours. We offer optional managed operations." },
    { q: "How do you handle secrets?", a: "Encrypted vaults, IAM roles, and least-privilege access. No credentials in code, ever." },
  ],
  related: ["business-automation", "cloud-solutions", "analytics-dashboards"],
  seo: {
    title: "API Integrations | Custom Integration & Data Pipelines | Pleco Labs",
    description:
      "Reliable, observable API integrations, webhooks, and ETL pipelines. Connect your CRM, ERP, and SaaS tools with custom integrations engineered by Pleco Labs.",
  },
};

/* ---------- 6. UI/UX Design ---------- */
export const uiUxDesign: SolutionConfig = {
  slug: "ui-ux-design",
  path: "/solutions/ui-ux-design",
  title: "UI/UX Design",
  tagline: "Product design systems built for clarity, delight, and conversion.",
  Icon: Palette,
  accent: A.amber,
  capabilities: ["Product Design", "Design Systems", "Prototyping", "Motion & Interaction"],
  cardCta: "Explore UI/UX Design",
  heroBadge: "UI/UX DESIGN",
  heroHeadline: "Design that turns products into brands.",
  heroSub:
    "We craft the interfaces, flows, and motion that make your product feel premium — grounded in research, backed by systems, and shipped alongside engineering.",
  whatItIs: {
    paragraph:
      "Pleco Labs runs design as a partner to product and engineering. From discovery and IA to visual systems, prototyping, and motion — we make sure every screen is crafted, consistent, and conversion-focused. Design systems are documented and code-linked so teams stay fast.",
    problems: [
      "Interface feels inconsistent or dated",
      "Poor conversion or activation funnels",
      "Design and engineering out of sync",
      "No system — every screen reinvented",
    ],
    industries: ["SaaS", "Fintech", "E-commerce", "Healthcare", "Media", "Enterprise Software"],
  },
  features: [
    { title: "Product Design", desc: "Discovery, IA, flows, and high-fidelity UI.", Icon: Layout },
    { title: "Design Systems", desc: "Token-driven, code-linked, documented systems.", Icon: Ruler },
    { title: "Prototyping", desc: "Interactive prototypes for usability and stakeholder alignment.", Icon: MousePointerClick },
    { title: "Motion & Interaction", desc: "Micro-motion and transitions that feel premium.", Icon: Sparkles },
  ],
  benefits: [
    { label: "Conversion", metric: "+38%", desc: "Focused funnels and CTAs." },
    { label: "Task success", metric: "+52%", desc: "Better flows, less friction." },
    { label: "Time-in-app", metric: "+24%", desc: "Delight keeps users engaged." },
    { label: "Design debt", metric: "-80%", desc: "Systems replace one-offs." },
    { label: "Ship velocity", metric: "2x", desc: "Reusable components." },
    { label: "Support tickets", metric: "-33%", desc: "Clearer UI = fewer questions." },
  ],
  steps: [
    { name: "Research", desc: "Interviews, analytics, and heuristic reviews." },
    { name: "Architect", desc: "Information architecture and flow design." },
    { name: "System", desc: "Tokens, components, and patterns." },
    { name: "Craft", desc: "High-fidelity visuals and motion." },
    { name: "Prototype", desc: "Test with users, iterate fast." },
    { name: "Handoff", desc: "Code-linked specs, tokens, and QA." },
  ],
  integrations: [
    { name: "Figma", initial: "F" },
    { name: "Framer", initial: "FR" },
    { name: "Storybook", initial: "SB" },
    { name: "Notion", initial: "N" },
    { name: "Linear", initial: "L" },
    { name: "Tailwind", initial: "TW" },
    { name: "shadcn/ui", initial: "SH" },
    { name: "Rive", initial: "R" },
  ],
  faqs: [
    { q: "Do you offer design without engineering?", a: "Yes. We can be your product design partner even if you engineer in-house — with clean handoff, code-linked tokens, and QA loops." },
    { q: "Do you build design systems from scratch?", a: "Yes. Or we extend what you have — audit, unify, document, and code-link." },
    { q: "How do you measure design impact?", a: "Baseline metrics before the engagement, then track conversion, task success, retention, and NPS post-launch." },
    { q: "Which tools do you use?", a: "Figma primary, plus Framer/Rive for motion, and Storybook for code-linked components." },
  ],
  related: ["mobile-app-development", "business-automation", "analytics-dashboards"],
  seo: {
    title: "UI/UX Design | Product Design & Design Systems | Pleco Labs",
    description:
      "Premium product design, design systems, and prototyping. Pleco Labs designs interfaces that convert, delight, and scale — grounded in research and engineering.",
  },
};

/* ---------- 7. Cloud Solutions ---------- */
export const cloudSolutions: SolutionConfig = {
  slug: "cloud-solutions",
  path: "/solutions/cloud-solutions",
  title: "Cloud Solutions",
  tagline: "Scalable infrastructure on AWS, GCP, and Cloudflare edge.",
  Icon: Cloud,
  accent: A.sky,
  capabilities: ["Cloud Architecture", "DevOps & CI/CD", "Edge Deployments", "Security & Compliance"],
  cardCta: "Explore Cloud Solutions",
  heroBadge: "CLOUD SOLUTIONS",
  heroHeadline: "Infrastructure engineered for scale, speed, and security.",
  heroSub:
    "Architect, deploy, and operate cloud-native systems that scale from your first thousand users to your first million — without rewrites, surprise bills, or on-call nightmares.",
  whatItIs: {
    paragraph:
      "We design cloud architectures around your workload, cost profile, and compliance requirements. From edge deployments and serverless to VPCs and Kubernetes — we bring the pattern that fits, backed by IaC, CI/CD, and observability.",
    problems: [
      "Cloud bills growing faster than the business",
      "Slow deploys and painful releases",
      "Compliance and security gaps",
      "No confidence in scale or failover",
    ],
    industries: ["SaaS", "Fintech", "Healthcare", "Media", "E-commerce", "Enterprise"],
  },
  features: [
    { title: "Cloud Architecture", desc: "Right-sized designs for AWS, GCP, and Cloudflare.", Icon: Server },
    { title: "DevOps & CI/CD", desc: "Automated pipelines, IaC, and release safety.", Icon: Rocket },
    { title: "Edge Deployments", desc: "Sub-100ms latency worldwide with Cloudflare Workers.", Icon: Globe2 },
    { title: "Security & Compliance", desc: "SOC 2, HIPAA, and GDPR-aligned engineering.", Icon: ShieldCheck },
  ],
  benefits: [
    { label: "Cloud cost", metric: "-42%", desc: "Right-size and reserve." },
    { label: "Deploy time", metric: "-85%", desc: "From hours to minutes." },
    { label: "Uptime", metric: "99.99%", desc: "Multi-region resilience." },
    { label: "P95 latency", metric: "<100ms", desc: "Edge-first architecture." },
    { label: "Compliance", metric: "SOC 2", desc: "Ready for enterprise buyers." },
    { label: "MTTR", metric: "-70%", desc: "Faster recovery from incidents." },
  ],
  steps: [
    { name: "Assess", desc: "Audit current infra, cost, and risk." },
    { name: "Design", desc: "Target architecture with clear trade-offs." },
    { name: "Automate", desc: "IaC, CI/CD, and secret management." },
    { name: "Migrate", desc: "Zero-downtime rollout." },
    { name: "Observe", desc: "Logs, metrics, traces, and alerts." },
    { name: "Optimize", desc: "Ongoing cost and performance tuning." },
  ],
  integrations: [
    { name: "AWS", initial: "AW" },
    { name: "GCP", initial: "GC" },
    { name: "Cloudflare", initial: "CF" },
    { name: "Vercel", initial: "V" },
    { name: "Supabase", initial: "S" },
    { name: "Docker", initial: "D" },
    { name: "Terraform", initial: "T" },
    { name: "Datadog", initial: "DD" },
  ],
  faqs: [
    { q: "Do you manage infrastructure long-term?", a: "Yes — optional managed operations with SLAs, on-call, and continuous cost optimization." },
    { q: "AWS, GCP, or Cloudflare?", a: "Whichever fits your workload. Often a hybrid: AWS/GCP for stateful services, Cloudflare for edge and static delivery." },
    { q: "Can you help with SOC 2 or HIPAA?", a: "Yes. We build controls and evidence flows into the platform so audits are painless." },
    { q: "What about existing infra?", a: "We modernize incrementally — no big-bang rewrites. Legacy systems can be strangled, wrapped, or migrated in phases." },
  ],
  related: ["api-integrations", "mobile-app-development", "analytics-dashboards"],
  seo: {
    title: "Cloud Solutions | AWS, GCP & Cloudflare Architecture | Pleco Labs",
    description:
      "Cloud architecture, DevOps, edge deployments, and security. Pleco Labs builds and operates scalable, cost-optimized cloud infrastructure on AWS, GCP, and Cloudflare.",
  },
};

/* ---------- 8. Analytics & Dashboards ---------- */
export const analyticsDashboards: SolutionConfig = {
  slug: "analytics-dashboards",
  path: "/solutions/analytics-dashboards",
  title: "Analytics & Dashboards",
  tagline: "Business intelligence and real-time operational visibility.",
  Icon: LineChart,
  accent: A.emerald,
  capabilities: ["Executive Dashboards", "Product Analytics", "Data Warehouse", "Realtime Ops"],
  cardCta: "Explore Analytics",
  heroBadge: "ANALYTICS & DASHBOARDS",
  heroHeadline: "Every decision, backed by data you trust.",
  heroSub:
    "From executive dashboards to realtime ops screens — Pleco Labs designs data platforms, models, and interfaces that turn your operational data into fast, confident decisions.",
  whatItIs: {
    paragraph:
      "We build the full analytics stack: data warehouse, transformation layer, semantic models, and beautiful dashboards. Teams get self-serve analysis; leadership gets a single source of truth; operations get realtime signals that drive action.",
    problems: [
      "Reporting takes days and answers are stale",
      "Every team has their own numbers",
      "Leadership flies blind between board decks",
      "No realtime visibility into operations",
    ],
    industries: ["SaaS", "E-commerce", "Logistics", "Finance", "Healthcare", "Media"],
  },
  features: [
    { title: "Executive Dashboards", desc: "KPIs, drilldowns, and board-ready views.", Icon: BarChart3 },
    { title: "Product Analytics", desc: "Funnels, retention, and cohort analysis.", Icon: PieChart },
    { title: "Data Warehouse", desc: "Modeled, versioned, tested data on modern stacks.", Icon: Table },
    { title: "Realtime Ops", desc: "Live screens for support, ops, and revenue.", Icon: Eye },
  ],
  benefits: [
    { label: "Decision speed", metric: "5x", desc: "Answers in seconds, not days." },
    { label: "One truth", metric: "100%", desc: "Aligned metrics across teams." },
    { label: "Analyst time", metric: "-60%", desc: "Self-serve replaces ad-hoc." },
    { label: "Realtime", metric: "<10s", desc: "Freshness for ops screens." },
    { label: "Trust", metric: "+42%", desc: "Tested, documented data." },
    { label: "Cost", metric: "-35%", desc: "Modern stacks beat legacy BI." },
  ],
  steps: [
    { name: "Discover", desc: "Business questions and success metrics." },
    { name: "Model", desc: "Warehouse, transformations, and semantic layer." },
    { name: "Design", desc: "Executive and team dashboards." },
    { name: "Build", desc: "Ship dashboards, embeds, and ops screens." },
    { name: "Enable", desc: "Train teams to self-serve." },
    { name: "Evolve", desc: "New metrics, new views, ongoing quality." },
  ],
  integrations: [
    { name: "Snowflake", initial: "SF" },
    { name: "BigQuery", initial: "BQ" },
    { name: "Postgres", initial: "PG" },
    { name: "dbt", initial: "DB" },
    { name: "Metabase", initial: "MB" },
    { name: "Looker", initial: "LK" },
    { name: "Segment", initial: "SG" },
    { name: "Supabase", initial: "S" },
  ],
  faqs: [
    { q: "Which BI tool do you use?", a: "We're tool-agnostic. Metabase, Looker, Superset, or fully-custom embedded — we pick per team maturity and budget." },
    { q: "Do you build the data warehouse too?", a: "Yes. Ingestion, modeling, transformations, and quality tests — plus documentation." },
    { q: "How long until we see dashboards?", a: "A first executive dashboard typically ships in 4–6 weeks, then we expand coverage in iterations." },
    { q: "Can you embed analytics into our product?", a: "Yes. Multi-tenant embedded analytics with row-level security and custom UI." },
  ],
  related: ["business-automation", "api-integrations", "cloud-solutions"],
  seo: {
    title: "Analytics & Dashboards | Data Platforms & BI | Pleco Labs",
    description:
      "Executive dashboards, product analytics, and realtime operational visibility. Pleco Labs designs modern data warehouses and BI on Snowflake, BigQuery, and Postgres.",
  },
};

/* ---------- registry ---------- */
export const SOLUTIONS: Record<import("./types").SolutionSlug, SolutionConfig> = {
  "ai-agents": aiAgents,
  "business-automation": businessAutomation,
  "mobile-app-development": mobileAppDevelopment,
  "whatsapp-automation": whatsappAutomation,
  "api-integrations": apiIntegrations,
  "ui-ux-design": uiUxDesign,
  "cloud-solutions": cloudSolutions,
  "analytics-dashboards": analyticsDashboards,
};

export const ECOSYSTEM_ORDER: import("./types").SolutionSlug[] = [
  "ai-agents",
  "business-automation",
  "mobile-app-development",
  "whatsapp-automation",
  "api-integrations",
  "ui-ux-design",
  "cloud-solutions",
  "analytics-dashboards",
];

// Suppress unused-import warnings for icons pulled in for future expansion
void BadgeCheck; void Gauge;
