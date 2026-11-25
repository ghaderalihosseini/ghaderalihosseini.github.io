import React, { useState } from 'react';
import { BookOpen, Calendar, Clock, ChevronRight, Tag, ArrowUpRight, Flame } from 'lucide-react';

export const BlogSection = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const posts = [
    {
      id: 1,
      title: 'علل تکان‌های ناگهانی آسانسور و نحوه کالیبراسیون درایو VVVF',
      category: 'آسانسور',
      categoryColor: 'text-cyan-400 border-cyan-500/30',
      date: '۱۰ آذر ۱۴۰۳',
      readTime: '۵ دقیقه مطالعه',
      summary: 'بررسی اختلالات ناشی از تنظیم نادرست ضرایب P و I در درایوهای آسانسوری و راهکارهای نرم‌افزاری جهت دستیابی به استارت و استپ کاملاً نرم و بی‌صدا.',
      fullContent: `
در سیستم‌های آسانسور کششی، کیفیت سواری (Ride Quality) مستقیماً به تنظیمات دقیق اینورتر درایو و انکودر وابسته است. زمانی که مسافر احساس لگد یا لرزش در شروع حرکت یا توقف دارد، معمولاً ۳ عامل اصلی وجود دارد:
۱. باز شدن پیش از موعد مگنت ترمز مکانیکی پیش از آنکه موتور گشتاور لازم را ایجاد کند (عدم هماهنگی ترمز با جریان استارت).
۲. تنظیم نامناسب منحنی S-Curve در مراحل Acceleration و Deceleration درایو.
۳. لقی در فک‌های ترمز یا کوپلینگ شفت موتور به گیربکس/فلکه کشش.

با اعمال فیدبک مناسب از لودسل (Weight Sensor) و تنظیم پیش‌گشتاور (Pre-torque) در درایو، این شوک مکانیکی به طور ۱۰۰٪ خنثی می‌شود.
      `
    },
    {
      id: 2,
      title: 'دستورالعمل‌های حیاتی در بازرسی ایمنی سنسورهای پله‌برقی',
      category: 'پله‌برقی',
      categoryColor: 'text-amber-400 border-amber-500/30',
      date: '۲ آذر ۱۴۰۳',
      readTime: '۶ دقیقه مطالعه',
      summary: 'آشنایی با نقاط بحرانی سنسورهای صفحه شانه (Comb Plate)، سنسور فرونشست پله (Step Sag) و سوئیچ‌های سرعت غیرمجاز بر اساس استاندارد EN 115.',
      fullContent: `
پله‌برقی به عنوان یک نقاله مداوم مسافر، نیازمند ایمنی لحظه‌ای است. مهم‌ترین سنسورهای امنیتی که باید ماهانه تست فیزیکی شوند عبارتند از:
۱. سنسور شانه ورودی و خروجی: در صورت ورود جسم خارجی بین دندانه‌های شانه و شیارهای پله، این سوئیچ سریعاً فرمان قطع مدار ایمنی را به مدار فرمان صادر می‌کند.
۲. سنسور پایش حرکت هندریل: اگر سرعت دستگیره با سرعت پله‌ها بیش از ۱۵٪ تفاوت داشته باشد (یا هندریل بایستد)، پله‌برقی باید ظرف چند ثانیه متوقف گردد.
۳. مدار تشخیص پارگی یا شل شدن زنجیر استپ: هرگونه انحراف پله‌ها را قبل از وقوع قفل مکانیکی متوقف می‌سازد.
      `
    },
    {
      id: 3,
      title: 'نقش سیستم ارتینگ مهندسی در محافظت از بردهای الکترونیکی آسانسور',
      category: 'مهندسی برق',
      categoryColor: 'text-emerald-400 border-emerald-500/30',
      date: '۲۲ آبان ۱۴۰۳',
      readTime: '۴ دقیقه مطالعه',
      summary: 'چرا نوسانات نول و نبود چاه ارت مستقل باعث سوختن پردازنده‌های تابلو فرمان و خطا در ارتباط کن‌باس (CAN-bus) می‌شود؟',
      fullContent: `
امروزه تابلوهای آسانسور از شبکه‌های ارتباطی نظیر CAN-bus یا RS-485 برای ارتباط میان تابلو اصلی، جعبه کارکدک (Car top) و شستی‌های طبقات استفاده می‌کنند. 
اگر مقاومت چاه ارت بالاتر از حد مجاز (حداکثر ۲ اهم) باشد یا سیم نول دارای پتانسیل سرگردان باشد، نویزهای الکترومغناطیسی ناشی از سویچینگ درایوهای اینورتر روی خطوط دیتای ضعیف القا شده و باعث خطاهای کاذب و هنگ کردن برد می‌گردد.
تفکیک ارت بدنه فلزی موتورخانه از شیلد کابل‌های سیگنال و اجرای هم‌بندی اصولی، ضامن عمر طولانی تجهیزات میکروالکترونیک خواهد بود.
      `
    }
  ];

  return (
    <section id="blog" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-panel border border-white/10 text-xs font-medium text-slate-300 mb-3">
              <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
              <span>وبلاگ و یادداشت‌های تجربی</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white">
              دانش تخصصی و نکات اجرایی
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md mt-2 sm:mt-0">
            یادداشت‌های کاربردی جهت مهندسین ناظر، مدیران فنی پروژه‌ها و تکنسین‌های صنعت بالابر.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article
              key={post.id}
              className="glass-panel glass-panel-interactive rounded-2xl p-6 flex flex-col justify-between group cursor-pointer"
              onClick={() => setSelectedPost(selectedPost?.id === post.id ? null : post)}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs px-2.5 py-0.5 rounded-full border bg-black/40 font-medium ${post.categoryColor}`}>
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1 text-slate-400 text-xs">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3 mb-6">
                  {post.summary}
                </p>

                {/* Expanded full content if clicked */}
                {selectedPost?.id === post.id && (
                  <div className="mt-4 pt-4 border-t border-cyan-500/20 text-xs sm:text-sm text-slate-200 leading-relaxed bg-cyan-950/20 p-4 rounded-xl mb-4 whitespace-pre-line animate-in fade-in duration-300">
                    {post.fullContent}
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{post.date}</span>
                </span>
                <span className="text-cyan-400 flex items-center gap-1 font-medium group-hover:translate-x-[-3px] transition-transform">
                  <span>{selectedPost?.id === post.id ? 'بستن متن' : 'مطالعه کامل'}</span>
                  <ChevronRight className="w-3.5 h-3.5 rotate-180" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
