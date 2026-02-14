// رقم الواتساب - يمكن تغييره حسب الحاجة
const WHATSAPP_NUMBER = '905377906230';

/**
 * فتح رابط واتساب مع رسالة محددة
 * @param {string} message - الرسالة المراد إرسالها
 */
export const sendToWhatsApp = (message) => {
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(url, '_blank');
};

/**
 * بناء رسالة طلب من السلة بمختلف اللغات
 */
export const buildOrderMessage = (items, total, lang = 'ar') => {
    const t = {
        ar: {
            header: '🛒 *طلب جديد من الموقع*',
            details: '📋 *تفاصيل الطلب:*',
            price: 'السعر',
            quantity: 'الكمية',
            total: 'المجموع',
            grandTotal: 'المجموع الكلي',
            footer: '✨ شكراً لاختياركم خدماتنا!\nسنتواصل معكم قريباً لتأكيد الطلب.'
        },
        tr: {
            header: '🛒 *Siteden Yeni Sipariş*',
            details: '📋 *Sipariş Detayları:*',
            price: 'Fiyat',
            quantity: 'Adet',
            total: 'Toplam',
            grandTotal: 'Genel Toplam',
            footer: '✨ Hizmetlerimizi seçtiğiniz için teşekkürler!\nSiparişinizi onaylamak için yakında sizinle iletişime geçeceğiz.'
        },
        en: {
            header: '🛒 *New Order from Website*',
            details: '📋 *Order Details:*',
            price: 'Price',
            quantity: 'Quantity',
            total: 'Total',
            grandTotal: 'Grand Total',
            footer: '✨ Thank you for choosing our services!\nWe will contact you soon to confirm your order.'
        }
    };

    const strings = t[lang] || t.ar;
    let message = `${strings.header}\n\n`;
    message += `${strings.details}\n`;
    message += '━━━━━━━━━━━━━━━\n\n';

    items.forEach((item, index) => {
        message += `${index + 1}. *${item.name}*\n`;
        message += `   💰 ${strings.price}: $${item.price} USD\n`;
        message += `   🔢 ${strings.quantity}: ${item.quantity}\n`;
        message += `   💵 ${strings.total}: $${item.price * item.quantity} USD\n\n`;
    });

    message += '━━━━━━━━━━━━━━━\n';
    message += `💎 *${strings.grandTotal}: $${total} USD*\n\n`;
    message += strings.footer;

    return message;
};

/**
 * بناء رسالة استفسار عن خدمة
 */
export const buildServiceInquiry = (serviceName, lang = 'ar') => {
    const t = {
        ar: {
            hi: '👋 مرحباً!',
            inquiry: 'أرغب في الاستفسار عن خدمة:',
            contact: 'أرجو التواصل معي لمزيد من التفاصيل.'
        },
        tr: {
            hi: '👋 Merhaba!',
            inquiry: 'Şu hizmet hakkında bilgi almak istiyorum:',
            contact: 'Detaylar için benimle iletişime geçmenizi rica ederim.'
        },
        en: {
            hi: '👋 Hello!',
            inquiry: 'I would like to inquire about:',
            contact: 'Please contact me for more details.'
        }
    };

    const strings = t[lang] || t.ar;
    let message = `${strings.hi}\n\n`;
    message += `${strings.inquiry}\n`;
    message += `📦 *${serviceName}*\n\n`;
    message += strings.contact;

    return message;
};

/**
 * بناء رسالة استفسار عن مشروع مشابه
 */
export const buildProjectInquiry = (projectTitle, lang = 'ar') => {
    const t = {
        ar: {
            hi: '👋 مرحباً!',
            saw: 'شاهدت مشروع:',
            request: 'وأرغب في طلب مشروع مشابه.',
            discuss: 'هل يمكننا مناقشة التفاصيل؟'
        },
        tr: {
            hi: '👋 Merhaba!',
            saw: 'Şu projeyi inceledim:',
            request: 'Benzer bir proje talep etmek istiyorum.',
            discuss: 'Detayları görüşebilir miyiz?'
        },
        en: {
            hi: '👋 Hello!',
            saw: 'I saw your project:',
            request: 'I would like to request a similar project.',
            discuss: 'Can we discuss the details?'
        }
    };

    const strings = t[lang] || t.ar;
    let message = `${strings.hi}\n\n`;
    message += `${strings.saw}\n`;
    message += `🎯 *${projectTitle}*\n\n`;
    message += `${strings.request}\n`;
    message += strings.discuss;

    return message;
};

export const sendCartOrder = (items, total, lang = 'ar') => {
    const message = buildOrderMessage(items, total, lang);
    sendToWhatsApp(message);
};

export const sendServiceInquiry = (serviceName, lang = 'ar') => {
    const message = buildServiceInquiry(serviceName, lang);
    sendToWhatsApp(message);
};

export const sendProjectInquiry = (projectTitle, lang = 'ar') => {
    const message = buildProjectInquiry(projectTitle, lang);
    sendToWhatsApp(message);
};

export const sendGeneralInquiry = (lang = 'ar') => {
    const t = {
        ar: '👋 مرحباً!\n\nأرغب في الاستفسار عن خدماتكم.\nهل يمكننا التحدث؟',
        tr: '👋 Merhaba!\n\nHizmetleriniz hakkında bilgi almak istiyorum.\nGörüşebilir miyiz?',
        en: '👋 Hello!\n\nI would like to inquire about your services.\nCan we talk?'
    };
    sendToWhatsApp(t[lang] || t.ar);
};
