import React from 'react';

const EQuotation = () => {
  return (
    <div className="pt-24 pb-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white p-12 rounded-[3rem] shadow-2xl border border-gray-100">
          <div className="mb-10 border-l-8 border-brand-dark pl-6">
            <h1 className="text-4xl font-black text-slate-900 ">e-Quotation</h1>
            <p className="text-gray-500">Instant digital quotes for bulk textile requirements.</p>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col">
              <label className="text-xs font-black uppercase mb-2 text-brand-dark">Contact Person</label>
              <input type="text" className="p-4 bg-slate-50 rounded-xl outline-none focus:ring-2 focus:ring-brand-dark" placeholder="Your Name" />
            </div>
            <div className="flex flex-col">
              <label className="text-xs font-black uppercase mb-2 text-brand-dark">GST Number (Optional)</label>
              <input type="text" className="p-4 bg-slate-50 rounded-xl outline-none focus:ring-2 focus:ring-brand-dark" placeholder="19XXXXX" />
            </div>
            <div className="flex flex-col md:col-span-2">
              <label className="text-xs font-black uppercase mb-2 text-brand-dark">Product Selection</label>
              <select className="p-4 bg-slate-50 rounded-xl outline-none focus:ring-2 focus:ring-brand-dark appearance-none">
                <option>Hotel Bed Linen (Sets)</option>
                <option>Fabric Rolls (Per Meter)</option>
                <option>Custom Hospitality Kit</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-xs font-black uppercase mb-2 text-brand-dark">Total Quantity</label>
              <input type="number" className="p-4 bg-slate-50 rounded-xl outline-none focus:ring-2 focus:ring-brand-dark" placeholder="e.g. 500" />
            </div>
            <div className="flex flex-col text-center justify-center">
              <button className="bg-brand-dark text-white font-black py-4 rounded-2xl shadow-xl hover:bg-black transition-all uppercase tracking-widest">
                Generate Quote
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EQuotation;