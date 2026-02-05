"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="min-h-[calc(100vh-64px)] px-6 pt-32 pb-48 md:px-12 lg:px-24 flex flex-col items-start">
      <div className="max-w-4xl w-full space-y-16">
        {/* Left Aligned Logo */}
        <div className="flex justify-start w-full">
          <img
            src="/hero-logo.png"
            alt="NEXUS Intelligence"
            className="h-[100px] md:h-[120px] lg:h-[140px] w-auto opacity-100 transition-all duration-700 hover:scale-105"
          />
        </div>

        {/* Industrial Status Indicator */}
        <div className="flex items-center gap-4 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-primary/60 border-l border-white/20 pl-4 py-1">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <span>Infrastructure Status: Operational</span>
        </div>

        {/* Headlines */}
        <div className="w-full text-left space-y-8">
          <h1 className="text-3xl md:text-5xl lg:text-6xl leading-tight font-black text-white tracking-tighter selection:bg-white/20">
            {t.home.headline}
          </h1>
          <p className="text-xl md:text-2xl text-white/60 leading-relaxed max-w-2xl font-medium tracking-tight">
            {t.home.subheadline}
          </p>
        </div>

        {/* Divider */}
        <div className="w-12 h-0.5 bg-white/20" />

        {/* Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 pt-8">
          {/* Problem Section */}
          <div className="space-y-8">
            <h2 className="text-[10px] md:text-xs font-bold tracking-[0.5em] uppercase text-white/40 border-l-2 border-white/10 pl-4">
              {t.home.problem.title}
            </h2>
            <div className="space-y-6 text-white/60 text-lg leading-relaxed">
              <p className="text-white font-medium">{t.home.problem.p1}</p>
              <p>{t.home.problem.p2}</p>
              <p>{t.home.problem.p3}</p>
            </div>
          </div>

          {/* Approach Section */}
          <div className="space-y-8">
            <h2 className="text-[10px] md:text-xs font-bold tracking-[0.5em] uppercase text-white/40 border-l-2 border-white/10 pl-4">
              {t.home.approach.title}
            </h2>
            <div className="space-y-6 text-white/60 text-lg leading-relaxed">
              <p className="text-white font-medium">{t.home.approach.p1}</p>
              <p>{t.home.approach.p2}</p>
              <p>{t.home.approach.p3}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
