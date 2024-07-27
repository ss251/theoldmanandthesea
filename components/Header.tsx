"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Header = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["intro", "piece", "about"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);

      // Check if page is scrolled
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#6D6D6D] bg-opacity-50 backdrop-blur-md" : ""
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <nav className="container mx-auto px-6 py-4">
        <ul className="flex justify-center space-x-12">
          {["intro", "piece", "about"].map((section) => (
            <li key={section}>
              <Link href={`#${section}`}>
                <motion.span
                  className={`text-lg font-semibold cursor-pointer transition-colors duration-300 ${
                    activeSection === section 
                      ? "text-coral" 
                      : "text-sand hover:text-coral"
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </motion.span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;