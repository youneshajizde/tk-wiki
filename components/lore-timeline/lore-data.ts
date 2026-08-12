export type LoreEvent = {
  year: number;
  title: string;
  description: string;
};

export type LorePeriod = {
  id: string;
  title: string;
  start: number;
  end: number;
  description: string;
  type: "age" | "war" | "dynasty" | "event";
  events?: LoreEvent[];
};

export const lorePeriods: LorePeriod[] = [
  {
    id: "age-of-chaos",
    title: "The Age of Chaos",
    start: 0,
    end: 310,
    type: "age",
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
    id: "age-of-peace",
    title: "The Age of Peace",
    start: 412,
    end: 621,
    type: "age",
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
        description:
          "The great kingdoms renewed their ancient pact of peace.",
      },
    ],
  },
  {
    id: "age-of-conflict",
    title: "The Age of Conflict",
    start: 621,
    end: 812,
    type: "age",
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
    id: "fall-of-sky",
    title: "The Fall of Sky",
    start: 812,
    end: 850,
    type: "war",
    description:
      "The Kingdom of Sky, once believed untouchable, collapsed beneath invasion and betrayal.",
    events: [
      {
        year: 812,
        title: "The Siege of the Golden Gate",
        description:
          "Northern armies reached the walls of the capital.",
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