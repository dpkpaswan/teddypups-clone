/**
 * puppies.ts — Central data source for all puppy listings.
 * Located at data/puppies.ts as required by user prompt.
 */

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export type Breed =
  | "Maltipoo"
  | "Pomeranian"
  | "Poodle"
  | "Cavapoo"
  | "Shih Tzu";

export type Origin = "Imported" | "Korean Teacup";

export type Gender = "Boy" | "Girl";

export type Status = "Available" | "Reserved" | "Gone Home";

export interface Puppy {
  slug: string;
  name: string;
  breed: Breed;
  gender: Gender;
  age: string;
  origin: Origin;
  status: Status;
  image: string;
  gallery: string[];
  hasVideo: boolean;
  description: string;
  price?: string;
}

/* ------------------------------------------------------------------ */
/*  Verified Working Puppy Photos (Unsplash free to use)              */
/* ------------------------------------------------------------------ */

const img = {
  p1: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600&h=800&fit=crop",
  p2: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600&h=800&fit=crop",
  p3: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=800&fit=crop",
  p4: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=600&h=800&fit=crop",
  p5: "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=600&h=800&fit=crop",
  p6: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=600&h=800&fit=crop",
  p7: "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=600&h=800&fit=crop",
  p8: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=800&fit=crop",
  p9: "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?w=600&h=800&fit=crop",
  p10: "https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?w=600&h=800&fit=crop",
  p11: "https://images.unsplash.com/photo-1583511655826-05700d52f4d9?w=600&h=800&fit=crop",
  p12: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=600&h=800&fit=crop",
  p13: "https://images.unsplash.com/photo-1591946614720-90a587da4a36?w=600&h=800&fit=crop",
  p14: "https://images.unsplash.com/photo-1534361960057-19889db9621e?w=600&h=800&fit=crop",
  p15: "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=600&h=800&fit=crop",
  p16: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=600&h=800&fit=crop",
  p17: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=600&h=800&fit=crop",
};

/* ------------------------------------------------------------------ */
/*  Puppy Listings                                                     */
/* ------------------------------------------------------------------ */

export const puppies: Puppy[] = [
  {
    slug: "max-maltipoo",
    name: "Max",
    breed: "Maltipoo",
    gender: "Boy",
    age: "3 months",
    origin: "Imported",
    status: "Available",
    image: img.p1,
    gallery: [img.p1, img.p2, img.p3],
    hasVideo: true,
    description:
      "Max is an adorable cream Maltipoo with the softest curly coat. He loves cuddles, follows you around the house, and has already started basic potty training. Perfect for apartment living.",
  },
  {
    slug: "bella-maltipoo",
    name: "Bella",
    breed: "Maltipoo",
    gender: "Girl",
    age: "2 months",
    origin: "Korean Teacup",
    status: "Available",
    image: img.p2,
    gallery: [img.p2, img.p1, img.p3],
    hasVideo: true,
    description:
      "Bella is a Korean Teacup Maltipoo with a playful spirit. She weighs just 400 grams and will stay tiny her whole life. Vaccinated and health-checked.",
  },
  {
    slug: "luna-maltipoo",
    name: "Luna",
    breed: "Maltipoo",
    gender: "Girl",
    age: "2.5 months",
    origin: "Imported",
    status: "Available",
    image: img.p3,
    gallery: [img.p3, img.p1, img.p2],
    hasVideo: false,
    description:
      "Luna is a gentle Maltipoo girl with a wavy caramel coat. She's calm, friendly, and great with children. Comes with full vaccination records.",
  },
  {
    slug: "coco-pomeranian",
    name: "Coco",
    breed: "Pomeranian",
    gender: "Girl",
    age: "2 months",
    origin: "Korean Teacup",
    status: "Available",
    image: img.p4,
    gallery: [img.p4, img.p5, img.p10],
    hasVideo: true,
    description:
      "Coco is a stunning Korean Teacup Pomeranian with a fluffy orange coat and a teddy-bear face. Extremely tiny — expected adult weight under 1.5 kg.",
  },
  {
    slug: "teddy-pomeranian",
    name: "Teddy",
    breed: "Pomeranian",
    gender: "Boy",
    age: "2 months",
    origin: "Korean Teacup",
    status: "Available",
    image: img.p5,
    gallery: [img.p5, img.p4, img.p10],
    hasVideo: false,
    description:
      "Teddy is a charming little Pom with a sable coat. He's energetic, loves to play fetch with tiny toys, and has the classic Pomeranian smile.",
  },
  {
    slug: "mochi-pomeranian",
    name: "Mochi",
    breed: "Pomeranian",
    gender: "Girl",
    age: "3 months",
    origin: "Korean Teacup",
    status: "Reserved",
    image: img.p10,
    gallery: [img.p10, img.p4, img.p5],
    hasVideo: true,
    description:
      "Mochi is a cream Pomeranian with the fluffiest coat you've ever seen. She's reserved for a family and will be going home soon!",
  },
  {
    slug: "charlie-poodle",
    name: "Charlie",
    breed: "Poodle",
    gender: "Boy",
    age: "3 months",
    origin: "Imported",
    status: "Available",
    image: img.p6,
    gallery: [img.p6, img.p7],
    hasVideo: true,
    description:
      "Charlie is a smart Teacup Poodle with a rich apricot coat. Hypoallergenic, non-shedding, and incredibly easy to train.",
  },
  {
    slug: "daisy-poodle",
    name: "Daisy",
    breed: "Poodle",
    gender: "Girl",
    age: "2 months",
    origin: "Korean Teacup",
    status: "Available",
    image: img.p7,
    gallery: [img.p7, img.p6],
    hasVideo: false,
    description:
      "Daisy is a tiny red Poodle from Korea. She's healthy, playful, and perfect for anyone looking for a hypoallergenic companion.",
  },
  {
    slug: "oliver-cavapoo",
    name: "Oliver",
    breed: "Cavapoo",
    gender: "Boy",
    age: "3 months",
    origin: "Imported",
    status: "Available",
    image: img.p8,
    gallery: [img.p8, img.p13],
    hasVideo: true,
    description:
      "Oliver is a golden Cavapoo with the sweetest temperament. A Cavalier King Charles × Poodle cross, he's gentle, loving, and great with kids.",
  },
  {
    slug: "rosie-cavapoo",
    name: "Rosie",
    breed: "Cavapoo",
    gender: "Girl",
    age: "2.5 months",
    origin: "Imported",
    status: "Gone Home",
    image: img.p13,
    gallery: [img.p13, img.p8],
    hasVideo: false,
    description:
      "Rosie found her forever family! This gorgeous Cavapoo girl is now living her best life with the Al-Rashid family in Abu Dhabi.",
  },
  {
    slug: "milo-shihtzu",
    name: "Milo",
    breed: "Shih Tzu",
    gender: "Boy",
    age: "4 months",
    origin: "Imported",
    status: "Available",
    image: img.p9,
    gallery: [img.p9, img.p11],
    hasVideo: true,
    description:
      "Milo is a handsome Shih Tzu with a flowing white and gold coat. He's calm, affectionate, and loves being held. Perfect lap dog.",
  },
  {
    slug: "lily-shihtzu",
    name: "Lily",
    breed: "Shih Tzu",
    gender: "Girl",
    age: "3 months",
    origin: "Imported",
    status: "Gone Home",
    image: img.p11,
    gallery: [img.p11, img.p9],
    hasVideo: false,
    description:
      "Lily went home to a wonderful family in Dubai Marina. She's thriving and has already made best friends with their cat!",
  },
];

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

export const allBreeds: Breed[] = [
  "Maltipoo",
  "Pomeranian",
  "Poodle",
  "Cavapoo",
  "Shih Tzu",
];

export const allOrigins: Origin[] = ["Imported", "Korean Teacup"];

export const allGenders: Gender[] = ["Boy", "Girl"];

export const heroImages: string[] = [
  img.p1,
  img.p2,
  img.p3,
  img.p4,
  img.p5,
  img.p6,
];

export const familyImages = [
  {
    src: img.p14,
    caption: "The Sharma family with their Maltipoo, Cookie",
  },
  {
    src: img.p15,
    caption: "Baby & Bruno — best friends since day one",
  },
  {
    src: img.p16,
    caption: "Nala settling into her new Dubai home",
  },
  {
    src: img.p17,
    caption: "Weekend adventures with Pebbles the Pom",
  },
];

export function getPuppyBySlug(slug: string): Puppy | undefined {
  return puppies.find((p) => p.slug === slug);
}

export function getAvailablePuppies(): Puppy[] {
  return puppies.filter((p) => p.status === "Available");
}

export function getGoneHomePuppies(): Puppy[] {
  return puppies.filter((p) => p.status === "Gone Home");
}

export default puppies;
