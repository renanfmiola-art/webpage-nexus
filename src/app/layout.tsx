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
  description: "AI for the next generation",
  metadataBase: new URL("https://nexusintell.com.br"),
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "Nexus Intelligence | Corporate",
    description: "AI for the next generation",
    url: "https://nexusintell.com.br",
    siteName: "Nexus Intelligence",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Nexus Intelligence",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexus Intelligence | Corporate",
    description: "AI for the next generation",
    images: ["/twitter-image.png"],
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
