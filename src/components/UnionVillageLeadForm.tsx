import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const UnionVillageLeadForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    interestedIn: '',
    timeline: '',
    message: '',
    isRealtor: '',
    newsletter: false,
    privacy: false,
    phoneConsent: false,
    honeypot: '' // Bot protection
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Bot protection - honeypot field should be empty
    if (formData.honeypot) {
      console.log('Bot detected');
      return;
    }
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.isRealtor || !formData.privacy) {
      toast({
        title: "Please fill in all required fields",
        description: "Make sure to complete all required fields including the realtor question and privacy policy.",
        variant: "destructive",
      });
      return;
    }

    if (!formData.newsletter && !formData.phoneConsent) {
      toast({
        title: "Contact method required",
        description: "Please select at least one contact option (email or phone).",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Submit via secure edge function (bypasses RLS)
      const { data, error } = await supabase.functions.invoke('submit-lead', {
        body: {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone || null,
          interested_in: formData.interestedIn || null,
          timeline: formData.timeline || null,
          message: formData.message || null,
          is_realtor: formData.isRealtor === 'yes',
          newsletter_consent: formData.newsletter,
          privacy_consent: formData.privacy,
          form_type: 'union_village_lead',
          user_agent: navigator.userAgent
        }
      });

      if (error) {
        console.error('Error submitting lead:', error);
        toast({
          title: "Something went wrong",
          description: "Please try again or contact us directly.",
          variant: "destructive",
        });
        return;
      }

      toast({
        title: "Thank you for your interest!",
        description: "We'll be in touch with you soon.",
      });

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        interestedIn: '',
        timeline: '',
        message: '',
        isRealtor: '',
        newsletter: false,
        privacy: false,
        phoneConsent: false,
        honeypot: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem submitting your information. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Get More Information
          </h2>
          <p className="text-lg text-muted-foreground">
            Interested in learning more about Union Village Homes? Fill out the form below 
            and our sales team will get back to you shortly.
          </p>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-center">Request Information</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot field for bot protection - hidden */}
              <input 
                type="text" 
                name="honeypot" 
                value={formData.honeypot}
                onChange={(e) => handleInputChange('honeypot', e.target.value)}
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="interestedIn">Interested In</Label>
                  <Select onValueChange={(value) => handleInputChange('interestedIn', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select home type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="detached">Detached Homes</SelectItem>
                      <SelectItem value="townhomes">Townhomes</SelectItem>
                      <SelectItem value="semi-detached">Semi-Detached</SelectItem>
                      <SelectItem value="all">All Home Types</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="timeline">Purchase Timeline</Label>
                  <Select onValueChange={(value) => handleInputChange('timeline', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="immediately">Immediately</SelectItem>
                      <SelectItem value="3-6-months">3-6 months</SelectItem>
                      <SelectItem value="6-12-months">6-12 months</SelectItem>
                      <SelectItem value="12-plus-months">12+ months</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Realtor Question */}
              <div>
                <Label className="text-base font-medium">Are you a Realtor? *</Label>
                <RadioGroup 
                  value={formData.isRealtor} 
                  onValueChange={(value) => handleInputChange('isRealtor', value)}
                  className="flex gap-6 mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="realtor-yes-union" />
                    <Label htmlFor="realtor-yes-union">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="realtor-no-union" />
                    <Label htmlFor="realtor-no-union">No</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your housing needs or any questions you have..."
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  rows={4}
                />
              </div>

              {/* Contact Preferences */}
              <div className="space-y-3 bg-muted/50 p-4 rounded-lg">
                <p className="text-sm font-medium text-primary mb-3">How would you like us to contact you? (Select at least one) *</p>
                
                <div className="flex items-start gap-2">
                  <Checkbox 
                    id="newsletter-union"
                    checked={formData.newsletter}
                    onCheckedChange={(checked) => handleInputChange('newsletter', !!checked)}
                  />
                  <Label htmlFor="newsletter-union" className="text-sm leading-relaxed">
                    Yes, you may contact me via email with information about Union Village and other real estate opportunities.
                  </Label>
                </div>
                
                <div className="flex items-start gap-2">
                  <Checkbox 
                    id="phoneConsent-union"
                    checked={formData.phoneConsent}
                    onCheckedChange={(checked) => handleInputChange('phoneConsent', !!checked)}
                  />
                  <Label htmlFor="phoneConsent-union" className="text-sm leading-relaxed">
                    Yes, you may contact me via phone/text with information about Union Village and other real estate opportunities.
                  </Label>
                </div>
              </div>

              {/* Privacy Policy */}
              <div className="flex items-start gap-2">
                <Checkbox 
                  id="privacy-union"
                  checked={formData.privacy}
                  onCheckedChange={(checked) => handleInputChange('privacy', !!checked)}
                  required
                />
                <Label htmlFor="privacy-union" className="text-sm leading-relaxed">
                  I agree to the{' '}
                  <a href="/privacy-policy" target="_blank" className="text-accent hover:underline">
                    privacy policy
                  </a>{' '}
                  and consent to being contacted about Union Village. *
                </Label>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Send Information Request'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default UnionVillageLeadForm;