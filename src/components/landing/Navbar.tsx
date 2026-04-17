import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, openAuthModal, signOut, profile } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const handleDashboardClick = () => {
    if (user) {
      navigate('/dashboard');
    } else {
      openAuthModal('login');
    }
    setMobileMenuOpen(false);
  };

  const handleSignOut = async () => {
    await signOut();
    setMobileMenuOpen(false);
  };

  const displayName = profile?.full_name || user?.email?.split('@')[0] || '';
  const initials = displayName ? displayName.split(' ').map((n: string) => n[0]).join('').toUpperCase().slice(0, 2) : '';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src="/logo.png" alt="buseka" className="h-10 w-auto object-contain" />
            <span className={`text-xl font-bold tracking-tight transition-colors ${scrolled ? 'text-slate-800' : 'text-white'}`}>
              Bus<span className="text-orange-500">E</span>ka
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {[
              { label: 'Features', id: 'features' },
              { label: 'Solution', id: 'solution' },
              { label: 'Mission', id: 'mission' },
              { label: 'Stats', id: 'stats' },
              { label: 'Contact', id: 'contact' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors hover:text-orange-500 ${
                  scrolled ? 'text-slate-600' : 'text-white/90'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {user ? (
              <>
                <button
                  onClick={() => navigate('/dashboard')}
                  className="px-5 py-2.5 text-sm font-semibold text-orange-600 bg-orange-50 hover:bg-orange-100 rounded-xl transition-all"
                >
                  Dashboard
                </button>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    {initials}
                  </div>
                  <button
                    onClick={handleSignOut}
                    className={`text-sm font-medium transition-colors hover:text-red-500 ${
                      scrolled ? 'text-slate-500' : 'text-white/70'
                    }`}
                  >
                    Sign Out
                  </button>
                </div>
              </>
            ) : (
              <>
                <button
                  onClick={handleDashboardClick}
                  className="px-5 py-2.5 text-sm font-semibold text-orange-600 bg-orange-50 hover:bg-orange-100 rounded-xl transition-all"
                >
                  Admin Dashboard
                </button>
                <div className="relative">
                  <div className="px-5 py-2.5 text-sm font-semibold text-slate-400 bg-slate-100 rounded-xl flex items-center gap-2 cursor-default select-none">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    Get the App
                  </div>
                  <span className="absolute -top-2.5 -right-2 bg-orange-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full whitespace-nowrap uppercase tracking-wide">
                    Soon
                  </span>
                </div>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl animate-fade-in">
          <div className="px-4 py-4 space-y-1">
            {[
              { label: 'Features', id: 'features' },
              { label: 'Solution', id: 'solution' },
              { label: 'Mission', id: 'mission' },
              { label: 'Stats', id: 'stats' },
              { label: 'Contact', id: 'contact' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 text-sm font-medium text-slate-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
              {user ? (
                <>
                  <div className="flex items-center gap-3 px-4 py-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      {initials}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-800">{displayName}</p>
                      <p className="text-xs text-slate-400">{user.email}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => { navigate('/dashboard'); setMobileMenuOpen(false); }}
                    className="px-4 py-3 text-sm font-semibold text-center text-orange-600 bg-orange-50 hover:bg-orange-100 rounded-xl transition-all"
                  >
                    Go to Dashboard
                  </button>
                  <button
                    onClick={handleSignOut}
                    className="px-4 py-3 text-sm font-semibold text-center text-red-600 bg-red-50 hover:bg-red-100 rounded-xl transition-all"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={handleDashboardClick}
                    className="px-4 py-3 text-sm font-semibold text-center text-orange-600 bg-orange-50 hover:bg-orange-100 rounded-xl transition-all"
                  >
                    Admin Dashboard
                  </button>
                  <div className="relative">
                    <div className="px-4 py-3 text-sm font-semibold text-center text-slate-400 bg-slate-100 rounded-xl flex items-center justify-center gap-2 cursor-default select-none">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                      Get the App
                    </div>
                    <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap uppercase tracking-wide">
                      Coming Soon
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
