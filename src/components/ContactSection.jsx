import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageSquare, CheckCircle, Clock } from 'lucide-react';

export const ContactSection = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-panel border border-cyan-500/30 text-xs font-medium text-cyan-300 mb-3">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>ارتباط مستقیم با مهندس حسینی</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                مشاوره فنی، محاسبات و استعلام پروژه
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                جهت دریافت مشاوره در خصوص انتخاب آسانسور، محاسبات ترافیک، رفع عیب سیستم‌های پله‌برقی و استانداردسازی پروژه‌ها می‌توانید مستقیماً در ارتباط باشید.
              </p>
            </div>

            <div className="space-y-4">
              <div className="glass-panel p-4 rounded-xl flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg glass-panel border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">تماس مستقیم مهندسی</div>
                  <a href="tel:+989120000000" className="text-sm sm:text-base font-bold text-white hover:text-cyan-400 transition-colors" dir="ltr">
                    +98 (ارتباط مستقیم)
                  </a>
                </div>
              </div>

              <div className="glass-panel p-4 rounded-xl flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg glass-panel border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">پست الکترونیکی</div>
                  <a href="mailto:info@ghaderalihosseini.ir" className="text-sm sm:text-base font-bold text-white hover:text-cyan-400 transition-colors font-mono">
                    ghaderalihosseini@gmail.com
                  </a>
                </div>
              </div>

              <div className="glass-panel p-4 rounded-xl flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg glass-panel border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">زمان پاسخگویی</div>
                  <div className="text-sm font-medium text-slate-200">
                    شنبه تا پنج‌شنبه: ۸:۰۰ الی ۱۹:۰۰
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 relative">
              <h3 className="text-lg font-bold text-white mb-2">ثبت درخواست مشاوره یا بررسی پروژه</h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                مشخصات فنی و نوع پروژه خود را ارسال نمایید تا در اسرع وقت بررسی و هماهنگی صورت پذیرد.
              </p>

              {formSubmitted ? (
                <div className="p-6 rounded-xl bg-cyan-950/40 border border-cyan-500/40 text-center animate-in fade-in">
                  <CheckCircle className="w-12 h-12 text-cyan-400 mx-auto mb-3" />
                  <div className="text-base font-bold text-white mb-1">پیام شما با موفقیت ثبت شد</div>
                  <p className="text-xs text-slate-300">مهندس حسینی در اسرع وقت با شما تماس خواهند گرفت.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-slate-300 mb-1.5 font-medium">نام و نام خانوادگی</label>
                      <input
                        type="text"
                        required
                        placeholder="مثال: مهندس راد"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-slate-300 mb-1.5 font-medium">شماره تماس جهت هماهنگی</label>
                      <input
                        type="tel"
                        required
                        placeholder="۰۹۱۲..."
                        dir="ltr"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors text-right"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-slate-300 mb-1.5 font-medium">موضوع پروژه / استعلام</label>
                    <select className="w-full px-3.5 py-2.5 rounded-xl bg-[#0c0d14] border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors">
                      <option value="elevator">مشاوره و طراحی سیستم آسانسور</option>
                      <option value="escalator">مهندسی و نگهداری پله‌برقی</option>
                      <option value="electrical">طراحی تابلو برق و سیستم‌های حفاظتی</option>
                      <option value="inspection">بازرسی فنی و اخذ استاندارد ادواری</option>
                      <option value="other">سایر موارد</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-slate-300 mb-1.5 font-medium">شرح مختصر نیاز فنی</label>
                    <textarea
                      rows="4"
                      required
                      placeholder="تعداد توقف، ظرفیت، سرعت، وضعیت فعلی پروژه و ..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-600 hover:from-cyan-400 hover:to-sky-500 text-slate-950 font-bold text-sm shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>ارسال پیام و استعلام پروژه</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
