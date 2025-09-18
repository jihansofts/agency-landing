import React from "react";
import { privacySections } from "../../lib/privacydata"; // or same file

export default function PrivacyContent() {
  return (
    <section className="bg-[#D7FFF7] py-16">
      <div className="container mx-auto px-6 lg:px-20 text-gray-800 leading-relaxed">
        {privacySections.map((section) => (
          <div key={section.id} className="mb-12">
            {/* Heading */}
            <h2 className="lg:text-[56px] md:text-[48px] text-[32px] text-[#171717] font-bold font-sans mb-4">
              {section.id}. {section.title}
            </h2>

            {/* Description */}
            {section.description && (
              <p className="text-[18px] text-[#000000] font-sans mb-4">
                {section.description}
              </p>
            )}

            {/* Bullet points */}
            {section.points && (
              <ul className="list-disc list-inside space-y-2 mb-4">
                {section.points.map((point, index) => (
                  <li
                    className="text-[18px] text-[#000000] font-sans"
                    key={index}>
                    {point}
                  </li>
                ))}
              </ul>
            )}

            {/* Extra note (if available) */}
            {section.note && (
              <p className="text-[18px] text-[#000000] font-sans">
                {section.note}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
