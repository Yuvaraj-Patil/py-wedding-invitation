export type ShopCategory =
  | "rudraksha"
  | "pooja-kits"
  | "incense"
  | "idols"
  | "yantras"

export type ShopProduct = {
  id: string
  slug: string
  name: string
  category: ShopCategory
  priceInr: number
  short: string
  description: string
  popular?: boolean
  accent: string
}

export const categoryMeta: Record<
  ShopCategory,
  { label: string; blurb: string; seoTitle: string }
> = {
  rudraksha: {
    label: "Rudraksha",
    blurb: "Blessed beads for devotion and daily wear.",
    seoTitle: "Buy Rudraksha Online",
  },
  "pooja-kits": {
    label: "Pooja Kits",
    blurb: "Ready sets for home rituals and festivals.",
    seoTitle: "Pooja Kits for Home",
  },
  incense: {
    label: "Incense & Dhoop",
    blurb: "Fragrance that settles the mind for prayer.",
    seoTitle: "Incense Sticks & Dhoop",
  },
  idols: {
    label: "Idols & Murti",
    blurb: "Sacred forms for your temple corner.",
    seoTitle: "God Idols & Murti",
  },
  yantras: {
    label: "Yantras",
    blurb: "Sacred geometry for puja and meditation.",
    seoTitle: "Yantras for Puja",
  },
}

export const products: ShopProduct[] = [
  {
    id: "1",
    slug: "5-mukhi-rudraksha",
    name: "5 Mukhi Rudraksha",
    category: "rudraksha",
    priceInr: 299,
    short: "Most worn bead for daily jap and calm focus.",
    description:
      "Authenticated 5 Mukhi Rudraksha, cleaned and thread-ready. Ideal for beginners and daily wear. Comes with simple wearing guidance.",
    popular: true,
    accent: "#c45c26",
  },
  {
    id: "2",
    slug: "rudraksha-mala-108",
    name: "Rudraksha Mala (108)",
    category: "rudraksha",
    priceInr: 799,
    short: "Full jap mala for mantra practice.",
    description:
      "108+1 Rudraksha beads strung for japa. Comfortable knotting, suitable for Shiv mantra and morning sadhana.",
    popular: true,
    accent: "#9a3412",
  },
  {
    id: "3",
    slug: "daily-pooja-kit",
    name: "Daily Pooja Kit",
    category: "pooja-kits",
    priceInr: 499,
    short: "Everything for a simple morning aarti.",
    description:
      "Compact kit with diya, incense, kumkum, turmeric, camphor, and cotton wicks — packed for everyday home puja.",
    popular: true,
    accent: "#b45309",
  },
  {
    id: "4",
    slug: "mahashivratri-kit",
    name: "Mahashivratri Special Kit",
    category: "pooja-kits",
    priceInr: 999,
    short: "Festival-ready set for Shiv worship.",
    description:
      "Seasonal kit with bilva leaves (when available), incense, vibhuti, diya set, and a printed Shiv aarti card.",
    accent: "#7c2d12",
  },
  {
    id: "5",
    slug: "sandal-incense-pack",
    name: "Sandal Incense Pack",
    category: "incense",
    priceInr: 149,
    short: "Soft sandalwood fragrance for evening aarti.",
    description:
      "Hand-rolled sandal incense sticks. Long, even burn — suited for temple corners and meditation spaces.",
    popular: true,
    accent: "#a16207",
  },
  {
    id: "6",
    slug: "loban-dhoop-cones",
    name: "Loban Dhoop Cones",
    category: "incense",
    priceInr: 179,
    short: "Classic temple loban aroma.",
    description:
      "Loban dhoop cones for purifying the home before puja. Strong, traditional fragrance.",
    accent: "#854d0e",
  },
  {
    id: "7",
    slug: "shivling-brass",
    name: "Brass Shivling",
    category: "idols",
    priceInr: 1299,
    short: "Compact brass Shivling for home mandir.",
    description:
      "Solid brass Shivling with smooth finish. Sized for home temples and daily abhishek.",
    popular: true,
    accent: "#ca8a04",
  },
  {
    id: "8",
    slug: "nandi-brass",
    name: "Brass Nandi",
    category: "idols",
    priceInr: 899,
    short: "Companion murti for your Shivling.",
    description:
      "Brass Nandi idol to place facing the Shivling — a complete sacred set for devotees.",
    accent: "#a16207",
  },
  {
    id: "9",
    slug: "shree-yantra-copper",
    name: "Shree Yantra (Copper)",
    category: "yantras",
    priceInr: 699,
    short: "Copper yantra for prosperity puja.",
    description:
      "Etched copper Shree Yantra. Place in your puja space after a simple pran pratishtha ritual.",
    accent: "#b45309",
  },
  {
    id: "10",
    slug: "mahamrityunjaya-yantra",
    name: "Mahamrityunjaya Yantra",
    category: "yantras",
    priceInr: 599,
    short: "Yantra linked to the healing mantra.",
    description:
      "Copper Mahamrityunjaya Yantra for jap and protection rituals. Compact plate for home mandir.",
    accent: "#9a3412",
  },
]

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug)
}

export function getProductsByCategory(category: ShopCategory) {
  return products.filter((p) => p.category === category)
}

export function getPopularProducts() {
  return products.filter((p) => p.popular)
}
