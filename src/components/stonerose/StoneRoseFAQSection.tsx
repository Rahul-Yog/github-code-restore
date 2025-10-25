import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

const StoneRoseFAQSection = () => {
  const faqs = [
    {
      question: "How far is Stonerose from South Niagara Hospital?",
      answer: "Stonerose townhomes are located approximately 8 kilometers from South Niagara Hospital, offering a short and convenient commute of under 10 minutes. This proximity is ideal for healthcare professionals working various shifts."
    },
    {
      question: "Are there special mortgage incentives for healthcare workers?",
      answer: "We provide information about flexible deposit plans and potential financing options designed to assist healthcare professionals. We work with mortgage specialists who understand the unique financial situations of healthcare workers and can help structure appropriate financing solutions."
    },
    {
      question: "What's the commute like for shift workers?",
      answer: "Stonerose is strategically located just 8km from the new South Niagara Hospital with easy QEW access, making it ideal for healthcare professionals working various shifts. The commute typically takes under 10 minutes, and with reduced traffic during night shifts, it's even faster. The route is well-lit and safe for early morning or late-night commutes."
    },
    {
      question: "Can I move in before the hospital opens?",
      answer: "Yes! Stonerose offers flexible occupancy dates starting in 2026. With the South Niagara Hospital opening in 2028, you can secure your home now at pre-construction pricing, move in when your home is ready, and be perfectly positioned when the hospital opens. This gives you time to settle into the community before starting your new position."
    },
    {
      question: "What deposit structure does Stonerose offer?",
      answer: "Stonerose offers a flexible deposit structure designed to make homeownership accessible: 5% on signing, 5% at 30 days, 5% at 180 days, and 5% at 365 days, totaling 20% over the course of a year. This structure gives you time to save and plan for your investment."
    },
    {
      question: "How does Niagara Falls compare to GTA pricing?",
      answer: "Stonerose offers significant savings compared to GTA markets. Similar homes in Mississauga, Brampton, or Oakville typically cost $200,000-$300,000 more. With Stonerose starting from the mid-$500Ks, healthcare professionals can own a modern, spacious townhome for substantially less while enjoying the same or better quality of life."
    },
    {
      question: "What amenities are near Stonerose?",
      answer: "Stonerose is situated in a family-friendly area with excellent amenities nearby. Within a short drive, you'll find major shopping centers, quality schools, parks and recreational facilities, restaurants and entertainment, and easy QEW access for GTA connections. The location balances suburban tranquility with urban convenience."
    },
    {
      question: "Is this a good investment opportunity?",
      answer: "Yes, for several reasons: 1) Pre-construction pricing locks in today's rates before appreciation, 2) The South Niagara Hospital opening in 2028 will drive long-term demand and property values, 3) Healthcare infrastructure historically boosts surrounding real estate markets, and 4) Niagara's growing healthcare sector ensures sustained demand. Plus, you'll benefit from potential equity growth during the construction period."
    },
    {
      question: "What home designs are available?",
      answer: "Stonerose offers three main floor plans: The Heritage (1,850 sq ft, 3 bed, from $520K), The Legacy (2,100 sq ft, 3+1 bed, from $560K), and The Estate (2,350 sq ft, 4 bed end unit, from $595K). All homes feature modern open-concept designs, quality finishes, and flexible layouts perfect for healthcare professionals and families."
    },
    {
      question: "How do I get started?",
      answer: "Getting started is easy! You can: 1) Download our free Healthcare Relocation Guide above, 2) Schedule a private tour to see the sales center and model homes, 3) Speak with our healthcare relocation specialist who understands your unique needs, or 4) Complete the contact form below and we'll reach out within 24 hours with all the information you need."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Frequently Asked{" "}
              <span className="text-primary">Questions</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about living near Niagara's new hospital 
              and purchasing a pre-construction home at Stonerose.
            </p>
          </div>

          {/* FAQ Accordion */}
          <Card className="border-2">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left px-6 hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>

          {/* Additional Help */}
          <Card className="mt-8 bg-primary/5 border-2 border-primary/20">
            <div className="p-6 text-center">
              <p className="text-foreground mb-4">
                <strong>Still have questions?</strong> Our healthcare relocation specialists 
                are here to help you navigate every step of your home buying journey.
              </p>
              <p className="text-sm text-muted-foreground">
                Contact us anytime at{" "}
                <a href="tel:+19055551234" className="text-primary hover:underline font-semibold">
                  (905) 555-1234
                </a>
                {" "}or{" "}
                <a href="mailto:info@stonerose.com" className="text-primary hover:underline font-semibold">
                  info@stonerose.com
                </a>
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StoneRoseFAQSection;
