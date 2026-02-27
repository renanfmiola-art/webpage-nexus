import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, Target, Zap, FileSearch, AlertCircle, Check, X, BarChart3, Presentation, Database } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* HERO SECTION */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 grid lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.15] text-white">
              Sua empresa gera dados. <span className="text-accent">Mas quem toma decisões ágeis com eles?</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl leading-relaxed">
              Transformamos planilhas manuais e sistemas engessados em Dashboards Inteligentes e automatizados. Clareza imediata sobre vendas, métricas e operação para sua liderança focar na estratégia.
            </p>

            <ul className="space-y-3 font-medium text-primary-foreground/90">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-accent mt-0.5 shrink-0" size={20} />
                <span>Dashboards personalizados para o seu contexto</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-accent mt-0.5 shrink-0" size={20} />
                <span>Integração com suas ferramentas atuais</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-accent mt-0.5 shrink-0" size={20} />
                <span>Foco em visualização clara e ação imediata</span>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold h-14 px-8 text-base" asChild>
                <Link href="/servicos">Ver Nossas Soluções em Dados</Link>
              </Button>
              <Button size="lg" className="bg-transparent border border-white/30 text-white hover:bg-white/10 font-semibold h-14 px-8 text-base" asChild>
                <Link href="https://wa.me/5514998622743" target="_blank">Falar com Consultor</Link>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="bg-white text-foreground p-8 rounded-2xl shadow-xl shadow-black/20 border border-border">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-200 text-blue-900 font-semibold text-sm rounded-full mb-6 shadow-sm">
                <BarChart3 size={16} className="text-blue-600" /> Projetos Analíticos
              </div>
              <h3 className="text-2xl font-bold mb-6">Nossas entregas focam em:</h3>
              <ul className="space-y-4">
                {[
                  "Centralização em uma única tela de gestão",
                  "Métricas (KPIs) prontas para diretoria",
                  "Experiência intuitiva no Desktop e Mobile",
                  "Atualização fluida e descomplicada"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-medium text-muted-foreground">
                    <div className="bg-primary/5 p-1.5 rounded-full text-primary shrink-0">
                      <Check size={16} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SINAIS DOS PROBLEMAS (Pain Points) */}
      <section className="py-24 bg-background" id="sinais">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Sinais de que sua operação precisa de mais clareza visual
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Muitas planilhas manuais suscetíveis a erros da equipe",
              "Sistemas de mercado gerando relatórios engessados ou confusos",
              "Liderança tomando decisões na intuição, sem respaldo métrico",
              "Demora dias para consolidar os números antes das reuniões gerenciais",
              "Difícil ver o retorno do investimento de marketing cruzando com vendas",
              "Gestão cega: caixa entra, mas não se entende de qual linha de produto",
              "Trabalho duplo: digitar de um sistema para o outro constantemente",
              "Falta de um painel ágil para acompanhar metas diretamente do celular"
            ].map((sinal, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-border/60 shadow-sm hover:shadow-md transition-shadow flex gap-4">
                <AlertCircle className="text-accent shrink-0" size={24} />
                <p className="font-medium text-foreground/90">{sinal}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold h-14 px-8" asChild>
              <Link href="https://wa.me/5514998622743" target="_blank">Esse cenário atrapalha minha empresa</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* A ABORDAGEM DA NEXUS */}
      <section className="py-24 bg-secondary/30" id="abordagem">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Nossa Metodologia em Analytics</h2>
            <p className="text-lg text-muted-foreground">
              Nossa filosofia é trazer simplicidade. Nós nos adaptamos ao ecossistema que você já utiliza, cruzando as informações com as melhores práticas de mercado para devolver Dashboards orientados à visualização assertiva.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-border shadow-sm">
              <div className="bg-primary/5 w-14 h-14 flex items-center justify-center rounded-xl mb-6">
                <Database className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">Modelagem Sem Atrito</h3>
              <p className="text-muted-foreground leading-relaxed">Avaliaremos suas bases (Excel, RD Station, Shopify, Hotmart etc.) e criaremos o fluxo de dados que alimenta os relatórios sem pesar na rotina de ninguém.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-border shadow-sm">
              <div className="bg-primary/5 w-14 h-14 flex items-center justify-center rounded-xl mb-6">
                <Target className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">Apenas Métricas Essenciais</h3>
              <p className="text-muted-foreground leading-relaxed">Excesso de dados confunde. Construímos os projetos baseados somente nos "Indicadores-Chave (KPIs)" que destravam o próximo passo estratégico do seu negócio.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-border shadow-sm">
              <div className="bg-primary/5 w-14 h-14 flex items-center justify-center rounded-xl mb-6">
                <Presentation className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">Visual que Engaja</h3>
              <p className="text-muted-foreground leading-relaxed">Painéis estáticos da década passada morreram. Utilizamos interatividade, fluidez no uso e layouts com design de padrão elevado para sua equipe de gestão focar no que importa.</p>
            </div>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA (O PASSO A PASSO) */}
      <section className="py-24 bg-background" id="como-funciona">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">O Ciclo dos Nossos Serviços</h2>

          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2 z-0"></div>

            <div className="grid md:grid-cols-3 gap-8 relative z-10">
              <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
                <div className="w-12 h-12 bg-primary text-white flex items-center justify-center rounded-full text-xl font-bold mx-auto mb-4">1</div>
                <h4 className="font-bold text-lg mb-2">Entendimento</h4>
                <p className="text-muted-foreground text-sm">Escopo rápido e profundo. Mapeamos as perguntas vitais que o seu painel terá de responder diariamente.</p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-accent shadow-sm relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-primary text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap shadow-sm">
                  Imersão Técnica
                </div>
                <div className="w-12 h-12 bg-primary text-white flex items-center justify-center rounded-full text-xl font-bold mx-auto mb-4 mt-2">2</div>
                <h4 className="font-bold text-lg mb-2">Desenvolvimento</h4>
                <p className="text-muted-foreground text-sm">ETL, Conexão e Design. Nossa equipe atua na formatação robusta das métricas em visualizações objetivas.</p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
                <div className="w-12 h-12 bg-primary text-white flex items-center justify-center rounded-full text-xl font-bold mx-auto mb-4">3</div>
                <h4 className="font-bold text-lg mb-2">Hand-off</h4>
                <p className="text-muted-foreground text-sm">Apresentação final com os Dashboards 100% integrados às rotinas gerenciais do seu negócio. Direto ao ponto.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A QUEM SE DESTINA (ICP MATRIX) */}
      <section className="py-24 bg-primary text-white" id="para-quem">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white text-foreground p-8 md:p-12 rounded-2xl border border-border shadow-sm">
              <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
                <CheckCircle2 className="text-green-600" /> Nossos projetos escalam...
              </h3>
              <ul className="space-y-6">
                {[
                  "Diretores ou Donos que tomam as rédias operacionais baseados em dados palpáveis.",
                  "Empresas digitais (E-commerces, Infoprodutores, SaaS) repletas de dados sem visiblidade cruzada.",
                  "Estruturas maduras que possuem CRMs (RD Station, HubSpot) e necessitam enxergar gargalos no funil de Vendas."
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-muted-foreground">
                    <Check className="text-green-600 shrink-0 mt-1" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-secondary/20 p-8 md:p-12 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <X className="text-red-400" /> Nós não atendemos...
              </h3>
              <ul className="space-y-6 text-primary-foreground/90">
                {[
                  "Pessoas procurando o 'ERP milagroso' ou soluções mágicas que isentem a disciplina gerencial.",
                  "Organizações sem o mínimo de registro: não podemos construir análises se não existe histórico básico preenchido.",
                  "Negócios que buscam painéis amadores complexos e confusos apenas pelo status de ter gráficos bonitos."
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <X className="text-red-400 shrink-0 mt-1" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* FAQ DA CONSULTORIA DE DADOS */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">Perguntas Frequentes</h2>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              { q: "Quais ferramentas vocês costumam usar ou exigir?", a: "Se você puder exportar algo para planilha, ou seu software tiver uma API moderna, conseguiremos integrar. Usamos plataformas profissionais de Business Intelligence do mercado para entregar Dashboards ágeis e perenes." },
              { q: "Vou precisar assinar outro software caríssimo para visualizar os relatórios?", a: "Na maioria quase total dos casos optamos por recursos livres com infraestrutura robusta, assim, a única coisa que você paga é o projeto uma única vez. Evitamos custos recorrentes de hospedagens complexas de Analytics sempre que possível." },
              { q: "Mas ainda preciso da minha equipe alimentando em múltiplas planilhas?", a: "Nosso foco é minimizar duplicação de trabalho. Idealmente, estruturaremos a governança para que dados cheguem da sua fonte nativa (ERP, CRM) direto pro Painel de controle de gestão, eliminando intermediários manuais." },
              { q: "Quão difícil é gerenciar e editar esses relatórios depois?", a: "O grande mantra da Nexus Intelligence é flexibilidade. Entregamos algo funcional. Seu time, tendo o conhecimento prático gerencial dos negócios, receberá a infra já formatada; não será necessário conhecimento em programação ou dados complexos para analisar as informações no dia-a-dia." },
              { q: "Como vocês cobram?", a: "Por projeto. Aderência ao escopo de trabalho após as sessões técnicas (Briefing de Mapeamento Inicial)." }
            ].map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-white border rounded-lg px-6 data-[state=open]:shadow-sm">
                <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline hover:text-primary py-4">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA DE ENCERRAMENTO */}
      <section className="py-32 bg-primary text-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Pare de lutar contra abas e planilhas confusão. <br className="hidden md:block" />
            <span className="text-accent">Tenha o painel de comando do seu negócio.</span>
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-12 max-w-2xl mx-auto">
            Visão gerencial automatizada é a diferença entre escalar prevendo as barreiras e pisar no freio sem saber onde ajustar.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold h-16 px-10 text-lg" asChild>
              <Link href="/servicos">Descubra as Soluções em Dados</Link>
            </Button>
            <Button size="lg" className="bg-transparent border border-white/30 text-white hover:bg-white/10 font-semibold h-16 px-10 text-lg" asChild>
              <Link href="https://wa.me/5514998622743" target="_blank">Conversar com um Especialista em BI</Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
