// components/LegalServicesSection.js
import { FaBalanceScale } from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Business Consulting",
    description:
      "Business consulting is a professional service provided by experienced individuals or firms with expertise in various areas",
    image: "/assets/1.jpg",
    iconColor: "text-[#C5A37C]",
    number: "01",
  },
  {
    id: 2,
    title: "Contract Analysis",
    description:
      "It involves a detailed examination and a assessment of the terms, provisions, and clauses within a legal contract.",
    image: "/assets/2.jpg",
    iconColor: "text-[#0D1B2A]",
    number: "02",
  },
  {
    id: 3,
    title: "Dedicated Legalist",
    description:
      "Business consulting is a professional service provided by experienced individuals or firms with expertise in various areas",
    image: "/assets/3.jpg",
    iconColor: "text-[#0D1B2A]",
    number: "04",
  },
];

export default function LegalServicesSection() {
  return (
    <section className="bg-[#FDF8F5] py-16 px-4 md:px-10 font-marcellus">
      <div className="max-w-7xl mx-auto text-center mb-12">
       <div className="flex justify-center items-center mb-8">
        <div className="w-6 h-[1px] bg-[#C4A27A] mr-3"></div>
        <p className="uppercase text-[#C4A27A] tracking-widest text-sm font-medium">
          Our Services
        </p>
        <div className="w-6 h-[1px] bg-[#C4A27A] ml-3"></div>
      </div>
        <h2 className="text-4xl font-bold text-[#0D1B2A]">My Legal Practice Area</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transition hover:shadow-lg"
          >
            <div className="p-6 flex flex-col gap-4">
              <FaBalanceScale className={`text-4xl ${service.iconColor}`} />
              <div className="text-5xl font-bold text-gray-100 absolute top-4 right-6 opacity-10">
                {service.number}
              </div>
              <h3 className="text-xl font-semibold text-[#0D1B2A]">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
            <img src={service.image} alt={service.title} className="w-full h-56 object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}
