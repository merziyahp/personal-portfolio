interface SkillCategory {
  title: string;
  skills: string[];
}

interface SkillsProps {
  categories: SkillCategory[];
}

export function Skills({ categories }: SkillsProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Skills & Expertise</h2>
        <div className="space-y-8">
          {categories.map((category, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4 text-gray-800">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className={index === 0 ? "skill-tag" : "tool-tag"}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
