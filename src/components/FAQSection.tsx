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
      question: "What types of homes are available at Crown of Caledon?",
      answer: "Crown of Caledon offers freehold townhomes and 38' & 60' family singles by award-winning Fieldgate Homes, ranging from 1,800 to 3,500 square feet."
    },
    {
      question: "When will Crown of Caledon be available?",
      answer: "Crown of Caledon is coming soon to the gateway of Caledon. Pre-registration is now available for priority access to floor plans and pricing."
    },
    {
      question: "What community amenities will be available?",
      answer: "The master-planned community will feature winding crescent streets, beautiful greenspaces, water features, walking distance to retail, and a proposed transit hub."
    },
    {
      question: "What is included with Fieldgate Homes?",
      answer: "Fieldgate Homes are known for premium finishes, modern appliances, energy-efficient features, and superior craftsmanship. Specific inclusions vary by home model."
    },
    {
      question: "Is financing assistance available?",
      answer: "We work with preferred lenders to help secure competitive financing options. Our sales team can connect you with mortgage specialists."
    },
    {
      question: "What makes Crown of Caledon special?",
      answer: "Located at the gateway of Caledon with direct access to Highway 410, the community offers natural beauty, modern convenience, and long-term investment potential."
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
            Get answers to common questions about Crown of Caledon
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