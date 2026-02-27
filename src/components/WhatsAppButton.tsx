import Link from "next/link";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
    return (
        <Link
            href="https://wa.me/5514998622743"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center p-4 rounded-full bg-primary text-white shadow-lg shadow-black/10 hover:bg-primary/90 hover:scale-105 transition-all duration-300 group"
            aria-label="Falar no WhatsApp"
        >
            <MessageCircle size={24} className="group-hover:animate-pulse" />
            <span className="sr-only">Falar no WhatsApp</span>
        </Link>
    );
}
