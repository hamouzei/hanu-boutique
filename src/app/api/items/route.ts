import { NextResponse } from 'next/server';
import { db, schema } from '@/db';
import { eq } from 'drizzle-orm';
import { getSession } from '@/lib/auth';
import { deleteImage } from '@/lib/imagekit';

// GET all items with categories
export async function GET() {
  try {
    const allItems = await db
      .select({
        id: schema.items.id,
        name: schema.items.name,
        slug: schema.items.slug,
        description: schema.items.description,
        price: schema.items.price,
        imageUrl: schema.items.imageUrl,
        featured: schema.items.featured,
        createdAt: schema.items.createdAt,
        categoryId: schema.items.categoryId,
        categoryName: schema.categories.name,
        categorySlug: schema.categories.slug,
      })
      .from(schema.items)
      .leftJoin(schema.categories, eq(schema.items.categoryId, schema.categories.id))
      .orderBy(schema.items.createdAt);

    return NextResponse.json(allItems);
  } catch (error) {
    console.error('Failed to fetch items:', error);
    return NextResponse.json(
      { error: 'Failed to fetch items' },
      { status: 500 }
    );
  }
}

// POST new item
export async function POST(request: Request) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { categoryId, imageUrl, name, description, price, featured } = body;

    if (!categoryId || !imageUrl || !name) {
      return NextResponse.json(
        { error: 'Category, image, and name are required' },
        { status: 400 }
      );
    }

    // Generate slug from name
    const slug = name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    const [newItem] = await db
      .insert(schema.items)
      .values({
        categoryId: parseInt(categoryId),
        imageUrl,
        name,
        slug: `${slug}-${Date.now()}`, // Ensure uniqueness
        description: description || null,
        price: price ? parseFloat(price).toFixed(2) : null,
        featured: featured ? 1 : 0,
      })
      .returning();

    return NextResponse.json(newItem, { status: 201 });
  } catch (error) {
    console.error('Failed to create item:', error);
    return NextResponse.json(
      { error: 'Failed to create item' },
      { status: 500 }
    );
  }
}

// DELETE item
export async function DELETE(request: Request) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const fileId = searchParams.get('fileId');

    if (!id) {
      return NextResponse.json({ error: 'Item ID is required' }, { status: 400 });
    }

    // Delete from database
    await db.delete(schema.items).where(eq(schema.items.id, parseInt(id)));

    // Optionally delete from ImageKit
    if (fileId) {
      try {
        await deleteImage(fileId);
      } catch (error) {
        console.error('Failed to delete image from ImageKit:', error);
        // Continue even if image deletion fails
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to delete item:', error);
    return NextResponse.json(
      { error: 'Failed to delete item' },
      { status: 500 }
    );
  }
}
