
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const AIConcierge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([
    { role: 'bot', text: 'أهلاً بك في Lavie Boat. كيف يمكنني مساعدتكم اليوم بخصوص تجربتكم النخبوية؟' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `You are a very formal and high-end concierge for "Lavie Boat" in Beni Suef, Egypt. 
        Context:
        - We are a private elite floating boat on the Nile.
        - We do NOT accept walk-ins. Pre-booking only.
        - 3 floors: 1st (Cafe/Resto), 2nd (Events/Corporate), 3rd (Open Air).
        - Ramadan: Special Corporate Iftars only for banks, judges, and executives.
        - Vibe: Luxury, quiet, privacy, exclusive.
        User asks: ${userMsg}
        Answer in Arabic (Formal Egyptian or MSA) strictly adhering to our elite branding. No slang.`,
      });

      const botText = response.text || "عذراً، حدث خطأ تقني. يرجى المحاولة لاحقاً.";
      setMessages(prev => [...prev, { role: 'bot', text: botText }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'bot', text: 'نعتذر، نظام الذكاء الاصطناعي مشغول حالياً. يمكنك التواصل معنا عبر الواتساب.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-slate-900 text-white rounded-full shadow-2xl flex items-center justify-center text-3xl z-50 hover:scale-110 transition-all border border-slate-700"
      >
        🤵
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 md:w-96 bg-white rounded-3xl shadow-2xl z-50 flex flex-col overflow-hidden border border-slate-100">
          <div className="bg-slate-900 p-6 text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="luxury-font text-xl">AI Concierge</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white">✕</button>
          </div>
          
          <div className="h-96 overflow-y-auto p-6 space-y-4 bg-slate-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[80%] p-4 rounded-2xl text-sm ${m.role === 'user' ? 'bg-amber-600 text-white rounded-br-none' : 'bg-white shadow-sm text-slate-700 border rounded-bl-none'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-end">
                <div className="bg-white shadow-sm text-slate-400 p-3 rounded-2xl text-xs animate-pulse">جاري صياغة الرد...</div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          <div className="p-4 bg-white border-t flex gap-2">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="اكتب استفسارك هنا..."
              className="flex-grow bg-slate-100 border-none rounded-xl px-4 py-3 text-sm focus:ring-1 focus:ring-amber-500"
            />
            <button 
              onClick={handleSend}
              className="bg-slate-900 text-white px-4 rounded-xl hover:bg-slate-800"
            >
              ➔
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AIConcierge;
