import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import type { SolutionConfig } from "@/lib/solutions/types";
import { EcosystemCard } from "./EcosystemCard";
import { FadeUp, FloatY, Stagger, StaggerItem } from "./motion";
import { SOLUTIONS } from "@/lib/solutions/data";
import { BrandLogo } from "@/components/site/BrandLogo";
import {
  BadgeCheck,
  CheckCircle2,
  ChevronDown,
  Sparkles,
  TrendingUp,
  Shield,
  Timer,
  Zap,
  Building2,
  DollarSign,
  BarChart3,
} from "lucide-react";

const SITE_URL = "https://pleco-glow-engine.lovable.app";

/* ============================== shared shell ============================ */

function DetailBackgroundFX({ accent }: { accent: SolutionConfig["accent"] }) {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute -top-40 left-1/2 h-[700px] w-[1100px] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
        style={{ background: `radial-gradient(closest-side, ${accent.glow}, transparent 70%)` }}
      />
      <div
        className="absolute bottom-[-200px] right-[-120px] h-[500px] w-[500px] rounded-full opacity-40 blur-3xl"
        style={{ background: `radial-gradient(closest-side, ${accent.from}55, transparent 70%)` }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(255,255,255,0.05),transparent_60%)]" />
      <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,0.9)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.9)_1px,transparent_1px)] [background-size:56px_56px]" />
    </div>
  );
}

function DetailNav() {
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

  const links: { label: string; href: string; internal?: boolean }[] = [
    { label: "Solutions", href: "/solutions", internal: true },
    { label: "How We Work", href: "/how-we-work" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="mx-auto mt-4 max-w-7xl px-4">
        <div
          className={`glass-strong flex h-14 items-center justify-between rounded-2xl px-3 pl-4 transition-all duration-300 sm:px-4 sm:pl-5 ${
            scrolled ? "shadow-[0_10px_40px_-12px_rgba(0,0,0,0.6)]" : ""
          }`}
        >
          <Link to="/" aria-label="PlecoLab home">
            <BrandLogo />
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            {links.map((l) =>
              l.internal ? (
                <Link
                  key={l.label}
                  to={l.href}
                  className="text-[13.5px] font-medium text-white/65 transition-colors hover:text-white"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {l.label}
                </Link>
              ) : (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-[13.5px] font-medium text-white/65 transition-colors hover:text-white"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {l.label}
                </a>
              ),
            )}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="/#contact"
              className="hidden h-9 items-center gap-1.5 rounded-full bg-gradient-to-r from-rose-500 to-red-500 px-4 text-[13px] font-semibold text-white shadow-[0_10px_30px_-10px_rgba(244,63,94,0.7)] transition-transform hover:-translate-y-0.5 sm:inline-flex"
            >
              Start a Project
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-white/80 md:hidden"
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
              <Link
                key={l.label}
                to={l.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-xl px-4 py-3.5 text-[15px] font-medium text-white/80 hover:bg-white/[0.05] hover:text-white"
              >
                <span>{l.label}</span>
                <ArrowRight className="h-4 w-4 text-white/40" />
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

function DetailFooter() {
  return (
    <footer className="mt-24 border-t border-white/[0.06] py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 md:flex-row">
        <Link to="/" aria-label="PlecoLab home">
          <BrandLogo />
        </Link>
        <p className="text-[12px] text-white/45">
          © {new Date().getFullYear()} Pleco Labs. Technology that helps businesses scale.
        </p>
        <div className="flex gap-6 text-[12px] text-white/50">
          <Link to="/solutions" className="hover:text-white/80">
            Solutions
          </Link>
          <a href="/#contact" className="hover:text-white/80">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ================================ sections ============================== */

function Breadcrumbs({ config }: { config: SolutionConfig }) {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 pt-8">
      <ol className="flex flex-wrap items-center gap-2 text-[12px] text-white/50">
        <li>
          <Link to="/" className="hover:text-white/80">
            Home
          </Link>
        </li>
        <li className="text-white/30">/</li>
        <li>
          <Link to="/solutions" className="hover:text-white/80">
            Solutions
          </Link>
        </li>
        <li className="text-white/30">/</li>
        <li className="text-white/80">{config.title}</li>
      </ol>
    </nav>
  );
}

function Hero({ config }: { config: SolutionConfig }) {
  const { accent, Icon } = config;
  return (
    <section className="relative mx-auto max-w-7xl px-4 pb-10 pt-8 md:pb-16 md:pt-14">
      <div className="grid items-center gap-10 md:grid-cols-[1.05fr_0.95fr] md:gap-16">
        <FadeUp>
          <span
            className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[10.5px] font-semibold uppercase tracking-[0.18em]"
            style={{ borderColor: accent.ring, background: `${accent.glow}`, color: accent.text }}
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: accent.text }} />
            {config.heroBadge}
          </span>
          <h1
            className="mt-5 text-[38px] font-semibold leading-[1.05] tracking-[-0.025em] text-white sm:text-[46px] md:text-[56px]"
            style={{ fontFamily: "Space Grotesk, Inter, sans-serif" }}
          >
            {config.heroHeadline}
          </h1>
          <p className="mt-5 max-w-[560px] text-[15.5px] leading-[1.7] text-white/65 sm:text-[16.5px]">
            {config.heroSub}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="/#contact"
              className="group inline-flex h-[52px] items-center gap-2 rounded-2xl px-6 text-[14.5px] font-semibold text-white transition-transform hover:-translate-y-0.5"
              style={{
                background: `linear-gradient(135deg, ${accent.from}, ${accent.to})`,
                boxShadow: `0 20px 50px -14px ${accent.glow}`,
              }}
            >
              Book a discovery call
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <Link
              to="/solutions"
              className="inline-flex h-[52px] items-center gap-2 rounded-2xl border border-white/12 bg-white/[0.03] px-5 text-[14px] font-medium text-white/85 backdrop-blur-xl hover:border-white/20"
            >
              <ArrowLeft className="h-4 w-4" />
              All solutions
            </Link>
          </div>
        </FadeUp>

        <FadeUp delay={0.15} className="relative">
          <HeroIllustration config={config} />
        </FadeUp>
      </div>

      {/* decorative icon watermark */}
      <div className="pointer-events-none absolute right-6 top-8 hidden opacity-[0.08] md:block">
        <Icon className="h-40 w-40" style={{ color: accent.text }} />
      </div>
    </section>
  );
}

function HeroIllustration({ config }: { config: SolutionConfig }) {
  const { accent, Icon } = config;
  return (
    <div className="relative aspect-[5/4] w-full">
      {/* glow disk */}
      <div
        className="absolute inset-4 rounded-[32px] blur-2xl"
        style={{ background: `radial-gradient(closest-side, ${accent.glow}, transparent 70%)` }}
      />
      {/* main glass panel */}
      <FloatY amplitude={6} duration={7} className="absolute inset-0">
        <div
          className="relative h-full w-full overflow-hidden rounded-[24px] border p-6 backdrop-blur-xl"
          style={{
            background: `linear-gradient(160deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 60%, ${accent.from}22 100%)`,
            borderColor: accent.ring,
            boxShadow: `0 30px 80px -30px ${accent.glow}, inset 0 1px 0 rgba(255,255,255,0.06)`,
          }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-xl border"
                style={{ background: `${accent.glow}`, borderColor: accent.ring }}
              >
                <Icon className="h-5 w-5" style={{ color: accent.text }} />
              </div>
              <div>
                <div className="text-[12.5px] font-semibold text-white">{config.title}</div>
                <div className="text-[10.5px] text-white/50">Pleco Labs · Live</div>
              </div>
            </div>
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_2px_rgba(52,211,153,0.6)]" />
          </div>

          {/* summary rows */}
          <div className="mt-6 space-y-3">
            {config.capabilities.slice(0, 4).map((c, i) => (
              <div
                key={c}
                className="flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.03] px-3 py-2.5"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="flex items-center gap-2.5">
                  <span
                    className="flex h-6 w-6 items-center justify-center rounded-md border text-[10px] font-semibold"
                    style={{ background: `${accent.glow}`, borderColor: accent.ring, color: accent.text }}
                  >
                    {i + 1}
                  </span>
                  <span className="text-[12.5px] font-medium text-white/85">{c}</span>
                </div>
                <BadgeCheck className="h-3.5 w-3.5" style={{ color: accent.text }} />
              </div>
            ))}
          </div>

          {/* metric row */}
          <div className="mt-5 grid grid-cols-3 gap-2">
            {config.benefits.slice(0, 3).map((b) => (
              <div key={b.label} className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-3">
                <div className="text-[10px] uppercase tracking-wider text-white/45">{b.label}</div>
                <div
                  className="mt-1 text-[16px] font-semibold tabular-nums"
                  style={{ color: accent.text, fontFamily: "Space Grotesk, Inter, sans-serif" }}
                >
                  {b.metric}
                </div>
              </div>
            ))}
          </div>
        </div>
      </FloatY>

      {/* floating pills */}
      <FloatY amplitude={10} duration={8} delay={0.3} className="absolute -right-2 top-8 hidden sm:block">
        <div
          className="glass-strong flex items-center gap-2 rounded-full px-3 py-1.5"
          style={{ borderColor: accent.ring }}
        >
          <Sparkles className="h-3.5 w-3.5" style={{ color: accent.text }} />
          <span className="text-[11px] font-medium text-white/85">Enterprise-grade</span>
        </div>
      </FloatY>
      <FloatY amplitude={9} duration={9} delay={0.6} className="absolute -left-3 bottom-6 hidden sm:block">
        <div className="glass-strong flex items-center gap-2 rounded-full px-3 py-1.5">
          <TrendingUp className="h-3.5 w-3.5 text-emerald-300" />
          <span className="text-[11px] font-medium text-white/85">Built to scale</span>
        </div>
      </FloatY>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  sub,
  accent,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  accent: SolutionConfig["accent"];
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <FadeUp>
        <span
          className="text-[11px] font-semibold uppercase tracking-[0.18em]"
          style={{ color: accent.text }}
        >
          {eyebrow}
        </span>
        <h2
          className="mt-3 text-[32px] font-semibold tracking-[-0.02em] text-white sm:text-[38px] md:text-[44px]"
          style={{ fontFamily: "Space Grotesk, Inter, sans-serif" }}
        >
          {title}
        </h2>
        {sub && <p className="mt-4 text-[15px] leading-[1.7] text-white/60 sm:text-[16px]">{sub}</p>}
      </FadeUp>
    </div>
  );
}

function WhatItIs({ config }: { config: SolutionConfig }) {
  const { accent } = config;
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:py-24">
      <SectionHeading eyebrow="What it is" title={`Purpose-built for ${config.title.toLowerCase()}.`} accent={accent} />

      <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-[1.1fr_0.9fr]">
        <FadeUp>
          <p className="text-[15.5px] leading-[1.8] text-white/70">{config.whatItIs.paragraph}</p>
          <div className="mt-6">
            <h3 className="text-[12px] font-semibold uppercase tracking-[0.14em] text-white/50">
              Business problems we solve
            </h3>
            <ul className="mt-3 space-y-2.5">
              {config.whatItIs.problems.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-[14px] leading-[1.6] text-white/75">
                  <CheckCircle2 className="mt-1 h-4 w-4 flex-none" style={{ color: accent.text }} />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </FadeUp>
        <FadeUp delay={0.15}>
          <div
            className="rounded-2xl border p-6 backdrop-blur-md"
            style={{ background: `${accent.glow}`, borderColor: accent.ring }}
          >
            <h3 className="text-[12px] font-semibold uppercase tracking-[0.14em] text-white/60">
              Ideal industries
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {config.whatItIs.industries.map((i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.1] bg-white/[0.04] px-3 py-1.5 text-[12px] font-medium text-white/85"
                >
                  <Building2 className="h-3 w-3 opacity-70" />
                  {i}
                </span>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

function Features({ config }: { config: SolutionConfig }) {
  const { accent } = config;
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:py-24">
      <SectionHeading
        eyebrow="Key features"
        title="Everything your team needs — nothing you don't."
        accent={accent}
      />
      <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {config.features.map((f) => (
          <StaggerItem
            key={f.title}
            as="article"
            className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 transition-all duration-500 hover:-translate-y-0.5 hover:border-white/[0.16] hover:bg-white/[0.04]"
          >
            <div
              className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
              style={{ background: `radial-gradient(closest-side, ${accent.glow}, transparent 70%)` }}
            />
            <div className="relative">
              <div
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border transition-transform duration-500 group-hover:-rotate-6"
                style={{
                  background: `linear-gradient(135deg, ${accent.from}22, ${accent.to}14)`,
                  borderColor: accent.ring,
                }}
              >
                <f.Icon className="h-4.5 w-4.5" style={{ color: accent.text }} />
              </div>
              <h3
                className="mt-4 text-[15.5px] font-semibold text-white"
                style={{ fontFamily: "Space Grotesk, Inter, sans-serif" }}
              >
                {f.title}
              </h3>
              <p className="mt-2 text-[13px] leading-[1.6] text-white/60">{f.desc}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}

const BENEFIT_ICONS = [Timer, DollarSign, Zap, TrendingUp, Shield, BarChart3];

function Benefits({ config }: { config: SolutionConfig }) {
  const { accent } = config;
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:py-24">
      <SectionHeading eyebrow="Benefits" title="Outcomes clients feel in the first quarter." accent={accent} />
      <Stagger className="mt-12 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
        {config.benefits.map((b, i) => {
          const BIcon = BENEFIT_ICONS[i % BENEFIT_ICONS.length];
          return (
            <StaggerItem
              key={b.label}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 backdrop-blur-md transition-all duration-500 hover:-translate-y-0.5 hover:border-white/[0.16]"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/50">
                  {b.label}
                </span>
                <BIcon className="h-4 w-4" style={{ color: accent.text }} />
              </div>
              <div
                className="mt-2 text-[30px] font-semibold tracking-[-0.02em] tabular-nums"
                style={{ color: accent.text, fontFamily: "Space Grotesk, Inter, sans-serif" }}
              >
                {b.metric}
              </div>
              <p className="mt-1 text-[12.5px] leading-[1.55] text-white/60">{b.desc}</p>
            </StaggerItem>
          );
        })}
      </Stagger>
    </section>
  );
}

function HowItWorks({ config }: { config: SolutionConfig }) {
  const { accent } = config;
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:py-24">
      <SectionHeading eyebrow="How it works" title="A repeatable process, built for outcomes." accent={accent} />
      <div className="relative mt-14">
        <div
          className="absolute left-0 right-0 top-6 hidden h-px md:block"
          style={{ background: `linear-gradient(90deg, transparent, ${accent.ring}, transparent)` }}
        />
        <Stagger className="grid gap-6 md:grid-cols-3 lg:grid-cols-6">
          {config.steps.map((s, i) => (
            <StaggerItem key={s.name} className="relative">
              <div
                className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border text-[13px] font-semibold text-white backdrop-blur-md"
                style={{
                  background: `linear-gradient(135deg, ${accent.from}44, ${accent.to}22)`,
                  borderColor: accent.ring,
                  boxShadow: `0 10px 24px -14px ${accent.glow}`,
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3
                className="mt-4 text-center text-[14.5px] font-semibold text-white"
                style={{ fontFamily: "Space Grotesk, Inter, sans-serif" }}
              >
                {s.name}
              </h3>
              <p className="mt-1 text-center text-[12.5px] leading-[1.55] text-white/55">{s.desc}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function Integrations({ config }: { config: SolutionConfig }) {
  const { accent } = config;
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:py-24">
      <SectionHeading eyebrow="Integrations" title="Fits into the stack you already run." accent={accent} />
      <Stagger className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4">
        {config.integrations.map((int) => (
          <StaggerItem
            key={int.name}
            className="flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-white/[0.16]"
          >
            <span
              className="flex h-9 w-9 items-center justify-center rounded-lg border text-[12px] font-bold text-white"
              style={{ background: `linear-gradient(135deg, ${accent.from}55, ${accent.to}33)`, borderColor: accent.ring }}
            >
              {int.initial}
            </span>
            <span className="text-[13px] font-medium text-white/80">{int.name}</span>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}

function FAQItem({ q, a, accent }: { q: string; a: string; accent: SolutionConfig["accent"] }) {
  const [open, setOpen] = useState(false);
  return (
    <article className="overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-md transition-colors hover:border-white/[0.14]">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <h3 className="text-[14.5px] font-semibold text-white" style={{ fontFamily: "Space Grotesk, Inter, sans-serif" }}>
          {q}
        </h3>
        <ChevronDown
          className={`h-4 w-4 flex-none transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          style={{ color: accent.text }}
        />
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-500 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-[13.5px] leading-[1.7] text-white/65">{a}</p>
        </div>
      </div>
    </article>
  );
}

function FAQs({ config }: { config: SolutionConfig }) {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 md:py-24">
      <SectionHeading eyebrow="FAQ" title="Answers to the questions leadership asks." accent={config.accent} />
      <Stagger className="mt-10 space-y-3">
        {config.faqs.map((f) => (
          <StaggerItem key={f.q} as="div">
            <FAQItem q={f.q} a={f.a} accent={config.accent} />
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}

function Related({ config }: { config: SolutionConfig }) {
  const items = config.related.map((s) => SOLUTIONS[s]).filter(Boolean);
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:py-24">
      <SectionHeading
        eyebrow="Related solutions"
        title="Products that pair beautifully with this one."
        accent={config.accent}
      />
      <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((s) => (
          <StaggerItem key={s.slug} as="div">
            <EcosystemCard config={s} />
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}

function FinalCTA({ config }: { config: SolutionConfig }) {
  const { accent } = config;
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:py-24">
      <FadeUp>
        <div
          className="relative overflow-hidden rounded-3xl border p-10 text-center md:p-16"
          style={{
            background: `linear-gradient(140deg, rgba(255,255,255,0.03) 0%, ${accent.from}22 100%)`,
            borderColor: accent.ring,
            boxShadow: `0 40px 100px -40px ${accent.glow}`,
          }}
        >
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background: `radial-gradient(600px 300px at 50% 0%, ${accent.glow}, transparent 70%)`,
            }}
          />
          <div className="relative">
            <span
              className="text-[11px] font-semibold uppercase tracking-[0.18em]"
              style={{ color: accent.text }}
            >
              Let's build together
            </span>
            <h2
              className="mx-auto mt-3 max-w-3xl text-[32px] font-semibold tracking-[-0.02em] text-white sm:text-[40px] md:text-[48px]"
              style={{ fontFamily: "Space Grotesk, Inter, sans-serif" }}
            >
              Let's build your {config.title.toLowerCase()} solution.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-[1.7] text-white/65">
              A 30-minute discovery call to map your goals, constraints, and the fastest path to shipping.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="/#contact"
                className="inline-flex h-[52px] items-center gap-2 rounded-2xl px-6 text-[14.5px] font-semibold text-white transition-transform hover:-translate-y-0.5"
                style={{
                  background: `linear-gradient(135deg, ${accent.from}, ${accent.to})`,
                  boxShadow: `0 20px 50px -14px ${accent.glow}`,
                }}
              >
                Book discovery call
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <Link
                to="/solutions"
                className="inline-flex h-[52px] items-center gap-2 rounded-2xl border border-white/12 bg-white/[0.03] px-5 text-[14px] font-medium text-white/85 hover:border-white/20"
              >
                See all solutions
              </Link>
            </div>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}

/* ================================ template ============================== */

export function SolutionDetailTemplate({ config }: { config: SolutionConfig }) {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#060B1A] text-white antialiased">
      <DetailBackgroundFX accent={config.accent} />
      <DetailNav />
      <main>
        <Breadcrumbs config={config} />
        <article>
          <Hero config={config} />
          <WhatItIs config={config} />
          <Features config={config} />
          <Benefits config={config} />
          <HowItWorks config={config} />
          <Integrations config={config} />
          <FAQs config={config} />
          <Related config={config} />
          <FinalCTA config={config} />
        </article>
      </main>
      <DetailFooter />
    </div>
  );
}

/* ============================ head builder helper ======================== */

export function buildSolutionHead(config: SolutionConfig) {
  const url = `${SITE_URL}${config.path}`;
  return {
    meta: [
      { title: config.seo.title },
      { name: "description", content: config.seo.description },
      { property: "og:title", content: config.seo.title },
      { property: "og:description", content: config.seo.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: config.seo.title },
      { name: "twitter:description", content: config.seo.description },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "Solutions", item: `${SITE_URL}/solutions` },
            { "@type": "ListItem", position: 3, name: config.title, item: url },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: config.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: config.title,
          description: config.seo.description,
          provider: {
            "@type": "Organization",
            name: "Pleco Labs",
            url: SITE_URL,
          },
          areaServed: "Global",
          url,
        }),
      },
    ],
  };
}

