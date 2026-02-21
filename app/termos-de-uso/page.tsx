import React from "react";
import { Container } from "@/components/layout/Container";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
    title: "Termos de Uso | Nexus Intelligence",
    description: "Termos e condições de uso do site da Nexus Intelligence.",
    robots: "noindex, follow",
};

export default function TermosDeUso() {
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
