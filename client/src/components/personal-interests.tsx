import { Book, Mountain, Dumbbell, GraduationCap } from "lucide-react";
import { Link } from "wouter";

interface Interest {
  title: string;
  description: string;
  icon: string;
}

interface PersonalInterestsProps {
  items: Interest[];
}

const iconMap = {
  book: Book,
  mountain: Mountain,
  dumbbell: Dumbbell,
  "graduation-cap": GraduationCap,
};

export function PersonalInterests({ items }: PersonalInterestsProps) {
  // Create placeholder images with gradients based on the interest
  const getImageGradient = (icon: string) => {
    const gradients = {
      book: "from-blue-400 to-purple-600",
      mountain: "from-green-400 to-emerald-600", 
      dumbbell: "from-red-400 to-orange-600",
      "graduation-cap": "from-indigo-400 to-blue-600",
    };
    return gradients[icon as keyof typeof gradients] || "from-gray-400 to-gray-600";
  };

  return (
    <section id="personal" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Personal Interests</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => {
            const IconComponent = iconMap[item.icon as keyof typeof iconMap];
            const isReadingCard = item.title.toLowerCase() === 'reading';
            
            const cardContent = (
              <div className={`group ${isReadingCard ? 'cursor-pointer hover:transform hover:scale-105 transition-transform duration-200' : ''}`}>
                {/* Image with overlay title */}
                <div className="relative h-48 rounded-xl overflow-hidden mb-3 shadow-lg">
                  {/* Gradient background as placeholder for image */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${getImageGradient(item.icon)} opacity-90`}></div>
                  
                  {/* Icon overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {IconComponent && (
                      <IconComponent className="w-16 h-16 text-white opacity-60" />
                    )}
                  </div>
                  
                  {/* Title overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <h3 className="font-bold text-white text-lg">{item.title}</h3>
                  </div>
                </div>
                
                {/* Description below image */}
                <p className="text-sm text-gray-600 text-center">{item.description}</p>
              </div>
            );

            return (
              <div key={index}>
                {isReadingCard ? (
                  <Link href="/reading">
                    {cardContent}
                  </Link>
                ) : (
                  cardContent
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
