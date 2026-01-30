// Brand Colors - Luxury palette with cream, black, and gold accents
export const COLORS = {
  // Primary palette
  cream: '#FAF7F2',
  black: '#0A0A0A',
  gold: '#C9A962',

  // Secondary palette
  charcoal: '#1A1A1A',
  warmGray: '#8A8A8A',
  softWhite: '#FEFEFE',

  // Accent colors
  goldLight: '#D4BC7A',
  goldDark: '#B89A4A',
} as const;

// Animation durations - Slow and confident feel
export const ANIMATION = {
  // Durations in seconds
  fast: 0.3,
  medium: 0.6,
  slow: 1.0,
  verySlow: 1.5,

  // Easing curves
  easeOut: [0.16, 1, 0.3, 1],
  easeInOut: [0.65, 0, 0.35, 1],
  luxury: [0.22, 1, 0.36, 1], // Custom luxury easing
} as const;

// Breakpoints (matching Tailwind defaults)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

// Three.js settings
export const THREE_CONFIG = {
  // Camera settings
  camera: {
    fov: 45,
    near: 0.1,
    far: 1000,
    position: [0, 0, 5] as [number, number, number],
  },

  // Lighting
  lighting: {
    ambient: {
      intensity: 0.5,
    },
    directional: {
      intensity: 1,
      position: [5, 5, 5] as [number, number, number],
    },
  },

  // Model rotation speed (radians per frame)
  rotationSpeed: 0.002,
} as const;

// Navigation links
export const NAV_LINKS = [
  { label: 'Collection', href: '/collection' },
  { label: 'Lookbook', href: '/lookbook' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

// SEO defaults
export const SEO = {
  siteName: 'ATELIER',
  defaultTitle: 'ATELIER | Luxury Fashion House',
  defaultDescription: 'A curated collection of exclusive, handcrafted pieces designed for the discerning individual who values timeless elegance.',
  keywords: ['luxury fashion', 'haute couture', 'designer clothing', 'exclusive collection', 'handcrafted fashion'],
} as const;
