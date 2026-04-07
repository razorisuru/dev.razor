const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: '🎨',
      color: 'from-turquoise-400 to-sky-aqua-400',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Next.js', level: 88 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'Vue.js', level: 75 },
      ],
    },
    {
      title: 'Backend',
      icon: '⚙️',
      color: 'from-bright-teal-400 to-blue-green-400',
      skills: [
        { name: 'Node.js', level: 92 },
        { name: 'Python', level: 85 },
        { name: 'PostgreSQL', level: 88 },
        { name: 'MongoDB', level: 85 },
        { name: 'GraphQL', level: 80 },
      ],
    },
    {
      title: 'Tools & DevOps',
      icon: '🛠️',
      color: 'from-french-blue-200 to-bright-teal-200',
      skills: [
        { name: 'Git', level: 95 },
        { name: 'Docker', level: 82 },
        { name: 'AWS', level: 78 },
        { name: 'Figma', level: 85 },
        { name: 'CI/CD', level: 80 },
      ],
    },
  ]

  const technologies = [
    { name: 'JavaScript', category: 'language' },
    { name: 'TypeScript', category: 'language' },
    { name: 'React', category: 'frontend' },
    { name: 'Next.js', category: 'frontend' },
    { name: 'Vue.js', category: 'frontend' },
    { name: 'Node.js', category: 'backend' },
    { name: 'Express', category: 'backend' },
    { name: 'Python', category: 'language' },
    { name: 'Django', category: 'backend' },
    { name: 'PostgreSQL', category: 'database' },
    { name: 'MongoDB', category: 'database' },
    { name: 'Redis', category: 'database' },
    { name: 'GraphQL', category: 'api' },
    { name: 'REST API', category: 'api' },
    { name: 'Docker', category: 'devops' },
    { name: 'Kubernetes', category: 'devops' },
    { name: 'AWS', category: 'cloud' },
    { name: 'GCP', category: 'cloud' },
    { name: 'Git', category: 'tool' },
    { name: 'GitHub Actions', category: 'devops' },
    { name: 'Vercel', category: 'cloud' },
    { name: 'Tailwind CSS', category: 'frontend' },
    { name: 'SASS', category: 'frontend' },
    { name: 'Figma', category: 'design' },
  ]

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-twilight-400 to-french-blue-400/30"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-turquoise-400/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 glass-light rounded-full text-sky-aqua-400 text-sm font-medium mb-4">
            My Skills
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-light-cyan-100 mb-4">
            Technologies & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-light-cyan-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass rounded-3xl p-8 hover:bg-turquoise-400/5 transition-all duration-500 card-glow group"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-light-cyan-100">
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-light-cyan-200 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-turquoise-400 text-sm font-mono">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-deep-twilight-500 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Cloud */}
        <div className="glass rounded-3xl p-10">
          <h3 className="text-xl font-bold text-light-cyan-100 text-center mb-8">
            Full Technology Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-5 py-2.5 glass-light text-light-cyan-200 rounded-full hover:bg-turquoise-400/20 hover:text-turquoise-300 transition-all duration-300 cursor-default text-sm font-medium"
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
