'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getIcon } from '@/utils/icons';
import { useTranslation } from '@/hooks/useTranslation';
import { sendGeneralInquiry } from '@/utils/whatsapp';
import styles from './Footer.module.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const { t, currentLang } = useTranslation();

    const handleWhatsAppClick = (e) => {
        e.preventDefault();
        sendGeneralInquiry(currentLang);
    };

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.section}>
                        <div className={styles.logo}>
                            <FontAwesomeIcon icon={getIcon('faBriefcase')} className={styles.logoIcon} />
                            <span className={styles.logoText}>{t.footer.logoText}</span>
                        </div>
                        <p className={styles.description}>
                            {t.footer.description}
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h4 className={styles.sectionTitle}>{t.footer.quickLinks}</h4>
                        <ul className={styles.links}>
                            <li><a href="#hero">{t.nav.home}</a></li>
                            <li><a href="#services">{t.nav.services}</a></li>
                            <li><a href="#projects">{t.nav.projects}</a></li>
                            <li><a href="#skills">{t.nav.skills}</a></li>
                            <li><a href="#contact">{t.nav.contact}</a></li>
                        </ul>
                    </div>

                    <div className={styles.section}>
                        <h4 className={styles.sectionTitle}>{t.footer.contactUs}</h4>

                        <ul className={styles.contact}>
                            <li>
                                <FontAwesomeIcon icon={getIcon('faEnvelope')} />
                                <a
                                    href="mailto:beshirswed07@gmail.com"
                                    className={styles.contactLink}
                                >
                                    beshirswed07@gmail.com
                                </a>
                            </li>

                            <li>
                                <FontAwesomeIcon icon={getIcon('faPhone')} />
                                <a
                                    href="#"
                                    onClick={handleWhatsAppClick}
                                    className={styles.contactLink}
                                >
                                    +90 537 790 62 30
                                </a>
                            </li>

                            <li>
                                <FontAwesomeIcon icon={getIcon('faGlobe')} />
                                <a
                                    href="https://beshir.vercel.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.contactLink}
                                >
                                    beshir.vercel.app
                                </a>
                            </li>
                        </ul>
                    </div>


                    <div className={styles.section}>
                        <h4 className={styles.sectionTitle}>{t.footer.followUs}</h4>
                        <div className={styles.social}>
                            <a href="https://x.com/BeshirSwed" className={styles.socialLink} aria-label="Twitter">
                                <FontAwesomeIcon icon={getIcon('faTwitter')} />
                            </a>
                            <a href="https://www.linkedin.com/in/beshir-swed-073784398" className={styles.socialLink} aria-label="LinkedIn">
                                <FontAwesomeIcon icon={getIcon('faLinkedin')} />
                            </a>
                            <a href="https://github.com/beshirswed1" className={styles.socialLink} aria-label="GitHub">
                                <FontAwesomeIcon icon={getIcon('faGithub')} />
                            </a>
                            <a href="https://www.instagram.com/ollx.b27/" className={styles.socialLink} aria-label="Instagram">
                                <FontAwesomeIcon icon={getIcon('faInstagram')} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p className={styles.copyright}>
                        © {currentYear} {t.footer.copyright}
                    </p>
                    <p className={styles.credits}>
                        {t.footer.madeBy} <FontAwesomeIcon icon={getIcon('faHeart')} className={styles.heart} />
                    </p>
                </div>
            </div>
        </footer>
    );
}
