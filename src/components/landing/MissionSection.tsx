import React from 'react';

const BUS_IMG = 'https://d64gsuwffb70l.cloudfront.net/69d3f2d50bb6bbc8fdb7c970_1775498163972_f84334bd.jpg';

const missionPoints = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Modernize the Industry',
    description: 'Transform Sri Lanka\'s private bus sector from paper-based operations to smart digital systems.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Data-Driven Decisions',
    description: 'Help owners make better business decisions with clear visibility into performance, trends, and opportunities.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    title: 'Complete Transparency',
    description: 'Improve visibility, accountability, and trust between owners, drivers, and conductors.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: 'Boost Profitability',
    description: 'Identify cost savings, optimize routes, and maximize revenue with actionable business insights.',
  },
];

const MissionSection: React.FC = () => {
  return (
    <section id="mission" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-slate-900" />
            </pattern>
          </defs>
          <rect width="200" height="200" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={BUS_IMG}
                alt="Sri Lankan private bus on scenic road"
                className="w-full h-auto"
              />
            </div>
            {/* Overlay card */}
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl p-6 text-white shadow-xl shadow-orange-200 max-w-[220px]">
              <p className="text-3xl font-extrabold mb-1">2026</p>
              <p className="text-sm opacity-90">Digitizing Sri Lanka's bus industry, one fleet at a time</p>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-100 rounded-full mb-4">
              <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              <span className="text-amber-600 text-sm font-medium">Our Mission</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 mb-6 leading-tight">
              Empowering Sri Lanka's
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                Bus Industry
              </span>
            </h2>

            <p className="text-lg text-slate-500 mb-8 leading-relaxed">
              We believe every bus owner deserves the tools to understand and grow their business. Our mission is to replace outdated paper-based tracking with smart digital solutions that bring clarity, efficiency, and profitability to Sri Lanka's private bus operations.
            </p>

            <div className="space-y-6">
              {missionPoints.map((point, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100 rounded-xl flex items-center justify-center text-orange-500 flex-shrink-0">
                    {point.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-800 mb-1">{point.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
