'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { ThemeProvider as NextThemesProvider, useTheme as useNextTheme } from 'next-themes';

type Theme = 'light' | 'dark' | 'system';

type ThemeContextType = {
  theme: Theme;
  resolvedTheme: 'light' | 'dark';
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function InternalThemeProvider({ children }: { children: React.ReactNode }) {
  const { theme, resolvedTheme, setTheme, systemTheme } = useNextTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const active = theme === 'system' ? systemTheme : theme;
    setTheme(active === 'dark' ? 'light' : 'dark');
  };

  if (!mounted) {
    return <div className="min-h-screen bg-white" />;
  }

  return (
    <ThemeContext.Provider
      value={{
        theme: (theme as Theme) || 'system',
        resolvedTheme: (resolvedTheme as 'light' | 'dark') || 'light',
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      storageKey="theme"
      value={{
        light: 'light',
        dark: 'dark',
      }}
      /* 👇👇👇 */
      // Apply class to <html> instead of <body>
      /* key part */
      disableTransitionOnChange
    >
      <InternalThemeProvider>{children}</InternalThemeProvider>
    </NextThemesProvider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
