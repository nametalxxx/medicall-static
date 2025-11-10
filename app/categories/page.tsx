'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { categories } from '@/data/products';
import { ArrowLeft } from 'lucide-react';

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            دسته‌بندی‌های محصولات
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            تجهیزات پزشکی در دسته‌بندی‌های تخصصی برای نیازهای مختلف مراکز درمانی
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/products/`}
              className="group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700 group-hover:scale-105 h-full">
                <div className="relative mb-6">
                  <div className="aspect-video rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-700">
                    <Image
                      src={category.image}
                      alt={category.name}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 dark:text-white text-xl mb-3 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center justify-center space-x-2  text-blue-500">
                    <span className="text-sm font-medium">مشاهده محصولات</span>
                    <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '۵۰۰+', label: 'محصول فعال' },
              { number: '۵۰+', label: 'برند معتبر' },
              { number: '۱۰۰۰۰+', label: 'مشتری راضی' },
              { number: '۱۵', label: 'سال تجربه' },
            ].map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-3xl font-bold text-blue-500">{stat.number}</div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}