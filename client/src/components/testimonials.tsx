import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Michael Chen",
      role: "Homeowner",
      content: "RoofEx transformed our home. The crew was professional, punctual, and the cleanup was immaculate. The new architectural shingles look incredible.",
      rating: 5,
      initials: "MC"
    },
    {
      name: "Sarah Johnson",
      role: "Property Manager",
      content: "We manage over 50 properties and RoofEx is our go-to for all roofing needs. Their commercial team is knowledgeable and their pricing is always transparent.",
      rating: 5,
      initials: "SJ"
    },
    {
      name: "David Rodriguez",
      role: "Business Owner",
      content: "Had a major leak during a storm. They came out within 2 hours, tarped it, and fixed it permanently the next day. Truly a lifesaver.",
      rating: 5,
      initials: "DR"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl font-display font-bold text-primary">What Our Clients Say</h2>
          <p className="text-muted-foreground text-lg">Don't just take our word for it. Here is what our community has to say about our service.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <Card key={i} className="border-none shadow-md bg-white relative overflow-visible">
              <div className="absolute -top-6 left-8 bg-secondary text-white p-3 rounded-full shadow-lg">
                <Quote className="h-6 w-6 fill-current" />
              </div>
              <CardContent className="pt-12 pb-8 px-8 space-y-6">
                <div className="flex gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-foreground/80 leading-relaxed italic">
                  "{t.content}"
                </p>
                <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                  <Avatar>
                    <AvatarFallback className="bg-primary/10 text-primary font-bold">{t.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-bold text-primary text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">{t.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
