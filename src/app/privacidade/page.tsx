export const metadata = {
    title: "Política de Privacidade | Nexus Intelligence",
};

export default function PrivacidadePage() {
    return (
        <div className="container mx-auto px-4 py-24 max-w-3xl min-h-screen">
            <h1 className="text-3xl font-bold mb-8">Política de Privacidade</h1>

            <div className="prose prose-slate max-w-none text-muted-foreground space-y-6">
                <p>
                    A privacidade e segurança dos seus dados são fundamentais para a Nexus Intelligence. Esta Política elucida como coletamos, usamos e protegemos as informações fornecidas.
                </p>

                <h2 className="text-xl font-semibold text-foreground mt-8">1. Coleta e Uso de Informações</h2>
                <p>
                    Durante a execução dos serviços, você fornecerá voluntariamente dados sobre faturamento, custos e operação de sua empresa. Essas informações serão usadas estrita e unicamente para modelar relatórios analíticos, dashboards e estruturação em inteligência de dados.
                </p>

                <h2 className="text-xl font-semibold text-foreground mt-8">2. Sigilo Absoluto</h2>
                <p>
                    Nenhum dado sensível financeiro ou gerencial será compartilhado, vendido ou exposto a terceiros. Nossa análise é feita de forma segregada e restrita apenas à equipe alocada na sua devolutiva.
                </p>

                <h2 className="text-xl font-semibold text-foreground mt-8">3. Retenção de Dados</h2>
                <p>
                    Mantemos os indicadores essenciais do diagnóstico somente pelo tempo necessário para cumprimento das obrigações do projeto firmado, resguardando direitos mútuos.
                </p>

                <p className="text-sm mt-12 bg-secondary/50 p-4 rounded-lg">
                    Última atualização: [INSERIR_DATA_AQUI].
                </p>
            </div>
        </div>
    );
}
