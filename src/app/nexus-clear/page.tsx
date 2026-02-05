"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Page() {
    const { t } = useLanguage();
    const nc = t.nexusClear;

    return (
        <main className="min-h-[calc(100vh-64px)] pt-32 pb-48 px-6 md:px-12 lg:px-24">
            <div className="max-w-4xl space-y-24">
                {/* Header */}
                <div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter mb-8 uppercase">
                        {t.nav.nexusClear}
                    </h1>
                    <div className="w-12 h-0.5 bg-white/20 mb-8" />
                    <p className="text-xl md:text-2xl text-white/60 leading-relaxed max-w-2xl font-medium tracking-tight">
                        {nc.hero_description}
                    </p>
                </div>

                {/* O que é */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 pt-16 border-t border-white/5">
                    <div className="md:col-span-1">
                        <h2 className="text-[10px] font-bold tracking-[0.5em] uppercase text-white/40 border-l-2 border-white/10 pl-4">
                            {nc.what_is.title}
                        </h2>
                    </div>
                    <div className="md:col-span-2 space-y-6 text-white/60 text-lg leading-relaxed">
                        <p className="text-white font-medium">{nc.what_is.p1}</p>
                        <p>{nc.what_is.p2}</p>
                        <p>{nc.what_is.p3}</p>
                    </div>
                </div>

                {/* Para quem é */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 pt-16 border-t border-white/5">
                    <div className="md:col-span-1">
                        <h2 className="text-[10px] font-bold tracking-[0.5em] uppercase text-white/40 border-l-2 border-white/10 pl-4">
                            {nc.for_whom.title}
                        </h2>
                    </div>
                    <div className="md:col-span-2 space-y-8">
                        <p className="text-white/60 text-lg leading-relaxed">{nc.for_whom.p1}</p>
                        <ul className="space-y-4">
                            {nc.for_whom.items.map((item: string, i: number) => (
                                <li key={i} className="flex items-start gap-4 text-white/60 text-lg group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-white/20 mt-3 group-hover:bg-white/40 transition-colors" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-white/40 text-sm font-medium pt-4 italic border-t border-white/5">
                            {nc.for_whom.footer}
                        </p>
                    </div>
                </div>

                {/* Qual problema resolve */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 pt-16 border-t border-white/5">
                    <div className="md:col-span-1">
                        <h2 className="text-[10px] font-bold tracking-[0.5em] uppercase text-white/40 border-l-2 border-white/10 pl-4">
                            {nc.problem.title}
                        </h2>
                    </div>
                    <div className="md:col-span-2 space-y-8">
                        <p className="text-white font-medium text-lg leading-relaxed">{nc.problem.p1}</p>
                        <ul className="space-y-4">
                            {nc.problem.items.map((item: string, i: number) => (
                                <li key={i} className="flex items-start gap-4 text-white/60 text-lg group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-white/20 mt-3 group-hover:bg-white/40 transition-colors" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-white font-medium pt-4 border-t border-white/5">
                            {nc.problem.footer}
                        </p>
                    </div>
                </div>

                {/* O que não é */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 pt-16 border-t border-white/5">
                    <div className="md:col-span-1">
                        <h2 className="text-[10px] font-bold tracking-[0.5em] uppercase text-white/40 border-l-2 border-white/10 pl-4">
                            {nc.is_not.title}
                        </h2>
                    </div>
                    <div className="md:col-span-2 space-y-8">
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {nc.is_not.items.map((item: string, i: number) => (
                                <li key={i} className="flex items-center gap-3 text-white/40 text-base border border-white/5 px-4 py-3 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                                    <span className="text-white/20 text-xs">—</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <p className="text-white/60 text-lg leading-relaxed">
                            {nc.is_not.footer}
                        </p>
                    </div>
                </div>

                {/* Como funciona */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 pt-16 border-t border-white/5">
                    <div className="md:col-span-1">
                        <h2 className="text-[10px] font-bold tracking-[0.5em] uppercase text-white/40 border-l-2 border-white/10 pl-4">
                            {nc.how_it_works.title}
                        </h2>
                    </div>
                    <div className="md:col-span-2 space-y-12">
                        <p className="text-white/60 text-lg leading-relaxed">{nc.how_it_works.p1}</p>
                        <div className="space-y-12">
                            {nc.how_it_works.steps.map((step: any, i: number) => (
                                <div key={i} className="space-y-4 border-l border-white/10 pl-8 relative group">
                                    <span className="absolute -left-[5px] top-0 w-[9px] h-[9px] bg-white rounded-full border-2 border-black group-hover:scale-125 transition-transform" />
                                    <h3 className="text-white font-bold uppercase tracking-wider text-sm">
                                        {step.title}
                                    </h3>
                                    <p className="text-white/60 leading-relaxed text-base">
                                        {step.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <p className="text-white font-medium pt-4 border-t border-white/5">
                            {nc.how_it_works.footer}
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
