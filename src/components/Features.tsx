import { Card, CardContent } from "@/components/ui/card";
import { 
  Clock, 
  Shield, 
  CreditCard, 
  Users, 
  Calculator, 
  FileText,
  Zap,
  Award 
} from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Quick Approval",
    description: "Get your loan approved in just 24 hours with our streamlined digital process."
  },
  {
    icon: Shield,
    title: "100% Secure",
    description: "Bank-level security ensures your personal and financial data is always protected."
  },
  {
    icon: CreditCard,
    title: "Competitive Rates",
    description: "Enjoy some of the lowest interest rates in the market starting from 10.5% per annum."
  },
  {
    icon: Users,
    title: "Expert Support",
    description: "Our financial experts are available 24/7 to guide you through the loan process."
  },
  {
    icon: Calculator,
    title: "EMI Calculator",
    description: "Plan your finances better with our easy-to-use EMI calculator and payment options."
  },
  {
    icon: FileText,
    title: "Minimal Documentation",
    description: "Simple paperwork process with digital document submission for faster approval."
  },
  {
    icon: Zap,
    title: "Instant Disbursal",
    description: "Funds transferred directly to your account within 2 hours of approval."
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Recognized as the 'Best Digital Lending Platform' by Financial Times 2024."
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Why Choose Dynexus Partners?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We combine cutting-edge technology with personalized service to make 
            your loan experience smooth, secure, and surprisingly fast.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gradient-card shadow-card hover:shadow-trust transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;