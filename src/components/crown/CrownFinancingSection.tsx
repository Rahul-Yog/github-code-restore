import { DollarSign, Calendar, Gift, CreditCard, Calculator, Shield } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import ContactModal from './CrownContactModal';

const CrownFinancingSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const depositStructure = [
    { timeline: "w/offer" },
    { timeline: "30 days" },
    { timeline: "60 days" },
    { timeline: "120 days" },
    { timeline: "180 days" }
  ];


  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Flexible <span className="text-accent">Deposit Structure</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            We understand that every buyer's financial situation is unique. Our flexible deposit structure 
            is designed to accommodate various needs and timelines, making homeownership more accessible.
          </p>
        </div>

        {/* Deposit Structure */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-foreground text-center mb-8">
            Standard <span className="text-accent">Payment Schedule</span>
          </h3>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="p-8">
              <div className="text-center mb-6">
                <h4 className="text-xl font-semibold text-foreground mb-4">Typical Payment Timeline</h4>
                <p className="text-muted-foreground">
                  Our standard deposit structure follows industry-standard timelines, but we understand that 
                  flexibility is important. We work with buyers to accommodate various financial situations.
                </p>
              </div>
              
              <div className="grid grid-cols-5 gap-4 mb-6">
                {depositStructure.map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Calendar className="h-8 w-8 text-accent" />
                    </div>
                    <div className="font-medium text-foreground">{item.timeline}</div>
                  </div>
                ))}
              </div>
            </Card>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6 bg-gradient-to-br from-accent/5 to-primary/5 border-accent/20">
                <h4 className="text-lg font-semibold text-foreground mb-4">Flexible Options Available</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>Extended payment timelines for qualified buyers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>Customized deposit structures based on individual needs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>Multiple payment methods accepted</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>Professional consultation on payment planning</span>
                  </li>
                </ul>
              </Card>
              
              <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
                <h4 className="text-lg font-semibold text-foreground mb-4">Why Choose Flexible Deposits?</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Better cash flow management during construction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Time to secure optimal mortgage rates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Opportunity to save additional funds for closing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Peace of mind with structured payments</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              <span className="font-semibold text-foreground">Deposit amounts and specific terms</span> vary based on home type, purchase price, and individual circumstances.
            </p>
            <p className="text-sm text-muted-foreground">
              Contact our sales team to discuss personalized deposit structure options that work best for your situation.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <Card className="p-8 bg-gradient-to-r from-accent/10 via-primary/10 to-secondary/10 border-accent/20">
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold text-foreground">
              Ready to Learn More About Our Flexible Options?
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every buyer's situation is unique. Our sales team can work with you to create a deposit structure 
              and payment plan that fits your financial needs and timeline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => setIsModalOpen(true)}
                size="lg"
                className="luxury-gradient text-primary font-semibold px-8"
              >
                Discuss Payment Options
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="px-8"
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Get More Information
              </Button>
            </div>
          </div>
        </Card>
      </div>

      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        formType="general"
      />
    </section>
  );
};

export default CrownFinancingSection;