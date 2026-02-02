"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Page() {
    const { t } = useLanguage();

    const contactEmail = "contato@nexusintell.com.br";
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${contactEmail}`;

    return (
        <main className="min-h-[calc(100vh-64px)] pt-32 pb-48 px-6 md:px-12 lg:px-24">
            <div className="max-w-4xl mx-auto space-y-16">

                {/* Contact Manifesto */}
                <div className="space-y-8">
                    <p className="text-2xl md:text-3xl lg:text-4xl text-white/90 leading-relaxed font-medium tracking-tight">
                        {t.contact.p1}
                    </p>
                    <p className="text-xl md:text-2xl text-white/60 leading-relaxed">
                        {t.contact.p2}
                    </p>
                    <p className="text-xl md:text-2xl text-white/60 leading-relaxed">
                        {t.contact.p3}
                    </p>
                    <p className="text-lg md:text-xl text-primary font-bold tracking-tight pt-4">
                        {t.contact.p4}
                    </p>
                </div>

                {/* Gmail CTA Button */}
                <div className="pt-4">
                    <a
                        href={gmailUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-4 px-8 py-5 bg-white/5 border border-white/10 rounded-full text-white/90 text-sm font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105 active:scale-95 shadow-2xl group"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="transition-transform group-hover:-rotate-12"
                        >
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                        {t.contact.cta}
                    </a>
                </div>

                {/* Static Contact Info */}
                <div className="pt-16 border-t border-white/5 space-y-3">
                    <p className="text-white/30 text-sm font-medium tracking-wide">
                        contato@nexusintell.com.br
                    </p>
                    <p className="text-white/30 text-sm font-medium tracking-wide">
                        miola@nexusintell.com.br
                    </p>
                    <p className="text-white/30 text-sm font-medium tracking-wide pt-2">
                        +55 14 99862 2743
                    </p>
                </div>

            </div>
        </main>
    );
}
