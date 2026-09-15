import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, ChevronRight, Menu, X } from "lucide-react";
import { BrandLogo } from "./BrandLogo";

const NAV_LINKS = [
  { label: "Solutions", href: "/solutions" },
  { label: "How We Work", href: "/how-we-work" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact", href: "/#contact" },
];

export function BackgroundFX() {
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

export function SiteNav({ active }: { active?: string }) {
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
          <Link to="/" aria-label="PlecoLab home">
            <BrandLogo />
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((l) => {
              const isActive = active === l.label;
              const cls = `group relative text-[13.5px] font-medium tracking-[-0.005em] transition-colors duration-200 hover:text-white ${
                isActive ? "text-white" : "text-white/65"
              }`;
              const underline = (
                <span
                  className={`pointer-events-none absolute -bottom-1 left-0 h-px w-full origin-left bg-gradient-to-r transition-transform duration-300 ease-out group-hover:scale-x-100 ${
                    isActive
                      ? "scale-x-100 from-[#3b82f6]/0 via-[#60a5fa] to-[#3b82f6]/0"
                      : "scale-x-0 from-white/0 via-white/70 to-white/0"
                  }`}
                />
              );
              return l.href.startsWith("/#") ? (
                <a key={l.label} href={l.href} className={cls}>
                  {l.label}
                  {underline}
                </a>
              ) : (
                <Link
                  key={l.label}
                  to={l.href as string as never}
                  className={cls}
                  aria-current={isActive ? "page" : undefined}
                  style={
                    isActive
                      ? { textShadow: "0 0 18px rgba(96,165,250,0.45)" }
                      : undefined
                  }
                >
                  {l.label}
                  {underline}
                </Link>
              );
            })}
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
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <div className="glass-strong overflow-hidden rounded-2xl p-2">
          <nav className="flex flex-col">
            {NAV_LINKS.map((l) => {
              const isActive = active === l.label;
              const cls = `flex items-center justify-between rounded-xl px-4 py-3.5 text-[15px] font-medium transition hover:bg-white/[0.05] hover:text-white ${
                isActive ? "bg-white/[0.06] text-white" : "text-white/80"
              }`;
              return l.href.startsWith("/#") ? (
                <a key={l.label} href={l.href} onClick={() => setOpen(false)} className={cls}>
                  <span>{l.label}</span>
                  <ChevronRight className="h-4 w-4 text-white/40" />
                </a>
              ) : (
                <Link
                  key={l.label}
                  to={l.href as string as never}
                  onClick={() => setOpen(false)}
                  className={cls}
                >
                  <span>{l.label}</span>
                  <ChevronRight className="h-4 w-4 text-white/40" />
                </Link>
              );
            })}
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

export function SiteFooter() {
  return (
    <footer className="border-t border-white/8 bg-black/30">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link to="/" aria-label="PlecoLab home">
            <BrandLogo />
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
            <li><Link to="/solutions/ai-agents" className="hover:text-white">AI Agents</Link></li>
            <li><Link to="/solutions/business-automation" className="hover:text-white">Automation</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/45">
            Company
          </div>
          <ul className="mt-4 space-y-2 text-[13.5px] text-white/70">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><a href="/case-studies" className="hover:text-white">Case Studies</a></li>
            <li><Link to="/how-we-work" className="hover:text-white">How We Work</Link></li>
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
