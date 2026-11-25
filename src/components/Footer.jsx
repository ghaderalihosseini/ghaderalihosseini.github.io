import React from 'react';
import { Zap, Heart, Shield } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="border-t border-white/5 py-12 pb-24 md:pb-12 relative overflow-hidden bg-black/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-3 text-right">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
              <Zap className="w-5 h-5 fill-slate-950" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">
                مهندس قادر علی حسینی شام اسبی
              </div>
              <div className="text-xs text-slate-400">
                مشاور، ناظر و مجری سیستم‌های الکتریکی، آسانسور و پله‌برقی
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs text-slate-400">
            <a href="#hero" className="hover:text-cyan-300 transition-colors">صفحه اصلی</a>
            <a href="#specialties" className="hover:text-cyan-300 transition-colors">تخصص‌ها</a>
            <a href="#blog" className="hover:text-cyan-300 transition-colors">مقالات تخصصی</a>
            <a href="#contact" className="hover:text-cyan-300 transition-colors">ارتباط</a>
          </div>

          <div className="text-xs text-slate-400 text-center md:text-left">
            <p>© {new Date().toLocaleDateString('fa-IR', { year: 'numeric' })} کلیه حقوق محفوظ است.</p>
            <p className="text-[11px] text-slate-400 mt-1">طراحی شده با تم مدرن لیکویید گلس و فونت فارسی شبنم</p>
          </div>

        </div>
      </div>
    </footer>
  );
};
