import React from "react";
import { Container } from "@/components/layout/Container";
import { CheckCircle2, ShieldCheck, Database, SlidersHorizontal, Scale } from "lucide-react";
import { getTranslation } from "@/lib/i18n";

export async function Authority() {
    const t = await getTranslation();
    const icons = [Database, ShieldCheck, SlidersHorizontal, Scale];

    return (
        <section className="bg-white py-24 border-t border-border/50">
            <Container>
                <div className="max-w-4xl mx-auto text-center mb-16 fade-in slide-up">
                    <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 tracking-tight">
                        {t.authority.title}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {t.authority.items.map((item, idx) => {
                        const Icon = icons[idx] || CheckCircle2;
                        return (
                            <div key={idx} className="flex items-start gap-5 p-6 rounded-2xl bg-primary/5 hover:bg-primary/10 transition-colors fade-in slide-up border border-primary/10" style={{ animationDelay: `${idx * 150}ms` }}>
                                <div className="shrink-0 w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                                    <Icon className="w-6 h-6 text-accent" />
                                </div>
                                <p className="text-lg text-primary font-medium leading-relaxed pt-1">
                                    {item}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
