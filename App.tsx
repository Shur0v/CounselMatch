
import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SearchArea } from './components/SearchArea';
import { HowItWorks } from './components/HowItWorks';
import { PostBrief } from './components/PostBrief';
import { Mission } from './components/Mission';
import { TrustSection } from './components/TrustSection';
import { QualitySystem } from './components/QualitySystem';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  // Simple intersection observer for basic scroll-reveal feel
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.add('translate-y-0');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
      el.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-1000');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen gradient-mesh">
      <Navbar />
      
      <main>
        <div className="reveal-on-scroll">
          <Hero />
        </div>
        
        <div className="reveal-on-scroll">
          <SearchArea />
        </div>
        
        <div className="reveal-on-scroll">
          <HowItWorks />
        </div>
        
        <div className="reveal-on-scroll">
          <PostBrief />
        </div>
        
        <div className="reveal-on-scroll">
          <Mission />
        </div>
        
        <div className="reveal-on-scroll">
          <TrustSection />
        </div>
        
        <div className="reveal-on-scroll">
          <QualitySystem />
        </div>
        
        <div className="reveal-on-scroll">
          <CTASection />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
