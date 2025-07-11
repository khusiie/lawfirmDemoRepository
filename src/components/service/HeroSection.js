import { Home } from "lucide-react";
import { Link } from "react-router-dom";

export default function PageHeader() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white py-20 font-marcellus"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0f1b3d]/80 z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Insurance & Law</h1>
        <div className="flex items-center gap-2 text-sm sm:text-base text-white/80">
          <Home className="w-5 h-5 text-white" />
          <Link to="/" className="hover:underline text-white">
            Home
          </Link>
          <span className="text-white">›</span>
          <span className="text-[#c79d7c] font-medium">Insurance & Law</span>
        </div>
      </div>
    </section>
  );
}
