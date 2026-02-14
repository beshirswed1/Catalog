// ملفات الترجمة - عربي، تركي، إنجليزي
export const translations = {
    ar: {
        dir: 'rtl',
        lang: 'ar',
        label: 'العربية',
        flag: '🇸🇦',

        // Navbar
        nav: {
            logo: 'الكاتالوج',
            home: 'الرئيسية',
            services: 'الخدمات',
            projects: 'المشاريع',
            skills: 'المهارات',
            contact: 'تواصل معنا',
            cart: 'عربة التسوق',
            menu: 'القائمة',
        },

        // Hero
        hero: {
            badge: 'مرحباً بك في عالم التطوير الاحترافي',
            titleLine1: 'أبني لك موقعاً',
            titleLine2: 'يُحقق أهدافك',
            subtitle1: 'أقدم حلول ويب احترافية تناسب احتياجاتك - من كتالوج بسيط إلى منصة متكاملة',
            subtitle2: 'مع تصميم عصري وأداء عالي وتجربة مستخدم استثنائية',
            stat1Number: '12+',
            stat1Label: 'مشروع ناجح',
            stat2Number: '12+',
            stat2Label: 'عميل سعيد',
            stat3Number: '100%',
            stat3Label: 'رضا العملاء',
            ctaBrowse: 'تصفّح الخدمات',
            ctaContact: 'تواصل معنا',
            featureSpeed: 'سرعة فائقة',
            featureResponsive: 'متجاوب 100%',
            featureDesign: 'تصميم عصري',
            featureSecurity: 'آمن تماماً',
            featureSeo: 'دعم محركات البحث',
            featureExtra: 'خدمات اضافيه',
            scrollDown: 'اسحب للأسفل',
        },

        // Pricing / Services
        pricing: {
            title: 'خدماتنا',
            subtitle: 'اختر الباقة المناسبة لاحتياجاتك - من كتالوج بسيط إلى منصة متكاملة',
            customTitle: 'هل تحتاج شيئاً مخصصاً؟',
            customText: 'نحن نقدم حلول مخصصة تماماً لاحتياجاتك. تواصل معنا لمناقشة مشروعك!',
            addToCart: 'أضف للسلة',
            inquiry: 'استفسار',
        },

        // Services data
        serviceBasic: {
            name: 'كتالوج فقط',
            duration: '5-7 أيام',
            description: 'موقع عرض منتجات بسيط وأنيق',
            features: [
                'عرض المنتجات بشكل جذاب',
                'تصميم متجاوب 100%',
                'تكامل واتساب مباشر',
                'معرض صور احترافي',
                'صفحة واحدة (Single Page)',
                'استضافة مجانية لمدة شهر (vercel)',
                'دعم فني لمدة أسبوع'
            ]
        },
        serviceStandard: {
            name: 'موقع بميزات متوسطة',
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
            ]
        },
        servicePremium: {
            name: 'موقع متكامل',
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
            ]
        },

        // Projects
        projectsSection: {
            title: 'مشاريعنا',
            subtitle: 'تصفح مجموعة من المشاريع الناجحة التي أنجزناها لعملائنا',
            requestSimilar: 'اطلب مشابه',
            viewDetails: 'عرض التفاصيل',
            categoryBasic: 'أساسي',
            categoryStandard: 'متوسط',
            categoryPremium: 'متكامل',
        },

        // Skills
        skillsSection: {
            title: 'مهاراتنا التقنية',
            subtitle: 'نستخدم أحدث التقنيات لبناء حلول ويب عصرية وفعالة',
        },

        // Skills descriptions
        skillDescriptions: {
            react: 'بناء تطبيقات ويب حديثة وسريعة',
            javascript: 'لغة البرمجة الأساسية للويب',
            redux: 'إدارة حالة التطبيقات المعقدة',
            css: 'تصميم واجهات مستخدم جذابة',
            responsive: 'تصميم متجاوب لجميع الأجهزة',
            nodejs: 'بناء خوادم وواجهات برمجية',
            firebase: 'قواعد بيانات وخدمات سحابية',
            git: 'إدارة الإصدارات والتعاون',
            uiux: 'تصميم تجربة مستخدم مميزة',
            seo: 'تحسين محركات البحث',
            performance: 'تحسين سرعة وأداء المواقع',
            api: 'التكامل مع خدمات خارجية',
            typescript: 'تطوير آمن وقوي',
            tailwind: 'تنسيق سريع ومرن',
            bootstrap: 'واجهات متجاوبة جاهزة',
            nextjs: 'بناء تطبيقات ويب حديثة وسريعة',
        },

        // Contact
        contactSection: {
            title: 'هل أنت مستعد لبدء مشروعك؟',
            subtitle: 'تواصل معنا الآن ودعنا نحول فكرتك إلى واقع رقمي مميز',
            fastReply: 'رد سريع',
            fastReplyText: 'نرد خلال 24 ساعة',
            freeConsult: 'استشارة مجانية',
            freeConsultText: 'نناقش مشروعك بالتفصيل',
            customSolutions: 'حلول مخصصة',
            customSolutionsText: 'نصمم حسب احتياجاتك',
            whatsappBtn: 'تواصل عبر واتساب',
        },

        // Cart
        cart: {
            title: 'سلة الطلبات',
            close: 'إغلاق',
            empty: 'السلة فارغة',
            emptySubtext: 'أضف خدمة لتبدأ',
            delete: 'حذف',
            moreFeatures: 'ميزة أخرى',
            total: 'المجموع الكلي:',
            sendOrder: 'أرسل الطلب عبر واتساب',
            clearCart: 'إفراغ السلة',
        },

        // Footer
        footer: {
            logoText: 'بورتفوليو',
            description: 'نبني مواقع ويب احترافية تحقق أهدافك وتنمي أعمالك',
            quickLinks: 'روابط سريعة',
            contactUs: 'تواصل معنا',
            followUs: 'تابعنا',
            copyright: 'جميع الحقوق محفوظة',
            madeBy: 'صُنع بواسطة بشير سويد',
        },

        // WhatsApp
        whatsapp: {
            ariaLabel: 'تواصل عبر واتساب',
            title: 'تواصل معنا عبر واتساب',
        },

        // Project Detail Page
        projectDetail: {
            notFound: 'المشروع غير موجود',
            backHome: 'العودة للرئيسية',
            backToProjects: 'العودة للمشاريع',
            catalogOnly: 'كتالوج فقط',
            mediumFeatures: 'ميزات متوسطة',
            integrated: 'متكامل',
            technologies: 'تقنية',
            overview: 'نظرة عامة',
            techUsed: 'التقنيات المستخدمة',
            mainFeatures: 'المميزات الرئيسية',
            wantSimilar: 'هل تريد مشروعاً مشابهاً؟',
            wantSimilarText: 'تواصل معنا الآن لمناقشة مشروعك والحصول على عرض سعر مخصص',
            requestSimilar: 'اطلب مشروع مشابه',
            browseServices: 'تصفح الخدمات',
        },
    },

    tr: {
        dir: 'ltr',
        lang: 'tr',
        label: 'Türkçe',
        flag: '🇹🇷',

        // Navbar
        nav: {
            logo: 'Katalog',
            home: 'Ana Sayfa',
            services: 'Hizmetler',
            projects: 'Projeler',
            skills: 'Yetenekler',
            contact: 'İletişim',
            cart: 'Sepet',
            menu: 'Menü',
        },

        // Hero
        hero: {
            badge: 'Profesyonel geliştirme dünyasına hoş geldiniz',
            titleLine1: 'Sizin için bir web sitesi',
            titleLine2: 'inşa ediyoruz',
            subtitle1: 'İhtiyaçlarınıza uygun profesyonel web çözümleri sunuyoruz - basit katalogdan tam entegre platforma',
            subtitle2: 'Modern tasarım, yüksek performans ve olağanüstü kullanıcı deneyimi',
            stat1Number: '12+',
            stat1Label: 'Başarılı Proje',
            stat2Number: '12+',
            stat2Label: 'Mutlu Müşteri',
            stat3Number: '100%',
            stat3Label: 'Müşteri Memnuniyeti',
            ctaBrowse: 'Hizmetleri İncele',
            ctaContact: 'Bize Ulaşın',
            featureSpeed: 'Süper Hızlı',
            featureResponsive: '%100 Responsive',
            featureDesign: 'Modern Tasarım',
            featureSecurity: 'Tam Güvenlik',
            featureSeo: 'SEO Desteği',
            featureExtra: 'Ek Hizmetler',
            scrollDown: 'Aşağı kaydırın',
        },

        // Pricing / Services
        pricing: {
            title: 'Hizmetlerimiz',
            subtitle: 'İhtiyaçlarınıza uygun paketi seçin - basit katalogdan tam entegre platforma',
            customTitle: 'Özel bir şeye mi ihtiyacınız var?',
            customText: 'İhtiyaçlarınıza tam olarak uygun çözümler sunuyoruz. Projenizi tartışmak için bizimle iletişime geçin!',
            addToCart: 'Sepete Ekle',
            inquiry: 'Soru Sor',
        },

        // Services data
        serviceBasic: {
            name: 'Sadece Katalog',
            duration: '5-7 gün',
            description: 'Basit ve şık ürün vitrini sitesi',
            features: [
                'Çekici ürün gösterimi',
                '%100 responsive tasarım',
                'Doğrudan WhatsApp entegrasyonu',
                'Profesyonel fotoğraf galerisi',
                'Tek sayfa (Single Page)',
                '1 aylık ücretsiz hosting (vercel)',
                '1 hafta teknik destek'
            ]
        },
        serviceStandard: {
            name: 'Orta Özellikli Site',
            duration: '10-14 gün',
            badge: 'En Çok Talep Edilen',
            description: 'İnteraktif özelliklere sahip tam site',
            features: [
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
            ]
        },
        servicePremium: {
            name: 'Tam Entegre Site',
            duration: '20-30 gün',
            badge: 'En İyi',
            description: 'Tüm gelişmiş özelliklere sahip kapsamlı çözüm',
            features: [
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
            ]
        },

        // Projects
        projectsSection: {
            title: 'Projelerimiz',
            subtitle: 'Müşterilerimiz için tamamladığımız başarılı projelere göz atın',
            requestSimilar: 'Benzerini İste',
            viewDetails: 'Detayları Gör',
            categoryBasic: 'Temel',
            categoryStandard: 'Orta',
            categoryPremium: 'Tam',
        },

        // Skills
        skillsSection: {
            title: 'Teknik Yeteneklerimiz',
            subtitle: 'Modern ve etkili web çözümleri oluşturmak için en son teknolojileri kullanıyoruz',
        },

        // Skills descriptions
        skillDescriptions: {
            react: 'Modern ve hızlı web uygulamaları geliştirme',
            javascript: 'Web için temel programlama dili',
            redux: 'Karmaşık uygulama durumu yönetimi',
            css: 'Çekici kullanıcı arayüzleri tasarlama',
            responsive: 'Tüm cihazlar için responsive tasarım',
            nodejs: 'Sunucu ve API geliştirme',
            firebase: 'Veritabanı ve bulut hizmetleri',
            git: 'Sürüm kontrolü ve işbirliği',
            uiux: 'Benzersiz kullanıcı deneyimi tasarımı',
            seo: 'Arama motoru optimizasyonu',
            performance: 'Site hızı ve performans optimizasyonu',
            api: 'Harici hizmetlerle entegrasyon',
            typescript: 'Güvenli ve güçlü geliştirme',
            tailwind: 'Hızlı ve esnek stil',
            bootstrap: 'Hazır responsive arayüzler',
            nextjs: 'Modern ve hızlı web uygulamaları geliştirme',
        },

        // Contact
        contactSection: {
            title: 'Projenize başlamaya hazır mısınız?',
            subtitle: 'Şimdi bizimle iletişime geçin ve fikrinizi dijital gerçekliğe dönüştürelim',
            fastReply: 'Hızlı Yanıt',
            fastReplyText: '24 saat içinde yanıt veriyoruz',
            freeConsult: 'Ücretsiz Danışmanlık',
            freeConsultText: 'Projenizi detaylı tartışıyoruz',
            customSolutions: 'Özel Çözümler',
            customSolutionsText: 'İhtiyaçlarınıza göre tasarlıyoruz',
            whatsappBtn: 'WhatsApp ile İletişim',
        },

        // Cart
        cart: {
            title: 'Sipariş Sepeti',
            close: 'Kapat',
            empty: 'Sepet boş',
            emptySubtext: 'Başlamak için bir hizmet ekleyin',
            delete: 'Sil',
            moreFeatures: 'daha fazla özellik',
            total: 'Toplam:',
            sendOrder: 'WhatsApp ile Sipariş Gönder',
            clearCart: 'Sepeti Temizle',
        },

        // Footer
        footer: {
            logoText: 'Portföy',
            description: 'Hedeflerinizi gerçekleştiren ve işinizi büyüten profesyonel web siteleri inşa ediyoruz',
            quickLinks: 'Hızlı Bağlantılar',
            contactUs: 'Bize Ulaşın',
            followUs: 'Bizi Takip Edin',
            copyright: 'Tüm hakları saklıdır',
            madeBy: 'Beşir Süved tarafından yapıldı',
        },

        // WhatsApp
        whatsapp: {
            ariaLabel: 'WhatsApp ile iletişim',
            title: 'WhatsApp ile bize ulaşın',
        },

        // Project Detail Page
        projectDetail: {
            notFound: 'Proje bulunamadı',
            backHome: 'Ana Sayfaya Dön',
            backToProjects: 'Projelere Dön',
            catalogOnly: 'Sadece Katalog',
            mediumFeatures: 'Orta Özellikler',
            integrated: 'Tam Entegre',
            technologies: 'teknoloji',
            overview: 'Genel Bakış',
            techUsed: 'Kullanılan Teknolojiler',
            mainFeatures: 'Ana Özellikler',
            wantSimilar: 'Benzer bir proje mi istiyorsunuz?',
            wantSimilarText: 'Projenizi tartışmak ve özel bir fiyat teklifi almak için şimdi bizimle iletişime geçin',
            requestSimilar: 'Benzer Proje Talep Et',
            browseServices: 'Hizmetleri İncele',
        },
    },

    en: {
        dir: 'ltr',
        lang: 'en',
        label: 'English',
        flag: '🇬🇧',

        // Navbar
        nav: {
            logo: 'Catalog',
            home: 'Home',
            services: 'Services',
            projects: 'Projects',
            skills: 'Skills',
            contact: 'Contact Us',
            cart: 'Shopping Cart',
            menu: 'Menu',
        },

        // Hero
        hero: {
            badge: 'Welcome to the world of professional development',
            titleLine1: 'I build websites',
            titleLine2: 'that achieve your goals',
            subtitle1: 'Professional web solutions tailored to your needs - from a simple catalog to a fully integrated platform',
            subtitle2: 'With modern design, high performance, and exceptional user experience',
            stat1Number: '12+',
            stat1Label: 'Successful Projects',
            stat2Number: '12+',
            stat2Label: 'Happy Clients',
            stat3Number: '100%',
            stat3Label: 'Client Satisfaction',
            ctaBrowse: 'Browse Services',
            ctaContact: 'Contact Us',
            featureSpeed: 'Super Fast',
            featureResponsive: '100% Responsive',
            featureDesign: 'Modern Design',
            featureSecurity: 'Fully Secure',
            featureSeo: 'SEO Optimized',
            featureExtra: 'Extra Services',
            scrollDown: 'Scroll Down',
        },

        // Pricing / Services
        pricing: {
            title: 'Our Services',
            subtitle: 'Choose the package that fits your needs - from a simple catalog to a fully integrated platform',
            customTitle: 'Need something custom?',
            customText: 'We offer solutions fully tailored to your needs. Contact us to discuss your project!',
            addToCart: 'Add to Cart',
            inquiry: 'Inquire',
        },

        // Services data
        serviceBasic: {
            name: 'Catalog Only',
            duration: '5-7 days',
            description: 'Simple and elegant product showcase site',
            features: [
                'Attractive product display',
                '100% responsive design',
                'Direct WhatsApp integration',
                'Professional photo gallery',
                'Single Page layout',
                '1 month free hosting (vercel)',
                '1 week technical support'
            ]
        },
        serviceStandard: {
            name: 'Medium Features',
            duration: '10-14 days',
            badge: 'Most Popular',
            description: 'Full website with interactive features',
            features: [
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
        servicePremium: {
            name: 'Fully Integrated',
            duration: '20-30 days',
            badge: 'Best Value',
            description: 'Comprehensive solution with all advanced features',
            features: [
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
        },

        // Projects
        projectsSection: {
            title: 'Our Projects',
            subtitle: 'Browse a collection of successful projects we delivered for our clients',
            requestSimilar: 'Request Similar',
            viewDetails: 'View Details',
            categoryBasic: 'Basic',
            categoryStandard: 'Standard',
            categoryPremium: 'Premium',
        },

        // Skills
        skillsSection: {
            title: 'Our Technical Skills',
            subtitle: 'We use the latest technologies to build modern and effective web solutions',
        },

        // Skills descriptions
        skillDescriptions: {
            react: 'Building modern and fast web applications',
            javascript: 'The core programming language for the web',
            redux: 'Complex application state management',
            css: 'Designing attractive user interfaces',
            responsive: 'Responsive design for all devices',
            nodejs: 'Building servers and APIs',
            firebase: 'Database and cloud services',
            git: 'Version control and collaboration',
            uiux: 'Designing unique user experiences',
            seo: 'Search engine optimization',
            performance: 'Website speed and performance optimization',
            api: 'Integration with external services',
            typescript: 'Safe and robust development',
            tailwind: 'Fast and flexible styling',
            bootstrap: 'Ready-made responsive interfaces',
            nextjs: 'Building modern and fast web applications',
        },

        // Contact
        contactSection: {
            title: 'Ready to start your project?',
            subtitle: 'Contact us now and let us turn your idea into a remarkable digital reality',
            fastReply: 'Fast Reply',
            fastReplyText: 'We respond within 24 hours',
            freeConsult: 'Free Consultation',
            freeConsultText: 'We discuss your project in detail',
            customSolutions: 'Custom Solutions',
            customSolutionsText: 'We design according to your needs',
            whatsappBtn: 'Contact via WhatsApp',
        },

        // Cart
        cart: {
            title: 'Order Cart',
            close: 'Close',
            empty: 'Cart is empty',
            emptySubtext: 'Add a service to get started',
            delete: 'Delete',
            moreFeatures: 'more features',
            total: 'Grand Total:',
            sendOrder: 'Send Order via WhatsApp',
            clearCart: 'Clear Cart',
        },

        // Footer
        footer: {
            logoText: 'Portfolio',
            description: 'We build professional websites that achieve your goals and grow your business',
            quickLinks: 'Quick Links',
            contactUs: 'Contact Us',
            followUs: 'Follow Us',
            copyright: 'All rights reserved',
            madeBy: 'Made by Beshir Swed',
        },

        // WhatsApp
        whatsapp: {
            ariaLabel: 'Contact via WhatsApp',
            title: 'Contact us via WhatsApp',
        },

        // Project Detail Page
        projectDetail: {
            notFound: 'Project not found',
            backHome: 'Back to Home',
            backToProjects: 'Back to Projects',
            catalogOnly: 'Catalog Only',
            mediumFeatures: 'Medium Features',
            integrated: 'Fully Integrated',
            technologies: 'technologies',
            overview: 'Overview',
            techUsed: 'Technologies Used',
            mainFeatures: 'Key Features',
            wantSimilar: 'Want a similar project?',
            wantSimilarText: 'Contact us now to discuss your project and get a custom quote',
            requestSimilar: 'Request Similar Project',
            browseServices: 'Browse Services',
        },
    },
};

export const supportedLanguages = ['ar', 'tr', 'en'];

export const getTranslation = (lang, path) => {
    const keys = path.split('.');
    let result = translations[lang];
    for (const key of keys) {
        if (result && result[key] !== undefined) {
            result = result[key];
        } else {
            // Fallback to Arabic
            result = translations['ar'];
            for (const k of keys) {
                if (result && result[k] !== undefined) {
                    result = result[k];
                } else {
                    return path;
                }
            }
            return result;
        }
    }
    return result;
};
