// رقم الواتساب - يمكن تغييره حسب الحاجة
const WHATSAPP_NUMBER = '905377906230'; // استبدل بالرقم الحقيقي

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
 * بناء رسالة طلب من السلة
 * @param {Array} items - عناصر السلة
 * @param {number} total - المجموع الكلي
 * @returns {string} - الرسالة المنسقة
 */
export const buildOrderMessage = (items, total) => {
    let message = '🛒 *طلب جديد من الموقع*\n\n';

    message += '📋 *تفاصيل الطلب:*\n';
    message += '━━━━━━━━━━━━━━━\n\n';

    items.forEach((item, index) => {
        message += `${index + 1}. *${item.name}*\n`;
        message += `   💰 السعر: $${item.price} USD\n`;
        message += `   🔢 الكمية: ${item.quantity}\n`;
        message += `   💵 المجموع: $${item.price * item.quantity} USD\n\n`;
    });

    message += '━━━━━━━━━━━━━━━\n';
    message += `💎 *المجموع الكلي: $${total} USD*\n\n`;
    message += '✨ شكراً لاختياركم خدماتنا!\n';
    message += 'سنتواصل معكم قريباً لتأكيد الطلب.';

    return message;
};

/**
 * بناء رسالة استفسار عن خدمة
 * @param {string} serviceName - اسم الخدمة
 * @param {number} price - سعر الخدمة
 * @returns {string} - الرسالة المنسقة
 */
export const buildServiceInquiry = (serviceName, price) => {
    let message = '👋 مرحباً!\n\n';
    message += `أرغب في الاستفسار عن خدمة:\n`;
    message += `📦 *${serviceName}*\n`;
    message += `💰 السعر: $${price} USD\n\n`;
    message += 'أرجو التواصل معي لمزيد من التفاصيل.';

    return message;
};

/**
 * بناء رسالة استفسار عن مشروع مشابه
 * @param {string} projectTitle - عنوان المشروع
 * @returns {string} - الرسالة المنسقة
 */
export const buildProjectInquiry = (projectTitle) => {
    let message = '👋 مرحباً!\n\n';
    message += `شاهدت مشروع:\n`;
    message += `🎯 *${projectTitle}*\n\n`;
    message += 'وأرغب في طلب مشروع مشابه.\n';
    message += 'هل يمكننا مناقشة التفاصيل؟';

    return message;
};

/**
 * بناء رسالة استفسار عامة
 * @returns {string} - الرسالة المنسقة
 */
export const buildGeneralInquiry = () => {
    let message = '👋 مرحباً!\n\n';
    message += 'أرغب في الاستفسار عن خدماتكم.\n';
    message += 'هل يمكننا التحدث؟';

    return message;
};

/**
 * إرسال طلب من السلة عبر واتساب
 * @param {Array} items - عناصر السلة
 * @param {number} total - المجموع الكلي
 */
export const sendCartOrder = (items, total) => {
    const message = buildOrderMessage(items, total);
    sendToWhatsApp(message);
};

/**
 * إرسال استفسار عن خدمة عبر واتساب
 * @param {string} serviceName - اسم الخدمة
 * @param {number} price - سعر الخدمة
 */
export const sendServiceInquiry = (serviceName, price) => {
    const message = buildServiceInquiry(serviceName, price);
    sendToWhatsApp(message);
};

/**
 * إرسال استفسار عن مشروع عبر واتساب
 * @param {string} projectTitle - عنوان المشروع
 */
export const sendProjectInquiry = (projectTitle) => {
    const message = buildProjectInquiry(projectTitle);
    sendToWhatsApp(message);
};

/**
 * إرسال استفسار عام عبر واتساب
 */
export const sendGeneralInquiry = () => {
    const message = buildGeneralInquiry();
    sendToWhatsApp(message);
};
