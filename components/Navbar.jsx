'use client';
import { useState } from 'react';
import { PawPrint, Menu, X } from 'lucide-react';
import { navigation } from './data';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-slate-950/70 backdrop-blur-md border-b border-white/5 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <PawPrint className="text-purple-400" size={24} />
                        <span className="text-xl font-semibold tracking-tight text-white">Aishhfolio</span>
                    </div>

                    <div className="hidden lg:flex space-x-6">
                        {navigation.map((item) => (
                            <a key={item.name} href={item.href} className="text-xs font-medium uppercase tracking-wider text-slate-400 hover:text-purple-400 transition-colors duration-200">
                                {item.name}
                            </a>
                        ))}
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
                        {navigation.map((item) => (
                            <a key={item.name} href={item.href} onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-purple-400 hover:bg-white/5 rounded-md">
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
