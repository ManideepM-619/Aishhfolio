'use client';
import { useState, useEffect } from 'react';
import { Shield, Menu, X, Cat } from 'lucide-react';
import { navigation } from './data';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [titleIndex, setTitleIndex] = useState(0);
    const titles = ['Aishwarya', 'Portfolio'];

    // Title transition effect
    useEffect(() => {
        const interval = setInterval(() => {
            setTitleIndex((prev) => (prev + 1) % titles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

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
                @keyframes glitch {
                    0%, 100% { 
                        transform: translate(0); 
                        text-shadow: none;
                    }
                    10% { 
                        transform: translate(-2px, 1px); 
                        text-shadow: 2px 0 #ff00ff, -2px 0 #00ffff;
                    }
                    20% { 
                        transform: translate(2px, -1px); 
                        text-shadow: -2px 0 #ff00ff, 2px 0 #00ffff;
                    }
                    30% { 
                        transform: translate(0); 
                        text-shadow: none;
                    }
                    40% { 
                        transform: translate(1px, 2px) skewX(-2deg); 
                        text-shadow: 3px 0 #ff00ff, -3px 0 #00ffff;
                    }
                    50% { 
                        transform: translate(-1px, -1px) skewX(1deg); 
                        text-shadow: -1px 0 #ff00ff, 1px 0 #00ffff;
                    }
                    60% { 
                        transform: translate(0); 
                        text-shadow: none;
                    }
                    70% { 
                        transform: translate(2px, 1px); 
                        text-shadow: 2px 0 #ff00ff, -2px 0 #00ffff;
                        clip-path: inset(40% 0 30% 0);
                    }
                    80% { 
                        transform: translate(-2px, -2px); 
                        text-shadow: -2px 0 #ff00ff, 2px 0 #00ffff;
                        clip-path: inset(10% 0 60% 0);
                    }
                    90% { 
                        transform: translate(0); 
                        text-shadow: none;
                        clip-path: none;
                    }
                }
                .glitch-text {
                    position: relative;
                    animation: glitch 0.8s ease-in-out forwards;
                }
            `}</style>

            <nav className="fixed w-full z-50 bg-slate-950/70 backdrop-blur-md border-b border-white/5 transition-all duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <div className="flex-shrink-0 flex items-center gap-2">
                            <Shield className="text-purple-400" size={24} />
                            <span
                                key={titleIndex}
                                className="glitch-text text-xl font-bold tracking-tight text-transparent bg-clip-text"
                                style={{
                                    backgroundImage: 'linear-gradient(90deg, #c084fc, #f472b6, #c084fc)',
                                    backgroundSize: '100% auto'
                                }}
                            >
                                {titles[titleIndex]}
                            </span>
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
