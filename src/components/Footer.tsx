import Link from "next/link";
import { Phone, MapPin } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary text-primary-foreground py-12 border-t border-border/20 mt-auto">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* Brand Core */}
                <div className="col-span-1 md:col-span-2 space-y-4">
                    <Link href="/" className="inline-block">
                        <span className="font-semibold text-2xl tracking-tight text-white">Nexus Intelligence</span>
                    </Link>
                    <p className="text-sm text-primary-foreground/80 max-w-sm mt-4">
                        Dashboards e automações em dados para negócios que buscam clareza, previsibilidade e resultados rápidos sem complexidade de softwares.
                    </p>
                    <div className="space-y-2 mt-6">
                        <div className="flex items-center gap-2 text-primary-foreground/90 text-sm">
                            <MapPin size={16} />
                            <span>Marília, SP – Brasil</span>
                        </div>
                        <div className="flex items-center gap-2 text-primary-foreground/90 text-sm">
                            <Phone size={16} />
                            <Link href="https://wa.me/5514998622743" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                                +55 14 99862-2743
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Links Principais */}
                <div className="space-y-4">
                    <h4 className="font-semibold text-lg text-white">Links Rápidos</h4>
                    <nav className="flex flex-col gap-3">
                        <Link href="/servicos" className="text-sm text-primary-foreground/80 hover:text-white transition-colors">
                            Serviços
                        </Link>
                        <Link href="/sobre" className="text-sm text-primary-foreground/80 hover:text-white transition-colors">
                            Sobre Nós
                        </Link>
                        <Link href="/contato" className="text-sm text-primary-foreground/80 hover:text-white transition-colors">
                            Contato
                        </Link>
                    </nav>
                </div>

                {/* Documentos */}
                <div className="space-y-4">
                    <h4 className="font-semibold text-lg text-white">Legal</h4>
                    <nav className="flex flex-col gap-3">
                        <Link href="/termos" className="text-sm text-primary-foreground/80 hover:text-white transition-colors">
                            Termos de Uso
                        </Link>
                        <Link href="/privacidade" className="text-sm text-primary-foreground/80 hover:text-white transition-colors">
                            Política de Privacidade
                        </Link>
                    </nav>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between text-xs text-primary-foreground/60">
                <p>&copy; {currentYear} Nexus Intelligence. Todos os direitos reservados.</p>
                <p className="mt-2 md:mt-0">CNPJ: 58.701.735/0001-22</p>
            </div>
        </footer>
    );
}
