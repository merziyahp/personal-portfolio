import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";

export function ProfileSection() {
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
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
         {/* Professional headshot - round styling */}
        <div className="w-40 h-40 mx-auto rounded-full bg-gray-200 mb-8 shadow-lg overflow-hidden">
          <img 
            src="/images/Profile-photo.png" 
            alt="Merziyah Poonawala - Professional Headshot"
            className="w-full h-full object-cover"
          />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Merziyah Poonawala</h1>
        <h2 className="text-xl md:text-2xl text-gray-600 mb-8 font-medium">Senior Product Manager</h2>
        
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