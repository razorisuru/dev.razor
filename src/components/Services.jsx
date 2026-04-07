const Services = () => {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies. From landing pages to complex platforms.',
      features: ['React & Next.js', 'Responsive Design', 'Performance Optimized', 'SEO Ready'],
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications that provide seamless experiences across all devices.',
      features: ['React Native', 'iOS & Android', 'Offline Support', 'Push Notifications'],
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      title: 'Web Hosting & Maintenance',
      description: 'Reliable web hosting solutions with ongoing maintenance, security updates, and performance optimization to keep your site running smoothly 24/7.',
      features: ['Cloud Hosting', 'SSL Certificates', 'Regular Backups', '24/7 Monitoring'],
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'Tech Consultation',
      description: 'Expert guidance on technology strategy, architecture decisions, and digital transformation to help your business leverage the right tools and solutions.',
      features: ['Tech Stack Advisory', 'Architecture Review', 'Code Audits', 'Digital Strategy'],
    },
  ]

  return (
    <section id="services" className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-imperial-blue-500 via-french-blue-500/30 to-imperial-blue-500"></div>
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-steel-azure-500/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-school-bus-yellow-400/5 rounded-full blur-[100px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 glass-light rounded-full text-school-bus-yellow-400 text-sm font-medium mb-6">
            What I Do
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Services & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            End-to-end digital solutions tailored to bring your vision to life
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group glass rounded-3xl p-8 md:p-10 hover:bg-white/5 transition-all duration-500 card-glow"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-school-bus-yellow-400/20 to-gold-400/10 flex items-center justify-center text-school-bus-yellow-400 mb-6 group-hover:scale-110 transition-transform duration-300 border border-school-bus-yellow-400/20">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-school-bus-yellow-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-white/60 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 text-sm font-medium bg-imperial-blue-400/50 text-steel-azure-100 rounded-full border border-steel-azure-500/20"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-white/50 mb-6">Have a project in mind?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 glass-light text-white rounded-full font-semibold hover:bg-school-bus-yellow-400/10 hover:border-school-bus-yellow-400/30 transition-all duration-300 border border-white/10"
          >
            Let's Discuss Your Project
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Services
