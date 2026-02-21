import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Nexus Intelligence | Consultoria Tributária e Compliance Fiscal',
    description: 'Recuperação de créditos tributários com segurança jurídica e compliance LGPD. Metodologia antigravity que automatiza a análise fiscal.',
    keywords: 'consultoria tributária, recuperação de créditos, compliance fiscal, LGPD, defesa administrativa',
    robots: 'index, follow',
    openGraph: {
        title: 'Nexus Intelligence',
        description: 'Recuperação de créditos tributários com segurança jurídica e compliance LGPD.',
        url: 'https://nexus-intelligence.com.br',
        siteName: 'Nexus Intelligence',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Nexus Intelligence',
            },
        ],
        locale: 'pt_BR',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Nexus Intelligence | Consultoria Tributária e Compliance Fiscal',
        description: 'Recuperação de créditos tributários com segurança jurídica e compliance LGPD.',
        images: ['/og-image.jpg'],
    },
};

export const viewport = {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#12172B',
};
