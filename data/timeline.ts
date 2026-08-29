export type Era = "BF" | "AF";

export type TimelineEvent = {
  id: string;
  year: number;
  era: Era;
  title: string;
  description: string;
  image: string;
};

export type MainTimelineEvent = TimelineEvent;

export type SmallTimelineEvent = TimelineEvent;

/**
 * BF = Before the Fall
 * AF = After the Fall
 *
 * Internally:
 * BF 706 = -706
 * BF 0   = 0
 * AF 91  = 91
 */
export const toAbsoluteYear = (year: number, era: Era) => {
  return era === "BF" ? -year : year;
};

export const formatYear = (year: number, era: Era) => {
  if (year === 0 && era === "BF") {
    return "BF 0";
  }

  return `${era} ${year}`;
};

/* =========================================================
   MAIN EVENTS
========================================================= */

export const mainTimelineEvents: MainTimelineEvent[] = [
  {
    id: "kaeras-born",
    year: 706,
    era: "BF",
    title: "The Birth of Kaeras",
    description:
      "Kaeras is born into a small nomadic group during the Age of Hue and Cry.",
    image: "/images/sky-birth.jpg",
  },

  {
    id: "chosen-by-gods",
    year: 650,
    era: "BF",
    title: "The Choosing of Kaeras",
    description:
      "At age 56, Kaeras is chosen by the five gods, who unite their will and grant him the magic of Harmony — the Sky Magic. This marks the beginning of the transitional period leading to the Age of Harmony.",
    image: "/images/sky-haboot.jpg",
  },

  {
    id: "age-of-harmony",
    year: 492,
    era: "BF",
    title: "The Age of Harmony",
    description:
      "After 158 years of unification, diplomacy, small wars, settlement, and the founding of the first cities, the Age of Hue and Cry formally ends. The Age of Harmony begins.",
    image: "/images/sky-rec.jpg",
  },

  {
    id: "fall-of-sky",
    year: 0,
    era: "BF",
    title: "The Fall of Sky",
    description:
      "Kaeras dies at the age of 706. The Kingdom of Sky falls, and the Age of Harmony comes to an end.",
    image: "/images/sky-death.jpg",
  },

  {
    id: "climatic-stabilization",
    year: 91,
    era: "AF",
    title: "The Stabilization of Mountain",
    description:
      "The climate of the world reaches full stabilization, with Mountain becoming the final realm to stabilize.",
    image: "/images/world-stab.jpg",
  },
];

/* =========================================================
   SMALL EVENTS
========================================================= */

export const smallTimelineEvents: SmallTimelineEvent[] = [
  {
    id: "athaael-born",
    year: 289,
    era: "BF",
    title: "Birth of Athaael",
    description:
      "Athaael, Scion of the Sea and heir of aqvalith, is born 203 years after the beginning of the Age of Harmony. Kaeras is 417 years old.",
    image: "/images/timeline/athaael-born.jpg",
  },

  {
    id: "sorchae-born",
    year: 248,
    era: "BF",
    title: "Birth of Sorchae",
    description:
      "Sorchae, Scion of the Forest and heir of Sylvane, is born 41 years after Athaael.",
    image: "/images/timeline/sorchae-born.jpg",
  },

  {
    id: "nishaera-born",
    year: 200,
    era: "BF",
    title: "Birth of Nishaera",
    description:
      "Nishaera, Scion of the Desert, is born 48 years after Sorchae. Kaeras is 506 years old.",
    image: "/images/timeline/nishaera-born.jpg",
  },

  {
    id: "bergoth-born",
    year: 120,
    era: "BF",
    title: "Birth of Bërgoth",
    description:
      "Bërgoth, Scion of the Mountain, is born 32 years before the youngest Scion.",
    image: "/images/timeline/bergoth-born.jpg",
  },

  {
    id: "draegrik-born",
    year: 88,
    era: "BF",
    title: "Birth of Draegrik",
    description:
      "Draegrik, Scion of the Snow and heir of Vintra, is born as the youngest and final child, 88 years before the Fall of Sky.",
    image: "/images/timeline/draegrik-born.jpg",
  },

  {
    id: "sky-magic-rediscovered",
    year: 319,
    era: "AF",
    title: "The Rediscovery of Sky Magic",
    description:
      "The Desert Scion rediscovers and activates Sky Magic, beginning the Wars of Claiming.",
    image: "/images/timeline/sky-magic-rediscovered.jpg",
  },
];

/* =========================================================
   HELPERS
========================================================= */

export const sortedMainEvents = [...mainTimelineEvents].sort(
  (a, b) => toAbsoluteYear(a.year, a.era) - toAbsoluteYear(b.year, b.era),
);

export const sortedSmallEvents = [...smallTimelineEvents].sort(
  (a, b) => toAbsoluteYear(a.year, a.era) - toAbsoluteYear(b.year, b.era),
);

/**
 * Returns the small events that exist between two main events.
 */
export const getEventsBetween = (
  start: MainTimelineEvent,
  end?: MainTimelineEvent,
) => {
  const startYear = toAbsoluteYear(start.year, start.era);

  const endYear = end ? toAbsoluteYear(end.year, end.era) : Infinity;

  return sortedSmallEvents.filter((event) => {
    const year = toAbsoluteYear(event.year, event.era);

    return year > startYear && year < endYear;
  });
};
