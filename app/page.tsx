import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Differential } from "@/components/sections/Differential";
import { Compliance } from "@/components/sections/Compliance";
import { Segments } from "@/components/sections/Segments";
import { FAQ } from "@/components/sections/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Differential />
      <Compliance />
      <Segments />
      <FAQ />
    </>
  );
}
