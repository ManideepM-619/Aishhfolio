'use client';
import { Github, Linkedin, FileText } from 'lucide-react';

export default function SocialBar() {
    const links = [
        { href: "https://github.com", icon: Github, title: "GitHub", hoverClass: "hover:bg-purple-600 hover:border-purple-500 hover:shadow-purple-500/25" },
        { href: "https://www.linkedin.com/in/aishwarya-madapati/", icon: Linkedin, title: "LinkedIn", hoverClass: "hover:bg-blue-600 hover:border-blue-500 hover:shadow-blue-500/25" },
        { href: "/resume.pdf", icon: FileText, title: "Resume", hoverClass: "hover:bg-pink-600 hover:border-pink-500 hover:shadow-pink-500/25" },
    ];

    return (
        <>
            {/* Desktop - Left side vertical bar */}
            <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-4">
                {links.map(({ href, icon: Icon, title, hoverClass }) => (
                    <a key={title} href={href} target="_blank" rel="noopener noreferrer" title={title}
                        className={`w-12 h-12 rounded-xl bg-slate-900/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg group ${hoverClass}`}>
                        <Icon size={20} className="group-hover:rotate-12 transition-transform" />
                    </a>
                ))}
                <div className="w-px h-16 bg-gradient-to-b from-purple-500/50 to-transparent mx-auto mt-2"></div>
            </div>

            {/* Mobile - Bottom horizontal bar */}
            <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-slate-950/90 backdrop-blur-xl border-t border-white/10 px-4 py-3">
                <div className="flex justify-center gap-6">
                    {links.map(({ href, icon: Icon, title, hoverClass }) => (
                        <a key={title} href={href} target="_blank" rel="noopener noreferrer" title={title}
                            className={`w-12 h-12 rounded-xl bg-slate-900/80 border border-white/10 flex items-center justify-center text-slate-400 active:scale-95 transition-all ${hoverClass}`}>
                            <Icon size={22} />
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
}
