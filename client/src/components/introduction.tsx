import { ButterflyIcon } from "./icons/butterfly";

interface Principle {
  title: string;
  description: string;
}

interface IntroductionProps {
  principles?: Principle[];
}

export function Introduction({ principles = [] }: IntroductionProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            👋🏼 Hi, I'm Merziyah!
          </h2>
          <div className="prose prose-lg mx-auto text-gray-700 max-w-3xl">
            <p className="text-xl leading-relaxed mb-6">
              A product leader with 12+ years experience helping business leaders and founders gain clarity and momentum. I translate user insights into viable solutions, untangle complex processes into streamlined workflows, and take teams from first line of code to version 1.0.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              I work with startups and growing teams, connecting the dots between business and tech to get 
              valuable products to market. I care about outcomes and not afraid to get in the weeds to make it happen. My experience spans numerous industries, including healthcare, talent acquisition, sports, fintech, and marketplaces.
            </p>
          </div>
        </div>

        {principles.length > 0 && (
          <div className="bg-orange-50/50 p-6 rounded-xl max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold mb-4 text-orange-600 text-center">My Product Principles:</h3>
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
        )}
        {/*<div className="bg-orange-50/50 p-8 rounded-xl">
           <h3 className="text-2xl font-bold mb-6 text-gray-900">What you will find here:</h3>
          <p className="text-lg text-gray-700 mb-6">
            This site is a simple reflection of how I work and think.
          </p>
          
          <ul className="max-w-2xl space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-orange-500 mr-3 mt-1">•</span>
              <span>My approach to product leadership</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-3 mt-1">•</span>
              <span>Case studies from real projects</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-3 mt-1">•</span>
              <span>Freelance services I offer to early-stage or scaling teams</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-3 mt-1">•</span>
              <span>A way to get in touch if you want to collaborate</span>
            </li>
          </ul> 
        </div> */}
      </div>
    </section>
  );
}