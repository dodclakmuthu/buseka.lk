import React, { useState } from 'react';

const DASHBOARD_IMG = 'https://d64gsuwffb70l.cloudfront.net/6864ba71699483ceb125ae36_1775497842510_b66af125.png';
const MOBILE_IMG = 'https://d64gsuwffb70l.cloudfront.net/6864ba71699483ceb125ae36_1775497912978_fef5b37f.png';
const DIGITAL_IMG = 'https://d64gsuwffb70l.cloudfront.net/69d3f2d50bb6bbc8fdb7c970_1775498137678_9e3a693d.jpg';

const SolutionSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'duty' | 'dashboard'>('duty');

  return (
    <section id="solution" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-100 rounded-full mb-4">
            <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-green-600 text-sm font-medium">Our Solution</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-800 mb-4">
            One Platform,
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Complete Control</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            buseka gives you two powerful tools that work together to digitize your entire bus operation — from the road to the boardroom.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-100 rounded-2xl p-1.5 inline-flex gap-1">
            <button
              onClick={() => setActiveTab('duty')}
              className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'duty'
                  ? 'bg-white text-orange-600 shadow-md'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Duty App
              </span>
            </button>
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'dashboard'
                  ? 'bg-white text-orange-600 shadow-md'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7" />
                </svg>
                Admin Dashboard
              </span>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Description */}
          <div>
            {activeTab === 'duty' ? (
              <div className="animate-fade-in">
                <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-green-200">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-4">
                  Duty App for Bus Staff
                </h3>
                <p className="text-slate-500 mb-6 leading-relaxed">
                  A simple, intuitive mobile app designed for drivers and conductors to record their daily operations in real-time — no more paper, no more guesswork.
                </p>
                <ul className="space-y-4">
                  {[
                    'Record trip income instantly after each trip',
                    'Log fuel, repairs, and other expenses on the go',
                    'Track extra income sources easily',
                    'View daily duty summary and settlement',
                    'Works offline — syncs when connected',
                    'Simple interface designed for field staff',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 mt-0.5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex gap-3">
                  {/* Google Play - Coming Soon */}
                  <div className="relative">
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-slate-200 text-slate-400 font-semibold rounded-xl cursor-default select-none">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 010 1.38l-2.302 2.302L15.396 12l2.302-3.492zM5.864 2.658L16.8 8.99l-2.302 2.302L5.864 2.658z" />
                      </svg>
                      Google Play
                    </div>
                    <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap uppercase tracking-wide">
                      Coming Soon
                    </span>
                  </div>
                  {/* App Store - Coming Soon */}
                  <div className="relative">
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-slate-200 text-slate-400 font-semibold rounded-xl cursor-default select-none">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                      </svg>
                      App Store
                    </div>
                    <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap uppercase tracking-wide">
                      Coming Soon
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="animate-fade-in">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-amber-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-orange-200">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7" />
                  </svg>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-4">
                  Admin Dashboard for Owners
                </h3>
                <p className="text-slate-500 mb-6 leading-relaxed">
                  A comprehensive web dashboard that gives bus owners and companies complete visibility into their business — reports, salary data, history, and performance at your fingertips.
                </p>
                <ul className="space-y-4">
                  {[
                    'Real-time fleet status and trip monitoring',
                    'Detailed income and expense reports',
                    'Automated salary calculations',
                    'Daily settlement and reconciliation',
                    'Historical data and trend analysis',
                    'Secure access — only authorized users see your data',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 mt-0.5 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); alert('Opening Admin Dashboard...'); }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold rounded-xl shadow-lg shadow-orange-200 transition-all"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Open Admin Dashboard
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Right - Screenshot */}
          <div className="relative">
            {activeTab === 'duty' ? (
              <div className="animate-fade-in flex justify-center">
                <div className="relative">
                  <div className="bg-slate-800 rounded-[2.5rem] p-3 shadow-2xl shadow-slate-900/30 border-2 border-slate-700 max-w-[280px]">
                    <div className="bg-white rounded-[2rem] overflow-hidden">
                      <img
                        src={MOBILE_IMG}
                        alt="buseka Duty App"
                        className="w-full"
                      />
                    </div>
                  </div>
                  {/* Floating elements */}
                  <div className="absolute -top-4 -right-8 bg-white rounded-xl shadow-xl p-3 border border-slate-100">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[10px] text-slate-400">Status</p>
                        <p className="text-xs font-bold text-green-600">Synced</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -left-8 bg-white rounded-xl shadow-xl p-3 border border-slate-100">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[10px] text-slate-400">Works</p>
                        <p className="text-xs font-bold text-blue-600">Offline</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="animate-fade-in">
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
                  <div className="bg-slate-100 px-4 py-2.5 flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                    <div className="flex-1 mx-4">
                      <div className="bg-white rounded-md px-3 py-1 text-xs text-slate-400 text-center">
                        dashboard.buseka.com
                      </div>
                    </div>
                  </div>
                  <img
                    src={DASHBOARD_IMG}
                    alt="buseka Admin Dashboard"
                    className="w-full"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
