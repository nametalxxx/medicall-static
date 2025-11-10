'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  Menu,
  X,
  Stethoscope,
  Scale,
  ShoppingCart,
  ChevronDown,
} from 'lucide-react';
import { useTheme } from '@/components/providers/theme-provider';
import { useColor } from '@/components/providers/color-provider';
import { useCart } from '@/context/cart-context';
import { ColorSwitcher } from '@/components/ui/color-switcher';
import { SearchBar } from '@/components/search/search-bar';
import { UserMenu } from '@/components/auth/user-menu';
import { categories } from '@/data/products';

const HOVER_DELAY = 120; // to prevent flicker

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const { color } = useColor();
  const { state: cartState } = useCart();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [comparedCount, setComparedCount] = useState(0);
  const [activeMenu, setActiveMenu] = useState<string | null>(null); // track which menu is open

  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleEnter = (menu: string) => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setActiveMenu(menu);
  };

  const handleLeave = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    hoverTimeout.current = setTimeout(() => setActiveMenu(null), HOVER_DELAY);
  };

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('comparedProducts');
    if (saved) setComparedCount(JSON.parse(saved).length);
  }, []);

  const colorGradients = {
    blue: 'from-blue-500 to-blue-600',
    rose: 'from-rose-500 to-rose-600',
    green: 'from-green-500 to-green-600',
    orange: 'from-orange-500 to-orange-600',
    purple: 'from-purple-500 to-purple-600',
    teal: 'from-teal-500 to-teal-600',
    amber: 'from-amber-500 to-amber-600',
    indigo: 'from-indigo-500 to-indigo-600',
  };

  if (!mounted)
    return (
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200 h-16">
        <div className="container mx-auto px-4 flex items-center justify-between h-16">
          <div className="w-32 h-8 bg-gray-200 rounded" />
        </div>
      </header>
    );

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-700 transition-colors">
      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div
              className={`p-2 rounded-xl bg-gradient-to-br ${colorGradients[color]}`}
            >
              <Stethoscope className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              مدی کالا
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 relative">
            <Link
              href="/"
              className="font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              خانه
            </Link>

            {/* محصولات menu */}
            <div
              className="relative"
              onMouseEnter={() => handleEnter('products')}
              onMouseLeave={handleLeave}
            >
              <button className="flex items-center gap-1 font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                محصولات
                <ChevronDown className="w-4 h-4 mt-[1px]" />
              </button>
            </div>

            <Link
              href="/categories"
              className="font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              دسته‌بندی‌ها
            </Link>

            {/* Example: another future mega menu could go here */}
            <Link
              href="/compare"
              className="font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              مقایسه
            </Link>

            <Link
              href="/about"
              className="font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              درباره ما
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <SearchBar />
            <ColorSwitcher />

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-300"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>

            <UserMenu />

            <Link
              href="/compare"
              className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors relative text-gray-700 dark:text-gray-300"
            >
              <Scale className="h-5 w-5" />
              {comparedCount > 0 && (
                <span className="absolute -top-1 -start-1 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {comparedCount}
                </span>
              )}
            </Link>

            <Link
              href="/cart"
              className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors relative text-gray-700 dark:text-gray-300"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartState.itemCount > 0 && (
                <span className="absolute -top-1 -start-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartState.itemCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-300"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* ===== Mega Menus anchored to entire navbar ===== */}
        {activeMenu === 'products' && (
          <div
            onMouseEnter={() => handleEnter('products')}
            onMouseLeave={handleLeave}
            className="
              absolute inset-x-0 top-full mt-2 flex justify-center z-40
            "
          >
            <div
              className="
                w-max max-w-5xl
                rounded-xl shadow-xl
                border border-gray-200 dark:border-gray-700
                bg-white dark:bg-gray-900
                p-6
                grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6
              "
            >
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/products/`}
                  className="group flex flex-col gap-2"
                >
                  <div className="overflow-hidden rounded-lg aspect-video">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {cat.name}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                      {cat.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* ===== Mobile Nav ===== */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            <nav className="flex flex-col gap-4">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="font-medium py-2 text-gray-700 dark:text-gray-300"
              >
                خانه
              </Link>
              <Link
                href="/products"
                onClick={() => setIsMenuOpen(false)}
                className="font-medium py-2 text-gray-700 dark:text-gray-300"
              >
                محصولات
              </Link>
              <Link
                href="/categories"
                onClick={() => setIsMenuOpen(false)}
                className="font-medium py-2 text-gray-700 dark:text-gray-300"
              >
                دسته‌بندی‌ها
              </Link>
              <Link
                href="/compare"
                onClick={() => setIsMenuOpen(false)}
                className="font-medium py-2 text-gray-700 dark:text-gray-300"
              >
                مقایسه
              </Link>
              <Link
                href="/about"
                onClick={() => setIsMenuOpen(false)}
                className="font-medium py-2 text-gray-700 dark:text-gray-300"
              >
                درباره ما
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
