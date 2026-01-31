import 'dotenv/config';
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { categories } from '../src/db/schema';

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql);

const SEED_CATEGORIES = [
  { name: 'Evening Wear', slug: 'evening-wear' },
  { name: 'Outerwear', slug: 'outerwear' },
  { name: 'Bottoms', slug: 'bottoms' },
  { name: 'Tops', slug: 'tops' },
  { name: 'Special Pieces', slug: 'special-pieces' },
  { name: 'Perfumes', slug: 'perfumes' },
  { name: 'Sunglasses', slug: 'sunglasses' },
  { name: 'Shoes', slug: 'shoes' },
  { name: 'Cosmetics', slug: 'cosmetics' },
];

async function seed() {
  console.log('🌱 Seeding categories...');

  for (const category of SEED_CATEGORIES) {
    try {
      await db.insert(categories).values(category).onConflictDoNothing();
      console.log(`  ✓ ${category.name}`);
    } catch (error) {
      console.error(`  ✗ Failed to seed ${category.name}:`, error);
    }
  }

  console.log('✅ Seeding complete!');
}

seed().catch(console.error);
