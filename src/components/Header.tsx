import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const Header = () => {
  

  const handleApplyNow = () => {
    const formSection = document.getElementById("contact");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">D</span>
          </div>
          <span className="text-2xl font-bold text-primary">Dynexus Partners</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
          <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="hidden lg:flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4 text-primary" />
              <span>+91 8826843824</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="w-4 h-4 text-primary" />
              <span>info@dynexuspartners.com</span>
            </div>
          </div>
          <Button className="bg-gradient-primary" onClick={handleApplyNow}>
            Apply Now
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;