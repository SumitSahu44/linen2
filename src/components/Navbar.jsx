import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, ChevronDown, PhoneCall, MapPin, 
  Facebook, Twitter, Instagram, ArrowRight, 
  Briefcase, FileText, Users, Image, MessageSquare 
} from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  // Close menus on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setIsMobileOpen(false);
  }, [location]);

  const mainLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Products", path: "/products" },
  ];

  const sections = [
    {
      title: "B2B Operations",
      icon: <Briefcase size={16} />,
      links: [
        { name: "e-Quotation", path: "/quotation" },
        { name: "e-Auction", path: "/e-auction" },
        { name: "Tender & Contract", path: "/tenders" },
        { name: "Trade Enquiry", path: "/trade-enquiry" },
      ]
    },
    {
      title: "Company Info",
      icon: <FileText size={16} />,
      links: [
        { name: "Our Management", path: "/management" },
        { name: "Career Page", path: "/careers" },
        { name: "Circular", path: "/circulars" },
        { name: "Blog", path: "/blog" },
      ]
    },
    {
      title: "Engagement",
      icon: <Users size={16} />,
      links: [
        { name: "Customer Review", path: "/reviews" },
        { name: "Factory Visit", path: "/appointment" },
        { name: "Media Gallery", path: "/media" },
        { name: "Textile Associates", path: "/associates" },
      ]
    }
  ];

  return (
    <header className="relative w-full z-[1000]">
      {/* --- TOP STRIP (Hidden on Mobile) --- */}
      <div className="hidden sm:flex bg-slate-900 text-white text-[10px] py-2 px-6 justify-between items-center uppercase tracking-[0.2em] font-bold">
        <span className="flex items-center gap-2">
          <Briefcase size={12} className="text-blue-400" />
          Manufacturers & Suppliers of Bedsheet & Linen
        </span>
        <div className="flex gap-6 items-center">
          <Link to="/enquiry" className="hover:text-blue-400 transition-colors">Trade Enquiry</Link>
          <span className="flex items-center gap-1"><MapPin size={10} /> Kolkata, WB</span>
        </div>
      </div>

      {/* --- MAIN NAVIGATION --- */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex justify-between items-center">
          
          {/* LOGO */}
          <Link to="/" className="flex flex-col group">
            <span className="text-xl sm:text-2xl font-black text-slate-900 leading-none group-hover:text-blue-600 transition-colors">PAREKH LINEN</span>
            <span className="text-[9px] text-blue-600 font-bold tracking-tighter">WWW.PAREKHLINEN.COM</span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center space-x-8 font-bold text-gray-700 text-sm">
            {mainLinks.map((link) => (
              <Link key={link.name} to={link.path} className="hover:text-blue-600 transition-colors py-2">
                {link.name}
              </Link>
            ))}
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full transition-all border ${
                isMenuOpen ? 'bg-blue-600 text-white border-blue-600' : 'bg-slate-50 text-slate-900 border-slate-200 hover:border-blue-600'
              }`}
            >
              All Features <ChevronDown size={14} className={`transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* RIGHT SIDE ACTIONS */}
          <div className="flex items-center gap-3 sm:gap-4">
             <Link to="/contact" className="hidden sm:flex p-2.5 bg-slate-50 rounded-full hover:bg-blue-50 hover:text-blue-600 transition-all text-slate-600">
               <MapPin size={18} />
             </Link>
             <a href="https://wa.me/910000000000" className="flex items-center gap-2 bg-green-600 text-white px-4 py-2.5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-widest shadow-lg hover:bg-green-700 transition-all active:scale-95">
               <MessageSquare size={14} />
               <span className="hidden xs:inline">Live Chat</span>
             </a>
             
             {/* Mobile Menu Toggle */}
             <button 
               onClick={() => setIsMobileOpen(!isMobileOpen)}
               className="lg:hidden p-2 text-slate-900"
             >
               {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
             </button>
          </div>
        </div>

        {/* --- MEGA MENU OVERLAY (Desktop Only) --- */}
        {isMenuOpen && (
          <div className="hidden lg:block absolute top-full left-0 w-full bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-t border-gray-100 p-12 animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="max-w-7xl mx-auto grid grid-cols-4 gap-12">
              
              {sections.map((section, idx) => (
                <div key={idx}>
                  <h4 className="flex items-center gap-2 text-blue-600 font-black text-xs uppercase mb-6 tracking-widest">
                    {section.icon} {section.title}
                  </h4>
                  <ul className="space-y-4 text-gray-600 text-sm font-medium">
                    {section.links.map(link => (
                      <li key={link.name}>
                        <Link to={link.path} className="flex items-center gap-2 hover:text-blue-600 hover:translate-x-1 transition-all">
                          <ArrowRight size={12} className="opacity-0 -ml-4 group-hover:opacity-100 transition-all" />
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Contact Card */}
              <div className="bg-slate-900 p-8 rounded-[2rem] text-white">
                <h4 className="text-blue-400 font-black text-xs uppercase mb-4 tracking-widest">Connect with us</h4>
                <p className="text-xs text-slate-400 mb-6 leading-relaxed">Direct factory support from the heart of Kolkata's textile hub.</p>
                <div className="flex gap-3">
                   <a href="#" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all"><Facebook size={16} /></a>
                   <a href="#" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-400 transition-all"><Twitter size={16} /></a>
                   <a href="#" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-pink-600 transition-all"><Instagram size={16} /></a>
                </div>
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="mt-8 w-full border border-white/20 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all"
                >
                  Close Panel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* --- MOBILE SIDEBAR DRAWER --- */}
        <div className={`lg:hidden fixed inset-0 z-[2000] bg-slate-900/50 backdrop-blur-sm transition-opacity duration-300 ${isMobileOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <div className={`absolute right-0 top-0 h-full w-[80%] max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-out p-6 overflow-y-auto ${isMobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="flex justify-between items-center mb-8 pb-4 border-b">
              <span className="font-black text-lg">MENU</span>
              <button onClick={() => setIsMobileOpen(false)} className="p-2 bg-slate-100 rounded-full"><X size={20}/></button>
            </div>

            <div className="space-y-8">
              {sections.map((section, idx) => (
                <div key={idx}>
                  <h4 className="text-blue-600 font-black text-[10px] uppercase tracking-[0.2em] mb-4">{section.title}</h4>
                  <div className="grid grid-cols-1 gap-3">
                    {section.links.map(link => (
                      <Link 
                        key={link.name} 
                        to={link.path} 
                        className="text-slate-700 font-bold text-sm hover:text-blue-600 py-1"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t">
              <Link to="/enquiry" className="block w-full bg-blue-600 text-white text-center py-4 rounded-xl font-black uppercase tracking-widest text-xs">
                Trade Enquiry
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;