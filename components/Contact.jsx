'use client';
import { useState } from 'react';
import { Sparkles, Loader2 } from 'lucide-react';
import FadeIn from './FadeIn';
import { callGemini } from './data';

export default function Contact() {
    const [recruiterName, setRecruiterName] = useState("");
    const [contactMessage, setContactMessage] = useState("");
    const [contactDraftLoading, setContactDraftLoading] = useState(false);

    const draftMessage = async () => {
        if (!recruiterName.trim()) {
            alert("Please enter a Company Name to draft a message.");
            return;
        }
        setContactDraftLoading(true);
        const prompt = `Write a short, professional recruiting outreach email to Aishwarya from a recruiter at "${recruiterName}". Mention her experience with IAM, PingFederate, cybersecurity, and Python. Keep it under 100 words. Polite and exciting tone.`;
        const response = await callGemini(prompt);
        setContactMessage(response);
        setContactDraftLoading(false);
    };

    return (
        <section id="contact" className="py-20 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-indigo-500/10 blur-3xl rounded-full pointer-events-none"></div>

            <div className="max-w-xl mx-auto px-4 relative z-10">
                <FadeIn>
                    <div className="bg-slate-900/60 backdrop-blur-xl rounded-2xl shadow-xl shadow-purple-900/10 p-8 md:p-12 border border-white/10">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-bold text-white mb-2">Let's Connect</h2>
                            <p className="text-slate-400">Open to Software Engineering & IAM roles.</p>
                        </div>

                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-1">Company Name</label>
                                <input type="text" id="company" value={recruiterName} onChange={(e) => setRecruiterName(e.target.value)} className="w-full px-4 py-3 rounded-lg bg-slate-950/50 border border-white/10 focus:bg-slate-950 focus:border-purple-500 focus:ring-2 focus:ring-purple-900/50 outline-none transition-all text-white placeholder-slate-600" placeholder="e.g. Acme Corp" />
                            </div>
                            <div>
                                <div className="flex justify-between items-center mb-1">
                                    <label htmlFor="message" className="block text-sm font-medium text-slate-300">Message</label>
                                    <button type="button" onClick={draftMessage} className="text-xs font-semibold text-purple-400 hover:text-purple-300 flex items-center gap-1 bg-purple-500/10 px-2 py-1 rounded hover:bg-purple-500/20 transition-colors border border-purple-500/10" disabled={contactDraftLoading}>
                                        {contactDraftLoading ? <Loader2 size={12} className="animate-spin" /> : <Sparkles size={12} />}
                                        Draft Message
                                    </button>
                                </div>
                                <textarea id="message" rows="5" value={contactMessage} onChange={(e) => setContactMessage(e.target.value)} className="w-full px-4 py-3 rounded-lg bg-slate-950/50 border border-white/10 focus:bg-slate-950 focus:border-purple-500 focus:ring-2 focus:ring-purple-900/50 outline-none transition-all resize-none text-white placeholder-slate-600" placeholder="Hi Aishwarya, I'd love to discuss a role at..."></textarea>
                            </div>
                            <button type="submit" className="w-full py-3.5 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-500 transition-all shadow-lg hover:shadow-purple-900/50 hover:-translate-y-0.5">
                                Send Message
                            </button>
                        </form>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
