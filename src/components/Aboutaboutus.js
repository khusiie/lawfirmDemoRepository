import { Gavel, Landmark } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 bg-white font-marcellus">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Left Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="/lawyer-meeting.jpg" // place this image in /public
            alt="Lawyer Meeting"
            className="w-full h-auto rounded-md shadow-md object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 text-[#0f1b3d]">
          <p className="uppercase text-[#a68160] tracking-wider text-sm sm:text-base mb-2">
            About Us
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-snug">
            We Are The Leading Law <br className="hidden sm:block" />
            Firm Industry
          </h2>

          <p className="text-gray-600 mb-6 text-base leading-relaxed">
            It encompasses a wide range of principles and guidelines established by a government or other authoritative body. 
            The primary purpose of law is to fairness, and equality in needs of the society they serve.
          </p>

          {/* Features */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 mb-6">
            <div className="flex items-start gap-3">
              <Landmark className="w-8 h-8 text-[#c79d7c]" />
              <div>
                <h4 className="font-semibold text-lg">Free Initial</h4>
                <p className="font-bold text-lg -mt-1">Consultations</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Gavel className="w-8 h-8 text-[#c79d7c]" />
              <div>
                <h4 className="font-semibold text-lg">Innovative</h4>
                <p className="font-bold text-lg -mt-1">Approach</p>
              </div>
            </div>
          </div>

          {/* List Points */}
          <ul className="space-y-2 text-gray-600 mb-6 text-base">
            <li className="flex items-start gap-2">
              <span className="text-[#c79d7c] text-lg">↠</span>
              <span>Leading the Way in Legal Solutions and Client Satisfaction</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#c79d7c] text-lg">↠</span>
              <span>Your Go-To Law Firm for Industry-Specific Legal Needs</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#c79d7c] text-lg">↠</span>
              <span>Trusted Advisors: Leading the Legal Landscape</span>
            </li>
          </ul>

          {/* Button */}
          <button className="bg-[#0f1b3d] text-white px-6 py-3 rounded-md hover:bg-[#1a264f] transition">
            READ MORE
          </button>
        </div>
      </div>
    </section>
  );
}
