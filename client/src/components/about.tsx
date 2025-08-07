import { ButterflyIcon } from "./icons/butterfly";

interface Principle {
  title: string;
  description: string;
}

interface AboutProps {
  description: string;
  principles: Principle[];
}

export function About({ description, principles }: AboutProps) {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/*<h2 className="text-3xl font-bold text-center mb-12 text-gray-900">About Me</h2>
        <div className="prose prose-lg mx-auto text-gray-700"> */}
        <div className="prose prose-lg mx-auto text-gray-700">
          <p className="text-center mb-8 text-lg leading-relaxed">
            {description}
          </p>
          
          <div className="bg-orange-50/50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-orange-600">My Product Principles:</h3>
            <ul className="space-y-3 text-gray-700">
              {principles.map((principle, index) => (
                <li key={index} className="flex items-start">
                  <ButterflyIcon className="text-orange-500 mr-3 mt-1 w-4 h-4 flex-shrink-0" />
                  <span>
                    <strong>{principle.title}:</strong> {principle.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
