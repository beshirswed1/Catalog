// الخدمات البرمجية - مع دعم اللغات
export const services = [
    {
        id: 'basic',
        nameAr: 'كتالوج فقط',
        nameTr: 'Sadece Katalog',
        nameEn: 'Catalog Only',
        price: '50',
        durationAr: '5-7 أيام',
        durationTr: '5-7 Gün',
        durationEn: '5-7 Days',
        descriptionAr: 'موقع عرض منتجات بسيط وأنيق',
        descriptionTr: 'Basit ve şık ürün vitrini sitesi',
        descriptionEn: 'Simple and elegant product showcase site',
        featuresAr: [
            'عرض المنتجات بشكل جذاب',
            'تصميم متجاوب 100%',
            'تكامل واتساب مباشر',
            'معرض صور احترافي',
            'صفحة واحدة (Single Page)',
            'استضافة مجانية لمدة شهر (vercel)',
            'دعم فني لمدة أسبوع'
        ],
        featuresTr: [
            'Çekici ürün gösterimi',
            '%100 responsive tasarım',
            'Doğrudan WhatsApp entegrasyonu',
            'Profesyonel fotoğraf galerisi',
            'Tek sayfa (Single Page)',
            '1 aylık ücretsiz hosting (vercel)',
            '1 hafta teknik destek'
        ],
        featuresEn: [
            'Attractive product display',
            '100% responsive design',
            'Direct WhatsApp integration',
            'Professional photo gallery',
            'Single Page layout',
            '1 month free hosting (vercel)',
            '1 week technical support'
        ]
    },
    {
        id: 'standard',
        nameAr: 'موقع بميزات متوسطة',
        nameTr: 'Orta Özellikli Site',
        nameEn: 'Medium Features Site',
        price: '100',
        durationAr: '10-14 يوم',
        durationTr: '10-14 Gün',
        durationEn: '10-14 Days',
        badgeAr: 'الأكثر طلباً',
        badgeTr: 'En Çok Talep Edilen',
        badgeEn: 'Most Popular',
        descriptionAr: 'موقع متكامل مع ميزات تفاعلية',
        descriptionTr: 'İnteraktif özelliklere sahip tam site',
        descriptionEn: 'Full website with interactive features',
        featuresAr: [
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
        featuresTr: [
            'Temel paketin tüm özellikleri',
            'İnteraktif alışveriş sepeti',
            'Gelişmiş arama ve filtreleme sistemi',
            'Çoklu sayfalar',
            'Basit kontrol paneli',
            'Ziyaretçi analitikleri (Analytics)',
            'SEO optimizasyonu',
            '1 aylık ücretsiz hosting (vercel)',
            'Siteyi internete yükleme desteği',
            '1 aylık teknik destek'
        ],
        featuresEn: [
            'All basic package features',
            'Interactive shopping cart',
            'Advanced search and filter system',
            'Multiple pages',
            'Simple control panel',
            'Visitor analytics',
            'SEO optimization',
            '1 month free hosting (vercel)',
            'Help with deploying online',
            '1 month technical support'
        ]
    },
    {
        id: 'premium',
        nameAr: 'موقع متكامل',
        nameTr: 'Tam Entegre Site',
        nameEn: 'Fully Integrated Site',
        price: '250',
        durationAr: '20-30 يوم',
        durationTr: '20-30 Gün',
        durationEn: '20-30 Days',
        badgeAr: 'الأفضل',
        badgeTr: 'En İyi',
        badgeEn: 'Best Value',
        descriptionAr: 'حل شامل مع جميع الميزات المتقدمة',
        descriptionTr: 'Tüm gelişmiş özelliklere sahip kapsamlı çözüm',
        descriptionEn: 'Comprehensive solution with all advanced features',
        featuresAr: [
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
        featuresTr: [
            'Orta paketin tüm özellikleri',
            'Elektronik ödeme sistemi',
            'Tam içerik yönetim sistemi (CMS)',
            'Gelişmiş kontrol paneli',
            'Mobil uygulama (opsiyonel)',
            'Sosyal medya entegrasyonu',
            'Gelişmiş bildirim sistemi',
            'Detaylı raporlar ve istatistikler',
            'Müşteri ve kullanıcı sistemi',
            '1 aylık ücretsiz hosting (vercel)',
            '2 aylık teknik destek',
            'Ücretsiz sistem eğitimi'
        ],
        featuresEn: [
            'All medium package features',
            'Electronic payment gateway',
            'Full Content Management System (CMS)',
            'Advanced control panel',
            'Mobile app (optional)',
            'Social media integration',
            'Advanced notification system',
            'Detailed reports and statistics',
            'Customer and user system',
            '1 month free hosting (vercel)',
            '2 months technical support',
            'Free system training'
        ]
    }
];

export const getServiceById = (id) => {
    return services.find(service => service.id === id);
};
