'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { skills, skillCategories } from '@/data/skills';
import { getIcon } from '@/utils/icons';
import { useTranslation } from '@/hooks/useTranslation';
import styles from './SkillsSection.module.css';

export default function SkillsSection() {
    const { t, currentLang } = useTranslation();

    const getField = (item, fieldName) => {
        const langSuffix = currentLang.charAt(0).toUpperCase() + currentLang.slice(1);
        return item[`${fieldName}${langSuffix}`] || item[`${fieldName}Ar`];
    };

    return (
        <section className={styles.skills} id="skills">
            <div className="container">
                <div className={styles.sectionHeader}>
                    <h2 className={styles.title}>{t.skillsSection.title}</h2>
                    <p className={styles.subtitle}>{t.skillsSection.subtitle}</p>
                </div>

                <div className={styles.categoriesGrid}>
                    {skillCategories.map((category) => (
                        <div key={category.id} className={styles.categoryCard}>
                            <div className={styles.categoryHeader}>
                                <FontAwesomeIcon icon={getIcon(category.icon)} className={styles.categoryIcon} />
                                <h3 className={styles.categoryName}>{getField(category, 'name')}</h3>
                            </div>

                            <div className={styles.skillsList}>
                                {skills
                                    .filter(skill => skill.category === category.id)
                                    .map(skill => (
                                        <div key={skill.id} className={styles.skillItem}>
                                            <div className={styles.skillMain}>
                                                <FontAwesomeIcon icon={getIcon(skill.icon)} className={styles.skillIcon} />
                                                <span className={styles.skillName}>{skill.name}</span>
                                                <span className={styles.skillLevel}>{skill.level}%</span>
                                            </div>
                                            <div className={styles.skillBar}>
                                                <div
                                                    className={styles.skillProgress}
                                                    style={{ width: `${skill.level}%` }}
                                                />
                                            </div>
                                            <p className={styles.skillDesc}>{getField(skill, 'description')}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
