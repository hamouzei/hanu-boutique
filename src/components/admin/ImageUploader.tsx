'use client';

import { useState, useRef } from 'react';
import { IKContext, IKUpload } from 'imagekitio-react';

interface ImageUploaderProps {
  onUploadSuccess: (url: string, fileId: string) => void;
  onUploadError?: (error: Error) => void;
  folder?: string;
}

const publicKey = process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY!;
const urlEndpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!;

// Authenticator function for ImageKit
const authenticator = async () => {
  const response = await fetch('/api/imagekit/auth');
  if (!response.ok) {
    throw new Error('Failed to authenticate with ImageKit');
  }
  return response.json();
};

export default function ImageUploader({ 
  onUploadSuccess, 
  onUploadError,
  folder = '/portfolio'
}: ImageUploaderProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleUploadStart = () => {
    setIsUploading(true);
  };

  const handleUploadSuccess = (res: { url: string; fileId: string }) => {
    setIsUploading(false);
    setPreview(res.url);
    onUploadSuccess(res.url, res.fileId);
  };

  const handleUploadError = (err: Error) => {
    setIsUploading(false);
    console.error('Upload error:', err);
    if (onUploadError) {
      onUploadError(err);
    }
  };

  const handleClear = () => {
    setPreview(null);
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  return (
    <IKContext 
      publicKey={publicKey} 
      urlEndpoint={urlEndpoint} 
      authenticator={authenticator}
    >
      <div className="space-y-4">
        {preview ? (
          <div className="relative">
            <img 
              src={preview} 
              alt="Preview" 
              className="w-full h-48 object-cover rounded border border-white/10"
            />
            <button
              type="button"
              onClick={handleClear}
              className="absolute top-2 right-2 bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
            >
              ✕
            </button>
          </div>
        ) : (
          <div className="relative">
            <label 
              className={`
                block w-full h-48 border-2 border-dashed rounded cursor-pointer
                transition-colors flex flex-col items-center justify-center gap-2
                ${isUploading 
                  ? 'border-[var(--color-gold)] bg-[var(--color-gold)]/5' 
                  : 'border-white/10 hover:border-[var(--color-gold)] hover:bg-white/5'}
              `}
            >
              {isUploading ? (
                <>
                  <div className="w-8 h-8 border-2 border-[var(--color-gold)] border-t-transparent rounded-full animate-spin" />
                  <span className="text-sm text-white/40 font-sans tracking-wide uppercase">Uploading...</span>
                </>
              ) : (
                <>
                  <svg className="w-10 h-10 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm text-white/40 font-sans tracking-wide uppercase">Click to upload image</span>
                  <span className="text-xs text-white/20 font-sans">JPG, PNG, WebP up to 10MB</span>
                </>
              )}
              <IKUpload
                ref={inputRef}
                fileName="portfolio-item"
                folder={folder}
                onUploadStart={handleUploadStart}
                onSuccess={handleUploadSuccess}
                onError={handleUploadError}
                accept="image/*"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
            </label>
          </div>
        )}
      </div>
    </IKContext>
  );
}
