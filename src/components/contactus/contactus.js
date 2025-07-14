import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="bg-white py-16 px-4 sm:px-8 lg:px-16 font-marcellus">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
        {/* Left: Contact Info + Map */}
        <div>
          <p className="text-sm text-[#c79d7c] font-semibold mb-2 tracking-wide">— CONTACT US —</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f1b3d] mb-8">
            Get In Touch With Us
          </h2>

          <div className="space-y-6 mb-10 text-gray-600">
            <div className="flex items-start gap-3">
              <MapPin className="text-[#c79d7c]" />
              <p>Envato HQ 24 Fifth st Angeles, USA</p>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="text-[#c79d7c]" />
              <p>info@peacefultheme.com</p>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="text-[#c79d7c]" />
              <p>+567 890 2458</p>
            </div>
          </div>

          {/* Map Embed */}
          <iframe
            className="w-full h-64 rounded-md shadow"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19801.150885160426!2d-0.12208402787224807!3d51.503324899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604bfb4efbbd9%3A0x9c02be3aa39e44b4!2slastminute.com%20London%20Eye!5e0!3m2!1sen!2sin!4v1689278719580!5m2!1sen!2sin"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Right: Form */}
        <div className="bg-[#fdf9f6] p-6 sm:p-10 rounded-md shadow-sm w-full">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0f1b3d] mb-6">
            Message With Us
          </h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="p-3 border border-gray-300 rounded-md w-full focus:outline-[#c79d7c]"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="p-3 border border-gray-300 rounded-md w-full focus:outline-[#c79d7c]"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Cell Phone"
                className="p-3 border border-gray-300 rounded-md w-full focus:outline-[#c79d7c]"
              />
              <input
                type="text"
                placeholder="Subject"
                className="p-3 border border-gray-300 rounded-md w-full focus:outline-[#c79d7c]"
              />
            </div>
            <textarea
              rows={5}
              placeholder="Message"
              className="p-3 border border-gray-300 rounded-md w-full focus:outline-[#c79d7c]"
            ></textarea>
            <button
              type="submit"
              className="bg-[#bd9b84] hover:bg-[#a68160] text-white px-6 py-3 rounded-md text-sm tracking-wider transition w-full sm:w-auto"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
