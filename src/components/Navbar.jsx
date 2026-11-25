import React, { useState, useEffect } from 'react';
import { Cpu, Zap, ArrowUpDown, FileText, User, Mail, Compass } from 'lucide-react';

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-slate-950/80 backdrop-blur-2xl border-b border-white/10 shadow-xl shadow-black/40'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#home" className="flex items-center gap-3 group text-decoration-none">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-sky-400 via-blue-600 to-indigo-700 p-0.5 shadow-lg shadow-sky-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-slate-950/90 rounded-[14px] flex items-center justify-center">
              <Cpu className="w-5 h-5 text-sky-400" />
            </div>
          </div>

          <div className="flex flex-col text-right">
            <span className="font-bold text-base md:text-lg text-white tracking-tight flex items-center gap-1.5">
              مهندس قادر علی حسینی
              <span className="text-[11px] font-normal px-2 py-0.5 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20 hidden sm:inline-block">
                شام اسبی
              </span>
            </span>
            <span className="text-[11px] text-slate-400">مهندس برق • متخصص پله برقی و آسانسور</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 p-1.5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-inner">
          {[
            { id: 'home', label: 'صفحه اصلی', icon: Compass },
            { id: 'about', label: 'درباره من', icon: User },
            { id: 'escalator', label: 'مهندسی پله برقی', icon: Zap },
            { id: 'elevator', label: 'مهندسی آسانسور', icon: ArrowUpDown },
            { id: 'blog', label: 'وبلاگ تخصصی', icon: FileText },
            { id: 'contact', label: 'تماس', icon: Mail },
          ].map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-sky-500 text-slate-950 shadow-md shadow-sky-500/30'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Quick Consultation CTA */}
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="btn-liquid-primary !py-2 !px-4 text-xs font-semibold rounded-xl flex items-center gap-1.5"
          >
            <Zap className="w-3.5 h-3.5" />
            <span>مشاوره و همکاری</span>
          </a>
        </div>
      </div>
    </header>
  );
}
