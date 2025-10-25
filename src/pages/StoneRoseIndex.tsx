import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import StoneRoseNavigation from "@/components/stonerose/StoneRoseNavigation";
import StoneRoseHeroSection from "@/components/stonerose/StoneRoseHeroSection";
import StoneRoseOverviewSection from "@/components/stonerose/StoneRoseOverviewSection";
import StoneRoseHealthcareSection from "@/components/stonerose/StoneRoseHealthcareSection";
import StoneRoseLocationSection from "@/components/stonerose/StoneRoseLocationSection";
import StoneRoseSitePlanSection from "@/components/stonerose/StoneRoseSitePlanSection";
import StoneRoseHomeCollection from "@/components/stonerose/StoneRoseHomeCollection";
import StoneRoseRelocationGuide from "@/components/stonerose/StoneRoseRelocationGuide";
import StoneRoseFAQSection from "@/components/stonerose/StoneRoseFAQSection";
import StoneRoseLeadForm from "@/components/stonerose/StoneRoseLeadForm";
import StoneRoseFooter from "@/components/stonerose/StoneRoseFooter";

const StoneRoseIndex = () => {
  const location = useLocation();

  useEffect(() => {
    // Set page title and meta tags for SEO
    document.title = "New Homes Near Niagara Hospital | Stonerose by Treasure Hill | Healthcare Relocation Specialist";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Move-in ready townhomes near South Niagara Hospital from $500Ks. Stonerose offers modern homes 8km from the new hospital. Perfect for healthcare professionals relocating to Niagara Falls."
      );
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute(
        "content",
        "homes near Niagara hospital, Niagara Falls new homes, healthcare relocation Niagara, Stonerose Treasure Hill, South Niagara Hospital homes, medical professional housing, preconstruction homes Niagara Falls"
      );
    }

    // Update robots meta
    const metaRobots = document.querySelector('meta[name="robots"]');
    if (metaRobots) {
      metaRobots.setAttribute("content", "index, follow, max-snippet:-1, max-image-preview:large");
    }

    // Update canonical URL
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute("href", "https://crownofcaledon.ca/niagara-falls-homes-near-hospital");
    }

    // Add structured data for RealEstateAgent
    const realEstateSchema = {
      "@context": "https://schema.org",
      "@type": "RealEstateAgent",
      "name": "Stonerose by Treasure Hill",
      "url": "https://crownofcaledon.ca/niagara-falls-homes-near-hospital",
      "description": "Premium pre-construction townhomes near South Niagara Hospital designed for healthcare professionals and families.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Montrose Road",
        "addressLocality": "Niagara Falls",
        "addressRegion": "ON",
        "postalCode": "L2H",
        "addressCountry": "CA"
      },
      "areaServed": ["Niagara Falls", "Brampton", "Mississauga", "Oakville", "Hamilton", "Waterloo"],
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 43.0896,
        "longitude": -79.0849
      },
      "priceRange": "$500,000 - $600,000"
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
      "image": "https://crownofcaledon.ca/assets/stonerose-hero.jpg",
      "@id": "https://crownofcaledon.ca/niagara-falls-homes-near-hospital",
      "url": "https://crownofcaledon.ca/niagara-falls-homes-near-hospital",
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
    const realEstateScript = document.createElement("script");
    realEstateScript.type = "application/ld+json";
    realEstateScript.text = JSON.stringify(realEstateSchema);
    document.head.appendChild(realEstateScript);

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
      realEstateScript.remove();
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
        <StoneRoseLocationSection />
        <StoneRoseSitePlanSection />
        <StoneRoseHomeCollection />
        <StoneRoseRelocationGuide />
        <StoneRoseFAQSection />
        <StoneRoseLeadForm />
      </main>
      <StoneRoseFooter />
    </div>
  );
};

export default StoneRoseIndex;
