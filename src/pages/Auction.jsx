import React from 'react';

const Auction = () => {
  const tenders = [
    { id: "PL-TEN-098", title: "Hospital Linen Contract - 10k Units", date: "Oct 30, 2026", status: "Open" },
    { id: "PL-AUC-442", title: "Excess Stock Clearance (Cotton Sateen)", date: "Nov 05, 2026", status: "Upcoming" },
  ];

  return (
    <div className="py-20 max-w-7xl mx-auto px-6">
      <div className="bg-blue-900 p-10 rounded-3xl text-white mb-12 flex flex-col md:flex-row justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold mb-2">B2B e-Auction Portal</h1>
          <p className="opacity-80">Transparent bidding for bulk procurement and contracts.</p>
        </div>
        <button className="mt-6 md:mt-0 bg-white text-blue-900 px-8 py-3 rounded-xl font-black shadow-xl">Register as Vendor</button>
      </div>

      <div className="overflow-hidden border border-gray-200 rounded-2xl shadow-sm">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 text-sm font-bold text-gray-600 uppercase">Tender/Auction ID</th>
              <th className="px-6 py-4 text-sm font-bold text-gray-600 uppercase">Requirement Description</th>
              <th className="px-6 py-4 text-sm font-bold text-gray-600 uppercase">Deadline</th>
              <th className="px-6 py-4 text-sm font-bold text-gray-600 uppercase">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {tenders.map((item) => (
              <tr key={item.id} className="hover:bg-blue-50/50 transition">
                <td className="px-6 py-4 font-mono font-bold text-blue-900">{item.id}</td>
                <td className="px-6 py-4">
                  <p className="font-semibold text-gray-800">{item.title}</p>
                  <span className="text-xs text-green-600 font-bold uppercase">{item.status}</span>
                </td>
                <td className="px-6 py-4 text-gray-600">{item.date}</td>
                <td className="px-6 py-4">
                  <button className="bg-blue-900 text-white px-5 py-2 rounded-lg text-sm font-bold">Download Tender</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Auction;