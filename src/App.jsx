import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Specialties } from './components/Specialties';
import { BlogSection } from './components/BlogSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileBottomNav } from './components/MobileBottomNav';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'specialties', 'blog', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (id) => {
    setActiveSection(id);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#050507] text-[#f8fafc] font-['Shabnam'] relative selection:bg-cyan-500/20 selection:text-cyan-200">
      {/* Ambient background decoration */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-cyan-900/10 blur-[140px] rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-[450px] h-[450px] bg-sky-950/15 blur-[130px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/3 w-[600px] h-[600px] bg-blue-950/10 blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Specialties />
          <BlogSection />
          <ContactSection />
        </main>
        <Footer />
        <MobileBottomNav activeSection={activeSection} onNavigate={handleNavigate} />
      </div>
    </div>
  );
}
