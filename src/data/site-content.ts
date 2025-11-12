import {
  Coffee,
  Flame,
  Gift,
  Leaf,
  ShieldCheck,
  Sparkles,
  Timer,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import type { Collection, LocationDetail, Product } from "@/types/product";

export type CraftPillar = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type StoryMilestone = {
  year: string;
  title: string;
  description: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Single-Origin Obsidian 85%",
    description:
      "Hand-tempered cacao from Tumaco with warm panela sweetness and roasted fig.",
    notes: ["Tumaco Cacao", "Amber Panela", "Roasted Fig"],
    price: 22,
    weight: "90 g",
    image:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=900&q=80",
    badge: "Bestseller",
  },
  {
    id: 2,
    name: "Champagne Truffle Sonata",
    description:
      "Signature truffles with Grand Cru cocoa dust and effervescent champagne ganache.",
    notes: ["Dom Pérignon Ganache", "Golden Cocoa Dust", "Silk Ganache"],
    price: 32,
    weight: "12 pieces",
    image:
      "https://images.unsplash.com/photo-1531988042231-d39a9cc12a9a?auto=format&fit=crop&w=900&q=80",
    badge: "Limited Release",
  },
  {
    id: 3,
    name: "Midnight Fleur Bonbons",
    description:
      "Bonbons perfumed with Tahitian vanilla, hibiscus caramel, and edible petals.",
    notes: ["Tahitian Vanilla", "Hibiscus Caramel", "Edible Petals"],
    price: 28,
    weight: "16 pieces",
    image:
      "https://images.unsplash.com/photo-1572376146141-979c83df251d?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    name: "Amber Sea Salt Praline",
    description:
      "Hazelnut gianduja wrapped in cacao velvet and flecked with fleur de sel.",
    notes: ["Piedmont Hazelnut", "Fleur de Sel", "Cacao Velvet"],
    price: 18,
    weight: "110 g",
    image:
      "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?auto=format&fit=crop&w=900&q=80",
  },
];

export const featuredCollections: Collection[] = [
  {
    title: "Grand Atelier Bars",
    description:
      "Single-origin tablets finished by hand with family caramel, spice, and citrus peels.",
    highlight: "Eight terroirs. Slow roasted. Kitchen-crafted and stone refined.",
    cta: "Explore grand crus",
  },
  {
    title: "Evening Degustation",
    description:
      "Sensory flights pairing homemade ganaches, pralines, and mignardises with dessert wines.",
    highlight: "Hosted virtually & in our kitchen atelier.",
    cta: "Reserve a tasting",
  },
  {
    title: "Gilded Gift Studio",
    description:
      "Personalize keepsake boxes, foil monograms, and hand-written notes for any occasion.",
    highlight: "Concierge design team with homemade finishing included.",
    cta: "Design a gift",
  },
];

export const craftPillars: CraftPillar[] = [
  {
    icon: Flame,
    title: "Fire-Roasted Beans",
    description:
      "Low, ember-like roasts unlock layered caramelization with the comfort of a home kitchen.",
  },
  {
    icon: Leaf,
    title: "Botanical Pairings",
    description:
      "Single-estate botanicals and heirloom spices weave through each homemade recipe.",
  },
  {
    icon: Coffee,
    title: "Aged Ganaches",
    description:
      "Ganaches rest in French oak for 72 hours to deepen resonance and silkiness.",
  },
  {
    icon: ShieldCheck,
    title: "Ethical Provenance",
    description:
      "Direct-trade sourcing with regenerative co-ops safeguards terroir integrity.",
  },
];

export const giftingPerks = [
  "Tailored card and inscription concierge",
  "Cold-chain express delivery worldwide",
  "Flexible subscription cadence & swaps",
  "Enterprise gifting with white-glove support",
];

export const tastingLocations: LocationDetail[] = [
  {
    city: "Paris, Le Marais",
    details: "18 Rue de Cacao • Wed–Sun • 4 seatings",
  },
  {
    city: "New York, SoHo",
    details: "182 Mercer Street • Thu–Sun • 5 seatings",
  },
];

export const storyMilestones: StoryMilestone[] = [
  {
    year: "2014",
    title: "Cravings Atelier Opens",
    description:
      "Our Paris atelier opens, introducing gilded cacao rituals to intimate tastings.",
  },
  {
    year: "2018",
    title: "Direct Origins Initiative",
    description:
      "We partner with regenerative cacao cooperatives across Tumaco and Sao Tome.",
  },
  {
    year: "2021",
    title: "NYC Salon",
    description:
      "The SoHo tasting salon debuts, pairing cacao flights with natural wines and teas.",
  },
  {
    year: "2025",
    title: "Luminary Membership",
    description:
      "A global membership offering seasonal drops, ateliers, and concierge gifting.",
  },
];

export const atelierHighlights = [
  {
    icon: Sparkles,
    title: "Private Degustations",
    description:
      "Candlelit five-course chocolate journeys with beverage pairings and live gilding.",
  },
  {
    icon: Gift,
    title: "Gift Studio Concierge",
    description:
      "Design bespoke keepsake boxes, monograms, and handwritten notes with our team.",
  },
  {
    icon: Timer,
    title: "Seasonal Reveals",
    description:
      "Limited homemade releases unveiled quarterly with immersive storytelling and tasting kits.",
  },
];

export type GalleryItem = {
  src: string;
  alt: string;
};

export const chocolateGallery: GalleryItem[] = [
  {
    src: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80",
    alt: "Handcrafted chocolate tablet sprinkled with sea salt flakes",
  },
  {
    src: "https://images.unsplash.com/photo-1603985529862-9a6153e0dba2?auto=format&fit=crop&w=1200&q=80",
    alt: "Homemade pralines coated in glossy dark chocolate",
  },
  {
    src: "https://images.unsplash.com/photo-1588167108370-620c3e81f9c1?auto=format&fit=crop&w=1200&q=80",
    alt: "Cocoa powder dusted truffles on marble surface",
  },
  {
    src: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1200&q=80",
    alt: "Chocolate bonbons with caramel drizzles and edible gold",
  },
  {
    src: "https://images.unsplash.com/photo-1497051788611-2c64812349e3?auto=format&fit=crop&w=1200&q=80",
    alt: "Artisan chocolate bark with pistachio and rose petals",
  },
  {
    src: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=1200&q=80",
    alt: "Pouring melted chocolate into a bowl",
  },
];

export const signatureVideo =
  "https://cdn.coverr.co/videos/coverr-crafting-exquisite-chocolate-1884/1080p.mp4";

