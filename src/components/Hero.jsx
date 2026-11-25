import React from 'react';
import { ArrowDown, Mail } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col justify-center items-center px-4 sm:px-6 pt-28 pb-16 text-center select-none w-full max-w-full">
      {/* Subtle top ambient glow */}
      <div className="absolute top-1/4 inset-x-0 mx-auto w-72 sm:w-96 h-72 sm:h-96 bg-white/[0.03] rounded-full blur-3xl pointer-events-none" />

      {/* Top Capsule Badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.14] backdrop-blur-xl mb-6 shadow-[0_8px_20px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.25)]">
        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
        <span className="text-xs sm:text-sm font-medium text-slate-200">
          قادر علی حسینی شام اسبی
        </span>
      </div>

      {/* Main Identity Title */}
      <div className="max-w-4xl mx-auto mb-6 px-2 w-full">
        <h1 className="font-fa-title text-4xl sm:text-6xl md:text-7xl text-white tracking-tight leading-tight">
          قادر علی حسینی
          <span className="block text-gradient-silver text-xl sm:text-3xl md:text-4xl mt-3 tracking-normal font-normal">
            مهندس برق | متخصص آسانسور و پله‌برقی
          </span>
        </h1>
      </div>

      {/* Concise Technical Statement */}
      <p className="max-w-xl mx-auto text-sm sm:text-base text-slate-300 leading-relaxed mb-8 px-4 font-fa font-normal">
        طراحی، محاسبات فنی، راه‌اندازی و بازرسی استاندارد سیستم‌های آسانسور، پله‌برقی و اتوماسیون برق صنعتی.
      </p>

      {/* Technical Badges Row */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10 max-w-lg px-2">
        <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-slate-300 backdrop-blur-md">
          استاندارد EN 81
        </span>
        <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-slate-300 backdrop-blur-md">
          استاندارد EN 115
        </span>
        <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-slate-300 backdrop-blur-md">
          درایوهای VVVF و MRL
        </span>
        <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-slate-300 backdrop-blur-md">
          ارتینگ و حفاظت مدارات
        </span>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 z-10 w-full max-w-xs sm:max-w-none px-2">
        <a
          href="#elevators"
          className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white text-black font-bold text-xs sm:text-sm shadow-[0_8px_24px_rgba(255,255,255,0.25),inset_0_1px_0_rgba(255,255,255,0.9)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer no-underline"
        >
          <span>مشاهده حوزه‌های مهندسی</span>
          <ArrowDown className="w-4 h-4 text-black" />
        </a>

        <a
          href="#contact"
          className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white/[0.08] hover:bg-white/[0.14] text-white font-medium text-xs sm:text-sm border border-white/[0.16] backdrop-blur-xl hover:border-white/[0.3] active:scale-95 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 no-underline"
        >
          <span>ارتباط و استعلام فنی</span>
          <Mail className="w-4 h-4 text-slate-300" />
        </a>
      </div>
    </section>
  );
};
