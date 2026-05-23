import React, { useEffect, useMemo, useRef, useState } from 'react';
import { apiRequest } from '@/lib/api';

const FLEET_IMG = 'https://d64gsuwffb70l.cloudfront.net/69d3f2d50bb6bbc8fdb7c970_1775498190569_a70dde09.png';

type LandingStats = {
  busesRegistered?: number;
  companies?: number;
  activeUsers?: number;
  tripsRecorded?: number;
  totalIncome?: number;
  totalRevenue?: number;
};

type StatItem = {
  key: keyof LandingStats;
  value: number;
  label: string;
  icon: React.ReactNode;
};

type ValueCard = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const emptyStats: Required<Pick<LandingStats, 'busesRegistered' | 'companies' | 'activeUsers' | 'tripsRecorded' | 'totalIncome'>> = {
  busesRegistered: 0,
  companies: 0,
  activeUsers: 0,
  tripsRecorded: 0,
  totalIncome: 0,
};

const icons = {
  bus: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h8m-8 4h8m-4 4h4M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" />
    </svg>
  ),
  company: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  users: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  trips: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
    </svg>
  ),
  money: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  check: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.62-4.02A11.96 11.96 0 0112 2.94a11.96 11.96 0 01-8.62 3.04A12.02 12.02 0 003 9c0 5.59 3.82 10.29 9 11.62 5.18-1.33 9-6.03 9-11.62 0-1.04-.13-2.05-.38-3.02z" />
    </svg>
  ),
  salary: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
};

const valueCards: ValueCard[] = [
  {
    title: 'Built for Bus Owners',
    description: 'Manage private bus operations with workflows shaped for Sri Lankan daily routines.',
    icon: icons.bus,
  },
  {
    title: 'Daily Trip Tracking',
    description: 'Record trips, routes, crew activity, and daily progress in one place.',
    icon: icons.trips,
  },
  {
    title: 'Income & Expense Management',
    description: 'Track collections, diesel, maintenance, and other operational costs clearly.',
    icon: icons.money,
  },
  {
    title: 'Crew Salary Support',
    description: 'Support percentage and fixed wage models for drivers and conductors.',
    icon: icons.salary,
  },
  {
    title: 'Owner Dashboard',
    description: 'Give owners a clean view of fleet activity, settlements, and business performance.',
    icon: icons.check,
  },
];

function normalizeNumber(value: unknown): number {
  const numeric = Number(value);
  return Number.isFinite(numeric) && numeric > 0 ? numeric : 0;
}

function normalizeStats(stats?: LandingStats | null) {
  if (!stats) return emptyStats;

  return {
    busesRegistered: normalizeNumber(stats.busesRegistered),
    companies: normalizeNumber(stats.companies),
    activeUsers: normalizeNumber(stats.activeUsers),
    tripsRecorded: normalizeNumber(stats.tripsRecorded),
    totalIncome: normalizeNumber(stats.totalIncome ?? stats.totalRevenue),
  };
}

function hasRealStats(stats: ReturnType<typeof normalizeStats>): boolean {
  return Object.values(stats).some((value) => value > 0);
}

function formatMetric(value: number): string {
  if (value < 1000) return Math.round(value).toLocaleString();

  const units = [
    { threshold: 1_000_000_000, suffix: 'B' },
    { threshold: 1_000_000, suffix: 'M' },
    { threshold: 1_000, suffix: 'K' },
  ];

  const unit = units.find((candidate) => value >= candidate.threshold)!;
  const compact = value / unit.threshold;
  const formatted = compact >= 10 || Number.isInteger(compact)
    ? Math.floor(compact).toLocaleString()
    : compact.toFixed(1);

  return `${formatted}${unit.suffix}+`;
}

function useCountUp(target: number, duration: number = 1600, start: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
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

async function fetchLandingStats(): Promise<LandingStats> {
  return apiRequest<LandingStats>('/landing/stats');
}

const StatCard: React.FC<{ stat: StatItem; index: number; isVisible: boolean }> = ({ stat, index, isVisible }) => {
  const count = useCountUp(stat.value, 1600, isVisible);

  return (
    <div className="text-center group" style={{ animationDelay: `${index * 100}ms` }}>
      <div className="w-16 h-16 mx-auto bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white/80 mb-4 group-hover:bg-white/20 group-hover:scale-110 transition-all">
        {stat.icon}
      </div>
      <p className="text-4xl lg:text-5xl font-extrabold text-white mb-1">{formatMetric(isVisible ? count : 0)}</p>
      <p className="text-white/60 text-sm font-medium">{stat.label}</p>
    </div>
  );
};

const ValueCard: React.FC<{ card: ValueCard; index: number }> = ({ card, index }) => (
  <div
    className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-sm transition-all hover:bg-white/15"
    style={{ animationDelay: `${index * 100}ms` }}
  >
    <div className="w-12 h-12 bg-orange-400/15 rounded-xl flex items-center justify-center text-orange-300 mb-4">
      {card.icon}
    </div>
    <h3 className="text-base font-bold text-white mb-2">{card.title}</h3>
    <p className="text-sm leading-relaxed text-white/55">{card.description}</p>
  </div>
);

const LoadingCard: React.FC = () => (
  <div className="text-center">
    <div className="w-16 h-16 mx-auto bg-white/10 rounded-2xl mb-4 animate-pulse" />
    <div className="h-10 w-24 mx-auto bg-white/10 rounded-lg mb-3 animate-pulse" />
    <div className="h-4 w-28 mx-auto bg-white/10 rounded animate-pulse" />
  </div>
);

const StatsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [stats, setStats] = useState<LandingStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let active = true;

    fetchLandingStats()
      .then((data) => {
        if (!active) return;
        setStats(data);
        setHasError(false);
      })
      .catch(() => {
        if (!active) return;
        setStats(null);
        setHasError(true);
      })
      .finally(() => {
        if (active) setIsLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const normalizedStats = useMemo(() => normalizeStats(stats), [stats]);
  const showRealStats = !isLoading && !hasError && hasRealStats(normalizedStats);

  const statItems: StatItem[] = useMemo(() => ([
    { key: 'busesRegistered', value: normalizedStats.busesRegistered, label: 'Buses Registered', icon: icons.bus },
    { key: 'companies', value: normalizedStats.companies, label: 'Companies', icon: icons.company },
    { key: 'activeUsers', value: normalizedStats.activeUsers, label: 'Active Users', icon: icons.users },
    { key: 'tripsRecorded', value: normalizedStats.tripsRecorded, label: 'Trips Recorded', icon: icons.trips },
    { key: 'totalIncome', value: normalizedStats.totalIncome, label: 'Total Income', icon: icons.money },
  ]).filter((item) => item.value > 0), [normalizedStats]);

  const title = showRealStats ? 'Trusted by Bus Owners' : 'Built for Bus Owners';
  const highlightedTitle = 'Across Sri Lanka';
  const description = showRealStats
    ? 'Our platform is growing as more bus owners use Buseka to manage daily operations digitally.'
    : 'Buseka is designed to help Sri Lankan bus owners manage trips, income, expenses, crew, and settlements through a simple digital platform.';
  const badge = isLoading
    ? 'Loading Platform Activity'
    : showRealStats
      ? 'Growing Every Day'
      : 'Start Your Digital Journey';

  return (
    <section id="stats" ref={sectionRef} className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      <div className="absolute inset-0 opacity-10">
        <img src={FLEET_IMG} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/80" />
      <div className="absolute top-10 left-10 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/10 rounded-full mb-4">
            <svg className="w-4 h-4 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <span className="text-orange-300 text-sm font-medium">{badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            {title}
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              {highlightedTitle}
            </span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">{description}</p>
          {!showRealStats && !isLoading && (
            <p className="mt-4 text-sm font-medium text-orange-200">
              Join us to grow Sri Lanka's digital bus network.
            </p>
          )}
        </div>

        {isLoading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12" aria-label="Loading platform statistics">
            {Array.from({ length: 5 }).map((_, index) => (
              <LoadingCard key={index} />
            ))}
          </div>
        ) : showRealStats ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
            {statItems.map((stat, i) => (
              <StatCard key={stat.key} stat={stat} index={i} isVisible={isVisible} />
            ))}
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
            {valueCards.map((card, index) => (
              <ValueCard key={card.title} card={card} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default StatsSection;
