"use client";

import { motion } from "motion/react";

type Props = {
  year: number;
  active: boolean;
  onHover: () => void;
};

export function TimelineNode({ year, active, onHover }: Props) {
  return (
    <div
      className="group relative flex h-20 w-full min-w-[90px] cursor-pointer items-center justify-center"
      onMouseEnter={onHover}
    >
      <div className="absolute top-1/2 h-px w-full -translate-y-1/2 bg-stone-700/60" />

      <div className="absolute top-[calc(50%-4px)] z-10">
        {active && (
          <motion.div
            layoutId="active-ring"
            className="absolute -inset-3 rounded-full border border-amber-400/20 bg-amber-400/5"
            transition={{
              type: "spring",
              stiffness: 350,
              damping: 30,
            }}
          />
        )}

        <motion.div
          animate={{
            scale: active ? 1.35 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 25,
          }}
          className={`relative h-2 w-2 rounded-full border ${
            active
              ? "border-amber-300 bg-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.7)]"
              : "border-stone-500 bg-stone-800"
          }`}
        />
      </div>

      <span
        className={`absolute top-[calc(50%+18px)] font-mono text-[10px] transition-colors ${
          active ? "text-amber-400" : "text-stone-600 group-hover:text-stone-400"
        }`}
      >
        {year}
      </span>
    </div>
  );
}