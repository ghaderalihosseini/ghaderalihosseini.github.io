import React from 'react';
import { MapPin, Calendar, CheckCircle2, Shield, Wrench, Award, Sparkles, Zap, ArrowUpDown } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>بیوگرافی و مسیر مهندسی</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            درباره <span className="text-liquid-cyan">مهندس برق قادر علی حسینی</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            روایتی از ریشه‌های اصیل در خطه سبلان اردبیل تا تخصص در طراحی، نظارت و مهندسی سیستم‌های پیشرفته پله برقی و آسانسور.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Biography Detail Cards */}
          <div className="lg:col-span-7 space-y-6 text-right">
            <div className="liquid-glass p-6 sm:p-8 rounded-3xl relative">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 flex items-center gap-2.5">
                <MapPin className="w-5 h-5 text-emerald-400 shrink-0" />
                زاده اردبیل؛ از کوهپایه‌های سبلان تا مهندسی برق
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base mb-4 font-light">
                <strong>قادر علی حسینی شام اسبی</strong> در <strong>۹ فروردین</strong> در دیار تاریخی و بااصالت <strong>اردبیل</strong> دیده به جهان گشود. روحیه پرتلاش، پشتکار خستگی‌ناپذیر و انضباط فکری، انگیزه بنیادین او در ورود به عرصه دقیق <strong>مهندسی برق</strong> گردید.
              </p>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base font-light">
                علاقه وافر به سیستم‌های اتوماسیون صنعتی، درایوهای توان‌بالا و ماشین‌های الکتریکی دوار، مسیر حرفه‌ای او را به سمت زیرساخت‌های حمل و نقل عمودی و افقی (پله برقی و آسانسور) هدایت کرد؛ حوزه‌ای که هر دهم ثانیه پایداری مدار، ضامن آرامش و امنیت هزاران کاربر است.
              </p>
            </div>

            <div className="liquid-glass p-6 sm:p-8 rounded-3xl relative">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 flex items-center gap-2.5">
                <Zap className="w-5 h-5 text-sky-400 shrink-0" />
                تخصص‌های بنیادین: پله برقی و آسانسور
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base mb-4 font-light">
                طراحی اصولی تجهیزات الکترومکانیکال نیازمند انطباق دقیق با استانداردهای روز جهانی است. <strong>مهندس قادر علی حسینی</strong> تسلط تخصصی در دو شاخه کلیدی زیر دارد:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-4">
                <div className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-white/5 border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-1" />
                  <div className="text-xs text-slate-300 leading-relaxed">
                    <strong>پله برقی (استاندارد EN 115):</strong> بازرسی سنسورهای شانه، درایوهای توان‌بالا، زنجیر استپ و ترمزهای کمکی.
                  </div>
                </div>
                <div className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-white/5 border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                  <div className="text-xs text-slate-300 leading-relaxed">
                    <strong>آسانسور (استاندارد EN 81):</strong> طراحی موتورهای گیرلس PMSM، آسانسورهای بدون موتورخانه (MRL) و تابلوهای VVVF.
                  </div>
                </div>
                <div className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-white/5 border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                  <div className="text-xs text-slate-300 leading-relaxed">
                    <strong>اتوماسیون و درایو اینورتر:</strong> کنترل حلقه بسته (Closed Loop)، راه‌اندازی نرم و کاهش استهلاک مکانیکی.
                  </div>
                </div>
                <div className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-white/5 border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-1" />
                  <div className="text-xs text-slate-300 leading-relaxed">
                    <strong>سیستم‌های نجات اضطراری (ARD):</strong> مدیریت هوشمند تخلیه کابین در زمان قطعی برق یا افت ولتاژ شبکه.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Identity Profile Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="liquid-glass p-6 sm:p-8 rounded-3xl text-right">
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center font-bold text-xl text-white shadow-lg shadow-sky-500/25">
                  ق.ع
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-white">قادر علی حسینی شام اسبی</h4>
                  <p className="text-xs text-sky-400 font-medium">مهندس برق • متخصص پله برقی و آسانسور</p>
                  <p className="text-xs text-slate-400 mt-0.5">زاده اردبیل • متولد ۹ فروردین</p>
                </div>
              </div>

              {/* Engineering Principles */}
              <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                اصول و خط‌مشی مهندسی
              </h5>

              <ul className="space-y-4 text-xs text-slate-300 font-light">
                <li className="flex items-center gap-3">
                  <Shield className="w-4 h-4 text-sky-400 shrink-0" />
                  <span><strong>ایمنی سرنشینان:</strong> سخت‌گیرانه‌ترین چک‌لیست‌های آزمون بار و ترمزهای اضطراری.</span>
                </li>
                <li className="flex items-center gap-3">
                  <Wrench className="w-4 h-4 text-amber-400 shrink-0" />
                  <span><strong>انطباق کامل با استانداردها:</strong> مراجع بین‌المللی EN 115-1 و EN 81-20/50.</span>
                </li>
                <li className="flex items-center gap-3">
                  <Award className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>کاهش مصرف انرژی:</strong> درایوهای هوشمند احیاکننده و موتورهای پربازده گیرلس.</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-gradient-to-r from-sky-500/10 via-indigo-500/10 to-transparent border border-sky-500/20 text-right">
              <div className="text-xs text-sky-400 font-bold mb-1">خدمات مهندسی و مشاوره</div>
              <div className="text-xs text-slate-300 leading-relaxed font-light">
                نظارت و بازرسی فنی آسانسورهای سرعت‌بالا و پله‌های برقی پرتردد مراکز تجاری و سازه‌های مدرن.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
