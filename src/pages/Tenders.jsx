import React from 'react';
import { 
  ShieldCheck, FileText, Download, 
  ExternalLink, Clock, Globe, Briefcase 
} from 'lucide-react';

const Tenders = () => {
  const tenderList = [
    {
      id: "TND-2026-99",
      title: "Global Hospitality Linen Supply",
      client: "Marriott Group Intl.",
      deadline: "25 March 2026",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqRapfQrB0ftbPwonCUyk0isxcnhJsL0ompg&s",
      status: "Verified"
    },
    {
      id: "TND-2026-104",
      title: "Institutional Hospital Grade Fabrics",
      client: "Apollo Healthcare Hub",
      deadline: "10 April 2026",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRNLiks-L4AflbNxW2QjyRoXszIUbRobqOgw&s",
      status: "Active"
    }
  ];

  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- SECTION 1: HERO HEADER --- */}
        <div className="relative bg-blue-900 rounded-[3rem] p-12 md:p-20 overflow-hidden mb-16 shadow-2xl">
          {/* Background Texture Overlay */}
          <div className="absolute inset-0 opacity-10 flex justify-center items-center pointer-events-none">
            <Globe size={600} className="text-white" />
          </div>
          
          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-3 text-blue-300 font-black text-xs uppercase tracking-[0.4em] mb-6">
              <Briefcase size={16} /> B2B Procurement Portal
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[0.9] uppercase italic mb-8">
              Strategic <br /> <span className="text-blue-400">Contracts.</span>
            </h1>
            <p className="text-blue-100 text-lg font-medium leading-relaxed mb-10 border-l-2 border-blue-400 pl-6">
              Official bidding gateway for Parekh Linen (Kolkata). We provide verified manufacturing 
              contracts for global hospitality and healthcare sectors.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-2xl flex items-center gap-3">
                <ShieldCheck className="text-blue-400" />
                <span className="text-xs font-bold text-white uppercase tracking-widest">ISO 9001 Certified</span>
              </div>
            </div>
          </div>
        </div>

        {/* --- SECTION 2: GRID LAYOUT (The Unique Part) --- */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Main Content: Tender Cards */}
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-xs font-black uppercase tracking-[0.5em] text-slate-400 flex items-center gap-3">
              <Clock size={16} /> Active Opportunities
            </h2>

            {tenderList.map((tender, i) => (
              <div key={i} className="group relative bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col md:flex-row h-full md:h-72">
                {/* Image Side */}
                <div className="md:w-1/3 relative h-48 md:h-full overflow-hidden">
                  <img src={tender.image} className="w-full h-full object-cover transition duration-700" alt="Fabric" />
                  <div className="absolute inset-0" />
                </div>
                
                {/* Info Side */}
                <div className="md:w-2/3 p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-[10px] font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-widest">{tender.id}</span>
                      <span className="flex items-center gap-1 text-[10px] font-bold text-green-600 uppercase tracking-widest italic">
                        <ShieldCheck size={12} /> {tender.status}
                      </span>
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 leading-tight group-hover:text-blue-600 transition mb-2 tracking-tighter uppercase">{tender.title}</h3>
                    <p className="text-gray-500 font-bold text-sm italic">{tender.client}</p>
                  </div>
                  
                  <div className="flex justify-between items-center mt-6 border-t pt-6">
                    <div className="text-[10px] font-black uppercase text-slate-400">
                      Closing: <span className="text-slate-900">{tender.deadline}</span>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-3 bg-slate-50 rounded-xl hover:bg-blue-600 hover:text-white transition-all">
                        <Download size={18} />
                      </button>
                      <button className="px-6 py-3 bg-blue-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-black transition shadow-lg">
                        Apply <ExternalLink size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar: Stats & Contact */}
          <div className="space-y-8">
            {/* Contact Card */}
            <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-50 rounded-full group-hover:scale-150 transition duration-700" />
              <div className="relative z-10">
                <FileText className="text-blue-600 mb-6" size={32} />
                <h4 className="text-xl font-black uppercase mb-4 tracking-tighter">Contract Manufacturing</h4>
                <p className="text-gray-500 text-sm leading-relaxed mb-8">
                  Looking for white-label or institutional manufacturing contracts? Direct support from our Kolkata Factory.
                </p>
                <button className="w-full bg-slate-900 text-white py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-blue-600 transition shadow-lg">
                  Consult Sales
                </button>
              </div>
            </div>

            {/* Quick Fact Card */}
            <div className="bg-blue-600 p-10 rounded-[3rem] text-white shadow-xl flex flex-col justify-between h-64">
              <h4 className="text-2xl font-black italic uppercase leading-none">Pan-India <br/> Distribution <br/> Network</h4>
              <div className="flex justify-between items-end">
                <span className="text-xs font-bold text-blue-200 uppercase tracking-widest">Kolkata Hub (WB)</span>
                <Globe size={40} className="text-blue-400 opacity-50" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Tenders;