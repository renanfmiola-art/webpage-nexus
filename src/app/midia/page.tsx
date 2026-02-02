"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Page() {
    const { t } = useLanguage();

    return (
        <main className="min-h-[calc(100vh-64px)] pt-32 pb-48 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                {/* Press Contact / Ramon's Card */}
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-white/30 text-xs font-bold tracking-[0.3em] uppercase mb-8 ml-2">
                        {t.media.press_contact}
                    </h2>

                    <div className="bg-white/[0.02] border border-white/5 rounded-[2.5rem] overflow-hidden backdrop-blur-sm group">
                        <div className="flex flex-col md:flex-row">
                            {/* Image Section */}
                            <div className="w-full md:w-1/3 aspect-square md:aspect-auto relative overflow-hidden">
                                <img
                                    src="/ramon.png"
                                    alt={t.media.ramon.name}
                                    className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 md:hidden" />
                            </div>

                            {/* Content Section */}
                            <div className="w-full md:w-2/3 p-8 md:p-10 flex flex-col justify-center relative">
                                {/* Profile Link Button (LinkedIn) - Same as Founders */}
                                <a
                                    href="https://www.linkedin.com/in/monfranco8/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110 active:scale-95 z-20"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                </a>

                                <div className="space-y-4 pr-12 md:pr-0">
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-black text-white tracking-tighter uppercase">
                                            {t.media.ramon.name}
                                        </h3>
                                        <p className="text-primary font-bold text-[10px] md:text-xs tracking-widest uppercase mt-1">
                                            {t.media.ramon.title}
                                        </p>
                                    </div>

                                    <p className="text-white/60 text-base md:text-lg leading-relaxed font-medium">
                                        {t.media.ramon.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
