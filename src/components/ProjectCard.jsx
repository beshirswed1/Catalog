'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { sendProjectInquiry } from '@/utils/whatsapp';
import { getIcon } from '@/utils/icons';
import styles from './ProjectCard.module.css';

export default function ProjectCard({ project }) {
    const handleInquiry = (e) => {
        e.preventDefault();
        sendProjectInquiry(project.title);
    };

    return (
        <div className={styles.card}>
            <div className={styles.imageWrapper}>
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className={styles.projectImage}
                    priority
                />
                <div className={styles.overlay}>
                    <button onClick={handleInquiry} className={styles.inquiryBtn}>
                        <span>اطلب مشابه</span>
                        <FontAwesomeIcon icon={getIcon('faComments')} />
                    </button>
                </div>
            </div>

            <div className={styles.content}>
                <div className={styles.header}>
                    <h3 className={styles.title}>{project.title}</h3>
                    <span className={styles.year}>{project.year}</span>
                </div>

                <p className={styles.description}>{project.description}</p>

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
                        <span>عرض التفاصيل</span>
                        <FontAwesomeIcon icon={getIcon('faArrowLeft')} />
                    </Link>
                    <div className={styles.category}>
                        {project.category === 'basic' && (
                            <div title="أساسي">
                                <FontAwesomeIcon icon={getIcon('faMobileAlt')} />
                            </div>
                        )}
                        {project.category === 'standard' && (
                            <div title="متوسط">
                                <FontAwesomeIcon icon={getIcon('faRocket')} />
                            </div>
                        )}
                        {project.category === 'premium' && (
                            <div title="متكامل">
                                <FontAwesomeIcon icon={getIcon('faStar')} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
