"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, formatPhone, sanitizeText } from "@/lib/security";
import { z } from "zod";
import Link from "next/link";
import { mainNav, siteConfig } from "@/lib/constants";
import { Shield, Mail, Phone, MapPin, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Container } from "@/components/layout/Container";

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function Footer() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const {
        register,
        handleSubmit,
        setValue,
        reset,
        formState: { errors },
    } = useForm<ContactFormValues>({
        resolver: zodResolver(contactFormSchema),
    });

    const onSubmit = async (data: ContactFormValues) => {
        setIsSubmitting(true);
        setErrorMsg("");
        try {
            const subject = encodeURIComponent("Solicitação de Análise - " + (data.company || data.name));
            let body = `Nome: ${data.name}\nEmail: ${data.email}\nTelefone: ${data.phone}\n`;
            if (data.company) {
                body += `Empresa: ${data.company}\n`;
            }
            body += `\nMensagem:\n${data.message}`;

            const encodedBody = encodeURIComponent(body);
            window.location.href = `mailto:miola@nexusintell.com.br?subject=${subject}&body=${encodedBody}`;

            setIsSuccess(true);
            reset();
        } catch (error) {
            setErrorMsg("Falha ao abrir cliente de email.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <footer id="contato" className="bg-primary pt-20 pb-10 text-primary-foreground">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
                    {/* Col 1: Brand & Info */}
                    <div className="flex flex-col gap-6">
                        <Link href="/" className="flex items-center gap-2 group w-fit">
                            <span className="text-2xl font-bold tracking-tighter text-white">
                                Nexus<span className="text-accent">Intelligence</span>
                            </span>
                        </Link>
                        <p className="text-white/70 text-sm leading-relaxed">
                            {siteConfig.description}
                        </p>
                        <div className="flex items-center gap-2 text-accent text-sm font-semibold">
                            <Shield className="w-4 h-4" />
                            <span>LGPD Compliant</span>
                        </div>
                        <div className="flex flex-col gap-3 mt-2 text-sm text-white/80">
                            <a href="mailto:miola@nexusintell.com.br" className="flex items-center gap-3 hover:text-accent transition-colors">
                                <Mail className="w-4 h-4 text-accent" />
                                {siteConfig.contact.email}
                            </a>
                            <a href="https://wa.me/5514936180146" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-accent transition-colors">
                                <Phone className="w-4 h-4 text-accent" />
                                {siteConfig.contact.phone}
                            </a>
                            <span className="flex items-start gap-3">
                                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                                Marília | SP
                            </span>
                        </div>
                    </div>

                    {/* Col 2: Navigation */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6">Navegação</h3>
                        <ul className="flex flex-col gap-4">
                            {mainNav.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="text-white/70 hover:text-accent transition-colors text-sm"
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 3 & 4: Contact Form */}
                    <div className="lg:col-span-2">
                        <h3 className="text-lg font-semibold text-white mb-6">Fale Conosco</h3>
                        {isSuccess ? (
                            <div className="bg-white/10 rounded-xl p-8 text-center border border-white/20 backdrop-blur-sm">
                                <Send className="w-12 h-12 text-accent mx-auto mb-4" />
                                <h4 className="text-xl font-bold text-white mb-2">Mensagem Enviada!</h4>
                                <p className="text-white/80 text-sm mb-4">
                                    Nossa equipe de especialistas entrará em contato em breve.
                                </p>
                                <Button variant="ghost" className="text-white" onClick={() => setIsSuccess(false)}>
                                    Enviar nova mensagem
                                </Button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 bg-white/5 p-6 rounded-2xl border border-white/10">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="flex flex-col gap-1.5">
                                        <Input
                                            placeholder="Seu Nome completo *"
                                            {...register("name")}
                                            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-accent"
                                        />
                                        {errors.name && <span className="text-red-400 text-xs">{errors.name.message}</span>}
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <Input
                                            placeholder="E-mail corporativo *"
                                            type="email"
                                            {...register("email")}
                                            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-accent"
                                        />
                                        {errors.email && <span className="text-red-400 text-xs">{errors.email.message}</span>}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="flex flex-col gap-1.5">
                                        <Input
                                            placeholder="Telefone / WhatsApp *"
                                            {...register("phone")}
                                            onChange={(e) => {
                                                const formatted = formatPhone(e.target.value);
                                                setValue("phone", formatted);
                                            }}
                                            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-accent"
                                        />
                                        {errors.phone && <span className="text-red-400 text-xs">{errors.phone.message}</span>}
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <Input
                                            placeholder="Sua Empresa (opcional)"
                                            {...register("company")}
                                            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-accent"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <textarea
                                        placeholder="Como podemos ajudar sua empresa? *"
                                        {...register("message")}
                                        rows={4}
                                        className="bg-white/10 border border-white/20 rounded-md text-white placeholder:text-white/50 p-3 text-sm focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-accent resize-none transition-all"
                                    />
                                    {errors.message && <span className="text-red-400 text-xs">{errors.message.message}</span>}
                                </div>

                                {errorMsg && <div className="text-red-400 bg-red-400/10 p-2 rounded text-xs text-center border border-red-400/20">{errorMsg}</div>}

                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-accent hover:bg-accent/90 text-white py-6 text-sm font-semibold rounded-full group transition-all"
                                >
                                    {isSubmitting ? "Enviando..." : "Solicitar Análise de Especialista"}
                                    {!isSubmitting && <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />}
                                </Button>

                                <p className="text-[10px] text-white/50 text-center mt-2 leading-relaxed">
                                    Ao enviar, você concorda com nossos <Link href="/termos-de-uso" className="underline hover:text-white">Termos de Uso</Link> e <Link href="/politica-de-privacidade" className="underline hover:text-white">Política de Privacidade</Link>. Seus dados estão protegidos.
                                </p>
                            </form>
                        )}
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
                    <p>© {new Date().getFullYear()} Nexus Intelligence. Todos os direitos reservados.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/politica-de-privacidade" className="hover:text-white transition-colors">Política de Privacidade</Link>
                        <span className="hidden md:inline">|</span>
                        <Link href="/termos-de-uso" className="hover:text-white transition-colors">Termos de Uso</Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
