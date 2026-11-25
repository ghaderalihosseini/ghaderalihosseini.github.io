import React from 'react';
import { Home, ArrowUp, ChevronsUp, Zap, BookOpen, Mail } from 'lucide-react';

export const MobileBottomNav = ({ activeSection, onNavigate }) => {
  const navItems = [
    { id: 'hero', label: 'خانه', icon: Home },
    { id: 'elevators', label: 'آسانسور', icon: ArrowUp },
    { id: 'escalators', label: 'پله‌برقی', icon: ChevronsUp },
    { id: 'electrical', label: 'برق', icon: Zap },
    { id: 'blog', label: 'یادداشت', icon: BookOpen },
    { id: 'contact', label: 'ارتباط', icon: Mail }
  ];

  return (
    <nav
      aria-label="پیمایش سریع موبایل"
      className="md:hidden fixed bottom-0 inset-x-0 z-50 px-3 pb-[calc(env(safe-area-inset-bottom)+10px)] pointer-events-none"
    >
      <div className="glass-pill pointer-events-auto relative mx-auto max-w-[370px] rounded-full px-2 py-1.5 flex items-center justify-between">
        <span
          aria-hidden="true"
          className="glass-sheen pointer-events-none absolute inset-x-3.5 top-[3px] h-[13px] rounded-full"
        />
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onNavigate(item.id)}
              aria-current={isActive ? 'page' : undefined}
              className="relative flex flex-col items-center justify-center w-[50px] h-10 rounded-full focus:outline-none cursor-pointer"
            >
              {isActive && (
                <span className="lens-glass absolute inset-0 rounded-[16px] animate-lens-in" aria-hidden="true" />
              )}
              <Icon
                className={`relative transition-all duration-300 ${
                  isActive
                    ? 'w-4 h-4 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]'
                    : 'w-4 h-4 text-slate-400'
                }`}
              />
              <span className={`relative text-[10px] mt-0.5 leading-none transition-colors ${
                isActive ? 'text-white font-bold' : 'text-slate-400'
              }`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
