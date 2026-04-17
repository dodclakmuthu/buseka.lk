import React, { useState } from 'react';

const testimonials = [
  {
    quote: "Before buseka, I was spending hours every evening going through paper records. Now I can see my entire fleet's performance in seconds from my phone.",
    name: 'Kamal Perera',
    role: 'Owner, 5 Buses — Colombo-Kandy Route',
    initials: 'KP',
    color: 'bg-blue-500',
  },
  {
    quote: "The salary calculation feature alone saved me so much time and arguments. Everything is transparent now — drivers and conductors trust the system.",
    name: 'Nimal Fernando',
    role: 'Owner, 3 Buses — Colombo-Galle Route',
    initials: 'NF',
    color: 'bg-green-500',
  },
  {
    quote: "I can finally see which routes are profitable and which ones need attention. buseka gave me the business insights I never had with paper records.",
    name: 'Suresh Rajapaksa',
    role: 'Managing Director, Lanka Express Pvt Ltd',
    initials: 'SR',
    color: 'bg-orange-500',
  },
  {
    quote: "My conductors found the Duty App very easy to use. Even those who aren't tech-savvy picked it up in one day. The interface is that simple.",
    name: 'Anura Bandara',
    role: 'Owner, 8 Buses — Colombo-Kurunegala Route',
    initials: 'AB',
    color: 'bg-purple-500',
  },
  {
    quote: "We lost 2 years of paper records in a flood. After switching to buseka, I know my data is safe in the cloud. Never going back to paper.",
    name: 'Ranjith Silva',
    role: 'Owner, 2 Buses — Colombo-Ratnapura Route',
    initials: 'RS',
    color: 'bg-red-500',
  },
  {
    quote: "The daily settlement report is a game-changer. I can reconcile everything before the day ends. No more surprises or missing money.",
    name: 'Dinesh Wickramasinghe',
    role: 'Owner, 4 Buses — Colombo-Negombo Route',
    initials: 'DW',
    color: 'bg-teal-500',
  },
];

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-100 rounded-full mb-4">
            <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span className="text-amber-600 text-sm font-medium">Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-800 mb-4">
            What Bus Owners
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Are Saying</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Real feedback from bus owners who have transformed their operations with buseka.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className={`bg-white rounded-2xl p-6 border transition-all duration-300 cursor-pointer ${
                activeIndex === i
                  ? 'border-orange-200 shadow-xl shadow-orange-50 scale-[1.02]'
                  : 'border-slate-100 hover:border-slate-200 hover:shadow-lg'
              }`}
              onClick={() => setActiveIndex(i)}
            >
              {/* Quote icon */}
              <svg className="w-8 h-8 text-orange-200 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
              </svg>
              
              <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 ${testimonial.color} rounded-full flex items-center justify-center text-white text-sm font-bold`}>
                  {testimonial.initials}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">{testimonial.name}</p>
                  <p className="text-xs text-slate-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
