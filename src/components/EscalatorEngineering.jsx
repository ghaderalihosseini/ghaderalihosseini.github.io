import React, { useState } from 'react';
import { Cpu, ShieldAlert, Gauge, Wrench, Zap, CheckCircle, Calculator, ChevronLeft } from 'lucide-react';

export default function EscalatorEngineering() {
  const [activeTab, setActiveTab] = useState(0);

  // Interactive Calculator State
  const [calcSpeed, setCalcSpeed] = useState(0.65); // m/s
  const [calcAngle, setCalcAngle] = useState(30); // degrees
  const [calcWidth, setCalcWidth] = useState(1000); // mm

  // Formula for passenger capacity based on EN 115:
  const theoreticalCapacity = Math.round((3600 * calcSpeed * (calcWidth / 1000) * 1.5) / 0.4);
  const estimatedPower = (calcSpeed * 22 * (calcAngle === 35 ? 1.15 : 1.0)).toFixed(1);

  const escalatorComponents = [
    {
      id: 0,
      title: 'سیستم محرکه و درایو کششی (Traction Drive & Motor)',
      badge: 'الکترومکانیکال',
      desc: 'موتورهای آسنکرون سه‌فاز توان‌بالا مجهز به فلای‌ویل و گیربکس‌های حلزونی یا هلیکال پیشرفته. بهره‌گیری از درایوهای فرکانس متغیر (VFD) برای راه‌اندازی نرم (Soft Start) و کاهش پیک جریان در ساعات اوج بار پله‌های برقی تجاری و پرتردد.',
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
      desc: 'زنجیرهای فولادی آلیاژی سخت‌کاری‌شده با گام ۱۳۳.۳ میلی‌متر جهت تحمل بارهای فوق‌العاده سنگین مسافران. استفاده از غلتک‌های پلی‌یورتان بی‌صدا و سیستم روغن‌کاری خودکار مجهز به تایمر هوشمند PLC.',
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
      desc: 'مغز متفکر پله برقی؛ پردازنده ایمنی (Safety PLC) جهت بررسی مداوم بیش از ۳۵ مدار سنسوری امنیتی در کسری از میلی‌ثانیه. قابلیت گزارش‌گیری آنلاین به اتاق کنترل و سیستم مدیریت ساختمان (BMS).',
      specs: [
        'سیستم خطایابی هوشمند با نمایشگر Fault Code',
        'پروتکل ارتباطی Modbus / Profinet صنعتی',
        'کنترل حالت هوشمند Eco-Mode در زمان خالی بودن پله',
        'مدار ایمنی رله‌های دو کاناله تفکیک‌شده',
      ],
    },
  ];

  return (
    <section id="escalator" className="py-20 relative bg-slate-900/40">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 text-cyan-400 border border-cyan-800/50 text-xs font-semibold mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>مهندسی پله برقی • تخصص مهندس برق قادر علی حسینی</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            تحلیل مهندسی <span className="text-gradient">پله برقی‌های استاندارد (EN 115)</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            پله برقی‌ها پیچیده‌ترین ترکیب هماهنگ مکانیک سنگین و مدارهای الکترونیک قدرت هستند که نیازمند نظارت دقیق مهندسی و انطباق با پروتکل‌های سخت‌گیرانه ایمنی می‌باشند.
          </p>
        </div>

        {/* Interactive Component Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Tab Buttons */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2 text-right">
              اجزای کلیدی مکانیزم پله برقی
            </h3>
            {escalatorComponents.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(idx)}
                className={`w-full text-right p-4 rounded-xl border transition-all flex items-center justify-between ${
                  activeTab === idx
                    ? 'bg-slate-800/90 border-cyan-500 shadow-lg shadow-cyan-950/40 translate-x-1'
                    : 'bg-slate-900/60 border-slate-800 hover:bg-slate-850 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="text-xs text-cyan-400 font-medium mb-0.5">{item.badge}</div>
                  <div className="text-sm font-bold text-white">{item.title}</div>
                </div>
                <ChevronLeft className={`w-5 h-5 transition-transform ${activeTab === idx ? 'text-cyan-400 -translate-x-1' : 'text-slate-600'}`} />
              </button>
            ))}
          </div>

          {/* Active Tab Content Card */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 md:p-8 rounded-2xl h-full border-cyan-900/40 relative text-right flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-800 text-xs font-bold">
                    {escalatorComponents[activeTab].badge}
                  </span>
                  <Wrench className="w-6 h-6 text-cyan-400" />
                </div>

                <h4 className="text-xl font-bold text-white mb-3">
                  {escalatorComponents[activeTab].title}
                </h4>

                <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
                  {escalatorComponents[activeTab].desc}
                </p>

                <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  مشخصات فنی و استانداردهای مورد نظارت:
                </h5>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {escalatorComponents[activeTab].specs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80 text-xs text-slate-200">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-900/40 text-xs text-cyan-300">
                👨‍💼 <strong>یادداشت مهندس قادر علی حسینی:</strong> بازرسی دوره‌ای این بخش بر اساس چک‌لیست EN 115-1 ضامن جلوگیری از سایش زودرس و ارتقای ایمنی سرنشینان در پله‌های برقی است.
              </div>
            </div>
          </div>
        </div>

        {/* Live Engineering Calculator for Escalators */}
        <div className="glass-panel-glow p-6 md:p-8 rounded-2xl text-right">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-cyan-900/40 text-cyan-400">
              <Calculator className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">
                محاسبه‌گر زنده مهندسی ظرفیت جابجایی پله برقی (استاندارد EN 115)
              </h3>
              <p className="text-xs text-slate-400">
                طراحی شده توسط مهندس قادر علی حسینی برای تخمین توان و ظرفیت نامی جابجایی مسافر
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Speed Input */}
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
              <label className="block text-xs text-slate-400 mb-2 font-medium">سرعت خطی پله برقی (v):</label>
              <div className="flex gap-2">
                {[0.5, 0.65, 0.75].map((s) => (
                  <button
                    key={s}
                    onClick={() => setCalcSpeed(s)}
                    className={`flex-1 py-2 rounded-lg text-xs font-mono font-bold transition ${
                      calcSpeed === s ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/30' : 'bg-slate-900 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    {s} m/s
                  </button>
                ))}
              </div>
              <span className="text-[11px] text-slate-400 mt-2 block">سرعت استاندارد در مراکز پرتردد معمولاً 0.65 متر بر ثانیه است.</span>
            </div>

            {/* Incline Angle */}
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
              <label className="block text-xs text-slate-400 mb-2 font-medium">زاویه شیب پله (Incline):</label>
              <div className="flex gap-2">
                {[30, 35].map((a) => (
                  <button
                    key={a}
                    onClick={() => setCalcAngle(a)}
                    className={`flex-1 py-2 rounded-lg text-xs font-mono font-bold transition ${
                      calcAngle === a ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/30' : 'bg-slate-900 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    {a} درجه
                  </button>
                ))}
              </div>
              <span className="text-[11px] text-slate-400 mt-2 block">حداکثر زاویه مجاز در ارتفاع‌های بالای ۶ متر، ۳۰ درجه است.</span>
            </div>

            {/* Step Width */}
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
              <label className="block text-xs text-slate-400 mb-2 font-medium">عرض مفید استپ (Step Width):</label>
              <div className="flex gap-2">
                {[800, 1000].map((w) => (
                  <button
                    key={w}
                    onClick={() => setCalcWidth(w)}
                    className={`flex-1 py-2 rounded-lg text-xs font-mono font-bold transition ${
                      calcWidth === w ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/30' : 'bg-slate-900 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    {w} mm
                  </button>
                ))}
              </div>
              <span className="text-[11px] text-slate-400 mt-2 block">عرض ۱۰۰۰ میلیمتر استاندارد عبور دو مسافر همزمان است.</span>
            </div>
          </div>

          {/* Results Display */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 rounded-xl bg-gradient-to-r from-slate-950 to-blue-950/60 border border-cyan-800/60">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-cyan-300 font-medium">ظرفیت اسمی جابجایی مسافر:</div>
                <div className="text-2xl font-black text-white font-mono">{theoreticalCapacity.toLocaleString('fa-IR')} <span className="text-xs font-normal text-slate-400">نفر در ساعت</span></div>
              </div>
              <Gauge className="w-8 h-8 text-cyan-400" />
            </div>

            <div className="flex items-center justify-between sm:border-r sm:border-slate-800 sm:pr-4">
              <div>
                <div className="text-xs text-emerald-300 font-medium">تخمین توان نامی درایو الکتریکی:</div>
                <div className="text-2xl font-black text-white font-mono">{estimatedPower} <span className="text-xs font-normal text-slate-400">کیلووات (kW)</span></div>
              </div>
              <Zap className="w-8 h-8 text-emerald-400" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
