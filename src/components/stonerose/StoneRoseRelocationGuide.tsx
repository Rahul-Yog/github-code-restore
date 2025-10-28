import { useState } from "react";
import { Download, FileText, MapPin, TrendingUp, Users, Home } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const StoneRoseRelocationGuide = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('submit-lead', {
        body: {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone || null,
          form_type: "stonerose_relocation_guide",
          source: "stonerose_website",
          interested_in: "Stonerose - Healthcare Relocation Guide",
          newsletter_consent: true,  // Set to true for guide downloads
          phone_consent: false
        }
      });

      if (error) throw error;

      toast({
        title: "Success!",
        description: "Your guide will be sent to your email shortly. Check your inbox!",
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: ""
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Failed to submit form. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const guideFeatures = [
    {
      icon: MapPin,
      title: "Hospital Area Overview",
      description: "Detailed information about South Niagara Hospital and surrounding area"
    },
    {
      icon: TrendingUp,
      title: "Cost of Living Analysis",
      description: "Compare Niagara vs. GTA living costs and affordability benefits"
    },
    {
      icon: Users,
      title: "Healthcare Job Market & Networking",
      description: "Employment opportunities, networking groups, and professional associations"
    },
    {
      icon: FileText,
      title: "Ontario License Transfer Guide",
      description: "Step-by-step process for healthcare license registration in Ontario"
    },
    {
      icon: Home,
      title: "Stonerose Home Features",
      description: "Complete floor plans, pricing, and deposit structure information"
    },
    {
      icon: Download,
      title: "Healthcare Relocation Checklist",
      description: "Complete moving checklist specifically for healthcare professionals"
    }
  ];

  return (
    <section id="relocation-guide" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Download className="w-4 h-4" />
              Free Healthcare Relocation Guide
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Get Your Free{" "}
              <span className="text-primary">Healthcare Relocation Guide</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to know about relocating to Niagara for healthcare work. 
              Download our comprehensive 5-page guide covering housing, commutes, costs, and lifestyle.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Guide Features */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                What's Inside the Guide:
              </h3>
              
              {guideFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="border-2 hover:border-primary transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-foreground mb-2">
                            {feature.title}
                          </h4>
                          <p className="text-muted-foreground">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}

              <Card className="bg-primary/5 border-2 border-primary/20">
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Ontario Healthcare License Transfer</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Step-by-step guidance for registering with:
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-1 ml-4">
                      <li>• College of Nurses of Ontario (CNO)</li>
                      <li>• College of Physicians and Surgeons of Ontario (CPSO)</li>
                      <li>• Ontario College of Pharmacists</li>
                      <li>• Other regulated healthcare professions</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Healthcare Professional Networking</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Connect with local healthcare community:
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-1 ml-4">
                      <li>• Niagara Healthcare Professionals Network</li>
                      <li>• South Niagara Hospital staff associations</li>
                      <li>• Local medical society chapters</li>
                      <li>• Professional development opportunities</li>
                    </ul>
                  </div>
                  <div className="pt-3 border-t">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">📧 Instant Delivery:</strong> Get the guide 
                      sent directly to your email within minutes. Plus, receive exclusive updates about 
                      Stonerose availability and healthcare relocation opportunities.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right: Download Form */}
            <Card className="border-2 border-primary sticky top-24">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Download className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Download Your Free Guide
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    No obligation. Instant access. 100% free.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      placeholder="John"
                    />
                  </div>

                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      placeholder="Smith"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="john.smith@email.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number (Optional)</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(905) 555-1234"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-lg py-6"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Download Free Guide Now"}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By downloading, you agree to receive emails about Stonerose updates. 
                    Unsubscribe anytime. We respect your privacy.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoneRoseRelocationGuide;
