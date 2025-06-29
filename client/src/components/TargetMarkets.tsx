import { Building, GraduationCap, Factory, Home } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function TargetMarkets() {
  return (
    <section id="technology" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-[hsl(172,67%,29%)] mb-6">
            Ideal For Every Grower
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From commercial operations to home enthusiasts, HydroVert scales to meet your needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="glass-effect rounded-2xl p-6 hover:bg-[hsl(172,76%,42%)] hover:text-white transition-all duration-300 group text-center border-0">
            <div className="w-16 h-16 bg-[hsl(172,76%,42%)] group-hover:bg-white rounded-xl flex items-center justify-center mx-auto mb-4">
              <Building className="text-white group-hover:text-[hsl(172,76%,42%)] text-2xl" />
            </div>
            <h3 className="text-xl font-bold mb-3">Indoor Farms</h3>
            <p className="text-gray-600 group-hover:text-gray-200">
              Controlled environments for commercial growing operations
            </p>
          </Card>
          
          <Card className="glass-effect rounded-2xl p-6 hover:bg-[hsl(172,76%,42%)] hover:text-white transition-all duration-300 group text-center border-0">
            <div className="w-16 h-16 bg-[hsl(172,76%,42%)] group-hover:bg-white rounded-xl flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="text-white group-hover:text-[hsl(172,76%,42%)] text-2xl" />
            </div>
            <h3 className="text-xl font-bold mb-3">Universities</h3>
            <p className="text-gray-600 group-hover:text-gray-200">
              Agricultural labs and research facilities
            </p>
          </Card>
          
          <Card className="glass-effect rounded-2xl p-6 hover:bg-[hsl(172,76%,42%)] hover:text-white transition-all duration-300 group text-center border-0">
            <div className="w-16 h-16 bg-[hsl(172,76%,42%)] group-hover:bg-white rounded-xl flex items-center justify-center mx-auto mb-4">
              <Factory className="text-white group-hover:text-[hsl(172,76%,42%)] text-2xl" />
            </div>
            <h3 className="text-xl font-bold mb-3">Commercial</h3>
            <p className="text-gray-600 group-hover:text-gray-200">
              Large-scale growing operations and businesses
            </p>
          </Card>
          
          <Card className="glass-effect rounded-2xl p-6 hover:bg-[hsl(172,76%,42%)] hover:text-white transition-all duration-300 group text-center border-0">
            <div className="w-16 h-16 bg-[hsl(172,76%,42%)] group-hover:bg-white rounded-xl flex items-center justify-center mx-auto mb-4">
              <Home className="text-white group-hover:text-[hsl(172,76%,42%)] text-2xl" />
            </div>
            <h3 className="text-xl font-bold mb-3">Home Growers</h3>
            <p className="text-gray-600 group-hover:text-gray-200">
              Hobbyist and enthusiast growing systems
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
