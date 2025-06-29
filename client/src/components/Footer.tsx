import { Sprout } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[hsl(172,67%,29%)] text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-6 md:mb-0">
            <div className="w-12 h-12 luxury-gradient rounded-lg flex items-center justify-center">
              <Sprout className="text-white text-xl" />
            </div>
            <div>
              <div className="text-2xl font-bold">HydroVert™</div>
              <div className="text-[hsl(172,85%,85%)] text-sm">Hang & Grow</div>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <div className="text-[hsl(172,85%,85%)] mb-2">Elevate Your Grow Game</div>
            <div className="text-sm text-gray-400">© 2024 HydroVert. All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
