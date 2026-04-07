const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'Senior Full Stack Developer',
      company: 'Tech Innovators Inc.',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: [
        'Led development of microservices architecture serving 1M+ users',
        'Mentored team of 5 junior developers and conducted code reviews',
        'Reduced application load time by 40% through optimization',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
      ],
      technologies: ['React', 'Node.js', 'AWS', 'PostgreSQL', 'Docker'],
      current: true,
    },
    {
      id: 2,
      role: 'Full Stack Developer',
      company: 'Digital Solutions Co.',
      location: 'Remote',
      period: '2020 - 2022',
      description: [
        'Built and maintained multiple client-facing web applications',
        'Developed RESTful APIs handling 100k+ daily requests',
        'Collaborated with design team to implement pixel-perfect UIs',
        'Introduced automated testing, achieving 85% code coverage',
      ],
      technologies: ['Vue.js', 'Python', 'Django', 'MongoDB', 'Redis'],
      current: false,
    },
    {
      id: 3,
      role: 'Frontend Developer',
      company: 'StartUp Labs',
      location: 'New York, NY',
      period: '2019 - 2020',
      description: [
        'Developed responsive web interfaces for SaaS products',
        'Implemented state management solutions using Redux',
        'Optimized web performance achieving 95+ Lighthouse scores',
        'Participated in agile ceremonies and sprint planning',
      ],
      technologies: ['React', 'Redux', 'TypeScript', 'SASS', 'Jest'],
      current: false,
    },
  ]

  const education = [
    {
      degree: 'B.S. Computer Science',
      school: 'University of California, Berkeley',
      period: '2015 - 2019',
      description: 'Graduated with honors. Focus on Software Engineering and AI.',
    },
  ]

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-twilight-400 via-french-blue-400/20 to-deep-twilight-400"></div>
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-bright-teal-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-turquoise-400/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 glass-light rounded-full text-sky-aqua-400 text-sm font-medium mb-4">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-light-cyan-100 mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-light-cyan-400 max-w-2xl mx-auto">
            My professional journey and the milestones along the way
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-turquoise-400 via-bright-teal-400 to-french-blue-400/50"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 z-10">
                  <div className={`w-full h-full rounded-full ${exp.current ? 'bg-turquoise-400' : 'bg-bright-teal-400'}`}></div>
                  {exp.current && (
                    <div className="absolute inset-0 rounded-full bg-turquoise-400 animate-ping opacity-50"></div>
                  )}
                </div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="glass rounded-3xl p-6 hover:bg-turquoise-400/5 transition-all duration-300 card-glow">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-light-cyan-100">
                          {exp.role}
                        </h3>
                        <p className="text-turquoise-400 font-medium">
                          {exp.company}
                        </p>
                      </div>
                      {exp.current && (
                        <span className="px-3 py-1 bg-turquoise-400/20 text-turquoise-400 text-xs font-medium rounded-full flex items-center gap-1">
                          <span className="w-1.5 h-1.5 bg-turquoise-400 rounded-full animate-pulse"></span>
                          Current
                        </span>
                      )}
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 text-sm text-light-cyan-400 mb-4">
                      <span className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {exp.period}
                      </span>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-light-cyan-300 text-sm">
                          <span className="w-1.5 h-1.5 bg-sky-aqua-400 rounded-full mt-2 shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs font-mono bg-deep-twilight-500 text-turquoise-400 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-24 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-light-cyan-100 text-center mb-8">
            Education
          </h3>
          {education.map((edu, index) => (
            <div
              key={index}
              className="glass rounded-3xl p-8 hover:bg-turquoise-400/5 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-turquoise-400 to-bright-teal-400 flex items-center justify-center text-2xl shrink-0">
                  🎓
                </div>
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h4 className="text-lg font-bold text-light-cyan-100">
                      {edu.degree}
                    </h4>
                    <span className="text-light-cyan-400 text-sm font-mono">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-turquoise-400 font-medium mb-2">
                    {edu.school}
                  </p>
                  <p className="text-light-cyan-400 text-sm">{edu.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
