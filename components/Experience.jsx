'use client';
import { Briefcase, CheckCircle2 } from 'lucide-react';
import FadeIn from './FadeIn';
import { portfolioData } from './data';

export default function Experience() {
    return (
        <section id="experience" className="py-20 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <FadeIn>
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Professional Experience</h2>
                </FadeIn>

                <div className="relative border-l-2 border-purple-500/30 ml-4 md:ml-6 space-y-10">
                    {portfolioData.experience.map((job, idx) => (
                        <FadeIn key={idx} delay={idx * 100}>
                            <div className="relative pl-8 md:pl-12">
                                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-purple-500 border-4 border-slate-950 shadow-lg shadow-purple-900/50"></div>

                                <div className="p-6 rounded-xl bg-slate-900/40 backdrop-blur-md border border-white/5 hover:bg-slate-800/40 hover:border-purple-500/20 transition-all duration-300 group">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                                        <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">{job.role}</h3>
                                        <span className="text-sm font-medium text-purple-300 bg-purple-500/10 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0 border border-purple-500/20">
                                            {job.period}
                                        </span>
                                    </div>
                                    <h4 className="text-base font-medium text-slate-400 mb-4 flex items-center gap-2">
                                        <Briefcase size={16} className="text-purple-500" />
                                        {job.company}
                                    </h4>

                                    {job.highlights && (
                                        <ul className="space-y-2 mt-4">
                                            {job.highlights.map((highlight, hIdx) => (
                                                <li key={hIdx} className="flex items-start gap-2 text-sm text-slate-400">
                                                    <CheckCircle2 size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                                                    {highlight}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
