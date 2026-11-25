import React from 'react';
import { Cpu, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 text-right relative overflow-hidden border-t border-white/10 bg-slate-950/40">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-400 to-indigo-600 flex items-center justify-center p-0.5">
                <div className="w-full h-full bg-slate-950/90 rounded-[10px] flex items-center justify-center">
                  <Cpu className="w-4 h-4 text-sky-400" />
                </div>
              </div>
              <div>
                <span className="font-bold text-base text-white block">مهندس برق قادر علی حسینی شام اسبی</span>
                <span className="text-xs text-sky-400 font-light">متخصص پله برقی و آسانسور</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-md font-light">
              پایگاه تخصصی مهندس برق <strong>قادر علی حسینی شام اسبی</strong>؛ طراح و مشاور سیستم‌های پله برقی و آسانسور. زاده اردبیل، متولد ۹ فروردین. متخصص استانداردهای ایمنی EN 115 و EN 81، موتورهای گیرلس و درایوهای پیشرفته VVVF.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">دسترسی سریع</h4>
            <ul className="space-y-2 text-xs text-slate-400 font-light">
              <li><a href="#home" className="hover:text-sky-400 transition">صفحه اصلی</a></li>
              <li><a href="#about" className="hover:text-sky-400 transition">درباره قادر علی حسینی</a></li>
              <li><a href="#escalator" className="hover:text-sky-400 transition">مهندسی پله برقی (EN 115)</a></li>
              <li><a href="#elevator" className="hover:text-sky-400 transition">مهندسی آسانسور (EN 81)</a></li>
              <li><a href="#blog" className="hover:text-sky-400 transition">وبلاگ و مقالات تخصصی</a></li>
            </ul>
          </div>

          {/* SEO Keywords Cloud */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">کلیدواژه‌های تخصصی</h4>
            <div className="flex flex-wrap gap-1.5 text-[11px] text-slate-400 font-light">
              <span className="px-2 py-1 rounded-lg bg-white/5 border border-white/5">مهندس برق</span>
              <span className="px-2 py-1 rounded-lg bg-white/5 border border-white/5">قادر علی حسینی</span>
              <span className="px-2 py-1 rounded-lg bg-white/5 border border-white/5">پله برقی</span>
              <span className="px-2 py-1 rounded-lg bg-white/5 border border-white/5">آسانسور گیرلس</span>
              <span className="px-2 py-1 rounded-lg bg-white/5 border border-white/5">استاندارد EN 81</span>
              <span className="px-2 py-1 rounded-lg bg-white/5 border border-white/5">استاندارد EN 115</span>
              <span className="px-2 py-1 rounded-lg bg-white/5 border border-white/5">زاده اردبیل</span>
              <span className="px-2 py-1 rounded-lg bg-white/5 border border-white/5">متولد ۹ فروردین</span>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-light">
          <div>
            تمامی حقوق متعلق به <strong>مهندس برق قادر علی حسینی شام اسبی</strong> است.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-sky-500/40 transition"
          >
            <span>بازگشت به بالا</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
