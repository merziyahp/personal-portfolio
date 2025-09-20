export function Introduction() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            👋🏼 Hi, I'm Merziyah!
          </h2>
          <div className="prose prose-lg mx-auto text-gray-700 max-w-3xl">
            <p className="text-xl leading-relaxed mb-6">
              A product leader with 12+ years experience helping teams build clarity and momentum, 
              going from first line of code to version 1 or untangling complex processes into streamlined workflows.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              I work with startups and growing teams, connecting the dots between business and tech to get 
              valuable products to market. I care about outcomes and not afraid to get in the weeds to make it happen.
            </p>
          </div>
        </div>

        <div className="bg-orange-50/50 p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center">What you will find here:</h3>
          <p className="text-lg text-gray-700 mb-6 text-center">
            This site is a simple reflection of how I work and think.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">1</span>
              </div>
              <p className="text-gray-700">My approach to product leadership</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">2</span>
              </div>
              <p className="text-gray-700">Case studies from real projects</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">3</span>
              </div>
              <p className="text-gray-700">Freelance services I offer to early-stage or scaling teams</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">4</span>
              </div>
              <p className="text-gray-700">A way to get in touch if you want to collaborate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}