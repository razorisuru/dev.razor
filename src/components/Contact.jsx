import { useState } from 'react'

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
    setFormErrors((prev) => ({
      ...prev,
      [id]: '',
    }))
  }

  const validateForm = () => {
    let isValid = true
    const errors = {
      name: '',
      email: '',
      subject: '',
      message: '',
    }
    if (formData.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters'
      isValid = false
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      errors.email = 'Please enter a valid email address'
      isValid = false
    }
    if (formData.subject.trim().length < 3) {
      errors.subject = 'Subject must be at least 3 characters'
      isValid = false
    }
    if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters'
      isValid = false
    }
    setFormErrors(errors)
    return isValid
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) {
      return
    }
    setIsSubmitting(true)
    setError(null)
    try {
      const response = await fetch('https://razor-mail-server.vercel.app/api/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      const data = await response.json()
      if (!response.ok) {
        throw new Error(data.message || 'Failed to send message')
      }
      setIsSuccess(true)
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
    } catch (err) {
      console.error('Form submission error:', err)
      setError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: 'Email',
      value: 'info@razorisuru.com',
      href: 'mailto:info@razorisuru.com',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      label: 'Response Time',
      value: 'Within 24 hours',
      href: '#',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      label: 'Availability',
      value: 'Available for new projects',
      href: '#',
    },
  ]

  const socials = [
    { name: 'GitHub', href: 'https://github.com/razorisuru', icon: 'M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/razor-isuru/', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
    { name: 'Twitter', href: 'https://twitter.com/razorisuru', icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
    { name: 'YouTube', href: 'https://www.youtube.com/@razor_dev', icon: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
  ]

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-imperial-blue-500 via-french-blue-500/30 to-imperial-blue-500"></div>
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-steel-azure-500/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-school-bus-yellow-400/5 rounded-full blur-[100px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 glass-light rounded-full text-school-bus-yellow-400 text-sm font-medium mb-6">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Start Your <span className="gradient-text">Project</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Ready to bring your vision to life? I'd love to hear about your project and discuss how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Let's create something amazing
            </h3>
            <p className="text-white/60 mb-8 leading-relaxed">
              I'm always excited to work on new projects and collaborate with innovative brands. Whether you need a complete website redesign, a new application, or brand identity — let's talk about how I can help.
            </p>

            {/* Contact Cards */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center gap-4 p-5 glass rounded-2xl hover:bg-school-bus-yellow-400/5 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-school-bus-yellow-400/20 to-gold-400/10 flex items-center justify-center text-school-bus-yellow-400 group-hover:scale-110 transition-transform duration-300 border border-school-bus-yellow-400/20">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-white/50 text-sm">{info.label}</p>
                    <p className="text-white font-semibold">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-white/50 mb-4">Or connect with me on:</p>
              <div className="flex gap-3">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-xl glass-light text-white/70 hover:text-school-bus-yellow-400 hover:bg-school-bus-yellow-400/10 transition-all duration-300 hover:-translate-y-1"
                    aria-label={social.name}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass rounded-3xl p-8">
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                  <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
                <p className="text-white/60 mb-6">Thank you for reaching out. I'll get back to you within 24 hours.</p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="px-6 py-3 glass-light text-white rounded-xl font-medium hover:bg-white/10 transition-all duration-300"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {error && (
                  <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-xl text-red-300 text-sm">
                    {error}
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-white/70 text-sm mb-2 font-medium">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3.5 bg-imperial-blue-400/50 border rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-school-bus-yellow-400 focus:ring-1 focus:ring-school-bus-yellow-400/50 transition-all duration-300 ${
                        formErrors.name ? 'border-red-500/50' : 'border-steel-azure-500/30'
                      }`}
                      placeholder="John Doe"
                    />
                    {formErrors.name && (
                      <p className="mt-1.5 text-red-400 text-xs">{formErrors.name}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white/70 text-sm mb-2 font-medium">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3.5 bg-imperial-blue-400/50 border rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-school-bus-yellow-400 focus:ring-1 focus:ring-school-bus-yellow-400/50 transition-all duration-300 ${
                        formErrors.email ? 'border-red-500/50' : 'border-steel-azure-500/30'
                      }`}
                      placeholder="john@example.com"
                    />
                    {formErrors.email && (
                      <p className="mt-1.5 text-red-400 text-xs">{formErrors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-white/70 text-sm mb-2 font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3.5 bg-imperial-blue-400/50 border rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-school-bus-yellow-400 focus:ring-1 focus:ring-school-bus-yellow-400/50 transition-all duration-300 ${
                      formErrors.subject ? 'border-red-500/50' : 'border-steel-azure-500/30'
                    }`}
                    placeholder="Project inquiry"
                  />
                  {formErrors.subject && (
                    <p className="mt-1.5 text-red-400 text-xs">{formErrors.subject}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-white/70 text-sm mb-2 font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={`w-full px-4 py-3.5 bg-imperial-blue-400/50 border rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-school-bus-yellow-400 focus:ring-1 focus:ring-school-bus-yellow-400/50 transition-all duration-300 resize-none ${
                      formErrors.message ? 'border-red-500/50' : 'border-steel-azure-500/30'
                    }`}
                    placeholder="Tell me about your project..."
                  />
                  {formErrors.message && (
                    <p className="mt-1.5 text-red-400 text-xs">{formErrors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-school-bus-yellow-400 to-gold-400 text-imperial-blue-500 rounded-xl font-semibold hover:from-school-bus-yellow-300 hover:to-gold-300 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-school-bus-yellow-400/25 hover:-translate-y-0.5"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      Send Message
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
