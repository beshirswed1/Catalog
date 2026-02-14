'use client';

import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    selectCartItems,
    selectCartIsOpen,
    selectCartTotal,
    closeCart,
    removeItem,
    clearCart
} from '@/features/cart/cartSlice';
import { sendCartOrder } from '@/utils/whatsapp';
import { getIcon } from '@/utils/icons';
import { useTranslation } from '@/hooks/useTranslation';
import { getServiceById } from '@/data/services';
import styles from './CartDrawer.module.css';

export default function CartDrawer() {
    const items = useSelector(selectCartItems);
    const isOpen = useSelector(selectCartIsOpen);
    const total = useSelector(selectCartTotal);
    const dispatch = useDispatch();
    const { t, currentLang } = useTranslation();

    const getTranslatedName = (item) => {
        const service = getServiceById(item.id);
        if (service) {
            const langSuffix = currentLang.charAt(0).toUpperCase() + currentLang.slice(1);
            return service[`name${langSuffix}`] || service[`nameAr`];
        }
        return item.name;
    };

    const handleSendOrder = () => {
        if (items.length > 0) {
            // Re-map items with current translation for WhatsApp
            const translatedItems = items.map(item => ({
                ...item,
                name: getTranslatedName(item)
            }));
            sendCartOrder(translatedItems, total, currentLang);
            dispatch(clearCart());
            dispatch(closeCart());
        }
    };

    if (!isOpen) return null;

    return (
        <>
            <div className={styles.backdrop} onClick={() => dispatch(closeCart())} />

            <div className={styles.drawer}>
                <div className={styles.header}>
                    <h3 className={styles.title}>
                        <FontAwesomeIcon icon={getIcon('faShoppingCart')} />
                        <span>{t.cart.title}</span>
                    </h3>
                    <button
                        onClick={() => dispatch(closeCart())}
                        className={styles.closeBtn}
                        aria-label={t.cart.close}
                    >
                        <FontAwesomeIcon icon={getIcon('faTimes')} />
                    </button>
                </div>

                <div className={styles.content}>
                    {items.length === 0 ? (
                        <div className={styles.empty}>
                            <FontAwesomeIcon icon={getIcon('faShoppingCart')} className={styles.emptyIcon} />
                            <p className={styles.emptyText}>{t.cart.empty}</p>
                            <p className={styles.emptySubtext}>{t.cart.emptySubtext}</p>
                        </div>
                    ) : (
                        <>
                            <div className={styles.items}>
                                {items.map((item) => (
                                    <div key={item.id} className={styles.item}>
                                        <div className={styles.itemHeader}>
                                            <h4 className={styles.itemName}>{getTranslatedName(item)}</h4>
                                            <button
                                                onClick={() => dispatch(removeItem(item.id))}
                                                className={styles.removeBtn}
                                                aria-label={t.cart.delete}
                                            >
                                                <FontAwesomeIcon icon={getIcon('faTrash')} />
                                            </button>
                                        </div>

                                        <div className={styles.itemDetails}>
                                            <div className={styles.itemPrice}>
                                                ${item.price} USD × {item.quantity}
                                            </div>
                                            <div className={styles.itemTotal}>
                                                ${item.price * item.quantity} USD
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className={styles.footer}>
                                <div className={styles.total}>
                                    <span className={styles.totalLabel}>{t.cart.total}</span>
                                    <span className={styles.totalAmount}>${total} USD</span>
                                </div>

                                <button
                                    onClick={handleSendOrder}
                                    className="btn btn-primary"
                                    style={{ width: '100%' }}
                                >
                                    <span>{t.cart.sendOrder}</span>
                                    <FontAwesomeIcon icon={getIcon('faWhatsapp')} />
                                </button>

                                <button
                                    onClick={() => dispatch(clearCart())}
                                    className="btn btn-secondary"
                                    style={{ width: '100%' }}
                                >
                                    <span>{t.cart.clearCart}</span>
                                    <FontAwesomeIcon icon={getIcon('faTrash')} />
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}
