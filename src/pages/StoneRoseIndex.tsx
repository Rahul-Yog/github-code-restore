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
import StoneRoseHSTRebateSection from "@/components/stonerose/StoneRoseHSTRebateSection";
import StoneRoseLeadForm from "@/components/stonerose/StoneRoseLeadForm";
import StoneRoseStickyForm from "@/components/stonerose/StoneRoseStickyForm";
import StoneRoseFooter from "@/components/stonerose/StoneRoseFooter";

const StoneRoseIndex = () => {
  const location = useLocation();

  useEffect(() => {
    // Set page title and meta tags for SEO - Optimized for target keywords
    document.title = "First-Time Buyers Save $74K+ HST | Homes Near Niagara Falls Hospital | New Home Rebate 2025";
    
    // Update meta description - Optimized for conversions
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "NEW 2025 Ontario HST Rebate: First-time home buyers save up to $74K (13% GST/HST relief) on new homes near South Niagara Hospital. Pre-construction townhomes from mid-$500Ks, effective price from $495K after rebate. Perfect for healthcare professionals. May 27, 2025 policy. Spring 2027 occupancy."
      );
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "NEW 2025 Ontario HST Rebate: First-time home buyers save up to $74K (13% GST/HST relief) on new homes near South Niagara Hospital. Pre-construction townhomes from mid-$500Ks, effective price from $495K after rebate. Perfect for healthcare professionals. May 27, 2025 policy. Spring 2027 occupancy.";
      document.head.appendChild(meta);
    }

    // Update meta keywords - Primary and long-tail keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute(
        "content",
        "first-time home buyers Ontario HST rebate, Ontario first time buyer HST rebate 2025, GST HST relief new homes, new home tax savings Ontario, first time home buyer incentives Ontario, GST relief first time buyers, Ontario housing affordability, $130000 first time buyer savings, save 13% HST new homes, new home HST rebate calculator, May 27 2025 HST rebate, homes near Niagara Falls hospital, pre-construction townhomes Niagara Falls, new homes South Niagara Hospital, healthcare professional housing, first time buyer new construction, Treasure Hill Homes pre-construction"
      );
    } else {
      const meta = document.createElement('meta');
      meta.name = "keywords";
      meta.content = "first-time home buyers Ontario HST rebate, Ontario first time buyer HST rebate 2025, GST HST relief new homes, new home tax savings Ontario, first time home buyer incentives Ontario, GST relief first time buyers, Ontario housing affordability, $130000 first time buyer savings, save 13% HST new homes, new home HST rebate calculator, May 27 2025 HST rebate, homes near Niagara Falls hospital, pre-construction townhomes Niagara Falls, new homes South Niagara Hospital, healthcare professional housing, first time buyer new construction, Treasure Hill Homes pre-construction";
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
      { property: "og:title", content: "First-Time Buyers Save $74K+ HST | New Homes Near Niagara Falls Hospital 2025" },
      { property: "og:description", content: "NEW Ontario HST Rebate: Save up to $74K on pre-construction homes near South Niagara Hospital. 13% GST/HST relief for first-time buyers. From mid-$500Ks." },
      { property: "og:url", content: "https://caledonhome.ca/niagara-falls-homes-near-hospital" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://caledonhome.ca/assets/stonerose-hero-niagara.jpg" },
      { property: "og:locale", content: "en_CA" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "First-Time Buyers Save $74K+ HST | New Homes Niagara Falls 2025" },
      { name: "twitter:description", content: "NEW Ontario HST Rebate: Save up to $74K on homes near South Niagara Hospital. 13% GST/HST relief." }
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
      "name": "Stonerose Pre-Construction Townhomes - First-Time Buyers Save $74K+ HST",
      "description": "NEW 2025 Ontario HST Rebate: First-time home buyers save up to $74,087 in combined federal GST and provincial HST rebates on pre-construction townhomes near South Niagara Hospital. Modern 3-5 bedroom homes from mid-$500Ks with effective pricing from $495K after rebate. Perfect for healthcare professionals and first-time buyers. Agreements signed on/after May 27, 2025 qualify. Spring 2027 occupancy.",
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
      <StoneRoseHSTRebateSection />
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
