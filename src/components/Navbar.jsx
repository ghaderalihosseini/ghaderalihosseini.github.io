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
    <header className="fixed top-3 sm:top-5 inset-x-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none w-full">
      <nav
        className={`pointer-events-auto flex items-center justify-center gap-1 sm:gap-2 px-3 sm:px-5 py-1.5 sm:py-2 rounded-full border transition-all duration-300 max-w-2xl min-w-0 shadow-2xl ${
          scrolled
            ? 'bg-[#000000]/90 backdrop-blur-2xl border-white/[0.18] shadow-[0_16px_36px_rgba(0,0,0,0.9),inset_0_1px_0_rgba(255,255,255,0.25)]'
            : 'bg-white/[0.06] backdrop-blur-xl border-white/[0.12] shadow-[0_8px_24px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.18)]'
        }`}
      >
        {/* Desktop Menu Links */}
        <div className="flex items-center gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`relative px-3 sm:px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 flex items-center gap-1.5 focus:outline-none cursor-pointer ${
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
        </div>
      </nav>
    </header>
  );
};
