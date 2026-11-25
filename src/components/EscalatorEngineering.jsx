import React, { useState } from 'react';
import { Cpu, Gauge, Wrench, Zap, CheckCircle, Calculator, ChevronLeft } from 'lucide-react';

export default function EscalatorEngineering() {
  const [activeTab, setActiveTab] = useState(0);

  // Interactive Calculator State
  const [calcSpeed, setCalcSpeed] = useState(0.65); // m/s
  const [calcAngle, setCalcAngle] = useState(30); // degrees
  const [calcWidth, setCalcWidth] = useState(1000); // mm

  const theoreticalCapacity = Math.round((3600 * calcSpeed * (calcWidth / 1000) * 1.5) / 0.4);
  const estimatedPower = (calcSpeed * 22 * (calcAngle === 35 ? 1.15 : 1.0)).toFixed(1);

  const escalatorComponents = [
    {
      id: 0,
      title: 'سیستم محرکه و درایو کششی (Traction Drive & Motor)',
      badge: 'الکترومکانیکال',
      desc: 'موتورهای آسنکرون سه‌فاز توان‌بالا مجهز به فلای‌ویل و گیربکس‌های حلزونی یا هلیکال پیشرفته. بهره‌گیری از درایوهای فرکانس متغیر (VFD) برای راه‌اندازی نرم (Soft Start) و کاهش پیک جریان در ساعات اوج بار پله‌های برقی.',
      specs: [
        'توان موتور: ۱۱ تا ۳۰ کیلووات',
        'ضریب بهره‌وری درایو: > ۹۶٪',
        'سیستم ترمز احیاکننده انرژی (Regenerative)',
        'پایش دمای سیم‌پیچ با سنسور PT100',
      ],
    },
    {
      id: 1,
      title: 'زنجیر استپ و هدایت‌کننده‌ها (Step Chain & Track)',
      badge: 'مکانیکال سنگین',
      desc: 'زنجیرهای فولادی آلیاژی سخت‌کاری‌شده با گام ۱۳۳.۳ میلی‌متر جهت تحمل بارهای سنگین مسافران. استفاده از غلتک‌های پلی‌یورتان بی‌صدا و سیستم روغن‌کاری خودکار مجهز به تایمر هوشمند PLC.',
      specs: [
        'تنش گسیختگی: بیش از ۲۶۰ کیلونیوتن',
        'سیستم پایش کشش زنجیر (Broken Chain Contact)',
        'استپ‌های آلومینیوم دایکست یکپارچه',
        'شیارهای ضد لغزش استاندارد EN 115',
      ],
    },
    {
      id: 2,
      title: 'مکانیزم ایمنی ترمز اضطراری (Auxiliary Brake)',
      badge: 'سیستم ایمنی حیاتی',
      desc: 'ترمز مکانیکی-هیدرولیکی مستقل تعبیه‌شده روی شفت اصلی خروجی. در صورت شکستگی زنجیر محرک یا افزایش سرعت غیرمجاز (Overspeed)، این ترمز بدون اتکا به مدار الکتریکی پله را در کسری از ثانیه متوقف می‌کند.',
      specs: [
        'عملکرد تحت گرانش و فنرهای فشاری',
        'حسگر اضافه سرعت گریز از مرکز (Governor)',
        'میکروسوئیچ تشخیص سایش لنت ترمز',
        'فاصله توقف منطبق بر بند ۵.۴ استاندارد EN 115',
      ],
    },
    {
      id: 3,
      title: 'تابلو کنترل PLC و مانیتورینگ آنلاین (Safety Controller)',
      badge: 'اتوماسیون و برق',
      desc: 'مغز متفکر پله برقی؛ پردازنده ایمنی (Safety PLC) جهت بررسی مداوم بیش از ۳۵ مدار سنسوری امنیتی در کسری از میلی‌ثانیه با قابلیت گزارش‌گیری به سیستم مدیریت هوشمند ساختمان (BMS).',
      specs: [
        'سیستم خطایابی هوشمند با نمایشگر Fault Code',
        'پروتکل ارتباطی Modbus / Profinet صنعتی',
        'کنترل حالت هوشمند Eco-Mode در زمان خالی بودن پله',
        'مدار ایمنی رله‌های دو کاناله تفکیک‌شده',
      ],
    },
  ];

  return (
    <section id="escalator" className="py-24 relative">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>مهندسی پله برقی • تخصص مهندس برق قادر علی حسینی</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            تحلیل مهندسی <span className="text-liquid-cyan">پله برقی‌های استاندارد (EN 115)</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-light">
            پله برقی‌ها ترکیب هماهنگ مکانیک سنگین و مدارهای الکترونیک قدرت هستند که نیازمند نظارت دقیق مهندسی و انطباق با پروتکل‌های سخت‌گیرانه ایمنی می‌باشند.
          </p>
        </div>

        {/* Interactive Component Tabs in Liquid Glass */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Tab Buttons */}
          <div className="lg:col-span-5 space-y-3">
            {escalatorComponents.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(idx)}
                className={`w-full text-right p-4 rounded-2xl border transition-all flex items-center justify-between ${
                  activeTab === idx
                    ? 'bg-white/10 border-sky-500/50 shadow-lg shadow-sky-500/15 translate-x-1'
                    : 'bg-white/5 border-white/5 hover:bg-white/10'
                }`}
              >
                <div>
                  <div className="text-xs text-sky-400 font-medium mb-0.5">{item.badge}</div>
                  <div className="text-sm font-bold text-white">{item.title}</div>
                </div>
                <ChevronLeft className={`w-4 h-4 transition-transform ${activeTab === idx ? 'text-sky-400 -translate-x-1' : 'text-slate-500'}`} />
              </button>
            ))}
          </div>

          {/* Active Tab Content Card */}
          <div className="lg:col-span-7">
            <div className="liquid-glass p-6 sm:p-8 rounded-3xl h-full flex flex-col justify-between text-right">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/30 text-xs font-bold">
                    {escalatorComponents[activeTab].badge}
                  </span>
                  <Wrench className="w-5 h-5 text-sky-400" />
                </div>

                <h4 className="text-lg sm:text-xl font-bold text-white mb-3">
                  {escalatorComponents[activeTab].title}
                </h4>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-light">
                  {escalatorComponents[activeTab].desc}
                </p>

                <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  مشخصات فنی و استانداردهای مورد نظارت:
                </h5>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {escalatorComponents[activeTab].specs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-200">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-sky-500/10 border border-sky-500/20 text-xs text-sky-300 leading-relaxed font-light">
                👨‍💼 <strong>دیدگاه مهندس قادر علی حسینی:</strong> بازرسی دوره‌ای این بخش بر اساس چک‌لیست EN 115-1 ضامن جلوگیری از سایش زودرس و ارتقای ایمنی پایدار سرنشینان در پله‌های برقی است.
              </div>
            </div>
          </div>
        </div>

        {/* Live Engineering Calculator for Escalators */}
        <div className="liquid-glass p-6 sm:p-8 rounded-3xl text-right">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-2xl bg-sky-500/20 text-sky-400">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                محاسبه‌گر زنده ظرفیت جابجایی پله برقی (استاندارد EN 115)
              </h3>
              <p className="text-xs text-slate-400 font-light">
                تخمین توان نامی درایو و ظرفیت جابجایی مسافر توسط مهندس قادر علی حسینی
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            {/* Speed Input */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
              <label className="block text-xs text-slate-400 mb-2 font-medium">سرعت خطی پله برقی (v):</label>
              <div className="flex gap-2">
                {[0.5, 0.65, 0.75].map((s) => (
                  <button
                    key={s}
                    onClick={() => setCalcSpeed(s)}
                    className={`flex-1 py-2 rounded-xl text-xs font-mono font-bold transition ${
                      calcSpeed === s ? 'bg-sky-500 text-slate-950 shadow-md shadow-sky-500/30' : 'bg-white/5 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    {s} m/s
                  </button>
                ))}
              </div>
            </div>

            {/* Incline Angle */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
              <label className="block text-xs text-slate-400 mb-2 font-medium">زاویه شیب پله (Incline):</label>
              <div className="flex gap-2">
                {[30, 35].map((a) => (
                  <button
                    key={a}
                    onClick={() => setCalcAngle(a)}
                    className={`flex-1 py-2 rounded-xl text-xs font-bold transition ${
                      calcAngle === a ? 'bg-sky-500 text-slate-950 shadow-md shadow-sky-500/30' : 'bg-white/5 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    {a} درجه
                  </button>
                ))}
              </div>
            </div>

            {/* Step Width */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
              <label className="block text-xs text-slate-400 mb-2 font-medium">عرض مفید استپ (Step Width):</label>
              <div className="flex gap-2">
                {[800, 1000].map((w) => (
                  <button
                    key={w}
                    onClick={() => setCalcWidth(w)}
                    className={`flex-1 py-2 rounded-xl text-xs font-mono font-bold transition ${
                      calcWidth === w ? 'bg-sky-500 text-slate-950 shadow-md shadow-sky-500/30' : 'bg-white/5 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    {w} mm
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Display */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 rounded-2xl bg-gradient-to-r from-sky-500/10 to-indigo-500/10 border border-sky-500/20">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-sky-300 font-medium">ظرفیت اسمی جابجایی مسافر:</div>
                <div className="text-2xl font-black text-white font-mono">{theoreticalCapacity.toLocaleString('fa-IR')} <span className="text-xs font-normal text-slate-400">نفر/ساعت</span></div>
              </div>
              <Gauge className="w-7 h-7 text-sky-400" />
            </div>

            <div className="flex items-center justify-between sm:border-r sm:border-white/10 sm:pr-4">
              <div>
                <div className="text-xs text-emerald-300 font-medium">تخمین توان نامی درایو:</div>
                <div className="text-2xl font-black text-white font-mono">{estimatedPower} <span className="text-xs font-normal text-slate-400">kW</span></div>
              </div>
              <Zap className="w-7 h-7 text-emerald-400" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
