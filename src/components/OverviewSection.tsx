import { Card } from '@/components/ui/card';
import { Trees, Home, MapPin, Award } from 'lucide-react';

const OverviewSection = () => {
  const highlights = [
    {
      icon: Home,
      title: "Master-Planned Community",
      description: "Thoughtfully designed neighborhood with established charm and modern amenities."
    },
    {
      icon: Trees,
      title: "Abundant Green Space", 
      description: "Preserved wetlands, pedestrian trails, and sprawling parks create a natural oasis."
    },
    {
      icon: MapPin,
      title: "Prime Caledon Location",
      description: "Corner of Hurontario Street and Mayfield Road - countryside charm, city accessibility."
    },
    {
      icon: Award,
      title: "Fieldgate Quality",
      description: "Built by Fieldgate Homes with over 35 years of experience in luxury home construction."
    }
  ];

  return (
    <section id="overview" className="section-spacing bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
            Explore Crown of Caledon
          </h2>
          <div className="w-24 h-1 luxury-gradient mx-auto mb-8"></div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="animate-slide-up">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Crown of Caledon offers luxury freehold homes in one of the GTA's most prestigious areas. 
                Our master-planned community brings together beautiful new homes with Caledon's natural charm.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Located at Hurontario Street and Mayfield Road in Caledon, these new homes 
                offer countryside tranquility with city convenience.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Beautiful homes surrounded by preserved green spaces, walking trails, and parks. 
                This master-planned community by Fieldgate Homes is perfect for families seeking quality living.
              </p>

              <div className="bg-gradient-to-br from-primary/5 to-accent/5 border-l-4 border-accent p-6 rounded-lg">
                <p className="text-primary font-semibold mb-2">New Homes Available Now</p>
                <p className="text-muted-foreground">
                  Crown of Caledon homes are now available starting from $730K. Contact us to learn more about 
                  these premium homes in Caledon.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6 animate-scale-in">
            {highlights.map((highlight, index) => (
              <Card key={index} className="luxury-card group p-6">
                <div className="mb-4">
                  <highlight.icon className="h-8 w-8 text-accent group-hover:text-luxury-gold transition-colors duration-300" />
                </div>
                <h3 className="font-display font-semibold text-lg text-primary mb-3">
                  {highlight.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Fieldgate Quality Section */}
        <div className="mt-16">
          <Card className="luxury-card bg-gradient-to-br from-accent/5 to-luxury-gold/5 border-accent/20 p-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-display font-bold text-primary mb-4">
                Fieldgate Homes Excellence
              </h3>
              <div className="w-16 h-1 luxury-gradient mx-auto mb-6"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 luxury-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-primary">🏗️</span>
                </div>
                <h4 className="font-semibold text-primary mb-2">35+ Years Experience</h4>
                <p className="text-sm text-muted-foreground">
                  Over three decades of building exceptional communities throughout the Greater Toronto Area.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 luxury-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-primary">⭐</span>
                </div>
                <h4 className="font-semibold text-primary mb-2">Award-Winning Quality</h4>
                <p className="text-sm text-muted-foreground">
                  Recognized for excellence in construction, design, and customer satisfaction across Ontario.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 luxury-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-primary">🔑</span>
                </div>
                <h4 className="font-semibold text-primary mb-2">Freehold Ownership</h4>
                <p className="text-sm text-muted-foreground">
                  All homes at Crown of Caledon are freehold properties with no monthly maintenance fees.
                </p>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-lg text-primary font-medium">
                Built by 
                <span className="text-accent font-semibold"> Fieldgate Homes</span>
              </p>
              <p className="text-muted-foreground mt-2">
                Creating exceptional communities where families thrive and memories are made.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;