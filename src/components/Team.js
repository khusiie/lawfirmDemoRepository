import React, { useState } from "react";

const teamMembers = [
  {
    id: 1,
    name: "Jonh Smith",
    title: "Practice Attorney",
    image: "/assets/team1.jpg",
  },
  {
    id: 2,
    name: "Danial Frankie",
    title: "Financial Lawyer",
    image: "/assets/team2.jpg",
  },
  {
    id: 3,
    name: "Iliena Brown",
    title: "Criminal Lawyer",

    image: "/assets/team3.jpg",
  },
  {
    id: 4,
    name: "Joseph Thomas",
    title: "Co-Founder",
    image: "/assets/team4.jpg",
  },
];

function OurTeamSection() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="bg-[#061737] text-white py-20 px-6 lg:px-24 flex flex-col lg:flex-row gap-10 relative font-marcellus">
      {/* Left content */}
      <div className="lg:w-1/2 space-y-8">
        <div className="flex items-center justify-start mb-4">
          <div className="w-6 h-[1px] bg-[#C4A27A] mr-3"></div>
          <p className="uppercase text-[#C4A27A] tracking-widest text-sm font-medium">
            OUR TEAM
          </p>
        </div>
        <h2 className="text-4xl md:text-5xl font-semibold leading-snug">
          We The Leading Law <br />
          Firm Industry
        </h2>
        <button className="bg-[#c4a588] text-white px-6 py-3 rounded-md hover:bg-[#a98968] transition-all duration-300">
          READ MORE
        </button>
      </div>

      {/* Right content */}
      <div className="lg:w-1/2 relative">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            onMouseEnter={() => setHoveredId(member.id)}
            onMouseLeave={() => setHoveredId(null)}
            className="flex justify-between items-center border-t border-white/10 py-6 relative"
          >
            <div>
              <p className="text-xl font-medium">
                <span className="text-white mr-2">
                  {String(member.id).padStart(2, "0")}
                </span>
                {member.name}
              </p>
              <p className="text-[#c4a588] mt-1">
                {member.title.toUpperCase()}
              </p>
            </div>
            <span className="text-2xl text-[#c4a588] transform rotate-45">
              &#8594;
            </span>

            {/* Image on hover */}
            {hoveredId === member.id && (
              <div className="absolute -right-28 top-1/2 -translate-y-1/2 w-40 rotate-3 shadow-lg transition-transform duration-300 z-10">
                <img
                  src={member.image}
                  alt={member.name}
                  className="rounded-md object-cover"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurTeamSection;
