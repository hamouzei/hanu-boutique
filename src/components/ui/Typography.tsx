interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

// Serif heading - for main titles and brand identity
export function HeadingSerif({ 
  children, 
  className = '' 
}: TypographyProps) {
  return (
    <h1 className={`font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight text-[var(--color-black)] ${className}`}>
      {children}
    </h1>
  );
}

// Section heading
export function HeadingSection({ 
  children, 
  className = '' 
}: TypographyProps) {
  return (
    <h2 className={`font-serif text-3xl md:text-4xl tracking-tight text-[var(--color-black)] ${className}`}>
      {children}
    </h2>
  );
}

// Subheading
export function Subheading({ 
  children, 
  className = '' 
}: TypographyProps) {
  return (
    <h3 className={`font-serif text-2xl md:text-3xl tracking-tight text-[var(--color-black)] ${className}`}>
      {children}
    </h3>
  );
}

// Body text
export function BodyText({ 
  children, 
  className = '' 
}: TypographyProps) {
  return (
    <p className={`font-sans text-base leading-relaxed text-[var(--color-charcoal)] ${className}`}>
      {children}
    </p>
  );
}

// Caption / small text
export function Caption({ 
  children, 
  className = '' 
}: TypographyProps) {
  return (
    <span className={`font-sans text-xs tracking-widest uppercase text-[var(--color-warm-gray)] ${className}`}>
      {children}
    </span>
  );
}

// Eyebrow text - small uppercase label
export function Eyebrow({ 
  children, 
  className = '' 
}: TypographyProps) {
  return (
    <span className={`font-sans text-xs tracking-[0.2em] uppercase text-[var(--color-gold)] ${className}`}>
      {children}
    </span>
  );
}

// Quote / manifesto text
export function Quote({ 
  children, 
  className = '' 
}: TypographyProps) {
  return (
    <blockquote className={`font-serif text-xl md:text-2xl leading-relaxed italic text-[var(--color-charcoal)] ${className}`}>
      {children}
    </blockquote>
  );
}
