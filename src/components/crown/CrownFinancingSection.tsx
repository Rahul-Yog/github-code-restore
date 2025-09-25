import { DollarSign, Calendar, Gift, CreditCard, Calculator, Shield } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import ContactModal from './CrownContactModal';

const CrownFinancingSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const depositStructure = [
    { timeline: "w/offer", amount: "$20,000" },
    { timeline: "30 days", amount: "$20,000" },
    { timeline: "60 days", amount: "$15,000" },
    { timeline: "120 days", amount: "$15,000" },
    { timeline: "180 days", amount: "$15,000" }
  ];

  const incentives = [
    {
      icon: Gift,
      title: "Early Registration Benefits",
      description: "Exclusive upgrade opportunities for early registrants",
      value: "Available"
    },
    {
      icon: CreditCard,
      title: "Flexible Payment Plans",
      description: "Extended deposit payment schedules may be available",
      value: "Inquire"
    },
    {
      icon: Calculator,
      title: "Mortgage Assistance",
      description: "Pre-approval assistance and financing guidance",
      value: "Support"
    },
    {
      icon: Shield,
      title: "Price Information",
      description: "Speak with our team about current pricing and terms",
      value: "Contact Us"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Flexible <span className="text-accent">Financing Options</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            We make homeownership achievable with flexible payment plans, extended deposit schedules, 
            and exclusive incentives for qualified buyers.
          </p>
        </div>

        {/* Deposit Structure */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">
            Deposit Structure: Total <span className="text-accent">$85,000</span>
          </h3>
          
          <Card className="p-8 max-w-2xl mx-auto">
            <div className="space-y-4">
              {depositStructure.map((item, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                  <span className="font-medium text-foreground">{item.timeline}</span>
                  <span className="font-bold text-accent">{item.amount}</span>
                </div>
              ))}
              <div className="flex justify-between items-center py-3 mt-4 pt-4 border-t-2 border-accent/20">
                <span className="font-bold text-lg text-foreground">Total</span>
                <span className="font-bold text-xl text-accent">$85,000</span>
              </div>
            </div>
          </Card>
          
          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              Balance due on closing: <span className="font-semibold text-foreground">Remainder as per purchase agreement</span>
            </p>
            <p className="text-sm text-muted-foreground">
              *Deposit structure may vary based on home type and purchase price. Speak to our sales team for specific details.
            </p>
          </div>
        </div>

        {/* Incentives Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Incentives */}
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-8">
              Exclusive <span className="text-accent">Buyer Incentives</span>
            </h3>
            
            <div className="space-y-6">
              {incentives.map((item, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-foreground">{item.title}</h4>
                        <span className="text-sm font-bold text-accent">{item.value}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Column - Financing Benefits */}
          <div className="space-y-6">
            <Card className="p-8 bg-gradient-to-br from-accent/5 to-primary/5 border-accent/20">
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <DollarSign className="h-8 w-8 text-accent" />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground">
                  Pre-Construction Advantages
                </h3>
                
                <div className="space-y-4 text-left">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      <span className="font-semibold">Today's Prices:</span> Lock in current pricing before market appreciation
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      <span className="font-semibold">Extended Timeline:</span> More time to save and arrange financing
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      <span className="font-semibold">Customization:</span> Choose finishes and upgrades during construction
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      <span className="font-semibold">New Home Warranty:</span> Full Tarion warranty on your brand new home
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-primary/5 border-primary/20">
              <div className="text-center space-y-4">
                <h4 className="text-xl font-bold text-foreground">
                  Mortgage Pre-Approval Assistance
                </h4>
                <p className="text-muted-foreground text-sm">
                  Our preferred mortgage partners offer competitive rates and pre-approval services 
                  to help you understand your buying power and secure the best financing options.
                </p>
                <Button 
                  onClick={() => setIsModalOpen(true)}
                  className="w-full"
                  variant="outline"
                >
                  Get Financing Information
                </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <Card className="p-8 bg-gradient-to-r from-accent/10 via-primary/10 to-secondary/10 border-accent/20">
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold text-foreground">
              Ready to Secure Your New Home?
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Speak with our sales team to discuss financing options, deposit structures, 
              and current incentives available for Crown of Caledon homes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => setIsModalOpen(true)}
                size="lg"
                className="luxury-gradient text-primary font-semibold px-8"
              >
                Schedule Consultation
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
                Get Floor Plans & Pricing
              </Button>
            </div>
          </div>
        </Card>
      </div>

      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        formType="financing"
      />
    </section>
  );
};

export default CrownFinancingSection;