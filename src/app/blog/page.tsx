"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Page() {
    const { t } = useLanguage();
    const b = t.blog;

    return (
        <main className="min-h-[calc(100vh-64px)] pt-32 pb-48 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-24">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter mb-8 uppercase">
                        {b.title}
                    </h1>
                    <div className="w-12 h-0.5 bg-white/20 mb-8" />
                    <p className="text-xl md:text-2xl text-white/60 leading-relaxed max-w-2xl font-medium tracking-tight">
                        {b.subtitle}
                    </p>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {b.posts.map((post: any) => (
                        <article
                            key={post.id}
                            className="group flex flex-col border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-all duration-500 overflow-hidden"
                        >
                            <div className="p-8 space-y-6 flex-1 flex flex-col">
                                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/30 border-l border-white/20 pl-4 py-1">
                                    {post.date}
                                </span>

                                <h2 className="text-xl md:text-2xl font-black text-white tracking-tight uppercase leading-[0.9] group-hover:text-primary transition-colors">
                                    {post.title}
                                </h2>

                                <p className="text-white/50 text-base leading-relaxed line-clamp-3">
                                    {post.excerpt}
                                </p>

                                <div className="mt-auto pt-8 border-t border-white/5 flex items-center gap-4 group/btn cursor-pointer">
                                    <span className="text-[10px] font-black tracking-widest uppercase text-white group-hover/btn:translate-x-2 transition-transform duration-300">
                                        Ler Artigo
                                    </span>
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="3"
                                        className="text-white/20 group-hover/btn:text-white transition-colors"
                                    >
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </main>
    );
}
