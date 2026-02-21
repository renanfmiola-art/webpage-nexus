import { Inter } from "next/font/google";
import "./globals.css";
import { metadata, viewport } from "./metadata";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/sections/Footer";
import { CookieConsent } from "@/components/CookieConsent";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  // Prompt specified "weights 300-700" but Inter is variable font by default in next/font
});

export { metadata, viewport };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-1 pt-[88px]">
          {children}
        </main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
