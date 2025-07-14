export default function BrandStrip() {
  return (
    <section className="bg-[#fbf7f4] py-10 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 place-items-center">
        {/* Replace with actual logo paths */}
        <img src="/brand1.png" alt="Brand 1" className="h-14 sm:h-16 object-contain" />
        <img src="/brand2.png" alt="Brand 2" className="h-14 sm:h-16 object-contain" />
        <img src="/brand3.png" alt="Brand 3" className="h-14 sm:h-16 object-contain" />
        <img src="/brand4.png" alt="Brand 4" className="h-14 sm:h-16 object-contain" />
        <img src="/brand5.png" alt="Brand 5" className="h-14 sm:h-16 object-contain" />
      </div>
    </section>
  );
}
