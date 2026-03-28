import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingActions = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([
    { id: 1, text: "Hello! Welcome to Parekh Linen. How can we help you today?", sender: 'bot' }
  ]);
  
  const chatEndRef = useRef(null);

  // Auto scroll to bottom when new message arrives
  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory, isOpen]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    // 1. Add User Message
    const userMsg = { id: Date.now(), text: message, sender: 'user' };
    setChatHistory((prev) => [...prev, userMsg]);
    setMessage("");

    // 2. Simulate Bot Reply (after 1 second)
    setTimeout(() => {
      const botReply = { 
        id: Date.now() + 1, 
        text: "Thank you for reaching out! Our team will get back to you shortly regarding your query.", 
        sender: 'bot' 
      };
      setChatHistory((prev) => [...prev, botReply]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end gap-4 z-[9999]">
      
      {/* Live Chat Window */}
      {isOpen && (
        <div className="bg-white w-72 md:w-85 rounded-2xl shadow-2xl border border-gray-100 overflow-hidden mb-2 flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-[#1A1A1A] p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white font-bold text-xs">PL</div>
              <div>
                <h3 className="text-white font-semibold text-xs">Parekh Linen Support</h3>
                <p className="text-green-400 text-[9px] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                  Online
                </p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition">
              <X size={18} />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-gray-50 h-64 overflow-y-auto flex flex-col gap-3">
            {chatHistory.map((msg) => (
              <div 
                key={msg.id} 
                className={`max-w-[80%] p-3 rounded-2xl text-xs shadow-sm ${
                  msg.sender === 'user' 
                    ? 'bg-black text-white self-end rounded-br-none' 
                    : 'bg-white text-gray-800 self-start rounded-bl-none border border-gray-100'
                }`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Chat Input Area */}
          <form onSubmit={handleSendMessage} className="p-3 bg-white border-t flex gap-2">
            <input 
              type="text" 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask about bedsheets..." 
              className="flex-1 text-xs border border-gray-200 rounded-full px-4 py-2.5 outline-none focus:border-black transition-all"
            />
            <button 
              type="submit"
              disabled={!message.trim()}
              className="bg-black p-2.5 rounded-full text-white disabled:opacity-50 hover:scale-105 transition"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}

      {/* Main Buttons */}
      <div className="flex flex-col gap-3">
        <a 
          href="https://wa.me/910000000000" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-[#25D366] w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all text-white"
        >
          <FaWhatsapp size={32} />
        </a>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`${isOpen ? 'bg-red-500' : 'bg-[#1A1A1A]'} w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all text-white`}
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={28} />}
        </button>
      </div>
    </div>
  );
};

export default FloatingActions;