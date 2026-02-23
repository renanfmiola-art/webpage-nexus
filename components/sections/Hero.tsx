import React from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Shield, TrendingUp, CheckCircle } from "lucide-react";
import { getTranslation } from "@/lib/i18n";

export async function Hero() {
    const t = await getTranslation();
    return (
        <section className="relative w-full bg-primary overflow-hidden min-h-[90vh] flex items-center pt-20">
            {/* Background Gradient similar to valortributario */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1e2538] via-primary to-primary opacity-80" />

            {/* Pattern Overlay */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay" />

            <Container className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center py-16">
                {/* Left Text Content */}
                <div className="flex flex-col gap-8 text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium w-fit mx-auto lg:mx-0 fade-in slide-up">
                        <Shield className="w-4 h-4" />
                        <span>{t.hero.badge}</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] fade-in slide-up animation-delay-100">
                        {t.hero.title1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#e6a800]">{t.hero.highlight}</span> {t.hero.title2}
                    </h1>

                    <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed fade-in slide-up animation-delay-200">
                        {t.hero.description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 fade-in slide-up animation-delay-300">
                        <Button size="lg" className="rounded-full bg-accent hover:bg-accent/90 text-white px-8 py-6 text-base font-semibold border-0" asChild>
                            <a href={`https://wa.me/${t.siteConfig.contact.phone.replace(/[\s-+]/g, "")}`} target="_blank" rel="noopener noreferrer">{t.contactButtons.talkToUs}</a>
                        </Button>
                        <Button size="lg" variant="outline" className="rounded-full border-white/20 text-white bg-white/5 hover:bg-white/10 hover:text-white px-8 py-6 text-base font-semibold backdrop-blur-sm" asChild>
                            <Link href="#services">{t.mainNav.find(n => n.href === "/#services")?.title || "Soluções"}</Link>
                        </Button>
                    </div>
                </div>

                {/* Right Floating Elements / Mockup */}
                <div className="relative h-[400px] lg:h-[600px] hidden md:flex items-center justify-end lg:pr-10 fade-in animation-delay-400">
                    {/* Main central element */}
                    <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-3xl z-[-1]" />

                    {/* Cards Tower */}
                    <div className="flex flex-col gap-2 relative z-10 w-72 xl:w-80">
                        {/* Floating Card 1 */}
                        <div className="bg-card px-6 py-5 rounded-2xl shadow-2xl border border-white/10 w-full">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                                    <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground font-medium">{t.hero.cards[0].top}</p>
                                    <p className="text-2xl font-bold text-foreground">{t.hero.cards[0].bottom}</p>
                                </div>
                            </div>
                        </div>

                        {/* Floating Card 2 */}
                        <div className="bg-card px-6 py-5 rounded-2xl shadow-2xl border border-white/10 w-full">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                                    <CheckCircle className="w-6 h-6 text-accent" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground font-medium">{t.hero.cards[1].top}</p>
                                    <p className="text-2xl font-bold text-foreground">{t.hero.cards[1].bottom}</p>
                                </div>
                            </div>
                        </div>

                        {/* Floating Card 3 */}
                        <div className="bg-card px-6 py-5 rounded-2xl shadow-2xl border border-white/10 w-full">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0">
                                    <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground font-medium">{t.hero.cards[2].top}</p>
                                    <p className="text-2xl font-bold text-foreground">{t.hero.cards[2].bottom}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Floating Line/Abstract Shapes */}
                    <div className="absolute inset-0 border-[0.5px] border-white/10 rounded-full w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" />
                    <div className="absolute inset-0 border-[0.5px] border-white/10 rounded-full w-[550px] h-[550px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" />
                </div>
            </Container>
        </section>
    );
}
