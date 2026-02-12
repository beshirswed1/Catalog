'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { services } from '@/data/services';
import ServiceCard from './ServiceCard';
import { getIcon } from '@/utils/icons';
import styles from './PricingSection.module.css';

export default function PricingSection() {
    return (
        <section id="services" className="section">
            <div className="container">
                <div className={styles.header}>
                    <h2 className="section-title">خدماتنا</h2>
                    <p className={styles.subtitle}>
                        اختر الباقة المناسبة لاحتياجاتك - من كتالوج بسيط إلى منصة متكاملة
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
                        <h4 className={styles.noteTitle}>هل تحتاج شيئاً مخصصاً؟</h4>
                        <p className={styles.noteText}>
                            نحن نقدم حلول مخصصة تماماً لاحتياجاتك. تواصل معنا لمناقشة مشروعك!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
