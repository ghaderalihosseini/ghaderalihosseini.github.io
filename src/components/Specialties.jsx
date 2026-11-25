import React from 'react';
import { ArrowUp, ChevronsUp, Zap, Check } from 'lucide-react';
import { LiquidCard } from './ui/LiquidCard';

export const Specialties = () => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto w-full">
      
      {/* Elevator Section */}
      <div id="elevators" className="mb-14 scroll-mt-24">
        <LiquidCard className="w-full">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="md:max-w-xl">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
                  <ArrowUp className="w-4 h-4 text-white" />
                </div>
                <span className="text-xs font-mono tracking-wider text-slate-400 uppercase">
                  Elevator Engineering • EN 81
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                سیستم‌های آسانسور کششی و هیدرولیک
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed font-fa">
                محاسبات فنی ترافیک، طراحی و انتخاب ظرفیت موتور، راه‌اندازی درایوهای کنترل سرعت (VVVF) و بازرسی انطباق با استاندارد ملی و اروپایی.
              </p>
            </div>

            <div className="space-y-2.5 md:border-r md:border-white/10 md:pr-6 shrink-0">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                <Check className="w-4 h-4 text-white shrink-0" />
                <span>محاسبات کشش (Traction) و انتخاب سیم‌بکسل و فلکه</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                <Check className="w-4 h-4 text-white shrink-0" />
                <span>راه‌اندازی آسانسورهای روملس (MRL) و گیرلس پرسرعت</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                <Check className="w-4 h-4 text-white shrink-0" />
                <span>کالیبراسیون توقف هم‌سطح طبقات و تست پاراشوت</span>
              </div>
            </div>
          </div>
        </LiquidCard>
      </div>

      {/* Escalator Section */}
      <div id="escalators" className="mb-14 scroll-mt-24">
        <LiquidCard className="w-full">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="md:max-w-xl">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
                  <ChevronsUp className="w-4 h-4 text-white" />
                </div>
                <span className="text-xs font-mono tracking-wider text-slate-400 uppercase">
                  Escalators & Moving Walks • EN 115
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                پله‌برقی و پیاده‌رو متحرک
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed font-fa">
                سرویس، عیب‌یابی و اورهال پله‌برقی‌های اماکن پرتردد تجاری و ایستگاه‌ها، تنظیم گپ‌های ایمنی و پایش عملکرد سنسورهای چندگانه.
              </p>
            </div>

            <div className="space-y-2.5 md:border-r md:border-white/10 md:pr-6 shrink-0">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                <Check className="w-4 h-4 text-white shrink-0" />
                <span>کالیبراسیون سنسور صفحه شانه و فرونشست استپ</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                <Check className="w-4 h-4 text-white shrink-0" />
                <span>تنظیم ترمز اضطراری و هم‌گامی سرعت دستگیره هندریل</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                <Check className="w-4 h-4 text-white shrink-0" />
                <span>بررسی کشش زنجیر استپ و سلامت بلبرینگ‌ها و شاسی</span>
              </div>
            </div>
          </div>
        </LiquidCard>
      </div>

      {/* Electrical Engineering Section */}
      <div id="electrical" className="scroll-mt-24">
        <LiquidCard className="w-full">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="md:max-w-xl">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <span className="text-xs font-mono tracking-wider text-slate-400 uppercase">
                  Power & Industrial Automation
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                مهندسی برق و اتوماسیون صنعتی
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed font-fa">
                طراحی و اجرای تابلوهای توزیع و فرمان، سیستم‌های نجات اضطراری (Blackout)، ارتینگ حفاظتی و رفع نویز بردهای کنترل میکروپروسسوری.
              </p>
            </div>

            <div className="space-y-2.5 md:border-r md:border-white/10 md:pr-6 shrink-0">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                <Check className="w-4 h-4 text-white shrink-0" />
                <span>طراحی مدارهای قدرت و فرمان و حفاظت موتورهای سه فاز</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                <Check className="w-4 h-4 text-white shrink-0" />
                <span>اجرای چاه ارت مهندسی و حذف نویز از شبکه‌های CAN-bus</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                <Check className="w-4 h-4 text-white shrink-0" />
                <span>راه‌اندازی سیستم‌های UPS نجات اضطراری خودکار</span>
              </div>
            </div>
          </div>
        </LiquidCard>
      </div>

    </section>
  );
};
