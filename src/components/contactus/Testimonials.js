'use client';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Iliena Brown",
      type: "FAMILY LAW",
      image: "/iliena.jpg",
      rating: 5,
      message:
        "Law is a system of rules, long-established practices and traditions that are established by to regulate behavior and maintain order within a society. Concerned with offenses against society customary law.",
    },
    {
      name: "Danial Frankie",
      type: "INSURANCE LAW",
      image: "/danial.jpg",
      rating: 5,
      message:
        "Law is a system of rules, long-established practices and traditions that are established by to regulate behavior and maintain order within a society. Concerned with offenses against society customary law.",
    },
  ];

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-20 text-center font-marcellus">
      <p className="text-sm tracking-widest text-[#a68160] font-semibold mb-2 uppercase">
        — Our Testimonials —
      </p>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#0f1b3d] leading-snug mb-14">
        Our Streamlined Legal Process Of<br className="hidden sm:block" />
        <span className="text-[#0f1b3d]"> Success</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#fbf7f4] p-6 sm:p-8 rounded-xl text-left shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-5">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h4 className="text-lg font-bold text-[#0f1b3d]">{item.name}</h4>
                <p className="text-sm text-[#a68160] tracking-wide">{item.type}</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
              {item.message}
            </p>
            <div className="flex space-x-1 text-yellow-400 text-xl">
              {Array.from({ length: item.rating }, (_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
