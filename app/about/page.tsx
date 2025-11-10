import React from 'react';
import { Shield, Users, Award, Heart } from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { icon: Users, number: '۱۰,۰۰۰+', label: 'مشتری راضی' },
    { icon: Award, number: '۱۵', label: 'سال تجربه' },
    { icon: Shield, number: '۵۰۰+', label: 'محصول فعال' },
    { icon: Heart, number: '۹۸%', label: 'رضایت مشتری' },
  ];

  const team = [
    {
      name: 'دکتر محمد رضایی',
      role: 'مدیر فنی',
      description: 'متخصص تجهیزات پزشکی با ۱۵ سال سابقه'
    },
    {
      name: 'مهندس فاطمه محمدی',
      role: 'مدیر فروش',
      description: 'کارشناس ارشد مدیریت بازرگانی'
    },
    {
      name: 'دکتر علی کریمی',
      role: 'مشاور فنی',
      description: 'پزشک متخصص و مشاور تجهیزات'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            درباره <span className="text-blue-500">مدی کالا</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            ما در مدی کالا با بیش از ۱۵ سال تجربه، ارائه‌دهنده پیشرفته‌ترین تجهیزات پزشکی 
            با استانداردهای بین‌المللی هستیم. سلامت شما، رسالت ماست.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-4">
                <stat.icon className="h-8 w-8" />
              </div>
              <div className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">رسالت ما</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              ارائه تجهیزات پزشکی با کیفیت و استانداردهای جهانی به همراه خدمات پس از فروش ممتاز. 
              ما متعهد به تأمین نیازهای مراکز درمانی با بهترین برندهای روز دنیا هستیم.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">چشم‌انداز</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              تبدیل شدن به برترین مرجع تخصصی تجهیزات پزشکی در خاورمیانه و ارائه 
              خدمات جامع به کلیه مراکز درمانی، بیمارستان‌ها و کلینیک‌های تخصصی.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">تیم متخصص ما</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  {member.name.split(' ')[1][0]}
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white text-lg mb-2">
                  {member.name}
                </h3>
                <div className="text-blue-500 text-sm font-medium mb-3">{member.role}</div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">ارزش‌های ما</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'کیفیت', description: 'تضمین اصالت و کیفیت تمامی محصولات' },
              { title: 'تخصص', description: 'مشاوره تخصصی توسط کارشناسان مجرب' },
              { title: 'پشتیبانی', description: 'پشتیبانی ۲۴ ساعته و خدمات پس از فروش' },
              { title: 'اعتماد', description: 'شریک مطمئن در حوزه تجهیزات پزشکی' },
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{value.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}