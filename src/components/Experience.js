import { FaGavel } from "react-icons/fa";
import { MdPeople, MdSyncAlt } from "react-icons/md";

const results = [
  {
    id: 1,
    amount: "$ 9,600,000",
    description: "Wrongful Death Vehicle Accident",
    icon: <MdSyncAlt className="text-white text-3xl" />,
    bgColor: "bg-[#C5A37C]",
  },
  {
    id: 2,
    amount: "$ 14,000,000",
    description: "Reversing A Denied Claim To Get You Paid",
    icon: <MdPeople className="text-white text-3xl" />,
    bgColor: "bg-[#0D1B2A]",
  },
  {
    id: 3,
    amount: "$ 14,000,000",
    description: "Commercial Vehicle Equity Accidents",
    icon: <FaGavel className="text-white text-3xl" />,
    bgColor: "bg-[#C5A37C]",
  },
];

export default function ProvenResultsSection() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-10 text-center font-marcellus">
      <div className="mb-12">
          <div className="flex justify-center items-center mb-8">
        <div className="w-6 h-[1px] bg-[#C4A27A] mr-3"></div>
        <p className="uppercase text-[#C4A27A] tracking-widest text-sm font-medium">
          Our Experience
        </p>
        <div className="w-6 h-[1px] bg-[#C4A27A] ml-3"></div>
      </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0D1B2A]">Proven Results</h2>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {results.map((item) => (
          <div key={item.id} className="flex flex-col items-center">
            <div className={`${item.bgColor} rounded-md p-5 mb-4`}>
              {item.icon}
            </div>
            <div className="text-2xl font-semibold text-[#0D1B2A]">{item.amount}</div>
            <p className="text-[#0D1B2A] mt-1 text-base sm:text-2xl max-w-xs">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <button className="bg-[#0D1B2A] text-white px-6 py-3 rounded hover:bg-[#1a2c45] transition">
          SEE ALL OF OUR RESULT
        </button>
      </div>
    </section>
  );
}
