// المهارات التقنية
export const skills = [
    {
        id: 1,
        name: 'React ',
        icon: 'faReact',
        level: 95,
        category: 'frontend',
        description: 'بناء تطبيقات ويب حديثة وسريعة'
    },
    {
        id: 2,
        name: 'JavaScript / ES6+',
        icon: 'faJs',
        level: 90,
        category: 'frontend',
        description: 'لغة البرمجة الأساسية للويب'
    },
    {
        id: 3,
        name: 'Redux Toolkit',
        icon: 'faAtom', // Using React icon as a fallback for Redux (since Toolkit is related) or faCode
        level: 85,
        category: 'frontend',
        description: 'إدارة حالة التطبيقات المعقدة'
    },
    {
        id: 4,
        name: 'CSS ',
        icon: 'faCss3',
        level: 92,
        category: 'frontend',
        description: 'تصميم واجهات مستخدم جذابة'
    },
    {
        id: 5,
        name: 'Responsive Design',
        icon: 'faMobileScreenButton',
        level: 98,
        category: 'design',
        description: 'تصميم متجاوب لجميع الأجهزة'
    },
    {
        id: 6,
        name: 'Node.js ',
        icon: 'faNode',
        level: 80,
        category: 'backend',
        description: 'بناء خوادم وواجهات برمجية'
    },
    {
        id: 7,
        name: 'Firebase',
        icon: 'faDatabase', // Using database icon for Firebase
        level: 75,
        category: 'backend',
        description: 'قواعد بيانات وخدمات سحابية'
    },
    {
        id: 8,
        name: 'Git & GitHub',
        icon: 'faGithub',
        level: 88,
        category: 'tools',
        description: 'إدارة الإصدارات والتعاون'
    },
    {
        id: 9,
        name: 'UI/UX Design',
        icon: 'faCompassDrafting',
        level: 85,
        category: 'design',
        description: 'تصميم تجربة مستخدم مميزة'
    },
    {
        id: 10,
        name: 'SEO Optimization',
        icon: 'faSearch',
        level: 82,
        category: 'marketing',
        description: 'تحسين محركات البحث'
    },
    {
        id: 11,
        name: 'Performance Optimization',
        icon: 'faChartSimple',
        level: 87,
        category: 'optimization',
        description: 'تحسين سرعة وأداء المواقع'
    },
    {
        id: 12,
        name: 'API Integration',
        icon: 'faLaptopCode',
        level: 83,
        category: 'backend',
        description: 'التكامل مع خدمات خارجية'
    },
    {
        id: 13,
        name: 'TypeScript',
        icon: 'faCode', // Using code icon for TS
        level: 95,
        category: 'frontend',
        description: 'تطوير آمن وقوي'
    },
    {
        id: 14,
        name: 'Tailwind CSS',
        icon: 'faCss3', // Using CSS3 icon for Tailwind
        level: 95,
        category: 'frontend',
        description: 'تنسيق سريع ومرن'
    },
    {
        id: 15,
        name: 'Bootstrap',
        icon: 'faBootstrap',
        level: 95,
        category: 'frontend',
        description: 'واجهات متجاوبة جاهزة'
    },
    {
        id: 16,
        name: 'Next.js',
        icon: 'faNextjs',
        level: 95,
        category: 'frontend',
        description: 'بناء تطبيقات ويب حديثة وسريعة'
    }
];

// دالة للحصول على المهارات حسب الفئة
export const getSkillsByCategory = (category) => {
    return skills.filter(skill => skill.category === category);
};

// دالة للحصول على أفضل المهارات
export const getTopSkills = (count = 6) => {
    return skills
        .sort((a, b) => b.level - a.level)
        .slice(0, count);
};

// فئات المهارات
export const skillCategories = [
    { id: 'frontend', name: 'تطوير الواجهات', icon: 'faDesktop' },
    { id: 'backend', name: 'تطوير الخوادم', icon: 'faServer' },
    { id: 'design', name: 'التصميم', icon: 'faPalette' },
    { id: 'tools', name: 'الأدوات', icon: 'faTools' },
    { id: 'marketing', name: 'التسويق', icon: 'faChartLine' },
    { id: 'optimization', name: 'التحسين', icon: 'faBolt' }
];
