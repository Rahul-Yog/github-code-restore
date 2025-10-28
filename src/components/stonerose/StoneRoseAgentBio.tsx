import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Heart, Home, Phone, Mail, CheckCircle } from "lucide-react";
import rahulHeadshot from "@/assets/rahul-headshot.jpg";
import remaxLogo from "@/assets/remax-logo.png";

const StoneRoseAgentBio = () => {
  const credentials = [
    "Healthcare Relocation Specialist",
    "7+ Years Real Estate Experience",
    "Certified Pre-Construction Expert",
    "Niagara Healthcare Market Expert"
  ];

  const achievements = [
    { number: "100+", label: "Healthcare Professionals Helped" },
    { number: "15", label: "Stonerose Buyers Assisted" },
    { number: "$20M+", label: "Healthcare Housing Facilitated" }
  ];

  return (
    <section id="agent-bio" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Heart className="w-4 h-4" />
              Your Healthcare Relocation Specialist
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Meet Your{" "}
              <span className="text-primary">Dedicated Expert</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Specialized in helping healthcare professionals find their perfect home near South Niagara Hospital
            </p>
          </div>

          <Card className="border-2 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-5 gap-0">
                {/* Left: Photo & Logo */}
                <div className="lg:col-span-2 bg-gradient-to-br from-primary/5 to-primary/10 p-8 flex flex-col items-center justify-center">
                  <div className="relative mb-6">
                    <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl">
                      <img
                        src={rahulHeadshot}
                        alt="Rahul Jindal - Healthcare Relocation Specialist and Real Estate Agent specializing in homes near Niagara Falls Hospital"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <Award className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  
                  <div className="text-center mb-4">
                    <h3 className="text-2xl font-bold text-foreground mb-1">Rahul Jindal</h3>
                    <p className="text-sm text-primary font-semibold mb-2">Healthcare Relocation Specialist</p>
                    <p className="text-sm text-muted-foreground">Sales Representative</p>
                  </div>

                  <img
                    src={remaxLogo}
                    alt="RE/MAX Real Estate Brokerage"
                    className="w-32 opacity-80"
                  />
                </div>

                {/* Right: Bio Content */}
                <div className="lg:col-span-3 p-8">
                  <div className="space-y-6">
                    {/* Introduction */}
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-3">
                        Your Partner in Healthcare Housing
                      </h4>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        With over 7 years of real estate experience and specialized expertise in healthcare relocation, 
                        Rahul has helped 100+ doctors, nurses, and medical professionals find their perfect homes in the 
                        Niagara region.
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        Understanding the unique challenges healthcare workers face—shift schedules, relocation timelines, 
                        and financial considerations—Rahul provides personalized guidance throughout your home buying journey. 
                        His deep knowledge of the South Niagara Hospital development and surrounding communities ensures you 
                        make informed decisions.
                      </p>
                    </div>

                    {/* Credentials */}
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-3">Specialized Credentials</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {credentials.map((credential, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{credential}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="grid grid-cols-3 gap-4 py-4 border-y">
                      {achievements.map((achievement, index) => (
                        <div key={index} className="text-center">
                          <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                            {achievement.number}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {achievement.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Why Choose */}
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-3">Why Healthcare Professionals Choose Rahul</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <Home className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Flexible scheduling for shift workers—evenings and weekends available</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Heart className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Deep connections with healthcare community and understanding of your needs</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Award className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Expert knowledge of South Niagara Hospital area and commute patterns</span>
                        </li>
                      </ul>
                    </div>

                    {/* Contact CTAs */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                      <Button
                        className="flex-1 bg-primary hover:bg-primary/90"
                        onClick={() => window.open('tel:+14169038026', '_self')}
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Call: 416-903-8026
                      </Button>
                      <Button
                        variant="outline"
                        className="flex-1"
                        onClick={() => window.open('mailto:info@rahuljindal.ca', '_self')}
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        Email Rahul
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StoneRoseAgentBio;
