"use client";
import Creation from "@/components/Creation";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

import Portfolio from "@/components/Portfolio";
import PricingCheatSheet from "@/components/PricingCheatSheet";
import Review from "@/components/Review";
import Satisfaction from "@/components/Satisfaction";
import Services from "@/components/Services";

// import CaseStudies from "@/components/Home/CaseStudies";

export default function Home() {
  return (
    <main>
      <Hero />
      <Portfolio />
      <Services />
      <Creation />
      <PricingCheatSheet />
      <Satisfaction />
      <Review />
      <Faq />
      <Footer />
    </main>
  );
}
