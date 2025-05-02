import React from "react";
import Image from "next/image";
const Portfolii = [
  {
    id: 1,
    name: "Interior Solutions Website Design",
    img: "/images/portfolio1.png",
    brand: "brand name",
  },
  {
    id: 2,
    name: "Dog care Website Design",
    img: "/images/portfolio2.png",
    brand: "brand name",
  },
  {
    id: 3,
    name: "Course Platform",
    img: "/images/portfolio3.png",
    brand: "brand name",
  },
  {
    id: 4,
    name: "Habit Tracking Website Design",
    img: "/images/portfolio4.png",
    brand: "brand name",
  },
  {
    id: 5,
    name: "Tradilib Website Design",
    img: "/images/portfolio5.png",
    brand: "brand name",
  },
  {
    id: 6,
    name: "Dashboard Designs",
    img: "/images/portfolio6.png",
    brand: "brand name",
  },
];
export default function Portfolio() {
  return (
    <div className="relative w-full h-screen py-20 z-0 min-h-[100vh] bg-bg-secondary overflow-hidden">
      <div className="container mx-auto h-full ">
        <div className="bg-white w-[200px] flex justify-center items-center text-center rounded-2xl py-4 px-6 text-2xl font-semibold">
          <span className="font-light text-[#171717] rounded-xl uppercase shadow-sm p-2 px-4 ">
            Portfolioa
          </span>
        </div>
        <div className="flex justify-between items-center sm:flex-row flex-col">
          <div className="mt-10">
            <h1 className="text-[#171717] text-[56px] font-medium leading-[70px]">
              View our projects to see our <br /> quality and creativity.
            </h1>
            <p className="text-[#171717] text-[18px] font-mono mt-5">
              Explore the range of services we offer to elevate your online
              presence and drive growth.
            </p>
          </div>
          <a
            type="button"
            href="https://dribbble.com/Shakhari1"
            target="_blank"
            className="text-[14px] uppercase bg-gradient-to-t from-[#433199] to-[#8b55ff] text-white font-bold py-4 px-6 rounded-xl mt-4 cursor-pointer hover:bg-[#8b55ffa2] transition-colors">
            View Portfolio
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          <div  className="rounded-2xl overflow-hidden">
            <Image
              src="/images/portfolio1.png"
              alt="Portfolio"
              fill
              className="w-full h-full object-cover object-center"
            />
            <div className="flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity">
              <h2 className="text-2xl font-bold text-[#171717]">
                Interior Solutions Website Design
              </h2>
              <p className="text-white">Brand Name</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
