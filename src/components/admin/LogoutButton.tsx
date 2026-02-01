'use client';

import { useRouter } from 'next/navigation';

interface LogoutButtonProps {
  className?: string;
}

export default function LogoutButton({ className }: LogoutButtonProps) {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/admin/login');
    router.refresh();
  };

  return (
    <button
      type="button"
      onClick={handleLogout}
      className={className || "text-xs tracking-[0.1em] uppercase text-gray-500 hover:text-red-600 transition-colors"}
    >
      Sign Out
    </button>
  );
}
