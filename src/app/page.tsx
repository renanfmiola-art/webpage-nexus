"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="min-h-[calc(100vh-64px)] px-6 pt-32 pb-20 md:px-12 lg:px-24 flex flex-col items-start justify-center">
      <div className="max-w-4xl w-full space-y-12">
        {/* Left Aligned Logo */}
        <div className="flex justify-start w-full">
          <img
            src="/hero-logo.png"
            alt="NEXUS Intelligence"
            className="h-20 md:h-24 lg:h-28 w-auto invert brightness-110 contrast-[1.6] grayscale mix-blend-screen opacity-90 transition-all duration-700 hover:scale-105"
          />
        </div>

        {/* Industrial Status Indicator */}
        <div className="flex items-center gap-4 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-primary/60 border-l border-white/20 pl-4 py-1">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <span>Infrastructure Status: Operational</span>
        </div>

        {/* Home Text (Strictly Left Aligned) */}
        <div className="w-full text-left space-y-8">
          <p className="text-2xl md:text-3xl lg:text-4xl leading-tight text-foreground font-medium tracking-tight selection:bg-white/20 animate-slow-fade">
            <span className="font-black text-white">{t.home.highlight}</span>
            <br className="hidden md:block" />
            <span className="text-white/80">{t.home.text}</span>
          </p>

          <div className="pt-8">
            <div className="w-12 h-0.5 bg-white/20" />
          </div>
        </div>
      </div>
    </main>
  );
}
