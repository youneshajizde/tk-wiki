export type Weapon = {
  id: string;
  name: string;
  title: string;
  description: string;
  image?: string;
};

export const weapons: Record<string, Weapon[]> = {
  sylvane: [
    {
      id: "widows-scream",
      name: "Widow's Scream",
      title: "Sword of House Léomhann",
      description:
        "A legendary sword with a willow-shaped pommel, carried by the lords of House Léomhann.",
      image: "/images/photo-1.jpg",
    },
  ],

  aqvalith: [],

  zohanim: [],

  others: [],
};