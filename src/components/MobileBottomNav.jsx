import React from 'react';
import { Home, User, Zap, ArrowUpDown, BookOpen, MessageSquare } from 'lucide-react';

export default function MobileBottomNav({ activeSection }) {
  const navItems = [
    { id: 'home', label: 'خانه', icon: Home },
    { id: 'about', label: 'بیوگرافی', icon: User },
    { id: 'escalator', label: 'پله‌برقی', icon: Zap },
    { id: 'elevator', label: 'آسانسور', icon: ArrowUpDown },
    { id: 'blog', label: 'وبلاگ', icon: BookOpen },
    { id: 'contact', label: 'تماس', icon: MessageSquare },
  ];

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 px-3 pb-3 pointer-events-none">
      <nav
        aria-label="منوی موبایل مهندس قادر علی حسینی"
        className="pointer-events-auto max-w-md mx-auto bg-slate-950/90 backdrop-blur-2xl border border-slate-800/90 rounded-2xl shadow-2xl shadow-cyan-950/40 p-1.5 flex items-center justify-around"
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`relative flex flex-col items-center justify-center flex-1 py-1.5 px-1 rounded-xl transition-all duration-300 ${
                isActive ? 'text-cyan-400 font-bold' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {isActive && (
                <span className="absolute -top-1 w-8 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-[0_0_8px_#38bdf8]" />
              )}
              <div
                className={`p-1 rounded-lg transition-transform ${
                  isActive ? 'scale-110 bg-cyan-950/60 text-cyan-300' : ''
                }`}
              >
                <Icon className="w-5 h-5" />
              </div>
              <span className="text-[10px] mt-0.5 tracking-tight">{item.label}</span>
            </a>
          );
        })}
      </nav>
    </div>
  );
}
