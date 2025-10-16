"use client";

type LoaderProps = {
  progress?: number;
};

export default function Loader({ progress = 0 }: LoaderProps) {
  const pct = Math.max(0, Math.min(100, progress));
  return (
    <div className="fixed inset-0 z-[1000] grid place-items-center bg-black">
      {/* Outer glow and particles-like aura */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full blur-3xl opacity-30 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500" />
      </div>

      {/* Loader core */}
      <div className="relative w-32 h-32">
        {/* Back ring */}
        <div className="absolute inset-0 rounded-full border-4 border-white/10" />

        {/* Ring 1 */}
        <div className="absolute inset-0 rounded-full p-[3px] bg-[conic-gradient(var(--tw-gradient-stops))] from-blue-500 via-cyan-400 to-indigo-500 animate-spin-fast">
          <div className="h-full w-full rounded-full bg-black/90" />
        </div>

        {/* Ring 2 (counter-rotating, dashed) */}
        <div className="absolute inset-2 rounded-full border-2 border-dashed border-cyan-400/60 animate-spin-slower" style={{ animationDirection: 'reverse' }} />

        {/* Ring 3 (thin highlight) */}
        <div className="absolute inset-4 rounded-full border-t-2 border-t-indigo-400/80 border-l-transparent border-r-transparent border-b-transparent animate-spin-medium" />

        {/* Center content */}
        <div className="absolute inset-0 grid place-items-center">
          <div className="relative flex flex-col items-center justify-center">
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 shadow-[0_0_35px_-6px_rgba(59,130,246,0.9)]" />
            <span className="absolute top-14 text-xs font-medium text-white/80 tracking-wide">
              {pct}%
            </span>
          </div>
        </div>
      </div>

      <p className="mt-6 text-white/80 tracking-wide text-sm" aria-live="polite" aria-label={`Loading ${pct} percent`}>
        Preparing your experience...
      </p>

      <style>{`
        .animate-spin-fast { animation: spin 0.9s linear infinite; }
        .animate-spin-medium { animation: spin 1.4s linear infinite; }
        .animate-spin-slower { animation: spin 2.2s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
