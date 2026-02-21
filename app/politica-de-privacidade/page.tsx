import React from "react";
import { Container } from "@/components/layout/Container";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
    title: "Política de Privacidade | Nexus Intelligence",
    description: "Declaração de nossa política de privacidade e conformidade com a LGPD.",
    robots: "noindex, follow",
};

export default function PoliticaPrivacidade() {
    return (
        <section className="bg-background py-16 md:py-24">
            <Container className="max-w-4xl">
                <Link href="/" className="inline-flex items-center text-primary hover:text-accent font-medium mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Voltar para Home
                </Link>
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 tracking-tight">Política de Privacidade</h1>
                <div className="prose prose-slate max-w-none text-muted-foreground prose-headings:text-primary prose-a:text-accent">
                    <p className="lead">
                        A <strong>Nexus Intelligence</strong> ("nós", "nosso") está comprometida em proteger a sua privacidade e garantir que seus dados pessoais e fiscais sejam tratados em conformidade absoluta com a Lei Geral de Proteção de Dados Pessoais (LGPD - nº 13.709/2018).
                    </p>

                    <h2>1. Dados Coletados</h2>
                    <p>
                        Coletamos informações essenciais para a execução de nossos serviços de consultoria tributária. Isso inclui dados cadastrais fornecidos no momento do contato (nome, e-mail, telefone, cargo, empresa) e, quando viável mediante contrato formal (NDA), dados transacionais/fiscais anonimizados para análises preliminares. Para navegação no site, coletamos automaticamente cookies analíticos.
                    </p>

                    <h2>2. Finalidade do Tratamento</h2>
                    <p>
                        Utilizamos os dados para:
                    </p>
                    <ul>
                        <li>Fornecer respostas e orçamento sobre nossos serviços tributários.</li>
                        <li>Cumprimento de contratos de prestação de serviço de auditoria e compliance fiscal.</li>
                        <li>Envio de comunicações institucionais relevantes, com opção de opt-out (descadastramento) disponível.</li>
                        <li>Melhoria da experiência de navegação do usuário através de métricas de acesso (Google Analytics 4).</li>
                    </ul>

                    <h2>3. Base Legal</h2>
                    <p>
                        O tratamento encontra amparo na LGPD nos seguintes preceitos: Execução de contrato ou procedimentos preliminares (Art. 7º, V) no que tange a serviços de recuperação e análise; e Legítimo Interesse (Art. 7º, IX) para comunicações institucionais a clientes em potencial (B2B).
                    </p>

                    <h2>4. Direitos do Titular</h2>
                    <p>
                        Você, como titular dos dados, possui os seguintes direitos garantidos pelos arts. 18 e seguintes da LGPD:
                    </p>
                    <ul>
                        <li>Confirmação da existência de tratamento.</li>
                        <li>Acesso aos dados.</li>
                        <li>Correção de dados incompletos, inexatos ou desatualizados.</li>
                        <li>Anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade.</li>
                        <li>Portabilidade.</li>
                        <li>Eliminação dos dados pessoais (exceto em casos de obrigações legais, como guarda de logs fiscais).</li>
                    </ul>

                    <h2>5. Tempo de Retenção</h2>
                    <p>
                        Mantemos informações cadastrais apenas pelo tempo necessário para cumprir com as finalidades pelas quais foram coletadas, respeitando os períodos de prescrição estabelecidos pela legislação brasileira.
                    </p>

                    <h2>6. Compartilhamento e Segurança da Informação</h2>
                    <p>
                        Seus dados nunca são vendidos. Somente compartilhamos informações estritamente necessárias com suboperadores tecnológicos (ex: provedores de hospedagem em nuvem como AWS ou Azure, que possuem as certificações ISO 27001), adotando rigorosos compromissos de confidencialidade de grau bancário (SSL 256 bits).
                    </p>

                    <h2>7. Cookies Utilizados</h2>
                    <p>
                        Utilizamos apenas cookies essenciais para o funcionamento rápido e seguro do site, bem como cookies de análises (Analytics) ativados apenas após o seu <em>Consentimento</em> mediante o nosso Painel de Controle de Privacidade (Cookie Banner).
                    </p>

                    <h2>8. Contato do Encarregado de Dados (DPO)</h2>
                    <p>
                        Em caso de dúvidas a respeito do tratamento de dados pessoais, por favor entre em contato com nosso Data Protection Officer (DPO) por meio do canal exclusivo:
                    </p>
                    <div className="bg-white p-6 rounded-xl border border-border mt-4">
                        <p className="m-0 text-sm"><strong>Nome:</strong> Equipe de Integridade & Compliance</p>
                        <p className="m-0 text-sm"><strong>Email:</strong> miola@nexusintell.com.br</p>
                        <p className="m-0 text-sm"><strong>Telefone:</strong> +55 14 93618-0146</p>
                    </div>
                    <p className="text-sm mt-8 opacity-70">Última atualização: 21 de fevereiro de 2026.</p>
                </div>
            </Container>
        </section>
    );
}
