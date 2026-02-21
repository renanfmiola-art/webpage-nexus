"use client";

import React from "react";
import { Container } from "@/components/layout/Container";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/lib/constants";

export function FAQ() {
    return (
        <section id="faq" className="bg-white py-24 border-t border-border">
            <Container>
                <div className="max-w-3xl mx-auto text-center mb-16 fade-in slide-up">
                    <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-4">Dúvidas Frequentes</h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-primary mb-6 tracking-tight">
                        Transparência e Clareza
                    </h3>
                    <p className="text-lg text-muted-foreground">
                        Esclareça os principais pontos sobre nossa metodologia, segurança e modelo de parceria para o seu negócio.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto fade-in slide-up" style={{ animationDelay: '200ms' }}>
                    <Accordion type="single" collapsible className="w-full">
                        {faqItems.map((faq, idx) => (
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
