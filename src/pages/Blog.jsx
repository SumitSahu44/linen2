import React from 'react';

const Blogs = () => {
  const categories = ["All", "Textile Tech", "Manufacturing", "Industry Trends", "Innovation"];

  const blogPosts = [
    {
      id: 1,
      category: "Innovation",
      title: "The Future of Sustainable Textile Manufacturing in India",
      excerpt: "Explore how we are integrating eco-friendly practices and solar energy into our daily production cycles to reduce carbon footprint...",
      author: "Admin",
      date: "March 24, 2026",
      image: "https://plus.unsplash.com/premium_photo-1701157946903-57c2821d71b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGluZW4lMjBmYWJyaWN8ZW58MHx8MHx8fDA%3D"
    },
    {
      id: 2,
      category: "Trends",
      title: "Why Indian Cotton is Gaining Global Dominance Again",
      excerpt: "A deep dive into the supply chain shifts that are making India the preferred partner for global fashion brands this decade...",
      author: "Expert",
      date: "March 20, 2026",
      image: "https://images.unsplash.com/photo-1612654516785-0e1a96be21d1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGluZW4lMjBmYWJyaWN8ZW58MHx8MHx8fDA%3D"
    },
    {
      id: 3,
      category: "Manufacturing",
      title: "Automation in Textile: Balancing Speed and Quality",
      excerpt: "How AI-driven machinery is revolutionizing the way we handle bulk orders without compromising on the thread-count quality...",
      author: "Tech Team",
      date: "March 15, 2026",
      image: "https://images.unsplash.com/photo-1612676777268-24594d85b631?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxpbmVuJTIwZmFicmljfGVufDB8fDB8fHww"
    }
  ];

  return (
    <div className="py-24 bg-slate-50 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header Section */}
        <div className="mb-16">
          <span className="text-brand font-bold tracking-[0.3em] uppercase text-xs">Knowledge Hub</span>
          <h2 className="text-5xl font-black text-gray-900 mt-3 tracking-tighter">Insights & Articles</h2>
          <div className="w-24 h-2 bg-brand-dark mt-4 rounded-full"></div>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap gap-4 mb-16">
          {categories.map((cat, i) => (
            <button key={i} className={`px-8 py-3 rounded-2xl font-black text-xs uppercase tracking-widest transition-all ${i === 0 ? 'bg-brand-dark text-white shadow-lg' : 'bg-white text-gray-500 hover:bg-brand/10 hover:text-brand border border-gray-100'}`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="relative bg-white rounded-[3.5rem] shadow-2xl border border-gray-100 overflow-hidden mb-16 group">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative overflow-hidden">
              <img
                src="https://media.istockphoto.com/id/528908529/photo/colored-cloth.webp?a=1&b=1&s=612x612&w=0&k=20&c=VxBdS90v9gSWUrtRKMVhdz47785_auSF5K1NBWwVGKk="
                alt="Featured"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-8 left-8 bg-brand text-white px-6 py-2 rounded-xl font-black text-xs uppercase tracking-widest">Featured</div>
            </div>
            <div className="p-12 lg:p-20 flex flex-col justify-center">
              <span className="text-brand font-bold text-sm uppercase tracking-widest mb-4">Manufacturing Excellence</span>
              <h3 className="text-4xl font-black text-gray-900 mb-6 tracking-tighter leading-tight">Setting New Benchmarks in High-Speed Textile Production</h3>
              <p className="text-gray-500 text-lg mb-10 font-medium">Learn how our Kolkata and Indore units achieved 100% efficiency using new German spinning technology...</p>
              <button className="flex items-center gap-4 text-brand-dark font-black uppercase tracking-[0.2em] text-sm group-hover:gap-6 transition-all">
                Read Full Story <span className="text-2xl">→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-[2.5rem] shadow-xl border border-gray-100 overflow-hidden group hover:-translate-y-2 transition-all">
              <div className="h-64 overflow-hidden relative">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-lg text-brand font-black text-[10px] uppercase tracking-widest">
                  {post.category}
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-4">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                  <span>By {post.author}</span>
                </div>
                <h4 className="text-xl font-black text-gray-900 mb-4 tracking-tight group-hover:text-brand transition-colors">{post.title}</h4>
                <p className="text-gray-500 text-sm font-medium mb-6 line-clamp-2">{post.excerpt}</p>
                <div className="pt-6 border-t border-gray-50">
                  <button className="text-brand-dark font-black text-[11px] uppercase tracking-[0.2em] flex items-center gap-2">
                    Read More <span className="text-lg">→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-20 flex justify-center gap-3">
          {[1, 2, 3].map(n => (
            <button key={n} className={`w-12 h-12 rounded-2xl font-black transition-all ${n === 1 ? 'bg-brand-dark text-white shadow-lg' : 'bg-white text-gray-400 border border-gray-100 hover:bg-brand/10'}`}>
              {n}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;