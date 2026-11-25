import React from 'react';
import { Home, ArrowUpCircle, ChevronsUp, BookOpen, MessageSquare } from 'lucide-react';

export const MobileBottomNav = ({ activeSection, onNavigate }) => {
  const items = [
    { id: 'hero', label: 'خانه', icon: Home },
    { id: 'specialties', label: 'تخصص‌ها', icon: ArrowUpCircle },
    { id: 'blog', label: 'یادداشت‌ها', icon: BookOpen },
    { id: 'contact', label: 'تماس', icon: MessageSquare }
  ];

  return (
    <nav
      aria-label="پیمایش سریع موبایل"
      className="md:hidden fixed bottom-0 inset-x-0 z-40 px-4 pb-[calc(env(safe-area-inset-bottom)+12px)] pointer-events-none"
    >
      <div className="glass-pill pointer-events-auto relative mx-auto max-w-[340px] rounded-full px-2 py-1.5 flex items-center justify-around shadow-[0_10px_35px_rgba(0,0,0,0.8)] border border-white/15">
        
        {/* Subtle top sheen highlight */}
        <span
          aria-hidden="true"
          className="glass-sheen pointer-events-none absolute inset-x-4 top-0.5 h-[1px] rounded-full"
        />

        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onNavigate(item.id)}
              className="relative flex flex-col items-center justify-center py-1 px-3 rounded-full transition-all duration-300 cursor-pointer"
            >
              {isActive && (
                <span className="lens-glass absolute inset-0 rounded-full animate-in fade-in zoom-in-95 duration-200" aria-hidden="true" />
              )}
              <Icon
                className={`relative transition-all duration-300 ${
                  isActive
                    ? 'w-5 h-5 text-cyan-300 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]'
                    : 'w-4 h-4 text-slate-400'
                }`}
              />
              <span
                className={`relative text-[10px] mt-0.5 font-medium transition-colors ${
                  isActive ? 'text-white font-bold' : 'text-slate-400'
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
