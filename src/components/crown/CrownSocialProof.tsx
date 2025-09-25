import { Star, Quote, Users, CheckCircle, Timer } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useState, useEffect } from 'react';

const CrownSocialProof = () => {
  const [registrantCount, setRegistrantCount] = useState(247);
  const [availableUnits, setAvailableUnits] = useState(89);

  // Simulate real-time updates (in reality, this would come from your backend)
  useEffect(() => {
    const interval = setInterval(() => {
      // Randomly increase registrant count occasionally
      if (Math.random() < 0.1) {
        setRegistrantCount(prev => prev + 1);
        setAvailableUnits(prev => Math.max(0, prev - 1));
      }
    }, 30000); // Check every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: "Sarah & Michael Chen",
      location: "First-time Buyers",
      quote: "The team at Crown of Caledon made our first home purchase so easy. The floor plans are perfect for our growing family and the location is ideal.",
      rating: 5,
      verified: true
    },
    {
      name: "Jennifer Rodriguez",
      location: "Mississauga Resident",
      quote: "We've been looking for a new home for months. Crown of Caledon offers the best value in the GTA with quality finishes and a great community.",
      rating: 5,
      verified: true
    },
    {
      name: "Robert & Linda Thompson",
      location: "Downsizing to Caledon",
      quote: "After 30 years in Toronto, we wanted something quieter but still connected. Crown of Caledon is perfect - nature, convenience, and quality.",
      rating: 5,
      verified: true
    }
  ];

  const trustIndicators = [
    {
      icon: Users,
      value: `${registrantCount}+`,
      label: "Registered Buyers",
      subtext: "and growing daily"
    },
    {
      icon: Timer,
      value: `${availableUnits}`,
      label: "Units Available",
      subtext: "limited remaining"
    },
    {
      icon: CheckCircle,
      value: "100%",
      label: "Price Protection",
      subtext: "guaranteed until closing"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Trust Indicators */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {trustIndicators.map((item, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-accent">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <item.icon className="h-6 w-6 text-accent" />
              </div>
              <div className="text-3xl font-bold text-primary mb-1">{item.value}</div>
              <h3 className="font-semibold text-foreground mb-1">{item.label}</h3>
              <p className="text-sm text-muted-foreground">{item.subtext}</p>
            </Card>
          ))}
        </div>


        {/* Urgency Message */}
        <Card className="p-8 bg-gradient-to-r from-accent/5 via-primary/5 to-secondary/5 border-accent/20">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Timer className="h-6 w-6 text-accent" />
              <h3 className="text-2xl font-bold text-foreground">
                Limited Time Opportunity
              </h3>
            </div>
            
            <p className="text-muted-foreground max-w-3xl mx-auto">
              With growing interest from buyers like you, Crown of Caledon is generating significant attention. 
              Register today to secure priority access to lot selections and current pricing information.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 mt-6 text-sm">
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Best lot selection available now</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Pre-construction pricing locked in</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Early bird incentives available</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CrownSocialProof;