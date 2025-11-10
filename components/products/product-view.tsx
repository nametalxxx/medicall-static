'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Star,
  Heart,
  Share2,
  Truck,
  Shield,
  RotateCcw,
  Check,
} from 'lucide-react';
import { useColor } from '@/components/providers/color-provider';
import { ProductCard } from '@/components/products/product-card';
import type { Product } from '@/data/products';

export function ProductView({
  product,
  relatedProducts,
}: {
  product: Product;
  relatedProducts: Product[];
}) {
  const { color } = useColor();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<
    'description' | 'specs' | 'reviews'
  >('description');

  const colorClasses: Record<string, string> = {
    blue: 'bg-blue-500 hover:bg-blue-600',
    rose: 'bg-rose-500 hover:bg-rose-600',
    green: 'bg-green-500 hover:bg-green-600',
    orange: 'bg-orange-500 hover:bg-orange-600',
    purple: 'bg-purple-500 hover:bg-purple-600',
    teal: 'bg-teal-500 hover:bg-teal-600',
    amber: 'bg-amber-500 hover:bg-amber-600',
    indigo: 'bg-indigo-500 hover:bg-indigo-600',
  };

  const features = [
    { icon: Truck, text: 'ارسال رایگان برای خرید بالای ۲ میلیون' },
    { icon: Shield, text: '۱۸ ماه گارانتی طلایی' },
    { icon: RotateCcw, text: '۷ روز بازگشت کالا' },
    { icon: Check, text: 'اصالت کالا تضمین شده' },
  ];

  return (
    <div className="min-h-screen bg-[hsl(var(--background))]">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
          <Link href="/">خانه</Link>
          <span>/</span>
          <Link href="/products">محصولات</Link>
          <span>/</span>
          <span>{product.category}</span>
          <span>/</span>
          <span className="text-gray-900 dark:text-white">
            {product.name}
          </span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-2xl bg-white dark:bg-gray-800 p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <Image
                src={product.image}
                alt={product.name}
                width={600}
                height={600}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-xl bg-white dark:bg-gray-800 p-2 border-2 ${
                    selectedImage === index
                      ? 'border-blue-500'
                      : 'border-gray-200 dark:border-gray-700'
                  }`}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="w-full h-full object-contain"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
                {product.category}
              </span>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {product.name}
              </h1>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.floor(product.rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
              <span className="text-gray-600 dark:text-gray-400">
                ({product.reviewCount} نظر)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                {product.price.toLocaleString('fa-IR')} تومان
              </span>
              {product.originalPrice && (
                <>
                  <span className="text-xl text-gray-500 dark:text-gray-400 line-through">
                    {product.originalPrice.toLocaleString('fa-IR')}
                  </span>
                  <span className="px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg text-sm font-medium">
                    {Math.round(
                      (1 - product.price / product.originalPrice) * 100
                    )}
                    ٪ تخفیف
                  </span>
                </>
              )}
            </div>

            {/* Features */}
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-gray-600 dark:text-gray-400"
                >
                  <feature.icon className="h-5 w-5 text-green-500" />
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Quantity & Actions */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  تعداد:
                </span>
                <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-xl">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-r-xl transition-colors"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 min-w-12 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-l-xl transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  className={`flex-1 py-4 rounded-xl text-white font-semibold text-lg transition-all hover:scale-105 ${colorClasses[color]}`}
                >
                  افزودن به سبد خرید
                </button>
                <button className="p-4 rounded-xl border-2 border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:border-gray-400 dark:hover:border-gray-500 transition-colors">
                  <Heart className="h-6 w-6" />
                </button>
                <button className="p-4 rounded-xl border-2 border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:border-gray-400 dark:hover:border-gray-500 transition-colors">
                  <Share2 className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 mb-16">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <div className="flex gap-8">
              {[
                { id: 'description', label: 'توضیحات محصول' },
                { id: 'specs', label: 'مشخصات فنی' },
                { id: 'reviews', label: 'نظرات کاربران' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`py-4 px-2 border-b-2 font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                      : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="p-8">
            {activeTab === 'description' && (
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {product.description}
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                      <span className="text-gray-700 dark:text-gray-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'specs' && (
              <div className="space-y-4">
                {Object.entries(product.specifications || {}).map(
                  ([key, val]) => (
                    <div
                      key={key}
                      className="flex border-b border-gray-200 dark:border-gray-700 pb-3"
                    >
                      <span className="w-48 shrink-0 text-gray-600 dark:text-gray-400">
                        {key}
                      </span>
                      <span className="text-gray-900 dark:text-white">
                        {String(val)}
                      </span>
                    </div>
                  )
                )}
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="text-center py-8">
                <Star className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {product.rating} از ۵
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  بر اساس {product.reviewCount} نظر
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            محصولات مشابه
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
