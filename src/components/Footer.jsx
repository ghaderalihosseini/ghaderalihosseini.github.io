import React from 'react';
import { Cpu, ArrowUp, Zap, ArrowUpDown } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-28 lg:pb-12 text-right relative overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-700 flex items-center justify-center p-0.5">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <div>
                <span className="font-extrabold text-lg text-white block">مهندس برق قادر علی حسینی شام اسبی</span>
                <span className="text-xs text-cyan-400 font-medium">متخصص پله برقی و آسانسور</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              پایگاه تخصصی و رزومه مهندسی <strong>قادر علی حسینی شام اسبی</strong>؛ مهندس برق، طراح و مشاور سیستم‌های پله برقی و آسانسور. زاده اردبیل، متولد ۹ فروردین. متخصص استانداردهای ایمنی EN 115 و EN 81، موتورهای گیرلس و درایوهای پیشرفته VVVF.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">دسترسی سریع</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#home" className="hover:text-cyan-400 transition">صفحه اصلی</a></li>
              <li><a href="#about" className="hover:text-cyan-400 transition">درباره قادر علی حسینی</a></li>
              <li><a href="#escalator" className="hover:text-cyan-400 transition">مهندسی پله برقی (EN 115)</a></li>
              <li><a href="#elevator" className="hover:text-cyan-400 transition">مهندسی آسانسور (EN 81)</a></li>
              <li><a href="#blog" className="hover:text-cyan-400 transition">وبلاگ و مقالات تخصصی</a></li>
            </ul>
          </div>

          {/* SEO Keywords Cloud */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">کلیدواژه‌های تخصصی مهندسی</h4>
            <div className="flex flex-wrap gap-1.5 text-[11px] text-slate-400">
              <span className="px-2 py-1 rounded-md bg-slate-900 border border-slate-800">مهندس برق</span>
              <span className="px-2 py-1 rounded-md bg-slate-900 border border-slate-800">قادر علی حسینی</span>
              <span className="px-2 py-1 rounded-md bg-slate-900 border border-slate-800">قادر علی حسینی شام اسبی</span>
              <span className="px-2 py-1 rounded-md bg-slate-900 border border-slate-800">پله برقی</span>
              <span className="px-2 py-1 rounded-md bg-slate-900 border border-slate-800">آسانسور</span>
              <span className="px-2 py-1 rounded-md bg-slate-900 border border-slate-800">موتور گیرلس PMSM</span>
              <span className="px-2 py-1 rounded-md bg-slate-900 border border-slate-800">استاندارد EN 81</span>
              <span className="px-2 py-1 rounded-md bg-slate-900 border border-slate-800">استاندارد EN 115</span>
              <span className="px-2 py-1 rounded-md bg-slate-900 border border-slate-800">زاده اردبیل</span>
              <span className="px-2 py-1 rounded-md bg-slate-900 border border-slate-800">متولد ۹ فروردین</span>
              <span className="px-2 py-1 rounded-md bg-slate-900 border border-slate-800">درایو VVVF</span>
              <span className="px-2 py-1 rounded-md bg-slate-900 border border-slate-800">پاراشوت آسانسور</span>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            تمامی حقوق مادی و معنوی متعلق به <strong>مهندس برق قادر علی حسینی شام اسبی</strong> می‌باشد.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500 transition"
          >
            <span>بازگشت به بالا</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
