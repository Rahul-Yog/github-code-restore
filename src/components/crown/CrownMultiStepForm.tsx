import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { ChevronLeft, ChevronRight, CheckCircle, User, Home, DollarSign, MessageSquare, Phone } from 'lucide-react';

const CrownMultiStepForm = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    // Step 1: Personal Info
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    
    // Step 2: Home Preferences
    interestedIn: '',
    priceRange: '',
    timeline: '',
    
    // Step 3: Additional Details
    isRealtor: '',
    message: '',
    
    // Step 4: Contact Preferences
    newsletter: false,
    privacy: false,
    phoneConsent: false,
    honeypot: ''
  });

  const totalSteps = 4;

  const steps = [
    {
      number: 1,
      title: "Personal Information",
      icon: User,
      description: "Let's start with your basic information"
    },
    {
      number: 2, 
      title: "Home Preferences",
      icon: Home,
      description: "Tell us about your ideal home"
    },
    {
      number: 3,
      title: "Additional Details", 
      icon: MessageSquare,
      description: "A few more questions to serve you better"
    },
    {
      number: 4,
      title: "Contact Preferences",
      icon: Phone,
      description: "How would you like us to contact you?"
    }
  ];

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateStep = (step: number) => {
    switch (step) {
      case 1:
        return formData.firstName && formData.lastName && formData.email;
      case 2:
        return true; // Optional fields
      case 3:
        return formData.isRealtor; // Realtor question required
      case 4:
        return formData.privacy && (formData.newsletter || formData.phoneConsent);
      default:
        return true;
    }
  };

  const nextStep = () => {
    if (!validateStep(currentStep)) {
      toast({
        title: "Please complete required fields",
        description: "Make sure all required fields are filled before continuing.",
        variant: "destructive",
      });
      return;
    }
    
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    if (!validateStep(4)) {
      toast({
        title: "Please complete all required fields",
        description: "Make sure to accept the privacy policy and select at least one contact method.",
        variant: "destructive",
      });
      return;
    }

    // Bot protection
    if (formData.honeypot) {
      console.log('Bot detected');
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('submit-lead', {
        body: {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone || null,
          interested_in: formData.interestedIn || null,
          price_range: formData.priceRange || null,
          timeline: formData.timeline || null,
          message: formData.message || null,
          is_realtor: formData.isRealtor === 'yes',
          newsletter_consent: formData.newsletter,
          privacy_consent: formData.privacy,
          form_type: 'crown_multistep_form',
          source: 'Crown Website - Multi-Step Form',
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
        description: "Floor plans and pricing information will be sent to your email.",
      });
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        interestedIn: '',
        priceRange: '',
        timeline: '',
        message: '',
        isRealtor: '',
        newsletter: false,
        privacy: false,
        phoneConsent: false,
        honeypot: ''
      });
      setCurrentStep(1);
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  placeholder="John"
                  required
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  placeholder="Smith"
                  required
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number (Optional)</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="(416) 123-4567"
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <Label htmlFor="interestedIn">Which home type interests you most?</Label>
              <Select value={formData.interestedIn} onValueChange={(value) => handleInputChange('interestedIn', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select home type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="city-townhomes">City Townhomes</SelectItem>
                  <SelectItem value="freehold-townhomes">Freehold Townhomes</SelectItem>
                  <SelectItem value="38-singles">38' Detached Homes</SelectItem>
                  <SelectItem value="all">All Home Types</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="priceRange">What's your budget range?</Label>
              <Select value={formData.priceRange} onValueChange={(value) => handleInputChange('priceRange', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your budget range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="730k-800k">$730K - $800K</SelectItem>
                  <SelectItem value="800k-900k">$800K - $900K</SelectItem>
                  <SelectItem value="900k-1m">$900K - $1M</SelectItem>
                  <SelectItem value="1m+">$1M+</SelectItem>
                  <SelectItem value="flexible">Flexible</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="timeline">When are you looking to buy?</Label>
              <Select value={formData.timeline} onValueChange={(value) => handleInputChange('timeline', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your timeline" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="asap">As soon as possible</SelectItem>
                  <SelectItem value="3-6-months">3-6 months</SelectItem>
                  <SelectItem value="6-12-months">6-12 months</SelectItem>
                  <SelectItem value="1-2-years">1-2 years</SelectItem>
                  <SelectItem value="researching">Just researching</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <Label className="text-base font-medium">Are you a licensed Realtor? *</Label>
              <RadioGroup 
                value={formData.isRealtor} 
                onValueChange={(value) => handleInputChange('isRealtor', value)}
                className="flex gap-6 mt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="realtor-yes" />
                  <Label htmlFor="realtor-yes">Yes, I'm a Realtor</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="realtor-no" />
                  <Label htmlFor="realtor-no">No, I'm a buyer</Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label htmlFor="message">Any specific questions or requirements?</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                placeholder="Tell us about your ideal home features, lot preferences, or any other questions..."
                rows={4}
              />
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="bg-muted/50 p-4 rounded-lg">
              <p className="text-sm font-medium text-primary mb-4">
                How would you like us to contact you? (Select at least one) *
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Checkbox 
                    id="newsletter"
                    checked={formData.newsletter}
                    onCheckedChange={(checked) => handleInputChange('newsletter', !!checked)}
                  />
                  <Label htmlFor="newsletter" className="text-sm leading-relaxed">
                    Yes, email me floor plans, pricing, and updates about Crown of Caledon
                  </Label>
                </div>
                
                <div className="flex items-start gap-2">
                  <Checkbox 
                    id="phoneConsent"
                    checked={formData.phoneConsent}
                    onCheckedChange={(checked) => handleInputChange('phoneConsent', !!checked)}
                  />
                  <Label htmlFor="phoneConsent" className="text-sm leading-relaxed">
                    Yes, you may contact me via phone/text about Crown of Caledon
                  </Label>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Checkbox 
                id="privacy"
                checked={formData.privacy}
                onCheckedChange={(checked) => handleInputChange('privacy', !!checked)}
                required
              />
              <Label htmlFor="privacy" className="text-sm leading-relaxed">
                I agree to the{' '}
                <a href="/privacy-policy" target="_blank" className="text-accent hover:underline">
                  privacy policy
                </a>{' '}
                and consent to being contacted about Crown of Caledon. *
              </Label>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Card className="luxury-card max-w-2xl mx-auto">
      <div className="p-8">
        {/* Honeypot field for bot protection */}
        <input 
          type="text" 
          name="honeypot" 
          value={formData.honeypot}
          onChange={(e) => handleInputChange('honeypot', e.target.value)}
          style={{ display: 'none' }}
          tabIndex={-1}
          autoComplete="off"
        />

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className={`
                  w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium
                  ${currentStep >= step.number 
                    ? 'bg-accent text-white' 
                    : 'bg-muted text-muted-foreground'
                  }
                `}>
                  {currentStep > step.number ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <step.icon className="w-5 h-5" />
                  )}
                </div>
                {index < steps.length - 1 && (
                  <div className={`
                    w-8 h-0.5 mx-2
                    ${currentStep > step.number ? 'bg-accent' : 'bg-muted'}
                  `} />
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-semibold text-foreground mb-1">
              {steps[currentStep - 1].title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {steps[currentStep - 1].description}
            </p>
          </div>
        </div>

        {/* Step Content */}
        <div className="mb-8">
          {renderStepContent()}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 1}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </Button>

          {currentStep < totalSteps ? (
            <Button
              onClick={nextStep}
              className="flex items-center gap-2 luxury-gradient text-primary"
            >
              Continue
              <ChevronRight className="w-4 h-4" />
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="flex items-center gap-2 luxury-gradient text-primary"
            >
              {isSubmitting ? 'Sending...' : 'Get Floor Plans & Pricing'}
              <CheckCircle className="w-4 h-4" />
            </Button>
          )}
        </div>

        {/* Progress Indicator */}
        <div className="mt-4 text-center text-xs text-muted-foreground">
          Step {currentStep} of {totalSteps}
        </div>
      </div>
    </Card>
  );
};

export default CrownMultiStepForm;