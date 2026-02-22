import React from "react";
import { Container } from "@/components/layout/Container";
import { Lock, ShieldCheck, FileKey, Database } from "lucide-react";
import { getTranslation } from "@/lib/i18n";

export async function Compliance() {
    const t = await getTranslation();
    const badgeIcons = [Lock, ShieldCheck, FileKey, Database];
    const badges = t.compliance.items.map((item, idx) => ({
        icon: badgeIcons[idx],
        title: item.title,
        desc: item.description
    }));

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
                            {t.compliance.title.split(" e ")[0]} e <span className="text-accent text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#e6a800]">{t.compliance.title.split(" e ")[1] || "Compliance"}</span>
                        </h2>
                        <p className="text-white/80 text-lg leading-relaxed max-w-xl">
                            {t.compliance.description}
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
