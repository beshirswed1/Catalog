'use client';

import { useEffect } from 'react';
import { useTranslation } from '@/hooks/useTranslation';

export default function DirectionManager({ children }) {
    const { currentLang, dir } = useTranslation();

    useEffect(() => {
        document.documentElement.lang = currentLang;
        document.documentElement.dir = dir;
    }, [currentLang, dir]);

    return <>{children}</>;
}
