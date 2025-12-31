'use client';
import { useState, useEffect } from 'react';
import { Shield, Menu, X, Cat } from 'lucide-react';
import { navigation } from './data';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    // Scroll spy effect
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -70% 0px',
            threshold: 0
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        navigation.forEach((item) => {
            const sectionId = item.href.replace('#', '');
            const element = document.getElementById(sectionId);
            if (element) {
                observer.observe(element);
            }
        });

        return () => observer.disconnect();
    }, []);

    // Inline keyframes style
    const kittenJumpStyle = {
        animation: 'kittenJump 0.8s ease-in-out infinite'
    };

    return (
        <>
            {/* Global keyframes */}
            <style jsx global>{`
                @keyframes kittenJump {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    25% { transform: translateY(-6px) rotate(-8deg); }
                    50% { transform: translateY(-10px) rotate(0deg); }
                    75% { transform: translateY(-6px) rotate(8deg); }
                }
            `}</style>

            <nav className="fixed w-full z-50 bg-slate-950/70 backdrop-blur-md border-b border-white/5 transition-all duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <div className="flex-shrink-0 flex items-center gap-2">
                            <Shield className="text-purple-400" size={24} />
                            <span className="text-xl font-semibold tracking-tight text-white">Aishwarya</span>
                        </div>

                        <div className="hidden lg:flex space-x-6">
                            {navigation.map((item) => {
                                const sectionId = item.href.replace('#', '');
                                const isActive = activeSection === sectionId;
                                return (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className={`text-xs font-medium uppercase tracking-wider transition-colors duration-200 relative flex flex-col items-center pt-6 ${isActive
                                                ? 'text-purple-400'
                                                : 'text-slate-400 hover:text-purple-400'
                                            }`}
                                    >
                                        {/* Jumping Kitten */}
                                        {isActive && (
                                            <span
                                                className="absolute -top-1"
                                                style={kittenJumpStyle}
                                            >
                                                <Cat size={16} className="text-pink-400" />
                                            </span>
                                        )}
                                        {item.name}
                                    </a>
                                );
                            })}
                        </div>

                        <div className="lg:hidden">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-400 hover:text-white focus:outline-none">
                                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {isMenuOpen && (
                    <div className="lg:hidden bg-slate-900/95 border-b border-white/5 backdrop-blur-md">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navigation.map((item) => {
                                const sectionId = item.href.replace('#', '');
                                const isActive = activeSection === sectionId;
                                return (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={`flex items-center gap-2 px-3 py-2 text-base font-medium rounded-md transition-colors ${isActive
                                                ? 'text-purple-400 bg-purple-500/10'
                                                : 'text-slate-300 hover:text-purple-400 hover:bg-white/5'
                                            }`}
                                    >
                                        {isActive && (
                                            <span style={kittenJumpStyle}>
                                                <Cat size={16} className="text-pink-400" />
                                            </span>
                                        )}
                                        {item.name}
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
}
