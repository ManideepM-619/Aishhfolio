'use client';
import { useState } from 'react';
import { MessageSquare, X, Bot, Send } from 'lucide-react';
import { portfolioData, callGemini } from './data';

export default function ChatWidget() {
    const [chatOpen, setChatOpen] = useState(false);
    const [chatMessages, setChatMessages] = useState([
        { role: 'assistant', text: "Hi! I'm Sarah's AI Assistant. Ask me anything about her skills, projects, or experience." }
    ]);
    const [chatInput, setChatInput] = useState("");
    const [isChatLoading, setIsChatLoading] = useState(false);

    const handleChatSubmit = async (e) => {
        e.preventDefault();
        if (!chatInput.trim()) return;

        const userMsg = chatInput;
        setChatMessages(prev => [...prev, { role: 'user', text: userMsg }]);
        setChatInput("");
        setIsChatLoading(true);

        const systemPrompt = `You are an AI Assistant for Sarah's portfolio website. Your goal is to represent Sarah professionally to recruiters. Use the following JSON context about Sarah to answer questions: ${JSON.stringify(portfolioData)}. Keep answers concise (under 50 words), professional, and confident. If the answer isn't in the context, suggest they contact her directly.`;
        const response = await callGemini(userMsg, systemPrompt);

        setChatMessages(prev => [...prev, { role: 'assistant', text: response }]);
        setIsChatLoading(false);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {!chatOpen && (
                <button onClick={() => setChatOpen(true)} className="w-14 h-14 bg-purple-600 text-white rounded-full shadow-2xl hover:bg-purple-500 transition-colors flex items-center justify-center animate-bounce">
                    <MessageSquare size={24} />
                </button>
            )}

            {chatOpen && (
                <div className="w-80 sm:w-96 bg-slate-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 overflow-hidden flex flex-col h-[500px] animate-in">
                    <div className="p-4 bg-slate-950 border-b border-white/10 text-white flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <Bot size={20} className="text-purple-400" />
                            <span className="font-semibold">Ask Sarah's AI</span>
                        </div>
                        <button onClick={() => setChatOpen(false)} className="text-slate-400 hover:text-white">
                            <X size={20} />
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-transparent">
                        {chatMessages.map((msg, i) => (
                            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${msg.role === 'user' ? 'bg-purple-600 text-white rounded-tr-none' : 'bg-slate-800 text-slate-200 shadow-sm border border-white/5 rounded-tl-none'}`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        {isChatLoading && (
                            <div className="flex justify-start">
                                <div className="bg-slate-800 px-4 py-3 rounded-2xl rounded-tl-none shadow-sm border border-white/5">
                                    <div className="flex space-x-1">
                                        <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                                        <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                                        <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <form onSubmit={handleChatSubmit} className="p-3 bg-slate-950/50 border-t border-white/10">
                        <div className="relative">
                            <input type="text" value={chatInput} onChange={(e) => setChatInput(e.target.value)} placeholder="Ask about my skills..." className="w-full pl-4 pr-12 py-3 rounded-xl bg-slate-900 border border-white/5 focus:ring-2 focus:ring-purple-500/50 outline-none text-sm shadow-sm text-white placeholder-slate-500" />
                            <button type="submit" disabled={isChatLoading || !chatInput.trim()} className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-purple-600 text-white rounded-lg hover:bg-purple-500 disabled:opacity-50 transition-colors">
                                <Send size={16} />
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}
