'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { sendGeneralInquiry } from '@/utils/whatsapp';
import { getIcon } from '@/utils/icons';
import styles from './WhatsAppFAB.module.css';

export default function WhatsAppFAB() {
    return (
        <button
            onClick={sendGeneralInquiry}
            className={styles.fab}
            aria-label="تواصل عبر واتساب"
            title="تواصل معنا عبر واتساب"
        >
            <FontAwesomeIcon icon={getIcon('faWhatsapp')} className={styles.icon} />
            <span className={styles.pulse}></span>
        </button>
    );
}
