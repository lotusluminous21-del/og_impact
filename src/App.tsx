import { Navigation } from './components/ui/Navigation';
import { HeroSection } from './components/sections/HeroSection';
import { WhyUsSection } from './components/sections/WhyUsSection';
import { MissionSection } from './components/sections/MissionSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { StatsSection } from './components/sections/StatsSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { TeamSection } from './components/sections/TeamSection';
// import { PricingSection } from './components/sections/PricingSection';
// import { FAQSection } from './components/sections/FAQSection';
import { CTASection } from './components/sections/CTASection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/ui/Footer';
import { useUIStore } from './store/uiStore';
import { useScrollManager } from './hooks/useScrollManager';
import { useEffect, memo } from 'react';
import { logThemeInfo } from './utils/themeUtils';

const App = memo(() => {
  const { isDarkMode } = useUIStore();

  // Initialize scroll manager
  useScrollManager();

  // Apply dark mode class to document on mount and when theme changes
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Ensure theme is synchronized on mount
  useEffect(() => {
    // Check if the HTML script has already set the theme
    const hasDarkClass = document.documentElement.classList.contains('dark');
    const savedTheme = localStorage.getItem('theme');

    // If there's a mismatch, sync it
    if (savedTheme === 'dark' && !hasDarkClass) {
      document.documentElement.classList.add('dark');
    } else if (savedTheme === 'light' && hasDarkClass) {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Debug theme information in development
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      logThemeInfo();
    }
  }, [isDarkMode]);

  return (
    <div className="App bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
      <Navigation />
      <HeroSection />
      <WhyUsSection />
      <MissionSection />
      <ServicesSection />
      <StatsSection />
      <TestimonialsSection />
      <TeamSection />
      {/* <PricingSection /> */}
      {/* <FAQSection /> */}
      <CTASection />
      <ContactSection />
      <Footer />
    </div>
  );
});

export default App;
