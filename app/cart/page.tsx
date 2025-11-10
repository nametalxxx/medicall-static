'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Minus, Plus, Trash2, ArrowLeft } from 'lucide-react';
import { products } from '@/data/products';
import { useColor } from '@/components/providers/color-provider';

export default function CartPage() {
  const { color } = useColor();

  const cartItems = [
    { ...products[0], quantity: 2 },
    { ...products[1], quantity: 1 },
    { ...products[2], quantity: 1 },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 50000;
  const tax = subtotal * 0.09;
  const total = subtotal + shipping + tax;

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

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-10">
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">سبد خرید</h1>
          <Link href="/products" className="flex items-center space-x-2  text-blue-500 hover:text-blue-600">
            <ArrowLeft className="h-4 w-4" />
            <span>بازگشت به فروشگاه</span>
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex gap-4">
                  {/* Product Image */}
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 rounded-xl bg-gray-100 dark:bg-gray-700 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                          {item.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                          {item.description}
                        </p>
                      </div>
                      <button className="text-red-500 hover:text-red-600 p-2">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-4 ">
                        <div className="flex items-center bg-gray-100 dark:bg-gray-700 rounded-xl">
                          <button className="px-3 py-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-r-xl transition-colors">
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="px-4 py-1 min-w-12 text-center">{item.quantity}</span>
                          <button className="px-3 py-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-l-xl transition-colors">
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="text-left">
                        <div className="text-lg font-bold text-gray-900 dark:text-white">
                          {(item.price * item.quantity).toLocaleString("fa-IR")} تومان
                        </div>
                        {item.originalPrice && (
                          <div className="text-sm text-gray-500 dark:text-gray-400 line-through">
                            {(item.originalPrice * item.quantity).toLocaleString("fa-IR")} تومان
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Empty State */}
            {cartItems.length === 0 && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-12 text-center">
                <div className="w-24 h-24 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">سبد خرید شما خالی است</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">محصولات مورد نظر خود را به سبد خرید اضافه کنید</p>
                <Link href="/products" className={`inline-flex items-center px-6 py-3 rounded-xl text-white font-medium ${colorClasses[color]}`}>
                  مشاهده محصولات
                </Link>
              </div>
            )}
          </div>

          {/* Order Summary */}
          {cartItems.length > 0 && (
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 sticky top-24">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-6 text-lg">خلاصه سفارش</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-600 dark:text-gray-400">
                    <span>جمع کل ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} کالا)</span>
                    <span>{subtotal.toLocaleString("fa-IR")} تومان</span>
                  </div>
                  <div className="flex justify-between text-gray-600 dark:text-gray-400">
                    <span>هزینه ارسال</span>
                    <span>{shipping.toLocaleString("fa-IR")} تومان</span>
                  </div>
                  <div className="flex justify-between text-gray-600 dark:text-gray-400">
                    <span>مالیات (۹٪)</span>
                    <span>{tax.toLocaleString("fa-IR")} تومان</span>
                  </div>
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <div className="flex justify-between text-lg font-bold text-gray-900 dark:text-white">
                      <span>مبلغ قابل پرداخت</span>
                      <span>{total.toLocaleString("fa-IR")} تومان</span>
                    </div>
                  </div>
                </div>

                <button className={`w-full py-4 rounded-xl text-white font-semibold text-lg mb-4 transition-all hover:scale-105 ${colorClasses[color]}`}>
                  ادامه فرآیند خرید
                </button>

                <div className="text-center">
                  <Link href="/products" className="text-blue-500 hover:text-blue-600 text-sm font-medium">
                    ادامه خرید
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}