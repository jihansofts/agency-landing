import React from "react";
import Image from "next/image";

const PortfolioData = [
  {
    id: 1,
    name: "Interior Solutions Website Design",
    img: "/images/project1.png",
    brand: "brand name",
  },
  {
    id: 2,
    name: "Dog care Website Design",
    img: "/images/project2.png",
    brand: "brand name",
  },
  {
    id: 3,
    name: "Course Platform",
    img: "/images/project3.png",
    brand: "brand name",
  },
  {
    id: 4,
    name: "Habit Tracking Website Design",
    img: "/images/project4.png",
    brand: "brand name",
  },
  {
    id: 5,
    name: "Tradilib Website Design",
    img: "/images/project5.png",
    brand: "brand name",
  },
  {
    id: 6,
    name: "Dashboard Designs",
    img: "/images/project6.png",
    brand: "brand name",
  },
];

export default function Portfolio() {
  return (
    <div className="relative w-full py-20 z-0 min-h-[100vh] bg-bg-secondary overflow-hidden">
      <div className="container mx-auto">
        {/* Portfolio Header */}
        <div className="bg-white w-[200px] flex justify-center items-center text-center rounded-2xl py-4 px-6 text-2xl font-semibold">
          <span className="font-light text-[#171717] rounded-xl uppercase shadow-sm p-2 px-4">
            Portfolio
          </span>
        </div>

        {/* Title and Button */}
        <div className="flex justify-between items-center sm:flex-row flex-col mt-10">
          <div>
            <h1 className="text-[#171717] text-[56px] font-medium leading-[70px]">
              View our projects to see our <br /> quality and creativity.
            </h1>
            <p className="text-[#171717] text-[18px] font-mono mt-5">
              Explore the range of services we offer to elevate your online
              presence and drive growth.
            </p>
          </div>
          <a
            href="https://dribbble.com/Shakhari1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[14px] uppercase bg-gradient-to-t from-[#433199] to-[#8b55ff] text-white font-bold py-4 px-6 rounded-xl mt-4 cursor-pointer hover:bg-[#8b55ffa2] transition-colors">
            View Portfolio
          </a>
        </div>

        {/* Portfolio Grid - Dynamic Rendering */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {PortfolioData.map((project) => (
            <div key={project.id} className="col-span-1">
              <div className="rounded-2xl">
                <div className="relative w-full h-[300px]">
                  <Image
                    src={project.img}
                    alt={project.name}
                    fill
                    className="object-cover rounded-2xl"
                  />
                </div>
                <div className="flex flex-col mt-5">
                  <h2 className="text-[18px] font-medium text-[#171717]">
                    {project.name}
                  </h2>
                  <p className="text-[#A3A3A3] text-[12px] uppercase mt-2 font-semibold">
                    {project.brand}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
