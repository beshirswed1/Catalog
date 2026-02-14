'use client';

import { useSelector } from 'react-redux';
import { selectCurrentLang } from '@/features/language/languageSlice';
import { translations } from '@/i18n/translations';

export function useTranslation() {
    const currentLang = useSelector(selectCurrentLang);
    const t = translations[currentLang] || translations['ar'];

    return { t, currentLang, dir: t.dir };
}
