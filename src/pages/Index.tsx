import { useEffect } from 'react';
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
  
  useEffect(() => {
    // Set SEO meta tags
    document.title = 'New Homes in Caledon | Crown of Caledon | Fieldgate Homes';
    
    // Create or update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Discover Crown of Caledon - premium new homes in Caledon featuring freehold townhomes and 38\' detached homes near Brampton. From $730K by Fieldgate Homes.');
    
    // Create or update keywords meta tag
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'new homes Caledon, Caledon homes for sale, freehold townhomes Caledon, detached homes Caledon, Fieldgate Homes, Crown of Caledon, new construction Caledon');
    
    // Create or update viewport meta tag
    let metaViewport = document.querySelector('meta[name="viewport"]');
    if (!metaViewport) {
      metaViewport = document.createElement('meta');
      metaViewport.setAttribute('name', 'viewport');
      document.head.appendChild(metaViewport);
    }
    metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
    
    // Add canonical URL
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', window.location.origin + window.location.pathname);
  }, []);
  
  return (
    <div className="min-h-screen bg-background">
      <CrownNavigation />
      <CrownHeroSection />
      <section id="overview">
        <CrownOverviewSection />
      </section>
      <section id="location">
        <CrownLocationSection />
      </section>
      <section id="homes">
        <CrownHomeCollection />
      </section>
      <section id="amenities">
        <CrownAmenities />
      </section>
      <CrownFAQSection />
      <section id="contact">
        <CrownLeadForm />
      </section>
      <CrownFooter />
    </div>
  );
};

export default Index;