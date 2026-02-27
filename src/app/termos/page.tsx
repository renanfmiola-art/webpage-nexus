export const metadata = {
    title: "Termos de Uso | Nexus Intelligence",
};

export default function TermosPage() {
    return (
        <div className="container mx-auto px-4 py-24 max-w-3xl min-h-screen">
            <h1 className="text-3xl font-bold mb-8">Termos de Uso</h1>

            <div className="prose prose-slate max-w-none text-muted-foreground space-y-6">
                <p>
                    Estes Termos de Uso regem a utilização do site da Nexus Intelligence. Ao acessar nosso site, você concorda expressamente com estas condições.
                </p>

                <h2 className="text-xl font-semibold text-foreground mt-8">1. Serviços Ofertados</h2>
                <p>
                    A Nexus Intelligence fornece soluções, dashboards e projetos de dados sob medida. O escopo tecnológico e analítico das entregas baseiam-se nos relatórios, bases de dados e acessos fornecidos pelo próprio cliente.
                </p>

                <h2 className="text-xl font-semibold text-foreground mt-8">2. Isenção de Garantias</h2>
                <p>
                    Os diagnósticos provêm clareza e recomendações de ações, mas não garantem lucro automático ou conformidade fiscal instantânea sem a devida execução e cumprimento das ações por parte dos gestores da empresa contratante. Não fazemos promessas de "milagres tributários".
                </p>

                <h2 className="text-xl font-semibold text-foreground mt-8">3. Propriedade Intelectual</h2>
                <p>
                    Todo o conteúdo presente neste site (textos, métodos e imagens) pertence à Nexus Intelligence. Fica restritamente proibida a cópia ou distribuição de materiais sem nossa autorização prévia.
                </p>

                <p className="text-sm mt-12 bg-secondary/50 p-4 rounded-lg">
                    Última atualização: [INSERIR_DATA_AQUI].
                </p>
            </div>
        </div>
    );
}
