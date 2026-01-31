import React from 'react';

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
  as?: any;
}

// Serif heading - for main titles and brand identity
export function HeadingSerif({ 
  children, 
  className = '',
  as: Component = 'h1'
}: TypographyProps) {
  return (
    <Component className={`font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight text-[var(--color-black)] ${className}`}>
      {children}
    </Component>
  );
}

// Section heading
export function HeadingSection({ 
  children, 
  className = '',
  as: Component = 'h2'
}: TypographyProps) {
  return (
    <Component className={`font-serif text-3xl md:text-4xl tracking-tight text-[var(--color-black)] ${className}`}>
      {children}
    </Component>
  );
}

// Subheading
export function Subheading({ 
  children, 
  className = '',
  as: Component = 'h3'
}: TypographyProps) {
  return (
    <Component className={`font-serif text-2xl md:text-3xl tracking-tight text-[var(--color-black)] ${className}`}>
      {children}
    </Component>
  );
}

// Body text
export function BodyText({ 
  children, 
  className = '',
  as: Component = 'p'
}: TypographyProps) {
  return (
    <Component className={`font-sans text-base leading-relaxed text-[var(--color-charcoal)] ${className}`}>
      {children}
    </Component>
  );
}

// Caption / small text
export function Caption({ 
  children, 
  className = '',
  as: Component = 'span'
}: TypographyProps) {
  return (
    <Component className={`font-sans text-xs tracking-widest uppercase text-[var(--color-warm-gray)] ${className}`}>
      {children}
    </Component>
  );
}

// Eyebrow text - small uppercase label
export function Eyebrow({ 
  children, 
  className = '',
  as: Component = 'span'
}: TypographyProps) {
  return (
    <Component className={`font-sans text-xs tracking-[0.2em] uppercase text-[var(--color-gold)] ${className}`}>
      {children}
    </Component>
  );
}

// Quote / manifesto text
export function Quote({ 
  children, 
  className = '',
  as: Component = 'blockquote'
}: TypographyProps) {
  return (
    <Component className={`font-serif text-xl md:text-2xl leading-relaxed italic text-[var(--color-charcoal)] ${className}`}>
      {children}
    </Component>
  );
}
