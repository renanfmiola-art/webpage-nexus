import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Differential } from "@/components/sections/Differential";
import { Compliance } from "@/components/sections/Compliance";
import { Segments } from "@/components/sections/Segments";
import { FAQ } from "@/components/sections/FAQ";
import { getTranslation } from "@/lib/i18n";

export default async function Home() {
  const t = await getTranslation();
  return (
    <>
      <Hero />
      <Services />
      <Differential />
      <Compliance />
      <Segments />
      <FAQ t={t} />
    </>
  );
}
