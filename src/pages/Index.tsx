import { useEffect, useState } from 'react';
import CrownNavigation from '@/components/crown/CrownNavigation';
import CrownHeroSection from '@/components/crown/CrownHeroSection';
import CrownOverviewSection from '@/components/crown/CrownOverviewSection';
import CrownLocationSection from '@/components/crown/CrownLocationSection';
import CrownHomeCollection from '@/components/crown/CrownHomeCollection';
import CrownAmenities from '@/components/crown/CrownAmenities';
import CrownFAQSection from '@/components/crown/CrownFAQSection';
import CrownLeadForm from '@/components/crown/CrownLeadForm';
import CrownFooter from '@/components/crown/CrownFooter';
import { SocialMediaDownload } from '@/components/SocialMediaDownload';

const Index = () => {
  console.log('Crown of Caledon page loading...');
  const [showSocialDownload, setShowSocialDownload] = useState(false);
  
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('download') === 'social') {
      setShowSocialDownload(true);
    }
    
    if (showSocialDownload) return;
    // SEO optimization based on audit recommendations
    document.title = 'New Homes Caledon | Crown of Caledon Freehold Townhomes & Detached Homes | Fieldgate Homes';
    
    // Enhanced meta description for better keyword targeting
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'New homes in Caledon at Crown of Caledon. Premium freehold townhomes and 38\' detached homes starting from $730K. Move-in ready homes by award-winning Fieldgate Homes near Brampton.');
    
    // Optimized keywords based on SEO audit
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'new homes Caledon, Caledon homes for sale, new construction Caledon, freehold townhomes Caledon, detached homes Caledon, Crown of Caledon, Fieldgate Homes, homes near Brampton');
    
    // Robots meta tag for proper indexation
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.setAttribute('name', 'robots');
      document.head.appendChild(metaRobots);
    }
    metaRobots.setAttribute('content', 'index, follow');
    
    // Enhanced viewport
    let metaViewport = document.querySelector('meta[name="viewport"]');
    if (!metaViewport) {
      metaViewport = document.createElement('meta');
      metaViewport.setAttribute('name', 'viewport');
      document.head.appendChild(metaViewport);
    }
    metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
    
    // Canonical URL
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', window.location.origin + window.location.pathname);
    
    // Add structured data for local business
    let structuredData = document.querySelector('script[type="application/ld+json"]');
    if (!structuredData) {
      structuredData = document.createElement('script');
      structuredData.setAttribute('type', 'application/ld+json');
      document.head.appendChild(structuredData);
    }
    structuredData.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "RealEstateAgent",
      "name": "Crown of Caledon by Fieldgate Homes",
      "description": "New homes in Caledon featuring premium freehold townhomes and detached homes",
      "url": window.location.origin,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Caledon",
        "addressRegion": "Ontario",
        "addressCountry": "CA"
      },
      "areaServed": ["Caledon", "Brampton", "Greater Toronto Area"],
      "makesOffer": {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "New Homes in Caledon",
          "description": "Freehold townhomes and detached homes"
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "730000",
          "priceCurrency": "CAD"
        }
      }
    });
  }, [showSocialDownload]);
  
  if (showSocialDownload) {
    return <SocialMediaDownload />;
  }
  
  return (
    <div className="min-h-screen bg-background">
      <header>
        <CrownNavigation />
      </header>
      <main>
        <CrownHeroSection />
        <section id="overview" aria-label="Overview of Crown of Caledon">
          <CrownOverviewSection />
        </section>
        <section id="location" aria-label="Location and Community">
          <CrownLocationSection />
        </section>
        <section id="homes" aria-label="Home Collection">
          <CrownHomeCollection />
        </section>
        <section id="amenities" aria-label="Community Amenities">
          <CrownAmenities />
        </section>
        <CrownFAQSection />
        <section id="contact" aria-label="Contact Information">
          <CrownLeadForm />
        </section>
      </main>
      <footer>
        <CrownFooter />
      </footer>
    </div>
  );
};

export default Index;