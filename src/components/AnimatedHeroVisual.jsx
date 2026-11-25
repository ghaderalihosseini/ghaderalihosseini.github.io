import React, { useState } from 'react';
import { ArrowUpDown, Zap, ShieldCheck, Activity, Gauge, Sliders, CheckCircle2 } from 'lucide-react';

export default function AnimatedHeroVisual() {
  const [mode, setMode] = useState('elevator'); // 'elevator' | 'escalator'

  return (
    <div className="liquid-glass-flat p-6 md:p-8 rounded-3xl relative overflow-hidden border border-white/10 shadow-2xl">
      {/* Top Header Mode Toggle */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="pulse-indicator" />
          <span className="text-xs text-slate-300 font-medium">شبیه‌ساز مکاترونیک هوشمند</span>
        </div>

        {/* Tab switch */}
        <div className="flex p-1 rounded-xl bg-white/5 border border-white/10">
          <button
            onClick={() => setMode('elevator')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              mode === 'elevator'
                ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <ArrowUpDown className="w-3.5 h-3.5" />
            <span>آسانسور گیرلس</span>
          </button>

          <button
            onClick={() => setMode('escalator')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              mode === 'escalator'
                ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            <span>پله برقی EN 115</span>
          </button>
        </div>
      </div>

      {mode === 'elevator' ? (
        /* Elevator Animation Graphic */
        <div className="space-y-6">
          <div className="relative h-48 sm:h-56 rounded-2xl bg-slate-950/70 border border-white/5 overflow-hidden flex items-center justify-between px-6 py-4">
            
            {/* Vertical Guide Rails & Moving Cabin */}
            <div className="relative w-28 h-full flex items-center justify-center">
              {/* Rails */}
              <div className="absolute top-0 bottom-0 left-2 w-0.5 bg-gradient-to-b from-emerald-500/40 via-cyan-500/60 to-emerald-500/40" />
              <div className="absolute top-0 bottom-0 right-2 w-0.5 bg-gradient-to-b from-emerald-500/40 via-cyan-500/60 to-emerald-500/40" />

              {/* Floor indicators */}
              <div className="absolute right-4 top-2 text-[10px] text-slate-500 font-mono">F4</div>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] text-slate-500 font-mono">F2</div>
              <div className="absolute right-4 bottom-2 text-[10px] text-slate-500 font-mono">F0</div>

              {/* Animated Cabin */}
              <div className="absolute w-20 h-16 rounded-xl bg-gradient-to-br from-emerald-600/40 to-slate-900 border border-emerald-400/50 shadow-lg shadow-emerald-500/20 flex flex-col items-center justify-center text-center animate-bounce" style={{ animationDuration: '4s' }}>
                <ArrowUpDown className="w-4 h-4 text-emerald-400 animate-pulse mb-0.5" />
                <span className="text-[10px] font-bold text-white font-mono">1.6 m/s</span>
                <span className="text-[9px] text-emerald-300">Closed Loop</span>
              </div>
            </div>

            {/* Live Metrics Display */}
            <div className="space-y-3 flex-1 text-right pr-6 border-r border-white/5">
              <div>
                <span className="text-[11px] text-slate-400 block mb-0.5">نوع موتور الکتریکی:</span>
                <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5 justify-end">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  گیرلس سنکرون مغناطیس دائم (PMSM)
                </span>
              </div>

              <div>
                <span className="text-[11px] text-slate-400 block mb-0.5">درایو کنترل دور و اینورتر:</span>
                <span className="text-xs font-bold text-white font-mono">VVVF 32-Bit Microprocessor</span>
              </div>

              <div>
                <span className="text-[11px] text-slate-400 block mb-0.5">سیستم ایمنی ضد سقوط:</span>
                <span className="text-xs font-bold text-slate-300">پاراشوت تدریجی + گاورنر EN 81-20</span>
              </div>

              <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400 border-t border-white/5">
                <span>راندمان انرژی:</span>
                <span className="text-emerald-400 font-bold font-mono">Class A (VDI 4707)</span>
              </div>
            </div>

          </div>

          <div className="grid grid-cols-3 gap-2.5 text-center">
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
              <div className="text-[10px] text-slate-400">شتاب حرکت</div>
              <div className="text-xs font-bold text-white font-mono mt-0.5">0.65 m/s²</div>
            </div>
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
              <div className="text-[10px] text-slate-400">دقت توقف طبقه</div>
              <div className="text-xs font-bold text-emerald-400 font-mono mt-0.5">± 2 mm</div>
            </div>
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
              <div className="text-[10px] text-slate-400">نجات اضطراری</div>
              <div className="text-xs font-bold text-cyan-400 mt-0.5">Blackout ARD</div>
            </div>
          </div>
        </div>
      ) : (
        /* Escalator Animation Graphic */
        <div className="space-y-6">
          <div className="relative h-48 sm:h-56 rounded-2xl bg-slate-950/70 border border-white/5 overflow-hidden flex items-center justify-between px-6 py-4">
            
            {/* Animated Escalator Incline Illustration */}
            <div className="relative w-36 h-full flex items-center justify-center">
              <svg viewBox="0 0 120 90" className="w-full h-full overflow-visible">
                {/* Handrail */}
                <path d="M 10 75 L 45 35 L 110 35" fill="none" stroke="#38bdf8" strokeWidth="3" strokeDasharray="6 3" className="animate-pulse" />
                {/* Steps Profile */}
                <path d="M 10 85 L 40 45 L 105 45" fill="none" stroke="#64748b" strokeWidth="6" />
                <path d="M 10 85 L 40 45 L 105 45" fill="none" stroke="#fbbf24" strokeWidth="2" strokeDasharray="8 4" />
                {/* Step Blocks */}
                <circle cx="25" cy="65" r="4" fill="#38bdf8" />
                <circle cx="45" cy="45" r="4" fill="#38bdf8" />
                <circle cx="75" cy="45" r="4" fill="#38bdf8" />
              </svg>
            </div>

            {/* Live Metrics Display */}
            <div className="space-y-3 flex-1 text-right pr-6 border-r border-white/5">
              <div>
                <span className="text-[11px] text-slate-400 block mb-0.5">استاندارد مرجع ایمنی:</span>
                <span className="text-xs font-bold text-cyan-400 flex items-center gap-1.5 justify-end">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  EN 115-1 Heavy Duty Standard
                </span>
              </div>

              <div>
                <span className="text-[11px] text-slate-400 block mb-0.5">سیستم ترمز کمکی:</span>
                <span className="text-xs font-bold text-white font-mono">Independent Auxiliary Brake</span>
              </div>

              <div>
                <span className="text-[11px] text-slate-400 block mb-0.5">عرض استپ و ظرفیت:</span>
                <span className="text-xs font-bold text-slate-300">1000 mm • ۹۰۰۰ نفر/ساعت</span>
              </div>

              <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400 border-t border-white/5">
                <span>سنسورهای ایمنی:</span>
                <span className="text-cyan-400 font-bold font-mono">Comb Plate & Skirt</span>
              </div>
            </div>

          </div>

          <div className="grid grid-cols-3 gap-2.5 text-center">
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
              <div className="text-[10px] text-slate-400">زاویه شیب</div>
              <div className="text-xs font-bold text-white font-mono mt-0.5">30° استاندارد</div>
            </div>
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
              <div className="text-[10px] text-slate-400">سرعت خطی</div>
              <div className="text-xs font-bold text-cyan-400 font-mono mt-0.5">0.65 m/s</div>
            </div>
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
              <div className="text-[10px] text-slate-400">حالت آماده‌به‌کار</div>
              <div className="text-xs font-bold text-emerald-400 mt-0.5">Eco Crawling</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
