import React from 'react';
import ThreeHeroScene from './ThreeHeroScene';
import { ShieldCheck, Award, MapPin, Calendar, ArrowLeft, ArrowUpDown, Zap, Activity } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 right-1/2 translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[350px] h-[350px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Right Column: Hero Content & SEO Typography */}
          <div className="lg:col-span-7 flex flex-col items-start text-right">
            
            {/* Live Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs text-slate-300 mb-6 shadow-inner">
              <span className="pulse-dot" />
              <span>مشاور، ناظر و کارشناس ارشد سیستم‌های پله برقی و آسانسور</span>
            </div>

            {/* Primary H1 - "مهندس برق" as primary first title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4 tracking-tight">
              <span className="text-gradient block mb-1">مهندس برق</span>
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-100 mt-2">
                قادر علی حسینی شام اسبی
              </span>
            </h1>

            {/* Subheading / Specializations */}
            <p className="text-lg md:text-xl font-medium text-cyan-400 mb-4 flex items-center gap-2 flex-wrap">
              <span className="flex items-center gap-1.5">
                <Zap className="w-5 h-5 text-cyan-400 shrink-0" />
                متخصص سیستم‌های پله برقی
              </span>
              <span className="text-slate-500">•</span>
              <span className="flex items-center gap-1.5">
                <ArrowUpDown className="w-5 h-5 text-emerald-400 shrink-0" />
                طراح آسانسورهای پیشرفته و گیرلس
              </span>
            </p>

            {/* Short Bio paragraph loaded with exact user keywords for SEO */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl">
              اینجانب <strong>قادر علی حسینی شام اسبی</strong>، <strong>مهندس برق</strong> و متخصص سیستم‌های مکاترونیک، تأسیسات الکتریکی، <strong>پله برقی</strong> و <strong>آسانسور</strong> هستم. <strong>زاده اردبیل</strong> و <strong>متولد ۹ فروردین</strong>؛ با تسلط بر استانداردهای ایمنی بین‌المللی <strong>EN 115</strong> (پله برقی) و <strong>EN 81</strong> (آسانسور)، درایوهای هوشمند VVVF و اتوماسیون صنعتی.
            </p>

            {/* Quick Fact Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 w-full mb-8">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/70 border border-slate-800">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <div className="text-right">
                  <div className="text-[10px] text-slate-400">زادگاه</div>
                  <div className="text-xs font-bold text-white">اردبیل سرافراز</div>
                </div>
              </div>

              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/70 border border-slate-800">
                <Calendar className="w-4 h-4 text-amber-400 shrink-0" />
                <div className="text-right">
                  <div className="text-[10px] text-slate-400">زادروز</div>
                  <div className="text-xs font-bold text-white">۹ فروردین</div>
                </div>
              </div>

              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/70 border border-slate-800">
                <Zap className="w-4 h-4 text-cyan-400 shrink-0" />
                <div className="text-right">
                  <div className="text-[10px] text-slate-400">حوزه پله برقی</div>
                  <div className="text-xs font-bold text-white">استاندارد EN 115</div>
                </div>
              </div>

              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/70 border border-slate-800">
                <ShieldCheck className="w-4 h-4 text-indigo-400 shrink-0" />
                <div className="text-right">
                  <div className="text-[10px] text-slate-400">حوزه آسانسور</div>
                  <div className="text-xs font-bold text-white">استاندارد EN 81</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <a href="#escalator" className="btn-primary flex-1 sm:flex-initial">
                <span>بررسی مهندسی پله برقی</span>
                <ArrowLeft className="w-4 h-4" />
              </a>

              <a href="#elevator" className="btn-secondary flex-1 sm:flex-initial">
                <span>بررسی تخصصی آسانسور</span>
                <ArrowUpDown className="w-4 h-4" />
              </a>
            </div>

            {/* Live Stats Bar */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 w-full grid grid-cols-3 gap-4 text-right">
              <div>
                <div className="text-2xl font-black text-cyan-400 font-mono">EN 115</div>
                <div className="text-xs text-slate-400">استاندارد پله‌های برقی</div>
              </div>
              <div>
                <div className="text-2xl font-black text-emerald-400 font-mono">EN 81</div>
                <div className="text-xs text-slate-400">استاندارد ایمنی آسانسور</div>
              </div>
              <div>
                <div className="text-2xl font-black text-indigo-400 font-mono">VVVF</div>
                <div className="text-xs text-slate-400">درایوهای پیشرفته گیرلس</div>
              </div>
            </div>

          </div>

          {/* Left Column: 3D Interactive Three.js Scene */}
          <div className="lg:col-span-5 w-full">
            <div className="relative">
              <div className="absolute -top-3 -right-3 z-20 flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-950/80 text-emerald-400 border border-emerald-700/60 text-[11px] font-bold shadow-lg">
                <Activity className="w-3.5 h-3.5 animate-pulse" />
                <span>رندر تعاملی ۳بعدی مکانیزم</span>
              </div>
              <ThreeHeroScene />
              <div className="mt-3 text-center text-xs text-slate-400">
                💡 روی مدل سه‌بعدی کلیک و درگ کنید تا زاویه دید تغییر کند.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
