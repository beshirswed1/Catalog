'use client';

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getProjectById } from '@/data/projects';
import { sendProjectInquiry } from '@/utils/whatsapp';
import { getIcon } from '@/utils/icons';
import { useTranslation } from '@/hooks/useTranslation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFAB from '@/components/WhatsAppFAB';
import styles from './page.module.css';

import Image from 'next/image';
import { use } from 'react';

export default function ProjectPage({ params }) {
    const { id } = use(params);
    const project = getProjectById(id);
    const { t, currentLang } = useTranslation();

    if (!project) {
        return (
            <main>
                <Navbar />
                <div className="container" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
                    <h1>{t.projectDetail.notFound}</h1>
                    <Link href="/" className="btn btn-primary">
                        {t.projectDetail.backHome}
                    </Link>
                </div>
                <Footer />
            </main>
        );
    }

    // Helper to get translated field or fallback to Arabic
    const getField = (fieldName) => {
        const langSuffix = currentLang.charAt(0).toUpperCase() + currentLang.slice(1); // ar -> Ar, en -> En, tr -> Tr
        return project[`${fieldName}${langSuffix}`] || project[`${fieldName}Ar`];
    };

    const displayTitle = getField('title');
    const displayDescription = getField('description');
    const displayFeatures = getField('features') || [];

    return (
        <main>
            <Navbar />

            <div className={styles.hero}>
                <div className="container">
                    <Link href="/" className={styles.backLink}>
                        <FontAwesomeIcon icon={getIcon('faArrowRight')} />
                        <span>{t.projectDetail.backToProjects}</span>
                    </Link>

                    <div className={styles.header}>
                        <div className={styles.headerContent}>
                            <div className={styles.badge}>
                                {(project.category === 'productivity' || project.category === 'portfolio') && (
                                    <>
                                        <FontAwesomeIcon icon={getIcon('faMobileAlt')} />
                                        <span>{t.projectDetail.catalogOnly}</span>
                                    </>
                                )}
                                {(project.category === 'ecommerce' || project.category === 'health') && (
                                    <>
                                        <FontAwesomeIcon icon={getIcon('faRocket')} />
                                        <span>{t.projectDetail.mediumFeatures}</span>
                                    </>
                                )}
                                {(project.category === 'education') && (
                                    <>
                                        <FontAwesomeIcon icon={getIcon('faStar')} />
                                        <span>{t.projectDetail.integrated}</span>
                                    </>
                                )}
                            </div>

                            <h1 className={styles.title}>{displayTitle}</h1>
                            <div className={styles.meta}>
                                <div className={styles.metaItem}>
                                    <FontAwesomeIcon icon={getIcon('faCalendar')} className={styles.metaIcon} />
                                    <span>{project.year}</span>
                                </div>
                                <div className={styles.metaItem}>
                                    <FontAwesomeIcon icon={getIcon('faTag')} className={styles.metaIcon} />
                                    <span>{project.tags.length} {t.projectDetail.technologies}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className={styles.content}>
                    <div className={styles.imageSection}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src={project.image}
                                alt={displayTitle}
                                fill
                                className={styles.projectImage}
                            />
                        </div>
                    </div>


                    <div className={styles.details}>
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>
                                <FontAwesomeIcon icon={getIcon('faList')} className={styles.sectionIcon} />
                                <span>{t.projectDetail.overview}</span>
                            </h2>
                            <p className={styles.text}>{displayDescription}</p>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>
                                <FontAwesomeIcon icon={getIcon('faCogs')} className={styles.sectionIcon} />
                                <span>{t.projectDetail.techUsed}</span>
                            </h2>
                            <div className={styles.tags}>
                                {project.tags.map((tag, index) => (
                                    <span key={index} className={styles.tag}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>
                                <FontAwesomeIcon icon={getIcon('faStar')} className={styles.sectionIcon} />
                                <span>{t.projectDetail.mainFeatures}</span>
                            </h2>
                            <ul className={styles.features}>
                                {displayFeatures.map((feature, index) => (
                                    <li key={index} className={styles.feature}>
                                        <FontAwesomeIcon icon={getIcon('faCheck')} className={styles.checkIcon} />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section className={styles.cta}>
                            <h3 className={styles.ctaTitle}>{t.projectDetail.wantSimilar}</h3>
                            <p className={styles.ctaText}>
                                {t.projectDetail.wantSimilarText}
                            </p>
                            <div className={styles.ctaButtons}>
                                <button
                                    onClick={() => sendProjectInquiry(project.titleAr, currentLang)}
                                    className="btn btn-primary btn-lg"
                                >
                                    <span>{t.projectDetail.requestSimilar}</span>
                                    <FontAwesomeIcon icon={getIcon('faComments')} />
                                </button>
                                <Link href="/#services" className="btn btn-secondary btn-lg">
                                    <span>{t.projectDetail.browseServices}</span>
                                    <FontAwesomeIcon icon={getIcon('faRocket')} />
                                </Link>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            <Footer />
            <WhatsAppFAB />
        </main>
    );
}
