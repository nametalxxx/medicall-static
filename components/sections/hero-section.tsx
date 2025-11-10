'use client';

import React from 'react';
import { ArrowLeft, Shield, Zap, Clock, Award } from 'lucide-react';
import { useColor } from '@/components/providers/color-provider';
import Image from 'next/image';


export function HeroSection() {
  const { color } = useColor();

  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    rose: 'from-rose-500 to-rose-600',
    green: 'from-green-500 to-green-600',
    orange: 'from-orange-500 to-orange-600',
    purple: 'from-purple-500 to-purple-600',
    teal: 'from-teal-500 to-teal-600',
    amber: 'from-amber-500 to-amber-600',
    indigo: 'from-indigo-500 to-indigo-600',
  };

  const features = [
    {
      icon: Shield,
      title: 'گارانتی اصالت',
      description: 'ضمانت اصل بودن کالا'
    },
    {
      icon: Zap,
      title: 'تحویل سریع',
      description: 'ارسال در کمترین زمان'
    },
    {
      icon: Clock,
      title: 'پشتیبانی 24/7',
      description: 'مشاوره تخصصی دائمی'
    },
    {
      icon: Award,
      title: 'تضمین کیفیت',
      description: 'مطابق استانداردهای پزشکی'
    }
  ];

  return (
    <section className="relative min-h-[80vh] bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.1) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 pt-20 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2  bg-white dark:bg-gray-800 rounded-full px-4 py-2 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${colorClasses[color]} animate-pulse`} />
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                  مرجع تخصصی تجهیزات پزشکی
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                  تجهیزات پزشکی
                </span>
                <br />
                <span className={`bg-gradient-to-r ${colorClasses[color]} bg-clip-text text-transparent`}>
                  با کیفیت بیمارستانی
                </span>
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
                ارائه پیشرفته‌ترین تجهیزات پزشکی و آزمایشگاهی با استانداردهای بین‌المللی. 
                سلامت شما، رسالت ماست.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className={`group relative px-8 py-4 rounded-2xl bg-gradient-to-r ${colorClasses[color]} text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}>
                <span className="relative z-10">مشاهده محصولات</span>
                <div className="absolute inset-0 rounded-2xl bg-white/20 group-hover:bg-white/30 transition-colors" />
              </button>

              <button className="group px-8 py-4 rounded-2xl border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold text-lg hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300 hover:scale-105">
                <span className="flex items-center justify-center space-x-2 ">
                  <span>مشاوره رایگان</span>
                  <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                </span>
              </button>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 group-hover:scale-110 transition-transform duration-300 mb-3">
                    <feature.icon className={`h-6 w-6 ${color === 'blue' ? 'text-blue-500' : 
                                            color === 'rose' ? 'text-rose-500' :
                                            color === 'green' ? 'text-green-500' :
                                            color === 'orange' ? 'text-orange-500' :
                                            color === 'purple' ? 'text-purple-500' :
                                            color === 'teal' ? 'text-teal-500' :
                                            color === 'amber' ? 'text-amber-500' : 'text-indigo-500'}`} />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image/Visual */}
          <div className="relative">
            <div className="relative">
              {/* Main Card */}
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-0 shadow-2xl border border-gray-200 dark:border-gray-700 relative overflow-clip">
                  <Image
                    src="./img/main.jpg"
                    alt="پزشکی"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover absolute start-0 top-0"
                  />
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-50/30 to-cyan-100/30 dark:from-blue-900/30 dark:to-cyan-900/30 flex items-center justify-center p-8 relative">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                        <Shield className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        پزشکی پیشرفته
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        تکنولوژی در خدمت سلامت
                      </p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -end-4 w-24 h-24 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl rotate-12 shadow-xl flex items-center justify-center">
                <Zap className="h-8 w-8 text-white" />
              </div>

              <div className="absolute -bottom-4 -start-4 w-20 h-20 bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl -rotate-12 shadow-xl flex items-center justify-center">
                <Award className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 start-0 end-0 wave-divider-fixed">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="w-full h-16 text-gray-50 dark:text-gray-900 transition-colors duration-300"
        >
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            opacity=".25" 
            className="fill-current"
          ></path>
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            opacity=".5" 
            className="fill-current"
          ></path>
          <path 
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
            className="fill-current"
          ></path>
        </svg>
      </div>
    </section>
  );
}