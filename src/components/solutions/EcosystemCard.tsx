import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { SolutionConfig } from "@/lib/solutions/types";

/**
 * Compact SVG mini-illustration keyed by slug. Absolute-positioned inside
 * the card's illustration slot so it never affects layout.
 */
function MiniIllustration({ slug, accent }: { slug: SolutionConfig["slug"]; accent: SolutionConfig["accent"] }) {
  const stroke = accent.text;
  const glow = accent.glow;
  switch (slug) {
    case "ai-agents":
      return (
        <svg viewBox="0 0 220 90" className="absolute inset-0 h-full w-full" aria-hidden>
          <defs>
            <linearGradient id={`g-${slug}`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor={accent.from} stopOpacity="0.35" />
              <stop offset="1" stopColor={accent.to} stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <rect x="10" y="14" width="120" height="24" rx="12" fill={`url(#g-${slug})`} stroke={stroke} strokeOpacity=".35" />
          <rect x="16" y="20" width="60" height="4" rx="2" fill="#fff" fillOpacity=".7" />
          <rect x="16" y="28" width="90" height="3" rx="1.5" fill="#fff" fillOpacity=".28" />
          <rect x="70" y="48" width="140" height="28" rx="14" fill="#fff" fillOpacity=".04" stroke="#fff" strokeOpacity=".08" />
          <rect x="78" y="56" width="90" height="4" rx="2" fill="#fff" fillOpacity=".75" />
          <rect x="78" y="64" width="120" height="3" rx="1.5" fill="#fff" fillOpacity=".28" />
          <circle cx="200" cy="16" r="4" fill={stroke}><animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" /></circle>
        </svg>
      );
    case "business-automation":
      return (
        <svg viewBox="0 0 220 90" className="absolute inset-0 h-full w-full" aria-hidden>
          {[0, 1, 2, 3].map((i) => (
            <g key={i}>
              <rect x={14 + i * 50} y="30" width="36" height="30" rx="8" fill="#fff" fillOpacity=".04" stroke="#fff" strokeOpacity=".12" />
              <rect x={20 + i * 50} y="38" width="16" height="3" rx="1.5" fill={stroke} fillOpacity=".7" />
              <rect x={20 + i * 50} y="45" width="24" height="2" rx="1" fill="#fff" fillOpacity=".3" />
            </g>
          ))}
          {[0, 1, 2].map((i) => (
            <line key={i} x1={50 + i * 50} y1="45" x2={64 + i * 50} y2="45" stroke={stroke} strokeOpacity=".5" strokeDasharray="3 3">
              <animate attributeName="stroke-dashoffset" from="0" to="-12" dur="1.6s" repeatCount="indefinite" />
            </line>
          ))}
        </svg>
      );
    case "mobile-app-development":
      return (
        <svg viewBox="0 0 220 90" className="absolute inset-0 h-full w-full" aria-hidden>
          <rect x="80" y="6" width="60" height="80" rx="10" fill={`url(#gm-${slug})`} stroke={stroke} strokeOpacity=".35" />
          <defs>
            <linearGradient id={`gm-${slug}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor={accent.from} stopOpacity=".2" />
              <stop offset="1" stopColor="#000" stopOpacity=".2" />
            </linearGradient>
          </defs>
          <rect x="86" y="14" width="48" height="6" rx="2" fill="#fff" fillOpacity=".85" />
          <rect x="86" y="24" width="30" height="3" rx="1.5" fill="#fff" fillOpacity=".4" />
          <rect x="86" y="34" width="48" height="18" rx="4" fill="#fff" fillOpacity=".06" />
          <rect x="86" y="56" width="48" height="10" rx="4" fill={stroke} fillOpacity=".7" />
          <rect x="30" y="30" width="40" height="30" rx="6" fill="#fff" fillOpacity=".04" stroke="#fff" strokeOpacity=".1" />
          <rect x="150" y="40" width="40" height="30" rx="6" fill="#fff" fillOpacity=".04" stroke="#fff" strokeOpacity=".1" />
        </svg>
      );
    case "whatsapp-automation":
      return (
        <svg viewBox="0 0 220 90" className="absolute inset-0 h-full w-full" aria-hidden>
          <rect x="10" y="14" width="120" height="22" rx="11" fill="#fff" fillOpacity=".05" />
          <rect x="18" y="21" width="70" height="4" rx="2" fill="#fff" fillOpacity=".65" />
          <rect x="18" y="28" width="90" height="3" rx="1.5" fill="#fff" fillOpacity=".28" />
          <rect x="70" y="46" width="140" height="22" rx="11" fill={stroke} fillOpacity=".18" stroke={stroke} strokeOpacity=".35" />
          <rect x="82" y="53" width="80" height="4" rx="2" fill="#fff" fillOpacity=".85" />
          <rect x="82" y="60" width="110" height="3" rx="1.5" fill="#fff" fillOpacity=".4" />
          <circle cx="200" cy="20" r="3" fill={stroke}>
            <animate attributeName="opacity" values="0.4;1;0.4" dur="1.6s" repeatCount="indefinite" />
          </circle>
        </svg>
      );
    case "api-integrations":
      return (
        <svg viewBox="0 0 220 90" className="absolute inset-0 h-full w-full" aria-hidden>
          {[{ x: 20, y: 24 }, { x: 20, y: 58 }, { x: 180, y: 24 }, { x: 180, y: 58 }].map((n, i) => (
            <circle key={i} cx={n.x} cy={n.y} r="8" fill="#fff" fillOpacity=".06" stroke={stroke} strokeOpacity=".5" />
          ))}
          <circle cx="110" cy="45" r="14" fill="#fff" fillOpacity=".06" stroke={stroke} strokeOpacity=".7" />
          {[{ x1: 28, y1: 24, x2: 96, y2: 40 }, { x1: 28, y1: 58, x2: 96, y2: 50 }, { x1: 124, y1: 40, x2: 172, y2: 24 }, { x1: 124, y1: 50, x2: 172, y2: 58 }].map((l, i) => (
            <line key={i} {...l} stroke={stroke} strokeOpacity=".45" strokeDasharray="4 3">
              <animate attributeName="stroke-dashoffset" from="0" to="-14" dur="1.8s" repeatCount="indefinite" />
            </line>
          ))}
        </svg>
      );
    case "ui-ux-design":
      return (
        <svg viewBox="0 0 220 90" className="absolute inset-0 h-full w-full" aria-hidden>
          <rect x="14" y="12" width="80" height="66" rx="10" fill="#fff" fillOpacity=".04" stroke="#fff" strokeOpacity=".1" />
          <rect x="22" y="20" width="40" height="6" rx="2" fill={stroke} fillOpacity=".75" />
          <rect x="22" y="30" width="60" height="3" rx="1.5" fill="#fff" fillOpacity=".3" />
          <rect x="22" y="40" width="60" height="24" rx="4" fill="#fff" fillOpacity=".05" />
          <rect x="106" y="12" width="100" height="30" rx="10" fill="#fff" fillOpacity=".04" stroke="#fff" strokeOpacity=".1" />
          <rect x="106" y="48" width="100" height="30" rx="10" fill="#fff" fillOpacity=".04" stroke="#fff" strokeOpacity=".1" />
          <circle cx="196" cy="27" r="4" fill={stroke} fillOpacity=".8" />
          <circle cx="196" cy="63" r="4" fill="#fff" fillOpacity=".3" />
        </svg>
      );
    case "cloud-solutions":
      return (
        <svg viewBox="0 0 220 90" className="absolute inset-0 h-full w-full" aria-hidden>
          <path d="M40 62 q0 -18 20 -20 q4 -16 22 -16 q18 0 22 16 q22 2 22 20 q0 12 -14 12 h-58 q-14 0 -14 -12z" fill="#fff" fillOpacity=".05" stroke={stroke} strokeOpacity=".45" />
          <path d="M130 66 q0 -14 16 -16 q4 -12 18 -12 q14 0 18 12 q16 2 16 16 q0 10 -12 10 h-44 q-12 0 -12 -10z" fill="#fff" fillOpacity=".04" stroke={stroke} strokeOpacity=".3" />
          <circle cx="82" cy="80" r="3" fill={stroke}>
            <animate attributeName="cy" values="80;72;80" dur="2.4s" repeatCount="indefinite" />
          </circle>
          <circle cx="150" cy="80" r="3" fill={stroke}>
            <animate attributeName="cy" values="80;74;80" dur="2.8s" repeatCount="indefinite" />
          </circle>
        </svg>
      );
    case "analytics-dashboards":
      return (
        <svg viewBox="0 0 220 90" className="absolute inset-0 h-full w-full" aria-hidden>
          <rect x="14" y="10" width="192" height="70" rx="10" fill="#fff" fillOpacity=".03" stroke="#fff" strokeOpacity=".08" />
          <polyline points="24,60 50,44 76,52 102,32 128,42 154,22 180,30 198,18" fill="none" stroke={stroke} strokeWidth="2" />
          {[24, 50, 76, 102, 128, 154, 180, 198].map((x, i) => (
            <circle key={i} cx={x} cy={[60,44,52,32,42,22,30,18][i]} r="2.4" fill={stroke} />
          ))}
          <rect x="24" y="66" width="8" height="10" rx="1.5" fill={stroke} fillOpacity=".6" />
          <rect x="36" y="62" width="8" height="14" rx="1.5" fill={stroke} fillOpacity=".55" />
          <rect x="48" y="58" width="8" height="18" rx="1.5" fill={stroke} fillOpacity=".5" />
          <rect x="60" y="64" width="8" height="12" rx="1.5" fill={stroke} fillOpacity=".55" />
        </svg>
      );
  }
  void glow;
  return null;
}

export function EcosystemCard({ config }: { config: SolutionConfig }) {
  const { Icon, accent } = config;
  return (
    <Link
      to={config.path as string as never}
      className="eco-card group relative flex h-[440px] flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-white/[0.18] hover:bg-white/[0.045]"
      style={{ ["--acc-from" as string]: accent.from, ["--acc-to" as string]: accent.to, ["--acc-glow" as string]: accent.glow }}
    >
      {/* Ambient glow on hover */}
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
        style={{ background: `radial-gradient(closest-side, ${accent.glow}, transparent 70%)` }}
      />
      {/* Animated gradient border on hover */}
      <span className="eco-card-border pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Icon */}
      <div className="relative">
        <div
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border text-white transition-transform duration-500 group-hover:scale-105"
          style={{
            background: `linear-gradient(135deg, ${accent.from}33, ${accent.to}22)`,
            borderColor: accent.ring,
            boxShadow: `0 8px 24px -12px ${accent.glow}`,
          }}
        >
          <Icon className="h-5 w-5" style={{ color: accent.text }} />
        </div>
      </div>

      {/* Mini illustration */}
      <div className="relative mt-5 h-[90px] w-full">
        <MiniIllustration slug={config.slug} accent={accent} />
      </div>

      {/* Title + desc */}
      <h3
        className="mt-5 text-[17.5px] font-semibold tracking-[-0.01em] text-white"
        style={{ fontFamily: "Space Grotesk, Inter, sans-serif" }}
      >
        {config.title}
      </h3>
      <p className="mt-2 line-clamp-3 text-[13px] leading-[1.65] text-white/60">
        {config.tagline}
      </p>

      {/* Capabilities */}
      <ul className="mt-4 flex flex-wrap gap-1.5">
        {config.capabilities.slice(0, 4).map((c) => (
          <li
            key={c}
            className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-[10.5px] font-medium text-white/70"
          >
            {c}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="mt-auto flex items-center justify-between pt-5">
        <span
          className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold"
          style={{ color: accent.text }}
        >
          {config.cardCta}
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
        <span
          className="inline-flex h-6 w-6 items-center justify-center rounded-full border transition-all duration-500 group-hover:rotate-[-45deg]"
          style={{ borderColor: accent.ring, background: `${accent.glow}` }}
          aria-hidden
        >
          <ArrowRight className="h-3 w-3" style={{ color: accent.text }} />
        </span>
      </div>
    </Link>
  );
}
