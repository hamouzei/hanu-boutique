import { NextResponse } from 'next/server';
import { db, schema } from '@/db';

// GET all categories
export async function GET() {
  try {
    const allCategories = await db
      .select()
      .from(schema.categories)
      .orderBy(schema.categories.name);

    return NextResponse.json(allCategories);
  } catch (error) {
    console.error('Failed to fetch categories:', error);
    return NextResponse.json(
      { error: 'Failed to fetch categories' },
      { status: 500 }
    );
  }
}
