import React from 'react';
import { MessageCircle, Send } from 'lucide-react';

const FloatingActions = () => {
  return (
    <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-[9999]">
      {/* WhatsApp */}
      <a href="https://wa.me/910000000000" target="_blank" rel="noopener noreferrer" className="bg-green-500 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition cursor-pointer">
        <Send size={24} className="text-white" />
      </a>
      {/* Live Chat */}
      <div className="bg-brand-dark w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition cursor-pointer">
        <MessageCircle size={24} className="text-white" />
      </div>
    </div>
  );
};

export default FloatingActions;