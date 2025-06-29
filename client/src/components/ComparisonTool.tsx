import { Crown, Layers, CheckCircle, XCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function ComparisonTool() {
  return (
    <section className="py-24 luxury-gradient relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-white mb-6">
            HydroVert vs Traditional Systems
          </h2>
          <p className="text-xl text-[hsl(172,85%,85%)] max-w-3xl mx-auto">
            See why premium growers choose HydroVert for superior results
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* HydroVert Column */}
          <Card className="glass-effect rounded-3xl p-8 text-white border-0">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown className="text-[hsl(172,76%,42%)] text-2xl" />
              </div>
              <h3 className="text-3xl font-bold">HydroVert Premium</h3>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <CheckCircle className="text-[hsl(172,85%,85%)] mr-4 text-xl" />
                <span className="text-lg">True vertical hanging design</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-[hsl(172,85%,85%)] mr-4 text-xl" />
                <span className="text-lg">Maximum space efficiency</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-[hsl(172,85%,85%)] mr-4 text-xl" />
                <span className="text-lg">Easy maintenance & cleaning</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-[hsl(172,85%,85%)] mr-4 text-xl" />
                <span className="text-lg">Premium materials & build</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-[hsl(172,85%,85%)] mr-4 text-xl" />
                <span className="text-lg">Scalable modular system</span>
              </div>
            </div>
          </Card>
          
          {/* Traditional Column */}
          <Card className="bg-gray-100 rounded-3xl p-8 text-gray-700 border-0">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <Layers className="text-gray-600 text-2xl" />
              </div>
              <h3 className="text-3xl font-bold">Traditional Stacked</h3>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <XCircle className="text-red-500 mr-4 text-xl" />
                <span className="text-lg">Horizontal stacking only</span>
              </div>
              <div className="flex items-center">
                <XCircle className="text-red-500 mr-4 text-xl" />
                <span className="text-lg">Limited space utilization</span>
              </div>
              <div className="flex items-center">
                <XCircle className="text-red-500 mr-4 text-xl" />
                <span className="text-lg">Difficult to clean/maintain</span>
              </div>
              <div className="flex items-center">
                <XCircle className="text-red-500 mr-4 text-xl" />
                <span className="text-lg">Basic materials</span>
              </div>
              <div className="flex items-center">
                <XCircle className="text-red-500 mr-4 text-xl" />
                <span className="text-lg">Limited expansion options</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
