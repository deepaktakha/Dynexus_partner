import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    location: "Mumbai",
    image: "/api/placeholder/64/64",
    rating: 5,
    text: "Dynexus Partners made my home renovation dream come true! The process was incredibly fast and the rates were better than my bank. Highly recommended!",
    amount: "₹15 Lakhs"
  },
  {
    name: "Priya Patel", 
    location: "Bangalore",
    image: "/api/placeholder/64/64",
    rating: 5,
    text: "I needed funds for my daughter's education urgently. Dynexus approved my loan in just 6 hours! Their customer service is exceptional.",
    amount: "₹8 Lakhs"
  },
  {
    name: "Amit Kumar",
    location: "Delhi",
    image: "/api/placeholder/64/64", 
    rating: 5,
    text: "Best decision to choose Dynexus for my business expansion. Transparent process, competitive rates, and no hidden charges. Thank you team!",
    amount: "₹25 Lakhs"
  },
  {
    name: "Sneha Reddy",
    location: "Hyderabad",
    image: "/api/placeholder/64/64",
    rating: 5,
    text: "The entire loan process was digital and hassle-free. I got my personal loan approved from home without visiting any branch. Amazing experience!",
    amount: "₹5 Lakhs"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what thousands of satisfied 
            customers have to say about their experience with Dynexus Partners.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gradient-card shadow-card hover:shadow-trust transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-primary/20 mr-2" />
                  <div className="flex text-yellow-500">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Avatar className="w-10 h-10 mr-3">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-foreground text-sm">{testimonial.name}</div>
                      <div className="text-muted-foreground text-xs">{testimonial.location}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-primary font-bold text-sm">{testimonial.amount}</div>
                    <div className="text-muted-foreground text-xs">Loan Amount</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center space-x-6 bg-white rounded-lg p-6 shadow-card">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">4.9/5</div>
              <div className="text-muted-foreground text-sm">Customer Rating</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">50,000+</div>
              <div className="text-muted-foreground text-sm">Happy Customers</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">₹500 Cr+</div>
              <div className="text-muted-foreground text-sm">Loans Disbursed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;