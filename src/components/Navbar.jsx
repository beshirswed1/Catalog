'use client';

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toggleCart, selectCartCount } from '@/features/cart/cartSlice';
import { getIcon } from '@/utils/icons';
import styles from './Navbar.module.css';
import Link from 'next/link';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const cartCount = useSelector(selectCartCount);
    const dispatch = useDispatch();

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
                        <span className={styles.logoText}>الكاتالوج</span>
                    </Link>

                    {/* Desktop Menu */}
                    <ul className={styles.navMenu}>
                        <li>
                            <button onClick={() => scrollToSection('hero')} className={styles.navLink}>
                                الرئيسية
                            </button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection('services')} className={styles.navLink}>
                                الخدمات
                            </button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection('projects')} className={styles.navLink}>
                                المشاريع
                            </button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection('skills')} className={styles.navLink}>
                                المهارات
                            </button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection('contact')} className={styles.navLink}>
                                تواصل معنا
                            </button>
                        </li>
                    </ul>

                    {/* Cart Button */}
                    <button
                        onClick={() => dispatch(toggleCart())}
                        className={styles.cartButton}
                        aria-label="عربة التسوق"
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
                        aria-label="القائمة"
                    >
                        <FontAwesomeIcon
                            icon={getIcon(isMobileMenuOpen ? 'faTimes' : 'faBars')}
                            className={styles.hamburger}
                        />
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className={styles.mobileMenu}>
                        <button onClick={() => scrollToSection('hero')} className={styles.mobileNavLink}>
                            الرئيسية
                        </button>
                        <button onClick={() => scrollToSection('services')} className={styles.mobileNavLink}>
                            الخدمات
                        </button>
                        <button onClick={() => scrollToSection('projects')} className={styles.mobileNavLink}>
                            المشاريع
                        </button>
                        <button onClick={() => scrollToSection('skills')} className={styles.mobileNavLink}>
                            المهارات
                        </button>
                        <button onClick={() => scrollToSection('contact')} className={styles.mobileNavLink}>
                            تواصل معنا
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
}
