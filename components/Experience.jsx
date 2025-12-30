'use client';
import FadeIn from './FadeIn';
import { portfolioData } from './data';

export default function Experience() {
    return (
        <section id="experience" className="py-20 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <FadeIn>
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Professional Background</h2>
                </FadeIn>

                <div className="relative border-l border-white/10 ml-4 md:ml-6 space-y-12">
                    {portfolioData.experience.map((job, idx) => (
                        <FadeIn key={idx} delay={idx * 100}>
                            <div className="relative pl-8 md:pl-12">
                                <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-slate-900 border-2 border-purple-500 ring-4 ring-purple-900/50"></div>
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                    <h3 className="text-lg font-bold text-white">{job.role}</h3>
                                    <span className="text-sm font-medium text-purple-300 bg-purple-500/10 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0 border border-purple-500/20">
                                        {job.period}
                                    </span>
                                </div>
                                <h4 className="text-base font-medium text-slate-400 mb-3">{job.company}</h4>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
