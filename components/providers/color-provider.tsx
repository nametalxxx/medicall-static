'use client';

import React, { createContext, useContext, useState } from 'react';

type Color = 'blue' | 'rose' | 'green' | 'orange' | 'purple' | 'teal' | 'amber' | 'indigo';

type ColorContextType = {
  color: Color;
  setColor: (color: Color) => void;
};

const ColorContext = createContext<ColorContextType | undefined>(undefined);

export function ColorProvider({ children }: { children: React.ReactNode }) {
  const [color, setColor] = useState<Color>('teal');

  return (
    <ColorContext.Provider value={{ color, setColor }}>
      {children}
    </ColorContext.Provider>
  );
}

export const useColor = () => {
  const context = useContext(ColorContext);
  if (context === undefined) {
    throw new Error('useColor must be used within a ColorProvider');
  }
  return context;
};