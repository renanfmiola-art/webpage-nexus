"use client";

import React from "react";
import { Container } from "@/components/layout/Container";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import type { Dictionary } from "@/lib/i18n/dictionaries";

export function FAQ({ t }: { t: Dictionary }) {
    return (
        <section id="faq" className="bg-white py-24 border-t border-border">
            <Container>
                <div className="max-w-3xl mx-auto text-center mb-16 fade-in slide-up">
                    <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-4">{t.mainNav.find(n => n.href === "/#faq")?.title || "FAQ"}</h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-primary mb-6 tracking-tight">
                        {t.faq.title}
                    </h3>
                    <p className="text-lg text-muted-foreground">
                        {t.faq.description}
                    </p>
                </div>

                <div className="max-w-3xl mx-auto fade-in slide-up" style={{ animationDelay: '200ms' }}>
                    <Accordion type="single" collapsible className="w-full">
                        {t.faq.items.map((faq, idx) => (
                            <AccordionItem key={idx} value={`item-${idx}`} className="border-border">
                                <AccordionTrigger className="text-left py-6 text-base md:text-lg font-semibold text-primary hover:text-accent transition-colors">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </Container>
        </section >
    );
}
