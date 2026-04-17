import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

const AuthModal: React.FC = () => {
  const { showAuthModal, authModalTab, closeAuthModal, openAuthModal, signIn, signUp, resetPassword } = useAuth();
  const navigate = useNavigate();

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);

  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupConfirm, setSignupConfirm] = useState('');
  const [signupError, setSignupError] = useState('');
  const [signupLoading, setSignupLoading] = useState(false);
  const [signupSuccess, setSignupSuccess] = useState(false);

  const [resetEmail, setResetEmail] = useState('');
  const [resetError, setResetError] = useState('');
  const [resetLoading, setResetLoading] = useState(false);
  const [resetSuccess, setResetSuccess] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  if (!showAuthModal) return null;

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    if (!loginEmail.trim() || !loginPassword.trim()) {
      setLoginError('Please fill in all fields');
      return;
    }
    setLoginLoading(true);
    const { error } = await signIn(loginEmail, loginPassword);
    if (error) {
      setLoginError(error);
    } else {
      navigate('/dashboard');
    }
    setLoginLoading(false);
  };


  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setSignupError('');
    if (!signupName.trim() || !signupEmail.trim() || !signupPassword.trim()) {
      setSignupError('Please fill in all required fields');
      return;
    }
    if (signupPassword.length < 6) {
      setSignupError('Password must be at least 6 characters');
      return;
    }
    if (signupPassword !== signupConfirm) {
      setSignupError('Passwords do not match');
      return;
    }
    setSignupLoading(true);
    const { error } = await signUp(signupEmail, signupPassword, signupName);
    if (error) {
      setSignupError(error);
    } else {
      setSignupSuccess(true);
    }
    setSignupLoading(false);
  };

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setResetError('');
    if (!resetEmail.trim()) {
      setResetError('Please enter your email');
      return;
    }
    setResetLoading(true);
    const { error } = await resetPassword(resetEmail);
    if (error) {
      setResetError(error);
    } else {
      setResetSuccess(true);
    }
    setResetLoading(false);
  };

  const switchTab = (tab: 'login' | 'signup' | 'reset') => {
    setLoginError('');
    setSignupError('');
    setResetError('');
    setSignupSuccess(false);
    setResetSuccess(false);
    openAuthModal(tab);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={closeAuthModal}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl animate-fade-in">
        {/* Close button */}
        <button
          onClick={closeAuthModal}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="px-8 pt-8 pb-2">
          <div className="flex items-center gap-3 mb-6">
            <img src="/logo.png" alt="buseka" className="h-10 w-auto object-contain" />
            <div>
              <span className="text-xl font-bold text-slate-800 tracking-tight">Bus<span className="text-orange-500">E</span>ka</span>
              <p className="text-xs text-slate-400">Admin Dashboard</p>
            </div>
          </div>

          {/* Tab Switcher — always rendered to keep header height stable */}
          <div className={`flex bg-slate-100 rounded-xl p-1 mb-6 transition-opacity ${authModalTab === 'reset' ? 'invisible' : ''}`}>
            <button
              onClick={() => switchTab('login')}
              disabled={authModalTab === 'reset'}
              className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all ${
                authModalTab === 'login'
                  ? 'bg-white text-orange-600 shadow-sm'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => switchTab('signup')}
              disabled={authModalTab === 'reset'}
              className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all ${
                authModalTab === 'signup'
                  ? 'bg-white text-orange-600 shadow-sm'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              Create Account
            </button>
          </div>
        </div>

        {/* Content panels — fixed height, no scroll, opacity fade transitions */}
        <div style={{ height: '420px', position: 'relative', overflow: 'hidden' }}>

          {/* LOGIN PANEL */}
          <div className={`absolute inset-0 px-8 pb-8 transition-opacity duration-200 ${authModalTab === 'login' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Email</label>
                <div className="relative">
                  <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <input
                    type="email"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-400 transition-colors"
                    placeholder="you@example.com"
                    autoComplete="email"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Password</label>
                <div className="relative">
                  <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    className="w-full pl-10 pr-12 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-400 transition-colors"
                    placeholder="Enter your password"
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    {showPassword ? (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => switchTab('reset')}
                  className="text-xs text-orange-500 hover:text-orange-600 font-medium"
                >
                  Forgot password?
                </button>
              </div>

              {loginError && (
                <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-100 rounded-xl">
                  <svg className="w-4 h-4 text-red-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <p className="text-xs text-red-600">{loginError}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={loginLoading}
                className="w-full py-3.5 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold rounded-xl shadow-lg shadow-orange-200 transition-all hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {loginLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Signing in...
                  </span>
                ) : (
                  'Sign In'
                )}
              </button>
            </form>
          </div>

          {/* SIGNUP PANEL */}
          <div className={`absolute inset-0 px-8 pb-8 transition-opacity duration-200 ${authModalTab === 'signup' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            {!signupSuccess ? (
            <form onSubmit={handleSignup} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name *</label>
                <div className="relative">
                  <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <input
                    type="text"
                    value={signupName}
                    onChange={(e) => setSignupName(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-400 transition-colors"
                    placeholder="Your full name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Email *</label>
                <div className="relative">
                  <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <input
                    type="email"
                    value={signupEmail}
                    onChange={(e) => setSignupEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-400 transition-colors"
                    placeholder="you@example.com"
                    autoComplete="email"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Password *</label>
                <div className="relative">
                  <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <input
                    type="password"
                    value={signupPassword}
                    onChange={(e) => setSignupPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-400 transition-colors"
                    placeholder="Min. 6 characters"
                    autoComplete="new-password"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Confirm Password *</label>
                <div className="relative">
                  <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <input
                    type="password"
                    value={signupConfirm}
                    onChange={(e) => setSignupConfirm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-400 transition-colors"
                    placeholder="Re-enter your password"
                    autoComplete="new-password"
                  />
                </div>
              </div>

              {signupError && (
                <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-100 rounded-xl">
                  <svg className="w-4 h-4 text-red-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <p className="text-xs text-red-600">{signupError}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={signupLoading}
                className="w-full py-3.5 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold rounded-xl shadow-lg shadow-orange-200 transition-all hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {signupLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Creating account...
                  </span>
                ) : (
                  'Create Account'
                )}
              </button>

              <p className="text-xs text-center text-slate-400">
                By creating an account, you agree to our Terms of Service and Privacy Policy.
              </p>
            </form>
            ) : (
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Check Your Email</h3>
              <p className="text-sm text-slate-500 mb-6">
                We've sent a confirmation link to <strong>{signupEmail}</strong>. Please click the link to verify your account and start using buseka.
              </p>
              <button
                onClick={() => switchTab('login')}
                className="text-sm text-orange-500 hover:text-orange-600 font-semibold"
              >
                Back to Sign In
              </button>
            </div>
            )}
          </div>

          {/* RESET PANEL */}
          <div className={`absolute inset-0 px-8 pb-8 transition-opacity duration-200 ${authModalTab === 'reset' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            {!resetSuccess ? (
            <div>
              <button
                onClick={() => switchTab('login')}
                className="flex items-center gap-1 text-sm text-slate-500 hover:text-slate-700 mb-4"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                Back to Sign In
              </button>

              <h3 className="text-lg font-bold text-slate-800 mb-1">Reset Password</h3>
              <p className="text-sm text-slate-500 mb-6">
                Enter the email address associated with your account and we'll send you a link to reset your password.
              </p>

              <form onSubmit={handleReset} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Email</label>
                  <div className="relative">
                    <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <input
                      type="email"
                      value={resetEmail}
                      onChange={(e) => setResetEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-400 transition-colors"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                {resetError && (
                  <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-100 rounded-xl">
                    <svg className="w-4 h-4 text-red-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <p className="text-xs text-red-600">{resetError}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={resetLoading}
                  className="w-full py-3.5 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold rounded-xl shadow-lg shadow-orange-200 transition-all hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {resetLoading ? 'Sending...' : 'Send Reset Link'}
                </button>
              </form>
            </div>
            ) : (
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Check Your Email</h3>
              <p className="text-sm text-slate-500 mb-6">
                If an account exists for <strong>{resetEmail}</strong>, we've sent a password reset link. Please check your inbox.
              </p>
              <button
                onClick={() => switchTab('login')}
                className="text-sm text-orange-500 hover:text-orange-600 font-semibold"
              >
                Back to Sign In
              </button>
            </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default AuthModal;
