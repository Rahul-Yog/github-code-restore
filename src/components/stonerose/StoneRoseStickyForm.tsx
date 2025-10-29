import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Phone, Shield, Users, ChevronUp } from "lucide-react";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().max(20).optional()
});

const StoneRoseStickyForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      // Show form after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate
    try {
      formSchema.parse(formData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.issues[0].message,
          variant: "destructive",
        });
        return;
      }
    }
    
    setIsSubmitting(true);

    try {
      const [firstName, ...lastNameParts] = formData.name.trim().split(" ");
      const lastName = lastNameParts.join(" ") || firstName;

      const { error } = await supabase.functions.invoke('submit-lead', {
        body: {
          first_name: firstName,
          last_name: lastName,
          email: formData.email,
          phone: formData.phone || null,
          form_type: "stonerose_sticky_form",
          source: "stonerose_website",
          interested_in: "Quick Inquiry - Healthcare Professional",
          newsletter_consent: true,
          phone_consent: true
        }
      });

      if (error) throw error;

      toast({
        title: "Request Received!",
        description: "We'll contact you within 2 hours.",
      });

      setFormData({ name: "", email: "", phone: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isVisible) return null;

  if (isMinimized) {
    return (
      <div className="fixed bottom-4 right-4 z-50 animate-in slide-in-from-right-4 fade-in duration-300">
        <Button
          onClick={() => setIsMinimized(false)}
          className="shadow-2xl gap-2"
          size="lg"
        >
          <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="text-sm sm:text-base">Get Floor Plans</span>
          <ChevronUp className="w-3 h-3 sm:w-4 sm:h-4" />
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 left-4 sm:left-auto sm:right-6 sm:bottom-6 z-50 sm:w-80 animate-in slide-in-from-right-4 fade-in duration-500">
      <Card className="border-2 border-primary shadow-2xl">
        <CardContent className="p-4 sm:p-6 relative">
          <div className="absolute top-2 right-2">
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7 sm:h-6 sm:w-6"
              onClick={() => setIsMinimized(true)}
            >
              <ChevronUp className="h-3 w-3 sm:h-4 sm:w-4" />
            </Button>
          </div>
          <div className="text-center mb-3 sm:mb-4 mt-8 sm:mt-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-foreground mb-1">
              Get Floor Plans
            </h3>
            <p className="text-xs text-muted-foreground">
              Healthcare pricing included
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <Label htmlFor="sticky-name" className="text-xs">Full Name</Label>
              <Input
                id="sticky-name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="h-9"
                placeholder="John Smith"
                maxLength={100}
              />
            </div>

            <div>
              <Label htmlFor="sticky-email" className="text-xs">Email</Label>
              <Input
                id="sticky-email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="h-9"
                placeholder="john@email.com"
                maxLength={255}
              />
            </div>

            <div>
              <Label htmlFor="sticky-phone" className="text-xs">Phone (Optional)</Label>
              <Input
                id="sticky-phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                className="h-9"
                placeholder="(905) 555-1234"
                maxLength={20}
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90"
              disabled={isSubmitting}
              size="sm"
            >
              {isSubmitting ? "Sending..." : "Get Plans"}
            </Button>

            <div className="flex items-center gap-2 text-xs text-muted-foreground pt-2">
              <Shield className="w-3 h-3" />
              <span>Your information is secure</span>
            </div>
          </form>

          <div className="mt-3 pt-3 border-t">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Users className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
              <span>15+ professionals secured homes</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StoneRoseStickyForm;
