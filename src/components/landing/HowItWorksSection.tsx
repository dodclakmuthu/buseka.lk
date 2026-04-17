import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Register Your Fleet',
    description: 'Add your buses, drivers, and conductors to the platform. Set up routes, schedules, and operational rules.',
    icon: (
      <svg className="w-7 h-7 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
      </svg>
    ),
    bgLight: 'bg-blue-50',
  },
  {
    number: '02',
    title: 'Staff Records Daily',
    description: 'Drivers and conductors use the Duty App to record trips, income, and expenses throughout the day — quick and simple.',
    icon: (
      <svg className="w-7 h-7 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    bgLight: 'bg-green-50',
  },
  {
    number: '03',
    title: 'Data Syncs Automatically',
    description: 'All recorded data syncs to the cloud in real-time. Even works offline and syncs when connection is available.',
    icon: (
      <svg className="w-7 h-7 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
    ),
    bgLight: 'bg-purple-50',
  },
  {
    number: '04',
    title: 'Owner Gets Full Visibility',
    description: 'Access the Admin Dashboard to view reports, track performance, calculate salaries, and make informed business decisions.',
    icon: (
      <svg className="w-7 h-7 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    bgLight: 'bg-orange-50',
  },
];

const HowItWorksSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 border border-purple-100 rounded-full mb-4">
            <svg className="w-4 h-4 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-purple-600 text-sm font-medium">How It Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-800 mb-4">
            Simple Steps to
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Digital Operations</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Getting started with buseka is easy. Follow these four simple steps and transform how you manage your bus business.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative group">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-slate-200 to-transparent z-0" />
              )}
              
              <div className="relative bg-white rounded-2xl p-6 border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300">
                {/* Step number */}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-slate-800 text-white rounded-full flex items-center justify-center text-xs font-bold">
                  {step.number}
                </div>
                
                <div className={`w-14 h-14 ${step.bgLight} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  {step.icon}
                </div>
                
                <h3 className="text-lg font-bold text-slate-800 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
