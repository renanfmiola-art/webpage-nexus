import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2, TrendingUp, Lightbulb, Presentation } from "lucide-react";

export const metadata = {
    title: "A Nexus | Nexus Intelligence",
    description: "Da estaca zero tecnológica aos relatórios estratégicos para alta diretoria através de expertise com BI",
};

export default function SobrePage() {
    return (
        <div className="flex flex-col min-h-screen bg-background pb-32">
            {/* HERO SECTION */}
            <section className="bg-primary pt-24 pb-20 text-center text-primary-foreground relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay"></div>
                <div className="container mx-auto px-4 max-w-4xl relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Mais Inteligência de Negócio. Menos Achismos.</h1>
                    <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
                        Acreditamos que a última linha do financeiro (Resultado) nunca é gerida com clareza sem métricas adequadamente organizadas em visuais de alto impacto operacional.
                    </p>
                </div>
            </section>

            {/* HISTÓRIA E POSICIONAMENTO */}
            <section className="py-24" id="historia">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="grid md:grid-cols-2 gap-16 items-center">

                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary text-secondary-foreground font-semibold text-sm rounded-full mb-2">
                                Nosso propósito
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Transformar o caos informacional em painéis lúcidos de navegação empresarial.</h2>
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>
                                    A Nexus Intelligence nasceu da observação diária da exaustão gerencial: Empreendedores e Gestores mergulhados na execução técnica e comercial de ponta enquanto a visão de negócio (os indicadores ou "fatos") permanecia imersa em planilhas desencontradas ou ERPs arcaicos da década passada.
                                </p>
                                <p>
                                    Nossa filosofia contraria a premissa de que a sua estrutura precisa usar algo complexo para ter alta rentabilidade na ponta da cadeia e na precificação ágil de um produto.
                                </p>
                                <p className="font-medium text-foreground">
                                    Desenhamos projetos de inteligência e governança em dados. O único "achismo" admitido aqui é achar que demorou demais para se livrar do stress de relatórios manuais.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-3xl border border-border/80 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] h-full flex flex-col justify-center">
                            <h3 className="text-2xl font-bold text-foreground mb-6">Princípios de Ouro</h3>
                            <ul className="space-y-5">
                                {[
                                    {
                                        title: "Organização Sem Dor",
                                        desc: "Extração orientada pelas rotinas atuais, causando zero estresse na sua operação na hora de consolidar análises na rede",
                                        icon: <CheckCircle2 size={24} className="text-primary shrink-0" />
                                    },
                                    {
                                        title: "Visual Focado em Decisão",
                                        desc: "Sua tela nunca terá um gráfico ou um relatório amontoado se aquilo não responder a uma dúvida real (e essencial) de gestão.",
                                        icon: <Presentation size={24} className="text-accent shrink-0" />
                                    },
                                    {
                                        title: "Solidez Técnica Tributária/Operacional",
                                        desc: "Cruzarmos o design de ponta dos painéis (Front) com métricas em completa adequação financeira garantindo uma conformidade segura para os números",
                                        icon: <TrendingUp size={24} className="text-primary shrink-0" />
                                    }
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4 items-start">
                                        <div className="mt-1">{item.icon}</div>
                                        <div>
                                            <h4 className="font-bold text-foreground mb-1 hover:text-primary transition-colors">{item.title}</h4>
                                            <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            {/* A QUEM SERVIMOS REITERATION */}
            <section className="py-24 bg-secondary/30">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <div className="bg-primary/5 w-16 h-16 flex items-center justify-center rounded-2xl mx-auto mb-8 shadow-sm">
                        <Lightbulb className="text-primary hover:text-accent transition-colors duration-300" size={32} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Operamos nos Bastidores. Você fica com os resultados explícitos.</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-3xl mx-auto">
                        Não importa se o seu ecossistema digital se conecta integralmente no Shopify, gira sob assinaturas vitalícias num SaaS, ou trabalha apenas nas pranchetas de clínicas e consultorias físicas onde o agendamento manda; nós formatamos a camada de dados visual exata para a necessidade da operação.
                    </p>
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold h-14 px-8" asChild>
                        <Link href="/servicos">Descubra as Soluções de Dados</Link>
                    </Button>
                </div>
            </section>

        </div>
    );
}
