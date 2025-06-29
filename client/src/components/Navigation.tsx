import { useState, useEffect } from "react";
import { Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'glass-effect' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 luxury-gradient rounded-lg flex items-center justify-center">
              <Sprout className="text-white text-lg" />
            </div>
            <span className="text-2xl font-bold text-white">HydroVert</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('products')}
              className="text-white hover:text-[hsl(172,85%,85%)] transition-colors font-medium"
            >
              Products
            </button>
            <button 
              onClick={() => scrollToSection('technology')}
              className="text-white hover:text-[hsl(172,85%,85%)] transition-colors font-medium"
            >
              Technology
            </button>
            <button 
              onClick={() => scrollToSection('benefits')}
              className="text-white hover:text-[hsl(172,85%,85%)] transition-colors font-medium"
            >
              Benefits
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-[hsl(172,85%,85%)] transition-colors font-medium"
            >
              Contact
            </button>
          </div>
          
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-[hsl(172,76%,42%)] hover:bg-[hsl(172,67%,29%)] text-white px-6 py-2 rounded-full transition-all transform hover:scale-105 font-semibold"
          >
            Get Growing
          </Button>
        </div>
      </div>
    </nav>
  );
}
