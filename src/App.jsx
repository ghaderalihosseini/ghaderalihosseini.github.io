import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import MobileBottomNav from './components/MobileBottomNav';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import EscalatorEngineering from './components/EscalatorEngineering';
import ElevatorEngineering from './components/ElevatorEngineering';
import TechnicalBlog from './components/TechnicalBlog';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'escalator', 'elevator', 'blog', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-white">
      {/* Top Glassmorphic Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Area with Semantic Hierarchy */}
      <main className="flex-1">
        <Hero />
        <AboutSection />
        <EscalatorEngineering />
        <ElevatorEngineering />
        <TechnicalBlog />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* App-like Mobile Bottom Navigation Bar */}
      <MobileBottomNav activeSection={activeSection} />
    </div>
  );
}
