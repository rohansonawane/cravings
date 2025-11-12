export type Product = {
  id: number;
  name: string;
  description: string;
  notes: string[];
  price: number;
  weight: string;
  image: string;
  badge?: string;
};

export type Collection = {
  title: string;
  description: string;
  highlight: string;
  cta: string;
};

export type LocationDetail = {
  city: string;
  details: string;
};

