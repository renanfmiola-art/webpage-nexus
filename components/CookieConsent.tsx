"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("nexus-cookie-consent");
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const handleAcceptAll = () => {
        localStorage.setItem("nexus-cookie-consent", "all");
        setIsVisible(false);
        // Initialize GA4 or other analytics here
    };

    const handleRejectNonEssential = () => {
        localStorage.setItem("nexus-cookie-consent", "essential");
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 sm:p-6 pointer-events-none fade-in slide-up">
            <div className="bg-white border rounded-2xl shadow-xl p-6 max-w-4xl mx-auto flex flex-col md:flex-row gap-6 items-center justify-between pointer-events-auto">
                <div className="flex-1">
                    <h3 className="font-semibold text-lg text-foreground mb-2">
                        Sua privacidade é importante
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        Utilizamos cookies para personalizar sua experiência, analisar tráfego e garantir a segurança do portal. Você pode escolher quais tipos de cookies permitir. Leia nossa{" "}
                        <Link href="/politica-de-privacidade" className="text-primary underline hover:text-accent transition-colors font-medium">
                            Política de Privacidade
                        </Link>{" "}
                        para mais detalhes.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
                    <Button
                        variant="ghost"
                        onClick={handleRejectNonEssential}
                        className="text-sm font-medium w-full sm:w-auto"
                    >
                        Recusar Não-Essenciais
                    </Button>
                    <Button
                        onClick={handleAcceptAll}
                        className="text-sm font-medium bg-primary text-white hover:bg-primary/90 rounded-full px-6 w-full sm:w-auto"
                    >
                        Aceitar Todos
                    </Button>
                </div>
            </div>
        </div>
    );
}
