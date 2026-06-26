"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-gray-950/75 backdrop-blur-md border-b border-white/5"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <span className="w-9 h-9 rounded-lg bg-gradient-to-tr from-brand-purple to-brand-cyan flex items-center justify-center font-bold text-white text-lg shadow-[0_0_15px_rgba(139,92,246,0.5)]">
                A
              </span>
              <span className="font-extrabold text-xl tracking-tight text-white">
                Auto<span className="text-brand-cyan">Flow</span>
              </span>
            </a>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              Success Stories
            </a>
            <a
              href="#faq"
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              FAQ
            </a>
          </div>

          {/* Action Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-300 hover:text-white transition-colors text-sm font-medium px-4 py-2">
              Sign In
            </button>
            <button className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none">
              <span className="absolute inset-0 bg-gradient-to-r from-brand-purple to-brand-cyan rounded-full transition-all duration-300 group-hover:opacity-100" />
              <div className="relative px-6 py-2 bg-gray-950 rounded-full text-white text-sm font-semibold transition-all duration-300 group-hover:bg-transparent">
                Get Started
              </div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-900 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-screen opacity-100 border-b border-white/5 bg-gray-950/95 backdrop-blur-lg"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 flex flex-col items-stretch">
          <a
            href="#features"
            onClick={() => setIsOpen(false)}
            className="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-base font-medium border-b border-white/5"
          >
            Features
          </a>
          <a
            href="#pricing"
            onClick={() => setIsOpen(false)}
            className="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-base font-medium border-b border-white/5"
          >
            Pricing
          </a>
          <a
            href="#testimonials"
            onClick={() => setIsOpen(false)}
            className="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-base font-medium border-b border-white/5"
          >
            Success Stories
          </a>
          <a
            href="#faq"
            onClick={() => setIsOpen(false)}
            className="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-base font-medium border-b border-white/5"
          >
            FAQ
          </a>
          <div className="pt-4 pb-2 px-3 flex flex-col space-y-3">
            <button className="text-gray-300 hover:text-white transition-colors text-base font-medium py-2 text-center">
              Sign In
            </button>
            <button className="w-full py-3 bg-gradient-to-r from-brand-purple to-brand-cyan rounded-full text-white text-base font-bold shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
