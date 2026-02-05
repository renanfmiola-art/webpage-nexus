"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Page() {
    const { t } = useLanguage();

    return (
        <main className="min-h-[calc(100vh-64px)] pt-32 pb-48 px-6 md:px-12 lg:px-24">
            <div className="max-w-4xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter mb-12 uppercase">
                    {t.nav.blog}
                </h1>
                <div className="w-12 h-0.5 bg-white/20 mb-12" />
                <p className="text-xl md:text-2xl text-white/60 leading-relaxed max-w-2xl">
                    Insights sobre inteligência neural e operações críticas.
                </p>
            </div>
        </main>
    );
}
