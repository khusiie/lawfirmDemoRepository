export default function WhyChooseUs() {
  const stats = [
    {
      icon: "/icons/icon1.svg", // Replace with your actual icon paths
      value: "456+",
      label: "PROJECT COMPLETED",
    },
    {
      icon: "/icons/icon2.svg",
      value: "356+",
      label: "HAPPY CLIENTS",
    },
    {
      icon: "/icons/icon3.svg",
      value: "25+",
      label: "YEARS IN BUSINESS",
    },
    {
      icon: "/icons/icon4.svg",
      value: "254+",
      label: "WINNING AWARDS",
    },
  ];

  return (
    <section className="bg-[#fdf8f4] py-20 px-4 sm:px-6 lg:px-10 text-center font-marcellus">
      {/* Section Heading */}
      <div className="mb-12">
        <p className="text-sm tracking-widest text-[#a68160] font-semibold mb-2">
          — WHY CHOOSE US —
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f1b3d]">
          Empowering Clients Through <br className="hidden sm:block" /> Expert Guidance
        </h2>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-md shadow-sm py-10 px-6 flex flex-col items-center justify-center space-y-4"
          >
            <img src={item.icon} alt={item.label} className="h-12 w-12 mb-2" />
            <h3 className="text-3xl font-bold text-[#0f1b3d]">{item.value}</h3>
            <p className="text-sm tracking-wider text-gray-500 uppercase">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
