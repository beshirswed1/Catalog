'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { sendGeneralInquiry } from '@/utils/whatsapp';
import { getIcon } from '@/utils/icons';
import styles from './Hero.module.css';

export default function Hero() {
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
                        <span>مرحباً بك في عالم التطوير الاحترافي</span>
                    </div>

                    <h1 className={styles.title}>
                        أبني لك موقعاً
                        <br />
                        <span className="text-gradient">يُحقق أهدافك</span>
                    </h1>

                    <p className={styles.subtitle}>
                        أقدم حلول ويب احترافية تناسب احتياجاتك - من كتالوج بسيط إلى منصة متكاملة
                        <br />
                        مع تصميم عصري وأداء عالي وتجربة مستخدم استثنائية
                    </p>

                    <div className={styles.stats}>
                        <div className={styles.stat}>
                            <div className={styles.statNumber}>12+</div>
                            <div className={styles.statLabel}>مشروع ناجح</div>
                        </div>
                        <div className={styles.stat}>
                            <div className={styles.statNumber}>12+</div>
                            <div className={styles.statLabel}>عميل سعيد</div>
                        </div>
                        <div className={styles.stat}>
                            <div className={styles.statNumber}>100%</div>
                            <div className={styles.statLabel}>رضا العملاء</div>
                        </div>
                    </div>

                    <div className={styles.cta}>
                        <button onClick={scrollToServices} className="btn btn-primary btn-lg">
                            <span>تصفّح الخدمات</span>
                            <FontAwesomeIcon icon={getIcon('faRocket')} />
                        </button>
                        <button onClick={scrollToContact} className="btn btn-secondary btn-lg">
                            <span>تواصل معنا</span>
                            <FontAwesomeIcon icon={getIcon('faComments')} />
                        </button>
                    </div>

                    <div className={styles.features}>
                        <div className={styles.feature}>
                            <FontAwesomeIcon icon={getIcon('faBolt')} className={styles.featureIcon} />
                            <span>سرعة فائقة</span>
                        </div>
                        <div className={styles.feature}>
                            <FontAwesomeIcon icon={getIcon('faMobileAlt')} className={styles.featureIcon} />
                            <span>متجاوب 100%</span>
                        </div>
                        <div className={styles.feature}>
                            <FontAwesomeIcon icon={getIcon('faPalette')} className={styles.featureIcon} />
                            <span>تصميم عصري</span>
                        </div>
                        <div className={styles.feature}>
                            <FontAwesomeIcon icon={getIcon('faLock')} className={styles.featureIcon} />
                            <span>آمن تماماً</span>
                        </div>
                        <div className={styles.feature}>
                            <FontAwesomeIcon icon={getIcon('faSearch')} className={styles.featureIcon} />
                            <span>دعم محركات البحث</span>
                        </div>
                        <div className={styles.feature}>
                            <FontAwesomeIcon icon={getIcon('faPlus')} className={styles.featureIcon} />
                            <span>خدمات اضافيه</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.scrollIndicator}>
                <div className={styles.mouse}>
                    <div className={styles.wheel}></div>
                </div>
                <span>اسحب للأسفل</span>
            </div>
        </section>
    );
}
