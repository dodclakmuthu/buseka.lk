import React, { useState, useEffect, useRef } from 'react';

const FLEET_IMG = 'https://d64gsuwffb70l.cloudfront.net/69d3f2d50bb6bbc8fdb7c970_1775498190569_a70dde09.png';

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  icon: React.ReactNode;
}

const stats: StatItem[] = [
  {
    value: 150,
    suffix: '+',
    label: 'Buses Registered',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h8m-8 4h8m-4 4h4M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" />
      </svg>
    ),
  },
  {
    value: 45,
    suffix: '+',
    label: 'Companies',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    value: 200,
    suffix: '+',
    label: 'Active Users',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    value: 12500,
    suffix: '+',
    label: 'Trips Recorded',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
  {
    value: 25,
    suffix: 'M+',
    label: 'Settlements (Rs.)',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

function useCountUp(target: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration, start]);

  return count;
}

const StatCard: React.FC<{ stat: StatItem; index: number; isVisible: boolean }> = ({ stat, index, isVisible }) => {
  const count = useCountUp(stat.value, 2000, isVisible);

  return (
    <div
      className="text-center group"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="w-16 h-16 mx-auto bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white/80 mb-4 group-hover:bg-white/20 group-hover:scale-110 transition-all">
        {stat.icon}
      </div>
      <p className="text-4xl lg:text-5xl font-extrabold text-white mb-1">
        {stat.value >= 10000 ? `${(count / 1000).toFixed(count >= stat.value ? 1 : 0)}K` : count.toLocaleString()}
        <span className="text-orange-300">{stat.suffix}</span>
      </p>
      <p className="text-white/60 text-sm font-medium">{stat.label}</p>
    </div>
  );
};

const StatsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats" ref={sectionRef} className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      <div className="absolute inset-0 opacity-10">
        <img src={FLEET_IMG} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/80" />
      
      {/* Decorative */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/10 rounded-full mb-4">
            <svg className="w-4 h-4 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <span className="text-orange-300 text-sm font-medium">Growing Every Day</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Trusted by Bus Owners
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              Across Sri Lanka
            </span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Our platform is growing rapidly as more bus owners discover the power of digital operations management.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
