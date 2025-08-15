import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Search, CreditCard, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: FileText,
    step: "01",
    title: "Fill Application",
    description: "Complete our simple online form with your basic details and loan requirements in just 3 minutes."
  },
  {
    icon: Search,
    step: "02", 
    title: "Instant Verification",
    description: "Our AI-powered system instantly verifies your information and checks your eligibility in real-time."
  },
  {
    icon: CreditCard,
    step: "03",
    title: "Get Approved",
    description: "Receive instant approval notification with loan terms, interest rate, and EMI details via SMS and email."
  },
  {
    icon: CheckCircle,
    step: "04",
    title: "Money in Account",
    description: "Sign the digital agreement and get funds disbursed directly to your bank account within 2 hours."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Getting your loan has never been easier. Follow these simple steps 
            and get funded in just 24 hours.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="bg-gradient-card shadow-card hover:shadow-trust transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 -right-4 w-8 h-0.5 bg-gradient-primary"></div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-gradient-primary">
            Start Your Application
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;