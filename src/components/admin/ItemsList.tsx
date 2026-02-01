'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Item {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  price: string | null;
  imageUrl: string;
  featured: number | null;
  createdAt: string;
  categoryId: number;
  categoryName: string;
  categorySlug: string;
}

interface ItemsListProps {
  refreshTrigger: number;
}

export default function ItemsList({ refreshTrigger }: ItemsListProps) {
  const [items, setItems] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [deletingId, setDeletingId] = useState<number | null>(null);

  const fetchItems = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/items');
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.error('Failed to fetch items:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, [refreshTrigger]);

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this item?')) return;
    
    setDeletingId(id);
    try {
      const response = await fetch(`/api/items?id=${id}`, {
        method: 'DELETE',
      });
      
      if (response.ok) {
        setItems(items.filter(item => item.id !== id));
      } else {
        alert('Failed to delete item');
      }
    } catch (error) {
      console.error('Delete error:', error);
      alert('Failed to delete item');
    } finally {
      setDeletingId(null);
    }
  };

  if (isLoading) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
        <div className="w-8 h-8 border-2 border-[var(--color-gold)] border-t-transparent rounded-full animate-spin mx-auto" />
        <p className="mt-4 text-gray-500 text-sm">Loading items...</p>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
        <div className="text-gray-400 mb-2">
          <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
          </svg>
        </div>
        <p className="text-gray-500">No items yet. Add your first item above!</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="font-serif text-xl">All Items ({items.length})</h2>
      </div>
      
      <div className="divide-y divide-gray-100">
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors">
            {/* Image */}
            <div className="w-16 h-16 relative flex-shrink-0 bg-gray-100 rounded overflow-hidden">
              <Image
                src={item.imageUrl}
                alt={item.name}
                fill
                className="object-cover"
                sizes="64px"
              />
            </div>
            
            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="font-medium text-gray-900 truncate">{item.name}</h3>
                {item.featured === 1 && (
                  <span className="text-xs bg-[var(--color-gold)]/10 text-[var(--color-gold)] px-2 py-0.5 rounded">
                    Featured
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-500">{item.categoryName}</p>
              {item.price && (
                <p className="text-sm font-medium text-gray-700">${parseFloat(item.price).toFixed(2)}</p>
              )}
            </div>
            
            {/* Actions */}
            <button
              onClick={() => handleDelete(item.id)}
              disabled={deletingId === item.id}
              className="text-red-500 hover:text-red-700 hover:bg-red-50 px-3 py-2 rounded transition-colors disabled:opacity-50"
            >
              {deletingId === item.id ? (
                <span className="text-xs">Deleting...</span>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
