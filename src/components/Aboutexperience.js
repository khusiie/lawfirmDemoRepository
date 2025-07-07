import { Gavel, Users, Landmark } from "lucide-react";

const results = [
  {
    icon: <Landmark className="w-8 h-8 sm:w-10 sm:h-10 text-white" />,
    amount: "$ 9,600,000",
    title: "Wrongful Death Vehicle Accident",
  },
  {
    icon: <Users className="w-8 h-8 sm:w-10 sm:h-10 text-white" />,
    amount: "$ 14,000,000",
    title: "Reversing A Denied Claim To Get You Paid",
  },
  {
    icon: <Gavel className="w-8 h-8 sm:w-10 sm:h-10 text-white" />,
    amount: "$ 14,000,000",
    title: "Commercial Vehicle Equity Accidents",
  },
];

export default function ResultsSection() {
  return (
    <section className="bg-[#fbf7f4] py-14 px-4 sm:px-6 lg:px-10 text-center">
      {/* Heading */}
      <p className="text-xs sm:text-sm tracking-widest text-[#a68160] font-semibold mb-2">
        — OUR EXPERIENCE —
      </p>
      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#0f1b3d] mb-12">
        Proven Results
      </h2>

      {/* Result Cards Grid */}
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto font-marcellus">
        {results.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center px-2 sm:px-4"
          >
            <div className="bg-[#bd9b84] rounded-md w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-4">
              {item.icon}
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#0f1b3d] mb-1">
              {item.amount}
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-[#0f1b3d] leading-snug">
              {item.title}
            </p>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="mt-10">
        <button className="bg-[#0f1b3d] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-md hover:bg-[#1a264f] transition text-sm sm:text-base">
          SEE ALL OF OUR RESULT
        </button>
      </div>
    </section>
  );
}
