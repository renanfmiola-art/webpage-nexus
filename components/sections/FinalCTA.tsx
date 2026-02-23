import React from "react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { getTranslation } from "@/lib/i18n";

export async function FinalCTA() {
    const t = await getTranslation();

    return (
        <section className="bg-white py-24 pb-32">
            <Container>
                <div className="max-w-4xl mx-auto bg-primary text-white rounded-[2rem] p-10 md:p-16 text-center relative overflow-hidden shadow-2xl fade-in slide-up">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent opacity-60" />

                    <div className="relative z-10 flex flex-col items-center gap-8">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                            {t.finalCta.headline}
                        </h2>
                        <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
                            {t.finalCta.description}
                        </p>
                        <Button size="lg" className="rounded-full bg-accent hover:bg-accent/90 text-white px-10 py-7 text-lg font-semibold border-0 mt-4 group" asChild>
                            <a href={`https://wa.me/${t.siteConfig.contact.phone.replace(/[\s-+]/g, "")}`} target="_blank" rel="noopener noreferrer">
                                {t.finalCta.button}
                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </Button>
                    </div>
                </div>
            </Container>
        </section>
    );
}
