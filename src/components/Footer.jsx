import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getIcon } from '@/utils/icons';
import styles from './Footer.module.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.section}>
                        <div className={styles.logo}>
                            <FontAwesomeIcon icon={getIcon('faBriefcase')} className={styles.logoIcon} />
                            <span className={styles.logoText}>بورتفوليو</span>
                        </div>
                        <p className={styles.description}>
                            نبني مواقع ويب احترافية تحقق أهدافك وتنمي أعمالك
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h4 className={styles.sectionTitle}>روابط سريعة</h4>
                        <ul className={styles.links}>
                            <li><a href="#hero">الرئيسية</a></li>
                            <li><a href="#services">الخدمات</a></li>
                            <li><a href="#projects">المشاريع</a></li>
                            <li><a href="#skills">المهارات</a></li>
                            <li><a href="#contact">تواصل معنا</a></li>
                        </ul>
                    </div>

                    <div className={styles.section}>
                        <h4 className={styles.sectionTitle}>تواصل معنا</h4>

                        <ul className={styles.contact}>
                            <li>
                                <FontAwesomeIcon icon={getIcon('faEnvelope')} />
                                <a
                                    href="mailto:beshirswed07@gmail.com?subject=استفسار عن مشروع&body=مرحباً، شاهدت البورتفوليو الخاص بك وأرغب بالتواصل."
                                    className={styles.contactLink}
                                >
                                    beshirswed07@gmail.com
                                </a>
                            </li>

                            <li>
                                <FontAwesomeIcon icon={getIcon('faPhone')} />
                                <a
                                    href="https://wa.me/905377906230?text=مرحباً، أرغب بالاستفسار عن مشروع."
                                    target="_blank"
                                    rel="noopener noreferrer"
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
                        <h4 className={styles.sectionTitle}>تابعنا</h4>
                        <div className={styles.social}>
                            <a href="https://x.com/BeshirSwed" className={styles.socialLink} aria-label="Twitter">
                                <FontAwesomeIcon icon={getIcon('faTwitter')} />
                            </a>
                            <a href="https://www.linkedin.com/in/beshir-swed-073784398?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BFJS0Tx4PQMqrT%2BscgBvaqQ%3D%3D" className={styles.socialLink} aria-label="LinkedIn">
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
                        © {currentYear} جميع الحقوق محفوظة
                    </p>
                    <p className={styles.credits}>
                        صُنع بواسطة بشير سويد <FontAwesomeIcon icon={getIcon('faHeart')} className={styles.heart} />
                    </p>
                </div>
            </div>
        </footer>
    );
}
