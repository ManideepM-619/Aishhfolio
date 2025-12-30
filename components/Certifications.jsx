'use client';
import { Shield, Server } from 'lucide-react';
import FadeIn from './FadeIn';
import { portfolioData } from './data';

const getIcon = (iconType) => {
    switch (iconType) {
        case 'shield-orange': return <Shield className="text-orange-400" size={32} />;
        case 'shield-red': return <Shield className="text-red-500" size={32} />;
        case 'server': return <Server className="text-yellow-400" size={32} />;
        default: return <Shield className="text-purple-400" size={32} />;
    }
};

export default function Certifications() {
    return (
        <section id="certifications" className="py-20 bg-slate-900/20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <FadeIn>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white">Certifications</h2>
                        <p className="mt-4 text-slate-400">Validated expertise in Industry Standards</p>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {portfolioData.certifications.map((cert, idx) => (
                        <FadeIn key={idx} delay={idx * 100} className="h-full">
                            <div className="relative p-8 rounded-2xl bg-slate-900/40 backdrop-blur-md border border-white/5 h-full hover:bg-slate-800/40 hover:border-purple-500/20 hover:shadow-xl hover:shadow-purple-900/10 transition-all duration-300 group overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Shield size={100} className="text-white" />
                                </div>
                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                        {getIcon(cert.iconType)}
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2 leading-tight min-h-[3rem]">{cert.name}</h3>
                                    <div className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center">
                                        <span className="text-sm font-medium text-purple-300">{cert.issuer}</span>
                                        <span className="text-xs font-mono text-slate-500 bg-slate-950/50 px-2 py-1 rounded">{cert.date}</span>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
