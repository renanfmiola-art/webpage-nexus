import React from "react";
import { Container } from "@/components/layout/Container";
import { getTranslation } from "@/lib/i18n";
import { Pill, Sparkles, Wrench, GlassWater, Store, Hammer, Laptop, Briefcase } from "lucide-react";

export async function Segments() {
    const t = await getTranslation();
    const segmentIcons = [Pill, Sparkles, Wrench, GlassWater, Store, Hammer, Laptop, Briefcase];
    return (
        <section id="segmentos" className="bg-[#fcfcfc] py-24 border-t border-border">
            <Container>
                <div className="max-w-4xl mx-auto text-center mb-16 fade-in slide-up">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 tracking-tight uppercase">
                        {t.segments.title}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        {t.segments.description}
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 gap-y-12 mb-16 fade-in slide-up" style={{ animationDelay: '200ms' }}>
                    {t.segments.items.map((segment, idx) => {
                        const Icon = segmentIcons[idx];
                        return (
                            <div key={idx} className="flex flex-col items-center text-center group">
                                <div className="w-16 h-16 flex items-center justify-center text-primary mb-4 transition-transform duration-300 group-hover:-translate-y-2">
                                    {/* Utilizando stroke-width-1.5 para ficar mais parecido com a referência (ícones finos) */}
                                    <Icon className="w-full h-full" strokeWidth={1.2} />
                                </div>
                                <h4 className="text-lg font-bold text-primary leading-tight">
                                    {segment.title}
                                </h4>
                                {segment.subtitle && (
                                    <p className="text-sm text-muted-foreground mt-1">
                                        {segment.subtitle}
                                    </p>
                                )}
                            </div>
                        );
                    })}
                </div>

                <div className="text-center fade-in slide-up" style={{ animationDelay: '400ms' }}>
                    <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
                        {t.contactButtons.talkToUs} {/* Placeholder para o CTA footer if needed or just use current form...*/}
                        {t.footer.contact.title} - Consulte-nos, sem compromisso, para mais informações sobre outros segmentos.
                    </p>
                </div>
            </Container>
        </section>
    );
}
