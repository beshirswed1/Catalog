'use client';

import { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { setLanguage } from '@/features/language/languageSlice';
import { useTranslation } from '@/hooks/useTranslation';
import { getIcon } from '@/utils/icons';
import styles from './LanguageSwitcher.module.css';

const languages = [
    { code: 'ar', label: 'العربية', flag: '🇸🇦' },
    { code: 'tr', label: 'Türkçe', flag: '🇹🇷' },
    { code: 'en', label: 'English', flag: 'EG' },
];

export default function LanguageSwitcher() {
    const [isOpen, setIsOpen] = useState(false);
    const { currentLang } = useTranslation();
    const dispatch = useDispatch();
    const dropdownRef = useRef(null);

    const currentLanguage = languages.find(l => l.code === currentLang) || languages[0];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLanguageChange = (langCode) => {
        dispatch(setLanguage(langCode));
        setIsOpen(false);

        // Update document direction and language
        const lang = languages.find(l => l.code === langCode);
        if (lang) {
            document.documentElement.lang = langCode;
            document.documentElement.dir = langCode === 'ar' ? 'rtl' : 'ltr';
        }
    };

    return (
        <div className={styles.wrapper} ref={dropdownRef}>
            <button
                className={styles.trigger}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Change Language"
                id="language-switcher"
            >
                <span className={styles.flag}>{currentLanguage.flag}</span>
                <span className={styles.label}>{currentLanguage.label}</span>
                <FontAwesomeIcon
                    icon={getIcon('faChevronLeft')}
                    className={`${styles.arrow} ${isOpen ? styles.arrowOpen : ''}`}
                />
            </button>

            {isOpen && (
                <div className={styles.dropdown}>
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            className={`${styles.option} ${lang.code === currentLang ? styles.active : ''}`}
                            onClick={() => handleLanguageChange(lang.code)}
                        >
                            <span className={styles.optionFlag}>{lang.flag}</span>
                            <span className={styles.optionLabel}>{lang.label}</span>
                            {lang.code === currentLang && (
                                <FontAwesomeIcon icon={getIcon('faCheck')} className={styles.checkIcon} />
                            )}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
