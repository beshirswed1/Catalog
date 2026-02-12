// خدمات الكتالوج - 3 مستويات
export const services = [
    {
        id: 'basic',
        name: 'كتالوج فقط',
        nameEn: 'Catalog Only',
        price: 50,
        duration: '5-7 أيام',
        badge: null,
        description: 'موقع عرض منتجات بسيط وأنيق',
        features: [
            'عرض المنتجات بشكل جذاب',
            'تصميم متجاوب 100%',
            'تكامل واتساب مباشر',
            'معرض صور احترافي',
            'صفحة واحدة (Single Page)',
            'استضافة مجانية لمدة شهر (vercel)',
            'دعم فني لمدة أسبوع'
        ],
        color: 'var(--color-primary)',
        icon: 'faMobileAlt' // Font Awesome icon name
    },
    {
        id: 'standard',
        name: 'موقع بميزات متوسطة',
        nameEn: 'Medium Features',
        price: 100,
        duration: '10-14 يوم',
        badge: 'الأكثر طلباً',
        description: 'موقع متكامل مع ميزات تفاعلية',
        features: [
            'كل ميزات الباقة الأساسية',
            'سلة مشتريات تفاعلية',
            'نظام بحث وفلترة متقدم',
            'صفحات متعددة',
            'لوحة تحكم بسيطة',
            'تحليلات الزوار (Analytics)',
            'تحسين محركات البحث (SEO)',
            'استضافة مجانية لمدة شهر (vercel)',
            'مساعده في رفع الموقع على الانترنت',
            'دعم فني لمدة شهر'
        ],
        color: 'var(--color-secondary)',
        icon: 'faRocket' // Font Awesome icon name
    },
    {
        id: 'premium',
        name: 'موقع متكامل',
        nameEn: 'Fully Integrated',
        price: 250,
        duration: '20-30 يوم',
        badge: 'الأفضل',
        description: 'حل شامل مع جميع الميزات المتقدمة',
        features: [
            'كل ميزات الباقة المتوسطة',
            'بوابة دفع إلكتروني',
            'نظام إدارة محتوى كامل (CMS)',
            'لوحة تحكم متقدمة',
            'تطبيق موبايل (اختياري)',
            'تكامل مع وسائل التواصل',
            'نظام إشعارات متقدم',
            'تقارير وإحصائيات تفصيلية',
            'نظام عملاء ومستخدمين',
            'استضافة مجانية لمدة شهر (vercel)',
            'دعم فني لمدة شهرين',
            'تدريب مجاني على النظام'
        ],
        color: 'var(--color-accent)',
        icon: 'faStar' // Font Awesome icon name
    }
];

// دالة للحصول على خدمة بواسطة ID
export const getServiceById = (id) => {
    return services.find(service => service.id === id);
};

// دالة للحصول على الخدمة الموصى بها
export const getRecommendedService = () => {
    return services.find(service => service.badge === 'الأكثر طلباً');
};
