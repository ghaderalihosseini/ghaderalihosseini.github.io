import React, { useState } from 'react';
import { ArrowUpDown, ShieldCheck, Gauge, Zap, CheckCircle, Cpu, Sliders, AlertTriangle } from 'lucide-react';

export default function ElevatorEngineering() {
  const [activeTab, setActiveTab] = useState(0);

  // Elevator Calculator State
  const [passengers, setPassengers] = useState(8); // persons (600 kg)
  const [speed, setSpeed] = useState(1.6); // m/s
  const [motorType, setMotorType] = useState('gearless'); // gearless vs geared

  // Calculations:
  // Weight = passengers * 75 kg
  // Counterweight balance factor typically 0.45 to 0.5 (45%-50%)
  // Out-of-balance load P_net = Weight * (1 - 0.5) = Weight * 0.5
  // Power P = (P_net * 9.81 * speed) / (1000 * efficiency)
  const capacityKg = passengers * 75;
  const efficiency = motorType === 'gearless' ? 0.88 : 0.65;
  const powerKw = ((capacityKg * 0.5 * 9.81 * speed) / (1000 * efficiency)).toFixed(1);
  const nominalCurrent = (powerKw * 2.1).toFixed(1); // approximate 3-phase 400V current

  const elevatorSystems = [
    {
      id: 0,
      title: 'موتورهای گیرلس مغناطیس دائم (PMSM Gearless)',
      badge: 'فناوری روز دنیا',
      desc: 'انقلابی در صنعت آسانسور؛ موتورهای سنکرون مجهز به آهنرباهای نئودیمیوم دائم بدون نیاز به جعبه‌دنده (گیربکس). با حذف تلفات اصطکاکی، راندمان این موتورها به بیش از ۹۰ درصد رسیده و مصرف برق را تا ۴۰ درصد کاهش می‌دهند. عدم نیاز به روغن‌کاری مداوم، لرزش صفر در کابین و کارکرد کاملاً بی‌صدا از مهم‌ترین شاخصه‌های این فناوری است.',
      specs: [
        'راندمان انرژی رده A (استاندارد VDI 4707)',
        'سیستم ترمز دوبل دیسکی مغناطیسی ایمن',
        'طراحی فشرده ایده‌آل برای آسانسورهای روملس (MRL)',
        'قابلیت راه‌اندازی با اینورترهای پیشرفته با فرکانس متغیر',
      ],
    },
    {
      id: 1,
      title: 'تابلو فرمان‌های هوشمند میکروپروسسوری و درایو VVVF',
      badge: 'اتوماسیون و کنترل',
      desc: 'مغز متفکر آسانسورهای امروزی؛ مجهز به پردازنده‌های ۳۲ بیتی صنعتی و الگوریتم‌های پیشرفته ترافیکی (Full Collective). استفاده از درایو کنترل دور فرکانس متغیر با سیستم فیدبک حلقه بسته (Closed Loop) از انکودرهای دقیق Heidenhain یا EnDat، تضمین‌کننده حرکت نرم، شتاب بدون ضربه و توقف میلی‌متری (Levelling) دقیق در لول طبقات است.',
      specs: [
        'سیستم نجات اضطراری هوشمند (Blackout ARD)',
        'پایش بلادرنگ وضعیت سنسورها و خطاها',
        'کاهش حرارت موتور و حذف شوک‌های استارت و استاپ',
        'پشتیبانی از پروتکل‌های ارتباطی CAN-Bus و اترنت صنعتی',
      ],
    },
    {
      id: 2,
      title: 'مکانیزم‌های ایمنی ضد سقوط (Safety Gear & Governor)',
      badge: 'ایمنی بدون مصالحه',
      desc: 'قلب ایمنی جانی مسافران در استانداردهای EN 81-20 و EN 81-50؛ گاورنر گریز از مرکز مکانیکی پیوسته سرعت حرکت کابین را می‌سنجد. در صورت بروز هرگونه پارگی سیم‌بکسل یا افزایش سرعت به بیش از ۱۱۵٪ حد مجاز، گاورنر قفل شده و مکانیزم پاراشوت تدریجی (Progressive Safety Gear) را فعال می‌کند که فک‌های فولادی پرقدرت آن را به ریل‌های راهنما چفت کرده و کابین را بدون ایجاد ضربه مهلک برای سرنشینان متوقف می‌سازد.',
      specs: [
        'ترمز پاراشوت تدریجی منطبق بر استاندارد ملی ۶۳۰۳',
        'بافرهای هیدرولیکی پلی‌یورتان ته‌چاهک',
        'سنسورهای اضافه بار هوشمند (Overload Sensor)',
        'پرده نوری فوتوسل چند کاناله حساس به مانع در درب‌ها',
      ],
    },
    {
      id: 3,
      title: 'آسانسورهای بدون موتورخانه (MRL) و آسانسورهای هیدرولیک',
      badge: 'معماری و سازه',
      desc: 'در ساختمان‌های مدرن که امکان اختصاص فضای مجزا برای موتورخانه در پشت‌بام وجود ندارد، آسانسورهای MRL با نصب موتور در بالاترین نقطه چاهک یا روی ریل، بالاترین بهره‌وری فضایی را رقم می‌زنند. همچنین برای پروژه‌های با ارتفاع کم و ظرفیت بار سنگین (نظیر پارکینگ‌ها و خودروبرها)، سیستم‌های هیدرولیک مجهز به شیرهای پروپرشنال الکترونیکی بهترین راهکار پایداری و قدرت هستند.',
      specs: [
        'کاهش هزینه‌های عمرانی ساخت موتورخانه',
        'سیستم‌های هیدرولیک مجهز به شیر ایمنی Rupture Valve',
        'سیم‌بکسل‌های ویژه ضدپیچش با روکش‌های محافظ',
        'سازگار با انواع چاهک‌های شیشه‌ای و پانورامیک',
      ],
    },
  ];

  return (
    <section id="elevator" className="py-20 relative bg-slate-950/80 border-t border-slate-800/60">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 text-emerald-400 border border-emerald-800/50 text-xs font-semibold mb-3">
            <ArrowUpDown className="w-3.5 h-3.5" />
            <span>مهندسی آسانسور و سیستم‌های بالابر • تخصص تخصصی مهندس قادر علی حسینی</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            مهندسی نوین <span className="text-gradient">آسانسورهای گیرلس و استانداردهای EN 81</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            آسانسورها شریان‌های ارتباطی عمودی در سازه‌های مدرن هستند. تلفیق الکتروموتورهای سنکرون پربازده، تابلو فرمان‌های VVVF و تجهیزات ایمنی تاییدشده، سفری آرام، بدون لرزش و با حداکثر ایمنی را رقم می‌زند.
          </p>
        </div>

        {/* Technical Systems Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Tab Selector Buttons */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2 text-right">
              بخش‌های اساسی سیستم‌های آسانسور
            </h3>
            {elevatorSystems.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(idx)}
                className={`w-full text-right p-4 rounded-xl border transition-all flex items-center justify-between ${
                  activeTab === idx
                    ? 'bg-slate-800/90 border-emerald-500 shadow-lg shadow-emerald-950/40 translate-x-1'
                    : 'bg-slate-900/60 border-slate-800 hover:bg-slate-850 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="text-xs text-emerald-400 font-medium mb-0.5">{item.badge}</div>
                  <div className="text-sm font-bold text-white">{item.title}</div>
                </div>
                <ArrowUpDown className={`w-5 h-5 transition-transform ${activeTab === idx ? 'text-emerald-400' : 'text-slate-600'}`} />
              </button>
            ))}
          </div>

          {/* Active Tab Content Card */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 md:p-8 rounded-2xl h-full border-emerald-900/40 relative text-right flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-800 text-xs font-bold">
                    {elevatorSystems[activeTab].badge}
                  </span>
                  <Cpu className="w-6 h-6 text-emerald-400" />
                </div>

                <h4 className="text-xl font-bold text-white mb-3">
                  {elevatorSystems[activeTab].title}
                </h4>

                <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
                  {elevatorSystems[activeTab].desc}
                </p>

                <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  شاخصه‌های فنی و استانداردهای مورد نظارت:
                </h5>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {elevatorSystems[activeTab].specs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80 text-xs text-slate-200">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-900/40 text-xs text-emerald-300">
                👨‍💼 <strong>دیدگاه مهندس قادر علی حسینی:</strong> انتخاب صحیح نوع موتور گیرلس، انطباق با استاندارد EN 81-20 و کالیبراسیون دقیق اینورتر درایو، طول عمر قطعات مکانیکی آسانسور را به بیش از دو برابر افزایش می‌دهد.
              </div>
            </div>
          </div>
        </div>

        {/* Live Elevator Power & Capacity Calculator */}
        <div className="glass-panel-glow p-6 md:p-8 rounded-2xl text-right">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-emerald-900/40 text-emerald-400">
              <Sliders className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">
                محاسبه‌گر تخصصی توان و جریان الکتروموتور آسانسور (EN 81)
              </h3>
              <p className="text-xs text-slate-400">
                محاسبه بر مبنای بار نامی کابین، ضریب تعادل وزنه (Overbalance 50%) و راندمان موتور توسط مهندس قادر علی حسینی
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Passenger Capacity */}
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
              <label className="block text-xs text-slate-400 mb-2 font-medium">ظرفیت مسافر (تعداد نفر):</label>
              <div className="grid grid-cols-4 gap-1.5">
                {[6, 8, 10, 13].map((p) => (
                  <button
                    key={p}
                    onClick={() => setPassengers(p)}
                    className={`py-2 rounded-lg text-xs font-mono font-bold transition ${
                      passengers === p ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30' : 'bg-slate-900 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    {p} نفر
                  </button>
                ))}
              </div>
              <span className="text-[11px] text-slate-400 mt-2 block">بار نامی معادل: {capacityKg} کیلوگرم</span>
            </div>

            {/* Nominal Speed */}
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
              <label className="block text-xs text-slate-400 mb-2 font-medium">سرعت نامی حرکت (Speed):</label>
              <div className="flex gap-2">
                {[1.0, 1.6, 2.0].map((s) => (
                  <button
                    key={s}
                    onClick={() => setSpeed(s)}
                    className={`flex-1 py-2 rounded-lg text-xs font-mono font-bold transition ${
                      speed === s ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30' : 'bg-slate-900 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    {s} m/s
                  </button>
                ))}
              </div>
              <span className="text-[11px] text-slate-400 mt-2 block">سرعت ۱.۶ برای ساختمان‌های بالای ۸ طبقه توصیه می‌شود.</span>
            </div>

            {/* Motor Technology */}
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
              <label className="block text-xs text-slate-400 mb-2 font-medium">تکنولوژی موتور آسانسور:</label>
              <div className="flex gap-2">
                {[
                  { id: 'gearless', label: 'گیرلس PMSM' },
                  { id: 'geared', label: 'گیربکس‌دار' },
                ].map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setMotorType(m.id)}
                    className={`flex-1 py-2 rounded-lg text-xs font-bold transition ${
                      motorType === m.id ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30' : 'bg-slate-900 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
              <span className="text-[11px] text-slate-400 mt-2 block">
                {motorType === 'gearless' ? 'راندمان بالا (۸۸٪) و مصرف برق بهینه' : 'راندمان استاندارد (۶۵٪)'}
              </span>
            </div>
          </div>

          {/* Results Display */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 rounded-xl bg-gradient-to-r from-slate-950 to-emerald-950/50 border border-emerald-800/60">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-emerald-300 font-medium">توان نامی الکتروموتور آسانسور:</div>
                <div className="text-2xl font-black text-white font-mono">{powerKw} <span className="text-xs font-normal text-slate-400">کیلووات (kW)</span></div>
              </div>
              <Zap className="w-8 h-8 text-emerald-400" />
            </div>

            <div className="flex items-center justify-between sm:border-r sm:border-slate-800 sm:pr-4">
              <div>
                <div className="text-xs text-cyan-300 font-medium">تخمین جریان مصرفی نامی (سه‌فاز):</div>
                <div className="text-2xl font-black text-white font-mono">{nominalCurrent} <span className="text-xs font-normal text-slate-400">آمپر (A)</span></div>
              </div>
              <Gauge className="w-8 h-8 text-cyan-400" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
