"use client";

import { lorePeriods } from "./lore-data";
import { TimelinePeriod } from "./TimelinePeriod";

export function LoreTimeline() {
  const startYear = lorePeriods[0].start;
  const endYear = lorePeriods[lorePeriods.length - 1].end;
  const totalYears = endYear - startYear;

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0b0a08] text-stone-100">
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-amber-500/[0.035] blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <div className="h-px w-10 bg-amber-500/30" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-amber-500/60">
              The Chronicles
            </span>

            <div className="h-px w-10 bg-amber-500/30" />
          </div>

          <h1 className="font-serif text-5xl tracking-tight text-stone-100 md:text-6xl">
            The History of the Realms
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-stone-500">
            From the first kingdoms to the fall of Sky, every age left its mark
            upon the world.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-48">
          <div className="overflow-x-auto pb-16 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="relative flex min-w-[1000px] px-8">
              {lorePeriods.map((period) => (
                <TimelinePeriod
                  key={period.id}
                  period={period}
                  totalYears={totalYears}
                  startYear={startYear}
                />
              ))}
            </div>
          </div>

          {/* Timeline beginning/end */}
          <div className="pointer-events-none absolute left-0 top-1/2 h-20 w-8 -translate-y-1/2 bg-gradient-to-r from-[#0b0a08] to-transparent" />

          <div className="pointer-events-none absolute right-0 top-1/2 h-20 w-8 -translate-y-1/2 bg-gradient-to-l from-[#0b0a08] to-transparent" />
        </div>

        {/* Bottom legend */}
        <div className="mt-8 flex justify-center">
          <div className="flex items-center gap-6 rounded-full border border-white/5 bg-white/[0.02] px-5 py-2.5">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              <span className="text-[10px] uppercase tracking-widest text-stone-600">
                Hover an age
              </span>
            </div>

            <div className="h-3 w-px bg-white/10" />

            <span className="font-mono text-[10px] text-stone-600">
              A.F. — After the Fall
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}