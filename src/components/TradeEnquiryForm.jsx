import React, { useState } from 'react';

const TradeEnquiry = () => {
  const [formData, setFormData] = useState({
    name: '', company: '', email: '', 
    productType: 'Bedsheet', quantity: '', message: ''
  });

  return (
    <section className="max-w-4xl mx-auto my-16 p-8 bg-white shadow-2xl rounded-2xl border-t-4 border-brand-dark">
      <h2 className="text-3xl font-bold text-brand-dark mb-2">Trade Enquiry Form</h2>
      <p className="text-gray-500 mb-8">Fill the form below for bulk orders and customized manufacturing.</p>
      
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input type="text" placeholder="Your Name" className="border p-3 rounded focus:ring-2 focus:ring-brand outline-none" />
        <input type="text" placeholder="Company Name" className="border p-3 rounded focus:ring-2 focus:ring-brand outline-none" />
        
        <select className="border p-3 rounded bg-white">
          <option>Select Product Category</option>
          <option>Premium Bedsheets</option>
          <option>Industrial Linen</option>
          <option>Hospitality Fabrics</option>
        </select>
        
        <input type="number" placeholder="Estimated Quantity (Meters/Pcs)" className="border p-3 rounded" />
        
        <textarea placeholder="Specific Requirements (Size, GSM, Quality)" className="md:col-span-2 border p-3 h-32 rounded"></textarea>
        
        <button className="md:col-span-2 bg-brand-dark text-white font-bold py-4 rounded hover:bg-black transition-all uppercase tracking-wider">
          Submit Enquiry
        </button>
      </form>
    </section>
  );
};

export default TradeEnquiry;