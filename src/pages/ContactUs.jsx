import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react'; // Agar icons use karne ho toh

const ContactUs = () => {
  return (
    <div className="py-24 bg-slate-50 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header Section */}
        <div className="text-center mb-20">
          <span className="text-brand font-bold tracking-[0.3em] uppercase text-xs">Get In Touch</span>
          <h2 className="text-5xl font-black text-gray-900 mt-3 tracking-tighter">Let's Connect</h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg font-medium">
            Humari team aapki queries aur partnerships ke liye hamesha taiyar hai. Neeche diye gaye form ya details se humein sampark karein.
          </p>
          <div className="w-24 h-2 bg-brand-dark mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* LEFT: Contact Information Cards */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-3xl font-black text-brand-dark mb-8 tracking-tighter uppercase italic">Contact Details</h3>

            <div className="grid grid-cols-1 gap-6">
              {/* Card 1: Office */}
              <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100 flex items-start gap-6 hover:translate-x-2 transition-transform">
                <div className="w-14 h-14 bg-brand/10 rounded-2xl flex items-center justify-center text-brand">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="font-black text-gray-900 text-xl tracking-tight">Head Office</h4>
                  <p className="text-gray-500 mt-1 font-medium leading-relaxed">
                    Plot No. 45, Sector 62, <br /> Kolkata, West Bengal - 201301
                  </p>
                </div>
              </div>

              {/* Card 2: Contact */}
              <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100 flex items-start gap-6 hover:translate-x-2 transition-transform">
                <div className="w-14 h-14 bg-brand/10 rounded-2xl flex items-center justify-center text-brand">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="font-black text-gray-900 text-xl tracking-tight">Call Support</h4>
                  <p className="text-gray-500 mt-1 font-medium">+91 98765 43210</p>
                  <p className="text-gray-500 font-medium">+91 120 456 7890</p>
                </div>
              </div>

              {/* Card 3: Email */}
              <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100 flex items-start gap-6 hover:translate-x-2 transition-transform">
                <div className="w-14 h-14 bg-brand/10 rounded-2xl flex items-center justify-center text-brand">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="font-black text-gray-900 text-xl tracking-tight">Email Us</h4>
                  <p className="text-brand mt-1 font-bold underline decoration-brand/20">info@textileassociates.com</p>
                  <p className="text-gray-500 font-medium">support@textile.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Modern Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-10 md:p-14 rounded-[3.5rem] shadow-2xl border border-gray-50 relative overflow-hidden">
              {/* Design Element */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-brand/10 rounded-full -mr-20 -mt-20 opacity-40"></div>

              <form className="space-y-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-brand-dark uppercase tracking-[0.2em] ml-2">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full p-5 bg-slate-50 rounded-2xl border-none outline-none focus:ring-2 focus:ring-brand-dark transition-all font-medium" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-brand-dark uppercase tracking-[0.2em] ml-2">Email Address</label>
                    <input type="email" placeholder="john@example.com" className="w-full p-5 bg-slate-50 rounded-2xl border-none outline-none focus:ring-2 focus:ring-brand-dark transition-all font-medium" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-brand-dark uppercase tracking-[0.2em] ml-2">Subject</label>
                  <select className="w-full p-5 bg-slate-50 rounded-2xl border-none outline-none focus:ring-2 focus:ring-brand-dark transition-all font-medium appearance-none">
                    <option>General Inquiry</option>
                    <option>Partnership Proposal</option>
                    <option>Quality Assurance</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-brand-dark uppercase tracking-[0.2em] ml-2">Your Message</label>
                  <textarea rows="5" placeholder="Write your message here..." className="w-full p-5 bg-slate-50 rounded-2xl border-none outline-none focus:ring-2 focus:ring-brand-dark transition-all font-medium"></textarea>
                </div>

                <button className="w-full bg-brand-dark text-white font-black py-5 rounded-2xl shadow-[0_20px_40px_rgba(0,151,178,0.25)] hover:bg-slate-900 hover:-translate-y-1 transition-all uppercase tracking-[0.2em] text-sm">
                  Send Message Now
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactUs;