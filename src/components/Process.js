import React from "react";

const LegalProcessComponent = () => {
  return (
    <div className="bg-slate-900 min-h-screen py-16 px-4 sm:px-6 lg:px-8 font-marcellus">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Content - Title and Button */}
          <div className="lg:col-span-4 space-y-8">
            {/* Header */}
            <div className="space-y-6">
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

              <button className="bg-white text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 mt-8">
                READ MORE
              </button>
            </div>
          </div>

          {/* Center Content - Process Steps */}
          <div className="lg:col-span-4 space-y-12">
            {/* Step 01 */}
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16  flex items-center justify-center">
                  <span className="text-[rgb(184,150,126)] font-bold text-2xl">
                    01
                  </span>
                </div>
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Discovery Call
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  opportunity for potential clients to have an initial
                  conversation with a lawyer
                </p>
              </div>
            </div>

            {/* Step 02 */}
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">02</span>
                </div>
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Case Analysis
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  it involves a detailed examination and evaluation of a legal
                  case
                </p>
              </div>
            </div>

            {/* Step 03 */}
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">03</span>
                </div>
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Execution
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Execution, in the context of law, refers to the enforcement or
                  implementation
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-4 relative">
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Legal scales, gavel, and law books representing justice and legal process"
                className="w-full h-64 sm:h-80 lg:h-96 xl:h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalProcessComponent;
