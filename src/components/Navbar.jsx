import React, { useState, useEffect } from 'react';
import { Home, ArrowUp, ChevronsUp, Zap, BookOpen, Mail } from 'lucide-react';

export const Navbar = ({ activeSection, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'خانه', icon: Home },
    { id: 'elevators', label: 'آسانسور', icon: ArrowUp },
    { id: 'escalators', label: 'پله‌برقی', icon: ChevronsUp },
    { id: 'electrical', label: 'برق صنعتی', icon: Zap },
    { id: 'blog', label: 'یادداشت‌ها', icon: BookOpen },
    { id: 'contact', label: 'ارتباط', icon: Mail }
  ];

  return (
    <header className="fixed top-3 sm:top-5 inset-x-0 z-40 flex justify-center px-3 sm:px-6 pointer-events-none w-full">
      
      {/* Desktop Menu Capsule (> 768px) */}
      <nav
        className={`hidden md:flex pointer-events-auto items-center justify-center gap-1.5 px-4 py-2 rounded-full border transition-all duration-300 shadow-2xl ${
          scrolled
            ? 'bg-[#000000]/90 backdrop-blur-2xl border-white/[0.18] shadow-[0_16px_36px_rgba(0,0,0,0.9),inset_0_1px_0_rgba(255,255,255,0.25)]'
            : 'bg-white/[0.06] backdrop-blur-xl border-white/[0.12] shadow-[0_8px_24px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.18)]'
        }`}
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`relative px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 flex items-center gap-1.5 focus:outline-none cursor-pointer ${
                isActive
                  ? 'text-white bg-white/[0.16] shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_2px_8px_rgba(0,0,0,0.4)] border border-white/20'
                  : 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-slate-400'}`} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Mobile Top Minimal Status Pill (<= 768px) */}
      <div className="md:hidden pointer-events-auto flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-xl border border-white/15 shadow-[0_8px_24px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.2)]">
        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
        <span className="text-[11px] font-medium text-slate-200">
          قادر علی حسینی شام اسبی
        </span>
        <span className="text-slate-500 text-[10px]">|</span>
        <span className="text-[10px] text-slate-400">مهندسی برق و بالابر</span>
      </div>

    </header>
  );
};
