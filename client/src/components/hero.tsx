import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import { ButterflyIcon } from "./icons/butterfly";

interface HeroProps {
  name: string;
  title: string;
  bio: string;
}

export function Hero({ name, title, bio }: HeroProps) {
  const handleDownloadResume = () => {
    // In a real implementation, this would download the actual resume
    window.open('/api/resume', '_blank');
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-24 pb-16 bg-gradient-to-b from-orange-50/30 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Orange butterfly illustration */}
        <div className="w-20 h-20 mx-auto mb-8 opacity-80 bg-orange-100 rounded-full flex items-center justify-center">
          <ButterflyIcon className="w-10 h-10 text-orange-500" />
        </div>
        
        {/* Professional headshot - round styling */}
        <div className="w-32 h-32 mx-auto rounded-full bg-gray-200 mb-6 shadow-lg overflow-hidden">
          <img 
            src="/images/profile-photo.png" 
            alt="Merziyah Poonawala - Professional Headshot"
            className="w-full h-full object-cover"
          />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">{name}</h1>
        <h2 className="text-xl md:text-2xl text-gray-600 mb-8 font-medium">{title}</h2>
        
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
          {bio}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={handleDownloadResume}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 font-medium"
          >
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
          <Button 
            onClick={scrollToContact}
            variant="outline" 
            className="text-orange-500 border-orange-500 hover:bg-orange-50 px-8 py-3 font-medium"
          >
            <Mail className="mr-2 h-4 w-4" />
            Let's Connect
          </Button>
        </div>
      </div>
    </section>
  );
}
