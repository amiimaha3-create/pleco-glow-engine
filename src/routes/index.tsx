import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  LayoutDashboard,
  Globe2,
  Workflow,
  Bot,
  Users,
  MessageCircle,
  Code2,
  Plug,
  Plane,
  Stamp,
  GraduationCap,
  HeartPulse,
  Truck,
  ShoppingBag,
  Building2,
  Briefcase,
  ShieldCheck,
  Layers,
  Headphones,
  Check,
  CheckCircle2,
  TrendingUp,
  Star,
  Linkedin,
  Twitter,
  Github,
  Mail,
  MapPin,
  Search,
  Bell,
  Zap,
  Globe,
  Send,
  Phone,
  Activity,
  ChevronRight,
  Circle,
  Menu,
  X,
} from "lucide-react";
import {
  Area,
  AreaChart,
  Line,
  LineChart,
  ResponsiveContainer,
  Bar,
  BarChart,
} from "recharts";
import heroDeveloper from "@/assets/hero-developer.jpg";

/* ----------------------------- Hooks / Utilities ---------------------------- */

function useCountUp(target: number, duration = 900, decimals = 0) {
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);
  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(target * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);
  return decimals === 0 ? Math.round(value) : Number(value.toFixed(decimals));
}

function CountStat({
  value,
  suffix = "",
  prefix = "",
  decimals = 0,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}) {
  const v = useCountUp(value, 900, decimals);
  const formatted =
    decimals === 0 ? v.toLocaleString() : v.toFixed(decimals);
  return (
    <span className="stable-metric">
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

export const Route = createFileRoute("/")({
  component: Index,
});

/* ------------------------------- Page Shell ------------------------------- */

function Index() {
  return (
    <div
      className="relative min-h-screen overflow-x-hidden text-foreground"
      style={{ fontFamily: "Inter, system-ui, sans-serif" }}
    >
      <BackgroundFX />
      <Nav />
      <main className="relative">
        <Hero />
        <TrustStrip />
        <Services />
        <Industries />
        <WhyPleco />
        <CaseStudies />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

/* ------------------------------ Background FX ----------------------------- */

function BackgroundFX() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "#060B1A" }} />
      <div
        className="glow-blob animate-pulse-glow"
        style={{
          top: "-10%",
          left: "10%",
          width: 620,
          height: 620,
          background: "radial-gradient(circle, #4f46e5 0%, transparent 60%)",
        }}
      />
      <div
        className="glow-blob animate-pulse-glow"
        style={{
          top: "20%",
          right: "-10%",
          width: 720,
          height: 720,
          background: "radial-gradient(circle, #7c3aed 0%, transparent 60%)",
        }}
      />
      <div
        className="glow-blob"
        style={{
          top: "70%",
          left: "30%",
          width: 800,
          height: 600,
          background: "radial-gradient(circle, #1e3a8a 0%, transparent 65%)",
          opacity: 0.4,
        }}
      />
    </div>
  );
}

/* ----------------------------------- Nav ---------------------------------- */

function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative h-8 w-8">
        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-indigo-400 via-violet-500 to-fuchsia-500 opacity-90" />
        <div className="absolute inset-[2px] rounded-[7px] bg-[#0a1024] flex items-center justify-center">
          <div className="h-2.5 w-2.5 rounded-sm bg-gradient-to-br from-indigo-300 to-violet-400" />
        </div>
      </div>
      <span
        className="text-[17px] font-semibold tracking-tight text-white"
        style={{ fontFamily: "Space Grotesk, Inter, sans-serif" }}
      >
        Pleco<span className="text-indigo-300">Lab</span>
      </span>
    </div>
  );
}

function Nav() {
  const links = [
    { label: "Solutions", href: "#solutions" },
    { label: "How We Work", href: "#process" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Contact", href: "#contact" },
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
        const next = window.scrollY > 8;
        setScrolled((prev) => (prev === next ? prev : next));
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
          <Logo />
          <nav className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="group relative text-[13.5px] font-medium tracking-[-0.005em] text-white/65 transition-colors duration-200 hover:text-white"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {l.label}
                <span className="pointer-events-none absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-white/0 via-white/70 to-white/0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <CtaButton className="hidden sm:inline-flex">Start a Project</CtaButton>
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

      {/* Mobile menu */}
      <div
        className={`fixed inset-x-0 top-[76px] z-40 mx-auto max-w-7xl px-4 transition-all duration-300 md:hidden ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <div className="glass-strong overflow-hidden rounded-2xl p-2">
          <nav className="flex flex-col">
            {links.map((l, i) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-[15px] font-medium text-white/80 transition-all duration-300 hover:bg-white/[0.05] hover:text-white ${
                  open ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
                }`}
                style={{
                  fontFamily: "Inter, sans-serif",
                  transitionDelay: open ? `${i * 40}ms` : "0ms",
                }}
              >
                <span>{l.label}</span>
                <ChevronRight className="h-4 w-4 text-white/40" />
              </a>
            ))}
            <div className="mt-2 px-2 pb-1">
              <CtaButton className="w-full justify-center">Start a Project</CtaButton>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

/* --------------------------------- CTA ------------------------------------ */

function CtaButton({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href="#contact"
      className={`group relative inline-flex h-9 items-center gap-1.5 overflow-hidden rounded-full px-4 text-[13px] font-medium tracking-[-0.005em] text-white transition-transform duration-200 active:scale-[0.98] ${className}`}
      style={{
        fontFamily: "Inter, sans-serif",
        background: "linear-gradient(180deg, #f43f5e 0%, #e11d48 100%)",
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.25), 0 6px 20px -6px rgba(244,63,94,0.55), 0 0 0 1px rgba(244,63,94,0.4)",
      }}
    >
      <span className="relative z-10 inline-flex items-center gap-1.5">
        {children}
        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
      </span>
      <span
        className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: "linear-gradient(180deg, #fb7185 0%, #f43f5e 100%)" }}
      />
      <span
        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full"
      />
    </a>
  );
}

/* --------------------------------- Buttons -------------------------------- */

function PrimaryButton({
  children,
  size = "md",
  className = "",
}: {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const sizes = {
    sm: "h-9 px-3.5 text-[13px]",
    md: "h-11 px-5 text-sm",
    lg: "h-12 px-6 text-[15px]",
  };
  return (
    <button
      className={`btn-premium group relative inline-flex items-center gap-1.5 overflow-hidden rounded-full font-medium text-white active:scale-[0.98] ${sizes[size]} ${className}`}
      style={{
        background:
          "linear-gradient(180deg, #6366f1 0%, #4f46e5 100%)",
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.25), 0 6px 24px -6px rgba(99,102,241,0.6), 0 0 0 1px rgba(99,102,241,0.4)",
      }}
    >
      <span className="relative z-10 inline-flex items-center gap-1.5">{children}</span>
      <span
        className="absolute inset-0 opacity-0 transition group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(180deg, #818cf8 0%, #6366f1 100%)",
        }}
      />
      <span
        className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-white/15 opacity-0 transition-all duration-700 group-hover:left-[110%] group-hover:opacity-100"
        aria-hidden
      />
    </button>
  );
}

function GhostButton({
  children,
  size = "md",
  className = "",
}: {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const sizes = {
    sm: "h-9 px-3.5 text-[13px]",
    md: "h-11 px-5 text-sm",
    lg: "h-12 px-6 text-[15px]",
  };
  return (
    <button
      className={`inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] font-medium text-white/90 backdrop-blur transition hover:border-white/20 hover:bg-white/[0.07] active:scale-[0.98] ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
}

/* ----------------------------------- Hero --------------------------------- */

function Hero() {
  const stats: Array<{
    value: number;
    suffix?: string;
    prefix?: string;
    decimals?: number;
    l: string;
  }> = [
    { value: 250, suffix: "+", l: "Businesses served" },
    { value: 15, suffix: "+", l: "Countries" },
    { value: 98, suffix: "%", l: "Client satisfaction" },
    { value: 24, suffix: "/7", l: "Support" },
  ];

  return (
    <section className="relative pt-8 sm:pt-12 md:pt-16">
      <div className="absolute inset-0 -z-10 grid-bg" />

      {/* Hero ambient atmosphere */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute left-1/2 top-[-120px] h-[520px] w-[1100px] -translate-x-1/2 opacity-80"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(99,102,241,0.28) 0%, rgba(124,58,237,0.18) 35%, transparent 70%)",
            filter: "blur(20px)",
          }}
        />
        <div
          className="light-streak"
          style={{ top: "22%", left: "8%", width: "38%" }}
        />
        <div
          className="light-streak"
          style={{ top: "62%", left: "20%", width: "30%", animationDelay: "3s" }}
        />
        <div
          className="light-streak"
          style={{ top: "40%", left: "55%", width: "34%", animationDelay: "5.5s" }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-start gap-8 md:gap-10 md:grid-cols-[1.05fr_1fr]">
          {/* Left */}
          <div className="relative">
            <div
              className="hero-fade-up mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[12px] text-white/80 backdrop-blur"
              style={{ animationDelay: "0ms" }}
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              Now onboarding clients across India, Africa & Asia
            </div>

            <h1
              className="hero-fade-up text-[36px] font-semibold leading-[1.02] tracking-[-0.035em] text-white sm:text-[56px] lg:text-[68px]"
              style={{
                fontFamily: "Space Grotesk, Inter, sans-serif",
                animationDelay: "120ms",
              }}
            >
              Technology that helps
              <br />
              businesses <span className="text-gradient-brand">scale.</span>
            </h1>

            <p
              className="hero-fade-up mt-4 max-w-xl text-[15px] leading-[1.65] text-white/70 sm:mt-5 sm:text-[16px]"
              style={{ animationDelay: "260ms" }}
            >
              Pleco Lab builds custom websites, CRM systems, AI agents,
              WhatsApp automation, and internal software for growth-focused
              SMEs and enterprises.
            </p>

            <div
              className="hero-fade-up mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
              style={{ animationDelay: "380ms" }}
            >
              <PrimaryButton size="lg" className="w-full justify-center sm:w-auto">
                Book free consultation
                <ArrowRight className="btn-arrow h-4 w-4" />
              </PrimaryButton>
              <GhostButton size="lg" className="w-full justify-center sm:w-auto">
                Explore solutions
              </GhostButton>
            </div>

            {/* Trust stats */}
            <div
              className="hero-fade-up mt-7 grid max-w-xl grid-cols-2 gap-x-6 gap-y-4 sm:mt-8 sm:grid-cols-4 sm:gap-x-8"
              style={{ animationDelay: "520ms" }}
            >
              {stats.map((s) => (
                <div key={s.l}>
                  <div
                    className="text-[22px] font-semibold tracking-[-0.03em] text-white sm:text-[26px]"
                    style={{ fontFamily: "Space Grotesk, Inter, sans-serif" }}
                  >
                    <CountStat
                      value={s.value}
                      suffix={s.suffix}
                      prefix={s.prefix}
                      decimals={s.decimals}
                    />
                  </div>
                  <div className="eyebrow mt-1.5">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — hero visual (all viewports) */}
          <div
            className="hero-fade-up relative"
            style={{ animationDelay: "300ms" }}
          >
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Hero Visual ------------------------------ */

function HeroVisual() {
  const floatCards: Array<{
    i: any;
    title: string;
    sub: string;
    pos: string;
    color: string;
    delay: string;
  }> = [
    {
      i: Globe,
      title: "Website",
      sub: "Next.js",
      pos: "top-[6%] left-[18%]",
      color: "from-indigo-500/25 to-indigo-500/5 border-indigo-400/30 text-indigo-200",
      delay: "0s",
    },
    {
      i: Users,
      title: "CRM",
      sub: "Leads & Pipeline",
      pos: "top-[14%] right-[6%]",
      color: "from-violet-500/25 to-violet-500/5 border-violet-400/30 text-violet-200",
      delay: "0.8s",
    },
    {
      i: MessageCircle,
      title: "WhatsApp",
      sub: "Automation",
      pos: "top-[28%] left-[4%]",
      color: "from-emerald-500/25 to-emerald-500/5 border-emerald-400/30 text-emerald-200",
      delay: "1.4s",
    },
    {
      i: Sparkles,
      title: "AI Agent",
      sub: "Powering Growth",
      pos: "top-[44%] right-[2%]",
      color: "from-fuchsia-500/25 to-fuchsia-500/5 border-fuchsia-400/30 text-fuchsia-200",
      delay: "0.4s",
    },
    {
      i: Activity,
      title: "Analytics",
      sub: "Real-time Insights",
      pos: "top-[60%] right-[10%]",
      color: "from-cyan-500/25 to-cyan-500/5 border-cyan-400/30 text-cyan-200",
      delay: "1.1s",
    },
  ];

  const trusted = [
    { i: Plane, t: "FlyWorld", s: "Travels" },
    { i: Stamp, t: "Global Visa", s: "Consultants" },
    { i: GraduationCap, t: "EduConnect", s: "Consultants" },
    { i: HeartPulse, t: "MediCare", s: "Healthcare" },
    { i: Truck, t: "TradeX", s: "Import / Export" },
  ];

  return (
    <div className="relative">
      {/* Ambient halos — atmospheric, behind everything */}
      <div
        className="pointer-events-none absolute -inset-20 -z-10"
        style={{
          background:
            "radial-gradient(50% 45% at 60% 38%, rgba(99,102,241,0.55), transparent 70%), radial-gradient(38% 38% at 20% 78%, rgba(168,85,247,0.38), transparent 72%), radial-gradient(35% 35% at 85% 75%, rgba(34,211,238,0.22), transparent 72%)",
          filter: "blur(28px)",
        }}
      />

      {/* Free-flow visual stage — no frame, no border */}
      <div className="relative aspect-square w-full overflow-visible">
        {/* Photo bleeds into background via radial mask + vignette */}
        <div
          className="absolute inset-0"
          style={{
            WebkitMaskImage:
              "radial-gradient(70% 70% at 55% 45%, #000 35%, rgba(0,0,0,0.85) 55%, rgba(0,0,0,0.35) 80%, transparent 100%)",
            maskImage:
              "radial-gradient(70% 70% at 55% 45%, #000 35%, rgba(0,0,0,0.85) 55%, rgba(0,0,0,0.35) 80%, transparent 100%)",
          }}
        >
          <img
            src={heroDeveloper}
            alt="Developer working on Pleco Lab dashboard"
            className="h-full w-full object-cover"
            width={1280}
            height={1280}
          />
          {/* Brand color wash + depth vignette */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(6,11,26,0.10) 0%, rgba(6,11,26,0.45) 70%, rgba(6,11,26,1) 100%), radial-gradient(60% 60% at 70% 30%, rgba(99,102,241,0.28), transparent 70%)",
            }}
          />
          {/* Subtle film grain via scanline */}
          <div className="pointer-events-none absolute inset-0">
            <div className="scanline" aria-hidden />
          </div>
        </div>

        {/* Light bloom — top-right */}
        <div
          className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(165,180,252,0.45), transparent 65%)",
            filter: "blur(30px)",
          }}
        />

        {/* Ambient drifting particles */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 400 400"
          aria-hidden
        >
          {Array.from({ length: 14 }).map((_, i) => {
            const cx = 30 + ((i * 53) % 340);
            const cy = 40 + ((i * 89) % 320);
            const r = 0.8 + (i % 3) * 0.4;
            const delay = `${(i * 0.45) % 5}s`;
            return (
              <circle
                key={i}
                cx={cx}
                cy={cy}
                r={r}
                fill={i % 2 === 0 ? "#c7d2fe" : "#a78bfa"}
                opacity="0.55"
                className="float-particle"
                style={{ animationDelay: delay }}
              />
            );
          })}
        </svg>

        {/* Floating feature nodes — glass, soft glow, free-floating */}
        {floatCards.map((c) => (
          <div
            key={c.title}
            className={`absolute ${c.pos} float-y`}
            style={{ animationDelay: c.delay }}
          >
            <div
              className="group/node relative flex items-center gap-2 rounded-2xl border border-white/10 px-3 py-2 backdrop-blur-xl"
              style={{
                background:
                  "linear-gradient(180deg, rgba(15,18,40,0.78) 0%, rgba(10,12,28,0.72) 100%)",
                boxShadow:
                  "0 14px 40px -14px rgba(99,102,241,0.55), inset 0 1px 0 rgba(255,255,255,0.08)",
              }}
            >
              {/* node glow ring */}
              <span
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-60"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(165,180,252,0.35), transparent 60%)",
                  WebkitMask:
                    "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                  padding: "1px",
                }}
              />
              <div
                className={`flex h-7 w-7 items-center justify-center rounded-lg border bg-gradient-to-br ${c.color}`}
              >
                <c.i className="h-3.5 w-3.5" />
              </div>
              <div className="leading-tight">
                <div className="text-[12px] font-semibold tracking-tight text-white">
                  {c.title}
                </div>
                <div className="text-[10px] text-white/55">{c.sub}</div>
              </div>
              {/* pulse indicator */}
              <span className="ml-1 h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse" />
            </div>
          </div>
        ))}

        {/* Animated connection paths between nodes */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 400 500"
          fill="none"
          aria-hidden
        >
          <defs>
            <linearGradient id="hv-stroke" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#a5b4fc" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#c084fc" stopOpacity="0.0" />
            </linearGradient>
            <linearGradient id="hv-stroke-2" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#67e8f9" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.0" />
            </linearGradient>
          </defs>
          <path
            d="M120 70 C 170 110, 220 110, 320 100"
            stroke="url(#hv-stroke)"
            strokeWidth="1.1"
            strokeDasharray="3 5"
            className="flow-line"
          />
          <path
            d="M60 180 C 130 200, 200 220, 360 240"
            stroke="url(#hv-stroke-2)"
            strokeWidth="1.1"
            strokeDasharray="3 5"
            className="flow-line"
          />
          <path
            d="M340 240 C 300 290, 280 320, 260 360"
            stroke="url(#hv-stroke)"
            strokeWidth="1.1"
            strokeDasharray="3 5"
            className="flow-line"
          />
          <path
            d="M70 320 C 140 320, 200 360, 280 380"
            stroke="url(#hv-stroke-2)"
            strokeWidth="1.1"
            strokeDasharray="3 5"
            className="flow-line"
          />
        </svg>
      </div>
    </div>
  );
}

/* --------------------------- Mobile Hero Preview -------------------------- */

function MobileHeroPreview() {
  const spark = Array.from({ length: 16 }, (_, i) => ({
    x: i,
    y: 30 + Math.sin(i / 1.6) * 10 + i * 2.2,
  }));
  return (
    <div className="relative">
      <div
        className="absolute -inset-8 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 40%, rgba(99,102,241,0.35), transparent 70%), radial-gradient(40% 40% at 80% 80%, rgba(168,85,247,0.25), transparent 70%)",
          filter: "blur(10px)",
        }}
      />
      <div
        className="glass-strong ring-glow relative overflow-hidden rounded-2xl p-4"
        style={{
          background:
            "linear-gradient(180deg, rgba(20,22,48,0.85) 0%, rgba(12,14,32,0.92) 100%)",
        }}
      >
        <div className="tech-grid" aria-hidden />

        {/* Header */}
        <div className="relative flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-rose-400/70" />
            <span className="h-2 w-2 rounded-full bg-amber-300/70" />
            <span className="h-2 w-2 rounded-full bg-emerald-400/70" />
          </div>
          <div className="inline-flex items-center gap-1 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-2 py-0.5 text-[10px] font-medium text-emerald-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
            Live
          </div>
        </div>

        {/* KPI row */}
        <div className="relative mt-3 grid grid-cols-3 gap-2">
          {[
            { l: "Revenue", v: "$148K", c: "#818cf8" },
            { l: "Leads", v: "1,284", c: "#a78bfa" },
            { l: "Conv.", v: "9.4%", c: "#67e8f9" },
          ].map((k) => (
            <div
              key={k.l}
              className="rounded-lg border border-white/[0.07] bg-white/[0.025] p-2"
            >
              <div className="text-[9.5px] text-white/45">{k.l}</div>
              <div
                className="mt-0.5 text-[13px] font-semibold tracking-tight text-white"
                style={{ fontFamily: "Space Grotesk, Inter, sans-serif" }}
              >
                {k.v}
              </div>
              <div
                className="mt-0.5 inline-flex items-center gap-0.5 text-[9px] font-medium"
                style={{ color: k.c }}
              >
                <TrendingUp className="h-2.5 w-2.5" /> +24%
              </div>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="relative mt-3 rounded-lg border border-white/[0.07] bg-white/[0.025] p-2.5">
          <div className="mb-1 flex items-center justify-between">
            <div className="text-[10.5px] font-medium text-white/90">Revenue growth</div>
            <div className="text-[9px] text-white/40">Live</div>
          </div>
          <div className="stable-chart h-[70px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={spark} margin={{ top: 2, right: 2, bottom: 0, left: 0 }}>
                <defs>
                  <linearGradient id="mg1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#818cf8" stopOpacity={0.55} />
                    <stop offset="100%" stopColor="#818cf8" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area
                  type="monotone"
                  dataKey="y"
                  stroke="#a5b4fc"
                  strokeWidth={2}
                  fill="url(#mg1)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Feature pills */}
        <div className="relative mt-3 grid grid-cols-2 gap-2">
          {[
            { i: Workflow, l: "Automations", c: "Active" },
            { i: Bot, l: "AI Agents", c: "14 deals" },
            { i: MessageCircle, l: "WhatsApp", c: "+312" },
            { i: Users, l: "CRM", c: "110 deals" },
          ].map((it) => (
            <div
              key={it.l}
              className="flex items-center gap-2 rounded-lg border border-white/[0.07] bg-white/[0.025] px-2.5 py-2"
            >
              <div className="flex h-6 w-6 items-center justify-center rounded-md border border-white/10 bg-gradient-to-br from-indigo-500/20 to-violet-500/5">
                <it.i className="h-3 w-3 text-indigo-200" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="truncate text-[10.5px] font-medium text-white/90">{it.l}</div>
                <div className="truncate text-[9.5px] text-white/45">{it.c}</div>
              </div>
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------------------------- Dashboard Mockup ---------------------------- */

function DashboardMockup() {
  // Live-updating revenue series
  const baseRevenue = [22, 28, 26, 34, 31, 42, 48, 44, 56, 61, 58, 72, 68, 81, 76, 92];
  const [revenue] = useState(baseRevenue.map((y, x) => ({ x, y })));
  const [revKpi] = useState(148.2);
  const [leadsKpi] = useState(1284);
  // NOTE: live setInterval updates removed — they re-rendered Recharts every
  // 1.1s causing constant SVG re-layout and KPI text width drift, which the
  // browser perceived as continuous vertical jitter. Data stays static.

  const bars = [12, 18, 14, 22, 19, 28, 24, 31, 27, 35, 30, 40].map((y, i) => ({ x: i, y }));

  // CRM pipeline stages
  const pipeline = [
    { stage: "New", count: 48, color: "#60a5fa", pct: 100 },
    { stage: "Qualified", count: 32, color: "#818cf8", pct: 72 },
    { stage: "Proposal", count: 19, color: "#a78bfa", pct: 48 },
    { stage: "Won", count: 11, color: "#34d399", pct: 28 },
  ];

  // Automation workflow nodes
  const workflowNodes = [
    { i: Globe, l: "Site form", active: true },
    { i: Bot, l: "AI qualify", active: true },
    { i: MessageCircle, l: "WhatsApp", active: true },
    { i: CheckCircle2, l: "CRM sync", active: false },
  ];

  // WhatsApp messages
  const messages = [
    { from: "Priya", text: "Booking confirmed for Mumbai → Dubai", time: "now", unread: true },
    { from: "AI Agent", text: "Auto-replied to 14 new leads", time: "1m", ai: true },
    { from: "Karim", text: "Need visa docs checklist", time: "3m" },
  ];

  return (
    <div className="relative">
      {/* Ambient halo behind the product */}
      <div
        className="absolute -inset-16 -z-10"
        style={{
          background:
            "radial-gradient(55% 45% at 50% 40%, rgba(99,102,241,0.40), transparent 70%), radial-gradient(40% 40% at 80% 80%, rgba(168,85,247,0.30), transparent 70%)",
          filter: "blur(10px)",
        }}
      />

      {/* Premium product surface */}
      <div
        className="glass-strong ring-glow float-y layout-locked relative h-[640px] min-h-[640px] max-h-[640px] overflow-hidden rounded-[20px] p-3"
        style={{
          background:
            "linear-gradient(180deg, rgba(20,22,48,0.85) 0%, rgba(12,14,32,0.92) 100%)",
        }}
      >
        {/* Top reflection */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)",
          }}
        />

        {/* Tech grid + scanline + corner brackets (animated) */}
        <div className="tech-grid" aria-hidden />
        <div className="scanline" aria-hidden />
        {/* Corner tech brackets */}
        <span className="pointer-events-none absolute left-2 top-2 h-3 w-3 border-l border-t border-indigo-300/60" aria-hidden />
        <span className="pointer-events-none absolute right-2 top-2 h-3 w-3 border-r border-t border-violet-300/60" aria-hidden />
        <span className="pointer-events-none absolute bottom-2 left-2 h-3 w-3 border-b border-l border-indigo-300/60" aria-hidden />
        <span className="pointer-events-none absolute bottom-2 right-2 h-3 w-3 border-b border-r border-violet-300/60" aria-hidden />

        {/* Orbiting tech particles */}
        <span
          className="orbit"
          style={{
            ['--r' as never]: '180px',
            animationDuration: '14s',
            background: '#a5b4fc',
            boxShadow: '0 0 12px #818cf8, 0 0 24px #818cf8',
          }}
          aria-hidden
        />
        <span
          className="orbit"
          style={{
            ['--r' as never]: '220px',
            animationDuration: '22s',
            animationDirection: 'reverse',
            background: '#c084fc',
            boxShadow: '0 0 10px #a78bfa, 0 0 20px #a78bfa',
            width: 6,
            height: 6,
            marginTop: -3,
            marginLeft: -3,
          }}
          aria-hidden
        />

        {/* Floating data flow line (top edge under chrome) */}
        <div
          className="dataflow pointer-events-none absolute left-0 right-0 top-[40px] h-px opacity-70"
          aria-hidden
        />

        {/* Window chrome */}
        <div className="flex items-center justify-between border-b border-white/[0.06] px-2 pb-2.5">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
          </div>
          <div className="flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10.5px] text-white/55">
            <ShieldCheck className="h-3 w-3 text-emerald-300/80" />
            app.plecolab.io / workspace
          </div>
          <div className="flex items-center gap-1.5">
            <Search className="h-3 w-3 text-white/35" />
            <Bell className="h-3 w-3 text-white/35" />
            <div className="h-5 w-5 rounded-full bg-gradient-to-br from-indigo-400 to-violet-500 ring-1 ring-white/20" />
          </div>
        </div>

        {/* Body */}
        <div className="grid grid-cols-[132px,1fr] gap-3 pt-3">
          {/* Sidebar */}
          <div className="space-y-0.5 px-1">
            {[
              { i: LayoutDashboard, l: "Overview", a: true },
              { i: Users, l: "CRM" },
              { i: Workflow, l: "Automations" },
              { i: Bot, l: "AI Agents" },
              { i: MessageCircle, l: "Inbox", badge: 4 },
              { i: Globe, l: "Websites" },
              { i: ShieldCheck, l: "Settings" },
            ].map((it) => (
              <div
                key={it.l}
                className={`group flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-[11.5px] transition ${
                  it.a
                    ? "bg-gradient-to-r from-indigo-500/20 to-violet-500/10 text-white ring-1 ring-inset ring-indigo-400/25"
                    : "text-white/55 hover:bg-white/[0.04] hover:text-white"
                }`}
              >
                <it.i className="h-3.5 w-3.5" />
                <span className="flex-1">{it.l}</span>
                {it.badge ? (
                  <span className="rounded-full bg-indigo-500/90 px-1.5 text-[9px] font-medium text-white">
                    {it.badge}
                  </span>
                ) : null}
              </div>
            ))}
            <div className="mt-3 rounded-lg border border-white/10 bg-gradient-to-br from-indigo-500/15 to-violet-500/10 p-2.5">
              <div className="flex items-center gap-1.5">
                <Sparkles className="h-3 w-3 text-indigo-300" />
                <div className="text-[10.5px] font-medium text-white/95">Pleco AI</div>
              </div>
              <div className="mt-1 text-[9.5px] leading-snug text-white/55">
                14 deals auto-closed this week
              </div>
            </div>
          </div>

          {/* Main */}
          <div className="space-y-2.5 pr-1">
            {/* Header */}
            <div className="flex items-center justify-between px-0.5">
              <div>
                <div className="text-[10px] uppercase tracking-wider text-white/40">
                  Workspace
                </div>
                <div className="text-[13px] font-semibold text-white">
                  Growth overview
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="inline-flex items-center gap-1 rounded-md border border-emerald-400/25 bg-emerald-400/10 px-1.5 py-0.5 text-[9.5px] font-medium text-emerald-300">
                  <span className="relative inline-flex h-1.5 w-1.5">
                    <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/70" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  </span>
                  Live
                </div>
                <div className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[10px] text-white/60">
                  This month
                </div>
              </div>
            </div>

            {/* KPI row */}
            <div className="grid grid-cols-3 gap-2">
              {[
                {
                  l: "Revenue",
                  v: `$${revKpi.toFixed(1)}K`,
                  d: "+24.6%",
                  c: "#818cf8",
                  ic: TrendingUp,
                },
                {
                  l: "Active leads",
                  v: leadsKpi.toLocaleString(),
                  d: "+18.2%",
                  c: "#a78bfa",
                  ic: Users,
                },
                {
                  l: "Conv. rate",
                  v: "9.4%",
                  d: "+3.1%",
                  c: "#67e8f9",
                  ic: Activity,
                },
              ].map((k) => (
                <div
                  key={k.l}
                  className="group relative h-[78px] min-h-[78px] max-h-[78px] overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.025] p-2.5 transition hover:border-white/15 hover:bg-white/[0.04]"
                >
                  <div className="flex items-center justify-between">
                    <div className="text-[10px] text-white/50">{k.l}</div>
                    <k.ic className="h-3 w-3 text-white/30" />
                  </div>
                  <div
                    className="stable-metric mt-0.5 min-w-[64px] text-[15px] font-semibold tracking-tight text-white"
                    style={{ fontFamily: "Space Grotesk, Inter, sans-serif" }}
                  >
                    {k.v}
                  </div>
                  <div
                    className="mt-0.5 inline-flex items-center gap-0.5 text-[9.5px] font-medium"
                    style={{ color: k.c }}
                  >
                    <TrendingUp className="h-2.5 w-2.5" /> {k.d}
                  </div>
                </div>
              ))}
            </div>

            {/* Revenue chart */}
            <div className="h-[151px] min-h-[151px] max-h-[151px] overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.025] p-3">
              <div className="mb-1.5 flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-medium text-white/90">
                    Revenue growth
                  </div>
                  <div className="text-[9.5px] text-white/40">
                    Live · streaming
                  </div>
                </div>
                <div className="flex gap-1">
                  {["1W", "1M", "3M", "1Y"].map((t, i) => (
                    <span
                      key={t}
                      className={`rounded px-1.5 py-0.5 text-[9.5px] ${
                        i === 1
                          ? "bg-white/10 text-white"
                          : "text-white/45"
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="stable-chart h-[96px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={revenue}
                    margin={{ top: 4, right: 4, bottom: 0, left: 0 }}
                  >
                    <defs>
                      <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#818cf8" stopOpacity={0.55} />
                        <stop offset="100%" stopColor="#818cf8" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="gs" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#a5b4fc" />
                        <stop offset="100%" stopColor="#c084fc" />
                      </linearGradient>
                    </defs>
                    <Area
                      type="monotone"
                      dataKey="y"
                      stroke="url(#gs)"
                      strokeWidth={2}
                      fill="url(#g1)"
                      isAnimationActive={false}
                      animationDuration={800}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Automation workflow strip */}
            <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-3">
              <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Workflow className="h-3 w-3 text-indigo-300" />
                  <div className="text-[11px] font-medium text-white/90">
                    Automation flow
                  </div>
                </div>
                <div className="text-[9.5px] text-emerald-300/90">
                  3 of 4 active
                </div>
              </div>
              <div className="flex items-center gap-1">
                {workflowNodes.map((n, i) => (
                  <div key={n.l} className="flex flex-1 items-center gap-1">
                    <div
                      className={`flex flex-1 items-center gap-1.5 rounded-lg border px-2 py-1.5 ${
                        n.active
                          ? "border-indigo-400/30 bg-indigo-500/10"
                          : "border-white/10 bg-white/[0.02]"
                      }`}
                    >
                      <div className="relative">
                        <n.i
                          className={`h-3 w-3 ${
                            n.active ? "text-indigo-200" : "text-white/40"
                          }`}
                        />
                        {n.active && (
                          <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
                        )}
                      </div>
                      <span
                        className={`text-[10px] ${
                          n.active ? "text-white/90" : "text-white/45"
                        }`}
                      >
                        {n.l}
                      </span>
                    </div>
                    {i < workflowNodes.length - 1 && (
                      <ChevronRight className="h-3 w-3 shrink-0 text-white/25" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* CRM pipeline + WhatsApp panel */}
            <div className="grid grid-cols-[1.1fr,1fr] gap-2">
              {/* Pipeline */}
              <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-3">
                <div className="mb-2 flex items-center justify-between">
                  <div className="text-[11px] font-medium text-white/90">
                    CRM pipeline
                  </div>
                  <div className="text-[9.5px] text-white/40">110 deals</div>
                </div>
                <div className="space-y-1.5">
                  {pipeline.map((p) => (
                    <div key={p.stage} className="flex items-center gap-2">
                      <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{
                          background: p.color,
                          boxShadow: `0 0 8px ${p.color}`,
                        }}
                      />
                      <div className="w-16 text-[10px] text-white/65">
                        {p.stage}
                      </div>
                      <div className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-white/[0.05]">
                        <div
                          className="absolute inset-y-0 left-0 rounded-full"
                          style={{
                            width: `${p.pct}%`,
                            background: `linear-gradient(90deg, ${p.color}, ${p.color}99)`,
                            boxShadow: `0 0 10px ${p.color}55`,
                          }}
                        />
                      </div>
                      <div className="w-6 text-right text-[10px] font-medium text-white/80">
                        {p.count}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* WhatsApp panel */}
              <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-3">
                <div className="mb-2 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="flex h-4 w-4 items-center justify-center rounded-md bg-emerald-500/20 ring-1 ring-emerald-400/30">
                      <MessageCircle className="h-2.5 w-2.5 text-emerald-300" />
                    </div>
                    <div className="text-[11px] font-medium text-white/90">
                      WhatsApp
                    </div>
                  </div>
                  <div className="text-[9.5px] text-white/40">+312 today</div>
                </div>
                <div className="space-y-1.5">
                  {messages.map((m) => (
                    <div
                      key={m.from + m.text}
                      className="flex items-start gap-1.5 rounded-md px-1 py-0.5"
                    >
                      <div
                        className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[8px] font-semibold ${
                          m.ai
                            ? "bg-gradient-to-br from-indigo-400 to-violet-500 text-white"
                            : "bg-white/10 text-white/70"
                        }`}
                      >
                        {m.ai ? <Bot className="h-2.5 w-2.5" /> : m.from[0]}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1">
                          <div className="truncate text-[9.5px] font-medium text-white/85">
                            {m.from}
                          </div>
                          <div className="text-[8.5px] text-white/35">
                            · {m.time}
                          </div>
                          {m.unread && (
                            <span className="ml-auto h-1 w-1 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
                          )}
                        </div>
                        <div className="truncate text-[9.5px] text-white/55">
                          {m.text}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom row: AI assistant + lead capture */}
            <div className="grid grid-cols-[1fr,1fr] gap-2">
              <div
                className="relative overflow-hidden rounded-xl border border-indigo-400/20 p-3"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(99,102,241,0.18) 0%, rgba(168,85,247,0.10) 100%)",
                }}
              >
                <div
                  className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(168,85,247,0.45), transparent 70%)",
                    filter: "blur(10px)",
                  }}
                />
                <div className="flex items-center gap-1.5">
                  <div className="flex h-5 w-5 items-center justify-center rounded-md bg-white/10 ring-1 ring-white/15">
                    <Sparkles className="h-3 w-3 text-indigo-200" />
                  </div>
                  <div className="text-[11px] font-medium text-white/95">
                    Pleco AI
                  </div>
                </div>
                <div className="mt-1.5 text-[10px] leading-snug text-white/70">
                  "Draft a 3-step onboarding flow for new travel agency leads."
                </div>
                <div className="mt-2 flex items-center gap-1">
                  <div className="inline-flex items-center gap-1 rounded-full bg-white/10 px-1.5 py-0.5 text-[9px] text-white/75">
                    <Zap className="h-2.5 w-2.5" /> Generating
                  </div>
                  <div className="flex gap-0.5">
                    <span className="h-1 w-1 animate-pulse rounded-full bg-indigo-300" />
                    <span
                      className="h-1 w-1 animate-pulse rounded-full bg-indigo-300"
                      style={{ animationDelay: "120ms" }}
                    />
                    <span
                      className="h-1 w-1 animate-pulse rounded-full bg-indigo-300"
                      style={{ animationDelay: "240ms" }}
                    />
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-3">
                <div className="mb-1.5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <Globe className="h-3 w-3 text-cyan-300" />
                    <div className="text-[11px] font-medium text-white/90">
                      Website leads
                    </div>
                  </div>
                  <div className="text-[9.5px] text-emerald-300">+12 today</div>
                </div>
                <div className="stable-chart h-[44px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={bars}>
                      <defs>
                        <linearGradient id="bg1" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#a78bfa" />
                          <stop offset="100%" stopColor="#6366f1" />
                        </linearGradient>
                      </defs>
                      <Bar
                        dataKey="y"
                        radius={[3, 3, 0, 0]}
                        fill="url(#bg1)"
                        isAnimationActive={false}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-1 flex items-center justify-between text-[9.5px] text-white/45">
                  <span>plecolab.io/contact</span>
                  <span className="text-white/70">82 / wk</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------- Trust --------------------------------- */

function BrandWordmark({ name }: { name: string }) {
  // Premium SVG wordmarks — monochrome, glyph-shaped per brand
  const marks: Record<string, React.ReactNode> = {
    FlyWorld: (
      <svg viewBox="0 0 140 22" className="h-5 w-auto" fill="none">
        <path d="M2 16 L8 4 L12 16 M5 11 H11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="18" cy="11" r="4" stroke="currentColor" strokeWidth="1.6" />
        <text x="28" y="15" fontFamily="Space Grotesk, Inter, sans-serif" fontSize="13" fontWeight="700" letterSpacing="-0.02em" fill="currentColor">FlyWorld</text>
      </svg>
    ),
    GlobalVisa: (
      <svg viewBox="0 0 150 22" className="h-5 w-auto" fill="none">
        <circle cx="10" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M3.5 11 H16.5 M10 4.5 C7 8 7 14 10 17.5 M10 4.5 C13 8 13 14 10 17.5" stroke="currentColor" strokeWidth="1.2" />
        <text x="22" y="15" fontFamily="Space Grotesk, Inter, sans-serif" fontSize="13" fontWeight="700" letterSpacing="-0.02em" fill="currentColor">GlobalVisa</text>
      </svg>
    ),
    EduConnect: (
      <svg viewBox="0 0 160 22" className="h-5 w-auto" fill="none">
        <path d="M3 9 L11 5 L19 9 L11 13 Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M7 11 V15 C7 16 9 17 11 17 C13 17 15 16 15 15 V11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <text x="24" y="15" fontFamily="Space Grotesk, Inter, sans-serif" fontSize="13" fontWeight="700" letterSpacing="-0.02em" fill="currentColor">EduConnect</text>
      </svg>
    ),
    MediCare: (
      <svg viewBox="0 0 140 22" className="h-5 w-auto" fill="none">
        <path d="M11 3 V19 M3 11 H19" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <text x="24" y="15" fontFamily="Space Grotesk, Inter, sans-serif" fontSize="13" fontWeight="700" letterSpacing="-0.02em" fill="currentColor">MediCare</text>
      </svg>
    ),
    TradeX: (
      <svg viewBox="0 0 120 22" className="h-5 w-auto" fill="none">
        <path d="M3 16 L8 8 L12 12 L18 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="18" cy="4" r="1.6" fill="currentColor" />
        <text x="24" y="15" fontFamily="Space Grotesk, Inter, sans-serif" fontSize="13" fontWeight="700" letterSpacing="-0.02em" fill="currentColor">TradeX</text>
      </svg>
    ),
    Northwind: (
      <svg viewBox="0 0 150 22" className="h-5 w-auto" fill="none">
        <path d="M3 17 V5 L14 17 V5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <text x="20" y="15" fontFamily="Space Grotesk, Inter, sans-serif" fontSize="13" fontWeight="700" letterSpacing="-0.02em" fill="currentColor">Northwind</text>
      </svg>
    ),
    Lumen: (
      <svg viewBox="0 0 110 22" className="h-5 w-auto" fill="none">
        <circle cx="10" cy="11" r="4" fill="currentColor" />
        <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
          <path d="M10 2 V4.5 M10 17.5 V20 M2 11 H4.5 M15.5 11 H18 M4.4 5.4 L6 7 M14 15 L15.6 16.6 M4.4 16.6 L6 15 M14 7 L15.6 5.4" />
        </g>
        <text x="22" y="15" fontFamily="Space Grotesk, Inter, sans-serif" fontSize="13" fontWeight="700" letterSpacing="-0.02em" fill="currentColor">Lumen</text>
      </svg>
    ),
  };
  return <div className="brand-mark">{marks[name]}</div>;
}

function TrustStrip() {
  const brands = ["FlyWorld", "GlobalVisa", "EduConnect", "MediCare", "TradeX", "Northwind", "Lumen"];
  return (
    <section className="relative py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center eyebrow">Trusted by growth-focused teams worldwide</div>
        <div className="hairline mx-auto mt-5 max-w-3xl" />
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-5 sm:gap-x-10 md:gap-x-12">
          {brands.map((b) => (
            <BrandWordmark key={b} name={b} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Section UI ------------------------------ */

function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <div className={`mb-4 inline-flex items-center gap-2 ${align === "center" ? "" : ""}`}>
        <span className="h-px w-6 bg-gradient-to-r from-indigo-400/0 via-indigo-400/70 to-indigo-400/0" />
        <span className="eyebrow">{eyebrow}</span>
        <span className="h-px w-6 bg-gradient-to-l from-indigo-400/0 via-indigo-400/70 to-indigo-400/0" />
      </div>
      <h2
        className="text-[28px] font-semibold leading-[1.05] tracking-[-0.035em] text-white sm:text-[44px]"
        style={{ fontFamily: "Space Grotesk, Inter, sans-serif" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-[15px] leading-[1.65] text-white/65">{subtitle}</p>
      )}
    </div>
  );
}

/* -------------------------------- Services -------------------------------- */

function Services() {
  const featured = {
    i: LayoutDashboard,
    t: "Custom CRM Development",
    d: "Tailor-made CRM platforms built around your sales, ops, and customer workflows — with live pipeline, automation, and AI baked in.",
  };
  type SupportItem = {
    i: typeof LayoutDashboard;
    t: string;
    d: string;
    preview?: "website" | "automation" | "ai" | "leads" | "whatsapp" | "code" | "integrations";
    span?: string;
  };
  const topRow: SupportItem[] = [
    { i: Globe2, t: "Website Development", d: "Conversion-tuned websites that look premium and load fast.", preview: "website" },
    { i: Workflow, t: "Business Automation", d: "Eliminate repetitive ops with workflows that just work.", preview: "automation" },
  ];
  const bentoRow: SupportItem[] = [
    { i: Bot, t: "AI Agents", d: "Production AI agents that handle real customer work — search, draft, decide, act.", preview: "ai", span: "lg:col-span-3" },
    { i: Users, t: "Lead Management", d: "Capture, score, route, and convert leads end-to-end.", preview: "leads", span: "lg:col-span-3" },
    { i: MessageCircle, t: "WhatsApp Automation", d: "Native WhatsApp flows that scale support and sales.", preview: "whatsapp", span: "lg:col-span-2" },
    { i: Code2, t: "Custom Software", d: "Internal tools and bespoke software for your stack.", preview: "code", span: "lg:col-span-2" },
    { i: Plug, t: "Integrations & APIs", d: "Connect every tool — clean, observable, reliable.", preview: "integrations", span: "lg:col-span-2" },
  ];

  const renderPreview = (p?: SupportItem["preview"]) => {
    switch (p) {
      case "website": return <WebsiteShowcase />;
      case "automation": return <AutomationFlow />;
      case "ai": return <AIAgentDemo />;
      case "leads": return <LeadDemo />;
      case "whatsapp": return <WhatsAppDemo />;
      case "code": return <CodeDemo />;
      case "integrations": return <IntegrationsDemo />;
      default: return null;
    }
  };

  const renderCard = (it: SupportItem) => (
    <a
      key={it.t}
      href="#"
      className={`card-premium group relative overflow-hidden p-5 ${it.span ?? "lg:col-span-2"}`}
    >
      <div className="flex items-start justify-between">
        <div className="icon-tile">
          <it.i className="h-[18px] w-[18px]" strokeWidth={1.6} />
        </div>
        <ArrowUpRight className="h-4 w-4 text-white/25 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white/80" strokeWidth={1.6} />
      </div>
      <h3
        className="mt-4 text-[15.5px] font-medium tracking-[-0.015em] text-white"
        style={{ fontFamily: "Space Grotesk, Inter, sans-serif" }}
      >
        {it.t}
      </h3>
      <p className="mt-1.5 text-[13px] leading-[1.6] text-white/55">{it.d}</p>
      {it.preview && <div className="mt-4">{renderPreview(it.preview)}</div>}
    </a>
  );

  return (
    <section className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="Solutions"
          title={<>One partner. <span className="text-gradient-brand">Every layer</span> of your stack.</>}
          subtitle="From the first lead to the back-office system that runs your business — we design, build, and operate it."
        />

        <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-5">
          {/* Featured */}
          <div className="card-premium card-elevated group relative overflow-hidden p-6 lg:col-span-3 lg:row-span-2 lg:p-7">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="icon-tile icon-tile-lg">
                  <featured.i className="h-5 w-5" strokeWidth={1.6} />
                </div>
                <div className="eyebrow">Featured</div>
              </div>
              <ArrowUpRight className="h-4 w-4 text-white/40 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" strokeWidth={1.6} />
            </div>
            <h3
              className="mt-4 text-[22px] font-semibold tracking-[-0.025em] text-white sm:text-[25px]"
              style={{ fontFamily: "Space Grotesk, Inter, sans-serif" }}
            >
              {featured.t}
            </h3>
            <p className="mt-2 max-w-md text-[14px] leading-[1.6] text-white/65">
              {featured.d}
            </p>
            <div className="mt-5">
              <FeaturedPreview />
            </div>
          </div>

          {topRow.map(renderCard)}
        </div>

        {/* Bento row — asymmetric premium product showcase */}
        <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-6">
          {bentoRow.map(renderCard)}
        </div>
      </div>
    </section>
  );
}

/* --------- shared hooks for live demos --------- */


function useLiveSeries(length = 22, seed = 0) {
  // Static series — interval-driven updates caused Recharts to re-run its
  // enter animation on each tick, producing visible idle vertical jitter.
  const [data] = useState(() =>
    Array.from({ length }, (_, i) => ({
      x: i,
      y: 28 + Math.sin((i + seed) / 2.2) * 8 + i * 1.6,
    })),
  );
  return data;
}

function FeaturedPreview() {
  const data = useLiveSeries(22);
  const rev = useCountUp(148);
  const deals = useCountUp(110);
  const win = useCountUp(34);
  const stages = [
    { l: "New", c: 48, color: "#60a5fa", pct: 100 },
    { l: "Qualified", c: 32, color: "#818cf8", pct: 72 },
    { l: "Proposal", c: 19, color: "#a78bfa", pct: 48 },
    { l: "Won", c: 11, color: "#34d399", pct: 28 },
  ];
  return (
    <div className="glass-sweep relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-white/[0.005] p-3.5 transition-transform duration-500 ease-out will-change-transform hover:-translate-y-0.5">
      {/* Window chrome */}
      <div className="relative flex items-center justify-between border-b border-white/[0.06] pb-2">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-rose-400/70" />
          <span className="h-2 w-2 rounded-full bg-amber-300/70" />
          <span className="h-2 w-2 rounded-full bg-emerald-400/70" />
        </div>
        <div className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[10px] text-white/55">
          app.plecolab.io / pipeline
        </div>
        <div className="flex items-center gap-1.5">
          <span className="live-dot h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <span className="text-[9.5px] font-medium text-emerald-300/90">LIVE</span>
        </div>
      </div>

      <div className="relative mt-2.5 grid grid-cols-3 gap-2">
        {[
          { l: "Revenue", v: `$${rev}K`, d: "+24%" },
          { l: "Deals", v: deals, d: "+12%" },
          { l: "Win rate", v: `${win}%`, d: "+6pt" },
        ].map((k, i) => (
          <div
            key={k.l}
            className="widget-pulse rounded-lg border border-white/[0.07] bg-white/[0.025] p-2"
            style={{ animationDelay: `${i * 0.6}s` }}
          >
            <div className="text-[10px] text-white/45">{k.l}</div>
            <div
              className="mt-0.5 text-[14.5px] font-semibold tabular-nums tracking-[-0.02em] text-white"
              style={{ fontFamily: "Space Grotesk, Inter, sans-serif" }}
            >
              {k.v}
            </div>
            <div className="mt-0.5 inline-flex items-center gap-0.5 text-[10px] font-medium text-emerald-300">
              <TrendingUp className="h-2.5 w-2.5" strokeWidth={1.8} /> {k.d}
            </div>
          </div>
        ))}
      </div>

      <div className="relative mt-2.5 grid grid-cols-[1.2fr,1fr] gap-2">
        <div className="rounded-lg border border-white/[0.07] bg-white/[0.025] p-2.5">
          <div className="mb-1 flex items-center justify-between">
            <div className="text-[11px] font-medium text-white/85">Revenue growth</div>
            <div className="flex items-center gap-1">
              <span className="live-dot h-1 w-1 rounded-full bg-emerald-400" />
              <span className="text-[9.5px] text-emerald-300/90">Live</span>
            </div>
          </div>
          <div className="h-[68px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 2, right: 2, bottom: 0, left: 0 }}>
                <defs>
                  <linearGradient id="fp-area" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#818cf8" stopOpacity={0.55} />
                    <stop offset="100%" stopColor="#818cf8" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area
                  type="monotone"
                  dataKey="y"
                  stroke="#a5b4fc"
                  strokeWidth={2}
                  fill="url(#fp-area)"
                  isAnimationActive={false}
                  animationDuration={1200}
                  animationEasing="ease-out"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="rounded-lg border border-white/[0.07] bg-white/[0.025] p-2.5">
          <div className="mb-1.5 text-[11px] font-medium text-white/85">Pipeline</div>
          <div className="space-y-1.5">
            {stages.map((s, i) => (
              <div key={s.l} className="flex items-center gap-2">
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ background: s.color, boxShadow: `0 0 8px ${s.color}` }}
                />
                <div className="w-14 text-[10px] text-white/65">{s.l}</div>
                <div className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-white/[0.05]">
                  <div
                    className="bar-grow absolute inset-y-0 left-0 rounded-full"
                    style={{
                      width: `${s.pct}%`,
                      background: `linear-gradient(90deg, ${s.color}, ${s.color}99)`,
                      animationDelay: `${0.3 + i * 0.18}s`,
                    }}
                  />
                </div>
                <div className="w-5 text-right text-[10px] font-medium tabular-nums text-white/80">
                  {s.c}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ghost cursor */}
      <div className="ghost-cursor pointer-events-none absolute left-0 top-0 z-20 h-3 w-3 text-white/85">
        <svg viewBox="0 0 16 16" className="h-full w-full drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
          <path d="M2 1.5 L13 7.5 L8 9 L6.5 14 Z" fill="currentColor" stroke="rgba(0,0,0,0.5)" strokeWidth="0.6" />
        </svg>
      </div>
    </div>
  );
}

/* ----- Website Development preview ----- */
function WebsiteShowcase() {
  // Static URL — the typing setInterval reshaped the URL bar text width
  // every 260ms which propagated layout changes through the flex parent.
  const url = "acme.com/launch";

  return (
    <div className="relative grid grid-cols-[1fr,auto] items-end gap-3 overflow-hidden rounded-xl border border-white/[0.07] bg-gradient-to-b from-white/[0.035] to-white/[0.005] p-3">
      {/* ambient glow */}
      <div className="pointer-events-none absolute -inset-10 -z-10 opacity-50" style={{ background: "radial-gradient(60% 60% at 30% 30%, rgba(129,140,248,0.18), transparent 70%)" }} />

      {/* Desktop browser */}
      <div className="relative rounded-lg border border-white/10 bg-[#0a1024]/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
        <div className="flex items-center gap-1.5 border-b border-white/[0.06] px-2 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-rose-400/70" />
          <span className="h-1.5 w-1.5 rounded-full bg-amber-300/70" />
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/70" />
          <span className="ml-2 flex min-w-0 flex-1 items-center gap-0.5 truncate rounded-sm bg-white/[0.04] px-1.5 py-[1px] font-mono text-[8.5px] text-white/65">
            <span className="truncate">{url}</span>
            <span className="caret inline-block h-[7px] w-[1px] bg-white/70" />
          </span>
        </div>
        {/* loading bar */}
        <div className="relative h-[1px] w-full overflow-hidden bg-white/[0.03]">
          <div className="loadbar absolute inset-y-0 left-0 bg-gradient-to-r from-indigo-400 to-violet-400" />
        </div>
        <div className="relative p-2.5">
          {/* skeleton overlay */}
          <div className="skeleton-fade pointer-events-none absolute inset-2.5 space-y-1.5">
            <div className="h-1.5 w-3/4 animate-pulse rounded-full bg-white/10" />
            <div className="h-1.5 w-2/3 animate-pulse rounded-full bg-white/10" />
            <div className="h-1.5 w-1/2 animate-pulse rounded-full bg-white/10" />
            <div className="mt-1.5 grid grid-cols-3 gap-1">
              {[0, 1, 2].map((i) => (
                <div key={i} className="h-6 animate-pulse rounded-md bg-white/[0.06]" />
              ))}
            </div>
          </div>

          {/* real content */}
          <div className="content-fade">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <div className="h-1.5 w-1.5 rounded-sm bg-gradient-to-br from-indigo-400 to-violet-500" />
                <div className="h-1 w-6 rounded-full bg-white/30" />
              </div>
              <div className="flex gap-1">
                <div className="h-1 w-3 rounded-full bg-white/15" />
                <div className="h-1 w-3 rounded-full bg-white/15" />
                <div className="h-1 w-3 rounded-full bg-white/15" />
                <div className="h-1.5 w-4 rounded-sm bg-indigo-400/70" />
              </div>
            </div>
            <div className="mt-2.5 space-y-1">
              <div className="h-1.5 w-3/4 rounded-full bg-gradient-to-r from-white/80 to-white/30" />
              <div className="h-1.5 w-2/3 rounded-full bg-gradient-to-r from-white/60 to-white/15" />
            </div>
            <div className="mt-1.5 h-[5px] w-1/2 rounded-full bg-white/15" />
            <div className="relative mt-2 flex gap-1.5">
              <div className="relative h-2.5 w-8 rounded-md bg-gradient-to-r from-indigo-400 to-violet-500 shadow-[0_2px_10px_rgba(129,140,248,0.5)]">
                {/* hover cursor on CTA */}
                <div className="ghost-cursor pointer-events-none absolute -right-1 -top-1 h-2.5 w-2.5 text-white">
                  <svg viewBox="0 0 16 16" className="h-full w-full drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
                    <path d="M2 1.5 L13 7.5 L8 9 L6.5 14 Z" fill="currentColor" stroke="rgba(0,0,0,0.5)" strokeWidth="0.6" />
                  </svg>
                </div>
              </div>
              <div className="h-2.5 w-6 rounded-md border border-white/15" />
            </div>
            <div className="mt-2.5 grid grid-cols-3 gap-1">
              {[0, 1, 2].map((i) => (
                <div key={i} className="rounded-md border border-white/[0.07] bg-white/[0.03] p-1.5">
                  <div className="h-1 w-3/4 rounded-full bg-white/40" />
                  <div className="mt-1 h-[3px] w-full rounded-full bg-white/10" />
                  <div className="mt-0.5 h-[3px] w-2/3 rounded-full bg-white/10" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Phone — auto-scrolling content */}
      <div className="phone-frame w-[58px] p-1.5">
        <div className="relative h-[120px] overflow-hidden rounded-[12px] bg-[#06091a] p-1.5">
          <div className="mx-auto h-1 w-5 rounded-full bg-white/15" />
          <div className="phone-scroll mt-1.5 space-y-1.5">
            <div className="h-1.5 w-3/4 rounded-full bg-gradient-to-r from-white/80 to-white/30" />
            <div className="h-1 w-2/3 rounded-full bg-white/20" />
            <div className="h-7 w-full rounded-md bg-gradient-to-br from-indigo-400/30 to-violet-500/15 ring-1 ring-white/10" />
            <div className="grid grid-cols-2 gap-1">
              <div className="h-3.5 rounded-md bg-white/[0.06]" />
              <div className="h-3.5 rounded-md bg-white/[0.06]" />
            </div>
            <div className="h-2 w-full rounded-md bg-gradient-to-r from-indigo-400 to-violet-500" />
            <div className="h-1 w-2/3 rounded-full bg-white/20" />
            <div className="h-6 w-full rounded-md bg-white/[0.05] ring-1 ring-white/10" />
            <div className="grid grid-cols-2 gap-1">
              <div className="h-3 rounded-md bg-white/[0.06]" />
              <div className="h-3 rounded-md bg-white/[0.06]" />
            </div>
            <div className="h-1 w-1/2 rounded-full bg-white/20" />
          </div>
          {/* fade mask */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-[#06091a] to-transparent" />
        </div>
      </div>
    </div>
  );
}

/* ----- Business Automation flow viz ----- */
function AutomationFlow() {
  const nodes = [
    { label: "Lead", icon: Users, badge: "+3" },
    { label: "CRM", icon: LayoutDashboard },
    { label: "WhatsApp", icon: MessageCircle, badge: "12" },
    { label: "AI", icon: Bot },
    { label: "Analytics", icon: Activity },
  ];
  return (
    <div className="relative overflow-hidden rounded-xl border border-white/[0.07] bg-gradient-to-b from-white/[0.035] to-white/[0.005] p-3">
      {/* AI activity ring */}
      <div className="absolute right-2 top-2 flex items-center gap-1">
        <div className="relative h-2 w-2">
          <div className="ai-spin absolute inset-0 rounded-full border border-indigo-300/50 border-t-transparent" />
        </div>
        <span className="text-[8.5px] font-medium text-indigo-200/80">AI active</span>
      </div>

      <div className="relative">
        {/* dashed flow line behind nodes */}
        <svg viewBox="0 0 280 44" className="absolute inset-x-2 top-1/2 -z-0 h-11 w-[calc(100%-16px)] -translate-y-1/2" preserveAspectRatio="none">
          <defs>
            <linearGradient id="flow-grad" x1="0" x2="1">
              <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.0" />
              <stop offset="20%" stopColor="#818cf8" stopOpacity="0.7" />
              <stop offset="80%" stopColor="#a78bfa" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#34d399" stopOpacity="0.0" />
            </linearGradient>
          </defs>
          <line x1="0" y1="22" x2="280" y2="22" stroke="url(#flow-grad)" strokeWidth="1.5" className="flow-line" />
        </svg>

        {/* Traveling packets */}
        <div className="pointer-events-none absolute inset-0 -z-0">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="packet absolute left-0 top-0 h-1.5 w-1.5 rounded-full bg-indigo-300"
              style={{
                animationDelay: `${i * 1.05}s`,
                boxShadow: "0 0 10px rgba(165,180,252,0.9), 0 0 18px rgba(129,140,248,0.6)",
              }}
            />
          ))}
        </div>

        <div className="relative z-10 flex items-center justify-between gap-1">
          {nodes.map((n, idx) => (
            <div key={n.label} className="relative flex flex-1 flex-col items-center gap-1.5">
              <div
                className="node-receive relative flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-gradient-to-br from-indigo-500/25 to-violet-500/10 text-indigo-200 will-change-transform"
                style={{ animationDelay: `${idx * 0.64}s` }}
              >
                <n.icon className="h-3.5 w-3.5" strokeWidth={1.7} />
                {n.badge && (
                  <span
                    className="badge-pop absolute -right-1 -top-1 inline-flex h-3 min-w-[12px] items-center justify-center rounded-full bg-rose-500 px-1 text-[8px] font-semibold text-white shadow-[0_0_8px_rgba(244,63,94,0.6)]"
                    style={{ animationDelay: `${1 + idx * 0.8}s` }}
                  >
                    {n.badge}
                  </span>
                )}
              </div>
              <div className="text-[9.5px] font-medium text-white/65">{n.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Sync status */}
      <div className="mt-2 flex items-center justify-between border-t border-white/[0.05] pt-2 text-[9px] text-white/55">
        <div className="flex items-center gap-1.5">
          <span className="live-dot h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <span>Synced · 1.2k events / min</span>
        </div>
        <span className="font-mono tabular-nums text-white/45">v4.2</span>
      </div>
    </div>
  );
}

/* ----- AI Agents demo ----- */
function AIAgentDemo() {
  const tasks = [
    { i: Search, l: "Searched CRM · 1,284 records" },
    { i: Sparkles, l: "Drafted personalized reply" },
    { i: Send, l: "Scheduled follow-up · Tue 10:00" },
  ];
  return (
    <div className="relative overflow-hidden rounded-xl border border-white/[0.07] bg-gradient-to-b from-white/[0.035] to-white/[0.005] p-3">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <div className="relative flex h-5 w-5 items-center justify-center rounded-md bg-gradient-to-br from-indigo-400/40 to-violet-500/20 ring-1 ring-white/15">
            <Bot className="h-3 w-3 text-indigo-200" strokeWidth={1.8} />
          </div>
          <span className="text-[10.5px] font-medium text-white/85">Pleco AI</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="live-dot h-1 w-1 rounded-full bg-emerald-400" />
          <span className="text-[9px] font-medium text-emerald-300/90">Online</span>
        </div>
      </div>

      {/* User message */}
      <div className="mt-2.5 flex justify-end">
        <div className="max-w-[80%] rounded-lg rounded-tr-sm bg-white/[0.06] px-2 py-1.5 text-[10.5px] text-white/85">
          Follow up with hot leads from last week
        </div>
      </div>

      {/* AI bubble with streaming */}
      <div className="msg-in mt-1.5 flex items-start gap-1.5">
        <div className="mt-0.5 flex h-4 w-4 items-center justify-center rounded-md bg-gradient-to-br from-indigo-400 to-violet-500 ring-1 ring-white/15">
          <Sparkles className="h-2.5 w-2.5 text-white" strokeWidth={2} />
        </div>
        <div className="relative max-w-[85%] rounded-lg rounded-tl-sm border border-indigo-300/15 bg-gradient-to-br from-indigo-500/10 to-violet-500/[0.04] px-2 py-1.5 text-[10.5px] leading-[1.5] text-white/85">
          <span className="ai-stream">Found 14 qualified leads — drafting replies and</span>
          <span className="caret ml-px inline-block h-[8px] w-[1px] bg-indigo-300 align-middle" />
        </div>
      </div>

      {/* Thinking dots */}
      <div className="mt-1.5 ml-5 flex items-center gap-0.5">
        {[0, 0.15, 0.3].map((d, i) => (
          <span
            key={i}
            className="thinking-dot h-1 w-1 rounded-full bg-indigo-300/80"
            style={{ animationDelay: `${d}s` }}
          />
        ))}
      </div>

      {/* Task chips */}
      <div className="mt-2.5 space-y-1">
        {tasks.map((t, i) => (
          <div
            key={t.l}
            className="task-in flex items-center gap-1.5 rounded-md border border-white/[0.07] bg-white/[0.025] px-1.5 py-1"
            style={{ animationDelay: `${0.8 + i * 0.7}s` }}
          >
            <CheckCircle2 className="h-2.5 w-2.5 text-emerald-300" strokeWidth={2} />
            <t.i className="h-2.5 w-2.5 text-indigo-200/80" strokeWidth={1.8} />
            <span className="text-[9.5px] text-white/70">{t.l}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ----- Lead Management demo ----- */
function LeadDemo() {
  const cols = [
    { l: "New", color: "#60a5fa", n: 48 },
    { l: "Qualified", color: "#818cf8", n: 32 },
    { l: "Won", color: "#34d399", n: 11 },
  ];
  const leads = [
    { name: "Acme Co.", score: 92, tag: "Hot" },
    { name: "Northwind", score: 78, tag: "Warm" },
    { name: "Globex", score: 64, tag: "Warm" },
  ];
  const today = useCountUp(142);
  return (
    <div className="relative overflow-hidden rounded-xl border border-white/[0.07] bg-gradient-to-b from-white/[0.035] to-white/[0.005] p-3">
      <div className="flex items-center justify-between">
        <div className="text-[10px] text-white/55">
          Today: <span className="font-semibold tabular-nums text-white">{today}</span> leads
        </div>
        <div className="flex items-center gap-1">
          <span className="live-dot h-1 w-1 rounded-full bg-emerald-400" />
          <span className="text-[9px] text-emerald-300/90">Routing</span>
        </div>
      </div>

      {/* Mini kanban */}
      <div className="relative mt-2.5 grid grid-cols-3 gap-1.5">
        {cols.map((c) => (
          <div key={c.l} className="rounded-md border border-white/[0.06] bg-white/[0.02] p-1.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <span
                  className="h-1 w-1 rounded-full"
                  style={{ background: c.color, boxShadow: `0 0 6px ${c.color}` }}
                />
                <span className="text-[9px] font-medium text-white/70">{c.l}</span>
              </div>
              <span className="tabular-nums text-[9px] text-white/45">{c.n}</span>
            </div>
            <div className="mt-1.5 h-[42px]" />
          </div>
        ))}

        {/* Flowing lead card overlay */}
        <div className="pointer-events-none absolute left-[2%] top-[26px] w-[31%]">
          <div
            className="lead-flow rounded-md border border-indigo-300/30 bg-gradient-to-br from-indigo-500/25 to-violet-500/10 p-1.5 shadow-[0_4px_18px_-6px_rgba(129,140,248,0.55)]"
          >
            <div className="flex items-center justify-between">
              <span className="truncate text-[9px] font-medium text-white">Acme Co.</span>
              <span className="rounded-sm bg-rose-500/20 px-1 text-[8px] font-semibold text-rose-200">92</span>
            </div>
            <div className="mt-1 h-[3px] w-full overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-rose-400 to-rose-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Lead list */}
      <div className="mt-2 space-y-1">
        {leads.map((l, i) => (
          <div
            key={l.name}
            className="task-in flex items-center justify-between rounded-md border border-white/[0.06] bg-white/[0.02] px-1.5 py-1"
            style={{ animationDelay: `${i * 0.6}s` }}
          >
            <div className="flex items-center gap-1.5">
              <div className="h-3 w-3 rounded-full bg-gradient-to-br from-indigo-400 to-violet-500 ring-1 ring-white/10" />
              <span className="text-[9.5px] text-white/80">{l.name}</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-[8.5px] text-white/50">{l.tag}</span>
              <span className="rounded-sm bg-white/[0.05] px-1 text-[8.5px] font-semibold tabular-nums text-white/85">
                {l.score}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ----- WhatsApp demo ----- */
function WhatsAppDemo() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-white/[0.07] bg-gradient-to-b from-emerald-500/[0.04] to-white/[0.005] p-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/90 ring-1 ring-white/15">
            <MessageCircle className="h-2.5 w-2.5 text-white" strokeWidth={2.2} />
          </div>
          <span className="text-[10px] font-medium text-white/85">+91 · Pleco Bot</span>
        </div>
        <span className="rounded-sm bg-emerald-500/15 px-1 py-0.5 text-[8.5px] font-medium text-emerald-300">trigger: new_lead</span>
      </div>

      <div className="mt-2.5 space-y-1.5">
        <div className="msg-in flex" style={{ animationDelay: "0s" }}>
          <div className="max-w-[80%] rounded-lg rounded-tl-sm bg-white/[0.06] px-2 py-1 text-[10px] text-white/85">
            Hi, interested in your travel plan
          </div>
        </div>

        <div className="msg-in flex justify-end" style={{ animationDelay: "1.2s" }}>
          <div className="max-w-[80%] rounded-lg rounded-tr-sm bg-emerald-500/85 px-2 py-1 text-[10px] text-white shadow-[0_2px_10px_rgba(16,185,129,0.35)]">
            Welcome! Bali or Maldives?
          </div>
        </div>

        <div className="msg-in flex" style={{ animationDelay: "2.4s" }}>
          <div className="flex items-center gap-0.5 rounded-lg rounded-tl-sm bg-white/[0.06] px-2 py-1.5">
            {[0, 0.15, 0.3].map((d, i) => (
              <span key={i} className="thinking-dot h-1 w-1 rounded-full bg-white/70" style={{ animationDelay: `${d}s` }} />
            ))}
          </div>
        </div>

        <div className="msg-in flex" style={{ animationDelay: "3.4s" }}>
          <div className="max-w-[80%] rounded-lg rounded-tl-sm bg-white/[0.06] px-2 py-1 text-[10px] text-white/85">
            Maldives · 5 nights
          </div>
        </div>

        <div className="msg-in flex justify-end" style={{ animationDelay: "4.4s" }}>
          <div className="max-w-[80%] rounded-lg rounded-tr-sm bg-emerald-500/85 px-2 py-1 text-[10px] text-white shadow-[0_2px_10px_rgba(16,185,129,0.35)]">
            Sent 3 packages ✈️
          </div>
        </div>
      </div>

      <div className="mt-2 flex items-center justify-between border-t border-white/[0.05] pt-1.5 text-[8.5px] text-white/55">
        <div className="flex items-center gap-1">
          <Zap className="h-2.5 w-2.5 text-amber-300" strokeWidth={2} />
          <span>Auto-replied in 1.2s</span>
        </div>
        <span className="tabular-nums">98.4% SLA</span>
      </div>
    </div>
  );
}

/* ----- Custom Software demo ----- */
function CodeDemo() {
  const lines = [
    { c: "const order = await db.orders", t: 0 },
    { c: "  .create({ data })", t: 0.4 },
    { c: "await stripe.charge(order.id)", t: 0.9 },
    { c: "// ✓ deployed to prod", t: 1.6 },
  ];
  return (
    <div className="relative overflow-hidden rounded-xl border border-white/[0.07] bg-[#06091a] p-0">
      {/* IDE header */}
      <div className="flex items-center justify-between border-b border-white/[0.06] bg-white/[0.02] px-2 py-1.5">
        <div className="flex items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-rose-400/70" />
          <span className="h-1.5 w-1.5 rounded-full bg-amber-300/70" />
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/70" />
          <span className="ml-1.5 font-mono text-[8.5px] text-white/55">api/orders.ts</span>
        </div>
        <span className="font-mono text-[8.5px] text-white/40">main</span>
      </div>

      {/* Code lines */}
      <div className="font-mono text-[9.5px] leading-[1.5] text-white/80">
        {lines.map((l, i) => (
          <div
            key={i}
            className="code-line flex gap-2 px-2 py-[1px]"
            style={{ animationDelay: `${l.t}s` }}
          >
            <span className="w-3 text-right text-white/25">{i + 1}</span>
            <span className={l.c.startsWith("//") ? "text-emerald-300/80" : "text-indigo-200/90"}>
              {l.c}
            </span>
          </div>
        ))}
      </div>

      {/* Terminal */}
      <div className="border-t border-white/[0.06] bg-black/30 px-2 py-1.5 font-mono text-[9px] text-white/60">
        <div>
          <span className="text-emerald-300">$</span> pnpm deploy
        </div>
        <div className="deploy-ok mt-0.5 flex items-center gap-1 text-emerald-300">
          <CheckCircle2 className="h-2.5 w-2.5" strokeWidth={2} /> Build · 28s · live
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-white/[0.06] px-2 py-1 text-[8.5px] text-white/55">
        <div className="flex items-center gap-1">
          <span className="live-dot h-1 w-1 rounded-full bg-emerald-400" />
          <span>API · 142 req/s</span>
        </div>
        <span className="tabular-nums text-white/40">p99 38ms</span>
      </div>
    </div>
  );
}

/* ----- Integrations demo ----- */
function IntegrationsDemo() {
  const sats = [
    { i: ShoppingBag, x: "8%", y: "10%" },
    { i: MessageCircle, x: "82%", y: "12%" },
    { i: Mail, x: "4%", y: "62%" },
    { i: Briefcase, x: "84%", y: "60%" },
    { i: Activity, x: "46%", y: "82%" },
  ];
  return (
    <div className="relative h-[170px] overflow-hidden rounded-xl border border-white/[0.07] bg-gradient-to-b from-white/[0.035] to-white/[0.005]">
      {/* connection lines */}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="int-line" x1="0" x2="1">
            <stop offset="0%" stopColor="#a5b4fc" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#a5b4fc" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        {sats.map((s, i) => (
          <line
            key={i}
            x1="50"
            y1="50"
            x2={parseFloat(s.x)}
            y2={parseFloat(s.y)}
            stroke="url(#int-line)"
            strokeWidth="0.4"
            strokeDasharray="1.5 1.5"
            className="flow-line"
            style={{ animationDelay: `${i * 0.25}s` }}
          />
        ))}
      </svg>

      {/* Central hub */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-indigo-300/30 bg-gradient-to-br from-indigo-500/30 to-violet-500/15 shadow-[0_0_30px_-8px_rgba(129,140,248,0.7)]">
          <Plug className="h-4 w-4 text-indigo-100" strokeWidth={1.8} />
          <span className="hub-ring absolute inset-0 rounded-xl border border-indigo-300/50" />
          <span
            className="hub-ring absolute inset-0 rounded-xl border border-indigo-300/40"
            style={{ animationDelay: "1.3s" }}
          />
        </div>
      </div>

      {/* Satellites */}
      {sats.map((s, i) => (
        <div
          key={i}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: s.x, top: s.y }}
        >
          <div
            className="node-receive flex h-6 w-6 items-center justify-center rounded-lg border border-white/15 bg-white/[0.04] text-white/80"
            style={{ animationDelay: `${i * 0.5}s` }}
          >
            <s.i className="h-3 w-3" strokeWidth={1.7} />
          </div>
        </div>
      ))}

      {/* Status bar */}
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between border-t border-white/[0.05] bg-black/20 px-2 py-1 text-[8.5px] text-white/60 backdrop-blur-sm">
        <div className="flex items-center gap-1">
          <span className="live-dot h-1 w-1 rounded-full bg-emerald-400" />
          <span>5 systems synced</span>
        </div>
        <span className="font-mono tabular-nums text-white/45">2.4k events/min</span>
      </div>
    </div>
  );
}

/* ---------------------- Industries: live mini demos ---------------------- */

function LiveDot({ label = "Live" }: { label?: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2 py-0.5 text-[10px] font-medium tracking-wide text-emerald-300">
      <span className="live-dot h-1.5 w-1.5 rounded-full bg-emerald-400" />
      {label}
    </span>
  );
}

function DemoFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="anim-isolate relative mt-4 h-[168px] overflow-hidden rounded-xl border border-white/[0.07] bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_20px_40px_-24px_rgba(0,0,0,0.7)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(99,102,241,0.08),transparent_60%)]" />
      <div className="relative h-full">{children}</div>
    </div>
  );
}

/* 1. Travel — booking dashboard with sparkline + counters */
function TravelDemo() {
  const bookings = useCountUp(1284, 1400);
  const revenue = useCountUp(48.2, 1600, 1);
  return (
    <DemoFrame>
      <div className="flex items-center justify-between">
        <div className="text-[10.5px] font-medium uppercase tracking-[0.12em] text-white/45">Bookings · 24h</div>
        <LiveDot />
      </div>
      <div className="mt-1.5 flex items-end justify-between">
        <div>
          <div className="font-mono text-[20px] font-semibold tabular-nums tracking-tight text-white">{bookings.toLocaleString()}</div>
          <div className="mt-0.5 text-[10.5px] text-emerald-300">▲ 12.4% vs yesterday</div>
        </div>
        <div className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 text-right">
          <div className="text-[9.5px] uppercase tracking-wider text-white/45">Revenue</div>
          <div className="font-mono text-[12px] font-semibold text-white">${revenue}K</div>
        </div>
      </div>
      <svg viewBox="0 0 280 60" className="mt-2 h-[58px] w-full">
        <defs>
          <linearGradient id="trv-g" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="rgba(129,140,248,0.45)" />
            <stop offset="100%" stopColor="rgba(129,140,248,0)" />
          </linearGradient>
        </defs>
        <path d="M0 45 L30 38 L60 42 L90 28 L120 32 L150 20 L180 26 L210 14 L240 18 L280 8 L280 60 L0 60 Z" fill="url(#trv-g)" />
        <path className="ind-spark" d="M0 45 L30 38 L60 42 L90 28 L120 32 L150 20 L180 26 L210 14 L240 18 L280 8" fill="none" stroke="rgb(165,180,252)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </DemoFrame>
  );
}

/* 2. Immigration — case workflow pipeline */
function ImmigrationDemo() {
  const steps = ["Intake", "Documents", "Review", "Decision"];
  return (
    <DemoFrame>
      <div className="flex items-center justify-between">
        <div className="text-[10.5px] font-medium uppercase tracking-[0.12em] text-white/45">Case · IMG-2841</div>
        <span className="ind-status inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium">In Review</span>
      </div>
      <div className="mt-3 space-y-1.5">
        {steps.map((s, idx) => (
          <div key={s} className="ind-step flex items-center gap-2" style={{ animationDelay: `${idx * 0.4}s` }}>
            <div className={`flex h-4 w-4 items-center justify-center rounded-full ${idx < 2 ? "bg-emerald-400/20 ring-1 ring-emerald-400/40" : idx === 2 ? "bg-indigo-400/20 ring-1 ring-indigo-400/40" : "bg-white/[0.04] ring-1 ring-white/10"}`}>
              {idx < 2 ? <Check className="h-2.5 w-2.5 text-emerald-300" strokeWidth={2.4} /> : idx === 2 ? <div className="h-1.5 w-1.5 rounded-full bg-indigo-300 live-dot" /> : <div className="h-1 w-1 rounded-full bg-white/30" />}
            </div>
            <div className="flex-1 text-[11.5px] text-white/75">{s}</div>
            <div className="relative h-1 w-12 overflow-hidden rounded-full bg-white/[0.05]">
              <div className="ind-fill h-full rounded-full bg-gradient-to-r from-indigo-400 to-sky-400" style={{ ["--w" as string]: idx < 2 ? "100%" : idx === 2 ? "62%" : "0%", animationDelay: `${idx * 0.3}s` }} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-2 flex items-center justify-between text-[10px] text-white/45">
        <span>3 docs verified</span>
        <span className="text-emerald-300">SLA · 2d ahead</span>
      </div>
    </DemoFrame>
  );
}

/* 3. Education — enrollment funnel */
function EducationDemo() {
  const inquiries = useCountUp(842, 1200);
  return (
    <DemoFrame>
      <div className="flex items-center justify-between">
        <div className="text-[10.5px] font-medium uppercase tracking-[0.12em] text-white/45">Admissions funnel</div>
        <LiveDot label="Sync" />
      </div>
      <div className="mt-2 space-y-2">
        {[
          { l: "Inquiries", v: inquiries, w: "100%", c: "from-sky-400 to-indigo-400" },
          { l: "Counselled", v: 612, w: "72%", c: "from-indigo-400 to-violet-400" },
          { l: "Applied", v: 348, w: "41%", c: "from-violet-400 to-fuchsia-400" },
          { l: "Enrolled", v: 184, w: "22%", c: "from-fuchsia-400 to-rose-400" },
        ].map((r, i) => (
          <div key={r.l}>
            <div className="flex items-center justify-between text-[10.5px]">
              <span className="text-white/65">{r.l}</span>
              <span className="font-mono tabular-nums text-white/85">{r.v.toLocaleString()}</span>
            </div>
            <div className="relative mt-1 h-1.5 overflow-hidden rounded-full bg-white/[0.05]">
              <div className={`ind-fill h-full rounded-full bg-gradient-to-r ${r.c}`} style={{ ["--w" as string]: r.w, animationDelay: `${i * 0.18}s` }} />
            </div>
          </div>
        ))}
      </div>
    </DemoFrame>
  );
}

/* 4. Healthcare — patient queue */
function HealthcareDemo() {
  const rows = [
    { n: "A. Khan", t: "09:20", s: "Checked-in", c: "emerald" },
    { n: "M. Singh", t: "09:35", s: "In consult", c: "indigo" },
    { n: "R. Patel", t: "09:50", s: "Triage", c: "amber" },
    { n: "L. Chen", t: "10:05", s: "Queued", c: "slate" },
  ];
  return (
    <DemoFrame>
      <div className="flex items-center justify-between">
        <div className="text-[10.5px] font-medium uppercase tracking-[0.12em] text-white/45">OPD queue · Today</div>
        <span className="inline-flex items-center gap-1 rounded-full border border-sky-400/20 bg-sky-400/10 px-2 py-0.5 text-[9.5px] font-medium text-sky-300">
          <ShieldCheck className="h-2.5 w-2.5" strokeWidth={2} /> HIPAA
        </span>
      </div>
      <div className="mt-2 space-y-1">
        {rows.map((r, i) => (
          <div key={r.n} className="ind-step flex items-center gap-2 rounded-md border border-white/[0.05] bg-white/[0.02] px-2 py-1.5" style={{ animationDelay: `${i * 0.3}s` }}>
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-white/[0.05] text-[9px] font-medium text-white/70">{r.n.split(" ")[0][0]}</div>
            <div className="flex-1">
              <div className="text-[11px] leading-tight text-white/85">{r.n}</div>
              <div className="text-[9.5px] text-white/40">{r.t}</div>
            </div>
            <span className={`rounded-full px-1.5 py-0.5 text-[9.5px] font-medium ${
              r.c === "emerald" ? "bg-emerald-400/15 text-emerald-300" :
              r.c === "indigo" ? "bg-indigo-400/15 text-indigo-300" :
              r.c === "amber" ? "bg-amber-400/15 text-amber-300" :
              "bg-white/[0.05] text-white/55"
            }`}>{r.s}</span>
          </div>
        ))}
      </div>
    </DemoFrame>
  );
}

/* 5. Logistics — moving truck on route */
function LogisticsDemo() {
  const eta = useCountUp(42, 1100);
  return (
    <DemoFrame>
      <div className="flex items-center justify-between">
        <div className="text-[10.5px] font-medium uppercase tracking-[0.12em] text-white/45">Shipment · TRK-9214</div>
        <LiveDot label="Tracking" />
      </div>
      <div className="relative mt-2 h-[78px] w-full">
        <svg viewBox="0 0 300 60" className="absolute inset-0 h-full w-full">
          <path d="M 8 38 C 60 38, 90 12, 150 22 S 240 50, 290 18" fill="none" stroke="rgba(165,180,252,0.18)" strokeWidth="1.5" />
          <path className="ind-route" d="M 8 38 C 60 38, 90 12, 150 22 S 240 50, 290 18" fill="none" stroke="rgb(129,140,248)" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="8" cy="38" r="3" fill="rgb(110,231,183)" />
          <circle cx="290" cy="18" r="3" fill="rgb(244,63,94)" />
        </svg>
        <div className="ind-truck absolute -left-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-md border border-white/15 bg-[#0b1024] shadow-[0_6px_16px_-4px_rgba(99,102,241,0.6)]">
          <Truck className="h-3 w-3 text-indigo-200" strokeWidth={2} />
        </div>
      </div>
      <div className="mt-1 grid grid-cols-3 gap-1.5 text-center">
        <div className="rounded-md border border-white/[0.06] bg-white/[0.02] py-1">
          <div className="text-[9px] uppercase tracking-wider text-white/40">ETA</div>
          <div className="font-mono text-[11px] font-semibold text-white">{eta}m</div>
        </div>
        <div className="rounded-md border border-white/[0.06] bg-white/[0.02] py-1">
          <div className="text-[9px] uppercase tracking-wider text-white/40">Active</div>
          <div className="font-mono text-[11px] font-semibold text-white">128</div>
        </div>
        <div className="rounded-md border border-white/[0.06] bg-white/[0.02] py-1">
          <div className="text-[9px] uppercase tracking-wider text-white/40">SLA</div>
          <div className="font-mono text-[11px] font-semibold text-emerald-300">99.4%</div>
        </div>
      </div>
    </DemoFrame>
  );
}

/* 6. Retail — revenue + product widgets */
function RetailDemo() {
  const rev = useCountUp(12.8, 1500, 1);
  const orders = useCountUp(384, 1200);
  const bars = [0.45, 0.62, 0.5, 0.78, 0.6, 0.88, 0.72, 0.95, 0.68, 0.82];
  return (
    <DemoFrame>
      <div className="flex items-center justify-between">
        <div className="text-[10.5px] font-medium uppercase tracking-[0.12em] text-white/45">Today · Commerce</div>
        <LiveDot label="Live" />
      </div>
      <div className="mt-1.5 grid grid-cols-2 gap-2">
        <div className="rounded-md border border-white/[0.06] bg-white/[0.02] p-2">
          <div className="text-[9.5px] uppercase tracking-wider text-white/40">Revenue</div>
          <div className="font-mono text-[15px] font-semibold text-white">${rev}K</div>
          <div className="text-[9.5px] text-emerald-300">▲ 8.2%</div>
        </div>
        <div className="rounded-md border border-white/[0.06] bg-white/[0.02] p-2">
          <div className="text-[9.5px] uppercase tracking-wider text-white/40">Orders</div>
          <div className="font-mono text-[15px] font-semibold text-white">{orders}</div>
          <div className="text-[9.5px] text-sky-300">AOV $34</div>
        </div>
      </div>
      <div className="mt-2 flex h-[42px] items-end gap-1">
        {bars.map((h, i) => (
          <div key={i} className="ind-bar flex-1 rounded-sm bg-gradient-to-t from-rose-500/60 to-rose-300/90" style={{ ["--h" as string]: String(h), animationDelay: `${i * 0.12}s` }} />
        ))}
      </div>
    </DemoFrame>
  );
}

/* 7. Real Estate — lead kanban */
function RealEstateDemo() {
  const cols = [
    { l: "New", n: 24, c: "sky" },
    { l: "Qualified", n: 12, c: "indigo" },
    { l: "Visit", n: 6, c: "emerald" },
  ];
  return (
    <DemoFrame>
      <div className="flex items-center justify-between">
        <div className="text-[10.5px] font-medium uppercase tracking-[0.12em] text-white/45">Lead pipeline</div>
        <span className="font-mono text-[10px] text-white/60">42 leads</span>
      </div>
      <div className="mt-2 grid grid-cols-3 gap-1.5">
        {cols.map((c) => (
          <div key={c.l} className="rounded-md border border-white/[0.06] bg-white/[0.02] p-1.5">
            <div className="flex items-center justify-between">
              <span className="text-[9.5px] uppercase tracking-wider text-white/45">{c.l}</span>
              <span className="font-mono text-[9.5px] text-white/65">{c.n}</span>
            </div>
            <div className="relative mt-1 h-[72px] overflow-hidden">
              <div className="ind-card-slide absolute inset-x-0 space-y-1">
                {[0, 1, 2].map((i) => (
                  <div key={i} className={`rounded border bg-white/[0.03] p-1 ${
                    c.c === "sky" ? "border-sky-400/20" : c.c === "indigo" ? "border-indigo-400/20" : "border-emerald-400/20"
                  }`}>
                    <div className="h-1 w-2/3 rounded bg-white/20" />
                    <div className="mt-1 h-1 w-1/2 rounded bg-white/10" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-1.5 text-[9.5px] text-emerald-300">Auto-routed to broker · 1.2s</div>
    </DemoFrame>
  );
}

/* 8. SMEs — KPI command center */
function SMEDemo() {
  const score = useCountUp(94, 1400);
  const rings = [
    { l: "Ops", v: 92, c: "rgb(110,231,183)" },
    { l: "Sales", v: 78, c: "rgb(165,180,252)" },
    { l: "Auto", v: 86, c: "rgb(244,114,182)" },
  ];
  const C = 2 * Math.PI * 18;
  return (
    <DemoFrame>
      <div className="flex items-center justify-between">
        <div className="text-[10.5px] font-medium uppercase tracking-[0.12em] text-white/45">Ops health</div>
        <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2 py-0.5 text-[10px] font-medium text-emerald-300">
          Score {score}
        </span>
      </div>
      <div className="mt-2 grid grid-cols-3 gap-1">
        {rings.map((r, i) => {
          const len = (r.v / 100) * C;
          return (
            <div key={r.l} className="flex flex-col items-center">
              <svg viewBox="0 0 44 44" className="h-12 w-12">
                <circle cx="22" cy="22" r="18" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="3" />
                <circle
                  cx="22" cy="22" r="18" fill="none" stroke={r.c} strokeWidth="3" strokeLinecap="round"
                  transform="rotate(-90 22 22)"
                  strokeDasharray={C}
                  className="ind-ring"
                  style={{ ["--circ" as string]: String(C), ["--len" as string]: String(len), animationDelay: `${i * 0.2}s` }}
                />
                <text x="22" y="25" textAnchor="middle" className="fill-white font-mono text-[10px]">{r.v}</text>
              </svg>
              <div className="text-[9.5px] text-white/55">{r.l}</div>
            </div>
          );
        })}
      </div>
      <div className="mt-1 flex items-center justify-between rounded-md border border-white/[0.06] bg-white/[0.02] px-2 py-1">
        <span className="text-[10px] text-white/55">Automations active</span>
        <span className="font-mono text-[10.5px] text-white">23 / 25</span>
      </div>
    </DemoFrame>
  );
}

function Industries() {
  const items = [
    { i: Plane, t: "Travel & Tourism", d: "Booking engines, itinerary tools, ops dashboards.", chips: ["+120% bookings", "12 brands"], Demo: TravelDemo },
    { i: Stamp, t: "Immigration", d: "Case mgmt, document workflows, client portals.", chips: ["+45% conv.", "6 firms"], Demo: ImmigrationDemo },
    { i: GraduationCap, t: "Education", d: "Lead funnels, counsellor CRMs, student journeys.", chips: ["+70% enrol", "9 partners"], Demo: EducationDemo },
    { i: HeartPulse, t: "Healthcare", d: "Patient intake, appointments, compliance-ready.", chips: ["HIPAA ready", "4 clinics"], Demo: HealthcareDemo },
    { i: Truck, t: "Logistics", d: "Tracking, dispatch, automation, partner APIs.", chips: ["99.9% SLA", "8 hubs"], Demo: LogisticsDemo },
    { i: ShoppingBag, t: "Retail & E-commerce", d: "Storefronts, OMS, loyalty, WhatsApp commerce.", chips: ["3.2× LTV", "14 stores"], Demo: RetailDemo },
    { i: Building2, t: "Real Estate", d: "Listings, lead routing, broker pipelines.", chips: ["+58% leads", "5 brokers"], Demo: RealEstateDemo },
    { i: Briefcase, t: "SMEs", d: "Operating systems for service businesses.", chips: ["Ship in 6w", "60+ teams"], Demo: SMEDemo },
  ];
  return (
    <section className="relative py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(99,102,241,0.06),transparent_70%)]" />
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="Industries"
          title={<>Deep expertise across <span className="text-gradient-brand">industries</span>.</>}
          subtitle="We build high-performance operating systems tailored for industries where speed, trust, and operational excellence matter."
        />

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <a
              key={it.t}
              href="#contact"
              className="card-premium tilt group relative block overflow-hidden p-5"
            >
              <div className="flex items-start justify-between">
                <div className="icon-tile">
                  <it.i className="h-[18px] w-[18px]" strokeWidth={1.6} />
                </div>
                <ArrowUpRight className="h-4 w-4 text-white/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white/80" strokeWidth={1.8} />
              </div>
              <h3
                className="mt-4 text-[15.5px] font-medium tracking-[-0.015em] text-white"
                style={{ fontFamily: "Space Grotesk, Inter, sans-serif" }}
              >
                {it.t}
              </h3>
              <p className="mt-1.5 text-[12.5px] leading-[1.55] text-white/55">{it.d}</p>

              <it.Demo />

              <div className="mt-4 flex flex-wrap gap-1.5">
                {it.chips.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[10.5px] font-medium text-white/70"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Why Pleco ------------------------------- */

function WhyPleco() {
  const items = [
    {
      i: Zap,
      t: "Ship in weeks, not quarters",
      d: "Fixed-scope sprints, weekly demos, no theatrical kickoffs. You see working software inside 14 days.",
      points: ["Fixed-scope sprints", "Weekly working demos", "Production in 6–8 weeks"],
    },
    {
      i: Layers,
      t: "One team, full stack",
      d: "Design, engineering, automation, and systems — under one roof. No agency handoffs, no integration tax.",
      points: ["Senior product engineers", "In-house design + AI", "Single point of contact"],
    },
    {
      i: ShieldCheck,
      t: "Built to scale with you",
      d: "Architecture reviewed for 10× growth from day one. No throwaway rewrites at the first inflection point.",
      points: ["Cloud-native by default", "Role-based access + audit", "Cost-modelled at every layer"],
    },
    {
      i: TrendingUp,
      t: "Outcomes, not deliverables",
      d: "Every engagement is tied to a measurable revenue or efficiency KPI. We report on outcomes — not tickets closed.",
      points: ["Revenue & efficiency KPIs", "Monthly business reviews", "Continuous iteration"],
    },
  ];
  return (
    <section className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="Why Pleco Lab"
          title={<>The unfair advantage of a <span className="text-gradient-brand">product team</span>.</>}
          subtitle="A partner that combines product thinking, engineering, and operational depth — under one roof."
        />

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          {items.map((it) => (
            <div key={it.t} className="card-premium relative overflow-hidden p-6 sm:p-7">
              <div className="flex items-start gap-4">
                <div className="icon-tile icon-tile-lg shrink-0">
                  <it.i className="h-[18px] w-[18px]" strokeWidth={1.6} />
                </div>
                <div>
                  <h3
                    className="text-[18px] font-semibold tracking-[-0.02em] text-white sm:text-[20px]"
                    style={{ fontFamily: "Space Grotesk, Inter, sans-serif" }}
                  >
                    {it.t}
                  </h3>
                  <p className="mt-2 text-[14px] leading-[1.65] text-white/65">{it.d}</p>
                  <ul className="mt-4 space-y-1.5">
                    {it.points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-[13px] text-white/75">
                        <div className="flex h-4 w-4 items-center justify-center rounded-full bg-indigo-500/15 ring-1 ring-indigo-400/30">
                          <Check className="h-2.5 w-2.5 text-indigo-200" strokeWidth={2} />
                        </div>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- Case Studies ----------------------------- */

function CaseStudies() {
  const studies = [
    {
      tag: "Immigration",
      title: "Built an end-to-end case CRM for a global immigration firm.",
      metric: "+45%",
      label: "Conversion rate",
      color: "#818cf8",
      data: gen(20, 30, 70),
      quote: "Our consultants close 2× faster.",
      person: "Priya N., Director of Ops",
    },
    {
      tag: "Travel",
      title: "Automated bookings & WhatsApp ops for a leading travel agency.",
      metric: "+120%",
      label: "Bookings / month",
      color: "#c084fc",
      data: gen(20, 20, 90),
      quote: "We scaled without scaling headcount.",
      person: "Arjun M., Founder",
    },
    {
      tag: "Education",
      title: "Unified counsellor pipelines for a multi-country edtech.",
      metric: "+70%",
      label: "Lead-to-enrol growth",
      color: "#67e8f9",
      data: gen(20, 25, 80),
      quote: "Best decision we made this year.",
      person: "Sara K., Head of Growth",
    },
  ];

  return (
    <section className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="Results"
          title={<>Outcomes, not <span className="text-gradient-brand">deliverables</span>.</>}
          subtitle="What growth looks like when product, engineering, and operations move together."
        />

        <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {studies.map((s) => (
            <article
              key={s.title}
              className="card-premium group relative flex flex-col overflow-hidden p-6"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-white/70">
                  {s.tag}
                </span>
                <span
                  className="wordmark text-[12.5px] tracking-tight"
                  style={{ opacity: 0.55 }}
                >
                  {s.tag === "Immigration" ? "GlobalVisa" : s.tag === "Travel" ? "FlyWorld" : "EduConnect"}
                </span>
              </div>

              <h3
                className="mt-4 text-[17px] font-medium leading-snug tracking-[-0.02em] text-white"
                style={{ fontFamily: "Space Grotesk, Inter, sans-serif" }}
              >
                {s.title}
              </h3>

              {/* Premium metric block with sparkline */}
              <div
                className="mt-5 rounded-xl border border-white/[0.07] p-4"
                style={{
                  background: `radial-gradient(120% 100% at 0% 0%, ${s.color}14, transparent 60%), rgba(0,0,0,0.25)`,
                }}
              >
                <div className="flex items-end justify-between">
                  <div>
                    <div className="flex items-baseline gap-2">
                      <div
                        className="text-[34px] font-semibold leading-none tracking-[-0.035em]"
                        style={{
                          background: `linear-gradient(135deg, #ffffff, ${s.color})`,
                          WebkitBackgroundClip: "text",
                          backgroundClip: "text",
                          color: "transparent",
                          fontFamily: "Space Grotesk, Inter, sans-serif",
                        }}
                      >
                        {s.metric}
                      </div>
                      <span
                        className="inline-flex items-center gap-0.5 rounded-md px-1.5 py-0.5 text-[10px] font-semibold"
                        style={{
                          background: `${s.color}22`,
                          color: s.color,
                          border: `1px solid ${s.color}40`,
                        }}
                      >
                        <TrendingUp className="h-2.5 w-2.5" strokeWidth={2} /> YoY
                      </span>
                    </div>
                    <div className="eyebrow mt-2">{s.label}</div>
                  </div>
                </div>
                <div className="mt-3 h-[58px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={s.data} margin={{ top: 2, right: 2, bottom: 0, left: 0 }}>
                      <defs>
                        <linearGradient id={`cs-${s.tag}`} x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor={s.color} stopOpacity={0.55} />
                          <stop offset="100%" stopColor={s.color} stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <Area
                        type="monotone"
                        dataKey="y"
                        stroke={s.color}
                        strokeWidth={2}
                        fill={`url(#cs-${s.tag})`}
                        isAnimationActive={false}
                        animationDuration={1200}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <blockquote className="mt-5 text-[13.5px] leading-[1.65] text-white/75">
                "{s.quote}"
              </blockquote>
              <div className="mt-1.5 text-[12px] text-white/45">{s.person}</div>

              <a
                href="#"
                className="mt-5 inline-flex items-center gap-1 text-[13px] font-medium text-indigo-300 transition hover:text-indigo-200"
              >
                Read case study <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.8} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function gen(n: number, lo: number, hi: number) {
  const arr: { x: number; y: number }[] = [];
  let v = lo;
  for (let i = 0; i < n; i++) {
    v += (hi - lo) / n + (Math.sin(i) * (hi - lo)) / (n * 2);
    arr.push({ x: i, y: v });
  }
  return arr;
}

/* --------------------------------- Final CTA ------------------------------ */

function FinalCTA() {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 px-5 py-14 text-center sm:px-16 sm:py-20">
          {/* Animated conic mesh */}
          <div className="absolute inset-0 -z-10 overflow-hidden rounded-3xl">
            <div className="mesh-conic" />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(60% 80% at 50% 0%, rgba(99,102,241,0.30), transparent 60%), linear-gradient(180deg, rgba(10,17,48,0.6) 0%, rgba(6,11,26,0.95) 100%)",
              }}
            />
            {/* Floating orbs */}
            <div
              className="float-orb absolute -left-16 top-8 h-40 w-40 rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(129,140,248,0.55), transparent 70%)",
                filter: "blur(20px)",
              }}
            />
            <div
              className="float-orb absolute -right-12 bottom-6 h-44 w-44 rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(192,132,252,0.45), transparent 70%)",
                filter: "blur(24px)",
                animationDelay: "3s",
              }}
            />
          </div>
          <div className="absolute inset-0 -z-10 grid-bg opacity-30" />

          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[11.5px] text-white/80 backdrop-blur">
            <Sparkles className="h-3 w-3 text-indigo-300" strokeWidth={1.6} />
            Start in days, not quarters
          </div>

          <h2
            className="mx-auto mt-5 max-w-3xl text-[30px] font-semibold leading-[1.03] tracking-[-0.035em] sm:text-[52px]"
            style={{ fontFamily: "Space Grotesk, Inter, sans-serif" }}
          >
            <span className="text-white">Ready to build your </span>
            <span className="text-sweep">growth engine?</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-[14.5px] leading-[1.65] text-white/70 sm:text-[15.5px]">
            Book a free 30-minute consultation. We'll map the system, the stack,
            and the path to results — no obligation.
          </p>

          <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <PrimaryButton size="lg" className="w-full justify-center sm:w-auto">
              Book free consultation <ArrowRight className="btn-arrow h-4 w-4" />
            </PrimaryButton>
            <GhostButton size="lg" className="w-full justify-center sm:w-auto">Let's talk</GhostButton>
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[12.5px] text-white/55">
            <span className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-emerald-400" strokeWidth={2} /> No commitment</span>
            <span className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-emerald-400" strokeWidth={2} /> Reply within 24h</span>
            <span className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-emerald-400" strokeWidth={2} /> NDA on request</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- Footer -------------------------------- */

function Footer() {
  const cols = [
    {
      h: "Solutions",
      links: ["CRM Development", "Website Development", "Business Automation", "AI Agents", "WhatsApp Automation", "Integrations"],
    },
    {
      h: "Company",
      links: ["About", "Careers", "Customers", "Partners", "Contact"],
    },
    {
      h: "Resources",
      links: ["Blog", "Case Studies", "Documentation", "Changelog", "Trust & Security"],
    },
  ];

  return (
    <footer className="relative border-t border-white/[0.06] pt-14 pb-8">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr,3fr]">
          {/* Brand */}
          <div>
            <Logo />
            <p className="mt-4 max-w-sm text-[13.5px] leading-[1.65] text-white/55">
              Premium technology partner for growth-focused businesses across
              India, Africa, and Asia. Product, engineering, and operations —
              under one roof.
            </p>
            <div className="mt-5 space-y-2 text-[13px] text-white/60">
              <div className="flex items-center gap-2.5">
                <MapPin className="h-3.5 w-3.5 text-indigo-300" strokeWidth={1.6} />
                Headquartered in India · Serving globally
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-3.5 w-3.5 text-indigo-300" strokeWidth={1.6} />
                hello@plecolab.io
              </div>
            </div>

            <div className="mt-6 flex gap-2.5">
              {[Twitter, Linkedin, Github].map((I, i) => (
                <a
                  key={i}
                  href="#"
                  className="social-tile flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-white/65"
                >
                  <I className="h-4 w-4" strokeWidth={1.6} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {cols.map((c) => (
              <div key={c.h}>
                <div className="eyebrow text-white/70">{c.h}</div>
                <ul className="mt-4 space-y-2.5">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a href="#" className="text-[13px] text-white/55 transition hover:text-white">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="hairline mt-12" />

        <div className="mt-5 flex flex-col items-center justify-between gap-3 text-[12.5px] text-white/45 sm:flex-row">
          <div>© {new Date().getFullYear()} Pleco Lab. All rights reserved.</div>
          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-2.5 py-1 text-[11.5px] font-medium text-emerald-300">
              <span className="status-dot" />
              All systems operational
            </span>
            <a href="#" className="transition hover:text-white/80">Privacy</a>
            <a href="#" className="transition hover:text-white/80">Terms</a>
            <a href="#" className="transition hover:text-white/80">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
