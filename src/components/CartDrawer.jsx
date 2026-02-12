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
import styles from './CartDrawer.module.css';

export default function CartDrawer() {
    const items = useSelector(selectCartItems);
    const isOpen = useSelector(selectCartIsOpen);
    const total = useSelector(selectCartTotal);
    const dispatch = useDispatch();

    const handleSendOrder = () => {
        if (items.length > 0) {
            sendCartOrder(items, total);
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
                        <span>سلة الطلبات</span>
                    </h3>
                    <button
                        onClick={() => dispatch(closeCart())}
                        className={styles.closeBtn}
                        aria-label="إغلاق"
                    >
                        <FontAwesomeIcon icon={getIcon('faTimes')} />
                    </button>
                </div>

                <div className={styles.content}>
                    {items.length === 0 ? (
                        <div className={styles.empty}>
                            <FontAwesomeIcon icon={getIcon('faShoppingCart')} className={styles.emptyIcon} />
                            <p className={styles.emptyText}>السلة فارغة</p>
                            <p className={styles.emptySubtext}>أضف خدمة لتبدأ</p>
                        </div>
                    ) : (
                        <>
                            <div className={styles.items}>
                                {items.map((item) => (
                                    <div key={item.id} className={styles.item}>
                                        <div className={styles.itemHeader}>
                                            <h4 className={styles.itemName}>{item.name}</h4>
                                            <button
                                                onClick={() => dispatch(removeItem(item.id))}
                                                className={styles.removeBtn}
                                                aria-label="حذف"
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

                                        {item.features && item.features.length > 0 && (
                                            <ul className={styles.itemFeatures}>
                                                {item.features.slice(0, 3).map((feature, index) => (
                                                    <li key={index}>
                                                        <FontAwesomeIcon icon={getIcon('faCheck')} /> {feature}
                                                    </li>
                                                ))}
                                                {item.features.length > 3 && (
                                                    <li>+ {item.features.length - 3} ميزة أخرى</li>
                                                )}
                                            </ul>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <div className={styles.footer}>
                                <div className={styles.total}>
                                    <span className={styles.totalLabel}>المجموع الكلي:</span>
                                    <span className={styles.totalAmount}>${total} USD</span>
                                </div>

                                <button
                                    onClick={handleSendOrder}
                                    className="btn btn-primary"
                                    style={{ width: '100%' }}
                                >
                                    <span>أرسل الطلب عبر واتساب</span>
                                    <FontAwesomeIcon icon={getIcon('faWhatsapp')} />
                                </button>

                                <button
                                    onClick={() => dispatch(clearCart())}
                                    className="btn btn-secondary"
                                    style={{ width: '100%' }}
                                >
                                    <span>إفراغ السلة</span>
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
