import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  ChevronRight,
  Cloud,
  Code2,
  Cpu,
  Database,
  Globe,
  LayoutDashboard,
  LineChart,
  Lock,
  Menu,
  MessageCircle,
  Palette,
  Plug,
  Rocket,
  Shield,
  Smartphone,
  Sparkles,
  Users,
  Workflow,
  X,
  Zap,
} from "lucide-react";

const SITE_URL = "https://pleco-glow-engine.lovable.app";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions | Custom Website Development & CRM Solutions | Pleco Labs" },
      {
        name: "description",
        content:
          "Discover Pleco Labs' technology solutions, including custom website development, CRM development, AI-powered business automation, and scalable software solutions designed for modern businesses.",
      },
      {
        name: "keywords",
        content:
          "Website Development, Custom CRM Development, Business Solutions, Software Development Company, Business Automation, Enterprise CRM, SaaS Development, API Integration, Workflow Automation",
      },
      { property: "og:title", content: "Solutions | Pleco Labs" },
      {
        property: "og:description",
        content:
          "Custom websites, CRM platforms, AI agents, and business automation engineered as the digital foundation of modern businesses.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/solutions` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Solutions | Pleco Labs" },
      {
        name: "twitter:description",
        content:
          "Custom websites, CRM platforms, AI agents, and business automation engineered for growth.",
      },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/solutions` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "Solutions", item: `${SITE_URL}/solutions` },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Pleco Labs",
          url: SITE_URL,
          logo: `${SITE_URL}/favicon.svg`,
          sameAs: [],
        }),
      },
    ],
  }),
  component: SolutionsPage,
});

/* ------------------------------ Page shell ------------------------------- */

function SolutionsPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#060B1A] text-white antialiased">
      <BackgroundFX />
      <SolutionsNav />
      <main>
        <Breadcrumbs />
        <Hero />
        <FeaturedSolutions />
        <MoreSolutions />
        <WhyPleco />
        <Process />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

/* --------------------------- Background effects --------------------------- */

function BackgroundFX() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(120,80,255,0.18),transparent_60%),radial-gradient(900px_500px_at_100%_10%,rgba(56,120,255,0.14),transparent_60%),radial-gradient(800px_600px_at_50%_120%,rgba(230,50,80,0.12),transparent_60%)]" />
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />
    </div>
  );
}

/* ---------------------------------- Nav ---------------------------------- */

function SolutionsNav() {
  const links = [
    { label: "Solutions", href: "/solutions" },
    { label: "How We Work", href: "/how-we-work" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Contact", href: "/#contact" },
  ];
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let raf = 0;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      raf = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 8);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="mx-auto mt-4 max-w-7xl px-4">
        <div
          className={`glass-strong flex h-14 items-center justify-between rounded-2xl px-3 pl-4 transition-all duration-300 sm:px-4 sm:pl-5 ${
            scrolled ? "shadow-[0_10px_40px_-12px_rgba(0,0,0,0.6)]" : ""
          }`}
        >
          <Link to="/" className="flex items-center gap-2">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-white/95 to-white/70 text-[13px] font-bold text-[#060B1A]">
              P
            </span>
            <span
              className="text-[15px] font-semibold tracking-[-0.01em] text-white"
              style={{ fontFamily: "Space Grotesk, Inter, sans-serif" }}
            >
              Pleco Lab
            </span>
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="group relative text-[13.5px] font-medium tracking-[-0.005em] text-white/65 transition-colors duration-200 hover:text-white"
              >
                {l.label}
                <span className="pointer-events-none absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-white/0 via-white/70 to-white/0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="/#contact"
              className="hidden h-9 items-center gap-1.5 overflow-hidden rounded-full bg-gradient-to-r from-[#ff4d63] via-[#ff3355] to-[#e02040] px-4 text-[13px] font-medium text-white shadow-[0_10px_30px_-10px_rgba(255,60,90,0.6)] transition hover:brightness-110 sm:inline-flex"
            >
              Start a Project <ArrowRight className="h-3.5 w-3.5" />
            </a>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-white/80 transition hover:bg-white/[0.07] hover:text-white md:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-x-0 top-[76px] z-40 mx-auto max-w-7xl px-4 transition-all duration-300 md:hidden ${
          open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <div className="glass-strong overflow-hidden rounded-2xl p-2">
          <nav className="flex flex-col">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-xl px-4 py-3.5 text-[15px] font-medium text-white/80 transition hover:bg-white/[0.05] hover:text-white"
              >
                <span>{l.label}</span>
                <ChevronRight className="h-4 w-4 text-white/40" />
              </a>
            ))}
            <a
              href="/#contact"
              className="mt-2 flex h-11 items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-[#ff4d63] to-[#e02040] px-4 text-[14px] font-medium text-white"
              onClick={() => setOpen(false)}
            >
              Start a Project <ArrowRight className="h-4 w-4" />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

/* ------------------------------ Breadcrumbs ------------------------------ */

function Breadcrumbs() {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mx-auto max-w-7xl px-4 pt-8 text-[12.5px] text-white/50"
    >
      <ol className="flex items-center gap-1.5">
        <li>
          <Link to="/" className="hover:text-white/80">
            Home
          </Link>
        </li>
        <li aria-hidden>
          <ChevronRight className="h-3.5 w-3.5 text-white/30" />
        </li>
        <li aria-current="page" className="text-white/80">
          Solutions
        </li>
      </ol>
    </nav>
  );
}

/* ---------------------------------- Hero --------------------------------- */

function Hero() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 pt-10 pb-20 sm:pt-14 md:pb-28">
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-white/70">
            <Sparkles className="h-3 w-3" />
            Our Solutions
          </span>
          <h1
            className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl md:text-[56px] md:leading-[1.02]"
            style={{ fontFamily: "Space Grotesk, Inter, sans-serif" }}
          >
            We don't build websites.{" "}
            <span className="bg-gradient-to-r from-white via-white/90 to-white/60 bg-clip-text text-transparent">
              We build the digital foundation
            </span>{" "}
            of modern businesses.
          </h1>
          <p className="mt-6 max-w-xl text-[15.5px] leading-[1.7] text-white/70">
            Technology that shapes brands, strengthens relationships, and creates lasting impact.
          </p>
          <p className="mt-4 max-w-xl text-[14.5px] leading-[1.75] text-white/55">
            At Pleco Labs, every website and CRM platform is crafted with a single purpose — to
            strengthen your brand, simplify your operations, and create meaningful digital
            experiences that help businesses grow with confidence.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="/#contact"
              className="group inline-flex h-11 items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#ff4d63] via-[#ff3355] to-[#e02040] px-5 text-[14px] font-medium text-white shadow-[0_10px_30px_-10px_rgba(255,60,90,0.6)] transition hover:brightness-110"
            >
              Start Your Project
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            <a
              href="/case-studies"
              className="inline-flex h-11 items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-5 text-[14px] font-medium text-white/85 transition hover:bg-white/[0.08]"
            >
              View Our Work
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-white/8 pt-6 text-left">
            {[
              { k: "50+", v: "Products shipped" },
              { k: "8+", v: "Industries served" },
              { k: "24h", v: "Response SLA" },
            ].map((s) => (
              <div key={s.v}>
                <div
                  className="text-2xl font-semibold tabular-nums text-white"
                  style={{ fontFamily: "Space Grotesk, Inter, sans-serif" }}
                >
                  {s.k}
                </div>
                <div className="mt-1 text-[12px] text-white/55">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-[5/4] w-full max-w-[560px]">
      <div className="absolute -inset-10 rounded-[40px] bg-[radial-gradient(circle_at_30%_30%,rgba(120,80,255,0.35),transparent_55%),radial-gradient(circle_at_75%_75%,rgba(56,140,255,0.28),transparent_55%)] blur-2xl" />
      {/* Website mockup */}
      <div className="glass-strong absolute left-0 top-6 w-[68%] overflow-hidden rounded-2xl border border-white/10 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)]">
        <div className="flex items-center gap-1.5 border-b border-white/8 bg-white/[0.03] px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="ml-3 text-[10px] text-white/40">pleco-labs.com</span>
        </div>
        <div className="space-y-2 p-4">
          <div className="h-2 w-24 rounded-full bg-gradient-to-r from-white/70 to-white/20" />
          <div className="h-2 w-40 rounded-full bg-white/15" />
          <div className="mt-3 h-16 rounded-lg bg-gradient-to-br from-indigo-400/25 via-white/5 to-transparent" />
          <div className="grid grid-cols-3 gap-2 pt-1">
            <div className="h-8 rounded-md bg-white/8" />
            <div className="h-8 rounded-md bg-white/8" />
            <div className="h-8 rounded-md bg-white/8" />
          </div>
        </div>
      </div>

      {/* CRM Dashboard */}
      <div className="glass-strong absolute bottom-2 right-0 w-[64%] overflow-hidden rounded-2xl border border-white/10 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)]">
        <div className="flex items-center justify-between border-b border-white/8 bg-white/[0.03] px-3 py-2">
          <div className="flex items-center gap-2 text-[10px] text-white/60">
            <LayoutDashboard className="h-3 w-3" /> CRM · Overview
          </div>
          <span className="flex items-center gap-1 rounded-full bg-emerald-400/15 px-2 py-0.5 text-[9px] text-emerald-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Live
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2 p-3">
          {[
            { k: "Pipeline", v: "$1.24M" },
            { k: "Conversion", v: "38%" },
            { k: "Leads", v: "2,481" },
            { k: "MRR", v: "$92k" },
          ].map((c) => (
            <div key={c.k} className="rounded-lg border border-white/8 bg-white/[0.03] p-2">
              <div className="text-[9px] uppercase tracking-wider text-white/45">{c.k}</div>
              <div className="mt-0.5 text-[13px] font-semibold text-white tabular-nums">{c.v}</div>
            </div>
          ))}
          <div className="col-span-2 flex h-14 items-end gap-1 rounded-lg border border-white/8 bg-white/[0.02] p-2">
            {[30, 55, 42, 68, 48, 72, 60, 85, 74, 92].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm bg-gradient-to-t from-[#7859ff]/60 to-[#a78bff]"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Floating tag */}
      <div className="glass absolute -right-2 top-0 flex items-center gap-2 rounded-full border border-white/12 px-3 py-1.5 text-[11px] text-white/80 shadow-lg">
        <Bot className="h-3.5 w-3.5 text-indigo-300" />
        AI Assist · online
      </div>
      <div className="glass absolute -left-4 bottom-14 flex items-center gap-2 rounded-full border border-white/12 px-3 py-1.5 text-[11px] text-white/80 shadow-lg">
        <Zap className="h-3.5 w-3.5 text-amber-300" />
        3 workflows automated
      </div>
    </div>
  );
}

/* --------------------------- Featured Solutions --------------------------- */

function FeaturedSolutions() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:py-24" aria-labelledby="featured-heading">
      <div className="mb-12 max-w-2xl">
        <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/50">
          Featured Solutions
        </span>
        <h2
          id="featured-heading"
          className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl md:text-[42px]"
          style={{ fontFamily: "Space Grotesk, Inter, sans-serif" }}
        >
          Two disciplines. One product-engineering standard.
        </h2>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <FeaturedCard
          eyebrow="Website Development"
          headline="We create digital experiences that build trust and drive growth."
          description="We design and develop high-performance websites that become the digital foundation of your business. Every website is crafted to deliver exceptional user experience, strengthen your brand, improve search visibility, and convert visitors into customers."
          capabilities={[
            "Corporate Websites",
            "Business Websites",
            "Landing Pages",
            "E-Commerce",
            "CMS Development",
            "SEO Optimization",
            "Performance Optimization",
            "Mobile Responsive Design",
          ]}
          visual={<BrowserMockup />}
        />
        <FeaturedCard
          eyebrow="Custom CRM Development"
          headline="Business software built around the way your company works."
          description="We develop intelligent CRM platforms that centralize customer relationships, automate workflows, improve collaboration, and provide complete visibility across your business operations. Every CRM is custom-built to match your processes — not the other way around."
          capabilities={[
            "Lead Management",
            "Customer Management",
            "Sales Pipeline",
            "Document Management",
            "Workflow Automation",
            "Reports & Analytics",
            "Role-Based Access",
            "API Integrations",
          ]}
          visual={<CRMMockup />}
        />
      </div>
    </section>
  );
}

function FeaturedCard({
  eyebrow,
  headline,
  description,
  capabilities,
  visual,
}: {
  eyebrow: string;
  headline: string;
  description: string;
  capabilities: string[];
  visual: React.ReactNode;
}) {
  return (
    <article className="glass-strong group relative overflow-hidden rounded-3xl border border-white/10 p-8 transition-all duration-500 hover:border-white/15 md:p-10">
      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-gradient-to-br from-indigo-500/20 to-transparent blur-3xl" />
      <div className="relative">
        <div className="text-[11px] font-medium uppercase tracking-[0.16em] text-indigo-300/90">
          {eyebrow}
        </div>
        <h3
          className="mt-3 text-[26px] font-semibold leading-[1.15] tracking-[-0.02em] text-white sm:text-[28px]"
          style={{ fontFamily: "Space Grotesk, Inter, sans-serif" }}
        >
          {headline}
        </h3>
        <p className="mt-4 text-[14.5px] leading-[1.75] text-white/65">{description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {capabilities.map((c) => (
            <span
              key={c}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[12px] text-white/75"
            >
              {c}
            </span>
          ))}
        </div>

        <div className="mt-8">{visual}</div>

        <div className="mt-8">
          <a
            href="/#contact"
            className="group/link inline-flex items-center gap-1.5 text-[13.5px] font-medium text-white/90 transition hover:text-white"
          >
            Learn More
            <ArrowRight className="h-3.5 w-3.5 transition group-hover/link:translate-x-0.5" />
          </a>
        </div>
      </div>
    </article>
  );
}

function BrowserMockup() {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-black/40">
      <div className="flex items-center gap-1.5 border-b border-white/8 bg-white/[0.03] px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-red-400/60" />
        <span className="h-2 w-2 rounded-full bg-yellow-400/60" />
        <span className="h-2 w-2 rounded-full bg-emerald-400/60" />
        <span className="ml-3 rounded bg-white/5 px-2 py-0.5 text-[10px] text-white/50">
          yourbrand.com
        </span>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between">
          <div className="h-3 w-24 rounded bg-white/70" />
          <div className="flex gap-3">
            <div className="h-2 w-10 rounded bg-white/25" />
            <div className="h-2 w-10 rounded bg-white/25" />
            <div className="h-2 w-10 rounded bg-white/25" />
          </div>
        </div>
        <div className="mt-6">
          <div className="h-3 w-3/4 rounded bg-gradient-to-r from-white/90 to-white/40" />
          <div className="mt-2 h-3 w-1/2 rounded bg-white/40" />
          <div className="mt-2 h-2 w-2/3 rounded bg-white/20" />
        </div>
        <div className="mt-5 grid grid-cols-3 gap-2">
          <div className="h-16 rounded-lg bg-gradient-to-br from-indigo-400/30 to-transparent" />
          <div className="h-16 rounded-lg bg-gradient-to-br from-fuchsia-400/25 to-transparent" />
          <div className="h-16 rounded-lg bg-gradient-to-br from-sky-400/25 to-transparent" />
        </div>
        <div className="mt-4 flex items-center gap-2">
          <div className="h-8 w-24 rounded-full bg-gradient-to-r from-[#ff4d63] to-[#e02040]" />
          <div className="h-8 w-20 rounded-full border border-white/10 bg-white/[0.03]" />
        </div>
      </div>
    </div>
  );
}

function CRMMockup() {
  const kpis = [
    { k: "Pipeline", v: "$1.24M", d: "+12.4%" },
    { k: "Won this month", v: "42", d: "+8" },
    { k: "Conversion", v: "38%", d: "+3.1%" },
  ];
  const stages = [
    { name: "New", count: 24, w: "35%" },
    { name: "Qualified", count: 18, w: "58%" },
    { name: "Proposal", count: 11, w: "72%" },
    { name: "Won", count: 7, w: "90%" },
  ];
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-black/40">
      <div className="flex items-center justify-between border-b border-white/8 bg-white/[0.03] px-3 py-2">
        <div className="flex items-center gap-2 text-[10.5px] text-white/60">
          <LayoutDashboard className="h-3 w-3" /> CRM · Sales
        </div>
        <span className="flex items-center gap-1 rounded-full bg-emerald-400/15 px-2 py-0.5 text-[9.5px] text-emerald-300">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Live
        </span>
      </div>
      <div className="grid grid-cols-3 gap-2 p-4">
        {kpis.map((k) => (
          <div
            key={k.k}
            className="rounded-lg border border-white/8 bg-white/[0.03] p-2.5"
          >
            <div className="text-[9.5px] uppercase tracking-wider text-white/45">{k.k}</div>
            <div className="mt-0.5 text-[14px] font-semibold tabular-nums text-white">{k.v}</div>
            <div className="text-[10px] text-emerald-300">{k.d}</div>
          </div>
        ))}
      </div>
      <div className="space-y-2 px-4 pb-4">
        {stages.map((s) => (
          <div key={s.name} className="flex items-center gap-3">
            <div className="w-20 text-[11px] text-white/60">{s.name}</div>
            <div className="relative h-2 flex-1 overflow-hidden rounded-full bg-white/6">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#7859ff] to-[#a78bff]"
                style={{ width: s.w }}
              />
            </div>
            <div className="w-8 text-right text-[11px] tabular-nums text-white/70">{s.count}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ----------------------------- Our Ecosystem ---------------------------- */

import { EcosystemCard } from "@/components/solutions/EcosystemCard";
import { SOLUTIONS, ECOSYSTEM_ORDER } from "@/lib/solutions/data";

function MoreSolutions() {
  return (
    <section
      className="mx-auto max-w-7xl px-4 py-16 md:py-24"
      aria-labelledby="ecosystem-heading"
    >
      <div className="mx-auto mb-14 max-w-3xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-white/70">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-300" />
          Our Ecosystem
        </span>
        <h2
          id="ecosystem-heading"
          className="mt-4 text-[32px] font-semibold tracking-[-0.02em] text-white sm:text-[40px] md:text-[46px]"
          style={{ fontFamily: "Space Grotesk, Inter, sans-serif" }}
        >
          Technology that grows with your business.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-[1.7] text-white/60 sm:text-[16px]">
          Every solution is designed to solve real business challenges. Whether you're
          building your digital presence, automating operations, or developing enterprise
          software, Pleco Labs delivers technology that scales with your ambitions.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {ECOSYSTEM_ORDER.map((slug) => (
          <EcosystemCard key={slug} config={SOLUTIONS[slug]} />
        ))}
      </div>
    </section>
  );
}


/* ------------------------------ Why Pleco -------------------------------- */

const WHY = [
  {
    title: "Tailor-Made Solutions",
    desc: "No templates. Every product is engineered around your operations, brand, and growth model.",
    Icon: Users,
  },
  {
    title: "Scalable Architecture",
    desc: "Systems designed to scale from your first thousand users to your first million — without rewrites.",
    Icon: Cpu,
  },
  {
    title: "Security First",
    desc: "Role-based access, encryption at rest, audited APIs, and SOC-aligned engineering practices.",
    Icon: Shield,
  },
  {
    title: "Future Ready Technology",
    desc: "Modern stacks, AI-native workflows, and edge infrastructure that stay relevant for years.",
    Icon: Rocket,
  },
];

function WhyPleco() {
  return (
    <section
      className="mx-auto max-w-7xl px-4 py-16 md:py-24"
      aria-labelledby="why-heading"
    >
      <div className="mb-12 max-w-2xl">
        <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/50">
          Why Pleco Labs
        </span>
        <h2
          id="why-heading"
          className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl md:text-[42px]"
          style={{ fontFamily: "Space Grotesk, Inter, sans-serif" }}
        >
          Technology built for long-term business growth.
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {WHY.map(({ title, desc, Icon }) => (
          <article
            key={title}
            className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.025] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/[0.045]"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(400px_120px_at_50%_0%,rgba(120,80,255,0.15),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-indigo-300">
                <Icon className="h-4.5 w-4.5" />
              </div>
              <h3
                className="mt-5 text-[16.5px] font-semibold tracking-[-0.01em] text-white"
                style={{ fontFamily: "Space Grotesk, Inter, sans-serif" }}
              >
                {title}
              </h3>
              <p className="mt-2 text-[13px] leading-[1.65] text-white/60">{desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* --------------------------------- Process ------------------------------- */

const STEPS = [
  { name: "Discover", desc: "Deep dive into your operations, goals, and constraints.", Icon: Sparkles },
  { name: "Strategy", desc: "Define architecture, roadmap, and success metrics.", Icon: LineChart },
  { name: "Design", desc: "Craft flows, systems, and interfaces built for clarity.", Icon: Palette },
  { name: "Development", desc: "Engineer with modern stacks and reviewed code quality.", Icon: Code2 },
  { name: "Testing", desc: "Automated, security, and user acceptance testing.", Icon: Lock },
  { name: "Deployment", desc: "Zero-downtime rollout with observability from day one.", Icon: Rocket },
  { name: "Continuous Support", desc: "Ongoing iteration, performance, and product care.", Icon: Database },
];

function Process() {
  return (
    <section
      className="mx-auto max-w-7xl px-4 py-16 md:py-24"
      aria-labelledby="process-heading"
    >
      <div className="mb-12 max-w-2xl">
        <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/50">
          Development Process
        </span>
        <h2
          id="process-heading"
          className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl md:text-[42px]"
          style={{ fontFamily: "Space Grotesk, Inter, sans-serif" }}
        >
          How we turn ideas into powerful digital products.
        </h2>
      </div>

      <ol className="relative grid gap-4 md:grid-cols-3 lg:grid-cols-4">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent lg:block"
        />
        {STEPS.map((s, i) => (
          <li
            key={s.name}
            className="glass relative rounded-2xl border border-white/8 p-5 transition hover:border-white/15"
          >
            <div className="flex items-center justify-between">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/85">
                <s.Icon className="h-4.5 w-4.5" />
              </div>
              <span className="text-[11px] font-medium tabular-nums text-white/40">
                0{i + 1}
              </span>
            </div>
            <h3
              className="mt-4 text-[15.5px] font-semibold tracking-[-0.01em] text-white"
              style={{ fontFamily: "Space Grotesk, Inter, sans-serif" }}
            >
              {s.name}
            </h3>
            <p className="mt-1.5 text-[12.5px] leading-[1.6] text-white/55">{s.desc}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

/* -------------------------------- Final CTA ------------------------------ */

function FinalCTA() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-24 pt-8">
      <div className="glass-strong relative overflow-hidden rounded-3xl border border-white/10 px-6 py-14 text-center md:px-16 md:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_200px_at_50%_0%,rgba(120,80,255,0.28),transparent_70%),radial-gradient(500px_200px_at_50%_100%,rgba(255,60,90,0.18),transparent_70%)]" />
        <div className="relative mx-auto max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-white/70">
            <Globe className="h-3 w-3" />
            Let's build
          </span>
          <h2
            className="mt-5 text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-white sm:text-4xl md:text-[46px]"
            style={{ fontFamily: "Space Grotesk, Inter, sans-serif" }}
          >
            Ready to build the technology behind your next stage of growth?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[14.5px] leading-[1.75] text-white/65">
            Whether you need a high-performing website or a custom CRM platform, we'll help you
            build technology that creates lasting business value.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="/#contact"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-gradient-to-r from-[#ff4d63] via-[#ff3355] to-[#e02040] px-5 text-[14px] font-medium text-white shadow-[0_10px_30px_-10px_rgba(255,60,90,0.6)] transition hover:brightness-110"
            >
              Schedule a Discovery Call
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/#contact"
              className="inline-flex h-11 items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-5 text-[14px] font-medium text-white/85 transition hover:bg-white/[0.08]"
            >
              Contact Our Team
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- Footer ------------------------------- */

function Footer() {
  return (
    <footer className="border-t border-white/8 bg-black/30">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-2">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-white/95 to-white/70 text-[13px] font-bold text-[#060B1A]">
              P
            </span>
            <span
              className="text-[15px] font-semibold text-white"
              style={{ fontFamily: "Space Grotesk, Inter, sans-serif" }}
            >
              Pleco Lab
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-[13px] leading-[1.7] text-white/55">
            A premium product engineering studio building websites, CRMs, AI agents, and
            automation for growth-focused businesses.
          </p>
        </div>
        <div>
          <div className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/45">
            Solutions
          </div>
          <ul className="mt-4 space-y-2 text-[13.5px] text-white/70">
            <li><Link to="/solutions" className="hover:text-white">Website Development</Link></li>
            <li><Link to="/solutions" className="hover:text-white">Custom CRM</Link></li>
            <li><Link to="/solutions" className="hover:text-white">AI Agents</Link></li>
            <li><Link to="/solutions" className="hover:text-white">Automation</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/45">
            Company
          </div>
          <ul className="mt-4 space-y-2 text-[13.5px] text-white/70">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><a href="/case-studies" className="hover:text-white">Case Studies</a></li>
            <li><a href="/how-we-work" className="hover:text-white">How We Work</a></li>
            <li><a href="/#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-[12px] text-white/45 sm:flex-row">
          <div>© {new Date().getFullYear()} Pleco Labs. All rights reserved.</div>
          <div>Delhi · Global delivery</div>
        </div>
      </div>
    </footer>
  );
}
