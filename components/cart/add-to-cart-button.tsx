'use client';

import React, { useState } from 'react';
import { useCart } from '@/context/cart-context';
import { ShoppingCart, Check } from 'lucide-react';
import { useColor } from '@/components/providers/color-provider';

interface AddToCartButtonProps {
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
  };
  className?: string;
}

export function AddToCartButton({ product, className = '' }: AddToCartButtonProps) {
  const { dispatch } = useCart();
  const { color } = useColor();
  const [isAdded, setIsAdded] = useState(false);

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

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1
      }
    });

    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <button
      onClick={handleAddToCart}
      disabled={isAdded}
      className={`flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white font-medium transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed ${colorClasses[color]} ${className}`}
    >
      {isAdded ? (
        <>
          <Check className="h-5 w-5" />
          افزوده شد
        </>
      ) : (
        <>
          <ShoppingCart className="h-5 w-5" />
          افزودن به سبد
        </>
      )}
    </button>
  );
}