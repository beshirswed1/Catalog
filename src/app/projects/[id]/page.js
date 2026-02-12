'use client';

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getProjectById } from '@/data/projects';
import { sendProjectInquiry } from '@/utils/whatsapp';
import { getIcon } from '@/utils/icons';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFAB from '@/components/WhatsAppFAB';
import styles from './page.module.css';

import Image from 'next/image';
import { use } from 'react';

export default function ProjectPage({ params }) {
    const { id } = use(params);
    const project = getProjectById(id);

    if (!project) {
        return (
            <main>
                <Navbar />
                <div className="container" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
                    <h1>المشروع غير موجود</h1>
                    <Link href="/" className="btn btn-primary">
                        العودة للرئيسية
                    </Link>
                </div>
                <Footer />
            </main>
        );
    }

    return (
        <main>
            <Navbar />

            <div className={styles.hero}>
                <div className="container">
                    <Link href="/" className={styles.backLink}>
                        <FontAwesomeIcon icon={getIcon('faArrowRight')} />
                        <span>العودة للمشاريع</span>
                    </Link>

                    <div className={styles.header}>
                        <div className={styles.headerContent}>
                            <div className={styles.badge}>
                                {project.category === 'basic' && (
                                    <>
                                        <FontAwesomeIcon icon={getIcon('faMobileAlt')} />
                                        <span>كتالوج فقط</span>
                                    </>
                                )}
                                {project.category === 'standard' && (
                                    <>
                                        <FontAwesomeIcon icon={getIcon('faRocket')} />
                                        <span>ميزات متوسطة</span>
                                    </>
                                )}
                                {project.category === 'premium' && (
                                    <>
                                        <FontAwesomeIcon icon={getIcon('faStar')} />
                                        <span>متكامل</span>
                                    </>
                                )}
                            </div>

                            <h1 className={styles.title}>{project.title}</h1>
                            <div className={styles.meta}>
                                <div className={styles.metaItem}>
                                    <FontAwesomeIcon icon={getIcon('faCalendar')} className={styles.metaIcon} />
                                    <span>{project.year}</span>
                                </div>
                                <div className={styles.metaItem}>
                                    <FontAwesomeIcon icon={getIcon('faTag')} className={styles.metaIcon} />
                                    <span>{project.tags.length} تقنية</span>
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
                                alt={project.title}
                                fill
                                className={styles.projectImage}
                            />
                        </div>
                    </div>


                    <div className={styles.details}>
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>
                                <FontAwesomeIcon icon={getIcon('faList')} className={styles.sectionIcon} />
                                <span>نظرة عامة</span>
                            </h2>
                            <p className={styles.text}>{project.description}</p>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>
                                <FontAwesomeIcon icon={getIcon('faCogs')} className={styles.sectionIcon} />
                                <span>التقنيات المستخدمة</span>
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
                                <span>المميزات الرئيسية</span>
                            </h2>
                            <ul className={styles.features}>
                                {project.features.map((feature, index) => (
                                    <li key={index} className={styles.feature}>
                                        <FontAwesomeIcon icon={getIcon('faCheck')} className={styles.checkIcon} />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section className={styles.cta}>
                            <h3 className={styles.ctaTitle}>هل تريد مشروعاً مشابهاً؟</h3>
                            <p className={styles.ctaText}>
                                تواصل معنا الآن لمناقشة مشروعك والحصول على عرض سعر مخصص
                            </p>
                            <div className={styles.ctaButtons}>
                                <button
                                    onClick={() => sendProjectInquiry(project.title)}
                                    className="btn btn-primary btn-lg"
                                >
                                    <span>اطلب مشروع مشابه</span>
                                    <FontAwesomeIcon icon={getIcon('faComments')} />
                                </button>
                                <Link href="/#services" className="btn btn-secondary btn-lg">
                                    <span>تصفح الخدمات</span>
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
