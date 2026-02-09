"use client";

import React, { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

interface Message {
    id: number;
    text: string;
    sender: "bot" | "user";
}

interface WhatsAppChatProps {
    isOpen: boolean;
    onClose: () => void;
}

export const WhatsAppChat = ({ isOpen, onClose }: WhatsAppChatProps) => {
    const { t } = useLanguage();
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        if (isOpen && messages.length === 0) {
            setIsTyping(true);
            setTimeout(() => {
                setMessages([
                    {
                        id: 1,
                        text: t.chat.greeting1,
                        sender: "bot",
                    }
                ]);
                setIsTyping(false);

                setTimeout(() => {
                    setIsTyping(true);
                    setTimeout(() => {
                        setMessages((prev) => [
                            ...prev,
                            {
                                id: 2,
                                text: t.chat.greeting2,
                                sender: "bot",
                            }
                        ]);
                        setIsTyping(false);
                    }, 1000);
                }, 500);
            }, 1000);
        }
    }, [isOpen, messages.length, t.chat]);

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputValue.trim() || isTyping) return;

        const userMsg = inputValue;
        const userMessage: Message = {
            id: Date.now(),
            text: userMsg,
            sender: "user",
        };

        setMessages((prev) => [...prev, userMessage]);
        setInputValue("");
        setIsTyping(true);

        // Simulate bot response
        setTimeout(() => {
            const botMessage: Message = {
                id: Date.now() + 1,
                text: t.chat.redirect,
                sender: "bot",
            };
            setMessages((prev) => [...prev, botMessage]);
            setIsTyping(false);

            // Redirect after a short delay
            setTimeout(() => {
                const whatsappUrl = `https://wa.me/551433335890?text=${encodeURIComponent(
                    t.chat.whatsapp_message + userMsg
                )}`;
                window.open(whatsappUrl, "_blank");
            }, 2000);
        }, 1500);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed bottom-36 right-8 w-[320px] md:w-[380px] h-[500px] bg-black border border-white/10 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden backdrop-blur-2xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-4">
            {/* Header */}
            <div className="p-4 border-b border-white/10 bg-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M12 8V4H8" /><rect width="16" height="12" x="4" y="8" rx="2" /><path d="M2 14h2" /><path d="M20 14h2" /><path d="M15 13v2" /><path d="M9 13v2" /></svg>
                        </div>
                        <div className="absolute -right-0.5 -bottom-0.5 w-3 h-3 rounded-full bg-green-500 border-2 border-black" />
                    </div>
                    <div>
                        <h3 className="text-white text-sm font-semibold tracking-tight">NexusFlow AI</h3>
                        <p className="text-[10px] text-white/40 uppercase tracking-widest font-medium">{t.chat.online}</p>
                    </div>
                </div>
                <button
                    onClick={onClose}
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:bg-white/5 transition-all"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10">
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                        <div
                            className={`max-w-[85%] p-3 rounded-2xl text-[13px] leading-relaxed ${message.sender === "user"
                                    ? "bg-white text-black rounded-tr-none font-medium"
                                    : "bg-white/5 text-white/90 border border-white/10 rounded-tl-none"
                                }`}
                        >
                            {message.text}
                        </div>
                    </div>
                ))}
                {isTyping && (
                    <div className="flex justify-start">
                        <div className="bg-white/5 border border-white/10 p-3 rounded-2xl rounded-tl-none">
                            <div className="flex gap-1">
                                <div className="w-1 h-1 rounded-full bg-white/40 animate-bounce" />
                                <div className="w-1 h-1 rounded-full bg-white/40 animate-bounce [animation-delay:0.2s]" />
                                <div className="w-1 h-1 rounded-full bg-white/40 animate-bounce [animation-delay:0.4s]" />
                            </div>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Overlay for CTA if no messages yet or similar? No, keep it simple. */}

            {/* Input */}
            <form onSubmit={handleSendMessage} className="p-4 bg-white/5 border-t border-white/10">
                <div className="relative flex items-center gap-2">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder={t.chat.placeholder}
                        className="flex-1 bg-white/5 border border-white/10 rounded-xl py-2.5 px-4 text-sm text-white focus:outline-none focus:border-white/20 transition-all placeholder:text-white/20"
                    />
                    <button
                        type="submit"
                        disabled={!inputValue.trim() || isTyping}
                        className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-black hover:bg-white/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                    </button>
                </div>
                <p className="mt-3 text-[10px] text-center text-white/20 uppercase tracking-[0.2em]">Powered by Nexus Flow</p>
            </form>
        </div>
    );
};
