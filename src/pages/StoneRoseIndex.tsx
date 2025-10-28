import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import StoneRoseNavigation from "@/components/stonerose/StoneRoseNavigation";
import StoneRoseHeroSection from "@/components/stonerose/StoneRoseHeroSection";
import StoneRoseOverviewSection from "@/components/stonerose/StoneRoseOverviewSection";
import StoneRoseHealthcareSection from "@/components/stonerose/StoneRoseHealthcareSection";
import StoneRoseHousingFeatures from "@/components/stonerose/StoneRoseHousingFeatures";
import StoneRoseTestimonials from "@/components/stonerose/StoneRoseTestimonials";
import StoneRoseInvestmentAnalysis from "@/components/stonerose/StoneRoseInvestmentAnalysis";
import StoneRoseLocationSection from "@/components/stonerose/StoneRoseLocationSection";
import StoneRoseSitePlanSection from "@/components/stonerose/StoneRoseSitePlanSection";
import StoneRoseHomeCollection from "@/components/stonerose/StoneRoseHomeCollection";
import StoneRoseAmenitiesSection from "@/components/stonerose/StoneRoseAmenitiesSection";
import StoneRoseAgentBio from "@/components/stonerose/StoneRoseAgentBio";
import StoneRoseRelocationGuide from "@/components/stonerose/StoneRoseRelocationGuide";
import StoneRoseFAQSection from "@/components/stonerose/StoneRoseFAQSection";
import StoneRoseLeadForm from "@/components/stonerose/StoneRoseLeadForm";
import StoneRoseStickyForm from "@/components/stonerose/StoneRoseStickyForm";
import StoneRoseFooter from "@/components/stonerose/StoneRoseFooter";

const StoneRoseIndex = () => {
  const location = useLocation();

  useEffect(() => {
    // Set page title and meta tags for SEO - Optimized for target keywords
    document.title = "Homes Near Niagara Falls Hospital - Healthcare Worker Housing | Pre-Construction from Mid-$500Ks";
    
    // Update meta description - Optimized for conversions
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Pre-construction homes near South Niagara Hospital from mid-$500Ks. 11-minute commute. Modern 3-5 bedroom townhomes perfect for healthcare professionals. First occupancy Spring 2027. Register now for exclusive pricing."
      );
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Pre-construction homes near South Niagara Hospital from mid-$500Ks. 11-minute commute. Modern 3-5 bedroom townhomes perfect for healthcare professionals. First occupancy Spring 2027. Register now for exclusive pricing.";
      document.head.appendChild(meta);
    }

    // Update meta keywords - Primary and long-tail keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute(
        "content",
        "homes near Niagara Falls hospital, South Niagara Hospital homes, healthcare worker housing Niagara, pre-construction homes Niagara Falls, homes for sale Niagara Falls, new homes near hospital, healthcare relocation Niagara, Niagara Falls homes for sale near hospital, Stonerose Treasure Hill, homes for healthcare professionals"
      );
    } else {
      const meta = document.createElement('meta');
      meta.name = "keywords";
      meta.content = "homes near Niagara Falls hospital, South Niagara Hospital homes, healthcare worker housing Niagara, pre-construction homes Niagara Falls, homes for sale Niagara Falls, new homes near hospital, healthcare relocation Niagara, Niagara Falls homes for sale near hospital, Stonerose Treasure Hill, homes for healthcare professionals";
      document.head.appendChild(meta);
    }

    // Update robots meta
    const metaRobots = document.querySelector('meta[name="robots"]');
    if (metaRobots) {
      metaRobots.setAttribute("content", "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1");
    } else {
      const meta = document.createElement('meta');
      meta.name = "robots";
      meta.content = "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1";
      document.head.appendChild(meta);
    }

    // Update canonical URL
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute("href", "https://caledonhome.ca/niagara-falls-homes-near-hospital");
    } else {
      const link = document.createElement('link');
      link.rel = "canonical";
      link.href = "https://caledonhome.ca/niagara-falls-homes-near-hospital";
      document.head.appendChild(link);
    }

    // Add Open Graph meta tags
    const ogTags = [
      { property: "og:title", content: "Homes Near Niagara Falls Hospital - Healthcare Worker Housing from Mid-$500Ks" },
      { property: "og:description", content: "Pre-construction homes 11 minutes from South Niagara Hospital. Perfect for healthcare professionals. 3-5 bedrooms, 2-car garage. First occupancy 2027." },
      { property: "og:url", content: "https://caledonhome.ca/niagara-falls-homes-near-hospital" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://caledonhome.ca/assets/stonerose-hero-niagara.jpg" },
      { property: "og:locale", content: "en_CA" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Homes Near Niagara Falls Hospital - Healthcare Worker Housing" },
      { name: "twitter:description", content: "Pre-construction homes 11 minutes from South Niagara Hospital from mid-$500Ks." }
    ];

    ogTags.forEach(tag => {
      const existingTag = document.querySelector(`meta[${tag.property ? 'property' : 'name'}="${tag.property || tag.name}"]`);
      if (existingTag) {
        existingTag.setAttribute("content", tag.content);
      } else {
        const meta = document.createElement('meta');
        if (tag.property) {
          meta.setAttribute('property', tag.property);
        } else {
          meta.setAttribute('name', tag.name);
        }
        meta.content = tag.content;
        document.head.appendChild(meta);
      }
    });

    // Add structured data for RealEstateListing
    const realEstateListingSchema = {
      "@context": "https://schema.org",
      "@type": "RealEstateListing",
      "name": "Stonerose Pre-Construction Townhomes - Homes Near Niagara Falls Hospital",
      "description": "Pre-construction townhomes 11 minutes from South Niagara Hospital. Perfect for healthcare professionals. 3-5 bedrooms, 2-car garage, from mid-$500Ks.",
      "url": "https://caledonhome.ca/niagara-falls-homes-near-hospital",
      "image": "https://caledonhome.ca/assets/stonerose-hero-niagara.jpg",
      "datePosted": "2024-01-01",
      "availableFrom": "2027-03-01",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Montrose Road",
        "addressLocality": "Niagara Falls",
        "addressRegion": "ON",
        "postalCode": "L2H",
        "addressCountry": "CA"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 43.0896,
        "longitude": -79.0849
      },
      "offers": {
        "@type": "Offer",
        "priceCurrency": "CAD",
        "price": "550000",
        "availability": "https://schema.org/PreOrder",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "minPrice": "550000",
          "maxPrice": "600000",
          "priceCurrency": "CAD"
        }
      },
      "numberOfRooms": "3-5",
      "floorSize": {
        "@type": "QuantitativeValue",
        "value": "1800-2400",
        "unitCode": "FTK"
      },
      "numberOfBedrooms": "3-5",
      "numberOfBathroomsTotal": "2-3",
      "amenityFeature": [
        {
          "@type": "LocationFeatureSpecification",
          "name": "2-Car Garage"
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "11 minutes to South Niagara Hospital"
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "QEW Access"
        }
      ]
    };

    // Add structured data for RealEstateAgent
    const realEstateAgentSchema = {
      "@context": "https://schema.org",
      "@type": "RealEstateAgent",
      "name": "Rahul Jindal - Healthcare Relocation Specialist",
      "url": "https://caledonhome.ca/niagara-falls-homes-near-hospital",
      "description": "Healthcare relocation specialist helping doctors, nurses, and medical professionals find homes near South Niagara Hospital.",
      "email": "info@rahuljindal.ca",
      "telephone": "+14169038026",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Niagara Falls",
        "addressRegion": "ON",
        "addressCountry": "CA"
      },
      "areaServed": ["Niagara Falls", "Niagara Region", "St. Catharines", "Hamilton"],
      "priceRange": "$500,000 - $2,000,000"
    };

    // Add structured data for FAQPage
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How far is Stonerose from South Niagara Hospital?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Stonerose townhomes are located approximately 8 kilometers from South Niagara Hospital, offering a short and convenient commute for healthcare professionals."
          }
        },
        {
          "@type": "Question",
          "name": "Are there special mortgage incentives for healthcare workers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We provide information about flexible deposit plans and potential financing options designed to assist healthcare professionals relocating to the Niagara region."
          }
        },
        {
          "@type": "Question",
          "name": "What's the commute like for shift workers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Stonerose is strategically located just 8km from the new South Niagara Hospital with easy QEW access, making it ideal for healthcare professionals working various shifts."
          }
        },
        {
          "@type": "Question",
          "name": "Can I move in before the hospital opens?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Stonerose offers flexible occupancy dates. With the South Niagara Hospital opening in 2028, you can secure your home now and be ready when the hospital opens."
          }
        }
      ]
    };

    // Add LocalBusiness schema
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Stonerose Niagara Falls - Healthcare Relocation Specialist",
      "image": "https://caledonhome.ca/assets/stonerose-hero.jpg",
      "@id": "https://caledonhome.ca/niagara-falls-homes-near-hospital",
      "url": "https://caledonhome.ca/niagara-falls-homes-near-hospital",
      "telephone": "+1-905-555-1234",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Montrose Road",
        "addressLocality": "Niagara Falls",
        "addressRegion": "ON",
        "postalCode": "L2H",
        "addressCountry": "CA"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 43.0896,
        "longitude": -79.0849
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "09:00",
        "closes": "21:00"
      }
    };

    // Remove any existing structured data scripts for this page
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script => {
      if (script.textContent?.includes('Stonerose')) {
        script.remove();
      }
    });

    // Add new structured data scripts
    const realEstateListingScript = document.createElement("script");
    realEstateListingScript.type = "application/ld+json";
    realEstateListingScript.text = JSON.stringify(realEstateListingSchema);
    document.head.appendChild(realEstateListingScript);

    const realEstateAgentScript = document.createElement("script");
    realEstateAgentScript.type = "application/ld+json";
    realEstateAgentScript.text = JSON.stringify(realEstateAgentSchema);
    document.head.appendChild(realEstateAgentScript);

    const faqScript = document.createElement("script");
    faqScript.type = "application/ld+json";
    faqScript.text = JSON.stringify(faqSchema);
    document.head.appendChild(faqScript);

    const localBusinessScript = document.createElement("script");
    localBusinessScript.type = "application/ld+json";
    localBusinessScript.text = JSON.stringify(localBusinessSchema);
    document.head.appendChild(localBusinessScript);

    // Cleanup function
    return () => {
      realEstateListingScript.remove();
      realEstateAgentScript.remove();
      faqScript.remove();
      localBusinessScript.remove();
    };
  }, [location]);

  return (
    <div className="min-h-screen bg-background">
      <StoneRoseNavigation />
      <main>
        <StoneRoseHeroSection />
        <StoneRoseOverviewSection />
        <StoneRoseHealthcareSection />
        <StoneRoseHousingFeatures />
        <StoneRoseTestimonials />
        <StoneRoseInvestmentAnalysis />
        <StoneRoseLocationSection />
        <StoneRoseSitePlanSection />
        <StoneRoseHomeCollection />
        <StoneRoseAmenitiesSection />
        <StoneRoseAgentBio />
        <StoneRoseRelocationGuide />
        <StoneRoseFAQSection />
        <StoneRoseLeadForm />
        <StoneRoseStickyForm />
      </main>
      <StoneRoseFooter />
    </div>
  );
};

export default StoneRoseIndex;
