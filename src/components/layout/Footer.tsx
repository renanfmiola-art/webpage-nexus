"use client";

import React from "react";

export const Footer = () => {
    return (
        <footer className="fixed bottom-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-t border-white/5 py-4 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-2 text-[10px] md:text-xs text-white/40 tracking-wider">
                <div className="flex flex-col md:flex-row gap-2 md:gap-6">
                    <span>NEXUS INTELLIGENCE AI LTDA</span>
                    <span className="hidden md:inline text-white/10">|</span>
                    <span>58.701.735/0001-22</span>
                </div>
                <div>
                    <span>MARÍLIA | SP | BRASIL</span>
                </div>
            </div>
        </footer>
    );
};
