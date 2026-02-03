import { getSession } from '@/lib/auth';
import { redirect } from 'next/navigation';
import LogoutButton from '@/components/admin/LogoutButton';
import DashboardContent from '@/components/admin/DashboardContent';

export const metadata = {
  title: 'Admin Dashboard | ATELIER',
  description: 'Manage your portfolio items',
};

export default async function AdminDashboard() {
  const session = await getSession();
  
  if (!session) {
    redirect('/admin/login');
  }

  return (
    <main className="min-h-screen bg-[var(--color-smoked-stone)]">
      {/* Header */}
      <header className="bg-[var(--color-deep-stone)] border-b border-white/5 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <h1 className="font-serif text-xl text-white">ATELIER</h1>
              <span className="text-white/10">|</span>
              <span className="font-sans text-xs tracking-[0.15em] uppercase text-white/40">
                Admin Dashboard
              </span>
            </div>
            
            <div className="flex items-center gap-6">
              <span className="text-sm text-white/60 truncate max-w-[150px] md:max-w-none">{session.email}</span>
              <LogoutButton />
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <DashboardContent />
      </div>
    </main>
  );
}
