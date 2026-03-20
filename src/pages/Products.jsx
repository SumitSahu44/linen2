import React, { useState } from 'react';

const Products = () => {
  const [filter, setFilter] = useState('All');

  const productData = [
    { id: 1, name: "Premium Hotel Linen", category: "Bedsheets", gsm: "300 GSM", img: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80" },
    { id: 2, name: "Industrial Cotton Roll", category: "Fabrics", gsm: "200 GSM", img: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80" },
    { id: 3, name: "Sateen Striped Pillow Covers", category: "Linen", gsm: "250 GSM", img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80" },
    // Add more items here
  ];

  const filteredProducts = filter === 'All' ? productData : productData.filter(p => p.category === filter);

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h1 className="text-4xl font-black text-blue-900 uppercase tracking-tight">Our Collection</h1>
          
          {/* Filter Tabs */}
          <div className="flex gap-2 mt-6 md:mt-0 bg-white p-1 rounded-full shadow-sm border">
            {['All', 'Bedsheets', 'Fabrics', 'Linen'].map((cat) => (
              <button 
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${filter === cat ? 'bg-blue-900 text-white shadow-md' : 'text-gray-500 hover:bg-gray-100'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100">
              <div className="relative h-64 overflow-hidden">
                <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-blue-900 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                  {product.gsm}
                </div>
              </div>
              <div className="p-6">
                <p className="text-blue-600 text-xs font-bold uppercase mb-2">{product.category}</p>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{product.name}</h3>
                <div className="flex gap-3">
                  <button className="flex-1 bg-blue-900 text-white py-2 rounded font-bold text-sm hover:bg-blue-800 transition">Bulk Inquiry</button>
                  <button className="px-4 py-2 border border-gray-200 rounded hover:bg-gray-50">Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;