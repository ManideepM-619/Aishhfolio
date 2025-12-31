'use client';
import { FileText, ExternalLink } from 'lucide-react';
import FadeIn from './FadeIn';
import { portfolioData } from './data';

export default function Publication() {
    const { publication } = portfolioData;

    return (
        <section id="publication" className="py-20 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <FadeIn>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white">Publication</h2>
                        <p className="mt-4 text-slate-400">Research contribution to the scientific community</p>
                    </div>
                </FadeIn>

                <FadeIn delay={100}>
                    <div className="relative p-8 rounded-2xl bg-gradient-to-br from-slate-900/60 to-slate-900/40 backdrop-blur-md border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group shadow-lg shadow-purple-900/10">
                        <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                            <FileText size={80} className="text-purple-400" />
                        </div>

                        <div className="relative z-10">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="w-14 h-14 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                    <FileText className="text-purple-400" size={28} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors leading-tight">
                                        {publication.title}
                                    </h3>
                                    <p className="text-sm text-slate-500 mt-1">Published Research Paper</p>
                                </div>
                            </div>

                            <p className="text-slate-400 leading-relaxed mb-6">
                                {publication.description}
                            </p>

                            <a
                                href={publication.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-purple-600/20 text-purple-300 font-medium hover:bg-purple-600/30 hover:text-purple-200 transition-all border border-purple-500/20 group-hover:border-purple-500/40"
                            >
                                <ExternalLink size={16} />
                                View Publication
                            </a>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
