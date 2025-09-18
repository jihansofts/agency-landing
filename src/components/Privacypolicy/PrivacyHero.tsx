import React from "react";
import Image from "next/image";
import Navbar from "@/common/Navbar";
export default function PrivacyHero() {
  return (
    <section className="relative w-full min-h-screen  pt-[30px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bghero.svg"
          alt="Hero background"
          fill
          priority
          quality={100}
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>
      <div className="container mx-auto relative z-10 min-h-screen flex flex-col justify-center items-center overflow-visible">
        <Navbar />
        <div className=" z-20 flex flex-col items-center justify-center px-4 sm:px-6 py-12">
          <h2 className="lg:text-[60px] md:text-[48px] text-[32px] font-semibold font-sans text-white">
            Privacy Policy
          </h2>
          <div className="max-w-7xl mx-auto">
            <p className="font-mono text-[14px] md:text-[16px] text-center mt-2 md:mt-3 font-medium text-[#A3A3A3]">
              Last updated: September 19, 2025 <br /> Welcome to
              AllMyBusinessIdea.com (“we”, “us”, “our”). We respect your privacy
              and are committed to protecting the personal data you share with
              us. This Privacy Policy explains what information we collect, how
              we use it, with whom we share it, and your rights.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
