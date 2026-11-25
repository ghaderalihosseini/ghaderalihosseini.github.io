import React, { useState } from 'react';
import { Mail, Phone, Send, Check } from 'lucide-react';
import { LiquidCard } from './ui/LiquidCard';

export const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-bold text-white mb-1">قادر علی حسینی شام اسبی</h3>
              <p className="text-xs text-slate-400">مهندس برق، طراح و مشاور سیستم‌های آسانسور و پله‌برقی</p>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center gap-3">
              <Mail className="w-4 h-4 text-white shrink-0" />
              <div className="text-xs font-mono text-slate-200 truncate">
                ghaderalihosseini@gmail.com
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center gap-3">
              <Phone className="w-4 h-4 text-white shrink-0" />
              <div className="text-xs text-slate-200">
                پاسخگویی فنی پروژه‌ها و بازرسی
              </div>
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="p-6 rounded-2xl bg-white/[0.06] border border-white/20 text-center animate-in fade-in">
                <Check className="w-8 h-8 text-white mx-auto mb-2" />
                <div className="text-sm font-bold text-white">پیام شما دریافت شد</div>
                <p className="text-xs text-slate-300 mt-1">در اسرع وقت با شما تماس گرفته خواهد شد.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  required
                  placeholder="نام و شماره تماس"
                  className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-white/30 transition-colors"
                />
                <textarea
                  rows="3"
                  required
                  placeholder="شرح پروژه یا استعلام فنی..."
                  className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-white/30 transition-colors resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-white text-black font-bold text-xs hover:bg-slate-200 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>ارسال پیام</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </LiquidCard>
    </section>
  );
};
