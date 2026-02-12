// Font Awesome Icon Mapping
import {
    faMobileAlt,
    faRocket,
    faStar,
    faShoppingCart,
    faComments,
    faBriefcase,
    faHome,
    faCog,
    faProjectDiagram,
    faLightbulb,
    faEnvelope,
    faPhone,
    faMapMarkerAlt,
    faCheck,
    faTimes,
    faTrash,
    faBars,
    faChevronLeft,
    faChevronRight,
    faBolt,
    faPalette,
    faLock,
    faCode,
    faSync,
    faServer,
    faDatabase,
    faMagic,
    faSearch,
    faPlug,
    faDesktop,
    faTools,
    faChartLine,
    faHeart,
    faImage,
    faCalendar,
    faTag,
    faList,
    faCogs,
    faArrowRight,
    faArrowLeft,
    faClock,
    faMobileScreenButton,
    faCompassDrafting,
    faChartSimple,
    faLaptopCode
} from '@fortawesome/free-solid-svg-icons';

import {
    faTwitter,
    faLinkedin,
    faGithub,
    faInstagram,
    faWhatsapp,
    faReact,
    faJs,
    faCss3,
    faNode,
    faBootstrap,
    faJoomla
} from '@fortawesome/free-brands-svg-icons';

// Icon mapping object
export const iconMap = {
    // Services & Features
    faMobileAlt,
    faRocket,
    faStar,
    faBolt,
    faPalette,
    faLock,
    faCode,
    faSync,
    faServer,
    faDatabase,
    faMagic,
    faSearch,
    faPlug,
    faDesktop,
    faTools,
    faChartLine,
    faMobileScreenButton,
    faCompassDrafting,
    faChartSimple,
    faLaptopCode,

    // Navigation & UI
    faShoppingCart,
    faComments,
    faBriefcase,
    faHome,
    faCog,
    faProjectDiagram,
    faLightbulb,
    faEnvelope,
    faPhone,
    faMapMarkerAlt,
    faCheck,
    faTimes,
    faTrash,
    faBars,
    faChevronLeft,
    faChevronRight,
    faArrowRight,
    faArrowLeft,
    faClock,
    faHeart,

    // Project
    faImage,
    faCalendar,
    faTag,
    faList,
    faCogs,

    // Brands
    faTwitter,
    faLinkedin,
    faGithub,
    faInstagram,
    faWhatsapp,
    faReact,
    faJs,
    faCss3,
    faNode,
    faBootstrap,
    faJoomla
};

// Helper function to get icon by name
export const getIcon = (iconName) => {
    // Handle if iconName is passed directly as object (though we try to use strings)
    if (typeof iconName === 'object') return iconName;

    // Handle class names from user (e.g., 'fa-brands fa-react')
    if (iconName && iconName.includes('fa-react')) return iconMap.faReact;
    if (iconName && iconName.includes('fa-js')) return iconMap.faJs;
    if (iconName && iconName.includes('fa-css3')) return iconMap.faCss3;
    if (iconName && iconName.includes('fa-node')) return iconMap.faNode;
    if (iconName && iconName.includes('fa-github')) return iconMap.faGithub;
    if (iconName && iconName.includes('fa-bootstrap')) return iconMap.faBootstrap;
    if (iconName && iconName.includes('fa-joomla')) return iconMap.faJoomla;
    if (iconName && iconName.includes('fa-mobile-screen-button')) return iconMap.faMobileScreenButton;
    if (iconName && iconName.includes('fa-database')) return iconMap.faDatabase;
    if (iconName && iconName.includes('fa-compass-drafting')) return iconMap.faCompassDrafting;
    if (iconName && iconName.includes('fa-chart-simple')) return iconMap.faChartSimple;
    if (iconName && iconName.includes('fa-laptop-code')) return iconMap.faLaptopCode;
    if (iconName && iconName.includes('fa-ts')) return iconMap.faReact; // Fallback for TS
    if (iconName && iconName.includes('fa-tailwind-css')) return iconMap.faCss3; // Fallback for Tailwind

    return iconMap[iconName] || faStar;
};
