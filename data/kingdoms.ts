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
    id: "aqualis",
    name: "Kingdom of Aqualis",
    subtitle: "The Kingdom of Ocean",
    sigil: "/images/Aqualis-kd.jpg",
    description:
      "A maritime kingdom whose influence stretches across the great seas.",
  },
  {
    id: "qetaria",
    name: "Kingdom of Qetaria",
    subtitle: "The Kingdom of Sand",
    sigil: "/images/qetaria-kd.jpg",
    description:
      "An ancient kingdom of deserts, cities, and powerful dynasties.",
  },
  {
    id: "others",
    name: "The Other Kingdoms",
    subtitle: "Beyond the Known Realms",
    sigil: "/images/others-kd.png",
    description:
      "Lesser kingdoms and distant lands beyond the borders of the great realms.",
  },
];
