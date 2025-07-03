import { ChevronUp } from "lucide-react";

export default function AboutSection() {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="bg-white text-center px-4 py-16 md:py-24 text-base  font-marcellus relative">
  
      <div className="flex justify-center items-center mb-8">
        <div className="w-6 h-[1px] bg-[#C4A27A] mr-3"></div>
        <p className="uppercase text-[#C4A27A] tracking-widest text-sm font-medium">
          About Us
        </p>
        <div className="w-6 h-[1px] bg-[#C4A27A] ml-3"></div>
      </div>

 
      <h2 className="text-[#0A1D35] font-normal font-opensans text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-relaxed max-w-6xl mx-auto">
        Bernstein Is A Law Firm Located In London That Companies In All Type Of Employment Disputes
        Represents Employees, Executives And Comprising Judges And Courts
      </h2>

     
      <div className="mt-10">
        <button className="bg-[#0A1D35] text-white px-8 py-4 rounded-md text-sm uppercase tracking-wide hover:bg-[#172b4d] transition">
          Read More
        </button>
      </div>

 
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="bg-[#C4A27A] text-white p-3 rounded-md shadow-md hover:bg-[#a98b6b] transition"
        >
          <ChevronUp size={20} />
        </button>
      </div>
    </section>
  );
}
