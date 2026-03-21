import React from 'react';
import { Star } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      client: "Apex Hospitality Group",
      text: "Superior thread count and consistency. Best bulk suppliers in West Bengal.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      client: "Global Retailers Inc.",
      text: "Parekh Linen's customized packaging and delivery timelines are commendable.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      client: "Comfort Inn Chains",
      text: "The quality of sateen sheets is at par with international luxury standards.",
      rating: 4,
      image: "https://randomuser.me/api/portraits/men/76.jpg"
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-black text-slate-900 mb-12 text-center uppercase tracking-tighter italic">
          Client Testimonials
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:-translate-y-2 transition-transform shadow-sm"
            >
              {/* Client Image */}
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={r.image}
                  alt={r.client}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow"
                />
                <span className="font-black text-sm text-slate-900 uppercase tracking-widest">
                  {r.client}
                </span>
              </div>

              <div className="text-blue-500 text-xl mb-4 italic font-black">“</div>

              <p className="text-slate-600 mb-8 italic leading-relaxed">
                "{r.text}"
              </p>

              <div className="border-t border-slate-200 pt-6 flex justify-between items-center">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={
                        i < r.rating
                          ? "fill-yellow-500 text-yellow-500"
                          : "text-gray-300"
                      }
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;