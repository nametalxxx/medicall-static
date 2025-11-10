'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { categories } from '@/data/products';
import { useColor } from '@/components/providers/color-provider';

export function CategoriesSection() {
  const { color } = useColor();
  const [activeCategory, setActiveCategory] = useState(0);

  const colorClasses = {
    blue: 'bg-blue-500 hover:bg-blue-600',
    rose: 'bg-rose-500 hover:bg-rose-600', 
    green: 'bg-green-500 hover:bg-green-600',
    orange: 'bg-orange-500 hover:bg-orange-600',
    purple: 'bg-purple-500 hover:bg-purple-600',
    teal: 'bg-teal-500 hover:bg-teal-600',
    amber: 'bg-amber-500 hover:bg-amber-600',
    indigo: 'bg-indigo-500 hover:bg-indigo-600',
  };

  const nextCategory = () => {
    setActiveCategory((prev) => (prev + 1) % categories.length);
  };

  const prevCategory = () => {
    setActiveCategory((prev) => (prev - 1 + categories.length) % categories.length);
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            دسته‌بندی‌های <span className="text-blue-500">تخصصی</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            تجهیزات پزشکی در دسته‌بندی‌های تخصصی برای نیازهای مختلف مراکز درمانی
          </p>
        </div>

        {/* Main Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              href={`/products/`}
              className="group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700 group-hover:scale-105">
                <div className="relative mb-4">
                  <div className="aspect-video rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-700">
                    <Image
                      src={category.image}
                      alt={category.name}
                      width={300}
                      height={200}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <h3 className="font-semibold text-gray-900 dark:text-white text-lg mb-2 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">
                  {category.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {category.productCount} محصول
                  </span>
                  <div className="flex items-center space-x-1  text-blue-500">
                    <span className="text-sm font-medium">مشاهده</span>
                    <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Interactive Featured Category */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
                  پرطرفدار
                </span>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {categories[activeCategory].name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                  {categories[activeCategory].description}
                </p>
              </div>

              <div className="flex items-center space-x-4  mb-8">
                <div className="flex items-center space-x-2 ">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {categories[activeCategory].productCount.toLocaleString("fa-IR")} محصول فعال
                  </span>
                </div>
                <div className="w-px h-4 bg-gray-300 dark:bg-gray-600" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  جدیدترین تجهیزات
                </span>
              </div>

              <div className="flex space-x-4 ">
                <button className={`px-6 py-3 rounded-xl text-white font-medium transition-all hover:scale-105 ${colorClasses[color]}`}>
                  مشاهده محصولات
                </button>
                <button className="px-6 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium hover:border-gray-400 dark:hover:border-gray-500 transition-all hover:scale-105">
                  دریافت کاتالوگ
                </button>
              </div>
            </div>

            {/* Image & Navigation */}
            <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800">
              <div className="relative h-full min-h-[400px]">
                <Image
                  src={categories[activeCategory].image}
                  alt={categories[activeCategory].name}
                  fill
                  className="object-cover"
                />
                
                {/* Navigation Arrows */}
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                  <button
                    onClick={prevCategory}
                    className="p-3 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg hover:scale-110 transition-transform"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                  
                  <div className="flex space-x-2 ">
                    {categories.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveCategory(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === activeCategory 
                            ? 'bg-blue-500 w-6' 
                            : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400'
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={nextCategory}
                    className="p-3 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg hover:scale-110 transition-transform"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}