// app/products/[id]/page.tsx
import { notFound } from 'next/navigation';
import { products } from '@/data/products';
import { ProductView } from '@/components/products/product-view';

export async function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) return { title: 'محصول یافت نشد' };
  return {
    title: `${product.name} | مدی کالا`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const product = products.find((p) => p.id === id);
  if (!product) return notFound();

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return <ProductView product={product} relatedProducts={relatedProducts} />;
}
