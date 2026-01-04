// src/data/products.js

const PRODUCTS = [
  {
    id: crypto.randomUUID(),
    name: "Zerbia Amazigh",
    price: 1200,
    category: "Decoration",
    image: "/images/zerbia.png",
    inStock: true,
    description: "Tapis amazigh traditionnel tissé à la main avec des motifs authentiques."
  },
  {
    id: crypto.randomUUID(),
    name: "Tagine Traditionnel Fassi",
    price: 180,
    category: "Cuisine",
    image: "/images/tagine.png",
    inStock: true,
    description: "Tagine marocain en argile, idéal pour la cuisine traditionnelle."
  },
  {
    id: crypto.randomUUID(),
    name: "Balgha Marrakchia",
    price: 350,
    category: "Chaussures",
    image: "/images/balgha.png",
    inStock: false,
    description: "Chaussures artisanales marocaines en cuir fabriquées à Marrakech."
  },
  {
    id: crypto.randomUUID(),
    name: "Jellaba Marocaine",
    price: 650,
    category: "Vetements",
    image: "/images/jellaba.png",
    inStock: true,
    description: "Jellaba traditionnelle marocaine, confortable et élégante."
  },
  {
    id: crypto.randomUUID(),
    name: "Sac en cuir artisanal",
    price: 500,
    category: "Accessoires",
    image: "/images/sac-cuir.png",
    inStock: true,
    description: "Sac fabriqué à la main en cuir naturel par des artisans marocains."
  },
  {
    id: crypto.randomUUID(),
    name: "Bijoux Amazigh en argent",
    price: 900,
    category: "Bijoux",
    image: "/images/bijoux.png",
    inStock: false,
    description: "Bijoux amazighs traditionnels en argent avec gravures authentiques."
  },
  {
    id: crypto.randomUUID(),
    name: "Plateau en cuivre martelé",
    price: 400,
    category: "Decoration",
    image: "/images/plateau-cuivre.png",
    inStock: true,
    description: "Plateau décoratif en cuivre martelé à la main."
  },
  {
    id: crypto.randomUUID(),
    name: "Lampe artisanale marocaine",
    price: 750,
    category: "Decoration",
    image: "/images/jellaba.png",
    inStock: true,
    description: "Lampe marocaine artisanale créant une ambiance chaleureuse."
  },
  {
    id: crypto.randomUUID(),
    name: "Service à thé traditionnel",
    price: 300,
    category: "Cuisine",
    image: "/images/bijoux.png",
    inStock: true,
    description: "Service à thé marocain traditionnel pour les moments conviviaux."
  },
  {
    id: crypto.randomUUID(),
    name: "Babouches artisanales",
    price: 280,
    category: "Chaussures",
    image: "/images/balgha.png",
    inStock: false,
    description: "Babouches marocaines en cuir fabriquées artisanalement."
  }
];

export default PRODUCTS;
