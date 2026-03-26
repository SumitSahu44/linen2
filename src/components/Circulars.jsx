const Circulars = () => {
  return (
    <div className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-b-2 border-black pb-4 mb-12 flex justify-between items-end">
          <h2 className="text-5xl font-black uppercase tracking-tighter italic">News & Circulars</h2>
          <p className="text-gray-500 font-bold underline cursor-pointer">Archive 2026</p>
        </div>

        <div className="grid md:grid-cols-3 gap-0 border-collapse">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-10 border-r border-gray-300 last:border-0 hover:bg-white transition-all cursor-pointer group">
              <p className="text-xs font-bold text-gray-400 mb-4">MARCH 15, 2026</p>
              <h3 className="text-2xl font-bold mb-6 group-hover:text-brand transition">New GST Norms for Bulk Textile Export</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                Important update for all our associates regarding the revised tax structure...
              </p>
              <span className="text-black font-black text-sm uppercase group-hover:tracking-widest transition-all italic">Read Full Paper →</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};