// components/HeroSection.js
export default function HeroSection() {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat text-white w-full font-marcellus "
      style={{ backgroundImage: "url('/assets/bg.png')" }} // ← your background image here
    >
      <div className="bg-[#0D1B2A]/80"> {/* Optional dark overlay for better text contrast */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative">

          {/* Left content */}
          <div className="text-center md:text-left">
            <p className="text-[#C4A27A] uppercase tracking-widest text-sm mb-4">
              Leave Court To Us
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-semibold leading-tight mb-6">
              Special Approach,<br /> Dedicated Society
            </h1>
            <p className="text-base md:text-lg text-gray-300 mb-8">
              There are many variations of passages of Ipsum available, but the majority
              suffered alteration in some form randomised words injected.
            </p>
            <button className="bg-[#C4A27A] hover:bg-[#a98b6b] text-white px-8 py-3 rounded-md uppercase tracking-wider text-sm">
              Read More
            </button>
          </div>

          {/* Right image */}
          <div className="flex justify-center md:justify-end relative">
            <img
              src="/assets/2.png"
              alt="Lawyer"
              className="h-auto w-[754px]"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
