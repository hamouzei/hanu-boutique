'use client';

import { useState, useEffect } from 'react';
import ImageUploader from './ImageUploader';

interface Category {
  id: number;
  name: string;
  slug: string;
}

interface AddItemFormProps {
  onItemAdded: () => void;
}

export default function AddItemForm({ onItemAdded }: AddItemFormProps) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  
  // Form state
  const [categoryId, setCategoryId] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [imageFileId, setImageFileId] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [featured, setFeatured] = useState(false);

  // Fetch categories on mount
  useEffect(() => {
    fetch('/api/categories')
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(err => console.error('Failed to load categories:', err));
  }, []);

  const handleImageUpload = (url: string, fileId: string) => {
    setImageUrl(url);
    setImageFileId(fileId);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    setIsLoading(true);

    try {
      const response = await fetch('/api/items', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          categoryId,
          imageUrl,
          name,
          description,
          price,
          featured,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to add item');
      }

      // Reset form
      setCategoryId('');
      setImageUrl('');
      setImageFileId('');
      setName('');
      setDescription('');
      setPrice('');
      setFeatured(false);
      
      setSuccess(true);
      onItemAdded();
      
      // Clear success message after 3 seconds
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add item');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-6">
      <h2 className="font-serif text-xl mb-6 text-white">Add New Item</h2>
      
      {error && (
        <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 text-sm rounded">
          {error}
        </div>
      )}
      
      {success && (
        <div className="mb-4 bg-green-50 border border-green-200 text-green-700 px-4 py-3 text-sm rounded">
          Item added successfully!
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Category */}
        <div>
          <label className="block text-xs tracking-wider uppercase text-white/40 mb-2 font-sans">
            Category *
          </label>
          <select
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
            required
            className="w-full px-4 py-3 border border-white/10 rounded focus:border-[var(--color-gold)] focus:outline-none bg-[var(--color-layer-a)] text-white"
          >
            <option value="">Select a category</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-xs tracking-wider uppercase text-white/40 mb-2 font-sans">
            Image *
          </label>
          <ImageUploader 
            onUploadSuccess={handleImageUpload}
            onUploadError={(err) => setError(`Upload failed: ${err.message}`)}
          />
          {imageUrl && (
            <input type="hidden" name="imageUrl" value={imageUrl} />
          )}
        </div>

        {/* Name */}
        <div>
          <label className="block text-xs tracking-wider uppercase text-white/40 mb-2 font-sans">
            Name *
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="e.g., Silk Evening Gown"
            className="w-full px-4 py-3 border border-white/10 rounded focus:border-[var(--color-gold)] focus:outline-none bg-[var(--color-layer-a)] text-white placeholder:text-white/20"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-xs tracking-wider uppercase text-white/40 mb-2 font-sans">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
            placeholder="A brief description of the item..."
            className="w-full px-4 py-3 border border-white/10 rounded focus:border-[var(--color-gold)] focus:outline-none resize-none bg-[var(--color-layer-a)] text-white placeholder:text-white/20"
          />
        </div>

        {/* Price */}
        <div>
          <label className="block text-xs tracking-wider uppercase text-white/40 mb-2 font-sans">
            Price
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
            <input
              type="number"
              step="0.01"
              min="0"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="0.00"
              className="w-full pl-8 pr-4 py-3 border border-white/10 rounded focus:border-[var(--color-gold)] focus:outline-none bg-[var(--color-layer-a)] text-white placeholder:text-white/20"
            />
          </div>
        </div>

        {/* Featured */}
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            id="featured"
            checked={featured}
            onChange={(e) => setFeatured(e.target.checked)}
            className="w-5 h-5 border-gray-300 rounded text-[var(--color-gold)] focus:ring-[var(--color-gold)]"
          />
          <label htmlFor="featured" className="text-sm text-white/70 font-sans">
            Feature on homepage
          </label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isLoading || !imageUrl || !categoryId || !name}
          className="w-full py-4 bg-[var(--color-gold)] text-[var(--color-black)] font-sans text-xs tracking-[0.2em] uppercase hover:bg-[var(--color-sandwarm)] transition-colors disabled:opacity-30 disabled:cursor-not-allowed font-bold"
        >
          {isLoading ? 'Adding...' : 'Add Item'}
        </button>
      </form>
    </div>
  );
}
