import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function TestimonialSection() {
  return (
    <section className="py-20 px-4 sm:px-8 bg-white text-[#0f1b3d]">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-sm tracking-widest text-[#a68160] font-semibold mb-2">
            — TESTIMONIAL —
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Our Happy Client's Review
          </h2>
        </div>

        {/* Testimonial Box */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
          {/* Quote Circle & Profile */}
          <div className="relative">
            <div className="w-48 h-48 sm:w-60 sm:h-60 rounded-full border border-gray-200 flex items-center justify-center">
              <Quote className="w-20 h-20 text-[#bd9b84]" />
            </div>
            <div className="absolute bottom-0 right-0 translate-x-4 translate-y-4">
              <img
                src="/client.jpg" // Ensure this is in your public folder or use a URL
                width={80}
                height={80}
                alt="John Smith"
                className="rounded-full border-4 border-white shadow-md object-cover"
              />
            </div>
          </div>

          {/* Testimonial Content */}
          <div className="max-w-xl text-center lg:text-left">
            <div className="flex justify-center lg:justify-start mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-500 text-xl">★</span>
              ))}
            </div>
            <p className="text-gray-500 italic text-lg leading-relaxed mb-4">
              Law is a system of rules and guidelines established by a society or governing authority to regulate behavior, maintain order, and provide justice. It sets standards of conduct that individuals and organizations consequences for non-compliance.
            </p>
            <h4 className="text-xl font-bold">Jonh Smith</h4>
            <p className="text-[#a68160] font-medium mt-1">Family Lawyer</p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-12">
          <button className="w-12 h-12 bg-[#0f1b3d] text-white rounded-md flex items-center justify-center hover:bg-[#1a264f]">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="w-12 h-12 bg-[#bd9b84] text-white rounded-md flex items-center justify-center hover:bg-[#a07e65]">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
