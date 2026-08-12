"use client";

import { motion } from "motion/react";
import type { LorePeriod } from "./lore-data";

type Props = {
  period: LorePeriod;
};

export function TimelineCard({ period }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 12, scale: 0.97 }}
      transition={{
        duration: 0.25,
        ease: "easeOut",
      }}
      className="absolute bottom-full left-1/2 z-30 mb-8 w-[320px] -translate-x-1/2"
    >
      <div className="relative overflow-hidden rounded-2xl border border-amber-200/10 bg-[#15130f]/95 p-5 shadow-2xl shadow-black/50 backdrop-blur-xl">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />

        <div className="mb-4 flex items-center justify-between">
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-amber-400/70">
            {period.type}
          </span>

          <span className="font-mono text-xs text-stone-500">
            {period.start} — {period.end} A.F.
          </span>
        </div>

        <h3 className="font-serif text-2xl font-medium tracking-tight text-stone-100">
          {period.title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-stone-400">
          {period.description}
        </p>

        {period.events && period.events.length > 0 && (
          <div className="mt-5 border-t border-white/5 pt-4">
            <div className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-600">
              Notable Events
            </div>

            <div className="space-y-3">
              {period.events.map((event) => (
                <div key={`${event.year}-${event.title}`} className="flex gap-3">
                  <div className="pt-0.5 font-mono text-[10px] text-amber-500/60">
                    {event.year}
                  </div>

                  <div>
                    <div className="text-xs font-medium text-stone-200">
                      {event.title}
                    </div>

                    <div className="mt-1 text-xs leading-5 text-stone-500">
                      {event.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="absolute -bottom-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 border-b border-r border-amber-200/10 bg-[#15130f]" />
      </div>
    </motion.div>
  );
}