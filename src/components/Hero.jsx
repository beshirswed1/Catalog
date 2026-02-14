'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { sendGeneralInquiry } from '@/utils/whatsapp';
import { getIcon } from '@/utils/icons';
import { useTranslation } from '@/hooks/useTranslation';
import styles from './Hero.module.css';

export default function Hero() {
    const { t } = useTranslation();

    const scrollToServices = () => {
        const element = document.getElementById('services');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToContact = () => {
        const element = document.getElementById('contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="hero" className={styles.hero}>
            <div className={styles.background}>
                <div className={styles.gradient1}></div>
                <div className={styles.gradient2}></div>
                <div className={styles.gradient3}></div>
            </div>

            <div className="container">
                <div className={styles.content}>
                    <div className={styles.badge}>
                        <FontAwesomeIcon icon={getIcon('faMagic')} className={styles.badgeIcon} />
                        <span>{t.hero.badge}</span>
                    </div>

                    <h1 className={styles.title}>
                        {t.hero.titleLine1}
                        <br />
                        <span className="text-gradient">{t.hero.titleLine2}</span>
                    </h1>

                    <p className={styles.subtitle}>
                        {t.hero.subtitle1}
                        <br />
                        {t.hero.subtitle2}
                    </p>

                    <div className={styles.stats}>
                        <div className={styles.stat}>
                            <div className={styles.statNumber}>{t.hero.stat1Number}</div>
                            <div className={styles.statLabel}>{t.hero.stat1Label}</div>
                        </div>
                        <div className={styles.stat}>
                            <div className={styles.statNumber}>{t.hero.stat2Number}</div>
                            <div className={styles.statLabel}>{t.hero.stat2Label}</div>
                        </div>
                        <div className={styles.stat}>
                            <div className={styles.statNumber}>{t.hero.stat3Number}</div>
                            <div className={styles.statLabel}>{t.hero.stat3Label}</div>
                        </div>
                    </div>

                    <div className={styles.cta}>
                        <button onClick={scrollToServices} className="btn btn-primary btn-lg">
                            <span>{t.hero.ctaBrowse}</span>
                            <FontAwesomeIcon icon={getIcon('faRocket')} />
                        </button>
                        <button onClick={scrollToContact} className="btn btn-secondary btn-lg">
                            <span>{t.hero.ctaContact}</span>
                            <FontAwesomeIcon icon={getIcon('faComments')} />
                        </button>
                    </div>

                    <div className={styles.features}>
                        <div className={styles.feature}>
                            <FontAwesomeIcon icon={getIcon('faBolt')} className={styles.featureIcon} />
                            <span>{t.hero.featureSpeed}</span>
                        </div>
                        <div className={styles.feature}>
                            <FontAwesomeIcon icon={getIcon('faMobileAlt')} className={styles.featureIcon} />
                            <span>{t.hero.featureResponsive}</span>
                        </div>
                        <div className={styles.feature}>
                            <FontAwesomeIcon icon={getIcon('faPalette')} className={styles.featureIcon} />
                            <span>{t.hero.featureDesign}</span>
                        </div>
                        <div className={styles.feature}>
                            <FontAwesomeIcon icon={getIcon('faLock')} className={styles.featureIcon} />
                            <span>{t.hero.featureSecurity}</span>
                        </div>
                        <div className={styles.feature}>
                            <FontAwesomeIcon icon={getIcon('faSearch')} className={styles.featureIcon} />
                            <span>{t.hero.featureSeo}</span>
                        </div>
                        <div className={styles.feature}>
                            <FontAwesomeIcon icon={getIcon('faPlus')} className={styles.featureIcon} />
                            <span>{t.hero.featureExtra}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.scrollIndicator}>
                <div className={styles.mouse}>
                    <div className={styles.wheel}></div>
                </div>
                <span>{t.hero.scrollDown}</span>
            </div>
        </section>
    );
}
