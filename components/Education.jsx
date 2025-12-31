'use client';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import FadeIn from './FadeIn';
import { portfolioData } from './data';

const getIcon = (type) => {
    switch (type) {
        case 'graduate': return <GraduationCap className="text-purple-400" size={28} />;
        case 'certificate': return <Award className="text-pink-400" size={28} />;
        case 'undergraduate': return <BookOpen className="text-indigo-400" size={28} />;
        default: return <GraduationCap className="text-purple-400" size={28} />;
    }
};

export default function Education() {
    return (
        <section id="education" className="py-20 bg-slate-900/20 relative overflow-hidden">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <FadeIn>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white">Education</h2>
                        <p className="mt-4 text-slate-400">Academic Background & Credentials</p>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {portfolioData.education.map((edu, idx) => (
                        <FadeIn key={idx} delay={idx * 100} className="h-full">
                            <div className="relative p-6 rounded-2xl bg-slate-900/40 backdrop-blur-md border border-white/5 h-full hover:bg-slate-800/40 hover:border-purple-500/20 hover:shadow-xl hover:shadow-purple-900/10 transition-all duration-300 group">
                                <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 shadow-sm group-hover:scale-110 transition-transform">
                                    {getIcon(edu.type)}
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2 leading-tight">{edu.degree}</h3>
                                <p className="text-purple-300 font-medium text-sm mb-1">{edu.institution}</p>
                                <p className="text-slate-500 text-sm mb-3">{edu.location}</p>
                                <div className="mt-auto pt-3 border-t border-white/5">
                                    <span className="text-xs font-mono text-slate-400 bg-slate-950/50 px-2 py-1 rounded">{edu.period}</span>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
