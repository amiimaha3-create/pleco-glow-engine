# Ecosystem Grid Redesign + Solution Detail Pages

Transform the "More Solutions" section on `/solutions` into a premium product ecosystem showcase, and add a reusable template that powers dedicated pages for every supporting solution.

## 1. Section header rewrite

On `/solutions`, replace the "More ways we help businesses innovate" block with:

- Badge: `OUR ECOSYSTEM` (small pill, brand-red glow, uppercase tracking)
- Heading: `Technology that grows with your business.`
- Supporting text: the full paragraph from the brief.

Keep the section aligned with the existing typography scale (Space Grotesk display, Inter body) already used on the homepage/solutions page.

## 2. Remove flagship offerings from the grid

Website Development and CRM Development are already showcased above as immersive "Featured Solutions." Delete them from this grid so it contains only the supporting ecosystem: AI Agents, Business Automation, Mobile Apps, WhatsApp Automation, API Integrations, UI/UX Design, Cloud Solutions, Analytics Dashboards.

## 3. Premium ecosystem card component

Build a new `EcosystemCard` used by all 8 tiles.

Each card includes:

- Large premium icon in a glass tile (icon-specific gradient wash)
- Product mini-illustration (compact, per-solution SVG mini-mock: chart, chat bubbles, workflow, etc.)
- Product title (Space Grotesk, tight tracking)
- Short 2-line description
- 3–4 key capabilities as small chips
- `Explore <Solution> →` CTA with arrow slide

Card treatment (matches homepage premium language):

- Glassmorphism surface (`bg-white/[0.03]`, backdrop-blur, subtle inner shadow)
- Animated gradient border (conic sweep on hover)
- Hover: slight scale (1.02), border glow, background illumination, CTA arrow translate, icon micro-motion, ambient floating hint
- Fixed height per card so grid stays layout-stable (per project layout-lock rules)

## 4. Grid layout

- Desktop: 4-column bento variation (2 rows x 4 cards) with subtle asymmetry — first card in each row spans slightly larger visual emphasis via inner content, not grid-column-span (keeps rhythm calm)
- Tablet: 2 columns
- Mobile: 1 column, full-width, reduced illustration
- Section background: soft radial glow behind grid to lift it from the page

## 5. Dedicated solution routes

Create 8 new routes under `src/routes/solutions.<slug>.tsx`:

```text
/solutions/ai-agents
/solutions/business-automation
/solutions/mobile-app-development
/solutions/whatsapp-automation
/solutions/api-integrations
/solutions/ui-ux-design
/solutions/cloud-solutions
/solutions/analytics-dashboards
```

Each route is a **thin content file** that imports a shared template and passes a config object.

## 6. Reusable `SolutionDetailTemplate`

Location: `src/components/solutions/SolutionDetailTemplate.tsx`. Data shape: `src/lib/solutions/types.ts` + one config module per solution under `src/lib/solutions/*.ts`.

Template sections (all animated with Framer Motion — fade/slide on scroll, parallax on hero visual, floating UI accents):

1. **Hero** — headline, sub, primary CTA, secondary CTA, premium product illustration
2. **What it is** — long-form explainer, business problems solved, ideal industries chip row
3. **Key features** — interactive card grid with mini-mocks and hover motion
4. **Benefits** — 6 metric tiles (Time saved, Cost, Productivity, Scalability, Security, ROI)
5. **How it works** — animated horizontal workflow (numbered steps + connecting flow line)
6. **Integrations** — logo strip (Meta, Google, Stripe, OpenAI, Supabase, Slack, WhatsApp, Microsoft)
7. **FAQ** — accordion, SEO-friendly
8. **Related solutions** — 3 linked cards (uses same `EcosystemCard`)
9. **Final CTA** — "Let's build your solution" + Book Discovery Call

All motion uses transform/opacity only (respects existing layout-stability rules).

## 7. SEO per detail page

Each route's `head()` returns:

- Unique `title`, `description`
- `og:title`, `og:description`, `og:url`, `og:type: "website"`, `twitter:card`
- `<link rel="canonical">` self-referencing `https://pleco-glow-engine.lovable.app/solutions/<slug>`
- JSON-LD scripts: `BreadcrumbList`, `FAQPage`, `Organization`
- Proper H1 (one per page) via template, H2 per section
- Semantic HTML (`<article>`, `<section>`, `<nav aria-label="Breadcrumb">`)

## 8. Wiring

- `EcosystemCard` uses TanStack `<Link to="/solutions/$slug" params={{ slug }}>` pattern via typed routes for each generated file
- Update Solutions page nav breadcrumbs where relevant
- No changes to homepage layout beyond linking (Solutions link already routes to `/solutions`)

## Technical details

- **Files added**
  - `src/components/solutions/EcosystemCard.tsx`
  - `src/components/solutions/SolutionDetailTemplate.tsx`
  - `src/components/solutions/motion.tsx` (small Framer Motion primitives: `FadeUp`, `FloatY`, `ParallaxLayer`)
  - `src/lib/solutions/types.ts`
  - `src/lib/solutions/ai-agents.ts`, `business-automation.ts`, `mobile-app-development.ts`, `whatsapp-automation.ts`, `api-integrations.ts`, `ui-ux-design.ts`, `cloud-solutions.ts`, `analytics-dashboards.ts`
  - 8 route files: `src/routes/solutions.<slug>.tsx`
- **Files edited**
  - `src/routes/solutions.tsx` — swap MoreSolutions section for new EcosystemGrid, remove Website Dev + CRM entries, new header copy
  - `src/styles.css` — add card gradient-border keyframes + ambient float utilities (transform/opacity only, GPU-safe)
- **Dependencies** — install `framer-motion` (used for scroll/fade/parallax and micro-interactions on detail pages)
- **Layout stability** — all cards use fixed heights (`h-[420px]` desktop, `h-auto` mobile), animated illustrations use `position: absolute` inside a locked container; charts are static SVGs (matches existing homepage rules)
- **Route type safety** — after creating route files, `routeTree.gen.ts` regenerates automatically; `<Link to="/solutions/ai-agents">` becomes type-safe

## Out of scope (this pass)

- Website Development and CRM Development already have flagship treatment above the grid — no changes to those blocks
- No CMS wiring; each solution is a typed config file (easy to edit, no rebuild-layout needed for new solutions)
- No new backend/database work

## Deliverable

After this change, `/solutions` reads: Hero → Featured (Website + CRM) → **Ecosystem grid (8 premium cards)** → Process → Why Pleco → CTA. Each ecosystem card links to a full detail page built from the same template, ready for future solutions by adding one config file.