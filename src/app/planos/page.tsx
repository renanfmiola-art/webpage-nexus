"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Page() {
    const { t } = useLanguage();
    const pl = (t as any).plans;

    if (!pl) return null;

    return (
        <main className="min-h-[calc(100vh-64px)] pt-32 pb-48 px-6 md:px-12 lg:px-24 bg-black text-white">
            <div className="max-w-6xl mx-auto space-y-32">
                {/* Header */}
                <div className="max-w-4xl">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-8 uppercase leading-[0.9]">
                        {pl.title}
                    </h1>
                    <div className="w-12 h-0.5 bg-white/20 mb-8" />
                    <p className="text-xl md:text-2xl text-white/60 leading-relaxed font-medium tracking-tight">
                        {pl.hero_description}
                    </p>
                </div>

                {/* Sections */}
                <div className="space-y-48">
                    {pl.sections.map((section: any, sIdx: number) => (
                        <section key={sIdx} className="space-y-12">
                            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-8 border-b border-white/10">
                                <div className="max-w-2xl space-y-4">
                                    <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase">
                                        {section.title}
                                    </h2>
                                    {section.description && (
                                        <p className="text-white/40 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] leading-relaxed max-w-xl">
                                            {section.description}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className={`grid gap-6 ${section.plans.length === 1 ? 'max-w-md' : 'grid-cols-1 md:grid-cols-3'}`}>
                                {section.plans.map((plan: any, pIdx: number) => (
                                    <div
                                        key={pIdx}
                                        className="bg-[#0a0a0a] border border-white/5 p-8 md:p-10 flex flex-col h-full hover:border-white/20 transition-all duration-500 group relative overflow-hidden"
                                    >
                                        {/* Subtle metallic gradient on hover */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                        <div className="relative z-10 space-y-8 flex flex-col h-full">
                                            <div className="space-y-2">
                                                {plan.type && (
                                                    <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-white/30 block mb-2">
                                                        {plan.type}
                                                    </span>
                                                )}
                                                <h3 className="text-2xl font-black tracking-tight uppercase leading-none">
                                                    {plan.name}
                                                </h3>
                                            </div>

                                            <div>
                                                <div className="text-3xl font-black tracking-tighter text-white">
                                                    {plan.price}
                                                </div>
                                            </div>

                                            <div className="flex-grow space-y-5 pt-8 border-t border-white/5">
                                                {plan.features.map((feature: string, fIdx: number) => (
                                                    <div key={fIdx} className="flex items-start gap-3 text-white/50 text-sm font-medium leading-tight">
                                                        <div className="w-1 h-1 bg-white/20 mt-1.5 shrink-0" />
                                                        {feature}
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="pt-8">
                                                <button className="w-full py-5 bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all duration-500">
                                                    {plan.cta}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>

                {/* Final CTA */}
                <div className="pt-16">
                    <div className="max-w-3xl bg-[#0a0a0a] border border-white/10 p-12 md:p-16 space-y-10 relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-1 h-full bg-white/20 group-hover:bg-white transition-colors duration-500" />

                        <p className="text-2xl md:text-3xl text-white/90 font-black tracking-tighter leading-[1.1] uppercase">
                            {pl.final_cta.text}
                        </p>

                        <div>
                            <button className="px-10 py-6 bg-white text-black text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-white/90 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.1)]">
                                {pl.final_cta.button}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
