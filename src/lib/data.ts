// Product data structure
export interface Product {
  id: string;
  name: string;
  slug: string;
  price?: number;
  description: string;
  shortDescription: string;
  images: string[];
  modelPath?: string; // Path to GLB model for 3D view
  category: string;
  featured: boolean;
  new: boolean;
}

// Navigation link structure
export interface NavLink {
  label: string;
  href: string;
}

// Lookbook item structure
export interface LookbookItem {
  id: string;
  title: string;
  description: string;
  image: string;
  alignment: 'left' | 'right' | 'center';
}

// Navigation links
export const NAV_LINKS = [
  { label: 'Collection', href: '/collection' },
  { label: 'Lookbook', href: '/lookbook' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;


// Featured products for homepage
export const FEATURED_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Silk Evening Gown',
    slug: 'silk-evening-gown',
    price: 2800,
    description: 'An exquisite silk evening gown crafted from the finest Italian silk. Each piece is hand-finished with meticulous attention to detail, featuring subtle draping and a silhouette that moves with grace.',
    shortDescription: 'Hand-finished Italian silk with subtle draping',
    images: ['/images/products/gown-1.png'],
    modelPath: '/models/gown.glb',
    category: 'Evening Wear',
    featured: true,
    new: true,
  },
  {
    id: '2',
    name: 'Tailored Wool Blazer',
    slug: 'tailored-wool-blazer',
    price: 1650,
    description: 'A masterfully tailored blazer in premium wool blend. The structured shoulders and clean lines create a powerful silhouette, while the soft fabric ensures all-day comfort.',
    shortDescription: 'Premium wool blend with structured shoulders',
    images: ['/images/products/blazer-1.png'],
    modelPath: '/models/blazer.glb',
    category: 'Outerwear',
    featured: true,
    new: false,
  },
  {
    id: '3',
    name: 'Cashmere Wrap Coat',
    slug: 'cashmere-wrap-coat',
    price: 3200,
    description: 'Luxuriously soft cashmere wrap coat that embodies understated elegance. The generous proportions and belt closure create a flattering, draped silhouette.',
    shortDescription: 'Pure cashmere with draped silhouette',
    images: ['/images/products/coat-1.png'],
    modelPath: '/models/coat.glb',
    category: 'Outerwear',
    featured: true,
    new: true,
  },
  {
    id: '4',
    name: 'Pleated Midi Skirt',
    slug: 'pleated-midi-skirt',
    price: 890,
    description: 'Elegant pleated midi skirt with a fluid movement. The precision pleating creates a sophisticated texture that catches light beautifully.',
    shortDescription: 'Precision pleating with fluid movement',
    images: ['/images/products/skirt-1.png'],
    category: 'Bottoms',
    featured: true,
    new: false,
  },
];

// All products (including featured)
export const ALL_PRODUCTS: Product[] = [
  ...FEATURED_PRODUCTS,
  {
    id: '5',
    name: 'Leather Ensemble',
    slug: 'leather-ensemble',
    price: 4500,
    description: 'A bold statement piece in premium Italian leather. Hand-stitched detailing and custom hardware showcase the artisanal craftsmanship.',
    shortDescription: 'Premium Italian leather with artisan details',
    images: ['/images/products/leather-1.png'],
    category: 'Special Pieces',
    featured: false,
    new: true,
  },
  {
    id: '6',
    name: 'Silk Blouse',
    slug: 'silk-blouse',
    price: 680,
    description: 'A versatile silk blouse that transitions seamlessly from day to evening. The relaxed fit and luxurious fabric make it an essential wardrobe piece.',
    shortDescription: 'Versatile silk with relaxed fit',
    images: ['/images/products/blouse-1.png'],
    category: 'Tops',
    featured: false,
    new: false,
  },
];

// Product categories
export const CATEGORIES = [
  'Evening Wear',
  'Outerwear',
  'Bottoms',
  'Tops',
  'Special Pieces',
] as const;


// Lookbook items
export const LOOKBOOK_ITEMS: LookbookItem[] = [
  {
    id: '1',
    title: 'Dawn Collection',
    description: 'Soft silhouettes that capture the quiet elegance of morning light.',
    image: '/images/lookbook/dawn-1.jpg',
    alignment: 'right',
  },
  {
    id: '2',
    title: 'Urban Poetry',
    description: 'Where structure meets fluidity in the rhythm of the city.',
    image: '/images/lookbook/urban-1.jpg',
    alignment: 'left',
  },
  {
    id: '3',
    title: 'Evening Reverie',
    description: 'Pieces designed to make unforgettable entrances.',
    image: '/images/lookbook/evening-1.jpg',
    alignment: 'center',
  },
];

// Brand information
export const BRAND_INFO = {
  name: 'ATELIER',
  tagline: 'Crafted for the exceptional',
  manifesto: `We believe in the power of restraint. Each piece in our collection is designed with intention, crafted with precision, and made to transcend seasons. This is fashion that whispers rather than shouts.`,
  philosophy: `At ATELIER, we don't follow trends—we create timeless pieces that become part of your story. Our designs are born from the intersection of traditional craftsmanship and modern sensibility.`,
  values: [
    {
      title: 'Craftsmanship',
      description: 'Every stitch, every seam, every detail is executed with the precision and care of artisans who have dedicated their lives to their craft.',
    },
    {
      title: 'Sustainability',
      description: 'We source only the finest materials from suppliers who share our commitment to environmental responsibility.',
    },
    {
      title: 'Timelessness',
      description: 'Our pieces are designed to be worn and loved for years, not discarded after a single season.',
    },
  ],
  contact: {
    email: 'contact@atelier.com',
    instagram: '@atelier',
    phone: '+1 (555) 123-4567',
    address: '123 Fashion Avenue, New York, NY 10001',
  },
};
