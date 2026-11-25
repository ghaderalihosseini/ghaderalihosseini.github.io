import React from 'react';
import { Award, BookOpen, MapPin, Calendar, CheckCircle2, Shield, Wrench, Sparkles, Zap, ArrowUpDown } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-slate-950/60 relative border-t border-slate-800/60">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 text-cyan-400 border border-cyan-800/50 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>بیوگرافی و مسیر مهندسی</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            درباره <span className="text-gradient">مهندس برق قادر علی حسینی شام اسبی</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            روایتی از ریشه‌های اصیل در خطه سبلان اردبیل تا تخصص عالی در طراحی، نظارت و مهندسی سیستم‌های پیشرفته پله برقی و آسانسور.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Biography Detail Cards */}
          <div className="lg:col-span-7 space-y-6 text-right">
            <div className="glass-panel p-6 md:p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-2 h-full bg-cyan-500" />
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-cyan-400" />
                زاده اردبیل؛ از کوهپایه‌های سبلان تا تخصص مهندسی برق
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm md:text-base mb-4">
                <strong>قادر علی حسینی شام اسبی</strong> در <strong>۹ فروردین</strong> در دیار تاریخی و بااصالت <strong>اردبیل</strong> متولد شد. علاقه وافر به ماشین‌های الکتریکی، مدارهای کنترل توان و سیستم‌های مکانیکی متحرک، زمینه ورود جدی او را به رشته <strong>مهندسی برق</strong> فراهم ساخت.
              </p>
              <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                پشتکار خستگی‌ناپذیر و انضباط مهندسی، تمرکز حرفه‌ای او را به سمت پیچیده‌ترین تجهیزات حمل و نقل عمودی و افقی شهری سوق داد: <strong>پله برقی‌های سنگین ترافیکی</strong> و <strong>آسانسورهای مدرن کششی و گیرلس</strong>؛ جایی که پایداری مدارهای برقی مستقیماً با امنیت و جان کاربران در ارتباط است.
              </p>
            </div>

            <div className="glass-panel p-6 md:p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-2 h-full bg-emerald-500" />
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-emerald-400" />
                تخصص‌های بنیادین: پله برقی و آسانسور
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm md:text-base mb-4">
                در پروژه‌های ساختمانی، تجاری و صنعتی، طراحی صحیح سیستم‌های الکترومکانیکال نیازمند انطباق کامل با مراجع روز بین‌المللی است. <strong>مهندس قادر علی حسینی</strong> تسلط تخصصی در دو شاخه کلیدی زیر دارد:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div className="text-xs text-slate-300 leading-normal">
                    <strong>مهندسی پله برقی (استاندارد EN 115):</strong> بازرسی میکروسوئیچ‌های ایمنی، درایوهای توان‌بالا، زنجیر استپ و ترمزهای کمکی.
                  </div>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="text-xs text-slate-300 leading-normal">
                    <strong>مهندسی آسانسور (استاندارد EN 81):</strong> طراحی موتورهای گیرلس PMSM، آسانسورهای بدون موتورخانه (MRL) و تابلوهای VVVF.
                  </div>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div className="text-xs text-slate-300 leading-normal">
                    <strong>اتوماسیون و درایو اینورتر:</strong> کنترل حلقه بسته (Closed Loop)، راه‌اندازی نرم و کاهش شدید تکان‌های استارت و توقف.
                  </div>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <div className="text-xs text-slate-300 leading-normal">
                    <strong>سیستم‌های نجات اضطراری (ARD):</strong> مدیریت هوشمند تخلیه مسافر در زمان افت ولتاژ یا قطعی کامل برق.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Identity Profile Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel-glow p-6 rounded-2xl text-right">
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-800">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-600 to-blue-700 flex items-center justify-center font-extrabold text-2xl text-white shadow-lg shadow-cyan-600/30">
                  ق.ع
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">قادر علی حسینی</h4>
                  <p className="text-xs text-cyan-400 font-medium">مهندس برق • کارشناس پله برقی و آسانسور</p>
                  <p className="text-xs text-slate-400 mt-1">زاده اردبیل • متولد ۹ فروردین</p>
                </div>
              </div>

              {/* Engineering Principles */}
              <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                اصول و خط‌مشی مهندسی
              </h5>

              <ul className="space-y-3.5 text-xs text-slate-300">
                <li className="flex items-center gap-3">
                  <Shield className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span><strong>اولویت نخست، ایمنی کاربر:</strong> پیاده‌سازی سخت‌گیرانه‌ترین چک‌لیست‌های آزمون بار و ترمز.</span>
                </li>
                <li className="flex items-center gap-3">
                  <Wrench className="w-4 h-4 text-amber-400 shrink-0" />
                  <span><strong>انطباق کامل با استاندارد:</strong> مرجعیت استانداردهای EN 115-1 و EN 81-20/50.</span>
                </li>
                <li className="flex items-center gap-3">
                  <Award className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>کاهش مصرف انرژی و استهلاک:</strong> بکارگیری درایوهای احیاکننده و موتورهای پربازده گیرلس.</span>
                </li>
              </ul>
            </div>

            {/* Specialization Highlight Badge */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-950/70 to-slate-900 border border-blue-900/50 text-right">
              <div className="text-xs text-cyan-400 font-bold mb-1">مشاوره، نظارت و بازرسی فنی</div>
              <div className="text-sm text-slate-200">
                ارائه خدمات مهندسی در پروژه‌های مرتفع مسکونی، تجاری، پله‌های برقی پرتردد و آسانسورهای سرعت‌بالا
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
