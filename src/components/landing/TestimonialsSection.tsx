import React from 'react';

const principles = [
  {
    title: 'Built with Local Operations in Mind',
    description: 'Designed around Sri Lankan private bus workflows, including daily trips, crew assignments, route activity, and owner visibility.',
    color: 'bg-blue-500',
    initials: 'LK',
  },
  {
    title: 'Focused on Daily Clarity',
    description: 'Helps owners replace scattered paper notes with structured records for income, expenses, settlements, and fleet activity.',
    color: 'bg-green-500',
    initials: 'DC',
  },
  {
    title: 'Ready for Early Bus Owners',
    description: 'Buseka is prepared for early adopters who want to modernize operations and help shape the platform as it grows.',
    color: 'bg-orange-500',
    initials: 'EA',
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-100 rounded-full mb-4">
            <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-4 4-4-4z" />
            </svg>
            <span className="text-amber-600 text-sm font-medium">Early Access</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-800 mb-4">
            Built for the First
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Digital Bus Operators</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            We are not showing testimonials until they come from real Buseka users. For now, this is what the platform is built to deliver.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {principles.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-6 border border-slate-100 hover:border-orange-100 hover:shadow-xl hover:shadow-orange-50 transition-all duration-300"
            >
              <div className={`w-11 h-11 ${item.color} rounded-full flex items-center justify-center text-white text-sm font-bold mb-5`}>
                {item.initials}
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-3">{item.title}</h3>
              <p className="text-sm leading-relaxed text-slate-500">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-orange-100 bg-orange-50/70 p-6 text-center">
          <p className="text-sm font-semibold text-orange-700">
            Be among the first bus owners to modernize daily operations with Buseka.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
