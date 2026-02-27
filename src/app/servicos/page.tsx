import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Zap, ShieldCheck, CheckCircle2 } from "lucide-react";
import { SolutionsGrid } from "@/components/SolutionsGrid";

export const metadata = {
    title: "Serviços | Nexus Intelligence",
    description: "Conheça nossas Soluções em Dados: Dashboards e Projetos de Business Intelligence. Serviço complementar de Auditoria Tributária Operacional.",
};

export default function ServicosPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background pb-32">

            {/* HEADER */}
            <section className="bg-primary pt-24 pb-16 text-center text-primary-foreground">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Soluções em Dados e Inteligência Analítica</h1>
                    <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
                        Painéis e automações projetados para dar clareza imediata sobre os dados cruciais do seu negócio, reduzindo "achismos" com ferramentas adaptáveis às suas necessidades.
                    </p>
                </div>
            </section>

            {/* SEÇÃO PRINCIPAL DE PROJETOS DE DADOS */}
            <section className="container mx-auto px-4 pt-20 max-w-5xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-foreground mb-4">Escolha a solução certa para impulsionar seus indicadores</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Nossos projetos preenchem as lacunas operacionais com tecnologia robusta e orientada para negócios práticos. Clique sobre a solução desejada para mais detalhes.
                    </p>
                </div>

                {/* THE MAIN GRID OF 10 PROJECTS */}
                <SolutionsGrid />
            </section>

            <div className="container mx-auto max-w-5xl my-24">
                <hr className="border-border border-t-2" />
            </div>

            {/* SERVIÇOS COMPLEMENTARES (AUDITORIA) */}
            <section className="container mx-auto px-4 max-w-5xl space-y-16">

                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-foreground">Serviços Complementares Especializados</h2>
                </div>

                {/* SERVIÇO 2 / AUDITORIA */}
                <div className="bg-white rounded-3xl border border-border shadow-sm overflow-hidden flex flex-col md:flex-row opacity-95 hover:opacity-100 transition-opacity">
                    <div className="md:w-1/3 bg-sidebar p-8 flex flex-col justify-center border-b md:border-b-0 md:border-r border-border">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary text-secondary-foreground font-medium text-sm rounded-full mb-6 self-start border border-border">
                            <ShieldCheck size={16} /> Especialidade Técnica
                        </div>
                        <h2 className="text-3xl font-bold text-foreground mb-4">Auditoria Tributária Operacional</h2>
                        <div className="text-lg font-bold text-muted-foreground mb-2">
                            Apoio estratégico via compliance
                        </div>
                        <p className="text-sm font-medium text-muted-foreground">Diagnóstico aprofundado para mitigar riscos.</p>
                    </div>

                    <div className="md:w-2/3 p-8 md:p-10 flex flex-col justify-between">
                        <div className="space-y-6">
                            <div>
                                <h3 className="font-bold text-lg mb-2 text-foreground">O que resolve</h3>
                                <p className="text-muted-foreground">Serviço técnico especializado para identificar pagamentos indevidos, distorções tributárias e falhas operacionais que elevam a carga de impostos. Foco em correção e conformidade, sem prometer "restituições automáticas" ou falsas expectativas vazias ao gestor.</p>
                            </div>

                            <div>
                                <h3 className="font-bold text-lg mb-3 text-foreground">Para quem orientamos</h3>
                                <ul className="space-y-2">
                                    <li className="flex gap-2 text-muted-foreground"><CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" /> Negócios já estabelecidos onde cada percentual pesa.</li>
                                    <li className="flex gap-2 text-muted-foreground"><CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" /> Startups ou empresas de crescimento ágil revisando a casa.</li>
                                    <li className="flex gap-2 text-muted-foreground"><CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" /> Diretores em fusões (M&A) e transições críticas organizacionais.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-border flex justify-end">
                            <Button size="lg" variant="outline" className="w-full md:w-auto font-semibold h-14 px-8 border-border hover:bg-secondary/50" asChild>
                                <Link href="https://wa.me/5514998622743?text=Ol%C3%A1%2C%20queria%20entender%20como%20funciona%20a%20sua%20Consultoria/Auditoria%20Tribut%C3%A1ria%20Operacional." target="_blank">Entender Auditoria por WhatsApp</Link>
                            </Button>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
}
