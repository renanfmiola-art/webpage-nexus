"use client";

import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
    const { language, setLanguage, t } = useLanguage();
    const pathname = usePathname();

    const navItems = [
        { name: t.nav.home, href: "/" },
        { name: t.nav.about, href: "/sobre" },
        { name: t.nav.founders, href: "/founders" },
        { name: t.nav.services, href: "/servicos" },
        { name: t.nav.media, href: "/midia" },
        { name: t.nav.contact, href: "/contato" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/80 backdrop-blur-xl">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group cursor-pointer transition-opacity hover:opacity-80">
                    <img
                        src="/logo.png"
                        alt="NEXUS Logo"
                        className="h-9 w-auto invert brightness-110 contrast-[1.6] grayscale mix-blend-screen opacity-90"
                    />
                </Link>

                <div className="hidden lg:flex items-center gap-2">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ease-out
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

                <div className="flex items-center gap-3">
                    {/* Language Switchers */}
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setLanguage('pt')}
                            className={`w-8 h-8 rounded-full border-2 transition-all overflow-hidden ${language === 'pt' ? 'border-primary' : 'border-transparent opacity-60 hover:opacity-100'}`}
                            title="Português"
                        >
                            <img src="https://flagcdn.com/w80/br.png" alt="BR" className="w-full h-full object-cover" />
                        </button>
                        <button
                            onClick={() => setLanguage('en')}
                            className={`w-8 h-8 rounded-full border-2 transition-all overflow-hidden ${language === 'en' ? 'border-primary' : 'border-transparent opacity-60 hover:opacity-100'}`}
                            title="English"
                        >
                            <img src="https://flagcdn.com/w80/us.png" alt="US" className="w-full h-full object-cover" />
                        </button>
                        <button
                            onClick={() => setLanguage('fr')}
                            className={`w-8 h-8 rounded-full border-2 transition-all overflow-hidden ${language === 'fr' ? 'border-primary' : 'border-transparent opacity-60 hover:opacity-100'}`}
                            title="Français"
                        >
                            <img src="https://flagcdn.com/w80/fr.png" alt="FR" className="w-full h-full object-cover" />
                        </button>
                        <button
                            onClick={() => setLanguage('es')}
                            className={`w-8 h-8 rounded-full border-2 transition-all overflow-hidden ${language === 'es' ? 'border-primary' : 'border-transparent opacity-60 hover:opacity-100'}`}
                            title="Español"
                        >
                            <img src="https://flagcdn.com/w80/es.png" alt="ES" className="w-full h-full object-cover" />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};
