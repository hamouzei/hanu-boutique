interface ProductDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  
  return (
    <main className="min-h-screen bg-[var(--color-cream)] section-padding">
      <div className="container-luxury">
        <h1 className="font-serif text-4xl md:text-5xl text-center">
          Product: {slug}
        </h1>
        <p className="mt-4 text-center text-[var(--color-warm-gray)]">
          Coming soon in Section 8
        </p>
      </div>
    </main>
  );
}
