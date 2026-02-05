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
        { name: t.nav.travelflow, href: "/travelflow" },
        { name: t.nav.nexusClear, href: "/nexus-clear" },
        { name: t.nav.about, href: "/sobre" },
        { name: t.nav.contact, href: "/contato" },
        { name: t.nav.blog, href: "/blog" },
    ];

    const languages = [
        { code: 'pt', flag: 'https://flagcdn.com/w80/br.png', label: 'Português' },
        { code: 'en', flag: 'https://flagcdn.com/w80/us.png', label: 'English' },
        { code: 'fr', flag: 'https://flagcdn.com/w80/fr.png', label: 'Français' },
        { code: 'es', flag: 'https://flagcdn.com/w80/es.png', label: 'Español' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-[100] border-b border-white/5 bg-black/80 backdrop-blur-xl">
            <div className="max-w-7xl px-6 h-16 flex items-center justify-between">
                <div className="flex items-center gap-8">
                    <Link href="/" className="flex items-center gap-2 group cursor-pointer transition-opacity hover:opacity-80">
                        <img
                            src="/logo.png"
                            alt="NEXUS Logo"
                            className="h-8 md:h-9 w-auto invert brightness-110 contrast-[1.6] grayscale mix-blend-screen opacity-90"
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-2">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
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
                        className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none z-50"
                    >
                        <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                        <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
                        <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-black z-40 transition-transform duration-500 ease-in-out lg:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col h-full pt-24 pb-12 px-8 overflow-y-auto">
                    {/* Mobile Navigation Links */}
                    <div className="flex flex-col gap-6 mb-12">
                        {navItems.map((item, index) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`text-4xl font-black tracking-tighter uppercase transition-colors duration-300 
                                    ${pathname === item.href ? 'text-primary' : 'text-white/40 hover:text-white'}
                                `}
                                style={{ transitionDelay: `${index * 50}ms` }}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Language Switcher */}
                    <div className="mt-auto border-t border-white/5 pt-8">
                        <p className="text-white/20 text-xs font-bold tracking-[0.2em] uppercase mb-4">Escolha seu idioma</p>
                        <div className="grid grid-cols-2 gap-4">
                            {languages.map((lang) => (
                                <button
                                    key={lang.code}
                                    onClick={() => setLanguage(lang.code as any)}
                                    className={`flex items-center gap-3 p-3 rounded-xl border transition-all duration-300 ${language === lang.code ? 'bg-white/10 border-white/20 text-white' : 'bg-white/[0.02] border-white/5 text-white/40'}`}
                                >
                                    <img src={lang.flag} alt={lang.code} className="w-6 h-4 object-cover rounded-sm" />
                                    <span className="text-sm font-bold uppercase tracking-widest">{lang.label.split(' ')[0]}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};
