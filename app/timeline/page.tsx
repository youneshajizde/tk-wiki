"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

type LoreEvent = {
  year: number;
  title: string;
  description: string;
};

type LorePeriod = {
  id: string;
  title: string;
  start: number;
  end: number;
  description: string;
  type: "age" | "war" | "dynasty" | "event";
  image: string;
  events?: LoreEvent[];
};

const periods: LorePeriod[] = [
  {
    id: "chaos",
    title: "The Age of Chaos",
    start: 0,
    end: 310,
    type: "age",
    image: "/images/photo-1.jpg",
    description:
      "The ancient kingdoms fractured beneath endless wars. Old alliances collapsed, forgotten kings rose and fell, and the foundations of the modern world were forged in blood.",
    events: [
      {
        year: 87,
        title: "The Burning of Aerath",
        description:
          "Aerath was consumed by fire after three armies fought beneath its walls.",
      },
      {
        year: 214,
        title: "Battle of Blackwater Fields",
        description:
          "The largest battle of the early age ended with the disappearance of King Vaelor.",
      },
    ],
  },

  {
    id: "unification",
    title: "The Great Unification",
    start: 310,
    end: 412,
    type: "event",
    image: "/images/photo-2.jpg",
    description:
      "The scattered realms were brought beneath a single crown, ending centuries of division.",
    events: [
      {
        year: 310,
        title: "The Crowned Accord",
        description:
          "Seven rulers placed their seals upon the accord and recognized a single sovereign.",
      },
    ],
  },

  {
    id: "peace",
    title: "The Age of Peace",
    start: 412,
    end: 621,
    type: "age",
    image: "/images/photo-3.png",
    description:
      "For more than two centuries, the kingdoms prospered. Trade flourished, roads were built, and the great cities entered their golden age.",
    events: [
      {
        year: 487,
        title: "Founding of Silverhold",
        description:
          "The fortress-city of Silverhold was established upon the northern frontier.",
      },
      {
        year: 576,
        title: "The Concord of Kings",
        description: "The great kingdoms renewed their ancient pact of peace.",
      },
    ],
  },

  {
    id: "conflict",
    title: "The Age of Conflict",
    start: 621,
    end: 812,
    type: "age",
    image: "/images/photo-4.jpg",
    description:
      "Old rivalries returned. Noble houses raised their banners, borders shifted, and the peace of centuries began to unravel.",
    events: [
      {
        year: 621,
        title: "The Broken Concord",
        description:
          "The Concord of Kings was abandoned after the assassination of three royal envoys.",
      },
      {
        year: 703,
        title: "The Slaughter of Creghall",
        description:
          "House Léomhann and its allies clashed with House Finn in one of the bloodiest battles of the age.",
      },
    ],
  },

  {
    id: "fall",
    title: "The Fall of Sky",
    start: 812,
    end: 850,
    type: "war",
    image: "/images/photo-5.jpg",
    description:
      "The Kingdom of Sky, once believed untouchable, collapsed beneath invasion and betrayal.",
    events: [
      {
        year: 812,
        title: "The Siege of the Golden Gate",
        description: "Northern armies reached the walls of the capital.",
      },
      {
        year: 824,
        title: "The Fall of Sky",
        description:
          "The royal palace burned and the last king of Sky disappeared.",
      },
    ],
  },
];

export default function TimeLinePage() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const activePeriod = periods.find((period) => period.id === activeId) ?? null;

  const startYear = periods[0].start;
  const endYear = periods[periods.length - 1].end;
  const totalYears = endYear - startYear;

  return (
    <main className="min-h-screen overflow-hidden bg-[#0b0a08] text-stone-100">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-amber-500/[0.035] blur-[150px]" />

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

          <h1 className="font-serif text-5xl tracking-tight md:text-6xl">
            The History of The True Kingdom
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-stone-500">
            From the first kingdoms to the fall of Sky, every age left its mark
            upon the world.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-40">
          {/* CARD */}
          <div className="pointer-events-none absolute bottom-[180px] left-0 right-0 z-50 flex justify-center">
            <AnimatePresence mode="wait">
              {activePeriod && (
                <motion.div
                  key={activePeriod.id}
                  initial={{
                    opacity: 0,
                    y: 12,
                    scale: 0.97,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    y: 8,
                    scale: 0.97,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeOut",
                  }}
                  className="w-[320px]"
                >
                  <div className="relative overflow-hidden rounded-2xl border border-amber-200/10 bg-[#15130f] shadow-2xl shadow-black/60">
                    {/* Image */}
                    <div className="relative h-48 w-full overflow-hidden">
                      <img
                        src={activePeriod.image}
                        alt={activePeriod.title}
                        className="h-full w-full object-cover object-center transition-transform duration-700"
                      />

                      {/* Image gradient */}
                      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#15130f] to-transparent" />

                      {/* Vignette */}
                      <div className="absolute inset-0 bg-black/10" />
                    </div>

                    {/* Card content */}
                    <div className="relative px-5 pb-5 pt-4">
                      {/* Top glow */}
                      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />

                      {/* Type + date */}
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-amber-400/70">
                          {activePeriod.type}
                        </span>

                        <span className="font-mono text-[10px] text-stone-500">
                          {activePeriod.start} — {activePeriod.end} A.F.
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className="mt-2 font-serif text-xl text-stone-100">
                        {activePeriod.title}
                      </h2>

                      {/* Description */}
                      <p className="mt-2 text-xs leading-5 text-stone-500">
                        {activePeriod.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="absolute -bottom-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 border-b border-r border-amber-200/10 bg-[#15130f]" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* HORIZONTAL TIMELINE */}
          <div className="overflow-x-auto pb-12 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex min-w-[1000px] px-8">
              {periods.map((period) => {
                const width = ((period.end - period.start) / totalYears) * 100;

                const active = activeId === period.id;

                return (
                  <div
                    key={period.id}
                    className="relative h-32 shrink-0"
                    style={{
                      width: `${width}%`,
                      minWidth: "140px",
                    }}
                    onMouseEnter={() => setActiveId(period.id)}
                  >
                    {/* Timeline line */}
                    <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-stone-700/60" />

                    {/* Node */}
                    <div className="absolute left-0 top-1/2 z-20 -translate-y-1/2">
                      <motion.div
                        animate={{
                          scale: active ? 1.35 : 1,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 25,
                        }}
                        className={`relative h-3 w-3 rounded-full border ${
                          active
                            ? "border-amber-300 bg-amber-400 shadow-[0_0_20px_rgba(251,191,36,0.8)]"
                            : "border-stone-500 bg-stone-800"
                        }`}
                      />

                      {active && (
                        <motion.div
                          layoutId="ring"
                          className="absolute -inset-3 rounded-full border border-amber-400/20 bg-amber-400/5"
                        />
                      )}
                    </div>

                    {/* Year */}
                    <div
                      className={`absolute left-0 top-[calc(50%+20px)] font-mono text-[10px] transition-colors ${
                        active ? "text-amber-400" : "text-stone-600"
                      }`}
                    >
                      {period.start}
                    </div>

                    {/* Period name */}
                    <div
                      className={`absolute left-1/2 top-[calc(50%+20px)] -translate-x-1/2 whitespace-nowrap font-serif transition-all ${
                        active ? "text-stone-100" : "text-stone-500"
                      } ${
                        width < 8
                          ? "text-[9px]"
                          : width < 13
                            ? "text-[10px]"
                            : width < 20
                              ? "text-xs"
                              : "text-sm"
                      }`}
                    >
                      {period.title}
                    </div>
                  </div>
                );
              })}

              {/* Final year */}
              <div className="relative h-32 w-[80px] shrink-0">
                <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-stone-700/60" />

                <div className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full border border-stone-600 bg-stone-800" />

                <div className="absolute right-0 top-[calc(50%+20px)] font-mono text-[10px] text-stone-600">
                  {endYear}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legend */}
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
    </main>
  );
}
