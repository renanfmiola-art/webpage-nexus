import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema, sanitizeHtml } from "@/lib/security";

// Um registro simples de rate limiting em memória.
// Para produção pesada, usar Redis ou similar (ex: Upstash Ratelimit).
const ipRequestCounts = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minuto
const MAX_REQUESTS_PER_MINUTE = 3;

function isRateLimited(ip: string): boolean {
    const now = Date.now();
    const record = ipRequestCounts.get(ip);

    if (!record) {
        ipRequestCounts.set(ip, { count: 1, timestamp: now });
        return false;
    }

    if (now - record.timestamp > RATE_LIMIT_WINDOW_MS) {
        // Reset after window expires
        ipRequestCounts.set(ip, { count: 1, timestamp: now });
        return false;
    }

    if (record.count >= MAX_REQUESTS_PER_MINUTE) {
        return true;
    }

    record.count += 1;
    return false;
}

export async function POST(req: NextRequest) {
    try {
        // 1. Identificar o IP para Rate Limiting
        const forwardedFor = req.headers.get("x-forwarded-for");
        const ip = forwardedFor ? forwardedFor.split(",")[0] : "127.0.0.1";

        if (isRateLimited(ip)) {
            return NextResponse.json(
                { error: "Muitas solicitações. Aguarde um minuto para tentar novamente." },
                { status: 429 }
            );
        }

        // 2. Parse do corpo da requisição (apenas POST body, sem URL params garantido por ser Route Handler POST estrito)
        const body = await req.json();

        // 3. Validação do Zod
        const result = contactFormSchema.safeParse(body);
        if (!result.success) {
            return NextResponse.json(
                { error: "Dados inválidos fornecidos no formulário.", details: result.error.issues },
                { status: 400 }
            );
        }

        // 4. Sanitização final (previne injeções XSS)
        const sanitizedData = {
            name: sanitizeHtml(result.data.name),
            email: sanitizeHtml(result.data.email),
            phone: sanitizeHtml(result.data.phone),
            company: result.data.company ? sanitizeHtml(result.data.company) : "",
            message: sanitizeHtml(result.data.message),
        };

        // 5. Integração com CRM ou Envio de E-mail (Ex: Resend, Sendgrid, Pipedrive)
        // Para efeito desta aplicação estática, simulamos sucesso.
        console.log("Contato recebido e validado com sucesso:", sanitizedData);

        // Retorna Sucesso
        return NextResponse.json(
            { message: "Sua mensagem foi enviada com sucesso!" },
            { status: 200 }
        );

    } catch (error) {
        console.error("Erro na rota de contato:", error);
        return NextResponse.json(
            { error: "Ocorreu um erro interno no servidor." },
            { status: 500 }
        );
    }
}
