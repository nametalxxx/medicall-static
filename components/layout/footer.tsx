import React from 'react';
import Link from 'next/link';
import { Stethoscope, Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer>
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2 ">
              <div className="p-2 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
                <Stethoscope className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">مدی کالا</span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              مرجع تخصصی تجهیزات پزشکی و آزمایشگاهی. ارائه بهترین برندها با گارانتی اصالت و کیفیت.
            </p>
            <div className="flex space-x-4 ">
              {['Twitter', 'Instagram', 'LinkedIn', 'Telegram'].map((social) => (
                <button
                  key={social}
                  className="w-10 h-10 rounded-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors flex items-center justify-center"
                >
                  <span className="text-sm font-medium">{social[0]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">دسترسی سریع</h3>
            <div className="space-y-3">
              {[
                'محصولات جدید',
                'پرفروش‌ها',
                'تخفیف‌دارها',
                'مقالات پزشکی',
                'گواهی‌نامه‌ها',
                'قوانین و مقررات'
              ].map((link) => (
                <Link
                  key={link}
                  href="#"
                  className="block text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-lg mb-6">دسته‌بندی‌ها</h3>
            <div className="space-y-3">
              {[
                'تجهیزات تشخیصی',
                'تجهیزات تصویربرداری',
                'تجهیزات بیمارستانی',
                'تجهیزات آزمایشگاهی',
                'تجهیزات اورژانسی',
                'تجهیزات توانبخشی'
              ].map((category) => (
                <Link
                  key={category}
                  href="#"
                  className="block text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-6">اطلاعات تماس</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 ">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <Phone className="h-4 w-4 text-blue-400" />
                </div>
                <div>
                  <div className="text-gray-400 text-sm">تلفن تماس</div>
                  <div className="font-medium">۰۲۱-۱۲۳۴۵۶۷۸</div>
                </div>
              </div>

              <div className="flex items-center space-x-3 ">
                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <Mail className="h-4 w-4 text-green-400" />
                </div>
                <div>
                  <div className="text-gray-400 text-sm">ایمیل</div>
                  <div className="font-medium">info@medikala.com</div>
                </div>
              </div>

              <div className="flex items-center space-x-3 ">
                <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-orange-400" />
                </div>
                <div>
                  <div className="text-gray-400 text-sm">آدرس</div>
                  <div className="font-medium">تهران، خیابان ولیعصر</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © ۲۰۲۴ مدی کالا. تمام حقوق محفوظ است.
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              <Link href="#" className="text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                حریم خصوصی
              </Link>
              <Link href="#" className="text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                شرایط استفاده
              </Link>
              <Link href="#" className="text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                سوالات متداول
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}