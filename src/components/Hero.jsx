import React from 'react';
import AnimatedHeroVisual from './AnimatedHeroVisual';
import { ShieldCheck, MapPin, Calendar, ArrowLeft, ArrowUpDown, Zap, Cpu } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Liquid background ambient glow blobs */}
      <div className="liquid-blob-1" />
      <div className="liquid-blob-2" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Right Column: Hero Content & Typography */}
          <div className="lg:col-span-7 flex flex-col items-start text-right">
            
            {/* Live Status Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300 mb-6 shadow-sm backdrop-blur-md">
              <span className="pulse-indicator" />
              <span>مشاور و ناظر تخصصی سیستم‌های پله برقی و آسانسور</span>
            </div>

            {/* Primary H1 - "مهندس برق" as primary first title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-4 tracking-tight">
              <span className="text-liquid-cyan block mb-2 font-black">مهندس برق</span>
              <span className="block text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-100">
                قادر علی حسینی شام اسبی
              </span>
            </h1>

            {/* Subheading / Specializations */}
            <p className="text-base sm:text-lg font-medium text-sky-400 mb-6 flex items-center gap-2 flex-wrap">
              <span className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-sky-400 shrink-0" />
                مهندسی سیستم‌های پله برقی (EN 115)
              </span>
              <span className="text-slate-600">•</span>
              <span className="flex items-center gap-1.5">
                <ArrowUpDown className="w-4 h-4 text-emerald-400 shrink-0" />
                آسانسورهای مدرن گیرلس و کششی (EN 81)
              </span>
            </p>

            {/* Short Bio paragraph with generous line-height and Persian Shabnam typography */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl font-light">
              اینجانب <strong>قادر علی حسینی شام اسبی</strong>، <strong>مهندس برق</strong> و متخصص سیستم‌های مکاترونیک، <strong>پله برقی</strong> و <strong>آسانسور</strong> هستم. <strong>زاده اردبیل</strong> و <strong>متولد ۹ فروردین</strong>؛ با تعهد به استانداردهای بین‌المللی <strong>EN 115</strong> و <strong>EN 81</strong>، طراحی درایوهای پیشرفته VVVF و نظارت فنی بر ایمنی پایدار سرنشینان.
            </p>

            {/* Quick Fact Badges in Liquid Glass */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full mb-8">
              <div className="p-3.5 rounded-2xl liquid-glass text-right">
                <MapPin className="w-4 h-4 text-emerald-400 mb-1.5" />
                <div className="text-[10px] text-slate-400">زادگاه</div>
                <div className="text-xs font-bold text-white mt-0.5">اردبیل سرافراز</div>
              </div>

              <div className="p-3.5 rounded-2xl liquid-glass text-right">
                <Calendar className="w-4 h-4 text-amber-400 mb-1.5" />
                <div className="text-[10px] text-slate-400">زادروز</div>
                <div className="text-xs font-bold text-white mt-0.5">۹ فروردین</div>
              </div>

              <div className="p-3.5 rounded-2xl liquid-glass text-right">
                <Zap className="w-4 h-4 text-sky-400 mb-1.5" />
                <div className="text-[10px] text-slate-400">پله برقی</div>
                <div className="text-xs font-bold text-white mt-0.5">استاندارد EN 115</div>
              </div>

              <div className="p-3.5 rounded-2xl liquid-glass text-right">
                <ShieldCheck className="w-4 h-4 text-indigo-400 mb-1.5" />
                <div className="text-[10px] text-slate-400">آسانسور</div>
                <div className="text-xs font-bold text-white mt-0.5">استاندارد EN 81</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a href="#escalator" className="btn-liquid-primary flex-1 sm:flex-initial">
                <span>تخصص پله برقی</span>
                <ArrowLeft className="w-4 h-4" />
              </a>

              <a href="#elevator" className="btn-liquid-secondary flex-1 sm:flex-initial">
                <span>تخصص آسانسور</span>
                <ArrowUpDown className="w-4 h-4 text-emerald-400" />
              </a>
            </div>

          </div>

          {/* Left Column: Animated Liquid Glass Hero Graphic */}
          <div className="lg:col-span-5 w-full">
            <AnimatedHeroVisual />
          </div>

        </div>
      </div>
    </section>
  );
}
