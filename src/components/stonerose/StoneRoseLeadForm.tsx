import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Phone, Mail, MapPin } from "lucide-react";

const StoneRoseLeadForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    currentLocation: "",
    timeline: "",
    isHealthcareProfessional: false,
    message: "",
    newsletterConsent: false,
    phoneConsent: false
  });
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData({
      ...formData,
      [name]: checked
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from("Crown Of Caledon Leads")
        .insert({
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone || null,
          timeline: formData.timeline,
          message: formData.message,
          form_type: "stonerose_contact",
          source: "stonerose_website",
          interested_in: formData.isHealthcareProfessional 
            ? `Stonerose - Healthcare Professional from ${formData.currentLocation}` 
            : `Stonerose - ${formData.currentLocation}`,
          newsletter_consent: formData.newsletterConsent,
          phone_consent: formData.newsletterConsent
        });

      if (error) throw error;

      toast({
        title: "Thank you for your interest!",
        description: "We'll contact you within 24 hours to schedule your private tour.",
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        currentLocation: "",
        timeline: "",
        isHealthcareProfessional: false,
        message: "",
        newsletterConsent: false,
        phoneConsent: false
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Failed to submit form. Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Ready to Find Your{" "}
              <span className="text-primary">Dream Home?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Contact us today to schedule a private tour, request floor plans, 
              or speak with our healthcare relocation specialist.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left: Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="border-2">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-sm font-semibold text-foreground">Phone</p>
                        <a href="tel:+14169038026" className="text-sm text-primary hover:underline">
                          416-903-8026
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-sm font-semibold text-foreground">Email</p>
                        <a href="mailto:info@rahuljindal.ca" className="text-sm text-primary hover:underline">
                          info@rahuljindal.ca
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-sm font-semibold text-foreground">Agent</p>
                        <p className="text-sm text-muted-foreground">
                          Rahul Jindal<br />
                          Real Estate Salesperson<br />
                          RE/MAX Skyway Realty Brokerage
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary/5 border-2 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    Sales Center Hours
                  </h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p><strong className="text-foreground">Mon-Thu:</strong> 12pm - 6pm</p>
                    <p><strong className="text-foreground">Fri-Sun:</strong> 11am - 5pm</p>
                    <p className="text-xs pt-2">
                      Or by appointment - we accommodate healthcare shift schedules
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right: Contact Form */}
            <Card className="lg:col-span-2 border-2">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
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
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
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
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="currentLocation">Current Location</Label>
                      <Select
                        name="currentLocation"
                        onValueChange={(value) => handleSelectChange("currentLocation", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select your location" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Mississauga">Mississauga</SelectItem>
                          <SelectItem value="Brampton">Brampton</SelectItem>
                          <SelectItem value="Oakville">Oakville</SelectItem>
                          <SelectItem value="Hamilton">Hamilton</SelectItem>
                          <SelectItem value="Waterloo">Waterloo</SelectItem>
                          <SelectItem value="Toronto">Toronto</SelectItem>
                          <SelectItem value="Other GTA">Other GTA</SelectItem>
                          <SelectItem value="Niagara Region">Niagara Region</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="timeline">Purchase Timeline</Label>
                      <Select
                        name="timeline"
                        onValueChange={(value) => handleSelectChange("timeline", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="When are you looking?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Immediate">Immediate (0-3 months)</SelectItem>
                          <SelectItem value="Short-term">Short-term (3-6 months)</SelectItem>
                          <SelectItem value="Medium-term">Medium-term (6-12 months)</SelectItem>
                          <SelectItem value="Long-term">Long-term (1+ year)</SelectItem>
                          <SelectItem value="Just-exploring">Just exploring</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="isHealthcareProfessional"
                      checked={formData.isHealthcareProfessional}
                      onCheckedChange={(checked) =>
                        handleCheckboxChange("isHealthcareProfessional", checked as boolean)
                      }
                    />
                    <Label
                      htmlFor="isHealthcareProfessional"
                      className="text-sm font-normal cursor-pointer"
                    >
                      I am a healthcare professional
                    </Label>
                  </div>

                  <div>
                    <Label htmlFor="message">Message (Optional)</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Tell us about your home requirements, questions, or preferred contact time..."
                    />
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="newsletterConsent"
                        checked={formData.newsletterConsent}
                        onCheckedChange={(checked) =>
                          handleCheckboxChange("newsletterConsent", checked as boolean)
                        }
                      />
                      <Label
                        htmlFor="newsletterConsent"
                        className="text-sm font-normal cursor-pointer"
                      >
                        Yes, I'd like to receive email updates about Stonerose availability and healthcare relocation opportunities. I consent to being contacted by phone regarding Stonerose.
                      </Label>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-lg py-6"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Schedule My Private Tour"}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to our privacy policy. 
                    We respect your privacy and will never share your information.
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

export default StoneRoseLeadForm;
