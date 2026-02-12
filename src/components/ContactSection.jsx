'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { sendGeneralInquiry } from '@/utils/whatsapp';
import { getIcon } from '@/utils/icons';
import styles from './ContactSection.module.css';

export default function ContactSection() {
    return (
        <section id="contact" className="section">
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.content}>
                        <h2 className={styles.title}>
                            هل أنت مستعد لبدء مشروعك؟
                        </h2>
                        <p className={styles.subtitle}>
                            تواصل معنا الآن ودعنا نحول فكرتك إلى واقع رقمي مميز
                        </p>

                        <div className={styles.features}>
                            <div className={styles.feature}>
                                <FontAwesomeIcon icon={getIcon('faBolt')} className={styles.featureIcon} />
                                <div>
                                    <h4 className={styles.featureTitle}>رد سريع</h4>
                                    <p className={styles.featureText}>نرد خلال 24 ساعة</p>
                                </div>
                            </div>

                            <div className={styles.feature}>
                                <FontAwesomeIcon icon={getIcon('faComments')} className={styles.featureIcon} />
                                <div>
                                    <h4 className={styles.featureTitle}>استشارة مجانية</h4>
                                    <p className={styles.featureText}>نناقش مشروعك بالتفصيل</p>
                                </div>
                            </div>

                            <div className={styles.feature}>
                                <FontAwesomeIcon icon={getIcon('faLightbulb')} className={styles.featureIcon} />
                                <div>
                                    <h4 className={styles.featureTitle}>حلول مخصصة</h4>
                                    <p className={styles.featureText}>نصمم حسب احتياجاتك</p>
                                </div>
                            </div>
                        </div>

                        <button onClick={sendGeneralInquiry} className="btn btn-primary btn-lg">
                            <span>تواصل عبر واتساب</span>
                            <FontAwesomeIcon icon={getIcon('faWhatsapp')} />
                        </button>

                        <div className={styles.info}>
                            <div className={styles.infoItem}>
                                <FontAwesomeIcon icon={getIcon('faEnvelope')} className={styles.infoIcon} />
                                <span>info@portfolio.com</span>
                            </div>
                            <div className={styles.infoItem}>
                                <FontAwesomeIcon icon={getIcon('faPhone')} className={styles.infoIcon} />
                                <span>+966 50 000 0000</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.decoration}>
                        <div className={styles.circle1}></div>
                        <div className={styles.circle2}></div>
                        <div className={styles.circle3}></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
