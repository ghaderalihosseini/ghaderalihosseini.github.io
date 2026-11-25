import React, { useState } from 'react';
import { BookOpen, ChevronDown, ChevronUp } from 'lucide-react';
import { LiquidCard } from './ui/LiquidCard';

export const BlogSection = () => {
  const [openId, setOpenId] = useState(null);

  const notes = [
    {
      id: 1,
      title: 'تنظیم نرمی حرکت و توقف آسانسور در درایوهای VVVF',
      category: 'آسانسور',
      brief: 'علت احساس شوک یا تکان در شروع و پایان حرکت کابین و نحوه همگام‌سازی مگنت ترمز با گشتاور موتور.',
      detail: 'کیفیت سواری آسانسور به منحنی S-Curve درایو و باز شدن همزمان ترمز با رسیدن موتور به گشتاور استارت (Pre-torque) وابسته است. در صورت باز شدن ترمز پیش از اعمال جریان کافی، کابین دچار پس‌زدگی اندک شده و مسافر احساس لرزش می‌کند.'
    },
    {
      id: 2,
      title: 'پایش سنسورهای ایمنی کلیدی در پله‌برقی',
      category: 'پله‌برقی',
      brief: 'نقاط حساس ایمنی شامل سنسور شانه ورودی، فرونشست استپ و هماهنگی سرعت هندریل طبق EN 115.',
      detail: 'در پله‌برقی، سوئیچ‌های Comb Plate در صورت گیر افتادن جسم خارجی مدار ایمنی را فوراً قطع می‌کنند. همچنین در صورت تفاوت سرعت دستگیره با پله‌ها بیش از ۱۵٪، سنسور نظارت هندریل فرمان توقف ایمن صادر می‌نماید.'
    },
    {
      id: 3,
      title: 'نقش ارتینگ مستقل در پایداری بردهای الکترونیکی',
      category: 'برق صنعتی',
      brief: 'چرا نوسان پتانسیل نول و نبود ارت مناسب باعث خطای ارتباطی CAN-bus در تابلو فرمان می‌شود؟',
      detail: 'سویچینگ اینورترها فرکانس بالایی روی خطوط ایجاد می‌کند. عدم تخلیه این هارمونیک‌ها از طریق چاه ارت مهندسی، منجر به القای نویز روی کابل‌های دیتا و ایجاد خطاهای کاذب در پردازنده‌های تابلو فرمان خواهد شد.'
    }
  ];

  return (
    <section id="blog" className="py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto w-full scroll-mt-20">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.12] text-xs font-mono text-slate-300 mb-3">
          <BookOpen className="w-3.5 h-3.5 text-white" />
          <span>TECHNICAL NOTES</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 font-fa-title">
          یادداشت‌های فنی و اجرایی
        </h2>
        <p className="text-xs sm:text-sm text-slate-400">
          نکات مهم بازرسی، تنظیمات میدانی و ایمنی سیستم‌های بالابر و برق
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {notes.map((note) => {
          const isOpen = openId === note.id;
          return (
            <LiquidCard key={note.id} className="cursor-pointer" tiltIntensity={4}>
              <div onClick={() => setOpenId(isOpen ? null : note.id)}>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-slate-300 border border-white/15">
                    {note.category}
                  </span>
                  <span className="text-slate-400">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2 leading-snug">
                  {note.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {note.brief}
                </p>

                {isOpen && (
                  <div className="mt-4 pt-3 border-t border-white/10 text-xs text-slate-200 leading-relaxed font-fa bg-white/[0.03] p-3 rounded-xl animate-in fade-in">
                    {note.detail}
                  </div>
                )}
              </div>
            </LiquidCard>
          );
        })}
      </div>
    </section>
  );
};
