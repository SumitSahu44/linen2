import React from 'react';

const Associates = () => {
  return (
    <div className="pt-32 pb-20 bg-slate-900 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h1 className="text-6xl font-black uppercase mb-6 leading-none tracking-tighter">Our <br/> <span className="text-blue-500 italic">Associates</span></h1>
          <p className="text-gray-400 text-lg mb-8 italic font-light">Connecting the finest looms across India from our Kolkata base.</p>
          
          <div className="space-y-6">
            {['Kolkata (HQ)', 'Mumbai Hub', 'Surat Textile Unit', 'Tirupur Sourcing'].map((city) => (
              <div key={city} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-4 h-4 rounded-full bg-blue-500 group-hover:animate-ping"></div>
                <span className="text-xl font-bold group-hover:text-blue-400 transition">{city}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Map Placeholder */}
        <div className="relative h-[500px] bg-slate-800 rounded-[4rem] border-2 border-dashed border-slate-700 flex items-center justify-center">
          <div className="text-center opacity-20">
             <span className="text-9xl">🇮🇳</span>
             <p className="font-black uppercase tracking-[0.5em] mt-4">India Network</p>
          </div>
          {/* Animated Pointers */}
          <div className="absolute top-1/4 right-1/3 w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_20px_blue]"></div>
          <div className="absolute bottom-1/2 left-1/2 w-3 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Associates;