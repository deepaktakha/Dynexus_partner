import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { FileText, Phone, Mail, User, Banknote, Loader2 } from "lucide-react";

// 👇 PASTE YOUR SHEETDB API URL HERE
// Get this from: https://sheetdb.io after connecting your Google Sheet
// It should look like: https://sheetdb.io/api/v1/YOUR_SHEET_ID
const SHEETDB_URL = "https://sheetdb.io/api/v1/b4q6pv68aawie";

const LoanApplicationForm = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    pan: "",
    loanAmount: "",
    loanPurpose: "",
    monthlyIncome: "",
    employmentType: "",
    agreeTerms: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreeTerms) {
      toast({
        title: "Terms & Conditions",
        description: "Please agree to terms and conditions to proceed.",
        variant: "destructive"
      });
      return;
    }

    if (!SHEETDB_URL || SHEETDB_URL.includes("YOUR_SHEET_ID")) {
      toast({
        title: "Configuration Required", 
        description: "Please configure your SheetDB URL first.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    try {
      // Prepare data for SheetDB
      const submissionData = {
        data: {
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          pan: formData.pan || "Not provided",
          loanAmount: formData.loanAmount,
          loanPurpose: formData.loanPurpose,
          monthlyIncome: formData.monthlyIncome || "Not provided",
          employmentType: formData.employmentType,
          timestamp: new Date().toISOString(),
          source: "Dynexus Partners Website"
        }
      };

      console.log("Submitting to SheetDB:", submissionData);

      const response = await fetch(SHEETDB_URL, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("SheetDB response:", result);
        
        toast({
          title: "Application Submitted Successfully!",
          description: "Your loan application has been received. Our team will contact you within 2 hours.",
        });
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        pan: "",
        loanAmount: "",
        loanPurpose: "",
        monthlyIncome: "",
        employmentType: "",
        agreeTerms: false
      });

    } catch (error) {
      console.error("Error submitting to SheetDB:", error);
      toast({
        title: "Submission Error",
        description: "There was an error submitting your application. Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Apply for Your Loan Today
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Fill out this simple form and get instant pre-approval. 
              Our team will contact you within 2 hours with your loan offer.
            </p>
          </div>

          <Card className="shadow-form">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center space-x-2 text-2xl">
                <FileText className="w-6 h-6 text-primary" />
                <span>Loan Application Form</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-primary" />
                      <span>Full Name *</span>
                    </Label>
                    <Input
                      id="fullName"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange("fullName", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-primary" />
                      <span>Email Address *</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-primary" />
                      <span>Mobile Number *</span>
                    </Label>
                    <Input
                      id="phone"
                      placeholder="Enter 10-digit mobile number"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      maxLength={10}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="pan">PAN Number</Label>
                    <Input
                      id="pan"
                      placeholder="Enter PAN number "
                      value={formData.pan}
                      onChange={(e) => handleInputChange("pan", e.target.value.toUpperCase())}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="loanAmount" className="flex items-center space-x-2">
                      <Banknote className="w-4 h-4 text-primary" />
                      <span>Loan Amount Required *</span>
                    </Label>
                    <Select onValueChange={(value) => handleInputChange("loanAmount", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select loan amount" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="50000-100000">₹50,000 - ₹1,00,000</SelectItem>
                        <SelectItem value="100000-300000">₹1,00,000 - ₹3,00,000</SelectItem>
                        <SelectItem value="300000-500000">₹3,00,000 - ₹5,00,000</SelectItem>
                        <SelectItem value="500000-1000000">₹5,00,000 - ₹10,00,000</SelectItem>
                        <SelectItem value="1000000+">₹10,00,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="monthlyIncome">Monthly Income</Label>
                    <Select onValueChange={(value) => handleInputChange("monthlyIncome", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select monthly income (optional)" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="25000-50000">₹25,000 - ₹50,000</SelectItem>
                        <SelectItem value="50000-100000">₹50,000 - ₹1,00,000</SelectItem>
                        <SelectItem value="100000-200000">₹1,00,000 - ₹2,00,000</SelectItem>
                        <SelectItem value="200000+">₹2,00,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-3">
                  <Label>Loan Purpose *</Label>
                  <RadioGroup 
                    value={formData.loanPurpose}
                    onValueChange={(value) => handleInputChange("loanPurpose", value)}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="personal" id="personal" />
                      <Label htmlFor="personal">Personal</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="business" id="business" />
                      <Label htmlFor="business">Business</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="education" id="education" />
                      <Label htmlFor="education">Education</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="medical" id="medical" />
                      <Label htmlFor="medical">Medical</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-3">
                  <Label>Employment Type *</Label>
                  <RadioGroup 
                    value={formData.employmentType}
                    onValueChange={(value) => handleInputChange("employmentType", value)}
                    className="grid grid-cols-3 gap-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="salaried" id="salaried" />
                      <Label htmlFor="salaried">Salaried</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="self-employed" id="self-employed" />
                      <Label htmlFor="self-employed">Self Employed</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="business" id="business-owner" />
                      <Label htmlFor="business-owner">Business Owner</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="terms"
                    checked={formData.agreeTerms}
                    onCheckedChange={(checked) => handleInputChange("agreeTerms", checked as boolean)}
                  />
                  <Label htmlFor="terms" className="text-sm">
                    I agree to the{" "}
                    <a href="#" className="text-primary hover:underline">Terms & Conditions</a>
                    {" "}and{" "}
                    <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                  </Label>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-primary" 
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Submitting Application...
                    </>
                  ) : (
                    "Submit Loan Application"
                  )}
                </Button>

                <div className="text-center text-sm text-muted-foreground">
                  <p>🔒 Your information is 100% secure and encrypted</p>
                  <p>Our team will contact you within 2 hours</p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LoanApplicationForm;