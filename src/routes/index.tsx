import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
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
  TrendingUp,
  Star,
  Linkedin,
  Twitter,
  Github,
  Mail,
  MapPin,
  CheckCircle2,
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
  const links = ["Solutions", "Industries", "Case Studies", "Company", "Pricing"];
  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="mx-auto mt-4 max-w-7xl px-4">
        <div className="glass-strong flex h-14 items-center justify-between rounded-2xl px-4 pl-5">
          <Logo />
          <nav className="hidden items-center gap-7 md:flex">
            {links.map((l) => (
              <a
                key={l}
                href="#"
                className="text-[13.5px] font-medium text-white/70 transition hover:text-white"
              >
                {l}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="#"
              className="hidden text-[13.5px] font-medium text-white/70 transition hover:text-white sm:block"
            >
              Sign in
            </a>
            <PrimaryButton size="sm">Book a call <ArrowRight className="h-3.5 w-3.5" /></PrimaryButton>
          </div>
        </div>
      </div>
    </header>
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
      className={`group relative inline-flex items-center gap-1.5 overflow-hidden rounded-full font-medium text-white transition active:scale-[0.98] ${sizes[size]} ${className}`}
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
  const ease = [0.22, 1, 0.36, 1] as const;
  const fade = {
    hidden: { opacity: 0, y: 18 },
    show: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: 0.05 * i, ease },
    }),
  } as const;

  return (
    <section className="relative pt-16 md:pt-24">
      <div className="absolute inset-0 -z-10 grid-bg" />
      {/* Ambient hero glow */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[720px]"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(99,102,241,0.18), transparent 70%)",
        }}
      />
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr,1fr]">
          {/* Left */}
          <div className="relative">
            <motion.div
              variants={fade}
              initial="hidden"
              animate="show"
              custom={0}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[12.5px] text-white/80 backdrop-blur"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              Now onboarding clients across India, Africa & Asia
            </motion.div>

            <motion.h1
              variants={fade}
              initial="hidden"
              animate="show"
              custom={1}
              className="text-[44px] font-semibold leading-[1.03] tracking-[-0.025em] text-white sm:text-[56px] lg:text-[68px]"
              style={{ fontFamily: "Space Grotesk, Inter, sans-serif" }}
            >
              Technology that helps
              <br />
              businesses <span className="text-gradient-brand">scale.</span>
            </motion.h1>

            <motion.p
              variants={fade}
              initial="hidden"
              animate="show"
              custom={2}
              className="mt-6 max-w-xl text-[16.5px] leading-relaxed text-white/65"
            >
              Pleco Lab builds custom websites, CRM platforms, AI agents,
              automation systems, and internal software for ambitious
              businesses across India, Africa, and Asia.
            </motion.p>

            <motion.div
              variants={fade}
              initial="hidden"
              animate="show"
              custom={3}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <PrimaryButton size="lg">
                Book free consultation
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </PrimaryButton>
              <GhostButton size="lg">
                Explore solutions
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </GhostButton>
            </motion.div>

            {/* Trust stats */}
            <motion.div
              variants={fade}
              initial="hidden"
              animate="show"
              custom={4}
              className="mt-12 grid max-w-xl grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4"
            >
              {[
                { v: 250, suffix: "+", l: "Businesses served" },
                { v: 15, suffix: "+", l: "Countries" },
                { v: 98, suffix: "%", l: "Client satisfaction" },
                { v: 24, suffix: "/7", l: "Support" },
              ].map((s) => (
                <div key={s.l}>
                  <div
                    className="text-[26px] font-semibold tracking-tight text-white"
                    style={{ fontFamily: "Space Grotesk, Inter, sans-serif" }}
                  >
                    <CountUp to={s.v} />
                    {s.suffix}
                  </div>
                  <div className="mt-1 text-[12px] uppercase tracking-wider text-white/45">
                    {s.l}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — ecosystem visual */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <EcosystemVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- Count Up --------------------------------- */

function CountUp({ to, duration = 1.6 }: { to: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v).toString());
  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, to, { duration, ease: [0.22, 1, 0.36, 1] });
    return () => controls.stop();
  }, [inView, to, duration, mv]);
  useEffect(() => {
    return rounded.on("change", (v) => {
      if (ref.current) ref.current.textContent = v;
    });
  }, [rounded]);
  return <span ref={ref}>0</span>;
}

/* --------------------------- Ecosystem Visual ----------------------------- */

function EcosystemVisual() {
  const spark = [
    { x: 1, y: 14 }, { x: 2, y: 22 }, { x: 3, y: 19 }, { x: 4, y: 28 },
    { x: 5, y: 26 }, { x: 6, y: 36 }, { x: 7, y: 42 }, { x: 8, y: 40 },
    { x: 9, y: 52 }, { x: 10, y: 58 }, { x: 11, y: 55 }, { x: 12, y: 68 },
  ];

  const nodes: {
    icon: typeof Globe2;
    label: string;
    title: string;
    accent: string;
    delay: number;
    side: "left" | "right";
    body: React.ReactNode;
  }[] = [
    {
      icon: Globe2,
      label: "Website",
      title: "plecolab.io",
      accent: "#60a5fa",
      delay: 0.1,
      side: "left",
      body: <BrowserMini />,
    },
    {
      icon: Users,
      label: "CRM Platform",
      title: "New lead · Aarav Mehta",
      accent: "#818cf8",
      delay: 0.25,
      side: "right",
      body: <LeadRow />,
    },
    {
      icon: MessageCircle,
      label: "WhatsApp Automation",
      title: "Auto-reply sent",
      accent: "#34d399",
      delay: 0.4,
      side: "left",
      body: <ChatBubbles />,
    },
    {
      icon: Bot,
      label: "AI Agent",
      title: "Qualified · 92% intent",
      accent: "#c084fc",
      delay: 0.55,
      side: "right",
      body: <AIAgent />,
    },
    {
      icon: LayoutDashboard,
      label: "Analytics",
      title: "Revenue +28.4%",
      accent: "#67e8f9",
      delay: 0.7,
      side: "left",
      body: <SparkChart data={spark} />,
    },
  ];

  return (
    <div className="relative mx-auto max-w-[560px]">
      {/* Halo */}
      <div
        className="pointer-events-none absolute -inset-16 -z-10"
        style={{
          background:
            "radial-gradient(55% 45% at 50% 45%, rgba(129,140,248,0.32), transparent 70%)",
        }}
      />

      {/* Connection spine */}
      <svg
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-full w-[120px] -translate-x-1/2"
        viewBox="0 0 120 720"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="spine" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#a78bfa" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#67e8f9" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="pulse" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#c4b5fd" stopOpacity="0.9" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <line x1="60" y1="20" x2="60" y2="700" stroke="url(#spine)" strokeWidth="1.5" />
        <motion.line
          x1="60"
          y1="0"
          x2="60"
          y2="120"
          stroke="url(#pulse)"
          strokeWidth="2"
          initial={{ y: -120 }}
          animate={{ y: [-120, 720] }}
          transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>

      <div className="relative flex flex-col gap-5 py-4">
        {nodes.map((n, i) => (
          <EcoCard key={n.label} {...n} index={i} />
        ))}
      </div>
    </div>
  );
}

function EcoCard({
  icon: Icon,
  label,
  title,
  accent,
  body,
  delay,
  side,
  index,
}: {
  icon: typeof Globe2;
  label: string;
  title: string;
  accent: string;
  body: React.ReactNode;
  delay: number;
  side: "left" | "right";
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: side === "left" ? -30 : 30, y: 10 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 + delay, ease: [0.22, 1, 0.36, 1] }}
      className={`relative flex ${side === "left" ? "justify-start pr-16" : "justify-end pl-16"}`}
    >
      {/* Connector dot on spine */}
      <div
        className="absolute left-1/2 top-1/2 z-10 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background: accent,
          boxShadow: `0 0 0 4px rgba(255,255,255,0.04), 0 0 18px ${accent}`,
        }}
      >
        <span
          className="absolute inset-0 animate-ping rounded-full"
          style={{ background: accent, opacity: 0.35, animationDelay: `${index * 0.4}s` }}
        />
      </div>

      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{
          duration: 5 + index * 0.3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.4,
        }}
        className="glass-strong group relative w-[260px] rounded-2xl p-3.5 transition hover:border-white/20"
        style={{
          boxShadow: `0 20px 50px -25px ${accent}55, inset 0 1px 0 rgba(255,255,255,0.06)`,
        }}
      >
        <div className="flex items-center gap-2.5">
          <div
            className="flex h-8 w-8 items-center justify-center rounded-lg"
            style={{
              background: `linear-gradient(135deg, ${accent}30, ${accent}10)`,
              boxShadow: `inset 0 0 0 1px ${accent}40`,
            }}
          >
            <Icon className="h-4 w-4" style={{ color: accent }} />
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-[10.5px] uppercase tracking-wider text-white/45">
              {label}
            </div>
            <div className="truncate text-[12.5px] font-medium text-white">
              {title}
            </div>
          </div>
          <CheckCircle2 className="h-3.5 w-3.5 text-white/30" />
        </div>
        <div className="mt-3">{body}</div>
      </motion.div>
    </motion.div>
  );
}

/* ------- Card bodies ------- */

function BrowserMini() {
  return (
    <div className="overflow-hidden rounded-lg border border-white/[0.07] bg-white/[0.02]">
      <div className="flex items-center gap-1 border-b border-white/[0.06] px-2 py-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
        <div className="ml-2 h-3 flex-1 rounded-sm bg-white/[0.04]" />
      </div>
      <div className="space-y-1.5 p-2.5">
        <div className="h-2 w-2/3 rounded bg-gradient-to-r from-indigo-400/60 to-violet-400/40" />
        <div className="h-1.5 w-full rounded bg-white/[0.06]" />
        <div className="h-1.5 w-4/5 rounded bg-white/[0.06]" />
        <div className="mt-2 flex gap-1.5">
          <div className="h-5 w-14 rounded bg-indigo-500/70" />
          <div className="h-5 w-12 rounded border border-white/10" />
        </div>
      </div>
    </div>
  );
}

function LeadRow() {
  return (
    <div className="space-y-1.5">
      {[
        { n: "Aarav Mehta", s: "Hot", c: "#34d399" },
        { n: "Zanele Dlamini", s: "New", c: "#818cf8" },
        { n: "Rohit Kumar", s: "Qualified", c: "#c084fc" },
      ].map((r, i) => (
        <div
          key={r.n}
          className="flex items-center justify-between rounded-md border border-white/[0.06] bg-white/[0.02] px-2 py-1.5"
        >
          <div className="flex items-center gap-2">
            <div
              className="h-5 w-5 rounded-full"
              style={{
                background: `linear-gradient(135deg, ${r.c}, ${r.c}66)`,
              }}
            />
            <span className="text-[10.5px] text-white/80">{r.n}</span>
          </div>
          <span
            className="rounded px-1.5 py-0.5 text-[9px] font-medium"
            style={{ background: `${r.c}22`, color: r.c }}
          >
            {r.s}
          </span>
        </div>
      ))}
    </div>
  );
}

function ChatBubbles() {
  return (
    <div className="space-y-1.5">
      <div className="max-w-[80%] rounded-lg rounded-bl-sm bg-white/[0.06] px-2.5 py-1.5 text-[10.5px] text-white/80">
        Hi! Is the Bali package still available?
      </div>
      <div
        className="ml-auto max-w-[85%] rounded-lg rounded-br-sm px-2.5 py-1.5 text-[10.5px] text-white"
        style={{ background: "linear-gradient(135deg, #10b981, #059669)" }}
      >
        Yes! Booking link sent to your inbox ✨
      </div>
      <div className="flex items-center gap-1 pt-0.5 text-[9.5px] text-white/40">
        <span className="h-1 w-1 animate-pulse rounded-full bg-emerald-400" />
        Auto-replied in 0.4s
      </div>
    </div>
  );
}

function AIAgent() {
  return (
    <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-2">
      <div className="flex items-center justify-between">
        <span className="text-[10px] text-white/55">Intent score</span>
        <span className="text-[10.5px] font-semibold text-white">92%</span>
      </div>
      <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "92%" }}
          transition={{ duration: 1.4, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full"
          style={{
            background: "linear-gradient(90deg, #a78bfa, #c084fc, #f0abfc)",
            boxShadow: "0 0 12px rgba(192,132,252,0.6)",
          }}
        />
      </div>
      <div className="mt-2 flex items-center gap-1.5 text-[10px] text-white/55">
        <Sparkles className="h-3 w-3 text-violet-300" />
        Routing to sales pipeline…
      </div>
    </div>
  );
}

function SparkChart({ data }: { data: { x: number; y: number }[] }) {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between">
        <span className="text-[10px] text-white/55">MRR · last 12mo</span>
        <span className="inline-flex items-center gap-0.5 text-[10px] font-medium text-cyan-300">
          <TrendingUp className="h-2.5 w-2.5" /> +28.4%
        </span>
      </div>
      <div className="h-[58px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 4, right: 0, bottom: 0, left: 0 }}>
            <defs>
              <linearGradient id="ecoArea" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#67e8f9" stopOpacity={0.55} />
                <stop offset="100%" stopColor="#67e8f9" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="y"
              stroke="#a5f3fc"
              strokeWidth={1.75}
              fill="url(#ecoArea)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

/* ---------------------------------- Trust --------------------------------- */

function TrustStrip() {
  const industries = [
    { i: Plane, l: "Travel" },
    { i: Stamp, l: "Immigration" },
    { i: GraduationCap, l: "Education" },
    { i: Truck, l: "Logistics" },
    { i: HeartPulse, l: "Healthcare" },
    { i: ShoppingBag, l: "Retail" },
    { i: Building2, l: "Real Estate" },
    { i: Briefcase, l: "SMEs" },
  ];
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center text-[12.5px] uppercase tracking-[0.2em] text-white/40">
          Trusted by businesses across industries
        </div>
        <div className="hairline mx-auto mt-6 max-w-3xl" />
        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4 lg:grid-cols-8">
          {industries.map((it) => (
            <div
              key={it.l}
              className="flex items-center justify-center gap-2 text-white/55 transition hover:text-white"
            >
              <it.i className="h-4 w-4" />
              <span
                className="text-[14px] font-medium tracking-tight"
                style={{ fontFamily: "Space Grotesk, Inter, sans-serif" }}
              >
                {it.l}
              </span>
            </div>
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
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11.5px] font-medium uppercase tracking-wider text-white/70">
        <span className="h-1 w-1 rounded-full bg-indigo-400" />
        {eyebrow}
      </div>
      <h2
        className="text-[36px] font-semibold leading-[1.08] tracking-[-0.02em] text-white sm:text-[44px]"
        style={{ fontFamily: "Space Grotesk, Inter, sans-serif" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-[15.5px] leading-relaxed text-white/60">{subtitle}</p>
      )}
    </div>
  );
}

/* -------------------------------- Services -------------------------------- */

function Services() {
  const items = [
    {
      i: LayoutDashboard,
      t: "Custom CRM Development",
      d: "Tailor-made CRM platforms built around your sales, ops, and customer workflows.",
      span: "md:col-span-2 md:row-span-2",
      featured: true,
    },
    { i: Globe2, t: "Website Development", d: "Conversion-tuned websites that look premium and load fast." },
    { i: Workflow, t: "Business Automation", d: "Eliminate repetitive ops with workflows that just work." },
    { i: Bot, t: "AI Agents & AI Solutions", d: "Production AI agents that handle real customer work." },
    { i: Users, t: "Lead Management Systems", d: "Capture, score, route, and convert leads end-to-end." },
    { i: MessageCircle, t: "WhatsApp Automation", d: "Native WhatsApp flows that scale support and sales." },
    { i: Code2, t: "Custom Software", d: "Internal tools and bespoke software for your stack." },
    { i: Plug, t: "Integrations & APIs", d: "Connect every tool — clean, observable, reliable." },
  ];
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="Solutions"
          title={<>One partner. <span className="text-gradient-brand">Every layer</span> of your stack.</>}
          subtitle="From the first lead to the back-office system that runs your business — we design, build, and operate it."
        />

        <div className="mt-14 grid auto-rows-[minmax(180px,auto)] grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
          {items.map((it, idx) => (
            <ServiceCard key={it.t} {...it} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  i: Icon,
  t,
  d,
  span,
  featured,
  idx,
}: {
  i: any;
  t: string;
  d: string;
  span?: string;
  featured?: boolean;
  idx: number;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-b from-white/[0.04] to-white/[0.015] p-6 transition hover:border-white/15 ${span ?? ""}`}
    >
      {/* Hover glow */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(400px circle at var(--mx,50%) var(--my,0%), rgba(129,140,248,0.12), transparent 40%)",
        }}
      />

      <div className="flex h-full flex-col">
        <div className="flex items-start justify-between">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-indigo-500/20 to-violet-500/5">
            <Icon className="h-4.5 w-4.5 text-indigo-200" />
          </div>
          <ArrowUpRight className="h-4 w-4 text-white/30 transition group-hover:text-white/80" />
        </div>

        <div className={featured ? "mt-auto pt-8" : "mt-6"}>
          <h3
            className={`font-medium tracking-tight text-white ${featured ? "text-[22px]" : "text-[16px]"}`}
            style={{ fontFamily: "Space Grotesk, Inter, sans-serif" }}
          >
            {t}
          </h3>
          <p className={`mt-2 text-white/55 ${featured ? "text-[14.5px] leading-relaxed max-w-md" : "text-[13px] leading-relaxed"}`}>
            {d}
          </p>
        </div>

        {featured && <FeaturedVisual />}
      </div>
    </div>
  );
}

function FeaturedVisual() {
  const data = Array.from({ length: 20 }, (_, i) => ({
    x: i,
    y: 30 + Math.sin(i / 2) * 10 + i * 1.5,
  }));
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 -z-0 h-44 opacity-90">
      <div className="relative h-full w-full">
        <div className="absolute right-6 top-6 grid grid-cols-3 gap-2">
          {["Leads", "Deals", "Revenue"].map((l, i) => (
            <div key={l} className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1.5 backdrop-blur">
              <div className="text-[9px] text-white/45">{l}</div>
              <div className="text-[11px] font-medium text-white">
                {["1,248", "312", "$48K"][i]}
              </div>
            </div>
          ))}
        </div>
        <div className="absolute inset-x-0 bottom-0 h-24 opacity-70">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <Line
                dataKey="y"
                stroke="#a5b4fc"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------- Industries ------------------------------- */

function Industries() {
  const items = [
    { i: Plane, t: "Travel & Tourism", d: "Booking engines, itinerary tools, ops dashboards." },
    { i: Stamp, t: "Immigration", d: "Case mgmt, document workflows, client portals." },
    { i: GraduationCap, t: "Education", d: "Lead funnels, counsellor CRMs, student journeys." },
    { i: HeartPulse, t: "Healthcare", d: "Patient intake, appointments, compliance-ready." },
    { i: Truck, t: "Logistics", d: "Tracking, dispatch, automation, partner APIs." },
    { i: ShoppingBag, t: "Retail & E-commerce", d: "Storefronts, OMS, loyalty, WhatsApp commerce." },
    { i: Building2, t: "Real Estate", d: "Listings, lead routing, broker pipelines." },
    { i: Briefcase, t: "SMEs", d: "Operating systems for service businesses." },
  ];
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="Industries"
          title={<>Deep expertise across <span className="text-gradient-brand">industries</span>.</>}
          subtitle="We've shipped real outcomes for the categories where speed, trust, and operations matter most."
        />

        <div className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div
              key={it.t}
              className="group relative rounded-2xl border border-white/[0.07] bg-gradient-to-b from-white/[0.035] to-white/[0.01] p-5 transition hover:border-white/15 hover:bg-white/[0.05]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-indigo-500/15 to-violet-500/5">
                <it.i className="h-5 w-5 text-indigo-200" />
              </div>
              <h3
                className="mt-5 text-[15.5px] font-medium tracking-tight text-white"
                style={{ fontFamily: "Space Grotesk, Inter, sans-serif" }}
              >
                {it.t}
              </h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-white/55">{it.d}</p>
              <div className="mt-4 inline-flex items-center gap-1 text-[12px] font-medium text-indigo-300 opacity-0 transition group-hover:opacity-100">
                Learn more <ArrowRight className="h-3 w-3" />
              </div>
            </div>
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
      i: Briefcase,
      t: "Industry Expertise",
      d: "Years operating inside travel, immigration, education and services — we speak your workflows.",
      points: ["Vertical-specific blueprints", "Ops-aware design", "Compliance-ready"],
    },
    {
      i: Layers,
      t: "Custom-Built Solutions",
      d: "No bloated SaaS. We build software shaped exactly around how your business actually works.",
      points: ["Bespoke data models", "Owned roadmap", "Integrated stack"],
    },
    {
      i: ShieldCheck,
      t: "Scalable & Secure",
      d: "Architecture and security primitives that scale from 10 users to 10,000 without rewrites.",
      points: ["Role-based access", "Audit trails", "Cloud-native"],
    },
    {
      i: Headphones,
      t: "End-to-End Support",
      d: "From kickoff to ongoing iteration — one team that designs, ships, and supports it all.",
      points: ["Dedicated success", "24/7 monitoring", "Continuous delivery"],
    },
  ];
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="Why Pleco Lab"
          title={<>We understand business. <span className="text-gradient-brand">We deliver results.</span></>}
          subtitle="A partner that combines product thinking, engineering, and operational depth — under one roof."
        />

        <div className="mt-14 grid grid-cols-1 gap-3 md:grid-cols-2">
          {items.map((it) => (
            <div
              key={it.t}
              className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-7"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/20 to-violet-500/5">
                  <it.i className="h-5 w-5 text-indigo-200" />
                </div>
                <div>
                  <h3
                    className="text-[20px] font-medium tracking-tight text-white"
                    style={{ fontFamily: "Space Grotesk, Inter, sans-serif" }}
                  >
                    {it.t}
                  </h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-white/60">{it.d}</p>
                  <ul className="mt-4 space-y-1.5">
                    {it.points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-[13px] text-white/70">
                        <div className="flex h-4 w-4 items-center justify-center rounded-full bg-indigo-500/15 ring-1 ring-indigo-400/30">
                          <Check className="h-2.5 w-2.5 text-indigo-200" />
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
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="Results"
          title={<>Outcomes, not <span className="text-gradient-brand">deliverables</span>.</>}
          subtitle="What growth looks like when product, engineering, and operations move together."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {studies.map((s) => (
            <article
              key={s.title}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-6 transition hover:border-white/15"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-white/70">
                  {s.tag}
                </span>
                <div className="flex items-center gap-0.5 text-amber-300/90">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-amber-300/90" />
                  ))}
                </div>
              </div>

              <h3
                className="mt-5 text-[18px] font-medium leading-snug tracking-tight text-white"
                style={{ fontFamily: "Space Grotesk, Inter, sans-serif" }}
              >
                {s.title}
              </h3>

              <div className="mt-5 rounded-xl border border-white/[0.07] bg-black/20 p-4">
                <div className="flex items-end justify-between">
                  <div>
                    <div
                      className="text-[34px] font-semibold leading-none tracking-tight"
                      style={{
                        background: `linear-gradient(135deg, #ffffff, ${s.color})`,
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        color: "transparent",
                      }}
                    >
                      {s.metric}
                    </div>
                    <div className="mt-1.5 text-[11.5px] uppercase tracking-wider text-white/45">
                      {s.label}
                    </div>
                  </div>
                  <TrendingUp className="h-4 w-4" style={{ color: s.color }} />
                </div>
                <div className="mt-3 h-[60px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={s.data}>
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
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <blockquote className="mt-5 text-[13.5px] leading-relaxed text-white/70">
                “{s.quote}”
              </blockquote>
              <div className="mt-2 text-[12px] text-white/45">{s.person}</div>

              <a
                href="#"
                className="mt-5 inline-flex items-center gap-1 text-[13px] font-medium text-indigo-300 transition hover:text-indigo-200"
              >
                Read case study <ArrowUpRight className="h-3.5 w-3.5" />
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
    <section className="relative py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 px-8 py-20 text-center sm:px-16">
          {/* Gradient bg */}
          <div
            className="absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(60% 80% at 50% 0%, rgba(99,102,241,0.35), transparent 60%), radial-gradient(50% 80% at 80% 100%, rgba(168,85,247,0.25), transparent 60%), linear-gradient(180deg, #0a1130 0%, #060B1A 100%)",
            }}
          />
          <div className="absolute inset-0 -z-10 grid-bg opacity-40" />

          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[12px] text-white/75 backdrop-blur">
            <Sparkles className="h-3 w-3 text-indigo-300" />
            Start in days, not quarters
          </div>

          <h2
            className="mx-auto mt-6 max-w-3xl text-[40px] font-semibold leading-[1.05] tracking-[-0.025em] text-white sm:text-[56px]"
            style={{ fontFamily: "Space Grotesk, Inter, sans-serif" }}
          >
            Ready to build your <span className="text-gradient-brand">growth engine?</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-[15.5px] leading-relaxed text-white/65">
            Book a free 30-minute consultation. We'll map the system, the stack,
            and the path to results — no obligation.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <PrimaryButton size="lg">
              Book free consultation <ArrowRight className="h-4 w-4" />
            </PrimaryButton>
            <GhostButton size="lg">Let's talk</GhostButton>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[12.5px] text-white/45">
            <span className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-emerald-400" /> No commitment</span>
            <span className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-emerald-400" /> Reply within 24h</span>
            <span className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-emerald-400" /> NDA on request</span>
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
      h: "Industries",
      links: ["Travel & Tourism", "Immigration", "Education", "Healthcare", "Logistics", "Retail"],
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
    <footer className="relative border-t border-white/[0.06] pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr,3fr]">
          {/* Brand */}
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-[14px] leading-relaxed text-white/55">
              Pleco Lab is a premium technology partner helping growth-focused
              businesses across India, Africa, and Asia ship real outcomes.
            </p>
            <div className="mt-6 space-y-2.5 text-[13px] text-white/60">
              <div className="flex items-center gap-2.5">
                <MapPin className="h-3.5 w-3.5 text-indigo-300" />
                Headquartered in India · Serving globally
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-3.5 w-3.5 text-indigo-300" />
                hello@plecolab.io
              </div>
            </div>

            <div className="mt-6 flex gap-2">
              {[Twitter, Linkedin, Github].map((I, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-white/60 transition hover:border-white/20 hover:text-white"
                >
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {cols.map((c) => (
              <div key={c.h}>
                <div className="text-[12.5px] font-semibold uppercase tracking-wider text-white/85">
                  {c.h}
                </div>
                <ul className="mt-4 space-y-2.5">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a href="#" className="text-[13.5px] text-white/55 transition hover:text-white">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="hairline mt-16" />

        <div className="mt-6 flex flex-col items-center justify-between gap-3 text-[12.5px] text-white/45 sm:flex-row">
          <div>© {new Date().getFullYear()} Pleco Lab. All rights reserved.</div>
          <div className="flex items-center gap-5">
            <a href="#" className="transition hover:text-white/80">Privacy</a>
            <a href="#" className="transition hover:text-white/80">Terms</a>
            <a href="#" className="transition hover:text-white/80">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
