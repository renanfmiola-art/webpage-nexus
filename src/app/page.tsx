"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="min-h-[calc(100vh-64px)] pt-32 pb-48 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl space-y-24">
        {/* Header */}
        <div className="space-y-16">
          {/* Left Aligned Logo */}
          <div className="flex justify-start w-full">
            <img
              src="/hero-logo.png"
              alt="NEXUS Intelligence"
              className="h-[120px] md:h-[160px] lg:h-[200px] w-auto opacity-100"
            />
          </div>

          <div className="space-y-8">
            {/* Industrial Status Indicator */}
            <div className="flex items-center gap-4 text-[10px] font-bold tracking-[0.3em] uppercase text-white/40 border-l border-white/20 pl-4 py-1">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span>System Status: Operational</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter uppercase leading-[0.9]">
              {t.home.headline}
            </h1>
            <div className="w-12 h-0.5 bg-white/20" />
            <p className="text-xl md:text-2xl text-white/60 leading-relaxed max-w-2xl font-medium tracking-tight">
              {t.home.subheadline}
            </p>
          </div>
        </div>

        {/* Problema */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 pt-16 border-t border-white/5">
          <div className="md:col-span-1">
            <h2 className="text-[10px] font-bold tracking-[0.5em] uppercase text-white/40 border-l-2 border-white/10 pl-4">
              {t.home.problem.title}
            </h2>
          </div>
          <div className="md:col-span-2 space-y-6 text-white/60 text-lg leading-relaxed">
            <p className="text-white font-medium">{t.home.problem.p1}</p>
            <p>{t.home.problem.p2}</p>
            <p>{t.home.problem.p3}</p>
          </div>
        </div>

        {/* Nossa Abordagem */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 pt-16 border-t border-white/5">
          <div className="md:col-span-1">
            <h2 className="text-[10px] font-bold tracking-[0.5em] uppercase text-white/40 border-l-2 border-white/10 pl-4">
              {t.home.approach.title}
            </h2>
          </div>
          <div className="md:col-span-2 space-y-6 text-white/60 text-lg leading-relaxed">
            <p className="text-white font-medium">{t.home.approach.p1}</p>
            <p>{t.home.approach.p2}</p>
            <p>{t.home.approach.p3}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
