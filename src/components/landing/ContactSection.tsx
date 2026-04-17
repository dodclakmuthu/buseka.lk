import React, { useState } from 'react';

const contactChannels = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Phone',
    value: '+94 77 104 5601',
    href: 'tel:+94771045601',
    color: 'bg-blue-50 text-blue-600 border-blue-100 hover:bg-blue-100',
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    label: 'WhatsApp',
    value: '+94 77 104 5601',
    href: 'https://wa.me/94771045601',
    color: 'bg-green-50 text-green-600 border-green-100 hover:bg-green-100',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: 'info@buseka.lk',
    href: 'mailto:info@buseka.lk',
    color: 'bg-orange-50 text-orange-600 border-orange-100 hover:bg-orange-100',
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    label: 'Facebook',
    value: 'buseka Official',
    href: 'https://facebook.com/buseka',
    color: 'bg-indigo-50 text-indigo-600 border-indigo-100 hover:bg-indigo-100',
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    label: 'LinkedIn',
    value: 'buseka',
    href: 'https://linkedin.com/company/buseka',
    color: 'bg-sky-50 text-sky-600 border-sky-100 hover:bg-sky-100',
  },
];

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    type: 'owner',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', phone: '', message: '', type: 'owner' });
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full mb-4">
            <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span className="text-blue-600 text-sm font-medium">Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-800 mb-4">
            Ready to Go Digital?
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Let's Talk</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Have questions about buseka? Want a demo? Reach out through any channel — we're here to help you modernize your bus operations.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Channels */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-lg font-bold text-slate-800 mb-4">Connect With Us</h3>
            {contactChannels.map((channel, i) => (
              <a
                key={i}
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-4 p-4 rounded-xl border transition-all ${channel.color}`}
              >
                {channel.icon}
                <div>
                  <p className="text-xs font-medium opacity-60">{channel.label}</p>
                  <p className="font-semibold">{channel.value}</p>
                </div>
                <svg className="w-4 h-4 ml-auto opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-slate-100">
              <h3 className="text-lg font-bold text-slate-800 mb-6">Send Us a Message</h3>
              
              {submitted ? (
                <div className="text-center py-12 animate-fade-in">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-slate-800 mb-2">Message Sent!</h4>
                  <p className="text-slate-500">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* User Type */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">I am a</label>
                    <div className="flex gap-3">
                      {[
                        { value: 'owner', label: 'Bus Owner' },
                        { value: 'company', label: 'Bus Company' },
                        { value: 'other', label: 'Other' },
                      ].map((opt) => (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() => setFormData({ ...formData, type: opt.value })}
                          className={`flex-1 px-4 py-2.5 rounded-xl text-sm font-medium border transition-all ${
                            formData.type === opt.value
                              ? 'bg-orange-50 border-orange-200 text-orange-700'
                              : 'bg-white border-slate-200 text-slate-500 hover:border-slate-300'
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => { setFormData({ ...formData, name: e.target.value }); setErrors({ ...errors, name: '' }); }}
                        className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-400 ${
                          errors.name ? 'border-red-300 bg-red-50' : 'border-slate-200 bg-slate-50'
                        }`}
                        placeholder="Your name"
                      />
                      {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-400"
                        placeholder="+94 7X XXX XXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Email *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => { setFormData({ ...formData, email: e.target.value }); setErrors({ ...errors, email: '' }); }}
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-400 ${
                        errors.email ? 'border-red-300 bg-red-50' : 'border-slate-200 bg-slate-50'
                      }`}
                      placeholder="you@example.com"
                    />
                    {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Message *</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => { setFormData({ ...formData, message: e.target.value }); setErrors({ ...errors, message: '' }); }}
                      rows={4}
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-400 resize-none ${
                        errors.message ? 'border-red-300 bg-red-50' : 'border-slate-200 bg-slate-50'
                      }`}
                      placeholder="Tell us about your bus operation and how we can help..."
                    />
                    {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3.5 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold rounded-xl shadow-lg shadow-orange-200 transition-all hover:-translate-y-0.5"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
