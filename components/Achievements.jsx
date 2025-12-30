'use client';
import { Trophy, Award, Star } from 'lucide-react';
import FadeIn from './FadeIn';
import { portfolioData } from './data';

const getIcon = (iconType) => {
    switch (iconType) {
        case 'trophy': return <Trophy size={28} className="text-yellow-400" />;
        case 'award': return <Award size={28} className="text-purple-400" />;
        case 'star': return <Star size={28} className="text-pink-400" />;
        default: return <Award size={28} className="text-purple-400" />;
    }
};

export default function Achievements() {
    return (
        <section id="achievements" className="py-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <FadeIn>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white">Honors & Achievements</h2>
                        <p className="mt-4 text-slate-400">Recognition for Technical Excellence and Innovation</p>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {portfolioData.achievements.map((item, idx) => (
                        <FadeIn key={idx} delay={idx * 100} className="h-full">
                            <div className="relative group p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-purple-500/30 transition-all duration-500 h-full">
                                <div className="relative p-8 rounded-xl bg-slate-900/80 backdrop-blur-xl border border-white/5 h-full flex flex-col items-start hover:bg-slate-900/60 transition-colors">
                                    <div className="w-14 h-14 rounded-full bg-slate-800/50 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-slate-800 transition-all shadow-lg shadow-purple-900/10">
                                        {getIcon(item.iconType)}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">{item.title}</h3>
                                    <div className="flex items-center gap-2 mb-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                                        <span>{item.org}</span>
                                        <span className="w-1 h-1 rounded-full bg-slate-600"></span>
                                        <span className="text-purple-400">{item.date}</span>
                                    </div>
                                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                                    <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
