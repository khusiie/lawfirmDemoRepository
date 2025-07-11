"use client";
import { useState } from "react";
import { PhoneCall, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { pathname } = location;

  const linkClasses = (path) =>
    `font-medium uppercase text-sm cursor-pointer ${
      pathname === path
        ? "text-[#C4A27A]"
        : "text-[#0D1B2A] hover:text-[#C4A27A]"
    }`;

  return (
    <header className="w-full bg-white shadow-sm z-40 relative">
      <div className="flex items-center justify-between px-4 md:px-8 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/assets/header-logo.png" alt="Lawfic Logo" className="h-[60px]" />
        </div>

        {/* Hamburger Icon - Mobile */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex space-x-6 items-center font-marcellus">
          <Link to="/" className={linkClasses("/")}>Home</Link>
          <Link to="/about" className={linkClasses("/about")}>About</Link>
          <Link to="/services" className={linkClasses("/services")}>Service</Link>
          <Link to="/team" className={linkClasses("/portfolio")}>Our Team</Link>
          <Link to="/contact" className={linkClasses("/contact")}>Contact Us</Link>
        </nav>

        {/* Call Us Info */}
        <div className="hidden md:flex items-center space-x-3">
          <PhoneCall className="text-[#C4A27A]" size={28} />
          <div className="flex flex-col leading-tight">
            <span className="text-sm text-[#0D1B2A] font-semibold">CALL US</span>
            <span className="text-sm text-[#C4A27A]">1800-2546-2200</span>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden flex flex-col px-4 pb-4 space-y-2">
          <Link to="/" className={linkClasses("/")}>Home</Link>
          <Link to="/about" className={linkClasses("/about")}>About</Link>
          <Link to="/services" className={linkClasses("/services")}>Service</Link>
          <Link to="/portfolio" className={linkClasses("/portfolio")}>Portfolio</Link>
          <Link to="/blog" className={linkClasses("/blog")}>Blog</Link>
          <Link to="/contact" className={linkClasses("/contact")}>Contact Us</Link>

          <div className="flex items-center space-x-2 pt-4 border-t">
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
