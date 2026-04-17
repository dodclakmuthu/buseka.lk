import React from 'react';
import Navbar from './landing/Navbar';
import HeroSection from './landing/HeroSection';
import ProblemsSection from './landing/ProblemsSection';
import SolutionSection from './landing/SolutionSection';
import FeaturesSection from './landing/FeaturesSection';
import HowItWorksSection from './landing/HowItWorksSection';
import MissionSection from './landing/MissionSection';
import StatsSection from './landing/StatsSection';
import TestimonialsSection from './landing/TestimonialsSection';
import FAQSection from './landing/FAQSection';
import ContactSection from './landing/ContactSection';
import CTASection from './landing/CTASection';
import Footer from './landing/Footer';

const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ProblemsSection />
      <SolutionSection />
      <FeaturesSection />
      <HowItWorksSection />
      <MissionSection />
      <StatsSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default AppLayout;
