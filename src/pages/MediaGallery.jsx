import React from 'react';

const MediaGallery = () => {
  const images = [
    { title: "Spinning Unit", url: "https://via.placeholder.com/500x500" },
    { title: "Finishing & Packaging", url: "https://via.placeholder.com/500x500" },
    { title: "Quality Control Lab", url: "https://via.placeholder.com/500x500" },
    { title: "Our Kolkata Head Office", url: "https://via.placeholder.com/500x500" },
  ];

  return (
    <div className="py-20 max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-black text-brand-dark mb-12 border-b-4 border-brand/10 pb-4 inline-block">Media & Insights</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {images.map((img, i) => (
          <div key={i} className="group relative overflow-hidden rounded-2xl shadow-md">
            <img src={img.url} className="w-full h-64 object-cover grayscale group-hover:grayscale-0 transition duration-700" alt={img.title} />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-white font-bold text-sm">{img.title}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-slate-900 p-12 rounded-3xl text-center text-white">
        <h3 className="text-2xl font-bold mb-4 italic">"Parekh Linen: Where Tradition Meets Modern Technology"</h3>
        <p className="text-gray-400">Visit our YouTube channel for factory walkthroughs.</p>
        <button className="mt-6 border border-white px-8 py-2 rounded-full hover:bg-white hover:text-brand-dark transition">Watch Videos</button>
      </div>
    </div>
  );
};

export default MediaGallery;