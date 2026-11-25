import React from 'react';
import { 
  Zap, 
  ArrowUpCircle, 
  ChevronsUp, 
  BookOpen, 
  PhoneCall, 
  CheckCircle2, 
  ShieldCheck, 
  Award, 
  FileText,
  Mail,
  MapPin,
  ExternalLink,
  ChevronLeft,
  Settings,
  Cpu,
  Layers,
  Sparkles
} from 'lucide-react';

export const Hero = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      {/* Background ambient liquid orbs */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 sm:w-96 sm:h-96 rounded-full ambient-glow-cyan pointer-events-none blur-3xl opacity-60" />
      <div className="absolute top-1/3 -left-20 w-80 h-80 sm:w-96 sm:h-96 rounded-full ambient-glow-amber pointer-events-none blur-3xl opacity-40" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-medium mb-6 shadow-[0_0_20px_rgba(6,182,212,0.15)]">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span>مشاور و مجری پروژه‌های مهندسی و بازرسی فنی</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.3]">
            مهندس <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-200 to-amber-200">قادر علی حسینی شام اسبی</span>
          </h1>

          <p className="text-lg sm:text-xl font-medium text-cyan-100/90 mb-4">
            مهندسی برق | طراحی، نصب، محاسبات و استانداردسازی سیستم‌های آسانسور و پله‌برقی
          </p>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8 max-w-2xl mx-auto">
            ارائه خدمات تخصصی در زمینه سیستم‌های محرکه، درایوهای هوشمند صنعتی، تابلو فرمان‌های میکروپروسسوری، تحلیل ایمنی و بازرسی ادواری بر مبنای آخرین استانداردهای معتبر مهندسی.
          </p>

          {/* Actions */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-600 hover:from-cyan-400 hover:to-sky-500 text-slate-950 font-bold text-sm shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <PhoneCall className="w-4 h-4" />
              <span>درخواست مشاوره تخصصی</span>
            </a>
            <a
              href="#specialties"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-panel glass-panel-interactive text-slate-200 hover:text-white text-sm font-medium"
            >
              <Settings className="w-4 h-4 text-cyan-400" />
              <span>حوزه‌های تخصص و تجارب</span>
            </a>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-12 sm:mt-16 text-right">
            <div className="glass-panel p-4 rounded-2xl">
              <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-1">۱۰۰٪</div>
              <div className="text-xs text-slate-400">انطباق با استانداردهای EN 81</div>
            </div>
            <div className="glass-panel p-4 rounded-2xl">
              <div className="text-2xl sm:text-3xl font-bold text-amber-300 mb-1">+۱۵ سال</div>
              <div className="text-xs text-slate-400">تخصص در برق و سیستم‌های بالابر</div>
            </div>
            <div className="glass-panel p-4 rounded-2xl">
              <div className="text-2xl sm:text-3xl font-bold text-sky-400 mb-1">ترافیک بالا</div>
              <div className="text-xs text-slate-400">تحلیل محاسباتی و انتخاب موتور</div>
            </div>
            <div className="glass-panel p-4 rounded-2xl">
              <div className="text-2xl sm:text-3xl font-bold text-emerald-400 mb-1">۲۴/۷</div>
              <div className="text-xs text-slate-400">پایش ایمنی و پشتیبانی فنی</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
