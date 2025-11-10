'use client';

import React from 'react';
import { Star } from 'lucide-react';

interface Filter {
  category: string;
  priceRange: [number, number];
  inStock: boolean;
  hasDiscount: boolean;
  rating: number;
}

interface ProductFiltersProps {
  filters: Filter;
  onFiltersChange: (filters: Filter) => void;
  categories: any[];
}

export function ProductFilters({ filters, onFiltersChange, categories }: ProductFiltersProps) {
  const priceMarks = [
    { value: 0, label: '0' },
    { value: 10000000, label: '10M' },
    { value: 25000000, label: '25M' },
    { value: 50000000, label: '50M+' },
  ];

  const ratingOptions = [
    { value: 4.5, label: '۴.۵ به بالا' },
    { value: 4, label: '۴ به بالا' },
    { value: 3.5, label: '۳.۵ به بالا' },
    { value: 3, label: '۳ به بالا' },
  ];

  const updateFilter = (key: keyof Filter, value: any) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  return (
    <div className="space-y-8">
      {/* Categories */}
      <div>
        <h3 className="font-semibold text-gray-900 dark:text-white mb-4">دسته‌بندی</h3>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="category"
              checked={filters.category === ''}
              onChange={() => updateFilter('category', '')}
              className="me-2"
            />
            <span className="text-sm">همه دسته‌ها</span>
          </label>
          {categories.map(category => (
            <label key={category.id} className="flex items-center">
              <input
                type="radio"
                name="category"
                checked={filters.category === category.name}
                onChange={() => updateFilter('category', category.name)}
                className="me-2"
              />
              <span className="text-sm">{category.name}</span>
              <span className="text-xs text-gray-500 me-2">({category.productCount})</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="font-semibold text-gray-900 dark:text-white mb-4">محدوده قیمت</h3>
        <div className="space-y-4">
          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
            <span>{filters.priceRange[0].toLocaleString("fa-IR")} تومان</span>
            <span>{filters.priceRange[1].toLocaleString("fa-IR")} تومان</span>
          </div>
          <input
            type="range"
            min="0"
            max="50000000"
            step="1000000"
            value={filters.priceRange[1]}
            onChange={(e) => updateFilter('priceRange', [filters.priceRange[0], parseInt(e.target.value)])}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          />
          <div className="flex justify-between text-xs text-gray-500">
            {priceMarks.map(mark => (
              <span key={mark.value}>{mark.label}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Availability */}
      <div>
        <h3 className="font-semibold text-gray-900 dark:text-white mb-4">موجودی</h3>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={filters.inStock}
            onChange={(e) => updateFilter('inStock', e.target.checked)}
            className="me-2 rounded"
          />
          <span className="text-sm">فقط کالاهای موجود</span>
        </label>
      </div>

      {/* Discount */}
      <div>
        <h3 className="font-semibold text-gray-900 dark:text-white mb-4">تخفیف</h3>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={filters.hasDiscount}
            onChange={(e) => updateFilter('hasDiscount', e.target.checked)}
            className="me-2 rounded"
          />
          <span className="text-sm">فقط کالاهای تخفیف‌دار</span>
        </label>
      </div>

      {/* Rating */}
      <div>
        <h3 className="font-semibold text-gray-900 dark:text-white mb-4">امتیاز</h3>
        <div className="space-y-2">
          {ratingOptions.map(option => (
            <label key={option.value} className="flex items-center">
              <input
                type="radio"
                name="rating"
                checked={filters.rating === option.value}
                onChange={() => updateFilter('rating', option.value)}
                className="me-2"
              />
              <div className="flex items-center space-x-1 ">
                {[1,2,3,4,5].map(star => (
                  <Star
                    key={star}
                    className={`h-3 w-3 ${
                      star <= Math.floor(option.value)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm ms-2">{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Clear Filters */}
      <button
        onClick={() => onFiltersChange({
          category: '',
          priceRange: [0, 50000000],
          inStock: false,
          hasDiscount: false,
          rating: 0,
        })}
        className="w-full py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-700 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-500 transition-colors"
      >
        حذف فیلترها
      </button>
    </div>
  );
}