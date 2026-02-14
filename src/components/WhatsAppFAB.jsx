'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { sendGeneralInquiry } from '@/utils/whatsapp';
import { getIcon } from '@/utils/icons';
import { useTranslation } from '@/hooks/useTranslation';
import styles from './WhatsAppFAB.module.css';

export default function WhatsAppFAB() {
    const { t } = useTranslation();

    return (
        <button
            onClick={sendGeneralInquiry}
            className={styles.fab}
            aria-label={t.whatsapp.ariaLabel}
            title={t.whatsapp.title}
        >
            <FontAwesomeIcon icon={getIcon('faWhatsapp')} className={styles.icon} />
            <span className={styles.pulse}></span>
        </button>
    );
}
