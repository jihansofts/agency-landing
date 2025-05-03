"use client";
import React from "react";
import Navbar from "@/common/Navbar";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative w-full min-h-screen  pt-[30px]">
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

      {/* Content */}
      <div className="container mx-auto relative z-10 min-h-screen flex flex-col overflow-visible">
        {/* Overlay Grid */}
        <div className="absolute -top-20 -right-10 w-[400px] h-[400px] md:w-[600px] md:h-[700px] z-10">
          <div className="mt-8 grid grid-cols-2 gap-[20px]">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="relative aspect-square">
                <Image
                  src={`/images/overley${item}.png`}
                  alt={`Gallery ${item}`}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navbar */}
        <Navbar />

        {/* Hero Main Grid */}
        <div className="flex-grow z-20 flex items-center justify-center px-4 sm:px-6 py-12">
          <div className="grid grid-cols- lg:grid-cols-12 md:grid-cols-12 gap-8 w-full items-center">
            {/* Left Text Section */}
            <div className="sm:col-span-12 xl:col-span-7 lg:col-span-7 md:col-span-12 flex flex-col justify-center">
              <div className="max-w-[700px] text-center md:text-left">
                <h1 className="text-4xl capitalize sm:text-5xl md:text-[60px] leading-tight text-white font-medium">
                  One stop solution for your business
                </h1>
                <p className="font-mono text-[18px] sm:text-lg md:text-[18px] lg:text-[#A3A3A3] md:text-[#A3A3A3] sm:text-white text-white mt-7">
                  mybusinessidea.com is dedicated to transforming your digital
                  concepts into reality. Whether you need a straightforward
                  website for your current business or have a complex idea
                  you&apos;ve been envisioning, we&apos;re here to assist you.
                </p>
                <p className="font-mono text-[18px] text-base sm:text-lg md:text-[18px] lg:text-[#A3A3A3] md:text-[#A3A3A3] sm:text-white text-white mt-7">
                  Not only can we develop your mobile app or website, but we
                  also provide guidance on managing and scaling it from the
                  ground up through our business consulting services.
                </p>
                <div className="mt-10 sm:flex-col  space-x-4">
                  <button className="text-[14px] uppercase bg-gradient-to-t from-[#433199] to-[#8b55ff] text-white font-bold py-4 px-6 rounded-xl mt-4 cursor-pointer hover:bg-[#8b55ffa2] transition-colors">
                    Schedule a meeting
                  </button>
                  <button className=" sm:ml-1 text-[14px] uppercase bg-menu border border-[#443883] text-white font-bold py-4 px-6 rounded-xl mt-4 cursor-pointer hover:bg-[#8b55ffa2] transition-colors">
                    Message on Whatsapp
                  </button>
                  <div className="mt-10 flex xl:flex-row md:flex-row sm:flex-row flex-col sm:justify-center sm:items-center items-center md:gap-x-10 sm:w-full sm:gap-y-4">
                    <Image
                      src={"/images/reviewhero1.png"}
                      alt="review"
                      width={350}
                      height={30}
                    />
                    <Image
                      src={"/images/reviewhero2.png"}
                      alt="review"
                      width={300}
                      height={30}
                      className=" md:mt-0 sm:mt-5 mt-4"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Right Contact Box */}
            <div className="sm:col-span-12 xl:col-span-5 lg:col-span-12 md:col-span-12 flex justify-center items-center px-4 md:px-0 mt-16">
              <div className=" relative w-full max-w-[600px] bg-[url('/images/bginputbox.png')] bg-no-repeat bg-cover bg-center rounded-4xl p-6 sm:p-10">
                <h5 className="text-white text-center text-lg sm:text-2xl md:text-[32px] font-mono font-bold mb-6">
                  Are you ready to Bring Your Business Idea To Life?
                </h5>

                <form className="space-y-4 bg-white rounded-3xl p-6">
                  <div>
                    <label className="text-[#262626] font-mono text-[16px]">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="John*"
                      className="w-full border-b border-[#E9E9E9] px-4 py-3 text-black placeholder-[#B7B8BE]"
                    />
                  </div>
                  <div>
                    <label className="text-[#262626] font-mono text-[16px]">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Doe*"
                      className="w-full border-b border-[#E9E9E9] px-4 py-3 text-black placeholder-[#B7B8BE]"
                    />
                  </div>
                  <div>
                    <label className="text-[#262626] font-mono text-[16px]">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="hello@example.com"
                      className="w-full border-b border-[#E9E9E9] px-4 py-3 text-black placeholder-[#B7B8BE]"
                    />
                  </div>
                  <div>
                    <select
                      defaultValue=""
                      className="w-full border-b text-[#B7B8BE] border-[#E9E9E9] px-4 py-3">
                      <option value="" disabled>
                        Select project type
                      </option>
                      <option value="Standard package">Standard package</option>
                      <option value="Premium package">Premium package</option>
                      <option value="Enterprise package">
                        Enterprise package
                      </option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[#262626] font-mono text-[16px]">
                      What’s your message
                    </label>
                    <textarea
                      placeholder="Hello Nextech, I need your help with..."
                      className="w-full border-b text-black border-[#E9E9E9] px-4 py-3 placeholder-[#B7B8BE]"
                      rows={5}
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                    <div className="md:w-[300px] sm:w-full">
                      <p className="text-[14px] text-[#B7B8BE] font-mono">
                        By completing the form, you agree to our Terms and
                        Privacy Policy.
                      </p>
                    </div>
                    <button className="mt-4 sm:mt-0 text-[14px] bg-gradient-to-t from-[#433199] to-[#8b55ff] text-white py-3 px-4 rounded-lg font-bold">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
