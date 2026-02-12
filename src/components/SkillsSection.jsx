'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { skills } from '@/data/skills';
import { getIcon } from '@/utils/icons';
import styles from './SkillsSection.module.css';

export default function SkillsSection() {
    return (
        <section id="skills" className="section">
            <div className="container">
                <div className={styles.header}>
                    <h2 className="section-title">مهاراتنا التقنية</h2>
                    <p className={styles.subtitle}>
                        نستخدم أحدث التقنيات لبناء حلول ويب عصرية وفعالة
                    </p>
                </div>

                <div className={styles.grid}>
                    {skills.map((skill) => (
                        <div key={skill.id} className={styles.skillCard}>
                            <div className={styles.skillHeader}>
                                <div className={styles.skillIcon}>
                                    <FontAwesomeIcon icon={getIcon(skill.icon)} />
                                </div>
                                <div className={styles.skillInfo}>
                                    <h4 className={styles.skillName}>{skill.name}</h4>
                                    <p className={styles.skillDescription}>{skill.description}</p>
                                </div>
                            </div>

                            <div className={styles.progressBar}>
                                <div
                                    className={styles.progressFill}
                                    style={{ width: `${skill.level}%` }}
                                >
                                    <span className={styles.progressLabel}>{skill.level}%</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
