import React from "react";

const awards = [
  {
    title: "Commercial Award",
    event: "BERLIN DESIGN WEEK, GERMANY",
    year: "2023",
    hasAward: false,
  },
  {
    title: "Plants & Architecture",
    event: "ARCHITECTURE WEEK, ROME, ITALY",
    year: "2023",
    hasAward: true,
  },
  {
    title: "Motion Graphics",
    event: "LONDON DESIGN WEEK, UK",
    year: "2022",
    hasAward: false,
  },
  {
    title: "Plan Roof",
    event: "BERLIN DESIGN WEEK, GERMANY",
    year: "2023",
    hasAward: false,
  },
];

export default function AwardsSection() {
  return (
    <div className="px-4 md:px-16 py-16 bg-white text-[#061737]">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex justify-center items-center space-x-2 text-[#C4A27A] text-sm uppercase font-medium">
          <div className="w-6 h-[1px] bg-[#C4A27A]"></div>
          <span>Award</span>
          <div className="w-6 h-[1px] bg-[#C4A27A]"></div>
        </div>
        <h2 className="text-3xl md:text-5xl font-semibold mt-4">Awards & Honors</h2>
      </div>

      {/* Awards list */}
      <div className="space-y-6">
        {awards.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center justify-between bg-[#fdf8f4] rounded-md px-6 py-6 md:py-8"
          >
            {/* Title */}
            <p className="text-xl md:text-2xl font-medium text-[#061737] w-full md:w-1/3 text-center md:text-left">
              {item.title}
            </p>

            {/* Event */}
            <div className="w-full md:w-1/3 mt-4 md:mt-0 text-center md:text-left text-[#C4A27A] font-medium">
              <p className="text-sm md:text-base">{item.event}</p>
            </div>

            {/* Year */}
            <p className="text-xl font-medium text-[#061737] w-full md:w-1/6 mt-4 md:mt-0 text-center md:text-right">
              {item.year}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
