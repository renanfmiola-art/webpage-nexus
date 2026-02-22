"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

export function LanguageSwitcher() {
    const router = useRouter();
    const [isMounted, setIsMounted] = useState(false);

    // Default to PT
    const [currentLocale, setCurrentLocale] = useState<"pt-BR" | "en-US">("pt-BR");

    useEffect(() => {
        setIsMounted(true);
        // Let's get the cookie value if it exists on the client
        const match = document.cookie.match(/(^| )NEXT_LOCALE=([^;]+)/);
        if (match) {
            setCurrentLocale(match[2] as "pt-BR" | "en-US");
        }
    }, []);

    const changeLanguage = (locale: "pt-BR" | "en-US") => {
        // Set the cookie (valid for 365 days across the whole site)
        document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000; SameSite=Lax`;
        setCurrentLocale(locale);
        // Refresh the router to re-fetch Server Components with the new cookie
        router.refresh();
    };

    if (!isMounted) return <div className="w-[68px] h-[24px]"></div>; // Placeholder to avoid layout shift

    return (
        <div className="flex items-center gap-3">
            <button
                onClick={() => changeLanguage("pt-BR")}
                className={`transition-all duration-200 hover:scale-110 flex items-center justify-center rounded-full \${
                    currentLocale === "pt-BR" ? "ring-2 ring-primary ring-offset-2 ring-offset-background" : "opacity-60 hover:opacity-100"
                }`}
                title="Português (BR)"
                aria-label="Mudar para Português"
            >
                {/* SVGs for the flags */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 700" className="w-6 h-6 rounded-full shadow-sm">
                    <rect width="1000" height="700" fill="#009c3b" rx="500" ry="350" />
                    <polygon fill="#ffdf00" points="500,85 910,350 500,615 90,350" />
                    <circle cx="500" cy="350" r="175" fill="#002776" />
                    {/* simplified stars/band to fit a tiny icon cleanly */}
                    <path d="M 325,350 Q 500,200 675,350 Q 500,240 325,350 Z" fill="#fff" />
                </svg>
            </button>
            <button
                onClick={() => changeLanguage("en-US")}
                className={`transition-all duration-200 hover:scale-110 flex items-center justify-center rounded-full \${
                    currentLocale === "en-US" ? "ring-2 ring-primary ring-offset-2 ring-offset-background" : "opacity-60 hover:opacity-100"
                }`}
                title="English (US)"
                aria-label="Switch to English"
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7410 3900" className="w-6 h-6 rounded-full shadow-sm object-cover">
                    <rect width="7410" height="3900" fill="#b22234" />
                    <path d="M0,450H7410V750H0Zm0,600H7410v300H0Zm0,600H7410v300H0Zm0,600H7410v300H0Zm0,600H7410v300H0Zm0,600H7410v300H0Z" fill="#fff" />
                    <rect width="2964" height="2100" fill="#3c3b6e" />
                    <g fill="#fff">
                        <g id="s18">
                            <g id="s9">
                                <g id="s5">
                                    <g id="s4">
                                        <path id="s" d="M247,90l70.534,217.082-184.66-134.164h228.253L176.466,307.082Z" />
                                        <use href="#s" y="420" />
                                        <use href="#s" y="840" />
                                        <use href="#s" y="1260" />
                                    </g>
                                    <use href="#s" y="1680" />
                                </g>
                                <use href="#s4" x="247" y="210" />
                            </g>
                            <use href="#s9" x="494" />
                        </g>
                        <use href="#s18" x="988" />
                        <use href="#s9" x="1976" />
                        <use href="#s5" x="2470" />
                    </g>
                </svg>
            </button>
        </div>
    );
}
