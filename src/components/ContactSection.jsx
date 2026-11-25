import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Mail, MapPin, Send, MessageSquare, CheckCircle, Zap, ArrowUpDown } from 'lucide-react';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', subject: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#38bdf8', '#0284c7', '#10b981', '#f59e0b'],
    });
  };

  return (
    <section id="contact" className="py-20 bg-slate-950 relative border-t border-slate-800/60">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 text-cyan-400 border border-cyan-800/50 text-xs font-semibold mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>ارتباط کاری و مشاوره مهندسی</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            ارتباط با <span className="text-gradient">مهندس برق قادر علی حسینی</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            جهت مشاوره تخصصی در زمینه سیستم‌های آسانسور، پله برقی، استاندارد EN 81 و EN 115، درایوهای VVVF و بهینه‌سازی تأسیسات می‌توانید پیام بگذارید.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Information Cards */}
          <div className="lg:col-span-5 space-y-4 text-right">
            
            <div className="glass-panel p-6 rounded-2xl border-slate-800">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-cyan-900/40 text-cyan-400 shrink-0">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1">حوزه تخصص اصلی</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    مهندسی برق • سیستم‌های پله برقی و آسانسورهای مدرن
                  </p>
                  <p className="text-[11px] text-cyan-400 mt-1">مشاوره، نظارت و بازرسی فنی استاندارد</p>
                </div>
              </div>
            </div>

            <div className="glass-panel p-6 rounded-2xl border-slate-800">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-emerald-900/40 text-emerald-400 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1">زادگاه و اصالت</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    استان اردبیل • متولد ۹ فروردین
                  </p>
                  <p className="text-[11px] text-emerald-400 mt-1">دیار مفاخر و کوهستان سبلان</p>
                </div>
              </div>
            </div>

            <div className="glass-panel p-6 rounded-2xl border-slate-800">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-indigo-900/40 text-indigo-400 shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1">ارتباط مستقیم</h3>
                  <p className="text-xs text-slate-300 font-mono">info@ghaderalihosseini.ir</p>
                  <p className="text-[11px] text-slate-400 mt-1">پاسخگویی سریع برای درخواست‌های مهندسی</p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-gradient-to-r from-blue-950/60 to-slate-900 border border-slate-800 text-xs text-slate-300 leading-relaxed">
              ⭐ <strong>حوزه‌های مشاوره:</strong> استانداردهای EN 81 و EN 115، محاسبات توان موتورهای گیرلس آسانسور، راه‌اندازی اینورترهای VVVF و آزمون‌های ایمنی پاراشوت و ترمز کمکی.
            </div>

          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel-glow p-6 md:p-8 rounded-2xl text-right">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center animate-bounce">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">پیام شما با موفقیت دریافت شد!</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    سپاسگزاریم. مهندس قادر علی حسینی در اسرع وقت پیام شما را بررسی کرده و پاسخ خواهند داد.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', phone: '', subject: '', message: '' });
                    }}
                    className="btn-secondary text-xs !py-2 !px-4 mt-4"
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
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-cyan-500 transition"
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
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-cyan-500 transition text-left"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-slate-300 mb-1.5 font-medium">موضوع مشاوره یا همکاری:</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="مثال: مشاوره خرید و بازرسی آسانسور گیرلس / پله برقی"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-cyan-500 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-300 mb-1.5 font-medium">متن پیام:</label>
                    <textarea
                      rows="4"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="شرح جزئیات درخواست یا پیام خود را بنویسید..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-cyan-500 transition resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full !py-3 rounded-xl flex items-center justify-center gap-2 text-sm shadow-cyan-500/30"
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
