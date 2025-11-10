'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Heart, Scale, Star, Zap } from 'lucide-react';
import { useColor } from '@/components/providers/color-provider';
import { ImageFallback } from '@/components/ui/image-fallback';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviewCount: number;
  features: string[];
  isNew?: boolean;
  isBestseller?: boolean;
}

interface ProductCardProps {
  product: Product;
  layout?: 'grid' | 'list';
}

export function ProductCard({ product, layout = 'grid' }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { color } = useColor();

  const colorClasses = {
    blue: 'bg-blue-500',
    rose: 'bg-rose-500',
    green: 'bg-green-500',
    orange: 'bg-orange-500',
    purple: 'bg-purple-500',
    teal: 'bg-teal-500',
    amber: 'bg-amber-500',
    indigo: 'bg-indigo-500',
  };

  if (layout === 'list') {
    return (
      <div 
        className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex gap-6">
          <div className="relative flex-shrink-0">
            <Link href={`/products/${product.id}`}>
              <div className="w-48 h-48 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-700">
                <ImageFallback
                  src={product.image}
                  alt={product.name}
                  width={192}
                  height={192}
                  className={`w-full h-full object-cover transition-transform duration-300 ${
                    isHovered ? 'scale-110' : 'scale-100'
                  }`}
                />
              </div>
            </Link>
            {product.isNew && (
              <div className="absolute top-3 end-3">
                <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                  جدید
                </span>
              </div>
            )}
          </div>

          <div className="flex-1 flex flex-col">
            <div className="flex items-start justify-between mb-3">
              <div>
                <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                  {product.category}
                </span>
                <Link href={`/products/${product.id}`}>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-2 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-gray-600 dark:text-gray-300 mt-2 line-clamp-2">
                  {product.description}
                </p>
              </div>
              
              <div className="flex gap-2">
                <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  <Heart className="h-5 w-5" />
                </button>
                <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  <Scale className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="flex items-center mb-4">
              <div className="flex items-center gap-1">
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
              <span className="text-sm text-gray-500 dark:text-gray-400 ms-2">
                ({product.reviewCount} نظر)
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              {product.features.slice(0, 4).map((feature, index) => (
                <div key={index} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <Zap className="h-3 w-3 me-1 text-green-500" />
                  {feature}
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between mt-auto">
              <div className="flex flex-col">
                {product.originalPrice && (
                  <span className="text-lg text-gray-500/70 dark:text-gray-400/70 line-through">
                    {product.originalPrice.toLocaleString("fa-IR")}
                  </span>
                )}
                <span className="text-2xl font-bold text-gray-900 dark:text-white">
                  {product.price.toLocaleString("fa-IR")} تومان
                </span>
              </div>
              <Link 
                href={`/products/${product.id}`}
                className={`px-6 py-3 rounded-xl ${colorClasses[color]} text-white font-medium hover:opacity-90 transition-opacity`}
              >
                مشاهده محصول
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="group flex flex-col bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative mb-4">
        <Link href={`/products/${product.id}`}>
          <div className="aspect-square rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-700">
            <ImageFallback
              src={product.image}
              alt={product.name}
              width={300}
              height={300}
              className={`w-full h-full object-cover transition-transform duration-300 ${
                isHovered ? 'scale-110' : 'scale-100'
              }`}
            />
          </div>
        </Link>
        
        <div className="absolute top-3 start-3 flex gap-2">
          {product.isNew && (
            <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
              جدید
            </span>
          )}
          {product.isBestseller && (
            <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
              پرفروش
            </span>
          )}
        </div>

        <div className="absolute top-3 end-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col gap-2">
          <button className="p-2 bg-white/90 dark:bg-gray-800/90 rounded-lg backdrop-blur-sm hover:bg-white dark:hover:bg-gray-700 transition-colors">
            <Heart className="h-4 w-4" />
          </button>
          <button className="p-2 bg-white/90 dark:bg-gray-800/90 rounded-lg backdrop-blur-sm hover:bg-white dark:hover:bg-gray-700 transition-colors">
            <Scale className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="flex flex-col items-start grow gap-2">
        <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
          {product.category}
        </span>
        
        <Link href={`/products/${product.id}`}>
          <h3 className="font-semibold text-gray-900 dark:text-white line-clamp-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {product.name}
          </h3>
        </Link>
        
        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
          {product.description}
        </p>

        <div className="flex justify-between items-end w-full grow">
          <div className="flex flex-col justify-start items-start mt-1">
            {product.originalPrice && (
              <span className="text-sm text-gray-500/70 dark:text-gray-400/70 line-through">
                {product.originalPrice.toLocaleString("fa-IR")}
              </span>
            )}
            <span className="font-bold text-gray-900 dark:text-white">
              {product.price.toLocaleString("fa-IR")} تومان
            </span>
          </div>

          <div className="flex items-center gap-1">
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
            <span className="text-xs text-gray-500 dark:text-gray-400">
              ({product.reviewCount.toLocaleString("fa-IR")})
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}