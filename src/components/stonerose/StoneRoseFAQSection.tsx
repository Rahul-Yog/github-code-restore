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
      answer: "Stonerose townhomes are located approximately 11 minutes from the $3.6 billion South Niagara Hospital, offering a short and convenient commute. This proximity is ideal for healthcare professionals working various shifts at the state-of-the-art facility opening Summer 2028."
    },
    {
      question: "Are there special mortgage incentives for healthcare workers?",
      answer: "We provide information about flexible deposit plans and potential financing options designed to assist healthcare professionals. We work with mortgage specialists who understand the unique financial situations of healthcare workers and can help structure appropriate financing solutions."
    },
    {
      question: "What's the commute like for shift workers?",
      answer: "Stonerose is strategically located just 11 minutes from the $3.6B South Niagara Hospital with 3-minute QEW access, making it ideal for healthcare professionals working various shifts. With reduced traffic during night shifts, commute times are even faster. The route via Montrose Road is well-lit and safe for early morning or late-night commutes."
    },
    {
      question: "Can I move in before the hospital opens?",
      answer: "Yes! First occupancy at Stonerose is Spring 2027, giving you over a year to settle into your new home before the South Niagara Hospital opens in Summer 2028. You can secure your home now at pre-construction pricing, move in when ready, and be perfectly positioned when the hospital opens. Construction commences Summer 2026."
    },
    {
      question: "What deposit structure does Stonerose offer?",
      answer: "Stonerose offers an attractive and flexible deposit structure: $10,000 on signing, then $5,000 every 30 days for 10 payments, totaling $60,000 spread over 300 days. This extended payment schedule is designed to make homeownership accessible for healthcare professionals while giving you time to save and plan your investment."
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
      answer: "Stonerose Phase 1 features modern townhomes with up to 5 bedrooms and 2-car garages, starting from the mid-$500Ks. Homes include 9ft smooth ceilings on main floor, vinyl flooring, kitchen appliance package plus washer & dryer, air conditioning, and designer-curated packages. The Genius Package features Napoleon electric fireplace and quartz countertops throughout. Bonus: 2-year free POTL fee and $0 development charges!"
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
                 <a href="tel:+14169038026" className="text-primary hover:underline font-semibold">
                  416-903-8026
                </a>
                {" "}or{" "}
                <a href="mailto:info@rahuljindal.ca" className="text-primary hover:underline font-semibold">
                  info@rahuljindal.ca
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
