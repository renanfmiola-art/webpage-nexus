"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Page() {
    const { t } = useLanguage();

    const founders = [
        {
            data: t.founders.renan,
            image: "/renan-miola.jpg",
            linkedin: "https://www.linkedin.com/in/renan-fernando-miola-4132182bb/"
        },
        {
            data: t.founders.murilo,
            image: "/murilo-demarchi.png",
            linkedin: "https://www.linkedin.com/in/murilosanches/" // Placeholder LinkedIn
        }
    ];

    return (
        <main className="min-h-[calc(100vh-64px)] pt-32 pb-48 px-6 md:px-12 lg:px-24">
            <div className="max-w-6xl mx-auto space-y-12">
                {founders.map((founder, index) => (
                    <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-white/[0.02] border border-white/5 rounded-[2.5rem] overflow-hidden backdrop-blur-sm group">
                        {/* Left side: Photo */}
                        <div className="lg:col-span-4 relative aspect-[4/5] lg:aspect-auto">
                            <img
                                src={founder.image}
                                alt={founder.data.name}
                                className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                        </div>

                        {/* Right side: Content */}
                        <div className="lg:col-span-8 p-8 md:p-12 flex flex-col justify-center relative">
                            {/* LinkedIn Icon/Button */}
                            <a
                                href={founder.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 transition-all duration-300 hover:bg-white/10 hover:text-white hover:scale-110"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                            </a>

                            <div className="space-y-6">
                                <div>
                                    <h1 className="text-3xl md:text-4xl font-black text-white tracking-tighter mb-2">
                                        {founder.data.name}
                                    </h1>
                                    <p className="text-primary font-bold text-xs md:text-sm tracking-widest leading-relaxed uppercase">
                                        {founder.data.title}
                                    </p>
                                </div>

                                <p className="text-lg text-white/60 leading-relaxed text-justify md:text-left">
                                    {founder.data.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}

                <p className="text-lg md:text-xl text-white/40 leading-relaxed max-w-3xl pt-8 border-t border-white/5">
                    {t.founders.footer}
                </p>
            </div>
        </main>
    );
}
