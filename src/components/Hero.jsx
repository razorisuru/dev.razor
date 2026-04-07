const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-imperial-blue-500 via-french-blue-500 to-imperial-blue-500"></div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(253,197,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(253,197,0,0.5) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }}></div>

      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-1/6 w-[500px] h-[500px] bg-steel-azure-500/20 rounded-full blur-[120px] animate-float"></div>
      <div className="absolute bottom-1/4 right-1/6 w-[400px] h-[400px] bg-school-bus-yellow-400/10 rounded-full blur-[100px] animate-float animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-french-blue-500/15 rounded-full blur-[120px] animate-float animation-delay-4000"></div>

      {/* Floating Elements */}
      <div className="absolute top-32 right-[15%] w-20 h-20 glass-light rounded-2xl flex items-center justify-center animate-float opacity-60">
        <svg className="w-10 h-10 text-school-bus-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </div>
      <div className="absolute bottom-40 left-[10%] w-16 h-16 glass-light rounded-2xl flex items-center justify-center animate-float animation-delay-2000 opacity-60">
        <svg className="w-8 h-8 text-steel-azure-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      </div>
      <div className="absolute top-1/2 right-[8%] w-14 h-14 glass-light rounded-xl flex items-center justify-center animate-float animation-delay-3000 opacity-50">
        <svg className="w-7 h-7 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 glass-light rounded-full mb-8 border border-school-bus-yellow-400/20">
            <span className="w-2 h-2 bg-school-bus-yellow-400 rounded-full animate-pulse"></span>
            <span className="text-school-bus-yellow-400 text-sm font-medium">Available for new projects</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight">
            <span className="text-white">Crafting Digital</span>
            <br />
            <span className="gradient-text">Experiences</span>
            <span className="text-white"> That</span>
            <br />
            <span className="text-white">Stand Out</span>
          </h1>

          {/* Subtitle */}
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            I help brands and businesses create stunning websites, 
            powerful applications, and memorable digital experiences 
            that drive results.
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mb-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">50+</div>
              <div className="text-white/50 text-sm">Projects Delivered</div>
            </div>
            <div className="w-px h-12 bg-white/10 hidden sm:block"></div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">5+</div>
              <div className="text-white/50 text-sm">Years Experience</div>
            </div>
            <div className="w-px h-12 bg-white/10 hidden sm:block"></div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">100%</div>
              <div className="text-white/50 text-sm">Client Satisfaction</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#portfolio"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-school-bus-yellow-400 to-gold-400 text-imperial-blue-500 rounded-full font-semibold hover:from-school-bus-yellow-300 hover:to-gold-300 transition-all duration-300 hover:shadow-xl hover:shadow-school-bus-yellow-400/25 hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              View My Work
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 glass-light text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 border border-white/10 hover:border-school-bus-yellow-400/30"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/40 text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 bg-school-bus-yellow-400 rounded-full animate-bounce"></div>
        </div>
      </div> */}
    </section>
  )
}

export default Hero
