import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'text';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  // Base styles
  const baseStyles = 'inline-flex items-center justify-center font-sans tracking-widest uppercase transition-all duration-500';
  
  // Variant styles
  const variants = {
    primary: 'bg-[var(--color-black)] text-[var(--color-cream)] hover:bg-[var(--color-charcoal)]',
    secondary: 'border border-[var(--color-black)] text-[var(--color-black)] hover:bg-[var(--color-black)] hover:text-[var(--color-cream)]',
    text: 'text-[var(--color-black)] hover:text-[var(--color-gold)] link-underline',
  };
  
  // Size styles
  const sizes = {
    sm: 'text-xs px-6 py-2.5',
    md: 'text-sm px-8 py-3',
    lg: 'text-sm px-10 py-4',
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${variant !== 'text' ? sizes[size] : 'text-sm'} ${className}`;

  // If href is provided, render as Link
  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  // Otherwise, render as button
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${combinedClassName} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {children}
    </button>
  );
}
