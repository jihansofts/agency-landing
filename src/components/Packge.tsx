import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

export default function Package() {
  const features = [
    {
      name: "Functional website",
      standard: true,
      premium: true,
      enterprise: true,
      bg: "#2F2741",
    },
    {
      name: "Responsive design",
      standard: true,
      premium: true,
      enterprise: true,
      bg: "#17102F",
    },
    {
      name: "Content upload",
      standard: true,
      premium: true,
      enterprise: true,
      bg: "#2F2741",
    },
    {
      name: "Qst in form",
      standard: true,
      premium: true,
      enterprise: true,
      bg: "#17102F",
    },
    {
      name: "Payment processing",
      standard: false,
      premium: true,
      enterprise: true,
      bg: "#2F2741",
    },
    {
      name: "Autoresponsor integration",
      standard: false,
      premium: true,
      enterprise: true,
      bg: "#17102F",
    },
    {
      name: "Speed optimization",
      standard: false,
      premium: false,
      enterprise: true,
      bg: "#2F2741",
    },
    {
      name: "Hosting setup",
      standard: false,
      premium: false,
      enterprise: true,
      bg: "#17102F",
    },
    {
      name: "Social media route",
      standard: false,
      premium: false,
      enterprise: true,
      bg: "#2F2741",
    },
    {
      name: "Number of pages",
      standard: "1",
      premium: "8",
      enterprise: "Unlimited",
      bg: "#17102F",
    },
    {
      name: "Number of products",
      standard: "10",
      premium: "50",
      enterprise: "Unlimited",
      bg: "#2F2741",
    },
    {
      name: "Business",
      standard: "7 days",
      premium: "10 days",
      enterprise: "15 days",
      bg: "#17102F",
    },
  ];

  return (
    <div className="bg-bg-secondary py-20 px-4">
      <div className="container mx-auto bg-[#17102F] rounded-t-2xl overflow-hidden">
        {/* Package Header Row */}
        <div className="grid grid-cols-12 border-b border-[#3D3353]">
          <div className="col-span-12 md:col-span-3 border-r border-[#3D3353] p-8">
            <span className="font-mono text-[24px] font-medium text-white">
              Package
            </span>
          </div>
          <div className="col-span-12 md:col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-3">
              {/* Standard Package */}
              <div className="col-span-1 border-r border-[#3D3353] p-8">
                <span className="font-mono text-[24px] font-medium text-white">
                  Standard package
                </span>
                <div className="pr-4">
                  <h1 className="font-mono text-[48px] font-medium text-white">
                    $99 <span className="text-[24px]">/mo</span>
                  </h1>
                  <p className="font-mono text-[16px] mt-3 font-medium text-[#A3A3A3]">
                    Responsive design + Standard package features + 1 page
                  </p>
                  <div className="mt-5 py-4 flex justify-between items-center border-y border-[#3D3353]">
                    <span className="font-mono text-[16px] font-medium text-white">
                      Billed monthly
                    </span>
                    <p className="font-mono text-[16px] font-medium text-white">
                      $99
                    </p>
                  </div>
                </div>
              </div>

              {/* Premium Package */}
              <div className="col-span-1 border-r border-[#3D3353] p-8">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-[24px] font-medium text-white">
                    Premium package
                  </span>
                  <span className="font-mono text-[12px] font-normal uppercase py-1 px-4 rounded-md bg-gradient-to-t from-[#433199] to-[#8b55ff] text-white">
                    Popular
                  </span>
                </div>
                <div className="pr-4">
                  <h1 className="font-mono text-[48px] font-medium text-white">
                    $499 <span className="text-[24px]">/mo</span>
                  </h1>
                  <p className="font-mono text-[16px] mt-3 font-medium text-[#A3A3A3]">
                    Responsive design + Premium Package + 8 pages
                  </p>
                  <div className="mt-5 py-4 flex justify-between items-center border-y border-[#3D3353]">
                    <span className="font-mono text-[16px] font-medium text-white">
                      Billed monthly
                    </span>
                    <p className="font-mono text-[16px] font-medium text-white">
                      $499
                    </p>
                  </div>
                </div>
              </div>

              {/* Enterprise Package */}
              <div className="col-span-1 p-8">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-[24px] font-medium text-white">
                    Enterprise package
                  </span>
                </div>
                <div className="pr-4">
                  <h1 className="font-mono text-[48px] font-medium text-white">
                    $999 <span className="text-[24px]">/mo</span>
                  </h1>
                  <p className="font-mono text-[16px] mt-3 font-medium text-[#A3A3A3]">
                    Responsive design + Enterprise + Unlimited Pages
                  </p>
                  <div className="mt-5 py-4 flex justify-between items-center border-y border-[#3D3353]">
                    <span className="font-mono text-[16px] font-medium text-white">
                      Billed monthly
                    </span>
                    <p className="font-mono text-[16px] font-medium text-white">
                      $999
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features List */}
        {features.map((feature, index) => (
          <div
            key={index}
            className="grid grid-cols-12 border-b border-[#3D3353] last:border-b-0"
            style={{ backgroundColor: feature.bg }}>
            <div className="col-span-12 md:col-span-3 border-r border-[#3D3353] p-4 md:p-8">
              <p className="text-[18px] font-mono font-normal text-white">
                {feature.name}
              </p>
            </div>
            <div className="col-span-12 md:col-span-9">
              <div className="grid grid-cols-1 md:grid-cols-3 h-full">
                {/* Standard */}
                <div className="col-span-1 border-r border-[#3D3353] p-4 md:p-8 flex items-center justify-center">
                  {typeof feature.standard === "boolean" ? (
                    feature.standard ? (
                      <FaCircleCheck className="text-[#70D421] text-xl" />
                    ) : (
                      <FaTimes className="text-red-500 text-xl" />
                    )
                  ) : (
                    <span className="text-white font-mono">
                      {feature.standard}
                    </span>
                  )}
                </div>

                {/* Premium */}
                <div className="col-span-1 border-r border-[#3D3353] p-4 md:p-8 flex items-center justify-center">
                  {typeof feature.premium === "boolean" ? (
                    feature.premium ? (
                      <FaCircleCheck className="text-[#70D421] text-xl" />
                    ) : (
                      <FaTimes className="text-red-500 text-xl" />
                    )
                  ) : (
                    <span className="text-white font-mono">
                      {feature.premium}
                    </span>
                  )}
                </div>

                {/* Enterprise */}
                <div className="col-span-1 p-4 md:p-8 flex items-center justify-center">
                  {typeof feature.enterprise === "boolean" ? (
                    feature.enterprise ? (
                      <FaCircleCheck className="text-[#70D421] text-xl" />
                    ) : (
                      <FaTimes className="text-red-500 text-xl" />
                    )
                  ) : (
                    <span className="text-white font-mono">
                      {feature.enterprise}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="grid grid-cols-12 border-b border-[#3D3353] last:border-b-0">
          <div className="col-span-12 md:col-span-3 border-r border-[#3D3353] p-4 md:p-8"></div>
          <div className="col-span-12 md:col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-3 h-full">
              <div className="col-span-1 p-4 md:p-5 flex items-center justify-center border-r border-[#3D3353]">
                <button className="font-semibold cursor-pointer uppercase border border-[##6F51FF] py-3 px-8 rounded-lg text-[14px] text-[#6F51FF] hover:bg-[#6F51FF] hover:text-white duration-300 translate-all">
                  Request Package
                </button>
              </div>
              <div className="col-span-1 flex justify-center items-center p-4 md:p-5 border-r border-[#3D3353]">
                <button className="font-semibold cursor-pointer uppercase py-3 px-8 rounded-lg text-[14px] text-white  bg-[#6F51FF] hover:text-white hover:border hover:border-[#6F51FF] hover:bg-[#2F2741] duration-300 translate-all">
                  Request Package
                </button>
              </div>
              <div className="col-span-1 flex justify-center items-center p-4 md:p-5">
                <button className="font-semibold cursor-pointer uppercase border border-[##6F51FF] py-3 px-8 rounded-lg text-[14px] text-[#6F51FF] hover:bg-[#6F51FF] hover:text-white duration-300 translate-all">
                  request Package
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
