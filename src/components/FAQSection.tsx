import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQSection = () => {
  const faqs = [
    {
      question: "What types of homes are available?",
      answer: "Union Village offers a variety of home types including detached homes, townhomes, and semi-detached homes ranging from 1,600 to 3,200 square feet."
    },
    {
      question: "What is the expected move-in timeline?",
      answer: "Move-in dates vary by home type and location within the community. Typical construction timelines range from 12-18 months from contract signing."
    },
    {
      question: "Are there any community amenities?",
      answer: "Yes! Union Village features a community center, central park, playground, walking trails, and beautifully landscaped common areas."
    },
    {
      question: "What is included in the home purchase?",
      answer: "All homes include premium finishes, modern appliances, hardwood flooring, and energy-efficient features. Specific inclusions vary by home model."
    },
    {
      question: "Is financing assistance available?",
      answer: "We work with preferred lenders to help secure competitive financing options. Our sales team can connect you with mortgage specialists."
    },
    {
      question: "What are the maintenance fees?",
      answer: "Townhomes and some semi-detached homes have modest maintenance fees for common area upkeep. Detached homes typically have no monthly fees."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Get answers to common questions about Union Village Homes
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-background rounded-lg border">
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                <span className="font-medium text-primary">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;