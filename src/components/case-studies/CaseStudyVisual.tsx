import {
  BadgeCheck,
  CalendarClock,
  CreditCard,
  FileText,
  Filter,
  MapPin,
  Package,
  PlayCircle,
  Search,
  Star,
  Upload,
  Users,
} from "lucide-react";
import type { CaseVisualKind } from "@/lib/case-studies/data";

/* Shared chrome ---------------------------------------------------------- */

function Frame({
  children,
  label,
  className = "",
}: {
  children: React.ReactNode;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-white/[0.09] bg-[#080D1E]/90 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)] backdrop-blur-md ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-white/[0.07] bg-white/[0.02] px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-white/20" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/10" />
        <span className="ml-2 truncate rounded-md bg-white/[0.04] px-2 py-0.5 text-[10px] text-white/40">
          {label}
        </span>
      </div>
      <div className="p-3 sm:p-4">{children}</div>
    </div>
  );
}

function Tile({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-xl border border-white/[0.07] bg-white/[0.025] p-2.5 ${className}`}
    >
      {children}
    </div>
  );
}

function Bars({ heights }: { heights: number[] }) {
  return (
    <div className="flex h-14 items-end gap-1.5">
      {heights.map((h, i) => (
        <span
          key={i}
          className="flex-1 rounded-t-[3px] bg-gradient-to-t from-[#3b82f6]/25 to-[#60a5fa]/80"
          style={{ height: `${h}%` }}
        />
      ))}
    </div>
  );
}

function Spark({ points }: { points: string }) {
  return (
    <svg viewBox="0 0 120 40" className="h-14 w-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id="cs-spark" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(96,165,250,0.35)" />
          <stop offset="100%" stopColor="rgba(96,165,250,0)" />
        </linearGradient>
      </defs>
      <polyline points={points} fill="none" stroke="#7dd3fc" strokeWidth="1.6" />
      <polygon points={`0,40 ${points} 120,40`} fill="url(#cs-spark)" />
    </svg>
  );
}

function Line({ w = "100%", dim = false }: { w?: string; dim?: boolean }) {
  return (
    <span
      className={`block h-1.5 rounded-full ${dim ? "bg-white/[0.07]" : "bg-white/15"}`}
      style={{ width: w }}
    />
  );
}

/* 01 — Visa platform ----------------------------------------------------- */

function VisaVisual() {
  return (
    <div className="relative">
      <Frame label="applications / overview">
        <div className="grid grid-cols-3 gap-2.5">
          {[
            { k: "In review", v: "18", i: FileText },
            { k: "Approved", v: "42", i: BadgeCheck },
            { k: "Docs pending", v: "07", i: Upload },
          ].map((s) => (
            <Tile key={s.k}>
              <s.i className="h-3.5 w-3.5 text-[#93c5fd]" />
              <div className="mt-2 text-[16px] font-semibold tabular-nums text-white">
                {s.v}
              </div>
              <div className="text-[10px] text-white/45">{s.k}</div>
            </Tile>
          ))}
        </div>

        <div className="mt-2.5 grid gap-2.5 sm:grid-cols-[1.3fr_1fr]">
          <Tile>
            <div className="text-[10px] uppercase tracking-[0.14em] text-white/40">
              Eligibility flow
            </div>
            <div className="mt-2.5 space-y-2">
              {["Profile", "Documents", "Assessment", "Submission"].map((s, i) => (
                <div key={s} className="flex items-center gap-2">
                  <span
                    className={`inline-flex h-4 w-4 items-center justify-center rounded-full text-[8px] ${
                      i < 3
                        ? "bg-[#60a5fa]/20 text-[#93c5fd]"
                        : "bg-white/[0.05] text-white/35"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <span className="text-[10.5px] text-white/65">{s}</span>
                  <span className="ml-auto h-1 w-16 overflow-hidden rounded-full bg-white/[0.07]">
                    <span
                      className="block h-full rounded-full bg-[#60a5fa]/70"
                      style={{ width: i < 3 ? "100%" : "35%" }}
                    />
                  </span>
                </div>
              ))}
            </div>
          </Tile>
          <Tile>
            <div className="text-[10px] uppercase tracking-[0.14em] text-white/40">
              Application status
            </div>
            <Spark points="0,30 15,26 30,28 45,20 60,22 75,14 90,16 105,9 120,7" />
            <div className="space-y-1.5">
              <Line w="80%" />
              <Line w="55%" dim />
            </div>
          </Tile>
        </div>
      </Frame>

      {/* mobile app overlay */}
      <div className="absolute -bottom-6 -right-2 hidden w-[128px] overflow-hidden rounded-[18px] border border-white/12 bg-[#0A1024] p-2 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.9)] sm:block">
        <div className="mx-auto mb-2 h-1 w-8 rounded-full bg-white/15" />
        <div className="rounded-lg bg-white/[0.04] p-2">
          <div className="text-[9px] text-white/45">Upload documents</div>
          <div className="mt-2 space-y-1.5">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex items-center gap-1.5 rounded-md border border-white/[0.07] bg-white/[0.03] px-1.5 py-1"
              >
                <Upload className="h-2.5 w-2.5 text-[#93c5fd]" />
                <span className="h-1 flex-1 rounded-full bg-white/12" />
              </div>
            ))}
          </div>
          <div className="mt-2 rounded-md bg-gradient-to-r from-[#3b82f6] to-[#6366f1] py-1 text-center text-[9px] font-medium text-white">
            Continue
          </div>
        </div>
      </div>
    </div>
  );
}

/* 02 — Retail CRM -------------------------------------------------------- */

function RetailVisual() {
  return (
    <Frame label="franchise / control room">
      <div className="grid gap-2.5 sm:grid-cols-[0.8fr_1.6fr]">
        <div className="space-y-1.5 rounded-xl border border-white/[0.07] bg-white/[0.02] p-2.5">
          {["Sales", "Stores", "Stock", "Staff", "Salary", "Finance", "Reports"].map(
            (m, i) => (
              <div
                key={m}
                className={`rounded-md px-2 py-1.5 text-[10.5px] ${
                  i === 0
                    ? "bg-[#60a5fa]/12 text-[#bfdbfe]"
                    : "text-white/50"
                }`}
              >
                {m}
              </div>
            ),
          )}
        </div>
        <div className="space-y-2.5">
          <div className="grid grid-cols-3 gap-2.5">
            {[
              { k: "Sales overview", i: CreditCard },
              { k: "Stock health", i: Package },
              { k: "Staff on shift", i: Users },
            ].map((s) => (
              <Tile key={s.k}>
                <s.i className="h-3.5 w-3.5 text-[#93c5fd]" />
                <div className="mt-2 space-y-1.5">
                  <Line w="70%" />
                  <Line w="45%" dim />
                </div>
                <div className="mt-2 text-[9.5px] text-white/40">{s.k}</div>
              </Tile>
            ))}
          </div>
          <Tile>
            <div className="mb-2 flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-[0.14em] text-white/40">
                Store performance
              </span>
              <span className="rounded-md bg-white/[0.05] px-1.5 py-0.5 text-[9px] text-white/40">
                This month
              </span>
            </div>
            <Bars heights={[38, 55, 44, 68, 52, 74, 61, 82, 70, 90]} />
          </Tile>
          <div className="grid grid-cols-2 gap-2.5">
            <Tile>
              <div className="text-[10px] uppercase tracking-[0.14em] text-white/40">
                Salary run
              </div>
              <div className="mt-2 space-y-1.5">
                <Line w="85%" />
                <Line w="60%" dim />
                <Line w="72%" dim />
              </div>
            </Tile>
            <Tile>
              <div className="text-[10px] uppercase tracking-[0.14em] text-white/40">
                Expenses
              </div>
              <Spark points="0,22 20,26 40,18 60,24 80,14 100,18 120,10" />
            </Tile>
          </div>
        </div>
      </div>
    </Frame>
  );
}

/* 03 — EdTech ------------------------------------------------------------ */

function EdtechVisual() {
  return (
    <Frame label="courses / discover">
      <div className="rounded-xl border border-white/[0.07] bg-gradient-to-br from-[#3b82f6]/12 to-transparent p-3">
        <div className="flex items-center gap-2 rounded-lg border border-white/[0.08] bg-[#050915]/70 px-2.5 py-1.5">
          <Search className="h-3 w-3 text-white/40" />
          <span className="text-[10.5px] text-white/40">Search programs</span>
        </div>
        <div className="mt-2.5 flex flex-wrap gap-1.5">
          {["All", "Design", "Data", "Business", "Marketing"].map((c, i) => (
            <span
              key={c}
              className={`rounded-full border px-2 py-0.5 text-[9.5px] ${
                i === 0
                  ? "border-[#60a5fa]/40 bg-[#60a5fa]/12 text-[#bfdbfe]"
                  : "border-white/[0.08] text-white/45"
              }`}
            >
              {c}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-2.5 grid grid-cols-3 gap-2.5">
        {[0, 1, 2].map((i) => (
          <Tile key={i}>
            <div className="h-10 rounded-lg bg-gradient-to-br from-[#60a5fa]/25 to-[#a78bfa]/15" />
            <div className="mt-2 space-y-1.5">
              <Line w="85%" />
              <Line w="55%" dim />
            </div>
            <div className="mt-2 flex items-center gap-1 text-[9px] text-white/40">
              <Star className="h-2.5 w-2.5 text-[#fbbf24]/70" /> 12 lessons
            </div>
          </Tile>
        ))}
      </div>

      <div className="mt-2.5 grid gap-2.5 sm:grid-cols-[1.4fr_1fr]">
        <Tile>
          <div className="text-[10px] uppercase tracking-[0.14em] text-white/40">
            Curriculum
          </div>
          <div className="mt-2 space-y-1.5">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="flex items-center gap-2 rounded-md border border-white/[0.06] bg-white/[0.02] px-2 py-1.5"
              >
                <PlayCircle className="h-3 w-3 text-[#93c5fd]" />
                <span className="h-1 flex-1 rounded-full bg-white/12" />
                <span className="text-[9px] tabular-nums text-white/35">0{i}</span>
              </div>
            ))}
          </div>
        </Tile>
        <Tile>
          <div className="text-[10px] uppercase tracking-[0.14em] text-white/40">
            Instructor
          </div>
          <div className="mt-2 flex items-center gap-2">
            <span className="h-7 w-7 rounded-full bg-gradient-to-br from-white/25 to-white/10" />
            <div className="flex-1 space-y-1.5">
              <Line w="80%" />
              <Line w="50%" dim />
            </div>
          </div>
          <div className="mt-3 rounded-md bg-gradient-to-r from-[#ff4d63] to-[#e02040] py-1.5 text-center text-[10px] font-medium text-white">
            Enroll now
          </div>
        </Tile>
      </div>
    </Frame>
  );
}

/* 04 — Automation workflow ---------------------------------------------- */

function AutomationVisual() {
  const steps = ["Input", "Process", "Approval", "Automation", "Reporting"];
  return (
    <Frame label="workflow / builder">
      <div className="relative rounded-xl border border-white/[0.07] bg-white/[0.02] p-3">
        <svg
          aria-hidden
          viewBox="0 0 100 10"
          preserveAspectRatio="none"
          className="absolute left-3 right-3 top-[46px] h-2 w-[calc(100%-24px)] opacity-70"
        >
          <line
            x1="0"
            y1="5"
            x2="100"
            y2="5"
            stroke="rgba(96,165,250,0.35)"
            strokeWidth="0.6"
            strokeDasharray="3 2"
          />
        </svg>
        <div className="relative grid grid-cols-5 gap-1.5">
          {steps.map((s, i) => (
            <div key={s} className="text-center">
              <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-lg border border-[#60a5fa]/30 bg-[#60a5fa]/10 text-[10px] font-semibold text-[#bfdbfe]">
                0{i + 1}
              </div>
              <div className="mt-6 text-[9.5px] text-white/55">{s}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-2.5 grid grid-cols-2 gap-2.5">
        <Tile>
          <Filter className="h-3.5 w-3.5 text-[#93c5fd]" />
          <div className="mt-2 space-y-1.5">
            <Line w="75%" />
            <Line w="50%" dim />
          </div>
          <div className="mt-2 text-[9.5px] text-white/40">Rules & conditions</div>
        </Tile>
        <Tile>
          <CalendarClock className="h-3.5 w-3.5 text-[#93c5fd]" />
          <Spark points="0,28 20,22 40,25 60,16 80,18 100,11 120,8" />
          <div className="text-[9.5px] text-white/40">Task completion</div>
        </Tile>
      </div>
    </Frame>
  );
}

/* 05 — Travel discovery -------------------------------------------------- */

function TravelVisual() {
  return (
    <Frame label="explore / destinations">
      <div className="rounded-xl border border-white/[0.07] bg-gradient-to-br from-[#6366f1]/15 to-transparent p-3">
        <div className="flex items-center gap-2">
          <MapPin className="h-3 w-3 text-[#93c5fd]" />
          <span className="text-[10.5px] text-white/55">Where to next?</span>
          <span className="ml-auto rounded-md bg-white/[0.06] px-2 py-0.5 text-[9px] text-white/45">
            5 nights
          </span>
        </div>
      </div>
      <div className="mt-2.5 grid grid-cols-3 gap-2.5">
        {[0, 1, 2].map((i) => (
          <Tile key={i}>
            <div className="h-12 rounded-lg bg-gradient-to-br from-[#38bdf8]/25 to-[#a78bfa]/15" />
            <div className="mt-2 space-y-1.5">
              <Line w="80%" />
              <Line w="45%" dim />
            </div>
          </Tile>
        ))}
      </div>
      <div className="mt-2.5 grid gap-2.5 sm:grid-cols-[1.3fr_1fr]">
        <Tile>
          <div className="text-[10px] uppercase tracking-[0.14em] text-white/40">
            Itinerary
          </div>
          <div className="mt-2 space-y-1.5">
            {["Day 01", "Day 02", "Day 03"].map((d) => (
              <div key={d} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#60a5fa]/70" />
                <span className="text-[10px] text-white/55">{d}</span>
                <span className="ml-auto h-1 w-20 rounded-full bg-white/[0.09]" />
              </div>
            ))}
          </div>
        </Tile>
        <Tile>
          <div className="text-[10px] uppercase tracking-[0.14em] text-white/40">
            Booking
          </div>
          <div className="mt-2 space-y-1.5">
            <Line w="70%" />
            <Line w="55%" dim />
          </div>
          <div className="mt-3 rounded-md bg-gradient-to-r from-[#3b82f6] to-[#6366f1] py-1.5 text-center text-[10px] font-medium text-white">
            Reserve
          </div>
        </Tile>
      </div>
    </Frame>
  );
}

export function CaseStudyVisual({ kind }: { kind: CaseVisualKind }) {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-8 -z-10 rounded-[40px]"
        style={{
          background:
            "radial-gradient(closest-side, rgba(59,130,246,0.18), rgba(167,139,250,0.08) 60%, transparent 78%)",
        }}
      />
      {kind === "visa" && <VisaVisual />}
      {kind === "retail" && <RetailVisual />}
      {kind === "edtech" && <EdtechVisual />}
      {kind === "automation" && <AutomationVisual />}
      {kind === "travel" && <TravelVisual />}
    </div>
  );
}
