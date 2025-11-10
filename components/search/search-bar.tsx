'use client';

import React, { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Search, X } from 'lucide-react';
import { products } from '@/data/products';

export function SearchBar() {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const router = useRouter();

  const searchProducts = useCallback((searchQuery: string) => {
    if (!searchQuery.trim()) {
      setSuggestions([]);
      return;
    }

    const results = products.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    ).slice(0, 5);

    setSuggestions(results);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    searchProducts(value);
    setIsOpen(true);
  };

  const handleSuggestionClick = (productId: string) => {
    setQuery('');
    setSuggestions([]);
    setIsOpen(false);
    router.push(`/products/${productId}`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/products?search=${encodeURIComponent(query)}`);
      setQuery('');
      setSuggestions([]);
      setIsOpen(false);
    }
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="relative">
        <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-full px-4 py-2 transition-colors border border-transparent focus-within:border-blue-500">
          <Search className="h-4 w-4 text-gray-500 me-2" />
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="جستجوی تجهیزات پزشکی..."
            className="bg-transparent border-none outline-none text-sm w-48 text-gray-700 dark:text-gray-300 placeholder-gray-500 dark:placeholder-gray-400"
          />
          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery('');
                setSuggestions([]);
              }}
              className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors"
            >
              <X className="h-3 w-3 text-gray-500" />
            </button>
          )}
        </div>
      </form>

      {/* Search Suggestions */}
      {isOpen && suggestions.length > 0 && (
        <div className="absolute top-full mt-2 w-full bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 z-50">
          <div className="p-2">
            {suggestions.map((product) => (
              <button
                key={product.id}
                onClick={() => handleSuggestionClick(product.id)}
                className="w-full text-start p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-lg flex-shrink-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-gray-900 dark:text-white text-sm truncate">
                    {product.name}
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400 text-xs truncate">
                    {product.category}
                  </p>
                </div>
                <div className="text-sm font-bold text-gray-900 dark:text-white">
                  {product.price.toLocaleString("fa-IR")} تومان
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}