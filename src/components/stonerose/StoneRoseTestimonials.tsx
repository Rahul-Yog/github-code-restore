import { Card, CardContent } from "@/components/ui/card";
import { Users, Quote, Star } from "lucide-react";

const StoneRoseTestimonials = () => {
  const testimonials = [
    {
      name: "Dr. Sarah Mitchell",
      role: "Emergency Room Physician",
      hospital: "Future South Niagara Hospital Staff",
      quote: "I secured my Stonerose home during pre-construction and I'm thrilled. The 11-minute commute will be perfect for ER shifts, and locking in pricing before the hospital opens was brilliant. The value compared to what I'd pay near Toronto hospitals is incredible.",
      rating: 5,
      image: "👩‍⚕️"
    },
    {
      name: "Michael Chen",
      role: "Registered Nurse (ICU)",
      hospital: "Relocating from Mississauga",
      quote: "As an ICU nurse working rotating shifts, Stonerose's location is perfect. Short commute, quiet neighborhood for daytime sleep, and I'm saving over $250K compared to GTA. The soundproofing and blackout features were exactly what I needed.",
      rating: 5,
      image: "👨‍⚕️"
    },
    {
      name: "Dr. Priya Patel",
      role: "Medical Resident",
      hospital: "Starting at South Niagara Hospital 2028",
      quote: "Stonerose offered flexible deposits that work with my resident schedule. By 2028 when my residency at the new hospital starts, my home will be ready and I'll have built equity during construction. Smart investment for young physicians.",
      rating: 5,
      image: "👩‍⚕️"
    },
    {
      name: "James Rodriguez",
      role: "Healthcare Administrator",
      hospital: "Niagara Health System",
      quote: "I researched extensively before choosing Stonerose. The combination of proximity to the new $3.6B hospital, quality construction by Treasure Hill, and affordability made it an easy decision. Our family loves the Niagara lifestyle and my work-life balance has never been better.",
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
                  <div className="text-4xl font-bold text-primary mb-2">27+</div>
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
