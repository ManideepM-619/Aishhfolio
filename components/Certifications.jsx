'use client';
import { useState, useRef } from 'react';
import { Shield, Server, Award, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';
import FadeIn from './FadeIn';
import { portfolioData } from './data';

const getIcon = (iconType) => {
    switch (iconType) {
        case 'shield-orange': return <Shield className="text-orange-400" size={22} />;
        case 'shield-red': return <Shield className="text-red-500" size={22} />;
        case 'shield-blue': return <Shield className="text-blue-400" size={22} />;
        case 'server': return <Server className="text-yellow-400" size={22} />;
        case 'award': return <Award className="text-pink-400" size={22} />;
        case 'book': return <BookOpen className="text-green-400" size={22} />;
        default: return <Shield className="text-purple-400" size={22} />;
    }
};

// Split certifications into two rows
const getRows = (certs) => {
    const mid = Math.ceil(certs.length / 2);
    return [certs.slice(0, mid), certs.slice(mid)];
};

// Custom hook for draggable scroll
const useDraggableScroll = () => {
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e, ref) => {
        setIsDragging(true);
        setStartX(e.pageX - ref.current.offsetLeft);
        setScrollLeft(ref.current.scrollLeft);
        ref.current.style.cursor = 'grabbing';
    };

    const handleMouseUp = (ref) => {
        setIsDragging(false);
        if (ref.current) ref.current.style.cursor = 'grab';
    };

    const handleMouseMove = (e, ref) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - ref.current.offsetLeft;
        const walk = (x - startX) * 1.5;
        ref.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseLeave = (ref) => {
        setIsDragging(false);
        if (ref.current) ref.current.style.cursor = 'grab';
    };

    return { handleMouseDown, handleMouseUp, handleMouseMove, handleMouseLeave };
};

export default function Certifications() {
    const rows = getRows(portfolioData.certifications);
    const containerRefs = [useRef(null), useRef(null)];
    const dragStates = [useDraggableScroll(), useDraggableScroll()];

    const scroll = (rowIndex, direction) => {
        const container = containerRefs[rowIndex].current;
        if (container) {
            const scrollAmount = 280;
            const newPosition = direction === 'next'
                ? container.scrollLeft + scrollAmount
                : container.scrollLeft - scrollAmount;
            container.scrollTo({ left: newPosition, behavior: 'smooth' });
        }
    };

    return (
        <section id="certifications" className="py-20 bg-slate-900/20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <FadeIn>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white">Courses & Certifications</h2>
                        <p className="mt-4 text-slate-400">Continuous learning & professional development</p>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Image Side */}
                    <FadeIn delay={100} className="lg:col-span-4">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-pink-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50"></div>
                            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-900/20 aspect-[3/4]">
                                <img
                                    src="/assets/data-kitten.png"
                                    alt="Learning & Growth"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
                                <div className="absolute bottom-4 left-4 right-4">
                                    <p className="text-white font-bold text-lg">Pro-active Learning</p>
                                    <p className="text-slate-300 text-sm">8 certifications & counting</p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Carousels Side */}
                    <div className="lg:col-span-8 space-y-5">
                        {rows.map((row, rowIndex) => (
                            <FadeIn key={rowIndex} delay={200 + rowIndex * 100}>
                                <div className="relative group">
                                    <button
                                        onClick={() => scroll(rowIndex, 'prev')}
                                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-20 w-8 h-8 rounded-full bg-slate-900/90 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-600/20 transition-all shadow-lg"
                                    >
                                        <ChevronLeft size={18} />
                                    </button>
                                    <button
                                        onClick={() => scroll(rowIndex, 'next')}
                                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-20 w-8 h-8 rounded-full bg-slate-900/90 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-600/20 transition-all shadow-lg"
                                    >
                                        <ChevronRight size={18} />
                                    </button>

                                    <div
                                        ref={containerRefs[rowIndex]}
                                        className="flex gap-4 overflow-x-auto px-1 py-2 cursor-grab select-none"
                                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                                        onMouseDown={(e) => dragStates[rowIndex].handleMouseDown(e, containerRefs[rowIndex])}
                                        onMouseUp={() => dragStates[rowIndex].handleMouseUp(containerRefs[rowIndex])}
                                        onMouseMove={(e) => dragStates[rowIndex].handleMouseMove(e, containerRefs[rowIndex])}
                                        onMouseLeave={() => dragStates[rowIndex].handleMouseLeave(containerRefs[rowIndex])}
                                    >
                                        {row.map((cert, idx) => (
                                            <div key={idx} className="flex-shrink-0 w-64">
                                                <div className="p-4 rounded-xl bg-slate-900/60 backdrop-blur-md border border-white/5 hover:bg-slate-800/60 hover:border-purple-500/30 transition-all duration-300 group/card h-full pointer-events-none">
                                                    <div className="flex items-start gap-3">
                                                        <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                                                            {getIcon(cert.iconType)}
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <h3 className="text-sm font-bold text-white leading-tight mb-1 line-clamp-2">{cert.name}</h3>
                                                            <p className="text-xs text-purple-300">{cert.issuer}</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-end mt-3">
                                                        <span className="text-xs font-mono text-slate-500 bg-slate-950/50 px-2 py-0.5 rounded">{cert.date}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
