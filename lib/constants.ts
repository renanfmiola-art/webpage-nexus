import { Shield, Scale, ShieldCheck, HeartHandshake, Pill, Sparkles, Wrench, GlassWater, Store, Hammer, Laptop, Briefcase, FileSearch, ArrowDownToLine, Split, CheckSquare } from "lucide-react";

export const siteConfig = {
    name: "Nexus Intelligence",
    description: "Consultoria Tributária e Compliance Fiscal baseada em tecnologia antigravity.",
    url: "https://nexus-intelligence.com.br", // Placeholder
    contact: {
        email: "miola@nexusintell.com.br",
        phone: "+55 14 93618-0146",
    }
};

export const mainNav = [
    { title: "Home", href: "/" },
    { title: "Soluções", href: "/#services" },
    { title: "Metodologia", href: "/#differential" },
    { title: "Compliance", href: "/#compliance" },
    { title: "Blog", href: "/blog" },
    { title: "FAQ", href: "/#faq" },
];

export const servicesItems = [
    {
        title: "Auditoria de DAS (Simples) e Mapeamento de Pagamentos Indevidos",
        description: "Identificamos onde você pagou DAS a maior ou indevidamente por erro operacional, duplicidades, períodos apurados incorretamente ou inconsistências entre faturamento e declarações. Você recebe um relatório por mês (PA) com valores estimados, evidências e o plano de correção.",
        icon: FileSearch,
    },
    {
        title: "Restituição Administrativa do Simples (Tributos Federais do DAS)",
        description: "Quando existe indébito comprovável, montamos o dossiê, protocolamos e acompanhamos o Pedido Eletrônico de Restituição dos tributos federais dentro do DAS (PIS, COFINS, IRPJ, CSLL, CPP/INSS, IPI). Processo 100% administrativo, com rastreabilidade e gestão de exigências documentais.",
        icon: ArrowDownToLine,
    },
    {
        title: "Diagnóstico de Segregação de Receita para Varejo com Itens Monofásicos e ST",
        description: "Para negócios com mix complexo (farmácia, perfumaria, bebidas, autopeças, mercados), realizamos uma revisão do padrão de classificação e segregação para reduzir o risco de pagamento indevido recorrente no Simples. Entregamos uma lista prática de ajustes (cadastro/regras internas) e um checklist mensal de conferência.",
        icon: Split,
    },
    {
        title: "Validação de Retenções (ISS Retido) e Conciliação de Receitas B2B",
        description: "Para empresas de serviços com ISS retido (B2B), realizamos a conciliação entre NFS-e, retenções e receitas declaradas, identificando falhas operacionais que geram pagamento indevido e apontando o caminho administrativo aplicável. Você recebe um dossiê com evidências e um plano de regularização.",
        icon: CheckSquare,
    },
];

export const segmentsItems = [
    { title: "Farmácias", subtitle: "e Drogarias", icon: Pill },
    { title: "Perfumarias", subtitle: "Cosméticos e Higiene", icon: Sparkles },
    { title: "Autopeças", subtitle: "Pneus e Acessórios", icon: Wrench },
    { title: "Distribuidoras", subtitle: "Depósitos de Bebidas", icon: GlassWater },
    { title: "Mercados", subtitle: "Mini e Mercearias", icon: Store },
    { title: "Materiais", subtitle: "Construção e Home Centers", icon: Hammer },
    { title: "Eletroeletrônicos", subtitle: "Telefonia e Informática", icon: Laptop },
    { title: "Serviços B2B", subtitle: "com ISS retido", icon: Briefcase },
];

export const faqItems = [
    {
        question: "Como funciona o processo de Recuperação de Créditos?",
        answer: "Nossa tecnologia Flow realiza um cruzamento massivo de suas bases de dados fiscais dos últimos 60 meses com a legislação atualizada. Após a identificação de divergências ou benefícios não fruídos, nossa equipe valida as oportunidades e conduzimos a habilitação do crédito administrativamente, com risco zero.",
    },
    {
        question: "A metodologia de vocês é segura?",
        answer: "Sim, atuamos sob os mais rígidos preceitos de Compliance Fiscal. Todas os nossos procedimentos são pacificados em instâncias administrativas consolidadas. Não aplicamos teses aventureiras ou que exponham o cliente a riscos de autuação.",
    },
    {
        question: "Quais são os custos envolvidos no projeto?",
        answer: "Trabalhamos predominantemente no modelo 'Success Fee' (taxa de exito) para recuperação de créditos. Ou seja, nossos honorários só são faturados após a efetiva homologação ou compensação financeira do crédito em favor da sua empresa. Outros serviços seguem planos especificos de precificação de acordo com complexidade da consultoria realizada.",
    },
    {
        question: "A Nexus está adequada à LGPD?",
        answer: "Absolutamente. Somos 'LGPD Ready' e nosso portal conta com criptografia SSL 256-bits. Atuamos como operadores de dados sob rigorosos Non-Disclosure Agreements (NDA) contendo cláusulas específicas de proteção de informações corporativas e dados pessoais.",
    }
];
