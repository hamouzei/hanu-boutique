import Link from 'next/link';
import { NAV_LINKS, BRAND_INFO } from '@/lib/data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-smoked-stone)] text-[var(--color-cream)] border-t border-white/5">
      <div className="container-luxury section-padding">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <Link href="/" className="font-serif text-3xl tracking-wider">
              {BRAND_INFO.name}
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/60 max-w-xs">
              {BRAND_INFO.tagline}
            </p>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-1">
            <h4 className="text-xs tracking-widest uppercase text-white/40 mb-6">
              Explore
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-[var(--color-gold)] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-1">
            <h4 className="text-xs tracking-widest uppercase text-white/40 mb-6">
              Connect
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${BRAND_INFO.contact.email}`}
                  className="text-sm hover:text-[var(--color-gold)] transition-colors duration-300"
                >
                  {BRAND_INFO.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://instagram.com/${BRAND_INFO.contact.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-[var(--color-gold)] transition-colors duration-300"
                >
                  {BRAND_INFO.contact.instagram}
                </a>
              </li>
              <li>
                <span className="text-sm text-white/60">
                  {BRAND_INFO.contact.address}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 pt-8 border-t border-[var(--color-charcoal)]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-white/40">
              © {currentYear} {BRAND_INFO.name}. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-xs text-white/40 hover:text-[var(--color-cream)] transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-xs text-white/40 hover:text-[var(--color-cream)] transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
