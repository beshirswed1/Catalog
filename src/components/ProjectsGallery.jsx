'use client';

import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';
import { useTranslation } from '@/hooks/useTranslation';
import styles from './ProjectsGallery.module.css';

export default function ProjectsGallery() {
    const { t } = useTranslation();

    return (
        <section id="projects" className="section">
            <div className="container">
                <div className={styles.header}>
                    <h2 className="section-title">{t.projectsSection.title}</h2>
                    <p className={styles.subtitle}>
                        {t.projectsSection.subtitle}
                    </p>
                </div>

                <div className={styles.grid}>
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
