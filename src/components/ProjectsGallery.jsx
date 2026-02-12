'use client';

import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';
import styles from './ProjectsGallery.module.css';

export default function ProjectsGallery() {
    return (
        <section id="projects" className="section">
            <div className="container">
                <div className={styles.header}>
                    <h2 className="section-title">مشاريعنا</h2>
                    <p className={styles.subtitle}>
                        تصفح مجموعة من المشاريع الناجحة التي أنجزناها لعملائنا
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
