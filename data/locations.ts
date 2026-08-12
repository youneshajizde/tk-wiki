export type Location = {
  id: string;
  name: string;
  title: string;
  description: string;
  image?: string;
};

export const locations: Record<string, Location[]> = {
  sylvane: [
    {
      id: "creghall",
      name: "Creghall",
      title: "Battlefield",
      description:
        "The site of one of the bloodiest conflicts in Sylvane's history.",
      image: "/images/photo-2.jpg",
    },
  ],

  aqualis: [],

  qetaria: [],

  others: [],
};