import React from 'react';

const TradeEnquiry = () => {
  return (
    <div className="pt-24 pb-20 bg-slate-900 text-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        <div>
          <h1 className="text-6xl font-black mb-6 uppercase leading-none">Global <br/> Trade <br/> <span className="text-blue-500 italic">Enquiry</span></h1>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            Direct manufacturers from Kolkata. We handle export and domestic bulk orders for hospitality, retail, and institutional sectors.
          </p>
          <div className="space-y-4 border-l-2 border-blue-500 pl-6 text-sm font-bold tracking-widest uppercase">
             <p>📍 Kolkata Hub (West Bengal)</p>
             <p>✉️ exports@parekhlinen.com</p>
             <p>📞 +91-XXXX-XXXXXX</p>
          </div>
        </div>

        <div className="bg-white p-10 rounded-[3rem] shadow-2xl">
          <form className="space-y-6">
            <input type="text" placeholder="Company Name" className="w-full p-4 bg-slate-50 border-none rounded-xl text-slate-900 focus:ring-2 focus:ring-blue-500" />
            <div className="grid grid-cols-2 gap-4">
              <input type="email" placeholder="Business Email" className="p-4 bg-slate-50 border-none rounded-xl text-slate-900" />
              <input type="text" placeholder="Phone Number" className="p-4 bg-slate-50 border-none rounded-xl text-slate-900" />
            </div>
            <select className="w-full p-4 bg-slate-50 border-none rounded-xl text-slate-900 appearance-none">
              <option>Bulk Bed Sheets (Cotton)</option>
              <option>Hotel Linen Supply</option>
              <option>Fabric Rolls (Wholesale)</option>
              <option>Custom Manufacturing</option>
            </select>
            <textarea placeholder="Tell us about size, GSM, and total quantity needed..." className="w-full p-4 bg-slate-50 border-none rounded-xl text-slate-900 h-32"></textarea>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-4 rounded-xl transition-all uppercase tracking-widest shadow-lg">
               Submit Trade Inquiry
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default TradeEnquiry;