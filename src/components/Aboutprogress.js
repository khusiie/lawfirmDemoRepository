import { PhoneCall } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="bg-[#071730] text-white py-20 px-4 sm:px-8 text-center font-marcellus">
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <p className="text-[#bd9b84] text-sm tracking-widest font-medium mb-2">
          — OUR PROCESS —
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-10">
          We Help To Solve Your Legal Problem
        </h2>

        {/* Call Button */}
        <div className="inline-flex items-center rounded-md overflow-hidden shadow-md">
          <div className="bg-[#bd9b84] px-5 py-4 flex items-center justify-center">
            <PhoneCall className="text-white w-6 h-6" />
          </div>
          <a
            href="tel:006006004525"
            className="bg-transparent border border-[#334155] px-6 py-4 text-lg font-semibold hover:bg-white hover:text-[#0f1b3d] transition-colors"
          >
            00-600-600-4525
          </a>
        </div>
      </div>
    </section>
  );
}
