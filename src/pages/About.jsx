import React from 'react';

const About = () => {
  return (
    <div className="bg-white">
      {/* Split Hero */}
      <div className="flex flex-col md:flex-row h-screen">
        <div className="md:w-1/2 p-12 md:p-24 flex flex-col justify-center bg-slate-50">
          <span className="text-blue-600 font-bold mb-4 tracking-tighter">— SINCE 1995</span>
          <h1 className="text-6xl font-black text-slate-900 mb-6">Crafting <br/> The Fine Thread.</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Parekh Linen isn't just a factory; it's a legacy of West Bengal's textile craftsmanship 
            infused with modern German technology. We weave trust into every GSM.
          </p>
        </div>
        <div className="md:w-1/2 relative bg-blue-900">
          <img 
            src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover mix-blend-multiply opacity-70" 
            alt="Fabric Close-up" 
          />
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-48 h-48 border-2 border-white/30 rounded-full flex items-center justify-center animate-pulse">
                <span className="text-white font-bold tracking-widest uppercase text-xs">Our Heritage</span>
             </div>
          </div>
        </div>
      </div>

      {/* Management Cards (Floating Style) */}
      <div className="py-24 max-w-7xl mx-auto px-6">
        <h2 className="text-center text-4xl font-black mb-20 uppercase tracking-tighter">The Visionaries</h2>
        <div className="grid md:grid-cols-2 gap-20">
          {[1, 2].map((m) => (
            <div key={m} className="relative group">
              <div className="h-[500px] bg-gray-200 rounded-[4rem] overflow-hidden">
                <img src={`https://via.placeholder.com/600x800`} className="w-full h-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="absolute -bottom-10 left-10 right-10 bg-white p-8 rounded-3xl shadow-2xl border border-gray-100">
                <h4 className="text-2xl font-black">Mr. Rajesh Parekh</h4>
                <p className="text-blue-600 font-bold uppercase text-sm">Managing Director</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;