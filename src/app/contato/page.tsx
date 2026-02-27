"use client";

import { MapPin, MessageCircle, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useState } from "react";

export default function ContatoPage() {
    const [isSent, setIsSent] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Coleta os dados do formulário
        const formData = new FormData(e.currentTarget);
        const name = formData.get('nome');
        const whatsapp = formData.get('whatsapp');
        const email = formData.get('email');
        const message = formData.get('mensagem');

        // Cria link mailto
        const subject = encodeURIComponent("Novo Contato via Site - Nexus Intelligence");
        const body = encodeURIComponent(`Nome/Empresa: ${name}\nWhatsApp: ${whatsapp}\nE-mail: ${email}\n\nMensagem:\n${message}`);

        window.location.href = `mailto:miola@nexusintell.com.br?subject=${subject}&body=${body}`;

        setIsSent(true);
    };

    return (
        <div className="flex flex-col min-h-screen bg-background pb-32">

            {/* HEADER */}
            <section className="bg-primary pt-24 pb-16 text-center text-primary-foreground">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Fale Conosco</h1>
                    <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
                        Não perca mais tempo ou margem. Fale com a equipe da Nexus Intelligence e agende seu diagnóstico.
                    </p>
                </div>
            </section>

            {/* CONTEÚDO DA PÁGINA */}
            <section className="container mx-auto px-4 pt-24 max-w-5xl">
                <div className="grid md:grid-cols-5 gap-12">

                    {/* INFORMAÇÕES DE CONTATO */}
                    <div className="md:col-span-2 space-y-8">
                        <h2 className="text-2xl font-bold text-foreground">Canais Diretos</h2>
                        <p className="text-muted-foreground font-medium mb-8">
                            Nossa resposta mais rápida acontece sempre via WhatsApp.
                        </p>

                        <div className="space-y-6">
                            <a
                                href="https://wa.me/5514998622743"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-start gap-4 p-4 rounded-xl border border-border bg-white hover:border-primary/50 transition-colors group"
                            >
                                <div className="bg-primary/10 p-3 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <MessageCircle size={24} />
                                </div>
                                <div>
                                    <p className="font-bold text-foreground">WhatsApp</p>
                                    <p className="text-muted-foreground">+55 14 99862-2743</p>
                                    <span className="text-sm text-accent font-semibold mt-1 inline-block">Resposta Prioritária</span>
                                </div>
                            </a>

                            <a
                                href="mailto:miola@nexusintell.com.br"
                                className="flex items-start gap-4 p-4 rounded-xl border border-border bg-white hover:border-primary/50 transition-colors group"
                            >
                                <div className="bg-secondary p-3 rounded-full text-secondary-foreground group-hover:bg-secondary/80 transition-colors">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="font-bold text-foreground">E-mail</p>
                                    <p className="text-muted-foreground">miola@nexusintell.com.br</p>
                                </div>
                            </a>

                            <div className="flex items-start gap-4 p-4 rounded-xl border border-border bg-white">
                                <div className="bg-secondary p-3 rounded-full text-secondary-foreground">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="font-bold text-foreground">Localização</p>
                                    <p className="text-muted-foreground">Marília, SP – Brasil</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* FORMULÁRIO */}
                    <div className="md:col-span-3">
                        <div className="bg-white p-8 md:p-10 rounded-2xl border border-border shadow-sm">
                            <h2 className="text-2xl font-bold text-foreground mb-6">Envie uma Mensagem</h2>

                            {isSent ? (
                                <div className="bg-green-50 border border-green-200 p-6 rounded-xl text-center">
                                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Send size={32} />
                                    </div>
                                    <h3 className="text-xl font-bold text-green-800 mb-2">Mensagem Enviada!</h3>
                                    <p className="text-green-700">Recebemos seu contato. Nossa equipe retornará em breve.</p>
                                    <Button variant="outline" className="mt-6" onClick={() => setIsSent(false)}>
                                        Enviar nova mensagem
                                    </Button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="space-y-2">
                                        <Label htmlFor="nome">Seu Nome / Empresa</Label>
                                        <Input id="nome" name="nome" required placeholder="Ex: João (Farmácia Central)" className="h-12" />
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="whatsapp">WhatsApp</Label>
                                            <Input id="whatsapp" name="whatsapp" type="tel" required placeholder="(14) 99999-9999" className="h-12" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email">E-mail</Label>
                                            <Input id="email" name="email" type="email" placeholder="contato@empresa.com" className="h-12" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="mensagem">Mensagem / Como podemos ajudar?</Label>
                                        <Textarea
                                            id="mensagem"
                                            name="mensagem"
                                            required
                                            placeholder="Gostaria de agendar um projeto para organizar meus dados financeiros..."
                                            className="min-h-[120px] resize-none"
                                        />
                                    </div>

                                    <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white font-semibold h-14">
                                        Enviar Mensagem
                                    </Button>

                                    <p className="text-xs text-center text-muted-foreground mt-4">
                                        Ao enviar, você concorda com nossos <Link href="/termos" className="underline">Termos de Uso</Link> e <Link href="/privacidade" className="underline">Política de Privacidade</Link>.
                                    </p>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
