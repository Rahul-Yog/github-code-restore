import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const CrownFAQSection = () => {
  const faqs = [
    {
      question: "What are the starting prices?",
      answer: "Townhomes start from $730K, with various pricing options available for different home types and configurations."
    },
    {
      question: "When will the homes be ready?",
      answer: "Construction timelines vary by home type. Please contact our sales team for specific availability and move-in dates."
    },
    {
      question: "What amenities are included?",
      answer: "All homes feature premium finishes, modern kitchens, energy-efficient features, and access to community amenities."
    },
    {
      question: "Are there financing options available?",
      answer: "Yes, we work with preferred lenders to offer various financing options to qualified buyers."
    }
  ];

  return (
    <section className="section-spacing bg-background-muted">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about Crown of Caledon.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default CrownFAQSection;