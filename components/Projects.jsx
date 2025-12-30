'use client';
import { useState } from 'react';
import { ExternalLink, ChevronRight, Sparkles, Loader2, Bot, Cat, PawPrint } from 'lucide-react';
import FadeIn from './FadeIn';
import { portfolioData, callGemini } from './data';

export default function Projects() {
    const [activeProject, setActiveProject] = useState(null);
    const [projectQuestions, setProjectQuestions] = useState({});
    const [loadingProject, setLoadingProject] = useState(null);

    const generateQuestions = async (project) => {
        setLoadingProject(project.id);
        const prompt = `Based on this project: "${project.title}" (${project.summary}) which used stack: ${project.details.stack.join(', ')}. Generate 3 challenging technical interview questions. Format as numbered list.`;
        const response = await callGemini(prompt, "You are a Senior Technical Recruiter assistant.");
        setProjectQuestions(prev => ({ ...prev, [project.id]: response }));
        setLoadingProject(null);
    };

    return (
        <section id="projects" className="py-20 relative overflow-hidden">
            <div className="absolute top-20 left-10 pointer-events-none opacity-5">
                <FadeIn delay={300}><Cat size={56} /></FadeIn>
            </div>
            <div className="absolute bottom-10 right-20 pointer-events-none opacity-5">
                <FadeIn delay={500}><PawPrint size={48} className="rotate-12" /></FadeIn>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <FadeIn>
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                        <div>
                            <h2 className="text-sm font-bold tracking-widest text-purple-400 uppercase mb-2">Portfolio</h2>
                            <h3 className="text-3xl font-bold text-white">Projects</h3>
                        </div>
                        <div className="mt-4 md:mt-0">
                            <a href="#" className="text-sm font-medium text-slate-400 hover:text-purple-400 flex items-center gap-1">
                                View all on GitHub <ExternalLink size={14} />
                            </a>
                        </div>
                    </div>
                </FadeIn>

                <div className="space-y-6">
                    {portfolioData.projects.map((project, idx) => (
                        <FadeIn key={project.id} delay={idx * 100}>
                            <div className={`group bg-slate-900/40 backdrop-blur-md rounded-2xl border transition-all duration-300 overflow-hidden ${activeProject === project.id ? 'border-purple-500/30 shadow-xl shadow-purple-900/10 bg-slate-900/60' : 'border-white/5 hover:border-purple-500/20 hover:bg-slate-800/40'}`}>
                                <div className="p-6 md:p-8 cursor-pointer" onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}>
                                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">{project.category}</span>
                                            </div>
                                            <h4 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">{project.title}</h4>
                                            <p className="text-slate-400">{project.summary}</p>
                                        </div>
                                        <div className="flex items-center text-slate-500 md:self-center group-hover:text-purple-400 transition-colors">
                                            <span className="text-sm font-medium mr-2">{activeProject === project.id ? 'Close Details' : 'Read Case Study'}</span>
                                            <ChevronRight className={activeProject === project.id ? 'rotate-90' : ''} />
                                        </div>
                                    </div>

                                    <div className={`grid transition-all duration-500 ease-in-out ${activeProject === project.id ? 'grid-rows-[1fr] opacity-100 mt-8 pt-8 border-t border-white/5' : 'grid-rows-[0fr] opacity-0 h-0 overflow-hidden'}`}>
                                        <div className="overflow-hidden">
                                            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                                                <div className="space-y-6">
                                                    <div>
                                                        <h5 className="font-bold text-white mb-2 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-400"></span> Problem</h5>
                                                        <p className="text-sm text-slate-300 leading-relaxed">{project.details.problem}</p>
                                                    </div>
                                                    <div>
                                                        <h5 className="font-bold text-white mb-2 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green-400"></span> Approach</h5>
                                                        <p className="text-sm text-slate-300 leading-relaxed">{project.details.approach}</p>
                                                    </div>
                                                </div>
                                                <div className="space-y-6">
                                                    <div>
                                                        <h5 className="font-bold text-white mb-2">Tech Stack</h5>
                                                        <div className="flex flex-wrap gap-2">
                                                            {project.details.stack.map(tech => (
                                                                <span key={tech} className="px-2.5 py-1 text-xs font-medium bg-white/5 text-slate-300 rounded-md border border-white/10">{tech}</span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h5 className="font-bold text-white mb-2">Key Outcomes</h5>
                                                        <div className="p-4 bg-purple-900/20 rounded-lg border border-purple-500/20">
                                                            <p className="text-sm text-purple-200 font-medium">{project.details.impact}</p>
                                                        </div>
                                                        <div className="mt-6 pt-4 border-t border-dashed border-white/10">
                                                            {!projectQuestions[project.id] && (
                                                                <button onClick={(e) => { e.stopPropagation(); generateQuestions(project); }} className="flex items-center gap-2 text-sm font-semibold text-purple-300 hover:text-purple-200 bg-purple-500/10 hover:bg-purple-500/20 px-4 py-2 rounded-lg transition-colors w-full md:w-auto justify-center border border-purple-500/10" disabled={loadingProject === project.id}>
                                                                    {loadingProject === project.id ? <Loader2 className="animate-spin" size={16} /> : <Sparkles size={16} />}
                                                                    Generate Interview Questions
                                                                </button>
                                                            )}
                                                            {projectQuestions[project.id] && (
                                                                <div className="bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-purple-500/20">
                                                                    <h6 className="text-xs font-bold uppercase tracking-wider text-purple-300 mb-2 flex items-center gap-2"><Bot size={14} /> AI Suggested Questions</h6>
                                                                    <div className="text-sm text-slate-300 whitespace-pre-wrap font-medium">{projectQuestions[project.id]}</div>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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
