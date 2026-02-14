'use client';

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toggleCart, selectCartCount } from '@/features/cart/cartSlice';
import { getIcon } from '@/utils/icons';
import { useTranslation } from '@/hooks/useTranslation';
import LanguageSwitcher from './LanguageSwitcher';
import styles from './Navbar.module.css';
import Link from 'next/link';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const cartCount = useSelector(selectCartCount);
    const dispatch = useDispatch();
    const { t } = useTranslation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
            <div className="container">
                <div className={styles.navContent}>
                    {/* Logo */}
                    <Link href="/" className={styles.logo}>
                        <FontAwesomeIcon icon={getIcon('faBriefcase')} className={styles.logoIcon} />
                        <span className={styles.logoText}>{t.nav.logo}</span>
                    </Link>

                    {/* Desktop Menu */}
                    <ul className={styles.navMenu}>
                        <li>
                            <button onClick={() => scrollToSection('hero')} className={styles.navLink}>
                                {t.nav.home}
                            </button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection('services')} className={styles.navLink}>
                                {t.nav.services}
                            </button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection('projects')} className={styles.navLink}>
                                {t.nav.projects}
                            </button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection('skills')} className={styles.navLink}>
                                {t.nav.skills}
                            </button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection('contact')} className={styles.navLink}>
                                {t.nav.contact}
                            </button>
                        </li>
                    </ul>

                    <div className={styles.navActions}>
                        {/* Language Switcher */}
                        <LanguageSwitcher />

                        {/* Cart Button */}
                        <button
                            onClick={() => dispatch(toggleCart())}
                            className={styles.cartButton}
                            aria-label={t.nav.cart}
                        >
                            <FontAwesomeIcon icon={getIcon('faShoppingCart')} className={styles.cartIcon} />
                            {cartCount > 0 && (
                                <span className={styles.cartBadge}>{cartCount}</span>
                            )}
                        </button>

                        {/* Mobile Menu Toggle */}
                        <button
                            className={styles.mobileMenuToggle}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label={t.nav.menu}
                        >
                            <FontAwesomeIcon
                                icon={getIcon(isMobileMenuOpen ? 'faTimes' : 'faBars')}
                                className={styles.hamburger}
                            />
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className={styles.mobileMenu}>
                        <button onClick={() => scrollToSection('hero')} className={styles.mobileNavLink}>
                            {t.nav.home}
                        </button>
                        <button onClick={() => scrollToSection('services')} className={styles.mobileNavLink}>
                            {t.nav.services}
                        </button>
                        <button onClick={() => scrollToSection('projects')} className={styles.mobileNavLink}>
                            {t.nav.projects}
                        </button>
                        <button onClick={() => scrollToSection('skills')} className={styles.mobileNavLink}>
                            {t.nav.skills}
                        </button>
                        <button onClick={() => scrollToSection('contact')} className={styles.mobileNavLink}>
                            {t.nav.contact}
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
}
