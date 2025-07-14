import React from 'react';

const blogPosts = [
  {
    category: 'Divorce',
    title: 'Principle Of Precedent To Establish Consistency',
    image: '/j.jpg',
  },
  {
    category: 'Domestic Violence',
    title: 'Common Law Systems Concept Decisions Courts',
    image: '/k.jpg',
  },
  {
    category: 'Family Law',
    title: 'Precedents Are Decisions Made By Courts Within',
    image: '/l.jpg',
  },
];

const OurBlog = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 font-marcellus">
      {/* Heading */}
      <div className="text-center mb-12">
        <div className="flex justify-center items-center space-x-2 text-[#C4A27A] text-sm uppercase font-medium">
          <div className="w-6 h-[1px] bg-[#C4A27A]"></div>
          <span>Our Team</span>
          <div className="w-6 h-[1px] bg-[#C4A27A]"></div>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2">Our Latest News</h2>
      </div>

      {/* Blog Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <div key={index} className="rounded overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[240px] object-cover rounded-t"
            />
            <div className="p-5">
              <p className="text-sm uppercase text-[#c2a78f] mb-1 tracking-widest">{post.category}</p>
              <h3 className="text-lg font-semibold text-gray-900 leading-snug">{post.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurBlog;
