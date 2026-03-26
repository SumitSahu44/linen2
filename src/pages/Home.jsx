import React from 'react';
import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';

const Home = () => {
  return (
    <div className="bg-white overflow-hidden">
      {/* --- HERO SECTION: ASYMMETRIC DESIGN --- */}
      <section className="relative min-h-screen flex items-center pt-10 mt-[-80px] bg-brand/5">
        {/* Background Decorative Text */}


        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-10 items-center z-10">

          {/* Left: Content Area */}
          <div className="lg:col-span-7">

            <span className="inline-block px-4 py-1 bg-brand/10 text-brand text-xs font-black uppercase tracking-[0.3em] rounded-full mb-6">
              Est. 1995 • Manufacturing Excellence
            </span>

            <h1 className="text-6xl md:text-6xl font-black text-slate-900 leading-[0.9] mb-8">
              The Gold <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-dark italic">
                Standard
              </span> <br />
              In Linen.
            </h1>

            <p className="text-lg text-gray-600 max-w-xl leading-relaxed mb-10 border-l-4 border-brand pl-6">
              Parekh Linen: Kolkata's leading manufacturer & supplier for bulk bedsheets,
              premium fabrics, and hospitality linen. Trusted by wholesalers worldwide.
            </p>

            <div className="flex flex-wrap gap-6">

              {/* Primary Button */}
              <Link
                to="/products"
                className="group relative px-10 py-5 bg-brand text-white font-black uppercase tracking-widest text-xs overflow-hidden rounded-xl"
              >
                <span className="relative z-10">Explore Catalog</span>
                <div className="absolute inset-0 bg-brand-dark translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300"></div>
              </Link>

              {/* Secondary Button */}
              <Link
                to="/trade-enquiry"
                className="px-10 py-5 border-2 border-brand text-brand font-black uppercase tracking-widest text-xs rounded-xl hover:bg-brand hover:text-white transition-all"
              >
                Get Quote
              </Link>

            </div>
          </div>

          {/* Right: Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full h-[500px] rounded-[3rem] overflow-hidden rotate-3 hover:rotate-0 transition-transform duration-700 shadow-2xl">
              <img
                src="https://i.etsystatic.com/30435081/r/il/166fd1/3211578341/il_570xN.3211578341_ktkh.jpg"
                className="w-full h-full object-cover"
                alt="Linen Texture"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 hidden md:block">
              <p className="text-4xl font-black text-brand">100%</p>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                Quality Export Check
              </p>
            </div>
          </div>

        </div>
      </section>
      {/* --- STATS SECTION: MINIMALIST DARK --- */}
      <section className="py-24 bg-slate-900 text-white rounded-[4rem] mx-4 my-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { label: "B2B Clients", val: "500+" },
            { label: "Meters Fabric", val: "1M+" },
            { label: "City Presence", val: "20+" },
            { label: "Quality Check", val: "100%" }
          ].map((stat, i) => (
            <div key={i} className="group cursor-default">
              <h3 className="text-5xl font-black mb-2 group-hover:text-brand transition-colors tracking-tighter">{stat.val}</h3>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- SERVICES: BENTO GRID LAYOUT --- */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-5xl font-black text-slate-900 uppercase leading-none">
              Manufacturing <br /> Excellence.
            </h2>
          </div>
          <p className="text-slate-500 font-medium md:max-w-xs text-sm">
            Scalable solutions for the modern textile industry, from Kolkata to the world.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-6 h-full">
          {/* Card 1 */}
          <div className="md:col-span-8 group relative overflow-hidden bg-slate-50 p-12 rounded-[3rem] border border-slate-100 hover:border-brand transition-all">
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-black mb-4 group-hover:text-brand transition">Bulk Fabric Supply</h3>
                <p className="text-gray-500 max-w-md">Sourcing direct from looms. High GSM, customized weaves for wholesalers and retail brands.</p>
              </div>
              <Link to="/products" className="mt-10 font-black text-xs uppercase tracking-[0.2em] inline-block border-b-2 border-slate-900 pb-1 w-fit group-hover:border-brand">Learn More</Link>
            </div>
            <div className="absolute -right-20 -bottom-20 text-slate-100 group-hover:text-brand/5 transition opacity-50 z-0"><Zap size={200} strokeWidth={1} /></div>
          </div>

          {/* Card 2 */}
          <div className="md:col-span-4 bg-brand p-10 rounded-[3rem] text-white flex flex-col justify-between hover:bg-brand-dark transition">
            <h3 className="text-2xl font-bold italic">Contract <br /> Manufacturing</h3>
            <p className="text-white/80 text-sm mt-4">White-label solutions for hospital, hotel, and institutional requirements.</p>
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mt-8 self-end">→</div>
          </div>

          {/* Card 3 */}
          <div className="md:col-span-12 group relative overflow-hidden bg-slate-900 p-12 rounded-[3rem] text-white border border-slate-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="max-w-md">
                <h3 className="text-3xl font-black mb-4">e-Auction Access</h3>
                <p className="text-slate-400">Transparent digital bidding for bulk stock clearances and tender contracts. Join our associate network today.</p>
              </div>
              <Link to="/e-auction" className="px-12 py-5 bg-white text-slate-900 font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-brand hover:text-white transition-all">
                Enter Portal
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;