import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { Navbar } from "@/components/layout/Navbar";
import { SocialLinks } from "@/components/layout/SocialLinks";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nexus Intelligence | Corporate",
  description: "IA para a próxima geração da evolução tecnológica.",
  metadataBase: new URL("https://www.nexusintell.com.br"),
  alternates: {
    canonical: "https://www.nexusintell.com.br",
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=3", sizes: "any" },
      { url: "/icon.png?v=3", type: "image/png" },
    ],
    apple: "/icon.png?v=3",
  },
  openGraph: {
    title: "Nexus Intelligence | Corporate",
    description: "IA para a próxima geração da evolução tecnológica.",
    url: "https://www.nexusintell.com.br",
    siteName: "Nexus Intelligence",
    images: [
      {
        url: "/og-image.png?v=3",
        width: 1200,
        height: 630,
        alt: "Nexus Intelligence Logo",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexus Intelligence | Corporate",
    description: "IA para a próxima geração da evolução tecnológica.",
    images: ["/og-image.png?v=3"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LanguageProvider>
          <div className="min-h-screen bg-background selection:bg-primary/20 relative">
            <Navbar />
            {children}
            <SocialLinks />
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
