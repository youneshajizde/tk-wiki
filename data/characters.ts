export type CharacterIdentity = {
  name: string;
  titles: string[];
  kingdom: string;
  role: string;
  gender: string;
  skyBloodStatus: string;
  born: string;
  died: string;
  father: string;
  mother: string;
  issue: string[];
  spouse: string[];
};

export type CharacterDescription = {
  overview: string;
  appearance: string;
  personality: string;
  biography: string;
};

export type Character = {
  id: string;
  identity: CharacterIdentity;
  description: CharacterDescription;
  image?: string;
  gallery?: string[];
};

export const characters: Record<string, Character[]> = {
  sylvane: [],

  aqualis: [],

  qetaria: [],

  others: [
    {
      id: "kaeras",

      identity: {
        name: "Kaeras",

        titles: ["Sky King"],

        kingdom: "Other",

        role: "Sky King",

        gender: "Male",

        skyBloodStatus: "Origin",

        born: "BF 706",

        died: "BF 0 / AF 0",

        father: "",

        mother: "",

        issue: [
          "Athaael",
          "Sorchae",
          "Nishaera",
          "Bërgoth",
          "Draegrik",
        ],

        spouse: [],
      },

      description: {
        overview:
          "Kaeras was an ordinary human leader who rose from one of the small nomadic groups of the Hue and Cry era to become the Sky King. Chosen by the five gods for his extraordinary ability to unite and rally people around him, he became the first and only bearer of Kaelom, the harmonious unity of the five divine powers. His reign established the foundation of the world's climate and brought humanity into the Age of Harmony. His natural death, known as the Fall of Sky, marked the end of his reign and the collapse of the harmony he had maintained for centuries.",

        appearance:
          "Kaeras is a tall, broad-shouldered man with a powerful and weathered appearance, reflecting the centuries he lived through. He has dark, tightly curled hair, a full dark beard streaked with gray, thick eyebrows, and a mature, rugged face marked by age. After Kaelom of Harmony enters his body, his eyes become a vivid sapphire blue. He wears elaborate silver-white ceremonial armor with layered shoulder plates, intricate geometric and celestial patterns, and dark blue accents. Star-shaped emblems containing dark sapphire gemstones adorn the center of his chest and waist. A dark blue sash is wrapped around his waist, with a chain and a small sapphire ornament hanging from it. On his head he wears a crown made entirely of sapphire, matching the deep blue of his eyes and the other sapphire elements of his attire.",

        personality:
          "Kaeras was defined above all by his ability to unite people and inspire them to remain together. Before becoming the Sky King, he possessed neither royal status nor extraordinary power, yet he was able to lead a small nomadic group through a world without stable climate, resources, or permanent settlements. His greatest strength was not physical power or military authority, but his natural ability to bring people together around a common purpose. This quality ultimately made him capable of carrying the combined harmony of the five divine powers.",

        biography:
          "Kaeras was born in BF 706 during the Age of Hue and Cry, an era in which the world had no stable climate, seasons, or permanent natural cycles. Humanity lived in small nomadic groups that constantly moved in search of water and other resources. Kaeras was born into one such group and eventually became its leader. He held no royal title, possessed no extraordinary power, and was simply a human leader among many. What distinguished him was his extraordinary ability to unite and rally people around him. As the Hue and Cry era approached a catastrophic point, the five gods chose Kaeras as the vessel through which they could act upon the world. In BF 650, at the age of 56, Aqva, Sylve, Zohan, Dorg, and Vint acted with a single will for the first time and introduced Kaelom into the world through Kaeras. Kaelom was not a sixth divine power, but the harmony and balance created by the simultaneous presence of the five powers. Kaeras became known as the Sky King. With Kaelom within him, he began the long process of uniting the scattered human groups and establishing permanent settlements. After 158 years of unification and settlement, the Age of Hue and Cry ended in BF 492 and the Age of Harmony began. Kaeras continued to rule for centuries while maintaining the balance of the five divine powers within himself. The five gods later began the creation of the five Scions, each associated with one of the divine powers and its corresponding kingdom.",
      },

      image: "/images/character-1.jpg",

      gallery: [],
    },
  ],
};