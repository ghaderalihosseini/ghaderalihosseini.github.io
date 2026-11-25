import React from 'react';
import { Zap, Phone, BookOpen, Layers, User } from 'lucide-react';

export const Navbar = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-40 px-4 pt-3 pointer-events-none">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo / Identity */}
        <a
          href="#hero"
          className="pointer-events-auto inline-flex items-center gap-3 px-4 py-2 rounded-2xl glass-panel border border-white/10 group hover:border-cyan-500/40 transition-all"
        >
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.4)]">
            <Zap className="w-4 h-4 fill-slate-950" />
          </div>
          <div className="text-right">
            <div className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">
              قادر علی حسینی شام اسبی
            </div>
            <div className="text-[10px] text-slate-400">مهندس برق | آسانسور و پله‌برقی</div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex pointer-events-auto items-center gap-1 px-3 py-1.5 rounded-full glass-panel border border-white/10 text-xs font-medium">
          <a href="#hero" className="px-3 py-1.5 rounded-full text-slate-300 hover:text-white hover:bg-white/5 transition-colors">
            خانه
          </a>
          <a href="#specialties" className="px-3 py-1.5 rounded-full text-slate-300 hover:text-white hover:bg-white/5 transition-colors">
            تخصص‌ها
          </a>
          <a href="#blog" className="px-3 py-1.5 rounded-full text-slate-300 hover:text-white hover:bg-white/5 transition-colors">
            یادداشت‌های مهندسی
          </a>
          <a href="#contact" className="px-3 py-1.5 rounded-full text-slate-300 hover:text-white hover:bg-white/5 transition-colors">
            ارتباط و مشاوره
          </a>
        </nav>

        {/* Quick Contact CTA */}
        <div className="pointer-events-auto">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl glass-panel border border-cyan-500/30 text-cyan-300 hover:text-white text-xs font-semibold hover:bg-cyan-500/10 transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">تماس مستقیم</span>
          </a>
        </div>

      </div>
    </header>
  );
};
