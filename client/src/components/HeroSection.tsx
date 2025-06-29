import { Play, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background Video Placeholder */}
      <div 
        className="absolute inset-0 bg-cover bg-center hero-overlay"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
        }}
      />
      
      {/* Floating Bubbles */}
      <div className="bubble w-4 h-4 top-20 left-10" style={{ animationDelay: '0s' }} />
      <div className="bubble w-6 h-6 top-40 right-20" style={{ animationDelay: '2s' }} />
      <div className="bubble w-3 h-3 top-60 left-1/4" style={{ animationDelay: '4s' }} />
      <div className="bubble w-5 h-5 top-80 right-1/3" style={{ animationDelay: '6s' }} />
      
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="glass-effect rounded-3xl p-12 animate-float">
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight">
            The Future of <br />
            <span className="bg-gradient-to-r from-[hsl(172,85%,85%)] to-[hsl(172,76%,42%)] bg-clip-text text-transparent">
              Farming
            </span> <br />
            is Vertical
          </h1>
          <p className="text-2xl md:text-3xl text-gray-200 mb-8 font-light">
            Grow more, better, with HydroVert.
          </p>
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Experience the luxury of sustainable, efficient, and holistic vertical farming. 
            Level up your grow game with premium hydroponic technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              onClick={scrollToContact}
              className="bg-[hsl(172,76%,42%)] hover:bg-[hsl(172,67%,29%)] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 animate-glow"
            >
              <Rocket className="mr-2" />
              Level Up Now
            </Button>
            <Button 
              variant="outline"
              className="glass-effect text-white border-white hover:bg-white hover:text-[hsl(172,67%,29%)] px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105"
            >
              <Play className="mr-2" />
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
