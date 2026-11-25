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
    <div className="lg:hidden mobile-floating-dock">
      <nav
        aria-label="منوی موبایل مهندس قادر علی حسینی"
        className="flex items-center justify-between"
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`relative flex flex-col items-center justify-center flex-1 py-1 px-1 rounded-2xl transition-all duration-300 ${
                isActive ? 'text-sky-400 font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              <div
                className={`p-1.5 rounded-xl transition-all ${
                  isActive
                    ? 'bg-sky-500/20 text-sky-300 scale-110 shadow-sm shadow-sky-500/30'
                    : 'hover:bg-white/5'
                }`}
              >
                <Icon className="w-4 h-4" />
              </div>
              <span className="text-[10px] mt-0.5 tracking-tight font-medium">
                {item.label}
              </span>
            </a>
          );
        })}
      </nav>
    </div>
  );
}
