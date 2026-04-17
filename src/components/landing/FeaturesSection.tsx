import React from 'react';

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h8m-8 4h8m-4 4h4M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" />
      </svg>
    ),
    title: 'Bus Registration',
    description: 'Register and manage your entire fleet digitally. Track permits, maintenance schedules, and vehicle details in one place.',
    color: 'from-blue-500 to-indigo-500',
    bgLight: 'bg-blue-50',
    textColor: 'text-blue-600',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Trip Income Tracking',
    description: 'Record income from every trip in real-time. See exactly how much each bus earns per trip, per day, per month.',
    color: 'from-green-500 to-emerald-500',
    bgLight: 'bg-green-50',
    textColor: 'text-green-600',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Expense Management',
    description: 'Track fuel, repairs, tolls, and all operational costs. Categorize expenses for clear financial visibility.',
    color: 'from-red-500 to-rose-500',
    bgLight: 'bg-red-50',
    textColor: 'text-red-600',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
    ),
    title: 'Extra Income Tracking',
    description: 'Capture additional revenue streams like parcel delivery, charter trips, and advertising income separately.',
    color: 'from-purple-500 to-violet-500',
    bgLight: 'bg-purple-50',
    textColor: 'text-purple-600',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Salary Calculation',
    description: 'Automated salary computation based on trips, performance, and custom rules. No more manual calculations.',
    color: 'from-amber-500 to-orange-500',
    bgLight: 'bg-amber-50',
    textColor: 'text-amber-600',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    title: 'Daily Settlements',
    description: 'End-of-day settlement reports generated automatically. Reconcile income, expenses, and balances effortlessly.',
    color: 'from-teal-500 to-cyan-500',
    bgLight: 'bg-teal-50',
    textColor: 'text-teal-600',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Historical Reporting',
    description: 'Access months and years of business data. Analyze trends, compare periods, and make data-driven decisions.',
    color: 'from-indigo-500 to-blue-500',
    bgLight: 'bg-indigo-50',
    textColor: 'text-indigo-600',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: 'Secure Access',
    description: 'Role-based access ensures only authorized owner and company users can view their business data. Your data stays private.',
    color: 'from-slate-600 to-slate-800',
    bgLight: 'bg-slate-50',
    textColor: 'text-slate-600',
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 border border-orange-100 rounded-full mb-4">
            <svg className="w-4 h-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-orange-600 text-sm font-medium">Key Features</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-800 mb-4">
            Everything You Need to
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Run Your Fleet</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            From trip recording to salary calculations, buseka covers every aspect of your private bus business operations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl p-6 border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300 cursor-default relative overflow-hidden"
            >
              {/* Gradient accent on hover */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
              
              <div className={`w-12 h-12 ${feature.bgLight} rounded-xl flex items-center justify-center ${feature.textColor} mb-4 group-hover:scale-110 transition-transform`}>
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
