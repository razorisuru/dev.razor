const About = () => {
  const stats = [
    { number: '5+', label: 'Years Experience', icon: '⏱️' },
    { number: '50+', label: 'Projects Completed', icon: '🚀' },
    { number: '30+', label: 'Happy Clients', icon: '😊' },
    { number: '10+', label: 'Awards Won', icon: '🏆' },
  ]

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-twilight-400 via-french-blue-400/20 to-deep-twilight-400"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-turquoise-400/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-bright-teal-400/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 glass-light rounded-full text-turquoise-400 text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-light-cyan-100 mb-4">
            Passionate About Creating
            <span className="gradient-text block">Digital Experiences</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="relative max-w-md mx-auto">
              {/* Main Image Container */}
              <div className="relative z-10 rounded-3xl overflow-hidden glass p-2">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-french-blue-400 to-bright-teal-400 flex items-center justify-center">
                  <span className="text-9xl">👨‍💻</span>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-turquoise-400 to-sky-aqua-400 rounded-2xl -z-10 animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-bright-teal-400 to-blue-green-400 rounded-2xl -z-10 animate-float animation-delay-2000"></div>
              
              {/* Floating Cards */}
              <div className="absolute -right-8 top-1/4 glass-light px-4 py-3 rounded-xl animate-float animation-delay-1000">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">⚛️</span>
                  <span className="text-light-cyan-200 font-medium">React</span>
                </div>
              </div>
              <div className="absolute -left-8 bottom-1/4 glass-light px-4 py-3 rounded-xl animate-float animation-delay-3000">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🎨</span>
                  <span className="text-light-cyan-200 font-medium">UI/UX</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div>
            <h3 className="text-2xl font-bold text-light-cyan-100 mb-6">
              Building the web, one pixel at a time
            </h3>
            
            <div className="space-y-4 text-light-cyan-300 leading-relaxed">
              <p>
                I'm a full-stack developer with over 5 years of experience crafting 
                digital experiences that combine beautiful design with powerful functionality. 
                My journey began with a curiosity about how the web works, and has evolved 
                into a deep passion for creating impactful solutions.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge through 
                technical writing and mentorship.
              </p>
              <p>
                I believe in the power of clean code and thoughtful design to transform 
                ideas into experiences that make a real difference in people's lives.
              </p>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="glass-light rounded-xl p-4">
                <span className="text-light-cyan-400 text-sm">Name</span>
                <p className="text-light-cyan-100 font-medium">John Doe</p>
              </div>
              <div className="glass-light rounded-xl p-4">
                <span className="text-light-cyan-400 text-sm">Location</span>
                <p className="text-light-cyan-100 font-medium">San Francisco, CA</p>
              </div>
              <div className="glass-light rounded-xl p-4">
                <span className="text-light-cyan-400 text-sm">Email</span>
                <p className="text-turquoise-400 font-medium">hello@johndoe.dev</p>
              </div>
              <div className="glass-light rounded-xl p-4">
                <span className="text-light-cyan-400 text-sm">Status</span>
                <p className="text-sky-aqua-400 font-medium flex items-center gap-2">
                  <span className="w-2 h-2 bg-sky-aqua-400 rounded-full animate-pulse"></span>
                  Open to work
                </p>
              </div>
            </div>

            {/* Download CV */}
            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center gap-3 px-6 py-3 glass-light text-light-cyan-200 rounded-xl hover:bg-turquoise-400/20 transition-all duration-300 group"
              >
                <svg className="w-5 h-5 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Resume
              </a>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 glass rounded-2xl hover:bg-turquoise-400/10 transition-all duration-300 group card-glow"
            >
              <span className="text-4xl mb-4 block group-hover:scale-110 transition-transform">{stat.icon}</span>
              <div className="text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-light-cyan-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
