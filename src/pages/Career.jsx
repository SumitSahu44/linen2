import React from 'react';
import { Briefcase, MapPin, Clock, ArrowRight, Send, Users, Award } from 'lucide-react';

const Career = () => {
  const jobs = [
    { title: "Textile Designer", location: "Kolkata Factory", type: "Full Time", dept: "Creative" },
    { title: "Export Sales Manager", location: "Remote/Field", type: "Commission Based", dept: "Sales" },
    { title: "Quality Control Inspector", location: "Howrah Unit", type: "Full Time", dept: "Production" }
  ];

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      {/* --- HERO SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="relative h-[400px] rounded-[3rem] overflow-hidden shadow-2xl">
          <img 
            src="https://plus.unsplash.com/premium_photo-1661771773771-a093c948ba92?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyZWVyfGVufDB8fDB8fHww" 
            className="w-full h-full object-cover" 
            alt="Work at Parekh Linen" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 to-transparent flex items-center p-12 lg:p-20">
            <div className="max-w-xl text-white">
              <span className="bg-brand text-[10px] font-black uppercase tracking-[0.3em] px-4 py-1.5 rounded-full mb-6 inline-block">
                Hiring Now
              </span>
              <h1 className="text-5xl md:text-7xl font-black uppercase leading-none mb-6 italic">
                Join The <br /> <span className="text-brand">Legacy.</span>
              </h1>
              <p className="text-white/80 font-medium leading-relaxed">
                Work with India's fastest growing linen manufacturers. We value craftsmanship, 
                innovation, and global quality standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">
        
        {/* --- LEFT: WHY JOIN US --- */}
        <div className="lg:col-span-1 space-y-8">
          <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
            <h2 className="text-2xl font-black text-slate-900 uppercase italic mb-8 border-l-4 border-brand pl-4">Why Us?</h2>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="bg-brand/10 p-3 rounded-xl text-brand h-fit"><Users size={20} /></div>
                <div>
                  <h4 className="font-bold text-slate-900 uppercase text-sm">Work Culture</h4>
                  <p className="text-xs text-gray-500 mt-1">A collaborative environment that rewards creativity.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-brand/10 p-3 rounded-xl text-brand h-fit"><Award size={20} /></div>
                <div>
                  <h4 className="font-bold text-slate-900 uppercase text-sm">Growth</h4>
                  <p className="text-xs text-gray-500 mt-1">Rapid career advancement in the textile sector.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 p-10 rounded-[2.5rem] text-white">
            <h3 className="text-xl font-black italic mb-4 uppercase">Direct Apply</h3>
            <p className="text-slate-400 text-sm mb-6">Didn't find a matching role? Send your CV directly to our HR head.</p>
            <a href="mailto:careers@parekhlinen.com" className="flex items-center justify-center gap-3 bg-brand py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-brand-dark transition-all">
              <Send size={16} /> Drop CV Now
            </a>
          </div>
        </div>

        {/* --- RIGHT: JOB LISTINGS --- */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400 mb-8 flex items-center gap-2">
            <Briefcase size={16} /> Open Positions (3)
          </h2>

          {jobs.map((job, index) => (
            <div key={index} className="group bg-white p-8 rounded-[2.5rem] border border-slate-100 hover:shadow-2xl hover:border-brand transition-all cursor-pointer">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div className="flex-grow">
                  <span className="text-[10px] font-black text-brand bg-brand/10 px-3 py-1 rounded-full uppercase tracking-widest mb-3 inline-block">
                    {job.dept}
                  </span>
                  <h3 className="text-2xl font-black text-slate-900 group-hover:text-brand transition-colors uppercase italic">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap gap-6 mt-4">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest">
                      <MapPin size={14} className="text-brand" /> {job.location}
                    </div>
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest">
                      <Clock size={14} className="text-brand" /> {job.type}
                    </div>
                  </div>
                </div>
                
                <button className="bg-slate-50 text-slate-900 p-5 rounded-2xl group-hover:bg-brand-dark group-hover:text-white transition-all shadow-sm">
                  <ArrowRight size={24} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Career;