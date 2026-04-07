import { useState, useEffect } from 'react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group"
          >
            <img 
              src="/logo.png" 
              alt="RaZoR Dev Logo" 
              className="w-11 h-11 rounded-xl group-hover:scale-105 transition-transform duration-300"
            />
            <div className="hidden sm:block">
              <span className="text-white font-semibold text-lg block leading-tight">RaZoR Dev</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-5 py-2.5 text-white/80 hover:text-school-bus-yellow-400 transition-all duration-300 text-sm font-medium relative group"
              >
                {link.name}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-school-bus-yellow-400 to-gold-400 group-hover:w-2/3 transition-all duration-300 rounded-full"></span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="px-6 py-2.5 bg-gradient-to-r from-school-bus-yellow-400 to-gold-400 text-imperial-blue-500 rounded-full hover:from-school-bus-yellow-300 hover:to-gold-300 transition-all duration-300 text-sm font-semibold hover:shadow-lg hover:shadow-school-bus-yellow-400/25 hover:-translate-y-0.5"
            >
              Start a Project
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white hover:text-school-bus-yellow-400 p-2 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-80 mt-4' : 'max-h-0'
          }`}
        >
          <div className="glass-light rounded-2xl p-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-white/80 hover:text-school-bus-yellow-400 hover:bg-school-bus-yellow-400/10 rounded-xl transition-all duration-300 font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-3 bg-gradient-to-r from-school-bus-yellow-400 to-gold-400 text-imperial-blue-500 rounded-xl font-semibold text-center mt-2"
            >
              Start a Project
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
