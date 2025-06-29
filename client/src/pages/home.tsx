import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProductShowcase from "@/components/ProductShowcase";
import ComparisonTool from "@/components/ComparisonTool";
import BenefitsSection from "@/components/BenefitsSection";
import TargetMarkets from "@/components/TargetMarkets";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FloatingBubbles from "@/components/FloatingBubbles";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gray-50">
      <FloatingBubbles />
      <Navigation />
      <HeroSection />
      <ProductShowcase />
      <ComparisonTool />
      <BenefitsSection />
      <TargetMarkets />
      <CTASection />
      <Footer />
    </div>
  );
}
