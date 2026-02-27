export interface Solution {
    id: string;
    title: string;
    whatItIs: string;
    whoItsFor: string;
    whatItIsNot: string;
}

export const solutions: Solution[] = [
    {
        id: "traffic-performance",
        title: "Dashboard de Performance de Tráfego Pago",
        whatItIs: "Um dashboard profissional que consolida as principais métricas de contas de anúncios (Facebook Ads, Instagram Ads), centralizando visualizações de gastos, CPC, CPM, CTR, conversões e ROAS.",
        whoItsFor: "Gestores de tráfego, agências de marketing e donos de negócios digitais que investem em anúncios e precisam de clareza sobre o retorno do investimento sem a complexidade das plataformas nativas.",
        whatItIsNot: "Não é uma ferramenta de automação de anúncios ou criação de campanhas; foca exclusivamente na análise e visualização de resultados para suporte à decisão."
    },
    {
        id: "social-media",
        title: "Dashboard de Redes Sociais e Engajamento",
        whatItIs: "Um dashboard visual e automatizado que consolida os principais dados das redes sociais (Instagram, Facebook, TikTok, LinkedIn) em um único painel, permitindo acompanhar o crescimento, alcance e engajamento da audiência.",
        whoItsFor: "Criadores de conteúdo, agências de social media e empresas que investem em presença digital e precisam de clareza estratégica sobre o desempenho de suas postagens.",
        whatItIsNot: "Não é uma ferramenta de postagem automática ou de resposta a comentários; foca na análise de dados para tomada de decisão estratégica e visualização de performance histórica."
    },
    {
        id: "ecommerce-sales",
        title: "Dashboard de Vendas para E-commerce",
        whatItIs: "Um dashboard de análise de vendas que centraliza dados de faturamento, pedidos, ticket médio e produtos mais vendidos, permitindo uma visão clara do desempenho comercial da loja virtual.",
        whoItsFor: "Donos de lojas virtuais e gestores de e-commerce que precisam monitorar a saúde do negócio, identificar padrões de compra e otimizar resultados financeiros.",
        whatItIsNot: "Não é um sistema de gestão de estoque (ERP) ou processador de pagamentos; foca na análise inteligente dos dados de venda para suporte à decisão estratégica."
    },
    {
        id: "lead-quality",
        title: "Dashboard de Qualidade e Conversão de Leads",
        whatItIs: "Um dashboard estratégico que monitora a jornada dos leads e analisa a qualidade dos contatos gerados via CRM, permitindo avaliar a efetividade de diferentes canais de marketing e o alinhamento com vendas.",
        whoItsFor: "Startups, empresas de SaaS e qualquer negócio que utiliza CRM (como RD Station) para gerenciar leads e busca clareza sobre o ROI de suas campanhas de marketing.",
        whatItIsNot: "Não é uma ferramenta de automação de marketing ou disparo de e-mails; é uma solução de inteligência analítica focada na otimização do funil de vendas através dos dados."
    },
    {
        id: "simplified-sales",
        title: "Dashboard de Gestão de Vendas Simplificada",
        whatItIs: "Um painel visual e intuitivo que consolida os principais indicadores de vendas de pequenos negócios através de dados organizados (Excel ou Google Sheets), facilitando o acompanhamento de metas e faturamento diário.",
        whoItsFor: "Pequenos comércios, profissionais liberais e prestadores de serviço que ainda não possuem um ERP robusto e precisam de clareza financeira para organizar e crescer o negócio.",
        whatItIsNot: "Não é um sistema de registro de vendas em tempo real ou frente de caixa (PDV), mas sim um consolidado analítico para controle de faturamento e desempenho comercial."
    },
    {
        id: "appointments",
        title: "Dashboard de Gestão de Agendamentos",
        whatItIs: "Um dashboard interativo que consolida dados de agendamentos realizados, cancelados e comparecimentos, permitindo visualizar a taxa de ocupação e identificar horários de maior demanda.",
        whoItsFor: "Clínicas, consultórios, salões de beleza e qualquer prestador de serviços que dependa de agendamentos para organizar sua operação e queira reduzir faltas (no-show).",
        whatItIsNot: "Não é um sistema de marcação de consultas ou agendamento online; é uma camada de inteligência analítica que organiza as informações da agenda para melhor gestão do tempo e equipe."
    },
    {
        id: "subscription-mrr",
        title: "Dashboard para Negócios de Assinatura e Recorrência",
        whatItIs: "Um dashboard especializado em modelos de receita recorrente que monitora métricas vitais como MRR (Receita Mensal Recorrente), Churn (taxa de cancelamento) e LTV (Valor de Vida do Cliente).",
        whoItsFor: "Empresas de SaaS, clubes de assinatura, academias e plataformas de educação que precisam prever faturamento futuro e combater a evasão de clientes de forma estratégica.",
        whatItIsNot: "Não é uma ferramenta de gestão de pagamentos ou cobranças automáticas; é uma solução analítica para prever receitas, entender o comportamento do cliente e otimizar processos de retenção."
    },
    {
        id: "clinic-management",
        title: "Dashboard de Gestão para Clínicas e Consultórios",
        whatItIs: "Um dashboard gerencial que fornece uma visão clara da operação da clínica, integrando dados de faturamento, ticket médio por paciente e performance por especialidade ou serviço prestado.",
        whoItsFor: "Donos de clínicas de estética, consultórios de psicologia, nutrição, fisioterapia, odontologia e outros negócios que vivem de atendimentos e consultas.",
        whatItIsNot: "Não é um prontuário eletrônico ou sistema de agendamento em si; foca na análise inteligente dos dados para tomada de decisão sobre preços, ocupação da agenda e lucratividade."
    },
    {
        id: "occupational-safety",
        title: "Dashboard de Indicadores de Segurança do Trabalho (SST)",
        whatItIs: "Um painel visual que consolida indicadores operacionais de Saúde e Segurança do Trabalho, como exames ocupacionais, treinamentos (NRs), entrega de EPIs e ocorrências de acidentes.",
        whoItsFor: "Indústrias, construtoras e qualquer empresa que precise garantir conformidade legal com as normas regulamentadoras e reduzir riscos de acidentes e processos trabalhistas.",
        whatItIsNot: "Não é um repositório de documentos legais ou software de emissão de laudos técnicos; foca na visualização analítica para prevenção de riscos e controle estratégico da segurança ocupacional."
    },
    {
        id: "hr-people",
        title: "Dashboard de Gestão de RH e People Analytics",
        whatItIs: "Um dashboard estratégico que centraliza indicadores de capital humano, como turnover (rotatividade), absenteísmo, custos de pessoal e métricas de satisfação, permitindo uma gestão de talentos baseada em dados.",
        whoItsFor: "Empresas em crescimento, gestores de RH e diretores que buscam clareza sobre a saúde do time, retenção de talentos e eficiência operacional do departamento pessoal.",
        whatItIsNot: "Não é uma ferramenta de fechamento de folha de pagamento ou sistema de recrutamento (ATS); é uma solução de inteligência analítica para suporte à decisão estratégica na gestão de pessoas."
    }
];
