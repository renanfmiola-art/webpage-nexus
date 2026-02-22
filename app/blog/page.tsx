"use client";

import React, { useState } from "react";
import { Container } from "@/components/layout/Container";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { sortedBlogPostsPT, sortedBlogPostsEN } from "@/lib/blogData";

export default function BlogPage() {
    const [visibleCount, setVisibleCount] = useState(3);
    const [locale, setLocale] = useState<"pt-BR" | "en-US">("pt-BR");

    React.useEffect(() => {
        const match = document.cookie.match(/(^| )NEXT_LOCALE=([^;]+)/);
        if (match) {
            setLocale(match[2] as "pt-BR" | "en-US");
        }
    }, []);

    const blogPosts = locale === "en-US" ? sortedBlogPostsEN : sortedBlogPostsPT;

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 3);
    };

    const hasMore = visibleCount < blogPosts.length;
    const visiblePosts = blogPosts.slice(0, visibleCount);

    return (
        <main className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative bg-primary pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1e2538] via-primary to-primary opacity-80" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay" />

                <Container className="relative z-10">
                    <div className="max-w-3xl mx-auto text-center fade-in slide-up">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium w-fit mb-6 backdrop-blur-sm">
                            <span>{locale === "en-US" ? "Specialized Content" : "Conteúdo Especializado"}</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                            Blog & <span className="text-accent">Insights</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                            {locale === "en-US" ? "Articles, legislative updates, and tax intelligence to keep your business one step ahead." : "Artigos, atualizações legislativas e inteligência tributária para manter sua empresa um passo à frente."}
                        </p>
                    </div>
                </Container>
            </section>

            {/* Articles Grid Section */}
            <section className="py-20">
                <Container>
                    <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8 fade-in slide-up">
                        <h2 className="text-3xl font-bold text-primary">{locale === "en-US" ? "Latest Publications" : "Últimas Publicações"}</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {visiblePosts.map((post, idx) => (
                            <Card key={post.id} className="group overflow-hidden border-border/50 hover:border-accent/50 hover:shadow-xl transition-all duration-300 bg-white flex flex-col fade-in slide-up" style={{ animationDelay: `${(idx % 3) * 100}ms` }}>
                                <div
                                    className="h-48 w-full bg-cover bg-center relative overflow-hidden"
                                    style={{ backgroundImage: `url('${post.imageUrl}')` }}
                                >
                                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                <CardHeader className="pt-6 relative flex-grow">
                                    <h3 className="text-xl font-bold text-primary leading-tight group-hover:text-accent transition-colors line-clamp-3 mb-3">
                                        {post.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                </CardHeader>

                                <CardFooter className="flex-col items-start gap-4 pb-6 pt-0">
                                    <div className="w-full h-px bg-border my-2" />
                                    <div className="flex flex-wrap items-center justify-between w-full text-xs text-muted-foreground gap-2">
                                        <div className="flex items-center gap-4">
                                            <span className="flex items-center gap-1.5 font-medium">
                                                <Calendar className="w-3.5 h-3.5" />
                                                {post.date}
                                            </span>
                                        </div>
                                    </div>
                                    <Button asChild variant="ghost" className="w-full justify-between hover:bg-transparent hover:text-accent px-0 mt-2 text-primary group-hover:text-accent transition-colors font-semibold">
                                        <Link href={`/blog/${post.id}`}>
                                            {locale === "en-US" ? "Read full article" : "Ler artigo completo"}
                                            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>

                    {/* Pagination/Load More */}
                    {hasMore && (
                        <div className="mt-16 text-center fade-in slide-up">
                            <Button
                                onClick={handleLoadMore}
                                size="lg"
                                variant="outline"
                                className="rounded-full px-8 text-primary border-primary/20 hover:bg-primary/5 font-semibold"
                            >
                                {locale === "en-US" ? "Load more articles" : "Carregar mais artigos"}
                            </Button>
                        </div>
                    )}
                </Container>
            </section >
        </main >
    );
}
