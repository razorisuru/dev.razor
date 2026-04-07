const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: 'Navigation',
      links: [
        { name: 'Services', href: '#services' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Process', href: '#process' },
        { name: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'Services',
      links: [
        { name: 'Web Development', href: '#services' },
        { name: 'Mobile Apps', href: '#services' },
        { name: 'Web Hosting & Maintenance', href: '#services' },
        { name: 'Tech Consultation', href: '#services' },
      ],
    },
    {
      title: 'Connect',
      links: [
        { name: 'GitHub', href: 'https://github.com/razorisuru' },
        { name: 'LinkedIn', href: 'https://www.linkedin.com/in/razor-isuru/' },
        { name: 'Twitter', href: 'https://twitter.com/razorisuru' },
        { name: 'YouTube', href: 'https://www.youtube.com/@razor_dev' },
      ],
    },
  ]

  return (
    <footer className="relative overflow-hidden">
      {/* Wave Decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-school-bus-yellow-400/50 to-transparent"></div>
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-imperial-blue-500 to-imperial-blue-700"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-steel-azure-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-school-bus-yellow-400/3 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6">
              <img 
                src="/logo.png" 
                alt="RaZoR Dev Logo" 
                className="w-11 h-11 rounded-xl"
              />
              <div>
                <span className="text-white font-semibold text-lg block leading-tight">RaZoR Dev</span>
              </div>
            </a>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
              Professional web development, mobile apps, hosting & maintenance, and tech consultation services to help your business thrive digitally.
            </p>
            {/* Newsletter */}
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-imperial-blue-400/50 border border-steel-azure-500/30 rounded-xl text-white placeholder-white/40 text-sm focus:outline-none focus:border-school-bus-yellow-400 transition-colors"
              />
              <button className="px-5 py-3 bg-gradient-to-r from-school-bus-yellow-400 to-gold-400 text-imperial-blue-500 rounded-xl text-sm font-semibold hover:from-school-bus-yellow-300 hover:to-gold-300 transition-all whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="text-white font-semibold mb-5">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-white/50 hover:text-school-bus-yellow-400 transition-colors text-sm flex items-center gap-2 group"
                    >
                      <span className="w-0 h-0.5 bg-school-bus-yellow-400 group-hover:w-2 transition-all duration-300"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {currentYear} RaZoR Dev. All rights reserved.
          </p>
          <p className="text-white/40 text-sm flex items-center gap-2">
            {/* Crafted with
            <span className="text-school-bus-yellow-400">✦</span>
            passion using
            <span className="text-steel-azure-200 font-mono">React + Tailwind</span> */}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
