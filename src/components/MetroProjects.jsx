import React from 'react';
import { Train, CheckCircle2, Shield, TrendingUp, Layers, Clock } from 'lucide-react';

export default function MetroProjects() {
  const projects = [
    {
      title: 'اورهال و مدرنیزاسیون پله‌های برقی عمیق ایستگاه‌های تقاطعی',
      location: 'مترو تهران - خطوط ۱، ۲، ۳ و ۴',
      highlight: 'کاهش ۴۵ درصدی زمان خرابی',
      desc: 'اجرای پروژه پایش جامع، تعویض استپ‌چین‌های فرسوده و نصب سنسورهای هوشمند تشخیص لرزش روی شفت‌های اصلی پله برقی‌های با ارتفاع جابجایی بالای ۱۲ متر در ایستگاه‌های پرتردد مانند تئاتر شهر و میدان ولیعصر.',
      tags: ['اورهال مکانیکال', 'استاندارد EN 115', 'مهندسی برق مترو'],
    },
    {
      title: 'پیاده‌سازی درایوهای هوشمند VFD با ترمز احیاکننده انرژی',
      location: 'ناوگان پله برقی خطوط ۳ و ۷',
      highlight: 'صرفه‌جویی ۳۰٪ مصرف برق',
      desc: 'جایگزینی استارترهای سنتی با اینورترهای مدرن جهت راه‌اندازی نرم و بدون تنش مکانیکی و بازگرداندن انرژی ناشی از بار مسافران رو به پایین به شبکه برق داخلی ایستگاه.',
      tags: ['درایو VFD', 'صرفه‌جویی انرژی', 'کنترل صنعتی PLC'],
    },
    {
      title: 'طراحی چک‌لیست بازرسی و تست دوره‌ای ترمزهای اضطراری (Auxiliary Brake)',
      location: 'کلیه ایستگاه‌های زیرزمینی مترو تهران',
      highlight: 'شاخص ایمنی ۱۰۰٪ در تست بار',
      desc: 'تدوین دستورالعمل‌های فنی دقیق جهت کالیبراسیون سنسورهای سرعت غیرمجاز (Overspeed) و تست دینامیکی ترمزهای کمکی تحت بار شبیه‌سازی‌شده مسافر، جهت اطمینان از عملکرد بدون وقفه در مواقع قطع برق ناگهانی.',
      tags: ['ایمنی مسافر', 'تست استاتیک و دینامیک', 'استاندارد ملی'],
    },
    {
      title: 'سیستم پایش وضعیت و خطایابی از راه دور (Condition Monitoring)',
      location: 'اتاق فرمان و دیسپاچینگ ایستگاه‌ها',
      highlight: 'پایش بلادرنگ بیش از ۵۰ پله برقی',
      desc: 'اتصال تابلوهای فرمان محلی به شبکه اترنت صنعتی جهت رصد لحظه‌ای فالت‌های الکتریکی، دمای موتورها و وضعیت میکروسوئیچ‌های ایمنی شانه و هندریل.',
      tags: ['SCADA', 'پایش وضعیت', 'شبکه‌های صنعتی'],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-950/80 relative border-t border-slate-800/60">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 text-emerald-400 border border-emerald-800/50 text-xs font-semibold mb-3">
            <Train className="w-3.5 h-3.5" />
            <span>سوابق و دستاوردهای میدانی در متروی تهران</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            پروژه‌ها و کارنامه مهندسی <span className="text-gradient">قادر علی حسینی</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            مروری بر پروژه‌های اجرایی، اورهال‌های اساسی و ارتقای سطح ایمنی پله‌های برقی در شریان‌های زیرزمینی پایتخت.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-right">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="card-3d glass-panel p-6 md:p-8 rounded-2xl flex flex-col justify-between border-slate-800 hover:border-cyan-500/50"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs text-cyan-400 font-bold flex items-center gap-1.5">
                    <Train className="w-3.5 h-3.5" />
                    {proj.location}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-800/60 text-[11px] font-semibold">
                    {proj.highlight}
                  </span>
                </div>

                <h3 className="text-lg md:text-xl font-bold text-white mb-3 leading-snug">
                  {proj.title}
                </h3>

                <p className="text-slate-300 text-xs md:text-sm leading-relaxed mb-6">
                  {proj.desc}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
                {proj.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-lg bg-slate-900 text-slate-400 border border-slate-800 text-[11px]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Metrics Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-blue-950/40 via-slate-900 to-cyan-950/40 border border-slate-800 text-right grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <div className="text-3xl font-extrabold text-white font-mono">+۱۵</div>
            <div className="text-xs text-slate-400 mt-1">ایستگاه تحت نظارت فنی</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-cyan-400 font-mono">+۵۰۰</div>
            <div className="text-xs text-slate-400 mt-1">ساعت بازرسی ایمنی EN 115</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-emerald-400 font-mono">صفر</div>
            <div className="text-xs text-slate-400 mt-1">حادثه ناشی از نقص ترمز</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-amber-400 font-mono">۲۴/۷</div>
            <div className="text-xs text-slate-400 mt-1">پشتیبانی و کشیک اضطراری</div>
          </div>
        </div>

      </div>
    </section>
  );
}
