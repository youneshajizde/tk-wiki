export type Character = {
  id: string;
  name: string;
  title: string;
  description: string;
  image?: string;
};

export const characters: Record<string, Character[]> = {
  sylvane: [
    {
      id: "kaeras",
      name: "Kaeras",
      title: "The Sky King",
      description:
        "A powerful lord of Sylvane and commander during the Slaughter of Creghall.",
      image: "/images/character-1.jpg",
    },
    {
      id: "sorcha",
      name: "Sorcha Scion",
      title: "Scion of Sylvane",
      description: "An experienced warrior and ally of House Léomhann.",
      image: "/images/character-2.jpg",
    },
    {
      id: "elmon",
      name: "Elmon Hornball",
      title: "Knight of Sylvane",
      description:
        "A seasoned warrior known for his loyalty and skill on the battlefield.",
      image: "/images/character-3.jpg",
    },
    {
      id: "magister",
      name: "Magister Léomhann",
      title: "Lord of House Léomhann",
      description:
        "The lord of House Léomhann and one of Sylvane's most respected commanders.",
      image: "/images/character-4.jpg",
    },
    {
      id: "samfrid",
      name: "Samfrid Oswald",
      title: "Lord of House Oswald",
      description:
        "A veteran lord and commander who led House Oswald during the conflicts of Sylvane.",
      image: "/images/character-5.jpg",
    },
  ],

  aqualis: [
    {
      id: "hebron",
      name: "Hebron",
      title: "Aquator of Aqualis",
      description:
        "A senator of the ocean kingdom and a powerful political figure.",
    },
    {
      id: "thaalus",
      name: "Thaalus",
      title: "Aquator",
      description:
        "An elder senator possessing one of the greatest fleets in Aqualis.",
    },
  ],

  qetaria: [],

  others: [],
};
