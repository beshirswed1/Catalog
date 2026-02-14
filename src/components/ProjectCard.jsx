'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { sendProjectInquiry } from '@/utils/whatsapp';
import { getIcon } from '@/utils/icons';
import { useTranslation } from '@/hooks/useTranslation';
import styles from './ProjectCard.module.css';

export default function ProjectCard({ project }) {
    const { t, currentLang } = useTranslation();

    const handleInquiry = (e) => {
        e.preventDefault();
        sendProjectInquiry(project.titleAr, currentLang);
    };

    // Helper to get translated field or fallback to Arabic
    const getField = (fieldName) => {
        const langSuffix = currentLang.charAt(0).toUpperCase() + currentLang.slice(1); // ar -> Ar, en -> En, tr -> Tr
        return project[`${fieldName}${langSuffix}`] || project[`${fieldName}Ar`];
    };

    const displayTitle = getField('title');
    const displayDescription = getField('description');

    return (
        <div className={styles.card}>
            <div className={styles.imageWrapper}>
                <Image
                    src={project.image}
                    alt={displayTitle}
                    fill
                    className={styles.projectImage}
                    priority
                />
                <div className={styles.overlay}>
                    <button onClick={handleInquiry} className={styles.inquiryBtn}>
                        <span>{t.projectsSection.requestSimilar}</span>
                        <FontAwesomeIcon icon={getIcon('faComments')} />
                    </button>
                </div>
            </div>

            <div className={styles.content}>
                <div className={styles.header}>
                    <h3 className={styles.title}>{displayTitle}</h3>
                    <span className={styles.year}>{project.year}</span>
                </div>

                <p className={styles.description}>{displayDescription}</p>

                <div className={styles.tags}>
                    {project.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className={styles.tag}>
                            {tag}
                        </span>
                    ))}
                    {project.tags.length > 3 && (
                        <span className={styles.tag}>+{project.tags.length - 3}</span>
                    )}
                </div>

                <div className={styles.footer}>
                    <Link href={`/projects/${project.id}`} className={styles.detailsLink}>
                        <span>{t.projectsSection.viewDetails}</span>
                        <FontAwesomeIcon icon={getIcon('faArrowLeft')} />
                    </Link>
                    <div className={styles.category}>
                        {project.category === 'productivity' && (
                            <div title={t.projectsSection.categoryBasic}>
                                <FontAwesomeIcon icon={getIcon('faMobileAlt')} />
                            </div>
                        )}
                        {project.category === 'ecommerce' && (
                            <div title={t.projectsSection.categoryStandard}>
                                <FontAwesomeIcon icon={getIcon('faRocket')} />
                            </div>
                        )}
                        {(project.category === 'education' || project.category === 'health') && (
                            <div title={t.projectsSection.categoryPremium}>
                                <FontAwesomeIcon icon={getIcon('faStar')} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
