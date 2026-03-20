import React from 'react';

const Reviews = () => {
  const reviews = [
    { client: "Apex Hospitality Group", text: "Superior thread count and consistency. Best bulk suppliers in West Bengal.", rating: "★★★★★" },
    { client: "Global Retailers Inc.", text: "Parekh Linen's customized packaging and delivery timelines are commendable.", rating: "★★★★★" },
    { client: "Comfort Inn Chains", text: "The quality of sateen sheets is at par with international luxury standards.", rating: "★★★★☆" }
  ];

  return (
    <div className="pt-24 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-black text-slate-900 mb-12 text-center uppercase tracking-tighter italic">Client Testimonials</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:-translate-y-2 transition-transform shadow-sm">
              <div className="text-blue-500 text-xl mb-4 italic font-black">“</div>
              <p className="text-slate-600 mb-8 italic leading-relaxed">"{r.text}"</p>
              <div className="border-t border-slate-200 pt-6 flex justify-between items-center">
                <span className="font-black text-sm text-slate-900 uppercase tracking-widest">{r.client}</span>
                <span className="text-yellow-500 text-xs tracking-tighter">{r.rating}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;