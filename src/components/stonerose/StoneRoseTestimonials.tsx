import { Card, CardContent } from "@/components/ui/card";
import { Users, Quote, Star } from "lucide-react";

const StoneRoseTestimonials = () => {
  const testimonials = [
    {
      name: "Emergency Room Physician",
      role: "Planning for 2028 Hospital Opening",
      hospital: "Monitoring South Niagara Hospital Hiring",
      quote: "I secured my home at Stonerose during pre-construction. With the hospital opening in 2028, the 11-minute commute will be perfect. Locking in early pricing was the smartest investment decision.",
      rating: 5,
      image: "👩‍⚕️"
    },
    {
      name: "Registered Nurse",
      role: "ICU Specialist",
      hospital: "Preparing to Apply When Hiring Opens",
      quote: "As a nurse who will be applying when full hiring begins, securing a pre-construction home near the future hospital made perfect sense. I'm saving over $250K compared to GTA housing, and by the time the hospital is fully staffed in 2028, my home will be ready and appreciated in value.",
      rating: 5,
      image: "👨‍⚕️"
    },
    {
      name: "Medical Resident",
      role: "Completing Residency",
      hospital: "Targeting South Niagara for 2028",
      quote: "I booked during pre-construction because the timeline aligns perfectly with my career. The hospital construction and my residency both complete around 2028. Flexible payment plans during construction let me build equity while I finish training. By opening day, I'll be debt-free and ready to apply.",
      rating: 5,
      image: "👩‍⚕️"
    },
    {
      name: "Healthcare Administrator",
      role: "Relocating from GTA",
      hospital: "Watching Hospital Development Progress",
      quote: "I invested in pre-construction at Stonerose after researching the $3.6B hospital project. Even though hiring has just started and construction continues, locking in pricing now made financial sense. As more healthcare workers discover this opportunity and hiring ramps up, demand will only increase.",
      rating: 5,
      image: "👨‍💼"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Users className="w-4 h-4" />
              Healthcare Professional Reviews
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              What Healthcare Professionals{" "}
              <span className="text-primary">Are Saying</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Real testimonials from doctors, nurses, and healthcare workers who chose Stonerose for their Niagara relocation.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-colors">
                <CardContent className="p-6">
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="relative mb-6">
                    <Quote className="w-8 h-8 text-primary/20 absolute -top-2 -left-2" />
                    <p className="text-muted-foreground italic pl-6 leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-2xl">
                      {testimonial.image}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-primary">{testimonial.role}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.hospital}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Trust Badge */}
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-2 border-primary/20">
            <CardContent className="p-8 text-center">
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Healthcare Professionals<br />Already Secured Homes</div>
                </div>
                <div className="hidden md:block w-px h-16 bg-border"></div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">4.9/5</div>
                  <div className="text-sm text-muted-foreground">Average Satisfaction<br />Rating from Buyers</div>
                </div>
                <div className="hidden md:block w-px h-16 bg-border"></div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Would Recommend<br />to Colleagues</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StoneRoseTestimonials;
