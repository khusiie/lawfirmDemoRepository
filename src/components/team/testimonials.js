import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Custom Bottom-Right Navigation Buttons
const CustomArrows = ({ onClickPrev, onClickNext }) => (
  <div className="absolute bottom-0 right-4 flex space-x-3 z-10 mt-4">
    <button
      onClick={onClickPrev}
      className="bg-[#c2a78f] text-white w-10 h-10 rounded hover:bg-[#b09078] flex items-center justify-center"
    >
      ⬅
    </button>
    <button
      onClick={onClickNext}
      className="bg-[#c2a78f] text-white w-10 h-10 rounded hover:bg-[#b09078] flex items-center justify-center"
    >
      ➡
    </button>
  </div>
);

const Testimonials = () => {
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false, // we'll use custom arrows instead
    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-[#fcf8f5] py-16 px-4 sm:px-6 lg:px-8 font-marcellus relative">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-[#c2a78f] font-medium tracking-widest uppercase">Our Testimonials</p>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2">
          Our Streamlined Legal <br className="hidden sm:block" />
          Process Of Success
        </h2>
      </div>

      {/* Slider */}
      <div className="max-w-7xl mx-auto relative pb-16"> {/* padding bottom for arrows */}
        <Slider ref={sliderRef} {...settings}>
          {/* Slide 1 */}
          <div className="p-4">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-center mb-4">
                <img
                  src="/testimonial1.jpg"
                  alt="Danial Frankie"
                  className="w-16 h-16 rounded-full object-cover border-2 border-[#c2a78f]"
                />
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-4 text-center">
                Law is a system of rules, long-established practices and traditions that are established to regulate behavior and maintain order within a society. Concerned with offenses against society customary law.
              </p>
              <h4 className="text-center font-bold text-gray-900">Danial Frankie</h4>
              <p className="text-center text-sm text-[#c2a78f] uppercase tracking-wide">Insurance Law</p>
              <div className="flex justify-center mt-3 text-yellow-500">★★★★★</div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="p-4">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-center mb-4">
                <img
                  src="/testimonial2.jpg"
                  alt="Joseph Thomas"
                  className="w-16 h-16 rounded-full object-cover border-2 border-[#c2a78f]"
                />
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-4 text-center">
                Law is a system of rules, long-established practices and traditions that are established to regulate behavior and maintain order within a society. Concerned with offenses against society customary law.
              </p>
              <h4 className="text-center font-bold text-gray-900">Joseph Thomas</h4>
              <p className="text-center text-sm text-[#c2a78f] uppercase tracking-wide">Practice Attorney</p>
              <div className="flex justify-center mt-3 text-yellow-500">★★★★★</div>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="p-4">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-center mb-4">
                <img
                  src="/testimonial3.jpg"
                  alt="Iliena Brown"
                  className="w-16 h-16 rounded-full object-cover border-2 border-[#c2a78f]"
                />
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-4 text-center">
                Law is a system of rules, long-established practices and traditions that are established to regulate behavior and maintain order within a society. Concerned with offenses against society customary law.
              </p>
              <h4 className="text-center font-bold text-gray-900">Iliena Brown</h4>
              <p className="text-center text-sm text-[#c2a78f] uppercase tracking-wide">Family Law</p>
              <div className="flex justify-center mt-3 text-yellow-500">★★★★☆</div>
            </div>
          </div>

          {/* ➕ Add more slides here as needed */}
        </Slider>

        {/* Custom Arrows */}
        <CustomArrows
          onClickPrev={() => sliderRef.current.slickPrev()}
          onClickNext={() => sliderRef.current.slickNext()}
        />
      </div>
    </section>
  );
};

export default Testimonials;
