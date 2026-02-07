"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Page() {
    const { t } = useLanguage();
    const c = t.contact as any;

    return (
        <main className="min-h-[calc(100vh-64px)] pt-32 pb-48 px-6 md:px-12 lg:px-24">
            <div className="max-w-4xl">
                {/* Hero Logo */}
                <div className="flex justify-start w-full mb-24">
                    <img
                        src="/hero-logo.png"
                        alt="NEXUS Intelligence"
                        className="h-[156px] md:h-[208px] lg:h-[260px] w-auto opacity-100"
                    />
                </div>

                {/* Contact Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-24">
                    <a
                        href={`mailto:${c.info.email}`}
                        className="flex flex-col items-start justify-center p-8 border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300 group text-left min-h-[160px]"
                    >
                        <span className="text-sm font-black text-white tracking-widest group-hover:translate-x-1 transition-transform duration-300">
                            {c.cards.email}
                        </span>
                    </a>

                    <a
                        href={`https://wa.me/5514998622743?text=${encodeURIComponent("Olá, Renan, vim pelo site da Nexus, e gostaria de mais informações...")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-start justify-center p-8 border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300 group text-left min-h-[160px]"
                    >
                        <span className="text-sm font-black text-white tracking-widest group-hover:translate-x-1 transition-transform duration-300">
                            {c.cards.whatsapp}
                        </span>
                    </a>
                </div>

                {/* Contact Info (Static) */}
                <div className="space-y-6 border-t border-white/5 pt-12">
                    <div className="flex items-center gap-4 text-white/40">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50">
                            <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                        <span className="text-sm tracking-widest font-light">{c.info.email}</span>
                    </div>

                    <div className="flex items-center gap-4 text-white/40">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                        <span className="text-sm tracking-widest font-light">{c.info.whatsapp}</span>
                    </div>
                </div>
            </div>
        </main>
    );
}
