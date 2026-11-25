import React, { useState } from 'react';
import { ArrowUpDown, ShieldCheck, Gauge, Zap, CheckCircle, Cpu, Sliders } from 'lucide-react';

export default function ElevatorEngineering() {
  const [activeTab, setActiveTab] = useState(0);

  // Elevator Calculator State
  const [passengers, setPassengers] = useState(8); // persons (600 kg)
  const [speed, setSpeed] = useState(1.6); // m/s
  const [motorType, setMotorType] = useState('gearless');

  const capacityKg = passengers * 75;
  const efficiency = motorType === 'gearless' ? 0.88 : 0.65;
  const powerKw = ((capacityKg * 0.5 * 9.81 * speed) / (1000 * efficiency)).toFixed(1);
  const nominalCurrent = (powerKw * 2.1).toFixed(1);

  const elevatorSystems = [
    {
      id: 0,
      title: 'موتورهای گیرلس مغناطیس دائم (PMSM Gearless)',
      badge: 'فناوری روز دنیا',
      desc: 'انقلابی در صنعت آسانسور؛ موتورهای سنکرون مجهز به آهنرباهای نئودیمیوم دائم بدون نیاز به جعبه‌دنده (گیربکس). با حذف تلفات اصطکاکی، راندمان این موتورها به بیش از ۹۰ درصد رسیده و مصرف برق را تا ۴۰ درصد کاهش می‌دهند. عدم نیاز به روغن‌کاری مداوم، لرزش صفر در کابین و کارکرد بی‌صدا از مهم‌ترین شاخصه‌های این فناوری است.',
      specs: [
        'راندمان انرژی رده A (استاندارد VDI 4707)',
        'سیستم ترمز دوبل دیسکی مغناطیسی ایمن',
        'طراحی فشرده ایده‌آل برای آسانسورهای روملس (MRL)',
        'راه‌اندازی با اینورترهای پیشرفته با فرکانس متغیر',
      ],
    },
    {
      id: 1,
      title: 'تابلو فرمان‌های هوشمند میکروپروسسوری و درایو VVVF',
      badge: 'اتوماسیون و کنترل',
      desc: 'مغز متفکر آسانسورهای امروزی؛ مجهز به پردازنده‌های ۳۲ بیتی صنعتی و الگوریتم‌های پیشرفته ترافیکی. استفاده از درایو کنترل دور فرکانس متغیر با فیدبک حلقه بسته (Closed Loop) از انکودرهای دقیق دیجیتال، تضمین‌کننده حرکت نرم، شتاب بدون ضربه و توقف میلی‌متری (Levelling) دقیق در لول طبقات است.',
      specs: [
        'سیستم نجات اضطراری هوشمند (Blackout ARD)',
        'پایش بلادرنگ وضعیت سنسورها و خطاها',
        'کاهش حرارت موتور و حذف شوک‌های استارت و استاپ',
        'پشتیبانی از پروتکل‌های ارتباطی CAN-Bus و شبکه صنعتی',
      ],
    },
    {
      id: 2,
      title: 'مکانیزم‌های ایمنی ضد سقوط (Safety Gear & Governor)',
      badge: 'ایمنی بدون مصالحه',
      desc: 'قلب ایمنی جانی مسافران در استانداردهای EN 81-20 و EN 81-50؛ گاورنر گریز از مرکز مکانیکی پیوسته سرعت حرکت کابین را می‌سنجد. در صورت بروز هرگونه پارگی سیم‌بکسل یا افزایش سرعت به بیش از ۱۱۵٪ حد مجاز، گاورنر قفل شده و مکانیزم پاراشوت تدریجی (Progressive Safety Gear) را فعال می‌کند تا کابین را بدون ضربه متوقف سازد.',
      specs: [
        'ترمز پاراشوت تدریجی منطبق بر استاندارد ملی ۶۳۰۳',
        'بافرهای هیدرولیکی پلی‌یورتان ته‌چاهک',
        'سنسورهای اضافه بار هوشمند (Overload Sensor)',
        'پرده نوری فوتوسل چند کاناله حساس به مانع در درب‌ها',
      ],
    },
    {
      id: 3,
      title: 'آسانسورهای بدون موتورخانه (MRL) و هیدرولیک',
      badge: 'معماری و سازه',
      desc: 'در پروژه‌های مدرن که امکان ساخت موتورخانه در پشت‌بام وجود ندارد، آسانسورهای MRL با نصب موتور در بالاترین نقطه چاهک یا روی ریل، بالاترین بهره‌وری فضایی را رقم می‌زنند. همچنین برای پروژه‌های با ارتفاع کم و ظرفیت بار سنگین، سیستم‌های هیدرولیک مجهز به شیرهای پروپرشنال بهترین راهکار پایداری و قدرت هستند.',
      specs: [
        'کاهش هزینه‌های عمرانی ساخت موتورخانه',
        'سیستم‌های هیدرولیک مجهز به شیر ایمنی Rupture Valve',
        'سیم‌بکسل‌های ویژه ضدپیچش با روکش‌های محافظ',
        'سازگار با انواع چاهک‌های شیشه‌ای و پانورامیک',
      ],
    },
  ];

  return (
    <section id="elevator" className="py-24 relative">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold mb-3">
            <ArrowUpDown className="w-3.5 h-3.5" />
            <span>مهندسی آسانسور • تخصص مهندس برق قادر علی حسینی</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            مهندسی نوین <span className="text-liquid-emerald">آسانسورهای گیرلس و استاندارد EN 81</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-light">
            تلفیق الکتروموتورهای سنکرون پربازده، تابلو فرمان‌های VVVF و تجهیزات ایمنی تاییدشده، سفری آرام، بدون لرزش و با حداکثر ایمنی را رقم می‌زند.
          </p>
        </div>

        {/* Technical Systems Tabs in Liquid Glass */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Tab Selector Buttons */}
          <div className="lg:col-span-5 space-y-3">
            {elevatorSystems.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(idx)}
                className={`w-full text-right p-4 rounded-2xl border transition-all flex items-center justify-between ${
                  activeTab === idx
                    ? 'bg-white/10 border-emerald-500/50 shadow-lg shadow-emerald-500/15 translate-x-1'
                    : 'bg-white/5 border-white/5 hover:bg-white/10'
                }`}
              >
                <div>
                  <div className="text-xs text-emerald-400 font-medium mb-0.5">{item.badge}</div>
                  <div className="text-sm font-bold text-white">{item.title}</div>
                </div>
                <ArrowUpDown className={`w-4 h-4 transition-transform ${activeTab === idx ? 'text-emerald-400' : 'text-slate-500'}`} />
              </button>
            ))}
          </div>

          {/* Active Tab Content Card */}
          <div className="lg:col-span-7">
            <div className="liquid-glass p-6 sm:p-8 rounded-3xl h-full flex flex-col justify-between text-right">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold">
                    {elevatorSystems[activeTab].badge}
                  </span>
                  <Cpu className="w-5 h-5 text-emerald-400" />
                </div>

                <h4 className="text-lg sm:text-xl font-bold text-white mb-3">
                  {elevatorSystems[activeTab].title}
                </h4>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-light">
                  {elevatorSystems[activeTab].desc}
                </p>

                <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  شاخصه‌های فنی و استانداردهای مورد نظارت:
                </h5>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {elevatorSystems[activeTab].specs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-200">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300 leading-relaxed font-light">
                👨‍💼 <strong>دیدگاه مهندس قادر علی حسینی:</strong> انتخاب صحیح نوع موتور گیرلس، انطباق با استاندارد EN 81-20 و کالیبراسیون دقیق درایو اینورتر، عمر مفید قطعات مکانیکی را به بیش از دو برابر ارتقا می‌دهد.
              </div>
            </div>
          </div>
        </div>

        {/* Live Elevator Power Calculator in Liquid Glass */}
        <div className="liquid-glass p-6 sm:p-8 rounded-3xl text-right">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-2xl bg-emerald-500/20 text-emerald-400">
              <Sliders className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                محاسبه‌گر تخصصی توان و جریان الکتروموتور آسانسور (EN 81)
              </h3>
              <p className="text-xs text-slate-400 font-light">
                محاسبه بر مبنای بار نامی کابین و ضریب تعادل وزنه توسط مهندس قادر علی حسینی
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            {/* Passenger Capacity */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
              <label className="block text-xs text-slate-400 mb-2 font-medium">ظرفیت مسافر (نفر):</label>
              <div className="grid grid-cols-4 gap-1.5">
                {[6, 8, 10, 13].map((p) => (
                  <button
                    key={p}
                    onClick={() => setPassengers(p)}
                    className={`py-2 rounded-xl text-xs font-mono font-bold transition ${
                      passengers === p ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/30' : 'bg-white/5 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    {p} نفر
                  </button>
                ))}
              </div>
              <span className="text-[11px] text-slate-400 mt-2 block font-light">بار معادل: {capacityKg} کیلوگرم</span>
            </div>

            {/* Nominal Speed */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
              <label className="block text-xs text-slate-400 mb-2 font-medium">سرعت نامی حرکت (Speed):</label>
              <div className="flex gap-2">
                {[1.0, 1.6, 2.0].map((s) => (
                  <button
                    key={s}
                    onClick={() => setSpeed(s)}
                    className={`flex-1 py-2 rounded-xl text-xs font-mono font-bold transition ${
                      speed === s ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/30' : 'bg-white/5 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    {s} m/s
                  </button>
                ))}
              </div>
              <span className="text-[11px] text-slate-400 mt-2 block font-light">مناسب برای سازه‌های مسکونی و تجاری</span>
            </div>

            {/* Motor Technology */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
              <label className="block text-xs text-slate-400 mb-2 font-medium">تکنولوژی موتور آسانسور:</label>
              <div className="flex gap-2">
                {[
                  { id: 'gearless', label: 'گیرلس PMSM' },
                  { id: 'geared', label: 'گیربکس‌دار' },
                ].map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setMotorType(m.id)}
                    className={`flex-1 py-2 rounded-xl text-xs font-bold transition ${
                      motorType === m.id ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/30' : 'bg-white/5 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
              <span className="text-[11px] text-slate-400 mt-2 block font-light">
                {motorType === 'gearless' ? 'راندمان بالا (۸۸٪)' : 'راندمان استاندارد (۶۵٪)'}
              </span>
            </div>
          </div>

          {/* Results Display */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-emerald-300 font-medium">توان نامی الکتروموتور:</div>
                <div className="text-2xl font-black text-white font-mono">{powerKw} <span className="text-xs font-normal text-slate-400">kW</span></div>
              </div>
              <Zap className="w-7 h-7 text-emerald-400" />
            </div>

            <div className="flex items-center justify-between sm:border-r sm:border-white/10 sm:pr-4">
              <div>
                <div className="text-xs text-sky-300 font-medium">تخمین جریان مصرفی نامی:</div>
                <div className="text-2xl font-black text-white font-mono">{nominalCurrent} <span className="text-xs font-normal text-slate-400">آمپر (A)</span></div>
              </div>
              <Gauge className="w-7 h-7 text-sky-400" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
