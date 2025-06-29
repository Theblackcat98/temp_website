import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

export default function CTASection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission here
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <section id="contact" className="py-24 luxury-gradient relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-black text-white mb-6">
          Ready to Level Up?
        </h2>
        <p className="text-2xl text-[hsl(172,85%,85%)] mb-12">
          Join the vertical farming revolution and start growing better today
        </p>
        
        <Card className="glass-effect rounded-3xl p-8 max-w-2xl mx-auto border-0">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-6">
            <Input 
              type="email" 
              placeholder="Enter your email for premium updates" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-4 rounded-full text-[hsl(172,67%,29%)] font-medium focus:ring-4 focus:ring-[hsl(172,85%,85%)] border-white"
              required
            />
            <Button 
              type="submit"
              className="bg-white text-[hsl(172,76%,42%)] hover:bg-[hsl(172,85%,85%)] px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105"
            >
              Get Growing
            </Button>
          </form>
          <p className="text-[hsl(172,85%,85%)] text-sm mt-4">
            Made in California • Premium Quality Guaranteed
          </p>
        </Card>
        
        <div className="mt-12 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-white">aimoore@sweetleafgenetics.com</div>
            <div className="text-[hsl(172,85%,85%)]">Email Us</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-white">(536) 722-7694</div>
            <div className="text-[hsl(172,85%,85%)]">Call Today</div>
          </div>
        </div>
      </div>
      
      {/* Floating contact bubbles */}
      <div className="bubble w-8 h-8 top-10 left-20" style={{ animationDelay: '1s' }} />
      <div className="bubble w-6 h-6 top-32 right-16" style={{ animationDelay: '3s' }} />
      <div className="bubble w-4 h-4 bottom-20 left-1/4" style={{ animationDelay: '5s' }} />
    </section>
  );
}
