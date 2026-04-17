import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

const Footer: React.FC = () => {
  const { user, openAuthModal } = useAuth();
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDashboardClick = () => {
    if (user) {
      navigate('/dashboard');
    } else {
      openAuthModal('login');
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="buseka" className="h-10 w-auto object-contain" />
              <span className="text-xl font-bold tracking-tight text-white">Bus<span className="text-orange-400">E</span>ka</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-6 max-w-sm">
              The complete digital platform for managing private bus operations in Sri Lanka. Track income, expenses, trips, and gain full business visibility.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {[
                {
                  label: 'Facebook',
                  href: 'https://facebook.com/buseka',
                  icon: (
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  ),
                },
                {
                  label: 'LinkedIn',
                  href: 'https://linkedin.com/company/buseka',
                  icon: (
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  ),
                },
                {
                  label: 'WhatsApp',
                  href: 'https://wa.me/94771234567',
                  icon: (
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  ),
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 bg-slate-800 hover:bg-orange-500 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Platform</h4>
            <ul className="space-y-3">
              {[
                { label: 'Features', action: () => scrollToSection('features') },
                { label: 'Solution', action: () => scrollToSection('solution') },
                { label: 'Mission', action: () => scrollToSection('mission') },
                { label: 'Contact', action: () => scrollToSection('contact') },
              ].map((link, i) => (
                <li key={i}>
                  <button
                    onClick={link.action}
                    className="text-sm text-slate-400 hover:text-orange-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Products</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={handleDashboardClick}
                  className="text-sm text-slate-400 hover:text-orange-400 transition-colors"
                >
                  Admin Dashboard
                </button>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-sm text-slate-500 cursor-default">Duty App (Android)</span>
                <span className="text-[10px] bg-orange-500/20 text-orange-400 px-1.5 py-0.5 rounded-full font-semibold">Soon</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-sm text-slate-500 cursor-default">Duty App (iOS)</span>
                <span className="text-[10px] bg-orange-500/20 text-orange-400 px-1.5 py-0.5 rounded-full font-semibold">Soon</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Legal</h4>
            <ul className="space-y-3">
              {[
                { label: 'Privacy Policy', action: () => alert('Privacy Policy page coming soon...') },
                { label: 'Terms of Service', action: () => alert('Terms of Service page coming soon...') },
                { label: 'Data Policy', action: () => alert('Data Policy page coming soon...') },
              ].map((link, i) => (
                <li key={i}>
                  <button
                    onClick={link.action}
                    className="text-sm text-slate-400 hover:text-orange-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {currentYear} buseka. All rights reserved.
          </p>
          <p className="text-sm text-slate-500">
            Built with care for Sri Lanka's bus industry
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
