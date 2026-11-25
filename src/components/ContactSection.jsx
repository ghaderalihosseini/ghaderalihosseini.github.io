import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Mail, MapPin, Send, MessageSquare, CheckCircle, Zap } from 'lucide-react';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', subject: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#38bdf8', '#34d399', '#818cf8'],
    });
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>ارتباط کاری و مشاوره مهندسی</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            ارتباط با <span className="text-liquid-cyan">مهندس برق قادر علی حسینی</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-light">
            جهت مشاوره تخصصی در زمینه سیستم‌های آسانسور، پله برقی، استاندارد EN 81 و EN 115، درایوهای VVVF و بهینه‌سازی تأسیسات می‌توانید پیام بگذارید.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Information Cards in Liquid Glass */}
          <div className="lg:col-span-5 space-y-4 text-right">
            
            <div className="liquid-glass p-6 rounded-3xl">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-sky-500/20 text-sky-400 shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white mb-1">حوزه تخصص اصلی</h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    مهندسی برق • سیستم‌های پله برقی و آسانسورهای مدرن
                  </p>
                  <p className="text-[11px] text-sky-400 mt-1">مشاوره، نظارت و بازرسی فنی استاندارد</p>
                </div>
              </div>
            </div>

            <div className="liquid-glass p-6 rounded-3xl">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-emerald-500/20 text-emerald-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white mb-1">زادگاه و اصالت</h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    استان اردبیل • متولد ۹ فروردین
                  </p>
                  <p className="text-[11px] text-emerald-400 mt-1">دیار مفاخر و کوهستان سبلان</p>
                </div>
              </div>
            </div>

            <div className="liquid-glass p-6 rounded-3xl">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-indigo-500/20 text-indigo-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white mb-1">ارتباط مستقیم</h3>
                  <p className="text-xs text-slate-300 font-mono">info@ghaderalihosseini.ir</p>
                  <p className="text-[11px] text-slate-400 mt-1 font-light">پاسخگویی سریع برای درخواست‌های مهندسی</p>
                </div>
              </div>
            </div>

          </div>

          {/* Contact Form in Liquid Glass */}
          <div className="lg:col-span-7">
            <div className="liquid-glass p-6 sm:p-8 rounded-3xl text-right">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center animate-bounce">
                    <CheckCircle className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">پیام شما با موفقیت ثبت شد</h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto font-light">
                    سپاسگزاریم. مهندس قادر علی حسینی پیام شما را بررسی کرده و پاسخ خواهند داد.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', phone: '', subject: '', message: '' });
                    }}
                    className="btn-liquid-secondary text-xs !py-2 !px-4 mt-4"
                  >
                    ارسال پیام دیگر
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-slate-300 mb-1.5 font-medium">نام و نام خانوادگی:</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="مثال: مهندس احمدی"
                        className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-sky-500 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-slate-300 mb-1.5 font-medium">شماره تماس یا ایمیل:</label>
                      <input
                        type="text"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="0912... یا email@domain.com"
                        className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-sky-500 transition text-left"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-slate-300 mb-1.5 font-medium">موضوع مشاوره یا پروژه:</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="مثال: مشاوره خرید و بازرسی آسانسور گیرلس / پله برقی"
                      className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-sky-500 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-300 mb-1.5 font-medium">متن پیام:</label>
                    <textarea
                      rows="4"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="شرح درخواست خود را بنویسید..."
                      className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-sky-500 transition resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn-liquid-primary w-full !py-3.5 rounded-2xl flex items-center justify-center gap-2 text-xs sm:text-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>ارسال پیام به مهندس قادر علی حسینی</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
