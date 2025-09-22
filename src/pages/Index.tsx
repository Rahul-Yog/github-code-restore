import CrownNavigation from '@/components/crown/CrownNavigation';
import CrownHeroSection from '@/components/crown/CrownHeroSection';
import CrownOverviewSection from '@/components/crown/CrownOverviewSection';
import CrownLocationSection from '@/components/crown/CrownLocationSection';
import CrownHomeCollection from '@/components/crown/CrownHomeCollection';
import CrownAmenities from '@/components/crown/CrownAmenities';
import CrownFAQSection from '@/components/crown/CrownFAQSection';
import CrownLeadForm from '@/components/crown/CrownLeadForm';
import CrownFooter from '@/components/crown/CrownFooter';

const Index = () => {
  console.log('Crown of Caledon page loading...');
  
  return (
    <div className="min-h-screen bg-background">
      <CrownNavigation />
      <CrownHeroSection />
      <CrownOverviewSection />
      <CrownLocationSection />
      <div id="homes">
        <CrownHomeCollection />
      </div>
      <CrownAmenities />
      <CrownFAQSection />
      <CrownLeadForm />
      <CrownFooter />
    </div>
  );
};

export default Index;