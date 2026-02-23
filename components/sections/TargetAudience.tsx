import React from "react";
import { Container } from "@/components/layout/Container";
import { Check, X } from "lucide-react";
import { getTranslation } from "@/lib/i18n";

export async function TargetAudience() {
    const t = await getTranslation();

    return (
        <section className="bg-primary py-24 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-5" />

            <Container className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Para Quem É */}
                    <div className="bg-white/5 rounded-3xl p-8 md:p-10 border border-white/10 fade-in slide-up">
                        <h3 className="text-2xl md:text-3xl font-bold mb-8 text-white">{t.targetAudience.forWhoTitle}</h3>
                        <ul className="flex flex-col gap-6">
                            {t.targetAudience.forWhoItems.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-4">
                                    <div className="shrink-0 mt-1 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                                        <Check className="w-4 h-4 text-green-400" />
                                    </div>
                                    <span className="text-lg text-white/90 leading-snug">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* O Que Não Fazemos */}
                    <div className="bg-red-950/20 rounded-3xl p-8 md:p-10 border border-red-900/30 fade-in slide-up animation-delay-200">
                        <h3 className="text-2xl md:text-3xl font-bold mb-8 text-white">{t.targetAudience.notForWhoTitle}</h3>
                        <ul className="flex flex-col gap-6">
                            {t.targetAudience.notForWhoItems.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-4">
                                    <div className="shrink-0 mt-1 w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center">
                                        <X className="w-4 h-4 text-red-400" />
                                    </div>
                                    <span className="text-lg text-white/80 leading-snug">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Container>
        </section>
    );
}
