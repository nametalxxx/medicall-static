'use client';

import React, { useState } from 'react';
import { ProductCard } from '@/components/products/product-card';
import { products } from '@/data/products';
import { useColor } from '@/components/providers/color-provider';

export function FeaturedProducts() {
  const { color } = useColor();
  const [activeFilter, setActiveFilter] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filters = [
    { id: 'all', name: 'همه محصولات' },
    { id: 'new', name: 'محصولات جدید' },
    { id: 'bestseller', name: 'پرفروش‌ها' },
    { id: 'discount', name: 'تخفیف‌دار' },
  ];

  const filteredProducts = products.filter(product => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'new') return product.isNew;
    if (activeFilter === 'bestseller') return product.isBestseller;
    if (activeFilter === 'discount') return product.originalPrice;
    return true;
  });

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header with Filters */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12 space-y-6 lg:space-y-0">
          <div className="text-center lg:text-right">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              محصولات <span className="text-blue-500">ویژه</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              منتخبی از بهترین تجهیزات پزشکی با کیفیت عالی
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 sm:">
            {/* View Mode Toggle */}
            <div className="flex bg-gray-100 dark:bg-gray-800 rounded-xl p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === 'grid' 
                    ? 'bg-white dark:bg-gray-700 shadow-sm' 
                    : 'hover:bg-white/50 dark:hover:bg-gray-700/50'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === 'list' 
                    ? 'bg-white dark:bg-gray-700 shadow-sm' 
                    : 'hover:bg-white/50 dark:hover:bg-gray-700/50'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
              </button>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    activeFilter === filter.id
                      ? color === 'blue' ? 'bg-blue-500 text-white' :
                        color === 'rose' ? 'bg-rose-500 text-white' :
                        color === 'green' ? 'bg-green-500 text-white' :
                        color === 'orange' ? 'bg-orange-500 text-white' :
                        color === 'purple' ? 'bg-purple-500 text-white' :
                        color === 'teal' ? 'bg-teal-500 text-white' :
                        color === 'amber' ? 'bg-amber-500 text-white' : 'bg-indigo-500 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {filter.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid/List */}
        <div className={
          viewMode === 'grid' 
            ? 'grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
            : 'space-y-6'
        }>
          {filteredProducts.slice(0, viewMode === 'grid' ? 8 : 4).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              layout={viewMode}
            />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className={`group px-8 py-4 rounded-2xl bg-gradient-to-r ${
            color === 'blue' ? 'from-blue-500 to-blue-600' :
            color === 'rose' ? 'from-rose-500 to-rose-600' :
            color === 'green' ? 'from-green-500 to-green-600' :
            color === 'orange' ? 'from-orange-500 to-orange-600' :
            color === 'purple' ? 'from-purple-500 to-purple-600' :
            color === 'teal' ? 'from-teal-500 to-teal-600' :
            color === 'amber' ? 'from-amber-500 to-amber-600' : 'from-indigo-500 to-indigo-600'
          } text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}>
            <span className="flex items-center space-x-2 ">
              <span>مشاهده همه محصولات</span>
              <svg 
                className="h-5 w-5 group-hover:-translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}