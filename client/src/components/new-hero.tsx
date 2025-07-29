import { ButterflyIcon } from "./icons/butterfly";

export function NewHero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Curious. Pragmatic.<br />
            Adventurous.
          </h1>
          
          <div className="space-y-6 text-xl md:text-2xl text-orange-100">
            <p>Curious enough to explore the unknown.</p>
            <p>Pragmatic enough to ship it.</p>
            <p>Adventurous enough to try again.</p>
          </div>
        </div>
        
        {/* Decorative butterfly */}
        <div className="absolute bottom-20 right-20 opacity-60 hidden lg:block">
          <ButterflyIcon className="w-16 h-16 text-white" />
          <div className="absolute -top-4 -left-8 w-32 h-1 border-t-2 border-dashed border-white opacity-40"></div>
        </div>
      </div>
    </section>
  );
}