import React from 'react';
import { Layers, Bed, Building2 } from 'lucide-react';

const ProductPage = () => {
  const categories = [
    { title: "Premium Fabrics", desc: "Cotton, Sateen, and Percale rolls for industrial use.", icon: <Layers size={40} /> },
    { title: "Designer Bedsheets", desc: "Bulk sets in King, Queen, and Single sizes.", icon: <Bed size={40} /> },
    { title: "Hospitality Linen", desc: "High-thread count towels, duvets, and covers.", icon: <Building2 size={40} /> }
  ];

  return (
    <div className="pt-24 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-black text-slate-900 mb-4 uppercase">Products & Variants</h1>
        <p className="text-brand font-bold mb-12 italic tracking-widest text-sm">Manufacturers & Suppliers • Kolkata (WB)</p>

        {/* Category Selection Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {categories.map((cat, i) => (
            <div key={i} className="p-10 border-2 border-slate-100 rounded-3xl hover:border-brand-dark transition-all group cursor-pointer shadow-sm hover:shadow-xl">
              <div className="mb-6 group-hover:scale-110 transition-transform text-brand">{cat.icon}</div>
              <h3 className="text-2xl font-black mb-4">{cat.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">{cat.desc}</p>
              <button className="text-brand-dark font-black text-xs uppercase tracking-widest border-b-2 border-brand-dark pb-1">Explore Range</button>
            </div>
          ))}
        </div>

        {/* Detailed Variants Table (B2B Requirement) */}
        <div className="bg-slate-50 rounded-[2rem] p-8 overflow-x-auto">
          <h2 className="text-xl font-black mb-6 uppercase">Technical Specifications</h2>
          <table className="w-full text-left">
            <thead>
              <tr className="border-b-2 border-slate-200 text-xs uppercase tracking-widest text-gray-400">
                <th className="pb-4">Material</th>
                <th className="pb-4">Thread Count (TC)</th>
                <th className="pb-4">GSM</th>
                <th className="pb-4">Standard Sizes</th>
              </tr>
            </thead>
            <tbody className="text-sm font-bold text-slate-700">
              <tr className="border-b border-slate-200">
                <td className="py-4">Pure Cotton Sateen</td>
                <td className="py-4">200 - 400 TC</td>
                <td className="py-4">120 - 180</td>
                <td className="py-4">108" x 108" | 90" x 100"</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="py-4">Percale Weave</td>
                <td className="py-4">180 - 300 TC</td>
                <td className="py-4">110 - 150</td>
                <td className="py-4">72" x 100" | 60" x 90"</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;