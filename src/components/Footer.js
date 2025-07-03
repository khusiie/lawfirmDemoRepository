// components/Footer.tsx
import { FaFacebookF, FaInstagram, FaYoutube, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="font-marcellus relative bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/assets/bg.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-950/90"></div>

      {/* Top Contact Bar */}
      <div className="relative z-10 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-10 sm:py-16 lg:py-20 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-4">
          {/* Email */}
          <div>
            <h3 className="text-lg font-semibold">Send Email</h3>
            <p className="text-sm">peacefulqode@gmail.com</p>
          </div>

          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/assets/footer-logo.png" alt="Logo" className="h-10" />
          </div>

          {/* Phone */}
          <div>
            <h3 className="text-lg font-semibold">Call Now</h3>
            <p className="text-sm">1800-2546-2200</p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 sm:py-20 lg:py-24 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        {/* About */}
        <div>
          <h2 className="text-2xl font-bold mb-4">About</h2>
          <p className="text-sm leading-relaxed">
            It helps designers plan out where content will sit, the content to be approvored written and law.
          </p>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Services</h2>
          <ul className="text-sm space-y-2">
            <li>– Business & Financial</li>
            <li>– Family Law & Consult</li>
            <li>– Insurance & Law</li>
            <li>– Power & Energy Law</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <p className="text-sm">Germany -</p>
          <p className="text-sm mb-4">Envato HQ 24 Fifth st Angeles, USA</p>
          <div className="flex space-x-4 text-xl">
            <div className="bg-white/20 p-3 rounded-full hover:bg-white/30 cursor-pointer">
              <FaGithub />
            </div>
            <div className="bg-white/20 p-3 rounded-full hover:bg-white/30 cursor-pointer">
              <FaFacebookF />
            </div>
            <div className="bg-white/20 p-3 rounded-full hover:bg-white/30 cursor-pointer">
              <FaYoutube />
            </div>
            <div className="bg-white/20 p-3 rounded-full hover:bg-white/30 cursor-pointer">
              <FaInstagram />
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Newsletter</h2>
          <p className="text-sm mb-4">Sign up for the latest deals, products, news and more from us.</p>
          <form className="flex flex-col sm:flex-row items-stretch sm:items-center">
            <input
              type="email"
              placeholder="Email Address"
              className="text-black px-4 py-2 rounded-md sm:rounded-l-md sm:rounded-r-none w-full focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#B58C6B] text-white px-6 py-2 mt-2 sm:mt-0 sm:rounded-r-md sm:rounded-l-none rounded-md hover:bg-[#9b7356]"
            >
              GO
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
