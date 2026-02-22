import { cookies } from "next/headers";
import { ptBR, enUS, Dictionary } from "./dictionaries";

export type Locale = "pt-BR" | "en-US";
export const defaultLocale: Locale = "pt-BR";
export const COOKIE_NAME = "NEXT_LOCALE";

export async function getTranslation(): Promise<Dictionary> {
    const cookieStore = await cookies();
    const localeRaw = cookieStore.get(COOKIE_NAME)?.value;

    let locale = defaultLocale;
    if (localeRaw === "en-US" || localeRaw === "pt-BR") {
        locale = localeRaw;
    }

    if (locale === "en-US") return enUS;
    return ptBR;
}

export async function getLocale(): Promise<Locale> {
    const cookieStore = await cookies();
    const localeRaw = cookieStore.get(COOKIE_NAME)?.value;

    if (localeRaw === "en-US" || localeRaw === "pt-BR") {
        return localeRaw as Locale;
    }
    return defaultLocale;
}
