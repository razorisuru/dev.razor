const Process = () => {
  const steps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'We start by understanding your goals, target audience, and project requirements through in-depth consultation.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Strategy',
      description: 'Creating a comprehensive roadmap with clear milestones, technical specifications, and design direction.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Design',
      description: 'Crafting beautiful, intuitive interfaces with wireframes, prototypes, and pixel-perfect visual designs.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
    {
      number: '04',
      title: 'Development',
      description: 'Building robust, scalable solutions with clean code, modern technologies, and best practices.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      number: '05',
      title: 'Launch',
      description: 'Thorough testing, optimization, and seamless deployment with ongoing support and maintenance.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
        </svg>
      ),
    },
  ]

  return (
    <section id="process" className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-imperial-blue-500 via-french-blue-500/30 to-imperial-blue-500"></div>
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-steel-azure-500/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-school-bus-yellow-400/5 rounded-full blur-[100px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 glass-light rounded-full text-school-bus-yellow-400 text-sm font-medium mb-6">
            How I Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="gradient-text">Process</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            A structured approach to delivering exceptional results on every project
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-school-bus-yellow-400/30 to-transparent hidden lg:block"></div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative group"
              >
                {/* Step Card */}
                <div className="glass rounded-3xl p-8 text-center hover:bg-white/5 transition-all duration-500 card-glow h-full">
                  {/* Number Circle */}
                  <div className="relative mx-auto mb-6">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-school-bus-yellow-400/20 to-gold-400/10 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 border border-school-bus-yellow-400/20">
                      <span className="text-school-bus-yellow-400">
                        {step.icon}
                      </span>
                    </div>
                    {/* Step Number Badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-school-bus-yellow-400 to-gold-400 rounded-lg flex items-center justify-center text-imperial-blue-500 text-xs font-bold shadow-lg">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-school-bus-yellow-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow (between steps on desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-24 -right-4 text-school-bus-yellow-400/30">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="glass rounded-3xl p-10 md:p-14 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">
              Let's collaborate and bring your vision to life. I'm excited to hear about your project ideas.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-school-bus-yellow-400 to-gold-400 text-imperial-blue-500 rounded-full font-semibold hover:from-school-bus-yellow-300 hover:to-gold-300 transition-all duration-300 hover:shadow-xl hover:shadow-school-bus-yellow-400/25 hover:-translate-y-1"
            >
              Get in Touch
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process
