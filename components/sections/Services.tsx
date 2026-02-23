import React from "react";
import { Container } from "@/components/layout/Container";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getTranslation } from "@/lib/i18n";
import { FileSearch, ArrowDownToLine, Split, CheckSquare } from "lucide-react";

export async function Services() {
    const t = await getTranslation();
    const serviceIcons = [FileSearch, ArrowDownToLine, Split, CheckSquare];
    return (
        <section id="services" className="bg-white py-24">
            <Container>
                <div className="max-w-3xl mx-auto text-center mb-16 fade-in slide-up">
                    <h3 className="text-3xl md:text-5xl font-bold text-primary mb-6 tracking-tight">
                        {t.services.title}
                    </h3>
                    <p className="text-lg text-muted-foreground">
                        {t.services.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 relative z-10">
                    {t.services.items.map((service, idx) => {
                        const Icon = serviceIcons[idx];
                        return (
                            <Card
                                key={idx}
                                className={`group border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white fade-in slide-up overflow-hidden`}
                                style={{ animationDelay: `${idx * 150}ms` }}
                            >
                                {/* Linha Accent superior */}
                                <div className="h-1 w-full bg-border group-hover:bg-accent transition-colors" />

                                <CardHeader>
                                    <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                                        <Icon className="w-7 h-7 text-primary" />
                                    </div>
                                    <CardTitle className="text-xl text-primary font-bold">
                                        {service.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="pb-8">
                                    <CardDescription className="text-base text-muted-foreground leading-relaxed h-auto min-h-[100px]">
                                        {service.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </Container>
        </section >
    );
}
