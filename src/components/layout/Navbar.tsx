"use client";

import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export const Navbar = () => {
    const { language, setLanguage, t } = useLanguage();
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Close menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    const navItems = [
        { name: t.nav.home, href: "/" },
        { name: t.nav.nexusflow, href: "/nexusflow" },
        { name: t.nav.nexusInk, href: "/nexus-ink" },
        { name: t.nav.nexusClear, href: "/nexus-clear" },
        { name: t.nav.about, href: "/sobre" },
        { name: t.nav.contact, href: "/contato" },
        { name: t.nav.blog, href: "/blog" },
    ];

    const languages = [
        { code: 'pt', flag: 'https://flagcdn.com/w80/br.png', label: 'Português' },
        { code: 'en', flag: 'https://flagcdn.com/w80/us.png', label: 'English' },
    ];

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-[100] border-b border-white/5 bg-black/80 backdrop-blur-xl">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between relative">
                    <Link href="/" className="flex items-center gap-2 group cursor-pointer transition-opacity hover:opacity-80">
                        <img
                            src="/logo.png"
                            alt="NEXUS Logo"
                            className="h-10 md:h-12 w-auto opacity-100"
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-2 absolute left-1/2 -translate-x-1/2">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`px-4 py-2 rounded-lg text-[11px] font-bold tracking-widest uppercase transition-all duration-300
                                    ${pathname === item.href
                                        ? "bg-white/10 text-white shadow-[0_4px_12px_rgba(0,0,0,0.5)] border border-white/10"
                                        : "text-white/60 hover:text-white hover:bg-white/[0.05]"
                                    }
                                `}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Languages - Centered */}
                    <div className="md:hidden flex items-center justify-center gap-4 absolute left-1/2 -translate-x-1/2">
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => setLanguage(lang.code as any)}
                                className={`w-6 h-6 rounded-full border-2 transition-all overflow-hidden p-0 ${language === lang.code ? 'border-white/40 scale-110' : 'border-transparent opacity-40 hover:opacity-100'}`}
                            >
                                <img src={lang.flag} alt={lang.code.toUpperCase()} className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        {/* Language Switchers (Desktop) */}
                        <div className="hidden md:flex items-center gap-2">
                            {languages.map((lang) => (
                                <button
                                    key={lang.code}
                                    onClick={() => setLanguage(lang.code as any)}
                                    className={`w-8 h-8 rounded-full border-2 transition-all overflow-hidden ${language === lang.code ? 'border-primary' : 'border-transparent opacity-60 hover:opacity-100'}`}
                                    title={lang.label}
                                >
                                    <img src={lang.flag} alt={lang.code.toUpperCase()} className="w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none z-50 ml-auto"
                        >
                            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
                            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay - OUTSIDE NAV TAG TO ENSURE SOLID BACKGROUND */}
            <div
                className={`fixed left-0 right-0 bottom-0 bg-[#000000] z-[95] transition-all duration-300 ease-in-out md:hidden flex flex-col items-center justify-center p-8
                    ${isMenuOpen ? 'top-16 opacity-100 visible pointer-events-auto' : 'top-[-100%] opacity-0 invisible pointer-events-none'}
                `}
            >
                <div className="flex flex-col gap-10 w-full max-w-xs text-center">
                    {navItems.map((item, index) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className={`text-2xl font-black tracking-[0.2em] uppercase transition-all duration-300
                                ${pathname === item.href ? 'text-white' : 'text-white/40 hover:text-white'}
                            `}
                            style={{
                                transitionDelay: `${index * 50}ms`,
                                transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)'
                            }}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};
