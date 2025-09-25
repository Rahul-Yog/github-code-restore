import { TrendingUp, MapPin, Building, Users, DollarSign, BarChart3 } from 'lucide-react';
import { Card } from '@/components/ui/card';

const CrownInvestmentSection = () => {
  const investmentHighlights = [
    {
      icon: TrendingUp,
      title: "Population Growth",
      value: "76K → 300K",
      description: "Expected population growth by 2051"
    },
    {
      icon: DollarSign,
      title: "Property Values",
      value: "+15%",
      description: "Annual appreciation in Caledon area"
    },
    {
      icon: Building,
      title: "Infrastructure Investment",
      value: "$2.8B",
      description: "Government investment in GTA West corridor"
    },
    {
      icon: BarChart3,
      title: "Market Demand",
      value: "High",
      description: "Strong demand for new construction homes"
    }
  ];

  const locationBenefits = [
    "Future Hurontario LRT extension planned",
    "Highway 410 expansion underway", 
    "New schools and community centers planned",
    "Employment growth in surrounding areas",
    "Limited land supply driving appreciation"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Smart <span className="text-accent">Investment</span> Opportunity
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Caledon is one of the GTA's fastest-growing communities with strong fundamentals 
            supporting long-term property value appreciation and investment potential.
          </p>
        </div>

        {/* Investment Statistics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {investmentHighlights.map((item, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <item.icon className="h-6 w-6 text-accent" />
              </div>
              <div className="text-2xl font-bold text-primary mb-2">{item.value}</div>
              <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>

        {/* Growth Factors */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Why Caledon is <span className="text-accent">Growing Fast</span>
            </h3>
            
            <div className="prose prose-lg">
              <p className="text-muted-foreground leading-relaxed">
                Caledon is experiencing unprecedented growth as part of the Greater Golden Horseshoe development plan. 
                The region is expected to see massive population growth over the next 30 years, driven by:
              </p>
            </div>

            <div className="space-y-3">
              {locationBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">{benefit}</p>
                </div>
              ))}
            </div>

            <Card className="p-6 bg-accent/5 border-accent/20">
              <div className="flex items-start gap-4">
                <MapPin className="h-8 w-8 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-foreground">
                    Strategic Location Advantage
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Crown of Caledon sits at the intersection of major transportation corridors, 
                    with easy access to Highway 410, 407, and future transit connections. 
                    This prime location ensures strong long-term value appreciation.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column - Developer Excellence */}
          <div className="space-y-6">
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Building className="h-8 w-8 text-primary" />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground">
                  Fieldgate Homes Excellence
                </h3>
                
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">65+</div>
                    <p className="text-sm text-muted-foreground">Years Experience</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">65K+</div>
                    <p className="text-sm text-muted-foreground">Homes Built</p>
                  </div>
                </div>
                
                <div className="space-y-3 text-left">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <p className="text-sm text-muted-foreground">Award-winning quality and design</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <p className="text-sm text-muted-foreground">Proven track record of on-time delivery</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <p className="text-sm text-muted-foreground">Strong warranty and customer service</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <p className="text-sm text-muted-foreground">Energy-efficient and sustainable building practices</p>
                  </div>
                </div>
                
                <p className="text-center text-muted-foreground italic text-sm">
                  "Building communities, creating value, delivering excellence since 1958"
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrownInvestmentSection;