'use client';

import React, { useState } from 'react';
import { Palette, Check } from 'lucide-react';
import { useColor } from '@/components/providers/color-provider';

const colors = [
  { name: 'blue', value: 'rgb(59 130 246)' },
  { name: 'rose', value: 'rgb(244 63 94)' },
  { name: 'green', value: 'rgb(34 197 94)' },
  { name: 'orange', value: 'rgb(249 115 22)' },
  { name: 'purple', value: 'rgb(168 85 247)' },
  { name: 'teal', value: 'rgb(20 184 166)' },
  { name: 'amber', value: 'rgb(245 158 11)' },
  { name: 'indigo', value: 'rgb(99 102 241)' },
] as const;

export function ColorSwitcher() {
  const { color, setColor } = useColor();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      >
        <Palette className="h-5 w-5" />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-12 start-0 z-50 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-3 min-w-48">
            <div className="grid grid-cols-4 gap-3">
              {colors.map((colorOption) => (
                <button
                  key={colorOption.name}
                  onClick={() => {
                    setColor(colorOption.name);
                    setIsOpen(false);
                  }}
                  className="relative group"
                >
                  <div
                    className="w-8 h-8 rounded-full border-2 border-gray-200 dark:border-gray-600 group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: colorOption.value }}
                  />
                  {color === colorOption.name && (
                    <Check className="absolute inset-0 m-auto h-4 w-4 text-white drop-shadow-md" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}