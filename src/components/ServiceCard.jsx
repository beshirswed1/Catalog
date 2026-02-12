'use client';

import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { addItem, openCart } from '@/features/cart/cartSlice';
import { sendServiceInquiry } from '@/utils/whatsapp';
import { getIcon } from '@/utils/icons';
import styles from './ServiceCard.module.css';

export default function ServiceCard({ service }) {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addItem({
            id: service.id,
            name: service.name,
            price: service.price,
            features: service.features
        }));
        dispatch(openCart());
    };

    const handleWhatsAppInquiry = () => {
        sendServiceInquiry(service.name, service.price);
    };

    const isBasic = service.id === 'basic';

    return (
        <div className={`${styles.card} ${service.badge ? styles.featured : ''}`}>
            {service.badge && (
                <div className={styles.badge}>{service.badge}</div>
            )}

            <div className={styles.icon}>
                <FontAwesomeIcon icon={getIcon(service.icon)} />
            </div>

            <h3 className={styles.name}>{service.name}</h3>
            <p className={styles.description}>{service.description}</p>

            <div className={styles.pricing}>
                <div className={styles.price}>${service.price}</div>
                <div className={styles.currency}>USD</div>
            </div>

            <div className={styles.duration}>
                <FontAwesomeIcon icon={getIcon('faClock')} className={styles.durationIcon} />
                <span>{service.duration}</span>
            </div>

            <ul className={styles.features}>
                {service.features.map((feature, index) => (
                    <li key={index} className={styles.feature}>
                        <FontAwesomeIcon icon={getIcon('faCheck')} className={styles.checkIcon} />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>

            <div className={styles.actions}>
                {!isBasic && (
                    <button onClick={handleAddToCart} className="btn btn-primary">
                        <span>أضف للسلة</span>
                        <FontAwesomeIcon icon={getIcon('faShoppingCart')} />
                    </button>
                )}
                <button
                    onClick={handleWhatsAppInquiry}
                    className={isBasic ? 'btn btn-primary' : 'btn btn-secondary'}
                >
                    <span>{'استفسار'}</span>
                    <FontAwesomeIcon icon={getIcon('faWhatsapp')} />
                </button>
            </div>
        </div>
    );
}
