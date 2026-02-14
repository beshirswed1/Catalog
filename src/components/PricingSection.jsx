'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { services } from '@/data/services';
import ServiceCard from './ServiceCard';
import { getIcon } from '@/utils/icons';
import { useTranslation } from '@/hooks/useTranslation';
import styles from './PricingSection.module.css';

export default function PricingSection() {
    const { t } = useTranslation();

    return (
        <section id="services" className="section">
            <div className="container">
                <div className={styles.header}>
                    <h2 className="section-title">{t.pricing.title}</h2>
                    <p className={styles.subtitle}>
                        {t.pricing.subtitle}
                    </p>
                </div>

                <div className={styles.grid}>
                    {services.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>

                <div className={styles.note}>
                    <FontAwesomeIcon icon={getIcon('faLightbulb')} className={styles.noteIcon} />
                    <div>
                        <h4 className={styles.noteTitle}>{t.pricing.customTitle}</h4>
                        <p className={styles.noteText}>
                            {t.pricing.customText}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
