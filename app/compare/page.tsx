'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ProductComparison } from '@/components/products/product-comparison';
import { ProductCard } from '@/components/products/product-card';
import { products } from '@/data/products';
import { Scale, Plus, ArrowLeft } from 'lucide-react';

export default function ComparePage() {
  const [comparedProducts, setComparedProducts] = useState<string[]>([]);

  // Load compared products from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('comparedProducts');
    if (saved) {
      setComparedProducts(JSON.parse(saved));
    }
  }, []);

  // Save to localStorage when comparedProducts changes
  useEffect(() => {
    localStorage.setItem('comparedProducts', JSON.stringify(comparedProducts));
  }, [comparedProducts]);

  const addToComparison = (productId: string) => {
    if (!comparedProducts.includes(productId) && comparedProducts.length < 4) {
      setComparedProducts(prev => [...prev, productId]);
    }
  };

  const removeFromComparison = (productId: string) => {
    setComparedProducts(prev => prev.filter(id => id !== productId));
  };

  const clearComparison = () => {
    setComparedProducts([]);
  };

  const availableProducts = products.filter(p => !comparedProducts.includes(p.id));

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">مقایسه محصولات</h1>
            <p className="text-gray-600 dark:text-gray-400">
              محصولات مورد نظر خود را مقایسه کنید و بهترین انتخاب را داشته باشید
            </p>
          </div>
          <Link 
            href="/products"
            className="flex items-center space-x-2  text-blue-500 hover:text-blue-600"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>بازگشت به فروشگاه</span>
          </Link>
        </div>

        {/* Comparison Section */}
        <div className="mb-12">
          <ProductComparison
            comparedProducts={comparedProducts}
            onRemoveProduct={removeFromComparison}
            onClearAll={clearComparison}
          />
        </div>

        {/* Available Products to Compare */}
        {comparedProducts.length < 4 && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                محصولات قابل مقایسه
              </h2>
              <div className="flex items-center space-x-2  text-sm text-gray-600 dark:text-gray-400">
                <Scale className="h-4 w-4" />
                <span>
                  {comparedProducts.length} از ۴ محصول انتخاب شده
                </span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {availableProducts.slice(0, 8).map(product => (
                <div key={product.id} className="group relative">
                  <ProductCard product={product} />
                  <button
                    onClick={() => addToComparison(product.id)}
                    className="absolute top-4 start-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-lg hover:scale-110"
                  >
                    <Plus className="h-4 w-4 text-blue-500" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}