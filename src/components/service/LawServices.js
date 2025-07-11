import React, { useState } from 'react';

const LegalServicesPage = () => {
  const categories = [
    "Business & Financial",
    "Family Law & Consult",
    "Insurance & Law",
    "Power & Energy Law",
    "Real Estate & Home",
    "Stop Foreclosure Law"
  ];

  const faqs = [
    {
      q: "What is the purpose of law and a contract?",
      a: "Laws and contracts structure relationships, protect rights, and define duties in society."
    },
    {
      q: "What is the role of a lawyer in a legal case?",
      a: "A lawyer provides legal advice, represents clients, and ensures justice is upheld."
    },
    {
      q: "How do I schedule consultation?",
      a: "You can reach us via phone, email, or fill out our online consultation form."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  return (
   <div className="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-20 py-8 font-marcellus">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <div className="bg-[#f9f5f1] p-4 w-full md:w-1/3">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className={`block w-full text-left px-4 py-3 mb-2 rounded ${
                idx === 2 ? "bg-[#c2a78f] text-white" : "bg-white text-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Hero Image */}
        <div className="w-full md:w-2/3">
          <img
            src="/team-photo.jpg" // Replace with your image path
            alt="Law Team"
            className="rounded w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Contact CTA */}
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow p-6 mt-10 items-center gap-6">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-serif text-gray-800">Didn’t get it?<br />Send us your questions.</h2>
          <button className="mt-4 px-5 py-2 bg-[#c2a78f] text-white rounded">Contact Experts</button>
        </div>
        <img
          src="/lawyer-question.jpg" // Replace with your image path
          alt="Ask a Lawyer"
          className="rounded w-full md:w-auto"
        />
      </div>

      {/* Research Platforms */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-4">Research Platform Run Students And Professors</h2>
        <p className="text-gray-600 mb-6">
          These components support businesses, governments, and individuals across domains. Digital transformation is driving rapid evolution.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: "Bloomberg Law", icon: "🏛️", desc: "A long established fact that a reader will be distracted." },
            { title: "Journal Law", icon: "📚", desc: "A long established fact that a reader will be distracted." }
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="bg-[#c2a78f] text-white w-12 h-12 rounded flex items-center justify-center text-xl">
                {item.icon}
              </div>
              <div>
                <h4 className="font-bold text-lg">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Legal Academic Section */}
      <div className="grid md:grid-cols-2 gap-6 mt-12 items-center">
        <img
          src="/legal-meeting.jpg" // Replace with your image path
          alt="Legal Academic"
          className="rounded"
        />
        <div>
          <h3 className="text-2xl font-bold mb-4">Legal Academic</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Real Estate Law Services</li>
            <li>Legal Representation</li>
            <li>Family Law Services</li>
            <li>Litigation Services</li>
          </ul>
        </div>
      </div>

      {/* Accordion FAQs */}
      <div className="mt-12">
        <h3 className="text-xl font-bold mb-4 ">Brief Introduction That Provides An Overview Of Your</h3>
        <p className="text-gray-600 mb-6">
          Showcase examples of legal work like briefs, research, contracts, and problem-solving cases to show your versatility.
        </p>
        {faqs.map((faq, i) => (
          <div key={i} className="border-b">
            <button
              onClick={() => setActiveIndex(activeIndex === i ? null : i)}
              className="w-full text-left py-4 text-lg font-semibold flex justify-between items-center"
            >
              {faq.q}
              <span>{activeIndex === i ? "−" : "+"}</span>
            </button>
            {activeIndex === i && (
              <p className="text-sm text-gray-600 pb-4">{faq.a}</p>
            )}
          </div>
        ))}
      </div>

      {/* Download Button */}
      <div className="text-center mt-10">
        <button className="px-6 py-3 bg-[#001833] text-white font-bold rounded">DOWNLOAD NOW</button>
      </div>
    </div>
  );
};

export default LegalServicesPage;
