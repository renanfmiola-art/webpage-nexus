"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Page() {
    const { t } = useLanguage();
    return (
        <main className="min-h-[calc(100vh-64px)] pt-32 pb-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-4xl">
                <h2 className="text-primary font-black text-xs md:text-sm tracking-[0.2em] uppercase mb-8">
                    {t.about.title}
                </h2>

                <div className="space-y-8">
                    <p className="text-xl md:text-2xl lg:text-3xl text-white/90 font-medium leading-relaxed">
                        {t.about.p1}
                    </p>

                    <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-3xl">
                        {t.about.p2}
                    </p>

                    <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-3xl">
                        {t.about.p3}
                    </p>

                    <p className="text-xl md:text-2xl text-primary font-bold leading-relaxed">
                        {t.about.p4}
                    </p>
                </div>
            </div>
        </main>
    );
}
