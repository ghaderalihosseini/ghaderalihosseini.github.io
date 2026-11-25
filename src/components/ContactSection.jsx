import React, { useState } from 'react';
import { Mail, Phone, Send, Check, SendHorizontal } from 'lucide-react';
import { LiquidCard } from './ui/LiquidCard';

export const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    e.currentTarget.reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 max-w-4xl mx-auto w-full scroll-mt-20">
      <div className="text-center max-w-xl mx-auto mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.12] text-xs font-mono text-slate-300 mb-3">
          <Mail className="w-3.5 h-3.5 text-white" />
          <span>CONTACT & CONSULTATION</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 font-fa-title">
          ارتباط و استعلام پروژه
        </h2>
        <p className="text-xs sm:text-sm text-slate-400">
          مشاوره فنی، محاسبات آسانسور، عیب‌یابی پله‌برقی و پروژه‌های برق صنعتی
        </p>
      </div>

      <LiquidCard className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-bold text-white mb-1">قادر علی حسینی شام اسبی</h3>
              <p className="text-xs text-slate-400 font-fa">مهندس برق، طراح و مشاور سیستم‌های آسانسور و پله‌برقی</p>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center gap-3">
              <Mail className="w-4 h-4 text-white shrink-0" />
              <div className="min-w-0">
                <div className="text-[10px] text-slate-400">پست الکترونیکی</div>
                <a href="mailto:ghaderalihosseini@gmail.com" className="text-xs font-mono text-slate-200 hover:text-white transition-colors truncate block">
                  ghaderalihosseini@gmail.com
                </a>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center gap-3">
              <Phone className="w-4 h-4 text-white shrink-0" />
              <div>
                <div className="text-[10px] text-slate-400">حوزه پاسخگویی</div>
                <div className="text-xs text-slate-200">
                  مشاوره، بازرسی فنی و نظارت پروژه
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center gap-3">
              <SendHorizontal className="w-4 h-4 text-white shrink-0" />
              <div>
                <div className="text-[10px] text-slate-400">پیام‌رسان تلگرام</div>
                <a
                  href="https://t.me/ghaderalihosseini"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-slate-200 hover:text-white transition-colors block"
                  dir="ltr"
                >
                  @ghaderalihosseini
                </a>
              </div>
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="p-6 rounded-2xl bg-white/[0.06] border border-white/20 text-center animate-in fade-in">
                <Check className="w-8 h-8 text-white mx-auto mb-2" />
                <div className="text-sm font-bold text-white">پیام شما دریافت شد</div>
                <p className="text-xs text-slate-300 mt-1 font-fa">در اسرع وقت با شما تماس گرفته خواهد شد.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-[11px] text-slate-400 mb-1">نام یا شرکت</label>
                  <input
                    type="text"
                    required
                    placeholder="مثال: مهندس راد / شرکت ساختمانی"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/15 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/20 transition-all font-fa"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-slate-400 mb-1">شماره تماس جهت هماهنگی</label>
                  <input
                    type="tel"
                    required
                    placeholder="۰۹..."
                    dir="ltr"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/15 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/20 transition-all text-right font-mono"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-slate-400 mb-1">شرح خلاصه استعلام یا پروژه</label>
                  <textarea
                    rows="3"
                    required
                    placeholder="نوع پروژه، تعداد توقف آسانسور یا مدل پله‌برقی و ..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/15 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/20 transition-all resize-none font-fa"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-white text-black font-bold text-xs hover:bg-slate-200 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_4px_16px_rgba(255,255,255,0.2)] active:scale-[0.99]"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>ارسال پیام استعلام</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </LiquidCard>
    </section>
  );
};
