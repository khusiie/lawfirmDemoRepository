"use client";
import { useState } from "react";
import { PhoneCall, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="flex items-center justify-between px-4 md:px-8 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/assets/header-logo.png" alt="Lawfic Logo" className="h-[60px]" />
        </div>

        {/* Hamburger Icon - visible on mobile */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation (Desktop) */}
        <nav className="hidden md:flex space-x-6 items-center font-marcellus">
          <span className="text-[#C4A27A] font-medium uppercase text-sm cursor-pointer">Home</span>
          <span className="text-[#0D1B2A] font-medium uppercase text-sm cursor-pointer hover:text-[#C4A27A]">Pages</span>
          <span className="text-[#0D1B2A] font-medium uppercase text-sm cursor-pointer hover:text-[#C4A27A]">Service</span>
          <span className="text-[#0D1B2A] font-medium uppercase text-sm cursor-pointer hover:text-[#C4A27A]">Portfolio</span>
          <span className="text-[#0D1B2A] font-medium uppercase text-sm cursor-pointer hover:text-[#C4A27A]">Blog</span>
          <span className="text-[#0D1B2A] font-medium uppercase text-sm cursor-pointer hover:text-[#C4A27A]">Contact Us</span>
        </nav>

        {/* Call Us */}
        <div className="hidden md:flex items-center space-x-3">
          <PhoneCall className="text-[#C4A27A]" size={28} />
          <div className="flex flex-col leading-tight">
            <span className="text-sm text-[#0D1B2A] font-semibold">CALL US</span>
            <span className="text-sm text-[#C4A27A]">1800-2546-2200</span>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <nav className="md:hidden flex flex-col px-4 pb-4 space-y-2">
          <span className="text-[#C4A27A] font-medium uppercase text-sm cursor-pointer">Home</span>
          <span className="text-[#0D1B2A] font-medium uppercase text-sm cursor-pointer">Pages</span>
          <span className="text-[#0D1B2A] font-medium uppercase text-sm cursor-pointer">Service</span>
          <span className="text-[#0D1B2A] font-medium uppercase text-sm cursor-pointer">Portfolio</span>
          <span className="text-[#0D1B2A] font-medium uppercase text-sm cursor-pointer">Blog</span>
          <span className="text-[#0D1B2A] font-medium uppercase text-sm cursor-pointer">Contact Us</span>
          <div className="flex items-center space-x-2 pt-2 border-t pt-4">
            <PhoneCall className="text-[#C4A27A]" size={24} />
            <div className="flex flex-col leading-tight">
              <span className="text-sm text-[#0D1B2A] font-semibold">CALL US</span>
              <span className="text-sm text-[#C4A27A]">1800-2546-2200</span>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
