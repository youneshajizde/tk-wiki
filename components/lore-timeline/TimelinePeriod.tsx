"use client";

import { motion } from "motion/react";
import { useState } from "react";
import type { LorePeriod } from "./lore-data";
import { TimelineCard } from "./TimelineCard";
import { TimelineNode } from "./TimelineNode";

type Props = {
  period: LorePeriod;
  totalYears: number;
  startYear: number;
};

export function TimelinePeriod({
  period,
  totalYears,
  startYear,
}: Props) {
  const [hovered, setHovered] = useState(false);

  const width = ((period.end - period.start) / totalYears) * 100;

  return (
    <div
      className="relative h-32 shrink-0"
      style={{
        width: `${width}%`,
        minWidth: "140px",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2">
        <TimelineNode
          year={period.start}
          active={hovered}
          onHover={() => setHovered(true)}
        />
      </div>

      <div className="absolute bottom-[8px] left-1/2 -translate-x-1/2 whitespace-nowrap text-center">
        <motion.div
          animate={{
            opacity: hovered ? 1 : 0.45,
          }}
          className="font-serif text-sm text-stone-300"
        >
          {period.title}
        </motion.div>
      </div>

      {hovered && (
        <div className="timeline-card-anchor">
          <TimelineCard period={period} />
        </div>
      )}
    </div>
  );
}