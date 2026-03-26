import React from 'react';

const TextileMap = () => {
  // Coordinates adjusted for standard India Map image
  const locations = [
    { id: 1, city: "Kolkata", tag: "Tech City", x: "36%", y: "24%", color: "#0097b2" },
    { id: 2, city: "Indore", tag: "Growth Hub", x: "33%", y: "45%", color: "#f97316" },
    { id: 3, city: "Mumbai", tag: "Finance Core", x: "24%", y: "58%", color: "#ec4899" },
    { id: 4, city: "Hyderabad", tag: "Cyber Park", x: "42%", y: "68%", color: "#84cc16" },
    { id: 5, city: "Bangalore", tag: "Startup Valley", x: "38%", y: "82%", color: "#0097b2" },
  ];

  return (
    <div className="py-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header - Matching Appointment Style */}
        <div className="text-center lg:text-left mb-16">
          <span className="text-brand font-bold tracking-[0.3em] uppercase text-xs">Global Network</span>
          <h2 className="text-5xl font-black text-gray-900 mt-3">Our Textile Associates</h2>
          <div className="w-24 h-2 bg-brand mt-4 rounded-full hidden lg:block"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* LEFT: Map Section */}
          <div className="lg:col-span-7 relative group">
            <div className="relative bg-white p-6 rounded-[3.5rem] border border-gray-100 overflow-hidden transform transition-transform hover:scale-[1.01]">
              <div className="relative inline-block w-full">
                <img
                  src="/blankmap.png"
                  alt="India Strategic Map"
                  className="w-full h-auto rounded-3xl opacity-90"
                />

                {/* Overlays */}
                {locations.map((loc) => (
                  <div
                    key={loc.id}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 z-20"
                    style={{ left: loc.x, top: loc.y }}
                  >
                    {/* Professional Pointer */}
                    <div className="relative flex items-center justify-center">
                      <div className="w-5 h-5 rounded-full border-[3px] border-white shadow-xl z-10" style={{ backgroundColor: loc.color }}></div>
                      <div className="absolute inset-0 w-5 h-5 rounded-full animate-ping opacity-30 scale-150" style={{ backgroundColor: loc.color }}></div>
                    </div>

                    {/* Premium Label - Larger & Bolder */}
                    <div className="absolute left-7 top-1/2 -translate-y-1/2 flex items-center">
                      <div className="w-6 h-[2px] bg-slate-300"></div>
                      <div className="bg-[#0f172a] text-white px-5 py-2.5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-slate-700 backdrop-blur-sm min-w-[140px]">
                        <p className="font-black text-[14px] leading-tight ">{loc.city.toUpperCase()}</p>
                        <p className="text-[9px] text-brand font-bold uppercase  mt-1">{loc.tag}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: High-End Content */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white p-12 rounded-[3.5rem] shadow-2xl border border-gray-50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand/10 rounded-full -mr-16 -mt-16 opacity-50"></div>

              <h3 className="text-3xl font-black text-brand mb-6 uppercase  ">
                Strategic <br /> Manufacturing Units
              </h3>

              <p className="text-gray-500 text-lg leading-relaxed mb-10 font-medium">
                Humari units strategically India ke key textile hubs mein base hain, jo seamless logistics aur world-class production quality ensure karti hain.
              </p>

              <div className="space-y-5">
                {[
                  { title: "Network Coverage", val: "PAN INDIA" },
                  { title: "Total Active Units", val: "06 MAJOR" },
                  { title: "Export Capacity", val: "95% PLUS" }
                ].map((stat, i) => (
                  <div key={i} className="flex items-center justify-between p-6 bg-slate-50 rounded-3xl border border-slate-100 hover:border-brand/20 transition-colors">
                    <span className="font-bold text-slate-500 uppercase tracking-widest text-xs">{stat.title}</span>
                    <span className="text-brand font-black text-2xl">{stat.val}</span>
                  </div>
                ))}
              </div>

              <button className="w-full mt-10 bg-brand text-white font-black py-5 rounded-2xl shadow-[0_15px_30px_rgba(0,151,178,0.3)] hover:bg-slate-900 hover:-translate-y-1 transition-all uppercase tracking-[0.2em] text-sm">
                Connect with Regional Head
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TextileMap;