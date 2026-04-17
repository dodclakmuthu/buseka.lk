import React, { useState } from 'react';

const faqs = [
  {
    question: 'How much does buseka cost?',
    answer: 'buseka offers flexible pricing plans based on the number of buses in your fleet. We have a free trial period so you can experience the platform before committing. Contact us for detailed pricing.',
  },
  {
    question: 'Is my business data secure?',
    answer: 'Absolutely. We use industry-standard encryption and secure cloud infrastructure. Only authorized users with proper credentials can access your business data. We never share your data with third parties.',
  },
  {
    question: 'Can my staff use the app without internet?',
    answer: 'Yes! The Duty App works offline. All data is stored locally on the device and automatically syncs to the cloud when an internet connection becomes available.',
  },
  {
    question: 'How long does it take to set up?',
    answer: 'Most bus owners are up and running within 30 minutes. Simply register your account, add your buses and staff, and your team can start recording trips immediately. We provide full onboarding support.',
  },
  {
    question: 'Do I need to be tech-savvy to use buseka?',
    answer: 'Not at all. buseka is designed specifically for the Sri Lankan bus industry. The Duty App has a simple, intuitive interface that even non-tech-savvy staff can learn in minutes. The Admin Dashboard is equally straightforward.',
  },
  {
    question: 'Can I manage multiple buses and routes?',
    answer: 'Yes! buseka supports unlimited buses and routes. Whether you own 1 bus or 100, the platform scales with your business. You can view individual bus performance or aggregate fleet data.',
  },
  {
    question: 'What kind of reports can I generate?',
    answer: 'buseka provides daily settlement reports, income/expense summaries, trip history, salary calculations, route performance analysis, and more. All reports can be filtered by date, bus, driver, or route.',
  },
  {
    question: 'Is there customer support available?',
    answer: 'Yes! We offer support via phone, WhatsApp, and email. Our team understands the Sri Lankan bus industry and can help you get the most out of the platform. Support is available in Sinhala, Tamil, and English.',
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 border border-slate-200 rounded-full mb-4">
            <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-slate-600 text-sm font-medium">FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-800 mb-4">
            Frequently Asked
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Everything you need to know about buseka. Can't find the answer? Contact us directly.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`bg-white rounded-xl border transition-all duration-300 ${
                openIndex === i ? 'border-orange-200 shadow-lg shadow-orange-50' : 'border-slate-100 hover:border-slate-200'
              }`}
            >
              <button
                onClick={() => toggleFAQ(i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className={`font-semibold transition-colors ${openIndex === i ? 'text-orange-600' : 'text-slate-800'}`}>
                  {faq.question}
                </span>
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ml-4 transition-all ${
                  openIndex === i ? 'bg-orange-100 text-orange-600 rotate-180' : 'bg-slate-100 text-slate-400'
                }`}>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5 animate-fade-in">
                  <p className="text-slate-500 leading-relaxed text-sm">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
