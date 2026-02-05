# ATELIER — Hanu Boutique

A high-end, "Quiet Luxury" portfolio and boutique web application crafted for exceptional fashion. Built with Next.js 16, Three.js, and Drizzle ORM, ATELIER combines immersive 3D product visualization with a minimal, sophisticated editorial aesthetic.

## ✨ Features

- **Quiet Luxury Aesthetic**: A curated design system using a Warm Sand and Smoked Stone color palette.
- **3D Product Viewer**: Immersive product visualization using `@react-three/fiber` and `@react-three/drei`.
- **Editorial Experience**: Sophisticated layouts for collections, lookbooks, and brand statements.
- **Admin Dashboard**: Secure management of categories and boutique items.
- **Modern Tech Stack**: Full-stack Next.js with App Router and server-side authentication.
- **Database Driven**: Relational data management using Drizzle ORM and Neon (PostgreSQL).
- **Smooth Animations**: Fluid transitions powered by Framer Motion and GSAP.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **3D Rendering**: [Three.js](https://threejs.org/), [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/), CSS Variables for Design Tokens
- **Database**: [Drizzle ORM](https://orm.drizzle.team/), [Neon PostgreSQL](https://neon.tech/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/), [GSAP](https://gsap.com/)
- **Assets**: [ImageKit](https://imagekit.io/) for optimized image delivery
- **Auth**: Custom JWT-based middleware authentication

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- A Neon PostgreSQL database instance
- ImageKit account (optional for full asset management)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/hamouzei/hanu-boutique.git
   cd hanu-boutique
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Environment Setup**:
   Create a `.env` file in the root directory and add your credentials:
   ```env
   DATABASE_URL=your_postgres_url
   JWT_SECRET=your_secret_key
   ADMIN_PASSWORD=your_admin_password
   IMAGEKIT_PUBLIC_KEY=your_public_key
   IMAGEKIT_PRIVATE_KEY=your_private_key
   IMAGEKIT_URL_ENDPOINT=your_endpoint
   ```

4. **Database Initialization**:
   ```bash
   # Generate migrations
   npm run db:generate
   
   # Push schema to database
   npm run db:push
   
   # Seed initial data
   npm run db:seed
   ```

5. **Run the development server**:
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## 📁 Project Structure

- `src/app`: Next.js App Router (Pages and API routes)
- `src/components/sections`: Large layout components (Hero, Featured, etc.)
- `src/components/three`: 3D canvas and model components
- `src/components/ui`: Primitive, reusable UI components
- `src/db`: Drizzle schema and database configuration
- `src/lib`: Utility functions, authentication, and data constants
- `src/styles`: Design system tokens and global CSS

## 📜 Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run db:generate`: Generates Drizzle migrations.
- `npm run db:push`: Syncs the database schema with the Neon database.
- `npm run db:seed`: Populates the database with initial categories and items.

---

*Crafted with intention by the ATELIER team.*
