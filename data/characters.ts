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

  aqvalith: [
    {
      id: "athaael",
      identity: {
        name: "Athaael",
        titles: ["Scion of Aqva"],
        kingdom: "Aqvalith",
        role: "First Son of the Sky King",
        gender: "Male",
        skyBloodStatus: "Skyborn",
        born: "BF 289",
        died: "",
        father: "Kaeras",
        mother: "",
        issue: ["Athus", "Ethenor"],
        spouse: [],
      },
      description: {
        overview:
          "Athaael is the firstborn son of Kaeras, the Sky King, and the Scion of Aqva. Born approximately two hundred years after Kaeras's rise, he was raised from childhood to become a ruler and eventually took control of Aqvalith, the kingdom shaped by the power of the sea. As the oldest of the five Scions, Athaael has the longest history of rule among his siblings. He is a capable and prudent ruler who governs Aqvalith through a system resembling a constitutional monarchy, relying on a council and representatives for major decisions.",
        appearance:
          "Athaael is a tall, broad-shouldered man with a powerful and imposing physique. He has a mature, weathered face, dark wavy hair, thick eyebrows, and a short, rugged beard. His features carry the appearance of a man who has lived for centuries, while retaining the strength and vitality of a Scion. His eyes are naturally silver, reflecting a faint amount of light from within the shadows of the iris rather than appearing completely luminous. When Athaael enters a focused state and actively channels Kaelom, the silver of his eyes begins to glow, intensifying the light reflected from within them. Athaael wears ceremonial attire dominated by deep navy blue, silver, and ivory. His clothing consists of a layered ivory robe with intricate patterns, reinforced by dark blue embroidered bands and ornamental panels. Metallic shoulder clasps, bracers, and other elements of his attire are decorated with aquatic and celestial motifs. The most distinctive symbol of his attire is the oarfish, which appears both on his headdress and on his clothing. The oarfish is a sacred and symbolic creature of Aqvalith and represents the kingdom's deep connection with the sea. His ceremonial headdress is decorated with an oarfish figure at its crown, while another representation of the creature is incorporated into the front of his garment. The overall design of Athaael reflects both his position as the Scion of Aqva and his status as the ruler of Aqvalith, combining the imagery of the sea with the celestial symbolism inherited from the Sky King.",
        personality:
          "Athaael is a capable, prudent, and politically minded ruler. As the oldest of the five Scions, he has the longest experience in governance and has developed a more established approach to ruling than his younger siblings. His leadership is characterized by careful decision-making and the use of representatives and a governing council for matters of major importance.",
        biography:
          "Athaael was born in BF 289 as the first child of Kaeras, the Sky King, and became the first of the five Scions. He was born approximately two hundred years after Kaeras's rise, at the command of Aqva, and was raised in a coastal environment closely connected to the sea. Like the other Scions, he was raised from childhood to become a leader, with the purpose of eventually governing a portion of the kingdom created and expanded through the power within him. As the Scion of Aqva, Athaael inherited the divine power associated with the sea. He eventually became the ruler of Aqvalith, a kingdom consisting of countless islands formed after the rise of the world's waters. His reign is the longest among the five Scions due to his position as the firstborn. Athaael governs Aqvalith through a system resembling a constitutional monarchy, using a council and various representatives for major decisions rather than relying solely on absolute personal rule. Athaael remains alive and is currently involved in the War of Retribution.",
      },
      image: "/images/character-3.jpg",
      gallery: [],
    },
  ],

  zohanim: [],

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

        issue: ["Athaael", "Sorchae", "Nishaera", "Bërgoth", "Draegrik"],

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
