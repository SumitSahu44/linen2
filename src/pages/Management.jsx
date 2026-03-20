import React from 'react';

const Management = () => {
  const leaders = [
    { name: "Mr. Shanti Kumar Parekh", role: "Chairman & Founder", bio: "40+ years of expertise in the Kolkata textile ecosystem." },
    { name: "Mr. Rajesh Parekh", role: "Managing Director", bio: "Driving modern technology and global export operations." },
    { name: "Ms. Ananya Parekh", role: "Head of Design & QC", bio: "Ensuring every meter of fabric meets international standards." }
  ];

  return (
    <div className="pt-24 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-black text-slate-900 tracking-tighter uppercase">The Visionaries</h1>
          <div className="w-24 h-2 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {leaders.map((person, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="h-[400px] bg-slate-100 rounded-[3rem] overflow-hidden mb-6 relative">
                <img src="https://via.placeholder.com/500x700" alt={person.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500" />
                <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition"></div>
              </div>
              <h3 className="text-2xl font-black text-slate-900">{person.name}</h3>
              <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-4">{person.role}</p>
              <p className="text-gray-500 text-sm leading-relaxed">{person.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Management;