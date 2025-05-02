"use client";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhone, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 z-100">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 mb-12">
          {/* Logo and Contact */}
          <div className="md:col-span-4">
            <h2 className="text-3xl font-bold mb-4">
              Recruitment <br /> An Alternative Solution
            </h2>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Word to talk?</h3>
              <p className="text-2xl font-bold">+44 7943 642473 </p>
            </div>
            {/* <div>
              <p className="mb-2">We&apos;re social</p>
              <div className="flex items-center space-x-4">
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    <FaFacebook size={20} />
                  </a>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    <FaTwitter size={20} />
                  </a>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    <FaLinkedin size={20} />
                  </a>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    <FaInstagram size={20} />
                  </a>
                </div>
              </div>
            </div> */}
          </div>

          {/* Product Links */}
          {/* <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              {[, ,].map((item) => (
                <li key={item}>
                  <a
                    href="/solution"
                    className="hover:text-blue-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Company Links */}
          <div className="md:col-span-4">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { text: "Home", href: "/" },
                { text: "Our Solution", href: "/solution" },
                { text: "Contact Us", href: "/contact" },
                { text: "Help Center", href: "/support" },
                { text: "FAQs", href: "/faq" },
              ].map((item) => (
                <li key={item.text}>
                  <a
                    href={item.href}
                    className="hover:text-blue-400 transition-colors">
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div className="md:col-span-4">
            <h3 className="text-lg font-semibold mb-4">Quick Connect:</h3>
            <ul className="space-y-2">
              {[
                {
                  text: "+4407459610723, +4407943642473",
                  icon: <FiPhone className="inline mr-2" />,
                  // href: "tel:+4407459610723",
                },
                {
                  text: "info@alternativerecruitmentsolution.com",
                  icon: <FiMail className="inline mr-2" />,
                  href: "mailto:info@alternativerecruitmentsolution.com",
                },
                {
                  text: "+44 7943 642473",
                  icon: <FaWhatsapp className="inline mr-2" />,
                  href: "https://wa.me/447943642473",
                },
              ].map((item) => (
                <li key={item.text}>
                  <a
                    href={item.href}
                    className="hover:text-blue-400 transition-colors flex items-center">
                    {item.icon}
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col text-center md:flex-row justify-center items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm">
                © 2025 Recruitment An Alternative Solution All rights reserved
              </p>
            </div>
            {/* <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              <a
                href="#"
                className="text-sm hover:text-blue-400 transition-colors">
                Terms of Use
              </a>
              <a
                href="#"
                className="text-sm hover:text-blue-400 transition-colors">
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm hover:text-blue-400 transition-colors">
                CCPA Privacy Policy
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
