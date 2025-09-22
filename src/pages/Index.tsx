import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import LocationSection from '@/components/LocationSection';
import SitePlanSection from '@/components/SitePlanSection';
import EnhancedHomeCollection from '@/components/EnhancedHomeCollection';
import CommunityRenderings from '@/components/CommunityRenderings';
import FeaturesSection from '@/components/FeaturesSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import UnionVillageFooter from '@/components/UnionVillageFooter';

const Index = () => {
  console.log('Index page loading...');
  
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <LocationSection />
      <SitePlanSection />
      <EnhancedHomeCollection />
      <CommunityRenderings />
      <FeaturesSection />
      <FAQSection />
      <ContactSection />
      <UnionVillageFooter />
    </div>
  );
};

export default Index;