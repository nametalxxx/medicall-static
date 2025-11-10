'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  Clock,
  Shield,
  Truck,
  Award,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import Link from 'next/link';
import { useColor } from '@/components/providers/color-provider';
import { products } from '@/data/products';

export function PromoBanner() {
  const { color } = useColor();
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 59, seconds: 59 });
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const discounted = products.filter((p) => p.originalPrice && p.price < p.originalPrice);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 0, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Auto-play every 5s
  useEffect(() => {
    autoPlayRef.current = setInterval(() => handleNext(), 5000);
    return () => autoPlayRef.current && clearInterval(autoPlayRef.current);
  }, [discounted.length]);

  const handleNext = () => {
    setFade(false);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % discounted.length);
      setFade(true);
    }, 200);
  };

  const handlePrev = () => {
    setFade(false);
    setTimeout(() => {
      setCurrent((prev) =>
        prev === 0 ? discounted.length - 1 : prev - 1
      );
      setFade(true);
    }, 200);
  };

  const stats = [
    { icon: Truck, value: '۲۴', label: 'ساعت ارسال' },
    { icon: Shield, value: '۱۸', label: 'ماه گارانتی' },
    { icon: Award, value: '۵۰۰+', label: 'محصول فعال' },
    { icon: Clock, value: '۱۵', label: 'سال تجربه' },
  ];

  const item = discounted[current];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* BG pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 0)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* === LEFT SIDE === */}
          <div className="text-white space-y-4">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse me-2" />
              <span className="text-sm font-medium">فرصت استثنایی</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                تخفیف ویژه
              </span>
              {/* <br />
              تجهیزات پزشکی */}
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed">
              تا <span className="text-yellow-400 font-bold">۴۰٪</span> تخفیف روی محصولات منتخب. این فرصت استثنایی را از دست ندهید!
            </p>

            {/* Countdown */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-300">زمان باقی‌مانده:</span>
                <Clock className="h-5 w-5 text-cyan-400" />
              </div>
              <div dir="ltr" className="flex justify-center space-x-4">
                {['hours', 'minutes', 'seconds'].map((key, idx) => (
                  <React.Fragment key={key}>
                    {idx > 0 && <div className="text-2xl font-bold text-white pt-3">:</div>}
                    <div className="text-center">
                      <div className="bg-white/20 rounded-xl p-3 min-w-16">
                        <span className="text-2xl font-bold text-white">
                          {timeLeft[key as keyof typeof timeLeft]
                            .toLocaleString('fa-IR')
                            .padStart(2, '0')}
                        </span>
                      </div>
                      <span className="text-sm text-gray-300 mt-2 block">
                        {key === 'hours' ? 'ساعت' : key === 'minutes' ? 'دقیقه' : 'ثانیه'}
                      </span>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300 text-center"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/20 mb-2">
                    <stat.icon className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            <button
              className={`group mt-6 px-8 py-4 rounded-2xl bg-gradient-to-r ${
                color === 'blue'
                  ? 'from-blue-500 to-cyan-500'
                  : color === 'rose'
                  ? 'from-rose-500 to-pink-500'
                  : color === 'green'
                  ? 'from-green-500 to-emerald-500'
                  : color === 'orange'
                  ? 'from-orange-500 to-red-500'
                  : color === 'purple'
                  ? 'from-purple-500 to-indigo-500'
                  : color === 'teal'
                  ? 'from-teal-500 to-cyan-500'
                  : color === 'amber'
                  ? 'from-amber-500 to-orange-500'
                  : 'from-indigo-500 to-purple-500'
              } text-white font-semibold text-lg shadow-lg shadow-cyan-500/20 hover:shadow-xl transition-all duration-300 hover:scale-105`}
            >
              مشاهده محصولات تخفیف‌دار
            </button>
          </div>

          {/* === RIGHT SIDE (SLIDER) === */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-lg mx-auto rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/10 hover:shadow-xl transition">
              <Link
                href={`/products/${item.id}`}
                className={`block transition-opacity duration-700 ease-in-out ${
                  fade ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 start-4 text-white space-y-1">
                    <h3 className="text-lg font-bold">{item.name}</h3>
                    <p className="text-sm text-gray-200 line-clamp-1">{item.description}</p>
                  </div>
                </div>

                {/* Price area */}
                <div className="p-6 text-center bg-gray-50 dark:bg-gray-900">
                  <div className="flex flex-col items-start text-gray-800 dark:text-gray-200">
                    <span className="text-gray-400 line-through text-sm">
                      {item.originalPrice?.toLocaleString('fa-IR')}
                    </span>
                    <span className="text-2xl font-bold text-emerald-500">
                      {item.price.toLocaleString('fa-IR')} تومان
                    </span>
                  </div>
                </div>
              </Link>
            </div>

            {/* Controls */}
            <button
              onClick={handlePrev}
              className="absolute top-1/2 start-0 -translate-y-1/2 translate-x-3 p-2 rounded-full text-white transition-all cursor-pointer"
            >
              <ChevronRight className="h-8 w-8" />
            </button>

            <button
              onClick={handleNext}
              className="absolute top-1/2 end-0 -translate-y-1/2 -translate-x-3 p-2 rounded-full text-white transition-all cursor-pointer"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating accents */}
      <div className="absolute top-1/4 start-10 w-4 h-4 bg-blue-400 rounded-full opacity-60 animate-bounce" />
      <div className="absolute top-1/2 end-20 w-6 h-6 bg-cyan-400 rounded-full opacity-40 animate-pulse" />
      <div className="absolute bottom-1/3 start-1/4 w-3 h-3 bg-green-400 rounded-full opacity-70 animate-bounce delay-1000" />
    </section>
  );
}
