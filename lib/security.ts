import DOMPurify from 'dompurify';
import { z } from 'zod';

export const sanitizeHtml = (html: string) => {
    // Configured exclusively for Next.js Server Actions / API Routes where possible
    // DOMPurify typically needs a JSDOM window in Node.js, but since we are doing
    // basic string sanitization for an API route, we could optionally use a lighter isomorphic library.
    // We'll wrap it to prevent SSR errors if it runs on the server.
    if (typeof window === 'undefined') {
        const { JSDOM } = require('jsdom');
        const window = new JSDOM('').window;
        const purify = DOMPurify(window);
        return purify.sanitize(html);
    }
    return DOMPurify.sanitize(html);
};

export const sanitizeText = (text: string) => {
    // A simple regex approach to strip basic HTML tags from simple inputs
    return text.replace(/<[^>]*>?/gm, '');
};

// Form validation schema
export const contactFormSchema = z.object({
    name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres").max(100),
    email: z.string().email("E-mail inválido"),
    phone: z.string().regex(/^\+?[0-9\s()\-]{10,20}$/, "Telefone inválido"),
    company: z.string().optional(),
    message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres").max(1000),
});

export const formatPhone = (value: string) => {
    if (!value) return '';
    const cleaned = value.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{2})(\d{4,5})(\d{4})$/);
    if (match) {
        return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return value;
};
