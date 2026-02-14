'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { sendGeneralInquiry } from '@/utils/whatsapp';
import { getIcon } from '@/utils/icons';
import { useTranslation } from '@/hooks/useTranslation';
import styles from './ContactSection.module.css';

export default function ContactSection() {
    const { t, currentLang } = useTranslation();

    return (
        <section id="contact" className="section">
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.content}>
                        <h2 className={styles.title}>
                            {t.contactSection.title}
                        </h2>
                        <p className={styles.subtitle}>
                            {t.contactSection.subtitle}
                        </p>

                        <div className={styles.features}>
                            <div className={styles.feature}>
                                <FontAwesomeIcon icon={getIcon('faBolt')} className={styles.featureIcon} />
                                <div>
                                    <h4 className={styles.featureTitle}>{t.contactSection.fastReply}</h4>
                                    <p className={styles.featureText}>{t.contactSection.fastReplyText}</p>
                                </div>
                            </div>

                            <div className={styles.feature}>
                                <FontAwesomeIcon icon={getIcon('faComments')} className={styles.featureIcon} />
                                <div>
                                    <h4 className={styles.featureTitle}>{t.contactSection.freeConsult}</h4>
                                    <p className={styles.featureText}>{t.contactSection.freeConsultText}</p>
                                </div>
                            </div>

                            <div className={styles.feature}>
                                <FontAwesomeIcon icon={getIcon('faLightbulb')} className={styles.featureIcon} />
                                <div>
                                    <h4 className={styles.featureTitle}>{t.contactSection.customSolutions}</h4>
                                    <p className={styles.featureText}>{t.contactSection.customSolutionsText}</p>
                                </div>
                            </div>
                        </div>

                        <button onClick={() => sendGeneralInquiry(currentLang)} className="btn btn-primary btn-lg">
                            <span>{t.contactSection.whatsappBtn}</span>
                            <FontAwesomeIcon icon={getIcon('faWhatsapp')} />
                        </button>

                        <div className={styles.info}>
                            <div className={styles.infoItem}>
                                <FontAwesomeIcon icon={getIcon('faEnvelope')} className={styles.infoIcon} />
                                <span>beshirswed07@gmail.com</span>
                            </div>
                            <div className={styles.infoItem}>
                                <FontAwesomeIcon icon={getIcon('faPhone')} className={styles.infoIcon} />
                                <span>+905 377 906 230</span>
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
