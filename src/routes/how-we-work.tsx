import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  Check,
  Compass,
  LayoutGrid,
  Map,
  Play,
  Rocket,
  Search,
  Terminal,
  TrendingUp,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { BackgroundFX, SiteFooter, SiteNav } from "@/components/site/SiteChrome";
import { FadeUp, FloatY } from "@/components/solutions/motion";

const SITE_URL = "https://pleco-glow-engine.lovable.app";

export const Route = createFileRoute("/how-we-work")({
  head: () => ({
    meta: [
      { title: "How We Work | Pleco Lab" },
      {
        name: "description",
        content:
          "Discover how Pleco Lab turns business challenges into strategy, design, technology and scalable digital solutions — a clear six-step process from discovery to scale.",
      },
      { property: "og:title", content: "How We Work | Pleco Lab" },
      {
        property: "og:description",
        content:
          "Ideas to impact in six steps: discover, plan, design, build, launch and scale with Pleco Lab.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/how-we-work` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "How We Work | Pleco Lab" },
      {
        name: "twitter:description",
        content:
          "A clear, collaborative six-step process that turns business goals into scalable technology.",
      },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/how-we-work` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
            {
              "@type": "ListItem",
              position: 2,
              name: "How We Work",
              item: `${SITE_URL}/how-we-work`,
            },
          ],
        }),
      },
    ],
  }),
  component: HowWeWorkPage,
});

function HowWeWorkPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#060B1A] text-white antialiased">
      <BackgroundFX />
      <SiteNav active="How We Work" />
      <main>
        <HowWeWorkHero />
        <ProcessIntro />
        <ProcessTimeline />
        <HowWeWorkCTA />
      </main>
      <SiteFooter />
    </div>
  );
}

/* ---------------------------------- Hero ---------------------------------- */

const ORBIT_STEPS: { n: string; label: string; Icon: LucideIcon }[] = [
  { n: "01", label: "Discover", Icon: Search },
  { n: "02", label: "Plan", Icon: Map },
  { n: "03", label: "Design", Icon: LayoutGrid },
  { n: "04", label: "Build", Icon: Terminal },
  { n: "05", label: "Launch", Icon: Rocket },
  { n: "06", label: "Scale", Icon: TrendingUp },
];

function HowWeWorkHero() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 pb-8 pt-14 sm:pt-20">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-10">
        <div>
          <FadeUp>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10.5px] font-medium uppercase tracking-[0.18em] text-white/60">
              <span className="h-1.5 w-1.5 rounded-full bg-[#60a5fa]" />
              Our Approach
            </span>
          </FadeUp>
          <FadeUp delay={0.05} as="h1">
            <span
              className="mt-5 block text-[40px] font-semibold leading-[1.05] tracking-[-0.03em] text-white sm:text-[56px] lg:text-[62px]"
              style={{ fontFamily: "Space Grotesk, Inter, sans-serif" }}
            >
              How We{" "}
              <span className="bg-gradient-to-r from-[#60a5fa] via-[#7c9dff] to-[#a78bfa] bg-clip-text text-transparent">
                Work
              </span>
            </span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p
              className="mt-4 text-[19px] font-medium tracking-[-0.01em] text-white/85 sm:text-[22px]"
              style={{ fontFamily: "Space Grotesk, Inter, sans-serif" }}
            >
              Ideas to impact. In 6 steps.
            </p>
            <p className="mt-3 max-w-xl text-[14.5px] leading-[1.75] text-white/60">
              We turn complex business challenges into clear strategies, digital
              experiences and scalable technology.
            </p>
          </FadeUp>
          <FadeUp delay={0.15}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="/#contact"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-gradient-to-r from-[#ff4d63] via-[#ff3355] to-[#e02040] px-5 text-[14px] font-medium text-white shadow-[0_14px_36px_-14px_rgba(255,60,90,0.65)] transition hover:brightness-110"
              >
                Start a Project <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#process"
                className="inline-flex h-11 items-center gap-2.5 rounded-full border border-white/12 bg-white/[0.03] pl-1.5 pr-5 text-[14px] font-medium text-white/85 transition hover:border-white/25 hover:bg-white/[0.06]"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#60a5fa]/40 bg-[#60a5fa]/10">
                  <Play className="h-3.5 w-3.5 text-[#93c5fd]" />
                </span>
                See How It Works
                <span className="text-[12px] text-white/45">2 min</span>
              </a>
            </div>
          </FadeUp>
        </div>

        <HeroOrbit />
      </div>
    </section>
  );
}

function HeroOrbit() {
  return (
    <div className="relative mx-auto h-[360px] w-full max-w-[560px] sm:h-[440px] lg:h-[500px]">
      {/* ambient planetary glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(closest-side at 55% 50%, rgba(59,130,246,0.22), transparent 70%), radial-gradient(closest-side at 30% 75%, rgba(167,139,250,0.16), transparent 70%)",
          filter: "blur(4px)",
        }}
      />
      <svg
        aria-hidden
        viewBox="0 0 560 500"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="hww-orbit" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.05" />
            <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.08" />
          </linearGradient>
        </defs>
        <ellipse cx="280" cy="250" rx="205" ry="185" fill="none" stroke="rgba(255,255,255,0.06)" />
        <ellipse cx="280" cy="250" rx="145" ry="130" fill="none" stroke="rgba(255,255,255,0.05)" />
        <path
          d="M60 400 C 120 190, 300 60, 500 130"
          fill="none"
          stroke="url(#hww-orbit)"
          strokeWidth="1.5"
          strokeDasharray="6 10"
          className="hww-orbit-dash"
        />
        <circle cx="280" cy="250" r="58" fill="rgba(96,165,250,0.06)" stroke="rgba(96,165,250,0.18)" />
      </svg>

      {/* floating glass panels along the curve */}
      {ORBIT_STEPS.map((s, i) => {
        const pos = [
          { left: "2%", top: "70%" },
          { left: "13%", top: "38%" },
          { left: "34%", top: "14%" },
          { left: "58%", top: "60%" },
          { left: "66%", top: "26%" },
          { left: "72%", top: "82%" },
        ][i]!;
        return (
          <FloatY
            key={s.label}
            className="absolute"
            amplitude={5 + (i % 3) * 2}
            duration={6 + i * 0.7}
            delay={i * 0.25}
          >
            <div
              className="glass-strong flex w-[124px] items-center gap-2.5 rounded-xl border border-white/10 px-3 py-2.5 shadow-[0_18px_40px_-22px_rgba(0,0,0,0.8)] sm:w-[138px]"
              style={{ position: "relative" }}
            >
              <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-[#60a5fa]/25 bg-[#60a5fa]/10">
                <s.Icon className="h-3.5 w-3.5 text-[#93c5fd]" />
              </span>
              <span className="min-w-0">
                <span className="block text-[9.5px] font-medium tracking-[0.14em] text-white/40">
                  {s.n}
                </span>
                <span className="block truncate text-[12.5px] font-medium text-white/85">
                  {s.label}
                </span>
              </span>
            </div>
          </FloatY>
        );
      })}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ position: "absolute" }}
      />
      <style>{`
        .hww-orbit-dash { animation: hwwDash 22s linear infinite; }
        @keyframes hwwDash { to { stroke-dashoffset: -320; } }
        @media (prefers-reduced-motion: reduce) {
          .hww-orbit-dash { animation: none; }
        }
      `}</style>
      {/* absolute wrapper positioning for panels */}
      <style>{`
        .hww-orbit-panel { position: absolute; }
      `}</style>
    </div>
  );
}

/* ------------------------------ Process intro ----------------------------- */

function ProcessIntro() {
  return (
    <section id="process" className="mx-auto max-w-7xl scroll-mt-24 px-4 pt-20 sm:pt-28">
      <FadeUp className="max-w-2xl">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10.5px] font-medium uppercase tracking-[0.18em] text-white/60">
          <Compass className="h-3 w-3 text-[#93c5fd]" />
          The Process
        </span>
        <h2
          className="mt-5 text-[30px] font-semibold leading-[1.12] tracking-[-0.025em] text-white sm:text-[40px]"
          style={{ fontFamily: "Space Grotesk, Inter, sans-serif" }}
        >
          A simpler path to bigger results.
        </h2>
        <p className="mt-4 text-[14.5px] leading-[1.75] text-white/60">
          A clear, collaborative process to turn your goals into real business impact.
        </p>
      </FadeUp>
    </section>
  );
}

/* ----------------------------- Process timeline --------------------------- */

type StepData = {
  n: string;
  label: string;
  title: string;
  desc: string;
  points: string[];
  Icon: LucideIcon;
  visual: "discover" | "plan" | "design" | "build" | "launch" | "scale";
};

const STEPS: StepData[] = [
  {
    n: "01",
    label: "Discover",
    title: "Understand",
    desc: "We learn about your business, challenges and goals.",
    points: ["Business deep-dive", "Identify opportunities", "Define success metrics"],
    Icon: Search,
    visual: "discover",
  },
  {
    n: "02",
    label: "Plan",
    title: "Strategize",
    desc: "We create the right strategy and roadmap.",
    points: ["Solution architecture", "Technology selection", "Execution roadmap"],
    Icon: Map,
    visual: "plan",
  },
  {
    n: "03",
    label: "Design",
    title: "Design",
    desc: "We craft intuitive, modern and conversion-focused experiences.",
    points: ["UX/UI design", "Interactive prototypes", "Design system"],
    Icon: LayoutGrid,
    visual: "design",
  },
  {
    n: "04",
    label: "Build",
    title: "Develop",
    desc: "We build robust, scalable solutions with modern technology.",
    points: ["Custom development", "Integrations & automation", "AI-powered capabilities"],
    Icon: Terminal,
    visual: "build",
  },
  {
    n: "05",
    label: "Launch",
    title: "Launch",
    desc: "We test, optimize and deploy for real-world success.",
    points: ["Quality assurance", "Performance optimization", "Secure deployment"],
    Icon: Rocket,
    visual: "launch",
  },
  {
    n: "06",
    label: "Scale",
    title: "Grow",
    desc: "We support, optimize and scale as you grow.",
    points: ["Analytics & insights", "Continuous improvement", "Long-term partnership"],
    Icon: BarChart3,
    visual: "scale",
  },
];

function ProcessTimeline() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:py-20">
      <div className="relative">
        {/* vertical line */}
        <div
          aria-hidden
          className="absolute bottom-0 left-[7px] top-0 hidden w-px bg-gradient-to-b from-[#60a5fa]/0 via-[#60a5fa]/45 to-[#a78bfa]/0 md:block"
        />
        <ol className="space-y-5">
          {STEPS.map((s, i) => (
            <li key={s.n} className="relative md:pl-12">
              <span
                aria-hidden
                className="absolute left-0 top-9 hidden h-[15px] w-[15px] items-center justify-center rounded-full border border-[#60a5fa]/50 bg-[#0b1428] md:flex"
              >
                <span className="h-[5px] w-[5px] rounded-full bg-[#93c5fd]" />
              </span>
              <ProcessStep step={s} delay={Math.min(i, 3) * 0.05} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function ProcessStep({ step, delay }: { step: StepData; delay: number }) {
  const { Icon } = step;
  return (
    <FadeUp delay={delay}>
      <article className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 backdrop-blur-md transition-all duration-500 hover:border-[#60a5fa]/35 hover:bg-white/[0.045] hover:shadow-[0_24px_60px_-30px_rgba(59,130,246,0.5)] sm:p-6">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 -top-24 h-56 w-56 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
          style={{ background: "radial-gradient(closest-side, rgba(59,130,246,0.35), transparent 70%)" }}
        />
        <div className="relative grid gap-5 md:grid-cols-12 md:items-center">
          {/* number + label */}
          <div className="md:col-span-2">
            <div
              className="text-[30px] font-semibold leading-none tracking-[-0.03em] text-white/25 tabular-nums transition-colors duration-500 group-hover:text-white/45"
              style={{ fontFamily: "Space Grotesk, Inter, sans-serif" }}
            >
              {step.n}
            </div>
            <div className="mt-2 text-[10.5px] font-medium uppercase tracking-[0.2em] text-[#93c5fd]/80">
              {step.label}
            </div>
          </div>

          {/* icon + title + desc */}
          <div className="md:col-span-4">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[#60a5fa]/25 bg-[#60a5fa]/10 transition-transform duration-500 group-hover:scale-105">
              <Icon className="h-4 w-4 text-[#93c5fd]" />
            </span>
            <h3
              className="mt-3 text-[18px] font-semibold tracking-[-0.015em] text-white"
              style={{ fontFamily: "Space Grotesk, Inter, sans-serif" }}
            >
              {step.title}
            </h3>
            <p className="mt-1.5 text-[13.5px] leading-[1.7] text-white/60">{step.desc}</p>
          </div>

          {/* points */}
          <ul className="space-y-2 md:col-span-3">
            {step.points.map((p) => (
              <li key={p} className="flex items-center gap-2 text-[13px] text-white/70">
                <span className="inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-[#60a5fa]/30 bg-[#60a5fa]/10">
                  <Check className="h-2.5 w-2.5 text-[#93c5fd]" />
                </span>
                {p}
              </li>
            ))}
          </ul>

          {/* abstract visual */}
          <div className="hidden md:col-span-3 md:block">
            <StepVisual kind={step.visual} />
          </div>
        </div>
      </article>
    </FadeUp>
  );
}

function StepVisual({ kind }: { kind: StepData["visual"] }) {
  const stroke = "rgba(147,197,253,0.55)";
  const faint = "rgba(147,197,253,0.2)";
  return (
    <div className="relative h-[92px] w-full overflow-hidden rounded-xl border border-white/[0.06] bg-[#0a1density]">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(59,130,246,0.10), rgba(167,139,250,0.06))",
        }}
      />
      <svg viewBox="0 0 220 92" className="relative h-full w-full" aria-hidden>
        {kind === "discover" && (
          <>
            <path d="M10 78 L70 34 L110 60 L150 26 L210 78 Z" fill={faint} stroke={stroke} strokeWidth="1" />
            <circle cx="150" cy="34" r="14" fill="none" stroke={stroke} strokeWidth="1.2" />
            <line x1="160" y1="44" x2="176" y2="60" stroke={stroke} strokeWidth="1.4" />
          </>
        )}
        {kind === "plan" && (
          <>
            <path d="M14 74 C 60 74, 60 20, 106 20 S 152 70, 206 26" fill="none" stroke={stroke} strokeWidth="1.4" strokeDasharray="5 6" />
            <circle cx="14" cy="74" r="4" fill={stroke} />
            <circle cx="106" cy="20" r="4" fill={stroke} />
            <circle cx="206" cy="26" r="4" fill={stroke} />
          </>
        )}
        {kind === "design" && (
          <>
            <rect x="18" y="20" width="120" height="52" rx="8" fill={faint} stroke={stroke} strokeWidth="1" />
            <rect x="40" y="32" width="120" height="52" rx="8" fill="rgba(96,165,250,0.10)" stroke={stroke} strokeWidth="1" />
            <line x1="52" y1="48" x2="120" y2="48" stroke={stroke} strokeWidth="1.2" />
            <line x1="52" y1="60" x2="96" y2="60" stroke={faint} strokeWidth="1.2" />
          </>
        )}
        {kind === "build" && (
          <>
            {[0, 1, 2, 3].map((c) =>
              [0, 1].map((r) => (
                <rect
                  key={`${c}-${r}`}
                  x={26 + c * 44}
                  y={22 + r * 30}
                  width="34"
                  height="22"
                  rx="5"
                  fill={r === 0 ? faint : "rgba(96,165,250,0.09)"}
                  stroke={stroke}
                  strokeWidth="0.9"
                />
              )),
            )}
            <line x1="43" y1="44" x2="43" y2="52" stroke={stroke} strokeWidth="1" />
            <line x1="131" y1="44" x2="131" y2="52" stroke={stroke} strokeWidth="1" />
          </>
        )}
        {kind === "launch" && (
          <>
            <path d="M112 16 C 132 34, 132 56, 112 76 C 92 56, 92 34, 112 16 Z" fill={faint} stroke={stroke} strokeWidth="1.1" />
            <circle cx="112" cy="40" r="5" fill="none" stroke={stroke} strokeWidth="1.1" />
            <path d="M104 76 L112 90 L120 76" fill="none" stroke={stroke} strokeWidth="1.1" />
            <line x1="40" y1="70" x2="82" y2="70" stroke={faint} strokeWidth="1" />
            <line x1="140" y1="70" x2="184" y2="70" stroke={faint} strokeWidth="1" />
          </>
        )}
        {kind === "scale" && (
          <>
            <path d="M16 76 L64 58 L104 64 L146 36 L204 18" fill="none" stroke={stroke} strokeWidth="1.6" />
            <path d="M16 76 L64 58 L104 64 L146 36 L204 18 L204 84 L16 84 Z" fill={faint} opacity="0.5" />
            {[16, 64, 104, 146, 204].map((x, i) => (
              <circle key={x} cx={x} cy={[76, 58, 64, 36, 18][i]} r="2.6" fill={stroke} />
            ))}
          </>
        )}
      </svg>
    </div>
  );
}

/* ---------------------------------- CTA ----------------------------------- */

function HowWeWorkCTA() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-24">
      <FadeUp>
        <div className="relative overflow-hidden rounded-3xl border border-white/[0.09] bg-white/[0.03] p-8 backdrop-blur-md sm:p-12">
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 -right-24 h-[420px] w-[420px] rounded-full"
            style={{
              background:
                "radial-gradient(closest-side, rgba(59,130,246,0.22), rgba(167,139,250,0.10) 60%, transparent 75%)",
            }}
          />
          <svg
            aria-hidden
            viewBox="0 0 400 400"
            className="pointer-events-none absolute -bottom-24 -right-16 h-[320px] w-[320px] opacity-40"
          >
            <circle cx="200" cy="200" r="120" fill="none" stroke="rgba(147,197,253,0.22)" />
            <ellipse cx="200" cy="200" rx="180" ry="70" fill="none" stroke="rgba(167,139,250,0.18)" />
          </svg>

          <div className="relative grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10.5px] font-medium uppercase tracking-[0.18em] text-white/60">
                Let's Build Together
              </span>
              <h2
                className="mt-5 text-[28px] font-semibold leading-[1.15] tracking-[-0.025em] text-white sm:text-[38px]"
                style={{ fontFamily: "Space Grotesk, Inter, sans-serif" }}
              >
                You bring the vision.
                <br />
                We make it real.
              </h2>
              <p className="mt-4 max-w-md text-[14.5px] leading-[1.75] text-white/60">
                From strategy to scale — we're your partner at every step.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href="/#contact"
                  className="inline-flex h-11 items-center gap-2 rounded-full bg-gradient-to-r from-[#ff4d63] via-[#ff3355] to-[#e02040] px-5 text-[14px] font-medium text-white shadow-[0_14px_36px_-14px_rgba(255,60,90,0.65)] transition hover:brightness-110"
                >
                  Start a Project <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="/#contact"
                  className="inline-flex h-11 items-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-5 text-[14px] font-medium text-white/85 transition hover:border-white/25 hover:bg-white/[0.06]"
                >
                  Book a Call
                </a>
              </div>
              <Link
                to="/solutions"
                className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-medium text-[#93c5fd] hover:text-white"
              >
                Explore our solutions <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="relative">
              <p
                className="text-right text-[22px] leading-[1.5] text-white/25 sm:text-[26px]"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontStyle: "italic" }}
              >
                Ideas
                <br />
                Systems
                <br />
                Real Impact
              </p>
            </div>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
