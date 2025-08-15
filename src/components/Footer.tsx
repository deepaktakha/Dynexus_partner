import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Phone, 
  Mail, 
  MapPin, 
  
  Twitter, 
  
  Linkedin,
  Shield,
  Award,
  Clock
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <span className="text-2xl font-bold">Dynexus Partners</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Your trusted financial partner for all loan requirements. 
              We provide quick, secure, and transparent lending solutions 
              to help you achieve your dreams.
            </p>
            <div className="flex space-x-4">
             
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              
              <a href="https://www.linkedin.com/company/dynexus-partners/" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-slate-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-slate-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="text-slate-300 hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">EMI Calculator</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Interest Rates</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Career</a></li>
              <li><a href="#contact" className="text-slate-300 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Loan Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Loan Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Personal Loan</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Business Loan</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Home Loan</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Education Loan</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Vehicle Loan</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Gold Loan</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-slate-300">+91 8826843824 <br />+91 8368521194 </span>
                
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-slate-300">info@dynexuspartners.com <br /> careers@dynexuspartners.com</span> 
               
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <span className="text-slate-300">
                  Dynexus partners <br />
                  Gurgaon
                  
                </span>
              </div>
            </div>
          </div>

        {/* Trust Indicators */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center space-x-3 text-center md:text-left">
              <Shield className="w-8 h-8 text-primary" />
              <div>
                <div className="font-semibold">RBI Registered</div>
                <div className="text-slate-400 text-sm">Licensed NBFC</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 text-center md:text-left">
              <Award className="w-8 h-8 text-primary" />
              <div>
                <div className="font-semibold">Award Winning</div>
                <div className="text-slate-400 text-sm">Best Digital Platform 2024</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 text-center md:text-left">
              <Clock className="w-8 h-8 text-primary" />
              <div>
                <div className="font-semibold">24/7 Support</div>
                <div className="text-slate-400 text-sm">Always here to help</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm">
            <div>
              © 2024 Dynexus Partners. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
              <a href="#" className="hover:text-white transition-colors">Grievance</a>
              <a href="#" className="hover:text-white transition-colors">IRDAI</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </footer>
  );
};

export default Footer;