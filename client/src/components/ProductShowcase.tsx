import { MoveVertical, Cog, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function ProductShowcase() {
  return (
    <section id="products" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-[hsl(172,67%,29%)] mb-6">
            True Vertical Technology
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Revolutionary hang-and-grow hydroponic systems engineered for premium performance, 
            scalability, and sustainability. Health and wellness through holistic design.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <Card className="glass-effect rounded-2xl p-8 hover:bg-[hsl(172,76%,42%)] hover:text-white transition-all duration-300 group border-0">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[hsl(172,76%,42%)] group-hover:bg-white rounded-lg flex items-center justify-center mr-4">
                  <MoveVertical className="text-white group-hover:text-[hsl(172,76%,42%)] text-xl" />
                </div>
                <h3 className="text-2xl font-bold">Vertical Efficiency</h3>
              </div>
              <p className="text-gray-600 group-hover:text-gray-200 text-lg">
                Grow more in less space with our clean, modular layout. 
                Maximize yield while minimizing footprint.
              </p>
            </Card>
            
            <Card className="glass-effect rounded-2xl p-8 hover:bg-[hsl(172,76%,42%)] hover:text-white transition-all duration-300 group border-0">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[hsl(172,76%,42%)] group-hover:bg-white rounded-lg flex items-center justify-center mr-4">
                  <Cog className="text-white group-hover:text-[hsl(172,76%,42%)] text-xl" />
                </div>
                <h3 className="text-2xl font-bold">Customizable Design</h3>
              </div>
              <p className="text-gray-600 group-hover:text-gray-200 text-lg">
                Choose from a wide range of sizes and colors to suit your space. 
                Premium materials designed for easy maintenance.
              </p>
            </Card>
            
            <Card className="glass-effect rounded-2xl p-8 hover:bg-[hsl(172,76%,42%)] hover:text-white transition-all duration-300 group border-0">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[hsl(172,76%,42%)] group-hover:bg-white rounded-lg flex items-center justify-center mr-4">
                  <Shield className="text-white group-hover:text-[hsl(172,76%,42%)] text-xl" />
                </div>
                <h3 className="text-2xl font-bold">Durable & Cleanable</h3>
              </div>
              <p className="text-gray-600 group-hover:text-gray-200 text-lg">
                Crafted from food-safe, long-lasting components. 
                Engineered for professional-grade performance.
              </p>
            </Card>
          </div>
          
          {/* HydroVert System Image */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="HydroVert vertical farming system" 
              className="rounded-3xl shadow-2xl w-full animate-float" 
            />
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[hsl(39,96%,49%)] rounded-full flex items-center justify-center text-white font-bold text-lg animate-pulse">
              NEW
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
