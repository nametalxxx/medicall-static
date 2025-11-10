import type { Metadata } from 'next';
import { Vazirmatn } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { ColorProvider } from '@/components/providers/color-provider';
import { CartProvider } from '@/context/cart-context';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const vazir = Vazirmatn({
  subsets: ['arabic'],
  variable: '--font-vazir',
});

export const metadata: Metadata = {
  title: 'مدی کالا - تجهیزات پزشکی پیشرفته',
  description: 'مرجع تخصصی تجهیزات پزشکی و آزمایشگاهی',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className={`${vazir.variable} font-sans antialiased`}>
        <ThemeProvider>
          <ColorProvider>
            <CartProvider>
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </CartProvider>
          </ColorProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}