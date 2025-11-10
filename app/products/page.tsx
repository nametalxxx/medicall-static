'use client';

import React, { useState, useMemo } from 'react';
import { ProductCard } from '@/components/products/product-card';
import { ProductFilters } from '@/components/products/product-filters';
import { products, categories } from '@/data/products';
import { Filter, Grid, List, SlidersHorizontal } from 'lucide-react';

export default function ProductsPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    category: '',
    priceRange: [0, 50000000],
    inStock: false,
    hasDiscount: false,
    rating: 0,
  });

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      if (filters.category && product.category !== filters.category) return false;
      if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) return false;
      if (filters.hasDiscount && !product.originalPrice) return false;
      if (filters.rating > 0 && product.rating < filters.rating) return false;
      return true;
    });
  }, [filters]);

  const sortOptions = [
    { value: 'newest', label: 'جدیدترین' },
    { value: 'popular', label: 'محبوب‌ترین' },
    { value: 'price-low', label: 'قیمت: کم به زیاد' },
    { value: 'price-high', label: 'قیمت: زیاد به کم' },
    { value: 'rating', label: 'بالاترین امتیاز' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            همه محصولات
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            نمایش {filteredProducts.length} محصول از {products.length} محصول
          </p>
        </div>

        <div className="flex gap-8">
          {/* Sidebar Filters - Desktop */}
          <div className="hidden lg:block w-80 flex-shrink-0">
            <ProductFilters 
              filters={filters}
              onFiltersChange={setFilters}
              categories={categories}
            />
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-sm border border-gray-200 dark:border-gray-700 mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-4">
                  {/* Mobile Filter Button */}
                  <button
                    onClick={() => setShowFilters(true)}
                    className="lg:hidden flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium"
                  >
                    <SlidersHorizontal className="h-4 w-4" />
                    فیلترها
                  </button>

                  {/* View Mode Toggle */}
                  <div className="flex bg-gray-100 dark:bg-gray-700 rounded-xl p-1">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-lg transition-all ${
                        viewMode === 'grid' 
                          ? 'bg-white dark:bg-gray-600 shadow-sm' 
                          : 'hover:bg-white/50 dark:hover:bg-gray-600/50'
                      }`}
                    >
                      <Grid className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded-lg transition-all ${
                        viewMode === 'list' 
                          ? 'bg-white dark:bg-gray-600 shadow-sm' 
                          : 'hover:bg-white/50 dark:hover:bg-gray-600/50'
                      }`}
                    >
                      <List className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* Sort Options */}
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-600 dark:text-gray-400">مرتب‌سازی:</span>
                  <select className="bg-gray-100 dark:bg-gray-700 border-0 rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500">
                    {sortOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className={
              viewMode === 'grid' 
                ? 'grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6'
                : 'space-y-6'
            }>
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  layout={viewMode}
                />
              ))}
            </div>

            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <Filter className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  محصولی یافت نشد
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  لطفاً فیلترهای خود را تغییر دهید
                </p>
              </div>
            )}

            {/* Load More */}
            {filteredProducts.length > 0 && (
              <div className="text-center mt-12">
                <button className="px-8 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium hover:border-gray-400 dark:hover:border-gray-500 transition-all">
                  بارگذاری محصولات بیشتر
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters Modal */}
      {showFilters && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowFilters(false)} />
          <div className="absolute start-0 top-0 bottom-0 w-80 bg-white dark:bg-gray-800 overflow-y-auto">
            <div className="p-4">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold">فیلترها</h2>
                <button 
                  onClick={() => setShowFilters(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                >
                  ✕
                </button>
              </div>
              <ProductFilters 
                filters={filters}
                onFiltersChange={setFilters}
                categories={categories}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}