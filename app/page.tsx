import React from 'react';
import { HeroSection } from '@/components/sections/hero-section';
import { CategoriesSection } from '@/components/sections/categories-section';
import { FeaturedProducts } from '@/components/sections/featured-products';
import { PromoBanner } from '@/components/sections/promo-banner';

export default function HomePage() {
  return (
    <div className="min-h-screen transition-colors">
      <HeroSection />
      <CategoriesSection />
      <FeaturedProducts />
      <PromoBanner />
    </div>
  );
}