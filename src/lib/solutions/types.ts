import type { LucideIcon } from "lucide-react";

export type SolutionSlug =
  | "ai-agents"
  | "business-automation"
  | "mobile-app-development"
  | "whatsapp-automation"
  | "api-integrations"
  | "ui-ux-design"
  | "cloud-solutions"
  | "analytics-dashboards";

export type Accent = {
  from: string; // hex/rgba for illustration wash start
  to: string; // hex/rgba for illustration wash end
  ring: string; // border tint
  glow: string; // radial glow
  text: string; // accent text on dark
};

export type Feature = { title: string; desc: string; Icon: LucideIcon };
export type Benefit = { label: string; metric: string; desc: string };
export type Step = { name: string; desc: string };
export type Integration = { name: string; initial: string };
export type FAQ = { q: string; a: string };

export type SolutionConfig = {
  slug: SolutionSlug;
  path: `/solutions/${SolutionSlug}`;
  title: string;
  tagline: string; // short one-liner used on card
  Icon: LucideIcon;
  accent: Accent;

  // Card
  capabilities: string[]; // 3-4 chips
  cardCta: string; // "Explore AI Agents"

  // Hero (detail page)
  heroBadge: string; // "AI AGENTS"
  heroHeadline: string;
  heroSub: string;

  // What it is
  whatItIs: {
    paragraph: string;
    problems: string[];
    industries: string[];
  };

  // Features
  features: Feature[];

  // Benefits
  benefits: Benefit[];

  // How it works
  steps: Step[];

  // Integrations
  integrations: Integration[];

  // FAQ
  faqs: FAQ[];

  // Related solutions
  related: SolutionSlug[];

  // SEO
  seo: {
    title: string;
    description: string;
  };
};
