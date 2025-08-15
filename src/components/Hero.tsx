import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Shield, Clock } from "lucide-react";


const Hero = () => {
   const handleApplyNow = () => {
    const formSection = document.getElementById("contact");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="relative bg-gradient-hero text-white py-20 overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                #1 Trusted Financial Partner
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Get Your Dream <span className="text-yellow-300">Loan</span> in 24 Hours
              </h1>
              <p className="text-xl text-white/90 max-w-xl">
                Fast, secure, and hassle-free personal loans at competitive rates. 
                Join thousands of satisfied customers who trust Dynexus Partners for their financial needs.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" onClick={handleApplyNow}className="bg-white text-primary hover:bg-white/90">
                Apply for Loan
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Calculate EMI
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-5 h-5 mr-2" />
                  <span className="text-2xl font-bold">50K+</span>
                </div>
                <p className="text-white/80">Happy Customers</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Clock className="w-5 h-5 mr-2" />
                  <span className="text-2xl font-bold">24 Hrs</span>
                </div>
                <p className="text-white/80">Quick Approval</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Shield className="w-5 h-5 mr-2" />
                  <span className="text-2xl font-bold">100%</span>
                </div>
                <p className="text-white/80">Secure Process</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-trust">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Quick Loan Check</h3>
                <p className="text-white/80">See if you qualify in 2 minutes</p>
              </div>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold">₹50K - ₹50L</div>
                    <div className="text-sm text-white/80">Loan Amount</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold">10.5%</div>
                    <div className="text-sm text-white/80">Interest Rate*</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-center space-x-1 text-yellow-300">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                  <span className="ml-2 text-white">4.9/5 Customer Rating</span>
                </div>
                
                <Button className="w-full bg-white text-primary hover:bg-white/90" size="lg">
                  Check Eligibility
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;