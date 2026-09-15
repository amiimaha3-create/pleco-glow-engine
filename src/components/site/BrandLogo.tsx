export function BrandLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative h-8 w-8 shrink-0">
        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-indigo-400 via-violet-500 to-fuchsia-500 opacity-90" />
        <div className="absolute inset-[2px] flex items-center justify-center rounded-[7px] bg-[#0a1024]">
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