import { Book, Mountain, Dumbbell, GraduationCap } from "lucide-react";

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
  return (
    <section id="personal" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Personal Interests</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => {
            const IconComponent = iconMap[item.icon as keyof typeof iconMap];
            return (
              <div 
                key={index}
                className="bg-orange-50/30 p-6 rounded-xl text-center hover:bg-orange-50/50 transition-colors duration-200"
              >
                {IconComponent ? (
                  <IconComponent className="w-12 h-12 mx-auto mb-3 text-orange-500" />
                ) : (
                  <div className="w-12 h-12 mx-auto mb-3 bg-orange-200 rounded-lg flex items-center justify-center">
                    <span className="text-orange-600 text-xs">Icon</span>
                  </div>
                )}
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
