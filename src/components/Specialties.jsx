import React from 'react';
import { ArrowUp, ChevronsUp, Zap, Check, ArrowLeft } from 'lucide-react';
import { LiquidCard } from './ui/LiquidCard';

export const Specialties = () => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto w-full">
      
      {/* Elevator Section */}
      <div id="elevators" className="mb-14 scroll-mt-24">
        <LiquidCard className="w-full">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="md:max-w-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="glass-icon-pod w-11 h-11 flex items-center justify-center shrink-0">
                  <ArrowUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                    سیستم‌های آسانسور کششی و هیدرولیک
                  </h2>
                  <div className="text-[11px] font-mono tracking-wider text-slate-400 uppercase mt-0.5">
                    Elevator Engineering • EN 81
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-slate-300 leading-relaxed font-fa mb-5">
                محاسبات فنی ترافیک، طراحی و انتخاب ظرفیت موتور، راه‌اندازی درایوهای کنترل سرعت (VVVF) و بازرسی انطباق با استاندارد ملی و اروپایی.
              </p>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs text-white/80 hover:text-white font-medium transition-colors"
              >
                <span>درخواست مشاوره یا محاسبات این بخش</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="space-y-3 md:border-r md:border-white/10 md:pr-6 shrink-0 pt-2 md:pt-0">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-white" />
                </span>
                <span>محاسبات کشش (Traction) و انتخاب سیم‌بکسل و فلکه</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-white" />
                </span>
                <span>راه‌اندازی آسانسورهای روملس (MRL) و گیرلس پرسرعت</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-white" />
                </span>
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
              <div className="flex items-center gap-3 mb-4">
                <div className="glass-icon-pod w-11 h-11 flex items-center justify-center shrink-0">
                  <ChevronsUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                    پله‌برقی و پیاده‌رو متحرک
                  </h2>
                  <div className="text-[11px] font-mono tracking-wider text-slate-400 uppercase mt-0.5">
                    Escalators & Moving Walks • EN 115
                  </div>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed font-fa mb-5">
                سرویس، عیب‌یابی و اورهال پله‌برقی‌های اماکن پرتردد تجاری و ایستگاه‌ها، تنظیم گپ‌های ایمنی و پایش عملکرد سنسورهای چندگانه.
              </p>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs text-white/80 hover:text-white font-medium transition-colors"
              >
                <span>درخواست مشاوره یا اورهال پله‌برقی</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="space-y-3 md:border-r md:border-white/10 md:pr-6 shrink-0 pt-2 md:pt-0">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-white" />
                </span>
                <span>کالیبراسیون سنسور صفحه شانه و فرونشست استپ</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-white" />
                </span>
                <span>تنظیم ترمز اضطراری و هم‌گامی سرعت دستگیره هندریل</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-white" />
                </span>
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
              <div className="flex items-center gap-3 mb-4">
                <div className="glass-icon-pod w-11 h-11 flex items-center justify-center shrink-0">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                    مهندسی برق و اتوماسیون صنعتی
                  </h2>
                  <div className="text-[11px] font-mono tracking-wider text-slate-400 uppercase mt-0.5">
                    Power & Industrial Automation
                  </div>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed font-fa mb-5">
                طراحی و اجرای تابلوهای توزیع و فرمان، سیستم‌های نجات اضطراری (Blackout)، ارتینگ حفاظتی و رفع نویز بردهای کنترل میکروپروسسوری.
              </p>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs text-white/80 hover:text-white font-medium transition-colors"
              >
                <span>درخواست مشاوره طراحی تابلو یا ارتینگ</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="space-y-3 md:border-r md:border-white/10 md:pr-6 shrink-0 pt-2 md:pt-0">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-white" />
                </span>
                <span>طراحی مدارهای قدرت و فرمان و حفاظت موتورهای سه فاز</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-white" />
                </span>
                <span>اجرای چاه ارت مهندسی و حذف نویز از شبکه‌های CAN-bus</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-white" />
                </span>
                <span>راه‌اندازی سیستم‌های UPS نجات اضطراری خودکار</span>
              </div>
            </div>
          </div>
        </LiquidCard>
      </div>

    </section>
  );
};
