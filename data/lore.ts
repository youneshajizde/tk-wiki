export type LoreItem = {
  id: string;
  name: string;
  subtitle?: string;
  description: string;
  image?: string;
};

export const characters: Record<string, LoreItem[]> = {
  sylvane: [
    {
      id: "magister-leomhann",
      name: "Magister Léomhann",
      subtitle: "Lord of House Léomhann",
      description:
        "A powerful lord of Sylvane and commander during the Slaughter of Creghall.",
    },
    {
      id: "elmo-oswald",
      name: "Elmo Oswald",
      subtitle: "Lord of House Oswald",
      description:
        "An experienced warrior and ally of House Léomhann.",
    },
  ],

  aqualis: [
    {
      id: "hebron",
      name: "Hebron",
      subtitle: "Aquator of Aqualis",
      description:
        "A senator of the ocean kingdom and a powerful political figure.",
    },
    {
      id: "thaalus",
      name: "Thaalus",
      subtitle: "Aquator",
      description:
        "An elder senator possessing one of the greatest fleets in Aqualis.",
    },
  ],

  qetaria: [],

  others: [],
};

export const weapons: Record<string, LoreItem[]> = {
  sylvane: [
    {
      id: "widows-scream",
      name: "Widow's Scream",
      subtitle: "Sword of House Léomhann",
      description:
        "A legendary sword with a willow-shaped pommel.",
    },
  ],

  aqualis: [],

  qetaria: [],

  others: [],
};

export const locations: Record<string, LoreItem[]> = {
  sylvane: [
    {
      id: "creghall",
      name: "Creghall",
      subtitle: "Battlefield",
      description:
        "The site of one of the bloodiest conflicts in Sylvane's history.",
    },
  ],

  aqualis: [],

  qetaria: [],

  others: [],
};