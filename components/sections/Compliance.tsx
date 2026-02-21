import React from "react";
import { Container } from "@/components/layout/Container";
import { Lock, ShieldCheck, FileKey, Database } from "lucide-react";

export function Compliance() {
    const badges = [
        { icon: Lock, title: "SSL 256-bit", desc: "Criptografia de ponta a ponta" },
        { icon: ShieldCheck, title: "LGPD Ready", desc: "Conformidade Total Privada" },
        { icon: FileKey, title: "NDAs Rigorosos", desc: "Termos de sigilo corporativo" },
        { icon: Database, title: "ISO 27001", desc: "Práticas de segurança alinhadas" }
    ];

    return (
        <section id="compliance" className="bg-primary py-24 text-white relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3" />

            <Container className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <div className="flex flex-col gap-6 fade-in slide-up">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                            Segurança e <span className="text-accent text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#e6a800]">Compliance</span> de Dados
                        </h2>
                        <p className="text-white/80 text-lg leading-relaxed max-w-xl">
                            Na Nexus Intelligence, compreendemos que os dados fiscais são o principal ativo confidencial da sua empresa. Por isso, nossa infraestrutura foi concebida sob o conceito de "Security by Design".
                        </p>
                        <p className="text-white/80 text-lg leading-relaxed max-w-xl">
                            Garantimos a proteção total das informações trocadas, atuando de acordo com as diretrizes da Lei Geral de Proteção de Dados (LGPD) e as melhores práticas internacionais para armazenamento em provedores Tier 1.
                        </p>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 fade-in slide-up" style={{ animationDelay: '200ms' }}>
                        {badges.map((badge, idx) => {
                            const Icon = badge.icon;
                            return (
                                <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors flex flex-col gap-4">
                                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                                        <Icon className="w-6 h-6 text-accent" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-white mb-2">{badge.title}</h4>
                                        <p className="text-white/60 text-sm">{badge.desc}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </section>
    );
}
