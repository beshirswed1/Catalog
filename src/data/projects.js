
// المشاريع السابقة - مع دعم اللغات (العربية، التركية، الإنجليزية)
export const projects = [
    {
        id: 1,
        titleAr: 'أثر – إدارة مكتبتك الإلكترونية',
        titleTr: 'Athar – Kişisel Dijital Kütüphane Yöneticisi',
        titleEn: 'Athar – Personal Digital Library Manager',
        descriptionAr: 'منصة ويب متكاملة لإدارة المكتبة الشخصية رقمياً، تعالج مشكلة فقدان تتبع الكتب المقروءة والمخطط لقراءتها. توفر نظام تصنيف وتتبع حالة القراءة مع إحصائيات دقيقة. تعتمد على Next.js و Redux Toolkit و Firebase.',
        descriptionTr: 'Kişisel dijital kütüphanenizi yönetmek için kapsamlı bir web platformu. Okunan ve okunması planlanan kitapları istatistiklerle takip eder. Next.js, Redux Toolkit ve Firebase ile geliştirilmiştir.',
        descriptionEn: 'A comprehensive web platform for managing your personal digital library. It solves the problem of tracking read and planned books with accurate statistics. Built with Next.js, Redux Toolkit, and Firebase.',
        image: '/images/athar.png',
        tags: ['Next.js', 'React', 'Redux Toolkit', 'Firebase', 'Firestore', 'TailwindCSS'],
        category: 'productivity',
        year: 2025,
        featuresAr: [
            'نظام تسجيل دخول باستخدام Firebase',
            'إدارة حالات الكتب: مخطط، قيد القراءة، منتهٍ',
            'إحصائيات ديناميكية لسجل التقدم',
            'إضافة مراجعات شخصية',
            'وضع ليلي (Dark Mode)',
            'تصميم متجاوب 100%'
        ],
        featuresTr: [
            'Firebase ile giriş sistemi',
            'Kitap durum yönetimi: Planlanan, Okunuyor, Tamamlandı',
            'Dinamik ilerleme istatistikleri',
            'Kişisel inceleme ekleme',
            'Gece Modu (Dark Mode)',
            '%100 Responsive tasarım'
        ],
        featuresEn: [
            'Authentication with Firebase',
            'Book status management: Planned, Reading, Finished',
            'Dynamic progress statistics',
            'Adding personal reviews',
            'Dark Mode support',
            '100% Responsive design'
        ]
    },

    {
        id: 2,
        titleAr: 'متجر إلكتروني مع لوحة تحكم',
        titleTr: 'Yönetim Panelli E-Ticaret Platformu',
        titleEn: 'E-commerce Platform with Admin Dashboard',
        descriptionAr: 'منصة تجارة إلكترونية متكاملة مع فصل واضح بين طبقة العرض وطبقة البيانات. يوفر تصفية متقدمة، تصنيف ديناميكي، وإدارة سلة شراء، مع لوحة تحكم إدارية شاملة.',
        descriptionTr: 'Sunum ve veri katmanları arasında net bir ayrım sunan eksiksiz bir e-ticaret platformu. Gelişmiş filtreleme, dinamik kategorizasyon, sepet yönetimi ve kapsamlı bir yönetim paneli içerir.',
        descriptionEn: 'A complete e-commerce platform with a clear separation between presentation and data layers. Features advanced filtering, dynamic categorization, cart management, and a comprehensive admin dashboard.',
        image: '/images/ecommerce.png',
        tags: ['React', 'Redux Toolkit', 'TailwindCSS', 'Axios', 'E-commerce'],
        category: 'ecommerce',
        year: 2025,
        featuresAr: [
            'نظام تصفية متقدم (السعر، الفئة، البحث)',
            'إدارة سلة الشراء باستخدام Redux',
            'لوحة تحكم لإدارة المنتجات والمستخدمين',
            'متابعة الأرباح والإحصائيات',
            'هيكلية قابلة للتوسع'
        ],
        featuresTr: [
            'Gelişmiş filtreleme sistemi (Fiyat, Kategori, Arama)',
            'Redux ile sepet yönetimi',
            'Ürün ve kullanıcı yönetimi paneli',
            'Kazanç ve istatistik takibi',
            'Genişletilebilir mimari'
        ],
        featuresEn: [
            'Advanced filtering system (Price, Category, Search)',
            'Cart management using Redux',
            'Admin dashboard for products and users',
            'Earnings and statistics tracking',
            'Scalable architecture'
        ]
    },

    {
        id: 3,
        titleAr: 'قبو الكتب',
        titleTr: 'Kitap Mahzeni',
        titleEn: 'Book Vault',
        descriptionAr: 'منصة ويب لتجميع مصادر الكتب الرقمية وتسهيل الوصول إليها، توفر واجهة موحدة تعرض الكتب مع روابط مباشرة لمصادر خارجية.',
        descriptionTr: 'Dijital kitap kaynaklarını bir araya getiren ve erişimi kolaylaştıran bir web platformu. Harici kaynaklara doğrudan bağlantılar içeren bir arayüz sunar.',
        descriptionEn: 'A web platform to aggregate digital book resources and facilitate access, providing a unified interface with direct links to external sources.',
        image: '/images/bookvalout.png',
        tags: ['HTML', 'CSS', 'JavaScript', 'Frontend'],
        category: 'education',
        year: 2024,
        featuresAr: [
            'عرض قائمة كتب منظمة',
            'روابط مباشرة للقراءة أو الاستماع',
            'تقسيم الكتب حسب فئات أساسية',
            'بنية خفيفة وسريعة'
        ],
        featuresTr: [
            'Düzenli kitap listesi görünümü',
            'Okuma veya dinleme için doğrudan bağlantılar',
            'Temel kategorilere göre kitap ayrımı',
            'Hafif ve hızlı yapı'
        ],
        featuresEn: [
            'Organized book list display',
            'Direct links for reading or listening',
            'Book categorization by type',
            'Lightweight and fast structure'
        ]
    },
    {
        id: 4,
        titleAr: 'Bookfoliyi – بورتفوليو تفاعلي',
        titleTr: 'Bookfoliyi – İnteraktif Kitap Stili Portföy',
        titleEn: 'Bookfoliyi – Interactive Book-Style Portfolio',
        descriptionAr: 'بورتفوليو شخصي تفاعلي يحاكي تجربة تقليب صفحات كتاب حقيقي، يعتمد على تأثيرات CSS 3D Transforms لتقديم الأعمال بشكل إبداعي.',
        descriptionTr: 'Gerçek bir kitabın sayfalarını çevirme deneyimini simüle eden etkileşimli kişisel portföy. Çalışmaları yaratıcı bir şekilde sunmak için CSS 3D Dönüşümlerini kullanır.',
        descriptionEn: 'An interactive personal portfolio that simulates the experience of flipping actual book pages, using CSS 3D Transforms to present works creatively.',
        image: '/images/bookfilyo.png',
        tags: ['HTML', 'CSS', 'JavaScript', 'UI Animation'],
        category: 'portfolio',
        year: 2024,
        featuresAr: [
            'تأثير تقليب الصفحات Page Flip',
            'تصميم بأسلوب كتاب واقعي',
            'عرض المهارات والمشاريع بشكل تفاعلي',
            'أداء عالي وسلس'
        ],
        featuresTr: [
            'Sayfa çevirme (Page Flip) efekti',
            'Gerçekçi kitap stili tasarım',
            'Yeteneklerin ve projelerin etkileşimli sunumu',
            'Yüksek ve akıcı performans'
        ],
        featuresEn: [
            'Realistic Page Flip effect',
            'Book-style interactive design',
            'Interactive skills and projects display',
            'Smooth and high performance'
        ]
    },
    {
        id: 5,
        titleAr: 'متجر ساعات إلكتروني',
        titleTr: 'Saat E-Ticaret Mağazası',
        titleEn: 'Watch E-Commerce Store',
        descriptionAr: 'نموذج لمتجر إلكتروني ضخم يحتوي على مئات الصفحات الثابتة المنظمة، يغطي فئات متنوعة من الساعات مع تفاصيل كاملة لكل منتج.',
        descriptionTr: 'Yüzlerce düzenli statik sayfa içeren devasa bir e-ticaret mağazası modeli. Çeşitli saat kategorilerini ve her ürün için tam ayrıntıları kapsar.',
        descriptionEn: 'A massive e-commerce store model containing hundreds of organized static pages, covering various watch categories with full details for each product.',
        image: '/images/oclock.png',
        tags: ['HTML', 'CSS', 'E-Commerce UI'],
        category: 'ecommerce',
        year: 2024,
        featuresAr: [
            'هيكلة مئات الصفحات يدوياً',
            'تصنيف دقيق للمنتجات',
            'واجهات متناسقة وجذابة',
            'سهولة التنقل بين الفئات'
        ],
        featuresTr: [
            'Yüzlerce sayfanın manuel yapılandırılması',
            'Hassas ürün kategorizasyonu',
            'Tutarlı ve çekici arayüzler',
            'Kategoriler arası kolay gezinme'
        ],
        featuresEn: [
            'Manual construction of hundreds of pages',
            'Precise product categorization',
            'Consistent and attractive interfaces',
            'Easy navigation between categories'
        ]
    },
    {
        id: 6,
        titleAr: 'منصة خير القرون',
        titleTr: 'Khair Al-Qurun Platformu',
        titleEn: 'Khair Al-Qurun Platform',
        descriptionAr: 'منصة تعليمية تجمع محتويات علمية متنوعة في مكان واحد، تعتمد على توليد الصفحات ديناميكياً لتسهيل الوصول للمحاضرات والملفات.',
        descriptionTr: 'Çeşitli bilimsel içerikleri tek bir yerde toplayan eğitim platformu. Derslere ve dosyalara erişimi kolaylaştırmak için dinamik sayfa oluşturmayı kullanır.',
        descriptionEn: 'An educational platform that gathers diverse scientific content in one place, using dynamic page generation to facilitate access to lectures and files.',
        image: '/images/khairalquron.png',
        tags: ['JavaScript', 'TailwindCSS', 'Dynamic Pages'],
        category: 'education',
        year: 2025,
        featuresAr: [
            'توليد الصفحات ديناميكياً',
            'تنظيم المحتوى العلمي (ملخصات، تفريغات)',
            'بحث وتصفح سريع',
            'واجهة مستخدم عصرية'
        ],
        featuresTr: [
            'Dinamik sayfa oluşturma',
            'Bilimsel içerik organizasyonu (Özetler, transkriptler)',
            'Hızlı arama ve gezinme',
            'Modern kullanıcı arayüzü'
        ],
        featuresEn: [
            'Dynamic page generation',
            'Scientific content organization (Summaries, transcripts)',
            'Fast search and navigation',
            'Modern user interface'
        ]
    },
    {
        id: 7,
        titleAr: 'فوت كرافت – مستلزمات رياضية',
        titleTr: 'FootCraft – Spor Malzemeleri',
        titleEn: 'FootCraft – Sports Equipment',
        descriptionAr: 'تطبيق ويب أحادي الصفحة (SPA) متخصص في بيع مستلزمات كرة القدم، يوفر نظام فلترة متقدم وتجربة تسوق سريعة.',
        descriptionTr: 'Futbol malzemeleri satışında uzmanlaşmış tek sayfalık bir web uygulaması (SPA). Gelişmiş bir filtreleme sistemi ve hızlı bir alışveriş deneyimi sunar.',
        descriptionEn: 'A single-page web application (SPA) specialized in selling football equipment, providing an advanced filtering system and a fast shopping experience.',
        image: '/images/foot-craft.png',
        tags: ['React', 'TailwindCSS', 'SPA', 'Routing'],
        category: 'ecommerce',
        year: 2025,
        featuresAr: [
            'تطبيق SPA سريع الأداء',
            'نظام فلترة منتجات متقدم',
            'صفحات منتجات ديناميكية',
            'تكامل مع خرائط جوجل'
        ],
        featuresTr: [
            'Hızlı performanslı SPA uygulaması',
            'Gelişmiş ürün filtreleme sistemi',
            'Dinamik ürün sayfaları',
            'Google Haritalar entegrasyonu'
        ],
        featuresEn: [
            'Fast-performing SPA application',
            'Advanced product filtering system',
            'Dynamic product pages',
            'Google Maps integration'
        ]
    },
    {
        id: 8,
        titleAr: 'ويذر – تصنيف مناخ الدول',
        titleTr: 'Weather – İklim Sınıflandırma Sistemi',
        titleEn: 'Weather – Climate Classification System',
        descriptionAr: 'نظام ويب لعرض وتصنيف دول العالم حسب أنماطها المناخية، يعتمد على API خارجي لجلب البيانات والأعلام بشكل فوري.',
        descriptionTr: 'Dünya ülkelerini iklim özelliklerine göre listeleyen ve sınıflandıran bir web sistemi. Verileri ve bayrakları anlık olarak almak için harici bir API kullanır.',
        descriptionEn: 'A web system for displaying and classifying world countries by climate patterns, using an external API to fetch data and flags in real-time.',
        image: '/images/wither.png',
        tags: ['HTML', 'JavaScript', 'TailwindCSS', 'API'],
        category: 'education',
        year: 2025,
        featuresAr: [
            'جلب بيانات الدول عبر API',
            'تصنيف مناخي دقيق',
            'واجهة أحادية الصفحة',
            'بحث سريع عن الدول'
        ],
        featuresTr: [
            'API üzerinden ülke verilerini çekme',
            'Hassas iklim sınıflandırması',
            'Tek sayfalık arayüz',
            'Hızlı ülke arama'
        ],
        featuresEn: [
            'Fetching country data via API',
            'Accurate climate classification',
            'Single-page interface',
            'Fast country search'
        ]
    },
    {
        id: 9,
        titleAr: 'تغذية – مصادر السعرات',
        titleTr: 'Beslenme – Kalori Kaynağı Filtresi',
        titleEn: 'Nutrition – Calorie Source Filter',
        descriptionAr: 'تطبيق ويب يتيح للمستخدمين تصنيف الأطعمة حسب مصدر السعرات الحرارية (كربوهيدرات، بروتينات، دهون) مع تحديث فوري.',
        descriptionTr: 'Kullanıcıların yiyecekleri kalori kaynaklarına (karbonhidrat, protein, yağ) göre sınıflandırmasına olanak tanıyan, anlık güncellemeli bir web uygulaması.',
        descriptionEn: 'A web application that allows users to classify foods by calorie source (carbs, protein, fats) with real-time updates.',
        image: '/images/tagzia.png',
        tags: ['React', 'Bootstrap', 'Filtering'],
        category: 'health',
        year: 2025,
        featuresAr: [
            'فلترة أطعمة ديناميكية',
            'بنية مكونات Reusable',
            'تحديث فوري للقائمة',
            'تصميم بسيط وسهل الاستخدام'
        ],
        featuresTr: [
            'Dinamik yiyecek filtreleme',
            'Tekrar kullanılabilir bileşen yapısı',
            'Anlık liste güncellemesi',
            'Basit ve kullanıcı dostu tasarım'
        ],
        featuresEn: [
            'Dynamic food filtering',
            'Reusable component architecture',
            'Instant list updates',
            'Simple and easy-to-use design'
        ]
    },
    {
        id: 10,
        titleAr: 'متجر تجميعه – قطع كمبيوتر',
        titleTr: 'TAGMİA – Bilgisayar Mağazası',
        titleEn: 'TAGMİA – Computer E-commerce',
        descriptionAr: 'منصة تجارة إلكترونية متخصصة في قطع الحاسوب وتجميعات الألعاب، توفر نظام بحث وفلترة متطور لتسهيل الاختيار.',
        descriptionTr: 'Bilgisayar parçaları ve oyuncu sistemlerinde uzmanlaşmış bir e-ticaret platformu. Seçimi kolaylaştırmak için gelişmiş arama ve filtreleme sistemi sunar.',
        descriptionEn: 'An e-commerce platform specialized in computer parts and gaming builds, providing an advanced search and filtering system to simplify choices.',
        image: '/images/tagmia.png',
        tags: ['React', 'REST API', 'Bootstrap', 'E-commerce'],
        category: 'ecommerce',
        year: 2025,
        featuresAr: [
            'نظام تصفية متطور للمواصفات',
            'محرك بحث فوري',
            'صفحات منتجات تقنية مفصلة',
            'عرض تجميعات حاسوب جاهزة'
        ],
        featuresTr: [
            'Gelişmiş teknik özellik filtreleme',
            'Anlık arama motoru',
            'Detaylı teknik ürün sayfaları',
            'Hazır bilgisayar kasası sergileme'
        ],
        featuresEn: [
            'Advanced technical specifications filtering',
            'Instant search engine',
            'Detailed technical product pages',
            'Pre-built PC builds showcase'
        ]
    },
    {
        id: 12,
        titleAr: 'ياسمين الشام – متجر متكامل',
        titleTr: 'Yasmin Al Sham – Tam E-Ticaret',
        titleEn: 'Yasmin Al Sham – Integrated Store',
        descriptionAr: 'متجر إلكتروني يركز على إدارة السلة والمنتجات بكفاءة، مع تحسين الأداء لضمان تجربة شراء سلسة وسريعة.',
        descriptionTr: 'Sorunsuz ve hızlı bir satın alma deneyimi sağlamak için sepet ve ürün yönetimine odaklanan, performans optimizasyonlu bir e-ticaret mağazası.',
        descriptionEn: 'An e-commerce store focused on efficient cart and product management, with performance optimization to ensure a smooth and fast buying experience.',
        image: '/images/yasmine-alshaam.png',
        tags: ['Next.js', 'Redux Toolkit', 'Dynamic Routing', 'SEO'],
        category: 'ecommerce',
        year: 2025,
        featuresAr: [
            'إدارة سلة مركزية باستخدام Redux',
            'تحسين SEO قوي',
            'تحديثات فورية لحالة الطلب',
            'هيكلية برمجية منظمة'
        ],
        featuresTr: [
            'Redux ile merkezi sepet yönetimi',
            'Güçlü SEO optimizasyonu',
            'Anlık sipariş durumu güncellemeleri',
            'Düzenli yazılım mimarisi'
        ],
        featuresEn: [
            'Centralized cart management using Redux',
            'Strong SEO optimization',
            'Instant order status updates',
            'Organized software architecture'
        ]
    }
];

// دالة للحصول على مشروع بواسطة ID
export const getProjectById = (id) => {
    return projects.find(project => project.id === parseInt(id));
};

// دالة للحصول على المشاريع حسب الفئة
export const getProjectsByCategory = (category) => {
    return projects.filter(project => project.category === category);
};

// دالة للحصول على أحدث المشاريع
export const getLatestProjects = (count = 3) => {
    return [...projects]
        .sort((a, b) => b.year - a.year)
        .slice(0, count);
};
