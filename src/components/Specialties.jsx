import React from 'react';
import { Zap, ArrowUpCircle, ChevronsUp, CheckCircle, ShieldAlert, Cpu, Gauge, Wrench } from 'lucide-react';

export const Specialties = () => {
  const specialties = [
    {
      id: 'elevators',
      title: 'سیستم‌های پیشرفته آسانسور',
      subtitle: 'Traction & Hydraulic Elevator Engineering',
      icon: ArrowUpCircle,
      color: 'from-cyan-500/20 to-blue-500/10',
      badge: 'طراحی، محاسبات و بازرسی',
      badgeColor: 'border-cyan-500/40 text-cyan-300',
      description: 'طراحی، نصب و مهندسی معکوس انواع آسانسورهای مسافربر، بیمارستانی، خودروبر و پانوراما با تمرکز بر بهره‌وری انرژی و نرمی حرکت.',
      features: [
        'محاسبات دقیق ترافیک ساختمانی و ظرفیت جابجایی مسافر',
        'طراحی و راه‌اندازی آسانسورهای گیرلس (Gearless) پرسرعت و موتورخانه روملس (MRL)',
        'سیستم‌های هیدرولیک مدرن با شیرهای پروپوشنال و ایمنی بالا',
        'پیاده‌سازی استانداردهای ملی و بین‌المللی EN 81-20 و EN 81-50',
        'تنظیم و کالیبراسیون درایوهای کنترل سرعت (VVVF) جهت توقف هم‌سطح میلی‌متری'
      ]
    },
    {
      id: 'escalators',
      title: 'پله‌برقی و پیاده‌رو متحرک',
      subtitle: 'Escalators & Moving Walks Engineering',
      icon: ChevronsUp,
      color: 'from-amber-500/20 to-orange-500/10',
      badge: 'پروژه‌های پرتردد و مترو',
      badgeColor: 'border-amber-500/40 text-amber-300',
      description: 'مهندسی، نگهداری و اورهال تخصصی پله‌برقی‌های اماکن تجاری پرتردد، پایانه‌های مسافربری و ایستگاه‌های مترو با بالاترین ضریب اطمینان.',
      features: [
        'طراحی و تحلیل سازه و شاسی (Truss) در زوایای ۳۰ و ۳۵ درجه',
        'سیستم‌های محرکه سنگین (Heavy Duty Drives) با بازدهی مکانیکی بالا',
        'کالیبراسیون دقیق سیستم‌های ترمز کمکی و اصلی (Auxiliary & Service Brakes)',
        'پایش عملکرد سنسورهای ایمنی استپ‌ها، هندریل و سوئیچ‌های شانه (Comb Plate)',
        'پیاده‌سازی استانداردهای EN 115 برای تأمین ایمنی صددرصدی عابرین'
      ]
    },
    {
      id: 'electrical',
      title: 'مهندسی برق و اتوماسیون صنعتی',
      subtitle: 'Electrical Power & Industrial Automation',
      icon: Zap,
      color: 'from-emerald-500/20 to-teal-500/10',
      badge: 'قدرت، کنترل و حفاظت',
      badgeColor: 'border-emerald-500/40 text-emerald-300',
      description: 'طراحی و عیب‌یابی سیستم‌های توزیع برق، تابلوهای فرمان میکروپروسسوری، سیستم‌های ارتینگ و مدارات حفاظت کاتدی و اضافه بار.',
      features: [
        'طراحی تابلوهای توزیع اصلی (MDP) و فرمان موتورهای سه فاز',
        'سیستم‌های نجات اضطراری هوشمند (Blackout UPS / ARD) هنگام قطع برق شهر',
        'اصلاح ضریب توان و حذف هارمونیک‌ها توسط فیلترهای اکتیو و پسیو',
        'اجرای چاه ارت مهندسی و هم‌بندی ارت حفاظتی طبق مبحث ۱۳ مقررات ملی',
        'برنامه‌نویسی و عیب‌یابی بردهای کنترل صنعتی و درایوهای اینورتر'
      ]
    }
  ];

  return (
    <section id="specialties" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-panel border border-white/10 text-xs font-medium text-slate-300 mb-3">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>حوزه‌های فعالیت مهندسی</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">
            تخصص‌های فنی و راهکارهای اجرایی
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            ترکیب دانش آکادمیک برق با سال‌ها تجربه میدانی در پیچیده‌ترین پروژه‌های بالابر، پله‌برقی و سیستم‌های کنترل صنعتی.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {specialties.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="glass-panel glass-panel-interactive rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group"
              >
                {/* Subtle gradient glow in card */}
                <div className={`absolute -top-16 -right-16 w-36 h-36 rounded-full bg-gradient-to-br ${item.color} blur-2xl opacity-50 group-hover:opacity-80 transition-opacity`} />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl glass-panel border border-white/15 flex items-center justify-center text-white shadow-inner">
                      <Icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${item.badgeColor} bg-black/40 backdrop-blur-md`}>
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-xs text-slate-400 font-mono mb-4" dir="ltr">
                    {item.subtitle}
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <div className="space-y-3 pt-4 border-t border-white/5">
                    {item.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-between w-full text-xs font-semibold text-slate-300 hover:text-cyan-300 transition-colors py-1"
                  >
                    <span>استعلام مشاوره فنی این بخش</span>
                    <span className="text-cyan-400">&larr;</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
