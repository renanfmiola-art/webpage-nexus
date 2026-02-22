import React from "react";
import { Container } from "@/components/layout/Container";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getLocale } from "@/lib/i18n";

export const metadata = {
    title: "Terms of Use | Nexus Intelligence",
    description: "Terms and conditions of use for the Nexus Intelligence website.",
    robots: "noindex, follow",
};

export default async function TermosDeUso() {
    const locale = await getLocale();

    if (locale === "en-US") {
        return (
            <section className="bg-background py-16 md:py-24">
                <Container className="max-w-4xl">
                    <Link href="/" className="inline-flex items-center text-primary hover:text-accent font-medium mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Home
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 tracking-tight">Terms of Use</h1>
                    <div className="prose prose-slate max-w-none text-muted-foreground prose-headings:text-primary prose-a:text-accent">
                        <p className="lead">
                            Welcome to the <strong>Nexus Intelligence</strong> website. Access and use of this portal are conditioned upon your acceptance of and compliance with the following Terms and Conditions of Use.
                        </p>

                        <h2>1. General Information and Limitation of Liability</h2>
                        <p>
                            The content provided on this website, including articles, simulations, testimonials, and descriptions of tax thesis, is purely for informational and institutional purposes. No information contained herein should be interpreted as specific legal, accounting, or financial advice for your business.
                        </p>
                        <p>
                            <strong>Nexus Intelligence</strong> is not responsible for decisions made solely based on the generic content of this portal. The application of any tax credit recovery or compliance strategy requires prior, individualized, and detailed analysis by our team of experts, subject to a specific service agreement.
                        </p>

                        <h2>2. Intellectual Property</h2>
                        <p>
                            All intellectual property rights related to the content of this site, including but not limited to texts, images, graphics, logos, videos, methodologies (such as <em>Antigravity</em>), and software, are the exclusive property of Nexus Intelligence or licensed partners and are protected by the copyright and industrial property laws in force in Brazil.
                        </p>
                        <p>
                            Logos and methodologies are strict properties related to the brand. Unauthorized reproduction, distribution, modification, or commercial use of any content on this site is strictly prohibited and subject to legal penalties.
                        </p>

                        <h2>3. Links to Third-Party Sites</h2>
                        <p>
                            Our portal may contain links to external websites not operated by Nexus Intelligence. These links are provided solely for convenience. We have no control over the content or privacy practices of third-party sites and assume no responsibility for them. We recommend that you read the terms of use and privacy policies of any external site you visit.
                        </p>

                        <h2>4. Modifications to these Terms</h2>
                        <p>
                            We reserve the right to modify these Terms of Use at any time, in order to improve services or meet new legal or regulatory requirements. We recommend reviewing this page periodically. Continued use of the site after any changes constitutes your acceptance of the new Terms.
                        </p>

                        <h2>5. Applicable Law and Jurisdiction</h2>
                        <p>
                            These Terms of Use are governed by and interpreted in accordance with the laws of the Federative Republic of Brazil, particularly the Brazilian Civil Rights Framework for the Internet (Law No. 12.965/2014) and the General Data Protection Law (Law No. 13.709/2018).
                        </p>
                        <p>
                            The courts of the District of São Paulo, Capital, are elected to resolve any doubts or controversies arising from these Terms, with express waiver of any other, however privileged it may be.
                        </p>

                        <p className="text-sm mt-8 opacity-70">Last updated: February 21, 2026.</p>
                    </div>
                </Container>
            </section>
        );
    }

    return (
        <section className="bg-background py-16 md:py-24">
            <Container className="max-w-4xl">
                <Link href="/" className="inline-flex items-center text-primary hover:text-accent font-medium mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Voltar para Home
                </Link>
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 tracking-tight">Termos de Uso</h1>
                <div className="prose prose-slate max-w-none text-muted-foreground prose-headings:text-primary prose-a:text-accent">
                    <p className="lead">
                        Bem-vindo(a) ao site da <strong>Nexus Intelligence</strong>. O acesso e uso deste portal estão condicionados à aceitação e ao cumprimento dos seguintes Termos e Condições de Uso.
                    </p>

                    <h2>1. Informações Genéricas e Limitação de Responsabilidade</h2>
                    <p>
                        O conteúdo disponibilizado neste site, incluindo artigos, simulações, depoimentos e descrições de teses tributárias, possui finalidade exclusivamente informativa e institucional. Nenhuma informação aqui contida deve ser interpretada como parecer jurídico, aconselhamento contábil ou financeiro específico para o seu negócio.
                    </p>
                    <p>
                        A <strong>Nexus Intelligence</strong> não se responsabiliza por decisões tomadas exclusivamente com base no conteúdo genérico deste portal. A aplicação de qualquer estratégia de recuperação de crédito tributário ou compliance exige análise prévia, individualizada e pormenorizada por nossa equipe de especialistas, mediante contrato de prestação de serviços específico.
                    </p>

                    <h2>2. Propriedade Intelectual</h2>
                    <p>
                        Todos os direitos de propriedade intelectual relativos ao conteúdo deste site, incluindo mas não se limitando a textos, imagens, gráficos, logotipos, vídeos, metodologias (como a <em>Antigravity</em>) e software, são de propriedade exclusiva da Nexus Intelligence ou de parceiros licenciados e estão protegidos pelas leis de direitos autorais e de propriedade industrial vigentes no Brasil.
                    </p>
                    <p>
                        A reprodução, distribuição, modificação ou uso comercial não autorizado de qualquer conteúdo deste site é estritamente proibida e sujeita às penalidades legais cabíveis.
                    </p>

                    <h2>3. Links para Sites de Terceiros</h2>
                    <p>
                        Nosso portal pode conter links para sites externos não operados pela Nexus Intelligence. Estes links são fornecidos apenas para conveniência. Não temos controle sobre o conteúdo ou práticas de privacidade de sites de terceiros e não assumimos qualquer responsabilidade pelos mesmos. Recomendamos que você leia os termos de uso e políticas de privacidade de qualquer site externo que visitar.
                    </p>

                    <h2>4. Modificações nestes Termos</h2>
                    <p>
                        Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento, visando a melhoria dos serviços ou o atendimento a novas exigências legais ou regulatórias. Recomendamos a revisão periódica desta página. O uso continuado do site após quaisquer alterações constitui sua aceitação dos novos Termos.
                    </p>

                    <h2>5. Legislação Aplicável e Foro</h2>
                    <p>
                        Estes Termos de Uso são regidos e interpretados de acordo com a legislação da República Federativa do Brasil, em especial a Lei do Marco Civil da Internet (Lei nº 12.965/2014) e a Lei Geral de Proteção de Dados (Lei nº 13.709/2018).
                    </p>
                    <p>
                        Fica eleito o foro da Comarca de São Paulo, Capital, para dirimir quaisquer dúvidas ou controvérsias oriundas destes Termos, com renúncia expressa a qualquer outro, por mais privilegiado que seja.
                    </p>

                    <p className="text-sm mt-8 opacity-70">Última atualização: 21 de fevereiro de 2026.</p>
                </div>
            </Container>
        </section>
    );
}
