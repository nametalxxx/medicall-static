'use client';

import React, { useState } from 'react';
import { User, Settings, LogOut, Heart, ShoppingBag } from 'lucide-react';

export function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const user = {
    name: 'محمد رضایی',
    email: 'mohammad@example.com',
    avatar: '/api/placeholder/32/32'
  };

  const menuItems = [
    { icon: User, label: 'پروفایل من', href: '/profile' },
    { icon: Heart, label: 'علاقه‌مندی‌ها', href: '/wishlist' },
    { icon: ShoppingBag, label: 'سفارشات من', href: '/orders' },
    { icon: Settings, label: 'تنظیمات', href: '/settings' },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      >
        <User className="h-5 w-5 text-gray-700 dark:text-gray-300" />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-12 start-0 z-50 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-2 min-w-48">
            {isLoggedIn ? (
              <>
                <div className="p-3 border-b border-gray-200 dark:border-gray-700">
                  <div className="font-medium text-gray-900 dark:text-white">
                    {user.name}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {user.email}
                  </div>
                </div>
                
                <div className="space-y-1 p-1">
                  {menuItems.map((item, index) => (
                    <button
                      key={index}
                      className="w-full flex items-center gap-3 p-2 rounded-lg text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      <item.icon className="h-4 w-4" />
                      {item.label}
                    </button>
                  ))}
                </div>

                <div className="p-1 border-t border-gray-200 dark:border-gray-700">
                  <button
                    onClick={() => setIsLoggedIn(false)}
                    className="w-full flex items-center gap-3 p-2 rounded-lg text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                  >
                    <LogOut className="h-4 w-4" />
                    خروج
                  </button>
                </div>
              </>
            ) : (
              <div className="p-2 space-y-2">
                <button className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors">
                  ورود
                </button>
                <button className="w-full py-2 px-4 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:border-gray-400 dark:hover:border-gray-500 transition-colors">
                  ثبت‌نام
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}