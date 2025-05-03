"use client";
import Creation from "@/components/Creation";
import Hero from "@/components/Hero";
import Packge from "@/components/Packge";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";

// import CaseStudies from "@/components/Home/CaseStudies";

export default function Home() {
  return (
    <main>
      <Hero />
      <Portfolio />
      <Services />
      <Creation />
      <Packge />
    </main>
  );
}
