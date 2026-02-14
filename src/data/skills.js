// المهارات التقنية - مع دعم اللغات
export const skills = [
    {
        id: 1,
        name: 'React',
        icon: 'faReact',
        level: 95,
        category: 'frontend',
        descriptionAr: 'بناء تطبيقات ويب حديثة وسريعة',
        descriptionTr: 'Modern ve hızlı web uygulamaları geliştirme',
        descriptionEn: 'Building modern and fast web applications'
    },
    {
        id: 2,
        name: 'JavaScript / ES6+',
        icon: 'faJs',
        level: 90,
        category: 'frontend',
        descriptionAr: 'لغة البرمجة الأساسية للويب',
        descriptionTr: 'Web için temel programlama dili',
        descriptionEn: 'The core programming language for the web'
    },
    {
        id: 3,
        name: 'Redux Toolkit',
        icon: 'faAtom',
        level: 85,
        category: 'frontend',
        descriptionAr: 'إدارة حالة التطبيقات المعقدة',
        descriptionTr: 'Karmaşık uygulama durumu yönetimi',
        descriptionEn: 'Complex application state management'
    },
    {
        id: 4,
        name: 'CSS / Sass',
        icon: 'faCss3',
        level: 92,
        category: 'frontend',
        descriptionAr: 'تصميم واجهات مستخدم جذابة',
        descriptionTr: 'Çekici kullanıcı arayüzleri tasarlama',
        descriptionEn: 'Designing attractive user interfaces'
    },
    {
        id: 5,
        name: 'Responsive Design',
        icon: 'faMobileScreenButton',
        level: 98,
        category: 'design',
        descriptionAr: 'تصميم متجاوب لجميع الأجهزة',
        descriptionTr: 'Tüm cihazlar için responsive tasarım',
        descriptionEn: 'Responsive design for all devices'
    },
    {
        id: 6,
        name: 'Node.js',
        icon: 'faNode',
        level: 80,
        category: 'backend',
        descriptionAr: 'بناء خوادم وواجهات برمجية',
        descriptionTr: 'Sunucu ve API geliştirme',
        descriptionEn: 'Building servers and APIs'
    },
    {
        id: 7,
        name: 'Firebase',
        icon: 'faDatabase',
        level: 75,
        category: 'backend',
        descriptionAr: 'قواعد بيانات وخدمات سحابية',
        descriptionTr: 'Veritabanı ve bulut hizmetleri',
        descriptionEn: 'Database and cloud services'
    },
    {
        id: 8,
        name: 'Git & GitHub',
        icon: 'faGithub',
        level: 88,
        category: 'tools',
        descriptionAr: 'إدارة الإصدارات والتعاون',
        descriptionTr: 'Sürüm kontrolü ve işbirliği',
        descriptionEn: 'Version control and collaboration'
    },
    {
        id: 9,
        name: 'UI/UX Design',
        icon: 'faCompassDrafting',
        level: 85,
        category: 'design',
        descriptionAr: 'تصميم تجربة مستخدم مميزة',
        descriptionTr: 'Benzersiz kullanıcı deneyimi tasarımı',
        descriptionEn: 'Designing unique user experiences'
    },
    {
        id: 10,
        name: 'SEO Optimization',
        icon: 'faSearch',
        level: 82,
        category: 'marketing',
        descriptionAr: 'تحسين محركات البحث',
        descriptionTr: 'Arama motoru optimizasyonu',
        descriptionEn: 'Search engine optimization'
    },
    {
        id: 11,
        name: 'Performance Optimization',
        icon: 'faChartSimple',
        level: 87,
        category: 'optimization',
        descriptionAr: 'تحسين سرعة وأداء المواقع',
        descriptionTr: 'Site hızı ve performans optimizasyonu',
        descriptionEn: 'Website speed and performance optimization'
    },
    {
        id: 12,
        name: 'API Integration',
        icon: 'faLaptopCode',
        level: 83,
        category: 'backend',
        descriptionAr: 'التكامل مع خدمات خارجية',
        descriptionTr: 'Harici hizmetlerle entegrasyon',
        descriptionEn: 'Integration with external services'
    },
    {
        id: 13,
        name: 'TypeScript',
        icon: 'faCode',
        level: 95,
        category: 'frontend',
        descriptionAr: 'تطوير آمن وقوي',
        descriptionTr: 'Güvenli ve güçlü geliştirme',
        descriptionEn: 'Safe and robust development'
    },
    {
        id: 14,
        name: 'Tailwind CSS',
        icon: 'faCss3',
        level: 95,
        category: 'frontend',
        descriptionAr: 'تنسيق سريع ومرن',
        descriptionTr: 'Hızlı ve esnek stil',
        descriptionEn: 'Fast and flexible styling'
    },
    {
        id: 15,
        name: 'Bootstrap',
        icon: 'faBootstrap',
        level: 95,
        category: 'frontend',
        descriptionAr: 'واجهات متجاوبة جاهزة',
        descriptionTr: 'Hazır responsive arayüzler',
        descriptionEn: 'Ready-made responsive interfaces'
    },
    {
        id: 16,
        name: 'Next.js',
        icon: 'faNextjs',
        level: 95,
        category: 'frontend',
        descriptionAr: 'بناء تطبيقات ويب حديثة وسريعة',
        descriptionTr: 'Modern ve hızlı web uygulamaları geliştirme',
        descriptionEn: 'Building modern and fast web applications'
    }
];

// فئات المهارات المترجمة
export const skillCategories = [
    {
        id: 'frontend',
        nameAr: 'تطوير الواجهات',
        nameTr: 'Frontend Geliştirme',
        nameEn: 'Frontend Development',
        icon: 'faDesktop'
    },
    {
        id: 'backend',
        nameAr: 'تطوير الخوادم',
        nameTr: 'Backend Geliştirme',
        nameEn: 'Backend Development',
        icon: 'faServer'
    },
    {
        id: 'design',
        nameAr: 'التصميم',
        nameTr: 'Tasarım',
        nameEn: 'Design',
        icon: 'faPalette'
    },
    {
        id: 'tools',
        nameAr: 'الأدوات',
        nameTr: 'Araçlar',
        nameEn: 'Tools',
        icon: 'faTools'
    },
    {
        id: 'marketing',
        nameAr: 'التسويق',
        nameTr: 'Pazarlama',
        nameEn: 'Marketing',
        icon: 'faChartLine'
    },
    {
        id: 'optimization',
        nameAr: 'التحسين',
        nameTr: 'Optimizasyon',
        nameEn: 'Optimization',
        icon: 'faBolt'
    }
];

export const getSkillsByCategory = (category) => {
    return skills.filter(skill => skill.category === category);
};

export const getTopSkills = (count = 6) => {
    return [...skills]
        .sort((a, b) => b.level - a.level)
        .slice(0, count);
};
