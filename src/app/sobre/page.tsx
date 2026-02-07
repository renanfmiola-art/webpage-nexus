"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Page() {
    const { t } = useLanguage();

    // Fallback and type safety for the new structure
    const ab = t.about as any;
    const aboutSections = ab.sections || [];

    return (
        <main className="min-h-[calc(100vh-64px)] pt-32 pb-48 px-6 md:px-12 lg:px-24">
            <div className="max-w-4xl space-y-24">
                {/* Header */}
                <div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter mb-8 uppercase leading-[0.9]">
                        {ab.title}
                    </h1>
                    <div className="w-12 h-0.5 bg-white/20 mb-8" />
                    <p className="text-xl md:text-2xl text-white/60 leading-relaxed max-w-3xl font-medium tracking-tight">
                        {ab.subheadline}
                    </p>
                </div>

                {/* Sections */}
                <div className="space-y-0">
                    {aboutSections.map((section: any, idx: number) => (
                        <div key={idx} className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 pt-16 pb-16 border-t border-white/5">
                            <div className="md:col-span-1">
                                <h2 className="text-[10px] font-bold tracking-[0.5em] uppercase text-white/40 border-l-2 border-white/10 pl-4">
                                    {section.title}
                                </h2>
                            </div>
                            <div className="md:col-span-2 space-y-6 text-white/60 text-lg leading-relaxed">
                                {section.p1 && <p className="text-white font-medium">{section.p1}</p>}
                                {section.p2 && <p>{section.p2}</p>}
                                {section.p3 && <p>{section.p3}</p>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
