import React from 'react';

const Circulars = () => {
  const posts = [
    { tag: "Policy", date: "March 10, 2026", title: "New Export Incentives for West Bengal Textile Hub", desc: "Understanding the latest government norms for bulk linen exporters." },
    { tag: "Product", date: "Feb 28, 2026", title: "Launching 400 TC Bamboo-Cotton Hybrid Fabrics", desc: "Sustainability meets luxury in our latest hospitality collection." },
    { tag: "Event", date: "Feb 15, 2026", title: "Parekh Linen at the Global Textile Expo", desc: "Showcasing our Kolkata heritage to international bulk buyers." }
  ];

  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-b-4 border-slate-900 pb-4 mb-16">
          <h1 className="text-6xl font-black uppercase tracking-tighter">Circulars & Insights</h1>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {posts.map((post, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="bg-slate-100 h-64 rounded-3xl mb-6 overflow-hidden relative">
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-[10px] px-3 py-1 font-black uppercase rounded-full">{post.tag}</div>
                <img src={`https://via.placeholder.com/500x300?text=Blog+${i+1}`} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" alt="Blog" />
              </div>
              <p className="text-gray-400 text-xs font-bold mb-2 uppercase">{post.date}</p>
              <h3 className="text-2xl font-black text-slate-900 leading-tight mb-4 group-hover:text-blue-600 transition">{post.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">{post.desc}</p>
              <span className="text-slate-900 font-black text-xs uppercase border-b-2 border-slate-900 pb-1 hover:text-blue-600 hover:border-blue-600 transition-all">Read Article →</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Circulars;