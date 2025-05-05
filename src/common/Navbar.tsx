import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ["Home", "Portfolio", "Services", "Packages", "About"];

  const menuVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" },
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setActiveLink(id);
    setIsMenuOpen(false); // Close mobile menu after click
  };

  return (
    <nav className="bg-transparent z-50 pt-5 flex items-center justify-between px-4 sm:px-8 relative">
      {/* Logo */}
      <h4 className="text-2xl md:text-[28px] text-white font-bold uppercase">
        Mybusiness <span className="text-[#6F51FF]">Idea.</span>
      </h4>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center space-x-4">
        <ul className="flex rounded-xl space-x-8 bg-[#241b37] text-white px-5 py-3">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                href={`#${item.toLowerCase()}`}
                className={`${
                  activeLink === item
                    ? "bg-[#2F2641] p-2 px-3 font-medium "
                    : "font-medium text-[14px] px-1 py-1"
                }`}
                onClick={() => setActiveLink(item)}>
                {item}
              </Link>
            </li>
          ))}
        </ul>

        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => window.open("tel:+1424323-8570")}
          className="text-[14px] py-3 cursor-pointer rounded-xl px-4 text-white uppercase font-semibold bg-gradient-to-t from-[#433199] to-[#8b55ff]">
          Call/Whatsapp: +1 (424)323-8570
        </motion.button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden text-white z-100"
        onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M3 12H21M3 6H21M3 18H21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        )}
      </button>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isMenuOpen ? "open" : "closed"}
        variants={menuVariants}
        transition={{ duration: 0.3 }}
        className="fixed top-0 right-0 w-full h-screen bg-[#241b37] lg:hidden flex flex-col items-center justify-center space-y-8">
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => scrollToSection(item)}
            className={`${
              activeLink === item
                ? "bg-[#2F2641] text-white p-2 px-3 font-medium "
                : "font-medium text-white text-[14px] px-1 py-1"
            }`}>
            {item}
          </button>
        ))}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-lg py-3 rounded-xl px-6 text-white uppercase font-semibold bg-gradient-to-t from-[#433199] to-[#8b55ff] mt-4">
          Schedule a meeting
        </motion.button>
      </motion.div>
    </nav>
  );
}
