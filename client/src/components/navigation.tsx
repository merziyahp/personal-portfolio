import { ButterflyIcon } from "./icons/butterfly";
import { useLocation } from "wouter";

export function Navigation() {
  const [location, setLocation] = useLocation();

  const handleNavigate = (sectionId: string) => {
    if (location === '/') {
      // Already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home page with hash
      setLocation('/');
      // Wait for navigation, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button 
            onClick={() => setLocation('/')}
            className="flex items-center cursor-pointer"
          >
            <ButterflyIcon className="text-orange-500 w-6 h-6 mr-2" />
            <span className="font-semibold text-lg text-gray-900">Merziyah's Digital Home</span>
          </button>
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => handleNavigate('about')}
              className="text-gray-600 hover:text-orange-500 transition-colors duration-200"
            >
              About
            </button>
            <button 
              onClick={() => handleNavigate('experience')}
              className="text-gray-600 hover:text-orange-500 transition-colors duration-200"
            >
              Experience
            </button>
            <button 
              onClick={() => handleNavigate('case-studies')}
              className="text-gray-600 hover:text-orange-500 transition-colors duration-200"
            >
              Case Studies
            </button>
            <button 
              onClick={() => handleNavigate('writing')}
              className="text-gray-600 hover:text-orange-500 transition-colors duration-200"
            >
              Writing
            </button>
            <a 
              href="/projects"
              className="text-gray-600 hover:text-orange-500 transition-colors duration-200"
            >
              Projects
            </a>
            <button 
              onClick={() => handleNavigate('personal')}
              className="text-gray-600 hover:text-orange-500 transition-colors duration-200"
            >
              Personal
            </button>
            <button 
              onClick={() => handleNavigate('contact')}
              className="text-gray-600 hover:text-orange-500 transition-colors duration-200"
            >
              Contact
            </button>
            <a
                href="/Resume.pdf"
                download="Merziyah_Poonawala_Resume.pdf"
                className="text-gray-600 hover:text-orange-500 transition-colors"
              >
                Resume
              </a>
          </div>
          <button className="md:hidden text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}