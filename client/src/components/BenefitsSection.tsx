import { Leaf, Gauge, Heart } from "lucide-react";

export default function BenefitsSection() {
  return (
    <section id="benefits" className="py-24 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-[hsl(172,67%,29%)] mb-6">
            Good Vibes, Great Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the perfect blend of sustainability, efficiency, and luxury in vertical farming
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center group">
            <div className="w-20 h-20 luxury-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Leaf className="text-white text-3xl" />
            </div>
            <h3 className="text-2xl font-bold text-[hsl(172,67%,29%)] mb-4">Sustainable</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Eco-friendly growing methods that reduce water usage by 90% while maximizing yield. 
              Good for you, good for the planet.
            </p>
          </div>
          
          <div className="text-center group">
            <div className="w-20 h-20 luxury-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Gauge className="text-white text-3xl" />
            </div>
            <h3 className="text-2xl font-bold text-[hsl(172,67%,29%)] mb-4">Efficient</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Streamlined systems designed for optimal nutrient delivery and space utilization. 
              Grow faster, harvest more, waste less.
            </p>
          </div>
          
          <div className="text-center group">
            <div className="w-20 h-20 luxury-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Heart className="text-white text-3xl" />
            </div>
            <h3 className="text-2xl font-bold text-[hsl(172,67%,29%)] mb-4">Health & Wellness</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Holistic approach to growing that produces nutrient-rich, pesticide-free produce. 
              Premium nutrition for premium lifestyles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
