'use client';

import React from 'react';
import Image from 'next/image';
import { X, Star, Check, Minus } from 'lucide-react';
import { products } from '@/data/products';

interface ProductComparisonProps {
  comparedProducts: string[];
  onRemoveProduct: (productId: string) => void;
  onClearAll: () => void;
}

export function ProductComparison({ comparedProducts, onRemoveProduct, onClearAll }: ProductComparisonProps) {
  const comparisonProducts = products.filter(p => comparedProducts.includes(p.id));

  const features = [
    { key: 'price', label: 'قیمت' },
    { key: 'rating', label: 'امتیاز' },
    { key: 'category', label: 'دسته‌بندی' },
    { key: 'features', label: 'ویژگی‌ها' },
    { key: 'warranty', label: 'گارانتی' },
  ];

  if (comparisonProducts.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">محصولی برای مقایسه انتخاب نشده</h3>
        <p className="text-gray-600 dark:text-gray-400">برای مقایسه، محصولات مورد نظر خود را انتخاب کنید</p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">مقایسه محصولات</h2>
        <button
          onClick={onClearAll}
          className="text-red-500 hover:text-red-600 text-sm font-medium"
        >
          حذف همه
        </button>
      </div>

      {/* Comparison Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th className="p-4 text-right bg-gray-50 dark:bg-gray-700/50 border-b border-gray-200 dark:border-gray-600">
                ویژگی‌ها
              </th>
              {comparisonProducts.map(product => (
                <th key={product.id} className="p-4 bg-gray-50 dark:bg-gray-700/50 border-b border-gray-200 dark:border-gray-600 relative">
                  <div className="text-center">
                    <button
                      onClick={() => onRemoveProduct(product.id)}
                      className="absolute top-2 start-2 p-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors"
                    >
                      <X className="h-4 w-4" />
                    </button>
                    
                    <div className="w-20 h-20 mx-auto mb-3 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-2 line-clamp-2">
                      {product.name}
                    </h3>
                    
                    <div className="flex items-center justify-center space-x-1  mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-center space-x-2 ">
                      <span className="font-bold text-gray-900 dark:text-white">
                        {product.price.toLocaleString("fa-IR")} تومان
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
                          {product.originalPrice.toLocaleString("fa-IR")}
                        </span>
                      )}
                    </div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          
          <tbody>
            {features.map((feature, rowIndex) => (
              <tr key={feature.key} className={rowIndex % 2 === 0 ? 'bg-gray-50 dark:bg-gray-700/30' : ''}>
                <td className="p-4 font-medium text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-600">
                  {feature.label}
                </td>
                
                {comparisonProducts.map(product => (
                  <td key={product.id} className="p-4 border-b border-gray-200 dark:border-gray-600">
                    <div className="text-center">
                      {feature.key === 'price' && (
                        <div className="space-y-1">
                          <div className="font-bold text-lg text-gray-900 dark:text-white">
                            {product.price.toLocaleString("fa-IR")} تومان
                          </div>
                          {product.originalPrice && (
                            <div className="text-sm text-red-500">
                              {Math.round((1 - product.price / product.originalPrice) * 100)}% تخفیف
                            </div>
                          )}
                        </div>
                      )}
                      
                      {feature.key === 'rating' && (
                        <div className="flex items-center justify-center space-x-2 ">
                          <div className="flex items-center space-x-1 ">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < Math.floor(product.rating)
                                    ? 'text-yellow-400 fill-current'
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            ({product.rating})
                          </span>
                        </div>
                      )}
                      
                      {feature.key === 'category' && (
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {product.category}
                        </span>
                      )}
                      
                      {feature.key === 'features' && (
                        <div className="space-y-1 text-right">
                          {product.features.slice(0, 3).map((feat, index) => (
                            <div key={index} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                              <Check className="h-3 w-3 ms-1 text-green-500 flex-shrink-0" />
                              {feat}
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {feature.key === 'warranty' && (
                        <div className="text-center">
                          <span className="inline-flex items-center px-2 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-medium">
                            <Check className="h-3 w-3 ms-1" />
                            ۱۸ ماه گارانتی
                          </span>
                        </div>
                      )}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}