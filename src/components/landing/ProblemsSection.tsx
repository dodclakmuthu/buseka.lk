import React from 'react';

const PAPER_CHAOS_IMG = 'https://d64gsuwffb70l.cloudfront.net/69d3f2d50bb6bbc8fdb7c970_1775498117761_6cde1292.png';

const problems = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'Paper-Based Tracking',
    description: 'Most owners still track income and expenses in notebooks, leaflets, or loose papers — prone to errors and loss.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'No Business Insights',
    description: 'Paper records don\'t reveal trends, patterns, or actionable insights about your bus business performance.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Salary Calculation Headaches',
    description: 'Calculating daily performance and salaries manually is time-consuming and often inaccurate.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    title: 'Data Loss Risk',
    description: 'Physical records can be damaged, lost, or destroyed — taking years of business data with them.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
      </svg>
    ),
    title: 'Zero Visibility',
    description: 'Owners can\'t see a clear picture of profit, expenses, or areas for improvement across their fleet.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Wasted Time',
    description: 'Hours spent manually reconciling records, chasing down information, and resolving discrepancies every day.',
  },
];

const ProblemsSection: React.FC = () => {
  return (
    <section id="problems" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-100 rounded-full mb-4">
            <svg className="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <span className="text-red-600 text-sm font-medium">The Problem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-800 mb-4">
            Still Running Your Bus Business
            <br />
            <span className="text-red-500">on Paper?</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            The Sri Lankan private bus industry faces critical challenges that cost owners money, time, and peace of mind every single day.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={PAPER_CHAOS_IMG}
                alt="Paper-based bus record keeping chaos"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-red-500 text-white rounded-xl px-5 py-3 shadow-lg">
              <p className="text-sm font-bold">90% of bus owners</p>
              <p className="text-xs opacity-80">still use paper records</p>
            </div>
          </div>

          {/* Problems Grid */}
          <div className="order-1 lg:order-2 grid sm:grid-cols-2 gap-4">
            {problems.map((problem, i) => (
              <div
                key={i}
                className="group bg-white rounded-xl p-5 border border-slate-100 hover:border-red-200 hover:shadow-lg hover:shadow-red-50 transition-all duration-300 cursor-default"
              >
                <div className="w-11 h-11 bg-red-50 group-hover:bg-red-100 rounded-xl flex items-center justify-center text-red-500 mb-3 transition-colors">
                  {problem.icon}
                </div>
                <h3 className="text-base font-bold text-slate-800 mb-1.5">{problem.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
