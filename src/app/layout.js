import { Cairo, Inter } from 'next/font/google';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import StoreProvider from '@/store/StoreProvider';
import DirectionManager from '@/components/DirectionManager';
import './globals.css';

config.autoAddCss = false;

const cairo = Cairo({
    subsets: ['arabic'],
    weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
    variable: '--font-cairo',
    display: 'swap',
});

const inter = Inter({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
    variable: '--font-inter',
    display: 'swap',
});

export const metadata = {
    title: 'بورتفوليو - نبني مواقع ويب احترافية',
    description: 'نقدم حلول ويب احترافية من كتالوج بسيط إلى منصة متكاملة مع تصميم عصري وأداء عالي',
    keywords: 'تطوير مواقع, تصميم ويب, Next.js, React, كتالوج, متجر إلكتروني',
    authors: [{ name: 'Portfolio Team' }],


    icons: {
        icon: '/favicon.ico',
    },
};
export const viewport = {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#6C63FF'
}

export default function RootLayout({ children }) {
    return (
        <html lang="ar" dir="rtl">
            <body className={`${cairo.className} ${inter.variable}`}>
                <StoreProvider>
                    <DirectionManager>
                        {children}
                    </DirectionManager>
                </StoreProvider>
            </body>
        </html>
    );
}
