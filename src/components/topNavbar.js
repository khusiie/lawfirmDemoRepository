import { Phone, Mail } from "lucide-react";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

export default function TopHeader() {
  return (
    <div className="bg-[#0D1B2A] text-white text-sm font-marcellus">
      <div className="max-w-screen-xl mx-auto px-4 py-2 border-b border-[#1f2e3c] flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
        
        {/* Left Section */}
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
          <div className="flex items-center gap-2 border-b md:border-b-0 md:border-r md:pr-4 border-gray-600">
            <Phone className="text-[#C4A27A]" size={16} />
            <span>+1800-001-658</span>
          </div>
          <div className="flex items-center gap-2 md:border-r md:pr-4 border-gray-600">
            <Mail className="text-[#C4A27A]" size={16} />
            <span>info@peacefulqode.com</span>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex gap-4 items-center mt-2 md:mt-0">
          <a href="#" className="hover:text-[#C4A27A]">
            <FaGithub size={16} />
          </a>
          <a href="#" className="hover:text-[#C4A27A]">
            <FaFacebookF size={16} />
          </a>
          <a href="#" className="hover:text-[#C4A27A]">
            <FaYoutube size={16} />
          </a>
          <a href="#" className="hover:text-[#C4A27A]">
            <FaInstagram size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
