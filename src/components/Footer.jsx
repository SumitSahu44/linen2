import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Company Bio */}
        <div className="col-span-1 md:col-span-1">
          <h2 className="text-2xl font-black mb-6 tracking-tighter">PAREKH LINEN</h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Pioneering the textile industry in Kolkata. Quality manufacturing for global hospitality and retail brands.
          </p>
          <div className="flex gap-4">
            {/* Social Icons Placeholders */}
            <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-brand cursor-pointer">FB</div>
            <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-brand cursor-pointer">IN</div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-6">Explore</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer transition">About Our Management</li>
            <li className="hover:text-white cursor-pointer transition">Product Photo Gallery</li>
            <li className="hover:text-white cursor-pointer transition">Textile Associates</li>
            <li className="hover:text-white cursor-pointer transition">Circulars & Blogs</li>
          </ul>
        </div>

        {/* Trade Enquiry Section */}
        <div>
          <h3 className="font-bold text-lg mb-6">Business</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer transition">Request e-Quotation</li>
            <li className="hover:text-white cursor-pointer transition">Tender & Contracts</li>
            <li className="hover:text-white cursor-pointer transition">Appointment </li>
            <li className="hover:text-white cursor-pointer transition">Career Opportunities</li>
          </ul>
        </div>

        {/* Google Map Integration */}
        <div>
          <h3 className="font-bold text-lg mb-6">Visit Our Factory</h3>
          <div className="rounded-xl overflow-hidden grayscale hover:grayscale-0 transition duration-500 shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235850.31326463993!2d88.2046420313904!3d22.535406000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1714000000000"
              width="100%" height="150" style={{ border: 0 }} allowFullScreen="" loading="lazy">
            </iframe>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 mt-16 pt-8 text-center text-gray-500 text-xs">
        © 2026 PAREKH LINEN. Designed for Global Textile Excellence. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;