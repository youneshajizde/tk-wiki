export type Kingdom = {
  id: string;
  name: string;
  subtitle: string;
  sigil: string;
  description: string;
};

export const kingdoms: Kingdom[] = [
  {
    id: "sylvane",
    name: "Kingdom of Sylvane",
    subtitle: "The Kingdom of Forest",
    sigil: "/images/sylvane-kd.png",
    description:
      "A realm of ancient forests, noble houses, and old bloodlines.",
  },
  {
    id: "aqvalith",
    name: "Kingdom of Aqvalith",
    subtitle: "The Kingdom of Ocean",
    sigil: "/images/aqvalith-kd.jpg",
    description:
      "A maritime kingdom whose influence stretches across the great seas.",
  },
  {
    id: "zohanim",
    name: "Kingdom of Zohanim",
    subtitle: "The Kingdom of Sand",
    sigil: "/images/zohanim-kd.jpg",
    description:
      "An ancient kingdom of deserts, cities, and powerful dynasties.",
  },
  {
    id: "dorgen",
    name: "Kingdom of ",
    subtitle: "The Kingdom of mountains",
    sigil: "/images/dorgen-kd.jpg",
    description: "An ancient kingdom of mountains, and powerful clans.",
  },
  {
    id: "vintra",
    name: "Kingdom of vintra",
    subtitle: "The Kingdom of winter",
    sigil: "/images/vintra-kd.jpg",
    description: "An ancient kingdom of winter.",
  },
  {
    id: "others",
    name: "The Other Kingdoms",
    subtitle: "Beyond the Known Realms",
    sigil: "/images/others-kd.jpg",
    description:
      "Lesser kingdoms and distant lands beyond the borders of the great realms.",
  },
];
