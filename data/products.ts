export const products = [
  {
    id: '1',
    name: 'دستگاه فشارسنج دیجیتال پیشرفته',
    description: 'دستگاه فشارسنج دیجیتال با قابلیت تشخیص آریتمی و حافظه برای 200 اندازه گیری. مناسب برای استفاده خانگی و مراکز درمانی.',
    price: 1250000,
    originalPrice: 1500000,
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=500&fit=crop',
    category: 'تجهیزات تشخیصی',
    rating: 4.8,
    reviewCount: 142,
    features: ['تشخیص آریتمی', 'حافظه 200 اندازه گیری', 'نمایشگر رنگی', 'اتصال بلوتوث', 'هشدار فشار خون بالا'],
    isNew: true,
    isBestseller: true,
    specifications: {
      brand: 'Omron',
      model: 'HEM-7320',
      warranty: '3 سال',
      battery: 'باتری لیتیوم',
      display: 'نمایشگر LCD رنگی'
    }
  },
  {
    id: '2',
    name: 'کیت تست قند خون',
    description: 'کیت کامل تست قند خون با نوارهای تست دقیق و دستگاه اندازه گیری پیشرفته. دقت 99% در نتایج.',
    price: 850000,
    originalPrice: 950000,
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=500&h=500&fit=crop',
    category: 'تجهیزات آزمایشگاهی',
    rating: 4.6,
    reviewCount: 89,
    features: ['دقت 99%', 'نتایج در 5 ثانیه', 'حافظه 500 تست', 'نمایشگر بزرگ', 'نشانگر باتری'],
    isBestseller: true,
    specifications: {
      brand: 'Accu-Chek',
      model: 'Active',
      warranty: '2 سال',
      battery: 'CR2032',
      memory: '500 نتیجه'
    }
  },
  {
    id: '3',
    name: 'دستگاه سونوگرافی پرتابل',
    description: 'دستگاه سونوگرافی قابل حمل با کیفیت تصویربرداری بالا برای مصارف کلینیکی و اورژانسی.',
    price: 18500000,
    originalPrice: 22000000,
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=500&h=500&fit=crop',
    category: 'تجهیزات تصویربرداری',
    rating: 4.9,
    reviewCount: 34,
    features: ['قابل حمل', 'کیفیت HD', 'باتری قوی', 'نرم افزار پیشرفته', 'پروب چند فرکانسی'],
    isNew: true,
    specifications: {
      brand: 'Butterfly',
      model: 'iQ+',
      warranty: '5 سال',
      weight: '2.5 کیلوگرم',
      battery: '6 ساعت'
    }
  },
  {
    id: '4',
    name: 'تخت بیمارستانی الکتریکی',
    description: 'تخت بیمارستانی تمام الکتریکی با قابلیت تنظیم ارتفاع و پوزیشن‌های مختلف برای بیمار.',
    price: 4500000,
    originalPrice: 5200000,
    image: 'https://images.unsplash.com/photo-1641877492086-771bc14a8e5e?w=500&h=500&fit=crop',
    category: 'تجهیزات بیمارستانی',
    rating: 4.7,
    reviewCount: 67,
    features: ['کنترل الکتریکی', '4 موتور', 'جک هیدرولیک', 'گارانتی 2 ساله', 'کنترل از راه دور'],
    specifications: {
      brand: 'Hill-Rom',
      model: 'Century',
      warranty: '2 سال',
      motors: '4 موتور',
      weight: '120 کیلوگرم'
    }
  },
  {
    id: '5',
    name: 'دفیبریلاتور خودکار',
    description: 'دستگاه دفیبریلاتور خودکار برای استفاده در مراکز درمانی و عمومی با دستورالعمل صوتی.',
    price: 32000000,
    originalPrice: 38000000,
    image: 'https://images.unsplash.com/photo-1688565633088-3bdb423a59cb?w=500&h=500&fit=crop',
    category: 'تجهیزات اورژانسی',
    rating: 4.9,
    reviewCount: 28,
    features: ['عملکرد خودکار', 'دستورالعمل صوتی', 'باتری قابل تعویض', 'سبک وزن', 'آنالیز هوشمند'],
    isNew: true,
    specifications: {
      brand: 'Philips',
      model: 'HeartStart',
      warranty: '5 سال',
      weight: '1.8 کیلوگرم',
      battery: 'لیتیوم یون'
    }
  },
  {
    id: '6',
    name: 'دستگاه نوار قلب',
    description: 'دستگاه ECG 12 لید با قابلیت چاپ و ذخیره سازی دیجیتال نتایج برای تشخیص بیماری‌های قلبی.',
    price: 7800000,
    originalPrice: 9200000,
    image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=500&h=500&fit=crop',
    category: 'تجهیزات تشخیصی',
    rating: 4.5,
    reviewCount: 56,
    features: ['12 لید', 'چاپگر داخلی', 'حافظه داخلی', 'نمایشگر لمسی', 'اتصال USB'],
    specifications: {
      brand: 'GE Healthcare',
      model: 'MAC 5500',
      warranty: '3 سال',
      leads: '12 لید',
      display: '10.4 اینچ'
    }
  },
  {
    id: '7',
    name: 'پالس اکسیمتر انگشتی',
    description: 'دستگاه اندازه گیری سطح اکسیژن خون و ضربان قلب با دقت بالا و نمایشگر OLED.',
    price: 420000,
    originalPrice: 550000,
    image: 'https://plus.unsplash.com/premium_photo-1672073399788-4dedc7b8888e?w=500&h=500&fit=crop',
    category: 'تجهیزات مانیتورینگ',
    rating: 4.4,
    reviewCount: 203,
    features: ['اندازه گیری SPO2', 'ضربان قلب', 'نمایشگر OLED', 'باتری لیتیوم', 'سبک وزن'],
    isBestseller: true,
    specifications: {
      brand: 'Zacurate',
      model: 'Pro Series 500DL',
      warranty: '1 سال',
      battery: '2x AAA',
      weight: '56 گرم'
    }
  },
  {
    id: '8',
    name: 'ست سرم تراپی',
    description: 'ست کامل سرم تراپی شامل لوله‌های انتقال و متعلقات با کیفیت پزشکی و استریل.',
    price: 185000,
    image: 'https://images.unsplash.com/photo-1585960691786-a593e76d3847?w=500&h=500&fit=crop',
    category: 'تجهیزات مصرفی',
    rating: 4.3,
    reviewCount: 178,
    features: ['استریل', 'فاقد لاتکس', 'فلومتر دقیق', 'بسته 50 عددی', 'کنترل جریان'],
    specifications: {
      brand: 'B Braun',
      model: 'Infusion Set',
      warranty: '-',
      material: 'PVC',
      package: '50 عددی'
    }
  },
  {
    id: '9',
    name: 'اتوسکوپ دیجیتال',
    description: 'اتوسکوپ دیجیتال با دوربین HD برای معاینات دقیق گوش و ذخیره تصاویر با کیفیت بالا.',
    price: 3200000,
    originalPrice: 3800000,
    image: 'https://plus.unsplash.com/premium_photo-1681364365252-387c05c06c40?w=500&h=500&fit=crop',
    category: 'تجهیزات معاینه',
    rating: 4.7,
    reviewCount: 45,
    features: ['دوربین HD', 'ذخیره تصاویر', 'نور LED', 'اتصال USB', 'نمایشگر 3.5 اینچ'],
    isNew: true,
    specifications: {
      brand: 'Firefly',
      model: 'DE550',
      warranty: '2 سال',
      camera: '2 مگاپیکسل',
      display: '3.5 اینچ'
    }
  },
  {
    id: '10',
    name: 'ویلچر الکتریکی',
    description: 'ویلچر تمام الکتریکی با قابلیت کنترل از راه دور و سیستم تعلیق هوشمند برای راحتی کاربر.',
    price: 12500000,
    originalPrice: 14800000,
    image: 'https://images.unsplash.com/photo-1651326659270-59bbb788199a?w=500&h=500&fit=crop',
    category: 'تجهیزات توانبخشی',
    rating: 4.8,
    reviewCount: 32,
    features: ['کنترل از راه دور', 'باتری لیتیوم', 'شارژ سریع', 'سیستم تعلیق', 'جوی استیک'],
    specifications: {
      brand: 'Pride',
      model: 'Jazzy Air',
      warranty: '2 سال',
      battery: 'لیتیوم یون',
      speed: '8 km/h'
    }
  }
];

export const categories = [
  {
    id: '1',
    name: 'تجهیزات تشخیصی',
    description: 'دستگاه‌های اندازه گیری و تشخیص پزشکی',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
    productCount: 45,
    color: 'blue'
  },
  {
    id: '2',
    name: 'تجهیزات تصویربرداری',
    description: 'سیستم‌های پیشرفته تصویربرداری پزشکی',
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=300&fit=crop',
    productCount: 23,
    color: 'purple'
  },
  {
    id: '3',
    name: 'تجهیزات بیمارستانی',
    description: 'تجهیزات و مبلمان مراکز درمانی',
    image: 'https://images.unsplash.com/photo-1641877492086-771bc14a8e5e?w=500&h=500&fit=crop',
    productCount: 67,
    color: 'green'
  },
  {
    id: '4',
    name: 'تجهیزات آزمایشگاهی',
    description: 'لوازم و دستگاه‌های آزمایشگاهی پزشکی',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=300&fit=crop',
    productCount: 89,
    color: 'orange'
  }
];