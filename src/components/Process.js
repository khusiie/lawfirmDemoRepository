import React from "react";

const LegalProcessComponent = () => {
  const steps = [
    {
      number: "01",
      title: "Briefing & Audit",
      description:
        "Initial consultation and comprehensive review of your legal situation, objectives, and any existing documentation.",
    },
    {
      number: "02",
      title: "Cease‑and‑Desist Initiation",
      description:
        "Formal legal notice to halt unauthorized activity or violations, establishing a firm stance before further escalation.",
    },
    {
      number: "03",
      title: "Negotiation & Settlement",
      description:
        "Engage opposing parties to seek favorable terms and resolve the matter amicably without litigation when possible.",
    },
    {
      number: "04",
      title: "Litigation Preparedness",
      description:
        "Prepare legal strategies, gather evidence, and ensure all documentation is ready in the event court action is necessary.",
    },
    {
      number: "05",
      title: "Judicial Process",
      description:
        "Formal representation in court proceedings, ensuring your rights are defended through every stage of litigation.",
    },
    {
      number: "06",
      title: "Enforcement & Compliance",
      description:
        "Post-judgment follow-through to enforce court decisions and maintain ongoing compliance with legal obligations.",
    },
  ];

  return (
    <div className="bg-slate-900 min-h-screen py-16 px-4 sm:px-6 lg:px-8 font-marcellus">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* LEFT SIDE - Heading + Button + Smaller Image */}
          <div className="lg:col-span-6 space-y-10">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-0.5 bg-[rgb(184,150,126)]"></div>
              <span className="text-[rgb(184,150,126)] font-medium tracking-wider uppercase text-sm">
                Our Process
              </span>
            </div>

            <h3 className="text-2xl lg:text-4xl xl:text-5xl font-medium text-white leading-tight">
              Our Streamlined
              <br />
              Legal Process For
              <br />
              Client Success
            </h3>

            <button className="bg-white text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              READ MORE
            </button>

            {/* Smaller Image */}
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Legal process visual"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT SIDE - Single Column, Full-Width Steps */}
          <div className="lg:col-span-6 space-y-8 w-full">
            {steps.map((step) => (
              <div key={step.number} className="space-y-3 w-full">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full border border-[rgb(184,150,126)]">
                    <span
                      className={`${
                        step.number === "01"
                          ? "text-[rgb(184,150,126)]"
                          : "text-white"
                      } font-bold`}
                    >
                      {step.number}
                    </span>
                  </div>
                  <h4 className="text-xl font-semibold text-white">
                    {step.title}
                  </h4>
                </div>
                <p className="text-gray-300 text-base leading-relaxed pl-14">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalProcessComponent;
