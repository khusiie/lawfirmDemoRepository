import React from 'react';

const teamMembersTop = [
  {
    name: "John Smith",
    role: "Senior Legal Advisor",
    image: "/1.jpg",
  },
  {
    name: "Sarah Johnson",
    role: "Family Law Specialist",
    image: "/3.jpg",
  },
  {
    name: "David Brown",
    role: "Corporate Attorney",
    image: "/4.jpg",
  },
];

const teamMembersBottom = [
  {
    name: "Emma Wilson",
    role: "Real Estate Expert",
    image: "/5.jpg",
  },
  {
    name: "Michael Lee",
    role: "Criminal Defense Lawyer",
    image: "/team5.jpg",
  },
];

const OurTeam = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 font-marcellus">
      {/* Heading */}
      <div className="text-center mb-12">
        <div className="flex justify-center items-center space-x-2 text-[#C4A27A] text-sm uppercase font-medium">
          <div className="w-6 h-[1px] bg-[#C4A27A]"></div>
          <span>Our Team</span>
          <div className="w-6 h-[1px] bg-[#C4A27A]"></div>
        </div>
        <h2 className="text-3xl md:text-5xl font-semibold mt-4">Awards & Honors</h2>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2">
          Exceptional Legal Dedicated Team
        </h2>
      </div>

      {/* Top Row: 3 Members */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        {teamMembersTop.map((member, index) => (
          <div key={index} className="text-center">
            <div className="w-full h-[380px] bg-gray-100 rounded-lg shadow-lg mb-4 flex items-center justify-center">
              <img
                src={member.image}
                alt={member.name}
                className="max-h-full max-w-full object-contain rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
            <p className="text-sm text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>

      {/* Bottom Row: 2 Members Centered (Pyramid Base) */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center">
        {teamMembersBottom.map((member, index) => (
          <div key={index} className="text-center">
            <div className="w-full h-[360px] bg-gray-100 rounded-lg shadow-lg mb-4 flex items-center justify-center">
              <img
                src={member.image}
                alt={member.name}
                className="max-h-full max-w-full object-contain rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
            <p className="text-sm text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
