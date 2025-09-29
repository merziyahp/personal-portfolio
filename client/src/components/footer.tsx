import { ButterflyIcon } from "./icons/butterfly";
import { Mail, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center mb-4">
          <ButterflyIcon className="w-10 h-10 text-orange-500" />
          <span className="text-lg font-semibold">Merziyah Poonawala</span>
        </div>
        <p className="text-gray-400 mb-4">Senior Product Manager • Transforming Ideas into Impact</p>
        <div className="flex justify-center space-x-6">
          <a 
            href="mailto:merziyahpoonawala@gmail.com" 
            className="text-gray-400 hover:text-orange-500 transition-colors"
          >
            <Mail className="h-6 w-6" />
          </a>
          <a 
            href="https://linkedin.com/in/merziyahpoonawala" 
            className="text-gray-400 hover:text-orange-500 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
