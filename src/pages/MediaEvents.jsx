import React from 'react';
import {
  Camera, Calendar, MapPin,
  ExternalLink, PlayCircle, Users,
  ChevronRight, Newspaper,
  Download
} from 'lucide-react';

const MediaEvents = () => {
  const events = [
    {
      title: "Global Textile Expo 2026",
      date: "12 March 2026",
      location: "Pragati Maidan, Delhi",
      image: "https://images.unsplash.com/photo-1741591647455-5f7578371c87?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TmV3JTIwRXhwb3J0JTIwSW5jZW50aXZlcyUyMGZvciUyMFdlc3QlMjBCZW5nYWwlMjBUZXh0aWxlJTIwSHVifGVufDB8fDB8fHww",
      category: "Exhibition",
      featured: true
    },
    {
      title: "Annual Weavers Meet",
      date: "05 Feb 2026",
      location: "Kolkata Factory Unit",
      image: "https://images.unsplash.com/photo-1741176504904-63c5b54d35e5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fE5ldyUyMEV4cG9ydCUyMEluY2VudGl2ZXMlMjBmb3IlMjBXZXN0JTIwQmVuZ2FsJTIwVGV4dGlsZSUyMEh1YnxlbnwwfHwwfHx8MA%3D%3D",
      category: "Corporate",
      featured: false
    },
    {
      title: "Institutional Supply Summit",
      date: "20 Jan 2026",
      location: "ITC Sonar, Kolkata",
      image: "https://plus.unsplash.com/premium_photo-1683133556035-403d392ef900?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGV4dGlsZXxlbnwwfHwwfHx8MA%3D%3D",
      category: "Conference",
      featured: false
    }
  ];

  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        {/* --- HEADER SECTION --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 uppercase leading-[0.85] tracking-tighter mb-6 italic">
              Media <br /> <span className="text-brand">& Events.</span>
            </h1>
            <p className="text-slate-500 font-medium leading-relaxed border-l-4 border-brand pl-6">
              Capturing the essence of Parekh Linen's journey. From global exhibitions to local manufacturing milestones.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center min-w-[100px]">
              <span className="text-2xl font-black text-brand leading-none">25+</span>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Exhibitions</span>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center min-w-[100px]">
              <span className="text-2xl font-black text-brand leading-none">10+</span>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Awards</span>
            </div>
          </div>
        </div>

        {/* --- FEATURED EVENT (The Big Bento Card) --- */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {events.filter(e => e.featured).map((event, i) => (
            <div key={i} className="lg:col-span-3 relative h-[500px] rounded-[3rem] overflow-hidden group shadow-2xl">
              <img src={event.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-1000 group-hover:scale-105" alt="Event" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent flex flex-col justify-end p-10 md:p-16">
                <div className="flex items-center gap-3 text-brand font-black text-xs uppercase tracking-[0.4em] mb-4">
                  <Camera size={16} /> Featured Event
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic leading-none mb-6 group-hover:translate-x-4 transition-transform duration-500">
                  {event.title}
                </h2>
                <div className="flex flex-wrap gap-8 text-white/80 font-bold uppercase text-[10px] tracking-[0.2em]">
                  <span className="flex items-center gap-2"><Calendar size={14} className="text-brand" /> {event.date}</span>
                  <span className="flex items-center gap-2"><MapPin size={14} className="text-brand" /> {event.location}</span>
                </div>
              </div>
            </div>
          ))}

          {/* --- SECONDARY EVENTS GRID --- */}
          {events.filter(e => !e.featured).map((event, i) => (
            <div key={i} className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 group">
              <div className="h-64 relative overflow-hidden">
                <img src={event.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-700" alt="event" />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-brand">
                  {event.category}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-black text-slate-900 uppercase leading-tight mb-4 group-hover:text-brand transition tracking-tighter italic">
                  {event.title}
                </h3>
                <div className="flex flex-col gap-2 text-slate-400 font-bold text-[10px] uppercase tracking-widest mb-6">
                  <div className="flex items-center gap-2"><Calendar size={12} /> {event.date}</div>
                  <div className="flex items-center gap-2"><MapPin size={12} /> {event.location}</div>
                </div>
                <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-900 group-hover:text-brand transition">
                  View Gallery <ChevronRight size={14} />
                </button>
              </div>
            </div>
          ))}

          {/* --- VIDEO PRESS CARD --- */}
          <div className="bg-brand rounded-[2.5rem] p-10 text-white flex flex-col justify-between h-[400px] shadow-xl relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 opacity-20 group-hover:scale-150 transition duration-1000">
              <PlayCircle size={200} />
            </div>
            <div className="relative z-10">
              <Newspaper className="text-white/60 mb-6" size={32} />
              <h4 className="text-3xl font-black uppercase italic leading-none">Media & <br /> Press Kits.</h4>
              <p className="text-white/80 text-sm mt-4 font-medium">Download our official high-resolution media kit for press and coverage.</p>
            </div>
            <button className="relative z-10 bg-white text-brand-dark w-full py-4 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-slate-900 hover:text-white transition-all shadow-lg flex items-center justify-center gap-3">
              <Download size={16} /> Download Kit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaEvents;