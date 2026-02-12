import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PricingSection from '@/components/PricingSection';
import ProjectsGallery from '@/components/ProjectsGallery';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import WhatsAppFAB from '@/components/WhatsAppFAB';

export default function Home() {
    return (
        <main>
            <Navbar />
            <Hero />
            <PricingSection />
            <ProjectsGallery />
            <SkillsSection />
            <ContactSection />
            <Footer />
            <CartDrawer />
            <WhatsAppFAB />
        </main>
    );
}
