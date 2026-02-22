import React from "react";
import { Container } from "@/components/layout/Container";
import { CheckCircle2, ShieldAlert, Cpu } from "lucide-react";
import Image from "next/image";
import { getTranslation } from "@/lib/i18n";

export async function Differential() {
    const t = await getTranslation();
    const points = t.differential.features.map(f => f.description);

    return (
        <section id="differential" className="bg-background py-24 overflow-hidden relative">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Text */}
                    <div className="flex flex-col gap-8 order-2 lg:order-1 fade-in slide-up">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium w-fit mb-6">
                                <Cpu className="w-4 h-4" />
                                <span>Metodologia Flow</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 tracking-tight">
                                {t.differential.title}
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {t.differential.description}
                            </p>
                        </div>

                        <ul className="flex flex-col gap-4">
                            {points.map((point, idx) => (
                                <li key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-white border border-border/50 shadow-sm">
                                    <div className="shrink-0 mt-0.5">
                                        <CheckCircle2 className="w-6 h-6 text-accent" />
                                    </div>
                                    <span className="text-primary font-medium">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Image / Abstract */}
                    <div className="relative order-1 lg:order-2 h-[400px] lg:h-[600px] w-full rounded-3xl overflow-hidden fade-in slide-up border border-border shadow-2xl">
                        {/* Dark premium overlay wrapper */}
                        <div className="absolute inset-0 bg-primary/95 flex flex-col items-center justify-center p-8 z-10 text-center">

                            <ShieldAlert className="w-24 h-24 text-accent animate-pulse mb-8" />
                            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                                Precisão de <span className="text-accent underline decoration-accent underline-offset-4 decoration-2">Big Four</span>
                            </h3>
                            <p className="text-white/80 text-lg max-w-sm">
                                Entregamos a mesma segurança jurídica e autoridade técnica das maiores auditorias do mundo, mas com a agilidade e inovação de uma startup de tecnologia.
                            </p>

                            {/* Decorative floating elements inside */}
                            <div className="absolute top-10 right-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
                            <div className="absolute bottom-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
                        </div>

                        {/* Simulated background pattern */}
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] z-0 opacity-5" />
                    </div>
                </div>
            </Container>
        </section>
    );
}
