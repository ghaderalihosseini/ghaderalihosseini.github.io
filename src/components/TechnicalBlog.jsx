import React, { useState } from 'react';
import { BookOpen, Calendar, Clock, ArrowLeft, X, User } from 'lucide-react';

export default function TechnicalBlog() {
  const [selectedPost, setSelectedPost] = useState(null);

  const articles = [
    {
      id: 1,
      title: 'راهنمای جامع استاندارد EN 81 در آسانسورهای کششی و گیرلس مدرن',
      author: 'مهندس قادر علی حسینی',
      date: 'آبان ۱۴۰۳',
      readTime: '۷ دقیقه',
      category: 'مهندسی آسانسور',
      summary: 'بررسی دقیق الزامات ایمنی استاندارد اروپایی EN 81-20 و EN 81-50، فواصل نجات در چاهک و اورهد، و آزمون‌های عملکردی سیستم‌های ضد سقوط پاراشوت.',
      content: `استاندارد EN 81 (به ویژه بخش‌های EN 81-20 و EN 81-50) معتبرترین و دقیق‌ترین مرجع فنی در طراحی، نصب و بازرسی ادواری آسانسورهای مسافری و باری در جهان است. رعایت بندهای این استاندارد تضمین‌کننده ایمنی سرنشینان در برابر حوادث سقوط، گیر افتادن و خطرات الکتریکی است.

یکی از تغییرات بنیادین در استاندارد جدید EN 81-20، ارتقای ابعاد فضاهای نجات (Safety Spaces) در بالای کابین (Overhead) و ته چاهک (Pit) است تا در صورت حرکت ناخواسته کابین در زمان سرویس، جان تکنسین تعمیرات در امان باشد. همچنین، درب‌های طبقات و کابین باید آزمون مقاومت در برابر ضربه پاندولی ۳۰۰ ژول را با موفقیت پشت سر بگذارند.

توصیه اینجانب، قادر علی حسینی، به همکاران و مشاوران ساختمانی، بررسی دقیق تست‌های استاتیک و دینامیک پاراشوت و عملکرد میکروسوئیچ‌های مدار ایمنی سری در پایان هر دوره اورهال است.`,
    },
    {
      id: 2,
      title: 'مقایسه راندمان موتورهای گیرلس مغناطیس دائم (PMSM) با موتورهای گیربکس‌دار',
      author: 'مهندس قادر علی حسینی شام اسبی',
      date: 'مهر ۱۴۰۳',
      readTime: '۶ دقیقه',
      category: 'سیستم‌های محرکه و درایو',
      summary: 'تحلیل مصرف انرژی، تولید حرارت، سطح نویز و هزینه‌های تعمیر و نگهداری آسانسورهای با موتور بدون گیربکس نسبت به نسل‌های قدیمی.',
      content: `در آسانسورهای گیربکس‌دار سنتی، بیش از ۳۰ درصد از انرژی الکتریکی ورودی در جعبه دنده به عنوان تلفات حرارتی و اصطکاکی تلف می‌شود. در نقطه مقابل، موتورهای گیرلس سنکرون با آهنربای دائم (PMSM Gearless) شفت موتور را مستقیماً به فلکه کشش متصل می‌کنند.

این تحول تکنولوژیک مزایای متعددی به همراه دارد:
۱. راندمان مکانیکی و الکتریکی بالای ۹۰ درصد
۲. عدم نیاز به تعویض و نشت روغن گیربکس و سازگاری کامل با محیط زیست
۳. کاهش لرزش کابین و افزایش چشمگیر کیفیت سواری مسافر (Ride Quality)
۴. ابعاد بسیار کوچک‌تر که امکان نصب آسانسورهای روملس (MRL) را به راحتی فراهم می‌سازد.`,
    },
    {
      id: 3,
      title: 'راهنمای استاندارد ایمنی EN 115 در پله برقی‌های سنگین ترافیکی',
      author: 'مهندس قادر علی حسینی',
      date: 'شهریور ۱۴۰۳',
      readTime: '۸ دقیقه',
      category: 'مهندسی پله برقی',
      summary: 'تحلیل چک‌لیست بازرسی سنسورهای شانه (Comb Plate)، سیستم‌های اضافه سرعت گریز از مرکز و ترمزهای کمکی پله برقی.',
      content: `پله برقی‌ها به عنوان پیاده‌روهای متحرک پرشیب، روزانه هزاران نفر را جابجا می‌کنند. در استاندارد EN 115-1، مهم‌ترین اصل جلوگیری از به دام افتادن اشیا، کفش یا لباس مسافر در درز میان استپ و دیواره دامنه‌ای (Skirt) است.

فاصله میان استپ‌ها و دیواره دامنه‌ای نباید از ۴ میلی‌متر در هر سمت بیشتر باشد و استفاده از برس‌های ایمنی دامنه‌ای (Skirt Brush) الزامی است. علاوه بر این، در صورت شکستن حتی یکی از دندانه‌های شانه یا اعمال فشار غیرمجاز، میکروسوئیچ‌های شانه باید مدار تغذیه موتور را در کسری از ثانیه قطع کرده و پله را ایمن متوقف سازند.`,
    },
    {
      id: 4,
      title: 'نقش تابلوهای فرمان هوشمند VVVF و سیستم نجات اضطراری (Blackout ARD)',
      author: 'مهندس قادر علی حسینی',
      date: 'مرداد ۱۴۰۳',
      readTime: '۵ دقیقه',
      category: 'اتوماسیون و برق',
      summary: 'نحوه عملکرد درایوهای حلقه بسته کنترل دور و انتقال ایمن کابین به نزدیک‌ترین طبقه در زمان قطع برق سراسری.',
      content: `یکی از کابوس‌های همیشگی مسافران آسانسور، محبوس شدن در چاهک هنگام قطع ناگهانی برق شبکه است. سیستم‌های نجات اضطراری خودکار (Automatic Rescue Device - ARD) با بهره‌گیری از باتری‌های پشتیبان و اینورتر اختصاصی، به محض تشخیص قطع فاز، ترمز مکانیکی را باز کرده و کابین را در سبک‌ترین جهت حرکتی (با توجه به وزن کابین و وزنه تعادل) به نزدیک‌ترین طبقه هدایت کرده و درب‌ها را باز می‌کنند.`,
    },
  ];

  return (
    <section id="blog" className="py-24 relative">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>پایگاه دانش مهندسی برق، پله برقی و آسانسور</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            وبلاگ و مقالات تخصصی <span className="text-liquid-cyan">مهندس قادر علی حسینی</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-light">
            مجموعه مقالات مرجع در حوزه استاندارد EN 81 آسانسور، استاندارد EN 115 پله برقی، موتورهای گیرلس و درایوهای هوشمند صنعتی.
          </p>
        </div>

        {/* Blog Grid in Liquid Glass */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-right">
          {articles.map((post) => (
            <article
              key={post.id}
              className="liquid-glass p-6 sm:p-8 rounded-3xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-white/5 text-sky-300 border border-white/10 text-xs font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white mb-3 hover:text-sky-400 transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                  {post.summary}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <span className="text-xs text-slate-400 flex items-center gap-1.5 font-light">
                  <User className="w-3.5 h-3.5 text-sky-400" />
                  {post.author}
                </span>

                <button
                  onClick={() => setSelectedPost(post)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-sky-400 hover:text-sky-300 transition-colors"
                >
                  <span>مطالعه مقاله</span>
                  <ArrowLeft className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Modal for Reading Full Article */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-xl">
          <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto liquid-glass p-6 sm:p-8 rounded-3xl text-right bg-slate-950/95 border-white/15 shadow-2xl">
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 left-4 p-2 rounded-xl bg-white/10 text-slate-300 hover:text-white transition"
              aria-label="بستن پنجره"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/30 text-xs font-semibold inline-block mb-3">
              {selectedPost.category}
            </span>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">
              {selectedPost.title}
            </h3>

            <div className="flex items-center gap-3 text-xs text-slate-400 mb-6 pb-4 border-b border-white/10">
              <span>نویسنده: <strong>{selectedPost.author}</strong></span>
              <span>•</span>
              <span>تاریخ: {selectedPost.date}</span>
              <span>•</span>
              <span>مدت مطالعه: {selectedPost.readTime}</span>
            </div>

            <div className="text-slate-200 text-sm sm:text-base leading-relaxed space-y-4 whitespace-pre-line font-light">
              {selectedPost.content}
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 text-xs text-slate-400 font-light">
              نگارش توسط <strong>مهندس برق قادر علی حسینی شام اسبی</strong>، مشاور سیستم‌های پله برقی و آسانسور.
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
