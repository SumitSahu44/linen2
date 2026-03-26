import React from 'react';

const Appointment = () => {
  return (
    <div className="py-20 bg-slate-50 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
        <div className="text-center mb-10">
          <span className="text-brand font-bold tracking-widest uppercase text-xs">Guest Relations</span>
          <h2 className="text-3xl font-black text-gray-900 mt-2">Schedule a Appointment Visit</h2>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" placeholder="Visitor Name" className="w-full p-4 bg-gray-50 rounded-xl outline-none focus:ring-2 focus:ring-brand-dark" />
            <input type="text" placeholder="Company Name" className="w-full p-4 bg-gray-50 rounded-xl outline-none focus:ring-2 focus:ring-brand-dark" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="date" className="w-full p-4 bg-gray-50 rounded-xl outline-none focus:ring-2 focus:ring-brand-dark text-gray-500" />
            <select className="w-full p-4 bg-gray-50 rounded-xl outline-none focus:ring-2 focus:ring-brand-dark">
              <option>Purpose: Quality Check</option>
              <option>Purpose: Partnership Meet</option>
              <option>Purpose: Order Discussion</option>
            </select>
          </div>

          <textarea placeholder="Any specific requirements for the visit?" className="w-full p-4 bg-gray-50 rounded-xl outline-none focus:ring-2 focus:ring-brand-dark h-32"></textarea>
          
          <button className="w-full bg-brand-dark text-white font-black py-4 rounded-xl shadow-lg hover:bg-black transition uppercase tracking-widest">
            Confirm Appointment Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default Appointment;