"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { mainNav } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Container } from "@/components/layout/Container";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import type { Dictionary } from "@/lib/i18n/dictionaries";

export function Header({ t }: { t: Dictionary }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${isScrolled ? "bg-background/80 backdrop-blur-md border-border shadow-sm py-4" : "bg-transparent py-6"
                }`}
        >
            <Container className="flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <span className="text-2xl font-bold tracking-tighter text-foreground group-hover:text-primary transition-colors">
                        Nexus<span className="text-accent">Intelligence</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {t.mainNav.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-sm font-medium text-foreground/80 hover:text-foreground relative group transition-colors"
                        >
                            {item.title}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}
                </nav>

                {/* Desktop CTA */}
                <div className="hidden md:flex items-center gap-4">
                    <LanguageSwitcher />
                    <Button
                        variant="outline"
                        className="rounded-full border-primary text-primary hover:bg-accent hover:border-accent hover:text-white transition-all"
                        asChild
                    >
                        <Link href="#contato">{t.contactButtons.talkToUs}</Link>
                    </Button>
                </div>

                {/* Mobile Navigation (Sheet) */}
                <div className="md:hidden">
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="text-foreground">
                                <Menu className="w-6 h-6" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                            <VisuallyHidden>
                                <SheetTitle>Menu de navegação</SheetTitle>
                            </VisuallyHidden>
                            <div className="flex flex-col gap-6 pt-10">
                                <Link href="/" className="text-2xl font-bold mb-4" onClick={() => setIsOpen(false)}>
                                    Nexus<span className="text-accent">Intelligence</span>
                                </Link>
                                <nav className="flex flex-col gap-4">
                                    {t.mainNav.map((item) => (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            onClick={() => setIsOpen(false)}
                                            className="text-lg font-medium text-foreground hover:text-accent transition-colors py-2 border-b border-border/50"
                                        >
                                            {item.title}
                                        </Link>
                                    ))}
                                </nav>
                                <div className="mt-4 flex flex-col gap-4">
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm text-muted-foreground mr-2">Idioma:</span>
                                        <LanguageSwitcher />
                                    </div>
                                    <Button className="w-full rounded-full" asChild onClick={() => setIsOpen(false)}>
                                        <Link href="#contato">{t.contactButtons.talkToUs}</Link>
                                    </Button>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </Container>
        </header>
    );
}
