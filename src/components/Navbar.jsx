import React, { useState, useEffect } from 'react';
import { Cpu, Zap, ArrowUpDown, FileText, User, Mail, Compass } from 'lucide-react';

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/85 backdrop-blur-xl border-b border-slate-800/80 shadow-lg shadow-black/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#home" className="flex items-center gap-3 text-decoration-none group">
          <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-700 p-0.5 shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
              <Cpu className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-slate-950 animate-ping" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-slate-950" />
          </div>

          <div className="flex flex-col text-right">
            <span className="font-extrabold text-lg text-white tracking-tight flex items-center gap-1.5">
              مهندس قادر علی حسینی
              <span className="text-[11px] font-normal px-2 py-0.5 rounded-full bg-cyan-950/80 text-cyan-400 border border-cyan-800/50 hidden sm:inline-block">
                شام اسبی
              </span>
            </span>
            <span className="text-xs text-slate-400 font-medium">مهندس برق • متخصص پله برقی و آسانسور</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 backdrop-blur-md p-1.5 rounded-2xl border border-slate-800/80">
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
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20 font-bold'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="btn-primary text-xs sm:text-sm !py-2 !px-4 rounded-xl flex items-center gap-2 shadow-cyan-500/25"
          >
            <Zap className="w-4 h-4 text-amber-300 animate-pulse" />
            <span>مشاوره مهندسی</span>
          </a>
        </div>
      </div>
    </header>
  );
}
