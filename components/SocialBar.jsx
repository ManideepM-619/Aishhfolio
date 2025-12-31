'use client';
import { Github, Linkedin, FileText, Mail, Phone } from 'lucide-react';

export default function SocialBar() {
    const links = [
        { href: "https://www.linkedin.com/in/aishwarya-madapati/", icon: Linkedin, title: "LinkedIn", hoverClass: "hover:bg-blue-600 hover:border-blue-500 hover:shadow-blue-500/25", mobileClass: "bg-blue-600 border-blue-500 text-white" },
        { href: "/assets/Aishwarya_Madapati_resume.pdf", icon: FileText, title: "Resume", hoverClass: "hover:bg-pink-600 hover:border-pink-500 hover:shadow-pink-500/25", mobileClass: "bg-pink-600 border-pink-500 text-white" },
        { href: "mailto:aishwaryamadapati01@gmail.com", icon: Mail, title: "Email", hoverClass: "hover:bg-red-500 hover:border-red-400 hover:shadow-red-500/25", mobileClass: "bg-red-500 border-red-400 text-white" },
        { href: "tel:+18016481315", icon: Phone, title: "Phone", hoverClass: "hover:bg-green-600 hover:border-green-500 hover:shadow-green-500/25", mobileClass: "bg-green-600 border-green-500 text-white" },
        { href: "https://github.com/Madap007/Techstore-ReactProject", icon: Github, title: "GitHub", hoverClass: "hover:bg-purple-600 hover:border-purple-500 hover:shadow-purple-500/25", mobileClass: "bg-purple-600 border-purple-500 text-white" },
    ];

    return (
        <>
            {/* Desktop - Left side vertical bar */}
            <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-4">
                {links.map(({ href, icon: Icon, title, hoverClass }) => (
                    <a key={title} href={href} target={href.startsWith('http') ? "_blank" : undefined} rel={href.startsWith('http') ? "noopener noreferrer" : undefined} title={title}
                        className={`w-12 h-12 rounded-xl bg-slate-900/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg group ${hoverClass}`}>
                        <Icon size={20} className="group-hover:rotate-12 transition-transform" />
                    </a>
                ))}
                <div className="w-px h-16 bg-gradient-to-b from-purple-500/50 to-transparent mx-auto mt-2"></div>
            </div>

            {/* Mobile - Bottom horizontal bar with active colors */}
            <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-slate-950/90 backdrop-blur-xl border-t border-white/10 px-4 py-3">
                <div className="flex justify-center gap-3">
                    {links.map(({ href, icon: Icon, title, mobileClass }) => (
                        <a key={title} href={href} target={href.startsWith('http') ? "_blank" : undefined} rel={href.startsWith('http') ? "noopener noreferrer" : undefined} title={title}
                            className={`w-12 h-12 rounded-xl border flex items-center justify-center active:scale-95 transition-all shadow-lg ${mobileClass}`}>
                            <Icon size={20} />
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
}
