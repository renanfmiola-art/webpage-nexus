import React from "react";
import { Container } from "@/components/layout/Container";
import Link from "next/link";
import { ArrowLeft, Calendar, ExternalLink } from "lucide-react";
import { blogPosts } from "@/lib/blogData";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function BlogPostDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const post = blogPosts.find((p) => p.id === id);

    if (!post) {
        notFound();
    }

    // Split content by paragraphs
    const paragraphs = post.content.split('\n').filter(p => p.trim() !== '');

    return (
        <main className="min-h-screen bg-background">
            <Container className="max-w-4xl py-32">
                <Link href="/blog" className="inline-flex items-center text-primary hover:text-accent font-medium mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Voltar ao blog
                </Link>

                <header className="mb-12">
                    <div className="flex items-center gap-4 text-sm text-accent font-medium mb-4">
                        <span className="flex items-center gap-1.5">
                            <Calendar className="w-4 h-4" />
                            {post.date}
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tight mb-8 leading-tight">
                        {post.title}
                    </h1>
                    <div
                        className="w-full h-[400px] rounded-2xl bg-cover bg-center mb-8 border border-border"
                        style={{ backgroundImage: `url('${post.imageUrl}')` }}
                    />
                </header>

                <article className="prose prose-slate max-w-none text-muted-foreground prose-headings:text-primary prose-a:text-accent leading-loose text-lg mb-16">
                    {paragraphs.map((paragraph, index) => {
                        // Check if it's a bold line
                        if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                            return <h3 key={index} className="text-xl font-bold text-primary mt-8 mb-4">{paragraph.replace(/\\*\\*/g, '')}</h3>;
                        }
                        return <p key={index} className="mb-6">{paragraph}</p>;
                    })}
                </article>

                <footer className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                        <p className="text-sm font-bold text-primary mb-1">Fonte original do artigo:</p>
                        <a
                            href={post.sourceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-accent hover:underline inline-flex items-center gap-1.5"
                        >
                            {post.sourceName}
                            <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                        <p className="text-xs text-muted-foreground mt-2">Autor: {post.author}</p>
                    </div>
                </footer>
            </Container>
        </main>
    );
}
