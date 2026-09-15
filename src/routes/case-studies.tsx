import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { BackgroundFX, SiteFooter, SiteNav } from "@/components/site/SiteChrome";
import { FadeUp } from "@/components/solutions/motion";
import { CaseStudyVisual } from "@/components/case-studies/CaseStudyVisual";
import { CASE_FILTERS, CASE_STUDIES, type CaseStudy } from "@/lib/case-studies/data";

const SITE_URL = "https://pleco-glow-engine.lovable.app";
const TITLE = "Case Studies | Pleco Lab";
const DESCRIPTION =
  "Explore digital products, platforms and business systems built by Pleco Lab across immigration, retail, education and technology.";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/case-studies` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/case-studies` }],
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
              name: "Case Studies",
              item: `${SITE_URL}/case-studies`,
            },
          ],
        }),
      },
    ],
  }),
  component: CaseStudiesPage,
});

function CaseStudiesPage() {
  const [filter, setFilter] = useState<string>("All");

  const visible = CASE_STUDIES.filter(
    (c) => filter === "All" || c.filter === filter,
  );
  const majors = visible.filter((c) => c.status === "case-study");
  const selected = visible.filter((c) => c.status === "selected-work");

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#060B1A] text-white antialiased">
      <BackgroundFX />
      <SiteNav active="Case Studies" />
      <main>
        <Hero />

        <section className="mx-auto max-w-7xl px-4">
          <FadeUp>
            <div className="flex flex-wrap items-center gap-2 border-b border-white/[0.07] pb-6">
              {CASE_FILTERS.map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFilter(f)}
                  aria-pressed={filter === f}
                  className={`rounded-full border px-3.5 py-1.5 text-[12.5px] font-medium transition ${
                    filter === f
                      ? "border-[#60a5fa]/40 bg-[#60a5fa]/12 text-white"
                      : "border-white/[0.09] bg-white/[0.02] text-white/55 hover:border-white/20 hover:text-white/85"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </FadeUp>
        </section>

        <div className="mx-auto max-w-7xl px-4">
          {majors.map((c, i) => (
            <MajorCaseStudy key={c.id} study={c} reversed={i % 2 === 1} />
          ))}

          {selected.length > 0 && (
            <section className="pb-8 pt-6">
              <FadeUp>
                <div className="flex items-center gap-3">
                  <span className="text-[10.5px] font-medium uppercase tracking-[0.18em] text-white/45">
                    Selected Work
                  </span>
                  <span className="h-px flex-1 bg-gradient-to-r from-white/12 to-transparent" />
                </div>
              </FadeUp>
              <div className="mt-8 grid gap-6 lg:grid-cols-2">
                {selected.map((c, i) => (
                  <SelectedWorkCard key={c.id} study={c} delay={i * 0.06} />
                ))}
              </div>
            </section>
          )}

          {visible.length === 0 && (
            <p className="py-16 text-center text-[14px] text-white/45">
              No projects in this category yet.
            </p>
          )}
        </div>

        <FinalCTA />
      </main>
      <SiteFooter />
    </div>
  );
}

/* ---------------------------------- Hero ---------------------------------- */

function Hero() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 pb-12 pt-14 sm:pt-20">
      <FadeUp>
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10.5px] font-medium uppercase tracking-[0.18em] text-white/60">
          <span className="h-1.5 w-1.5 rounded-full bg-[#60a5fa]" />
          Selected Work
        </span>
      </FadeUp>
      <FadeUp delay={0.05} as="h1">
        <span
          className="mt-5 block max-w-3xl text-[38px] font-semibold leading-[1.06] tracking-[-0.03em] text-white sm:text-[54px] lg:text-[60px]"
          style={{ fontFamily: "Space Grotesk, Inter, sans-serif" }}
        >
          Digital products built for{" "}
          <span className="bg-gradient-to-r from-[#60a5fa] via-[#7c9dff] to-[#a78bfa] bg-clip-text text-transparent">
            real businesses.
          </span>
        </span>
      </FadeUp>
      <FadeUp delay={0.1}>
        <p className="mt-5 max-w-2xl text-[14.5px] leading-[1.75] text-white/60">
          From automated visa platforms to retail operating systems and education
          experiences, we build digital products that solve complex business problems.
        </p>
      </FadeUp>
      <div
        aria-hidden
        className="mx-auto mt-14 h-px w-full max-w-4xl bg-gradient-to-r from-transparent via-[#60a5fa]/45 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none mx-auto -mt-6 h-16 w-full max-w-2xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(96,165,250,0.18), transparent 75%)",
        }}
      />
    </section>
  );
}

/* ------------------------------ Major studies ----------------------------- */

function Tags({ tags }: { tags: string[] }) {
  return (
    <div className="mt-6 flex flex-wrap gap-2">
      {tags.map((t) => (
        <span
          key={t}
          className="rounded-full border border-white/[0.09] bg-white/[0.03] px-2.5 py-1 text-[11px] text-white/60"
        >
          {t}
        </span>
      ))}
    </div>
  );
}

function MajorCaseStudy({
  study,
  reversed,
}: {
  study: CaseStudy;
  reversed: boolean;
}) {
  const [open, setOpen] = useState(false);
  const featured = study.number === "01";

  return (
    <article className="border-b border-white/[0.07] py-16 sm:py-20">
      <div
        className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-14 ${
          reversed ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div>
          <FadeUp>
            <div className="flex items-center gap-2.5 text-[10.5px] font-medium uppercase tracking-[0.18em]">
              <span className="text-[#93c5fd]">{study.number}</span>
              <span className="h-px w-6 bg-white/15" />
              <span className="text-white/45">{study.category}</span>
            </div>
          </FadeUp>
          <FadeUp delay={0.05}>
            <h2
              className={`mt-4 font-semibold leading-[1.12] tracking-[-0.025em] text-white ${
                featured ? "text-[30px] sm:text-[42px]" : "text-[27px] sm:text-[36px]"
              }`}
              style={{ fontFamily: "Space Grotesk, Inter, sans-serif" }}
            >
              {study.title}
            </h2>
            <p className="mt-4 max-w-xl text-[14.5px] leading-[1.75] text-white/60">
              {study.description}
            </p>
            <Tags tags={study.tags} />
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                className="inline-flex h-11 items-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-5 text-[14px] font-medium text-white/90 transition hover:border-[#60a5fa]/40 hover:bg-[#60a5fa]/10"
              >
                {open ? "Hide Case Study" : "View Case Study"}
                <ArrowRight
                  className={`h-4 w-4 transition-transform ${open ? "rotate-90" : ""}`}
                />
              </button>
              <a
                href="/#contact"
                className="inline-flex h-11 items-center gap-2 rounded-full px-1 text-[13.5px] font-medium text-[#93c5fd] transition hover:text-white"
              >
                Discuss a similar build <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </FadeUp>
        </div>

        <FadeUp delay={0.08}>
          <CaseStudyVisual kind={study.visual} />
        </FadeUp>
      </div>

      {open && <Detail study={study} />}
    </article>
  );
}

function Detail({ study }: { study: CaseStudy }) {
  return (
    <div className="mt-12 grid gap-6 rounded-3xl border border-white/[0.09] bg-white/[0.02] p-6 backdrop-blur-md sm:p-8 lg:grid-cols-3">
      {[
        { h: "Challenge", b: study.challenge },
        { h: "Approach", b: study.approach },
        { h: "Outcome", b: study.outcome },
      ].map((s) => (
        <div key={s.h}>
          <h3 className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/45">
            {s.h}
          </h3>
          <p className="mt-3 text-[14px] leading-[1.75] text-white/65">{s.b}</p>
        </div>
      ))}
      <div className="lg:col-span-3">
        <h3 className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/45">
          {study.number === "02" ? "Core modules" : "Key capabilities"}
        </h3>
        <ul className="mt-4 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
          {study.features.map((f) => (
            <li
              key={f}
              className="flex items-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.02] px-3 py-2.5 text-[13px] text-white/70"
            >
              <Check className="h-3.5 w-3.5 shrink-0 text-[#93c5fd]" />
              {f}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ----------------------------- Selected work ----------------------------- */

function SelectedWorkCard({ study, delay }: { study: CaseStudy; delay: number }) {
  return (
    <FadeUp delay={delay} as="article">
      <div className="group relative h-full overflow-hidden rounded-3xl border border-white/[0.09] bg-white/[0.025] p-6 backdrop-blur-md transition duration-300 hover:border-[#60a5fa]/30 hover:bg-white/[0.04]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(600px 240px at 20% 0%, rgba(96,165,250,0.14), transparent 70%)",
          }}
        />
        <div className="relative">
          <div className="flex items-center gap-2.5 text-[10.5px] font-medium uppercase tracking-[0.18em]">
            <span className="text-[#93c5fd]">{study.number}</span>
            <span className="h-px w-6 bg-white/15" />
            <span className="text-white/45">{study.category}</span>
            <span className="ml-auto rounded-full border border-white/[0.09] bg-white/[0.03] px-2 py-0.5 text-[9.5px] tracking-[0.14em] text-white/45">
              Selected Work
            </span>
          </div>
          <h3
            className="mt-4 text-[22px] font-semibold leading-[1.2] tracking-[-0.02em] text-white sm:text-[26px]"
            style={{ fontFamily: "Space Grotesk, Inter, sans-serif" }}
          >
            {study.title}
          </h3>
          <p className="mt-3 text-[14px] leading-[1.75] text-white/60">
            {study.description}
          </p>
          <Tags tags={study.tags} />
          <div className="mt-7">
            <CaseStudyVisual kind={study.visual} />
          </div>
        </div>
      </div>
    </FadeUp>
  );
}

/* -------------------------------- Final CTA ------------------------------- */

function FinalCTA() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-24 pt-16">
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
                Have a project in mind?
              </span>
              <h2
                className="mt-5 text-[28px] font-semibold leading-[1.15] tracking-[-0.025em] text-white sm:text-[38px]"
                style={{ fontFamily: "Space Grotesk, Inter, sans-serif" }}
              >
                Let's build something that matters.
              </h2>
              <p className="mt-4 max-w-md text-[14.5px] leading-[1.75] text-white/60">
                Bring us the challenge. We'll help turn it into a digital product that
                works.
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
                to="/how-we-work"
                className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-medium text-[#93c5fd] hover:text-white"
              >
                See how we work <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="relative">
              <p
                className="text-right text-[22px] leading-[1.5] text-white/25 sm:text-[26px]"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontStyle: "italic" }}
              >
                Strategy
                <br />
                Product
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
