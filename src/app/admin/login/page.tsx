'use client';

import { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const from = searchParams.get('from') || '/admin/dashboard';
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        setError(data.error || 'Login failed');
        setIsLoading(false);
        return;
      }
      
      router.push(from);
      router.refresh();
    } catch {
      setError('An unexpected error occurred');
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 text-sm">
          {error}
        </div>
      )}
      
      <div>
        <label 
          htmlFor="email" 
          className="block font-sans text-xs tracking-[0.15em] uppercase text-white/40 mb-2"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-3 border border-white/10 focus:border-[var(--color-gold)] focus:outline-none transition-colors bg-white/5 text-white placeholder:text-white/20"
          placeholder="admin@example.com"
        />
      </div>
      
      <div>
        <label 
          htmlFor="password" 
          className="block font-sans text-xs tracking-[0.15em] uppercase text-white/40 mb-2"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full px-4 py-3 border border-white/10 focus:border-[var(--color-gold)] focus:outline-none transition-colors bg-white/5 text-white placeholder:text-white/20"
          placeholder="••••••••"
        />
      </div>
      
      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-4 bg-[var(--color-gold)] text-[var(--color-black)] font-sans text-xs tracking-[0.2em] uppercase hover:bg-[var(--color-sandwarm)] transition-colors disabled:opacity-30 disabled:cursor-not-allowed font-bold"
      >
        {isLoading ? 'Signing in...' : 'Sign In'}
      </button>
    </form>
  );
}

export default function AdminLogin() {
  return (
    <main className="min-h-screen bg-[var(--color-smoked-stone)] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-md"
      >
        <div className="bg-white/5 backdrop-blur-sm p-8 md:p-12 border border-white/10">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="font-serif text-3xl md:text-4xl text-white mb-2">
              ATELIER
            </h1>
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-white/40">
              Admin Portal
            </p>
          </div>

          {/* Form with Suspense */}
          <Suspense fallback={<div className="text-center py-8 text-gray-400">Loading...</div>}>
            <LoginForm />
          </Suspense>
          
          {/* Footer */}
          <div className="mt-8 text-center">
            <a 
              href="/" 
              className="font-sans text-xs tracking-[0.1em] text-white/20 hover:text-[var(--color-gold)] transition-colors"
            >
              ← Back to Website
            </a>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
