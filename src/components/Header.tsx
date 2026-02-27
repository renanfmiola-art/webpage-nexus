"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const isHome = pathname === "/";

    const navLinks = [
        { name: "Como funciona", href: isHome ? "#como-funciona" : "/#como-funciona" },
        { name: "Abordagem", href: isHome ? "#abordagem" : "/#abordagem" },
        { name: "Para quem", href: isHome ? "#para-quem" : "/#para-quem" },
        { name: "Serviços", href: "/servicos" },
        { name: "Sobre", href: "/sobre" },
        { name: "Contato", href: "/contato" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <span className="font-semibold text-xl tracking-tight text-primary">Nexus Intelligence</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button asChild className="ml-4 font-semibold">
                        <Link href="https://wa.me/5514998622743" target="_blank" rel="noopener noreferrer">
                            Falar no WhatsApp
                        </Link>
                    </Button>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 text-foreground"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden border-t border-border bg-background px-4 py-4 space-y-4">
                    <nav className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Button asChild className="w-full font-semibold">
                            <Link href="https://wa.me/5514998622743" target="_blank" rel="noopener noreferrer">
                                Falar no WhatsApp
                            </Link>
                        </Button>
                    </nav>
                </div>
            )}
        </header>
    );
}
