import React from 'react';
import { MapPin, Building2, Link2, Globe2, Factory, ChevronRight } from 'lucide-react';

const Associates = () => {
  const regions = [
    {
      city: "Kolkata, West Bengal",
      type: "Corporate HQ & Design Studio",
      units: "03 Manufacturing Units",
      focus: "Premium Bed Linen & Sourcing",
      status: "Central Hub"
    },
    {
      city: "Mumbai, Maharashtra",
      type: "Logistics & Export Hub",
      units: "Warehousing Partner",
      focus: "International Shipping & Port Ops",
      status: "Active"
    },
    {
      city: "Surat, Gujarat",
      type: "Processing Associate",
      units: "Dyeing & Printing Unit",
      focus: "Fabric Processing & Finishing",
      status: "Operational"
    },
    {
      city: "Tirupur, Tamil Nadu",
      type: "Sourcing Associate",
      units: "Knitted Fabrics Wing",
      focus: "Raw Material Procurement",
      status: "Operational"
    }
  ];

  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- Header Section --- */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-blue-700 font-bold text-xs uppercase tracking-widest mb-4">
            <Globe2 size={16} /> Pan-India Network
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
            Our Manufacturing <br /> <span className="text-blue-700">& Supply Associates</span>
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed border-l-4 border-slate-200 pl-6">
            Parekh Linen operates through a strategic network of specialized units across India's 
            textile hubs, ensuring end-to-end quality control and logistics efficiency.
          </p>
        </div>

        {/* --- Grid Layout --- */}
        <div className="grid md:grid-cols-2 gap-8">
          {regions.map((region, index) => (
            <div key={index} className="group p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-xl hover:border-blue-200 transition-all duration-300">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-white rounded-xl shadow-sm group-hover:bg-blue-700 group-hover:text-white transition-colors">
                  <Building2 size={24} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-blue-700 bg-blue-50 px-3 py-1 rounded-full">
                  {region.status}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                <MapPin size={18} className="text-blue-700" /> {region.city}
              </h3>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-6">
                {region.type}
              </p>

              <div className="space-y-3 pt-6 border-t border-slate-200">
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <Factory size={16} className="text-blue-700" />
                  <span className="font-medium">{region.units}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <Link2 size={16} className="text-blue-700" />
                  <span className="font-medium">{region.focus}</span>
                </div>
              </div>

              <button className="mt-8 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-blue-700 group-hover:gap-4 transition-all">
                Unit Details <ChevronRight size={14} />
              </button>
            </div>
          ))}
        </div>

        {/* --- Bottom Trust Section --- */}
        <div className="mt-20 p-10 bg-slate-900 rounded-[2.5rem] text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-lg">
            <h4 className="text-2xl font-bold mb-2 uppercase">Supply Chain Partnership</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              We are constantly expanding our associate network. If you own a specialized 
              manufacturing or processing unit, connect with our procurement team.
            </p>
          </div>
          <button className="bg-blue-700 text-white px-10 py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-blue-800 transition shadow-lg">
            Become an Associate
          </button>
        </div>

      </div>
    </div>
  );
};

export default Associates;