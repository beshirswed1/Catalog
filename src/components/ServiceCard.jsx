'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem, selectCartItems } from '@/features/cart/cartSlice';
import { sendServiceInquiry } from '@/utils/whatsapp';
import { getIcon } from '@/utils/icons';
import { useTranslation } from '@/hooks/useTranslation';
import styles from './ServiceCard.module.css';

export default function ServiceCard({ service }) {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const isInCart = cartItems.some(item => item.id === service.id);
    const { t, currentLang } = useTranslation();

    // Helper to get translated field or fallback to Arabic
    const getField = (fieldName) => {
        const langSuffix = currentLang.charAt(0).toUpperCase() + currentLang.slice(1);
        return service[`${fieldName}${langSuffix}`] || service[`${fieldName}Ar`];
    };

    const displayName = getField('name');
    const displayDescription = getField('description');
    const displayDuration = getField('duration');
    const displayBadge = getField('badge');
    const displayFeatures = getField('features') || [];

    const handleWhatsAppInquiry = () => {
        sendServiceInquiry(displayName, currentLang);
    };

    const toggleCart = () => {
        if (isInCart) {
            dispatch(removeItem(service.id));
        } else {
            dispatch(addItem({
                id: service.id,
                name: displayName,
                price: service.price,
                features: displayFeatures
            }));
        }
    };

    return (
        <div className={`${styles.card} ${service.badgeAr ? styles.featured : ''}`}>
            {displayBadge && <div className={styles.badge}>{displayBadge}</div>}

            <h3 className={styles.name}>{displayName}</h3>

            <div className={styles.pricing}>
                <span className={styles.currency}>$</span>
                <span className={styles.price}>{service.price}</span>
            </div>

            <div className={styles.duration}>
                <FontAwesomeIcon icon={getIcon('faClock')} className={styles.durationIcon} />
                <span>{displayDuration}</span>
            </div>

            <p className={styles.description}>{displayDescription}</p>

            <ul className={styles.features}>
                {displayFeatures.map((feature, index) => (
                    <li key={index} className={styles.feature}>
                        <FontAwesomeIcon icon={getIcon('faCheck')} className={styles.checkIcon} />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>

            <div className={styles.actions}>
                <button
                    onClick={toggleCart}
                    className="btn btn-primary"
                    style={{
                        background: isInCart ? 'var(--color-error)' : 'var(--gradient-primary)',
                        width: '100%',
                        marginBottom: 'var(--spacing-sm)'
                    }}
                >
                    <FontAwesomeIcon icon={getIcon(isInCart ? 'faTrash' : 'faCartPlus')} />
                    <span>{isInCart ? t.cart.delete : t.pricing.addToCart}</span>
                </button>

                <button
                    onClick={handleWhatsAppInquiry}
                    className="btn btn-secondary"
                    style={{ width: '100%' }}
                >
                    <FontAwesomeIcon icon={getIcon('faComments')} />
                    <span>{t.pricing.inquiry}</span>
                </button>
            </div>
        </div>
    );
}
