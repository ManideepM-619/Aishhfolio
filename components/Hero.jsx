'use client';
import { Download, Shield, Cat } from 'lucide-react';
import FadeIn from './FadeIn';

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-purple-600 rounded-full blur-[100px] opacity-20 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-indigo-600 rounded-full blur-[100px] opacity-20"></div>

            {/* Pet Icon */}
            <div className="absolute top-1/3 left-10 pointer-events-none opacity-5 animate-bounce">
                <Cat size={48} />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
                    <div className="lg:col-span-7 text-center lg:text-left">
                        <FadeIn>
                            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 shadow-sm mb-6 backdrop-blur-sm">
                                <span className="flex h-2 w-2 rounded-full bg-purple-400 mr-2 shadow-[0_0_8px_rgba(192,132,252,0.6)]"></span>
                                <span className="text-xs font-medium uppercase tracking-wide text-slate-300">
                                    Student @ Illinois State University | Aspiring Software Engineer
                                </span>
                            </div>

                            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
                                Naku <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Udhyogam</span>,<br />
                                Kavali ra Babu.
                            </h1>

                            <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                                Cyber Security student at <strong className="text-purple-300">Illinois State University, Springfield Chicago</strong>.
                                Passionate about building secure, scalable software solutions with Python and modern web technologies.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <a href="#projects" className="px-8 py-3.5 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-500 transition-all shadow-lg shadow-purple-900/30">
                                    View Portfolio
                                </a>
                                <button className="px-8 py-3.5 rounded-lg bg-white/5 text-slate-200 border border-white/10 font-medium hover:bg-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-sm">
                                    <Download size={18} />
                                    Download Resume
                                </button>
                            </div>
                        </FadeIn>
                    </div>

                    <div className="lg:col-span-5 mt-12 lg:mt-0 relative">
                        <FadeIn delay={200}>
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-purple-900/20 aspect-[4/5] max-w-md mx-auto ring-4 ring-white/5 bg-slate-900">
                                <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/40 to-transparent z-10 mix-blend-overlay"></div>
                                <img
                                    src="/assets/image.png"
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -left-6 bg-slate-900/90 backdrop-blur-md p-4 rounded-xl shadow-xl border border-white/10 z-20 hidden sm:block">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-green-500/10 rounded-lg">
                                        <Shield className="text-green-400" size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400 uppercase font-bold">Security Status</p>
                                        <p className="text-sm font-semibold text-white">100% Compliant</p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
}
