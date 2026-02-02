"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Page() {
    const { t } = useLanguage();

    const services = [
        {
            id: "oreex",
            title: t.services.oreex.title,
            subtitle: t.services.oreex.subtitle,
            p1: t.services.oreex.p1,
            p2: t.services.oreex.p2,
            cta: t.services.oreex.cta,
            file: "/files/oreex-about.pdf"
        },
        {
            id: "travelflow",
            title: t.services.travelflow.title,
            subtitle: t.services.travelflow.subtitle,
            p1: t.services.travelflow.p1,
            p2: t.services.travelflow.p2,
            cta: t.services.travelflow.cta,
            file: "/files/travelflow-about.pdf"
        }
    ];

    return (
        <main className="min-h-[calc(100vh-64px)] flex flex-col items-center pt-20 pb-32 px-6 md:px-12">
            <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                {services.map((service) => (
                    <div key={service.id} className="bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-8 md:p-10 backdrop-blur-sm relative overflow-hidden group flex flex-col justify-between">
                        {/* Subtle accent glow */}
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 blur-[100px] rounded-full group-hover:bg-primary/10 transition-colors duration-700" />

                        <div className="relative z-10 space-y-8">
                            {/* Header */}
                            <div className="space-y-4">
                                <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-white tracking-tighter leading-tight">
                                    {service.title}
                                </h1>
                                <p className="text-primary font-bold text-[10px] md:text-xs tracking-[0.2em] uppercase leading-relaxed">
                                    {service.subtitle}
                                </p>
                            </div>

                            {/* Description */}
                            <div className="space-y-6">
                                <p className="text-lg md:text-xl text-white/80 leading-relaxed font-medium">
                                    {service.p1}
                                </p>
                                <p className="text-base md:text-lg text-white/50 leading-relaxed">
                                    {service.p2}
                                </p>
                            </div>

                            {/* CTA */}
                            <div className="pt-4">
                                <a
                                    href={service.file}
                                    download
                                    className="inline-flex px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white/90 text-[10px] md:text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105 active:scale-95 shadow-lg items-center gap-2"
                                >
                                    {service.cta}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="max-w-7xl mx-auto mt-16 px-0">
                <p className="text-lg md:text-xl text-white/40 leading-relaxed max-w-4xl pt-8 border-t border-white/5">
                    {t.services.footer}
                </p>
            </div>
        </main>
    );
}
