"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] px-6 py-20">
      <div className="max-w-4xl w-full flex flex-col items-center">
        {/* Centralized Logo */}
        <div className="mb-12 flex justify-center w-full">
          <img
            src="/hero-logo.png"
            alt="NEXUS Intelligence"
            className="h-24 md:h-32 lg:h-40 w-auto invert brightness-110 contrast-[1.6] grayscale mix-blend-screen opacity-90"
          />
        </div>

        {/* Home Text (Left Aligned within the container) */}
        <div className="w-full text-left">
          <p className="text-2xl md:text-3xl lg:text-4xl leading-relaxed text-foreground font-medium tracking-tight selection:bg-primary/30">
            <span className="font-black">{t.home.highlight}</span> {t.home.text}
          </p>
        </div>
      </div>
    </main>
  );
}
