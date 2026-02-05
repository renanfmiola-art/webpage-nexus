"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Page() {
    const { t } = useLanguage();

    return (
        <main className="min-h-[calc(100vh-64px)] pt-32 pb-48 px-6 md:px-12 lg:px-24">
            <div className="max-w-4xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter mb-12">
                    {t.nav.contact}
                </h1>

                <div className="flex justify-start w-full mb-16">
                    <img
                        src="/hero-logo.png"
                        alt="NEXUS Intelligence"
                        className="h-[156px] md:h-[208px] lg:h-[260px] w-auto opacity-100"
                    />
                </div>
            </div>
        </main>
    );
}
