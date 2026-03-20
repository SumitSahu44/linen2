import React from 'react';

const FloatingActions = () => {
  return (
    <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-[9999]">
      {/* WhatsApp */}
      <a href="https://wa.me/910000000000" target="_blank" className="bg-green-500 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition cursor-pointer">
        <span className="text-white text-3xl">W</span> {/* Replace with SVG Icon */}
      </a>
      {/* Live Chat */}
      <div className="bg-blue-900 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition cursor-pointer">
        <span className="text-white text-xl">💬</span>
      </div>
    </div>
  );
};

export default FloatingActions;