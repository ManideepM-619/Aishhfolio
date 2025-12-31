'use client';

export default function TechStackBanner() {
    const techs = ['ForgeRock', 'PingIdentity', 'Python', 'OAuth 2.0', 'OpenID Connect', 'Docker'];

    return (
        <div className="border-y border-white/5 bg-white/[0.02] backdrop-blur-sm overflow-hidden">
            <style jsx>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .marquee {
                    animation: scroll 15s linear infinite;
                }
            `}</style>

            {/* Desktop: Static layout */}
            <div className="hidden md:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-wrap justify-center gap-8 lg:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    {techs.map((tech) => (
                        <span key={tech} className="text-lg font-semibold text-slate-400 hover:text-purple-400 cursor-default transition-colors">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            {/* Mobile: Scrolling marquee */}
            <div className="md:hidden py-6">
                <div className="marquee flex gap-8 whitespace-nowrap opacity-60">
                    {/* Duplicate the content for seamless loop */}
                    {[...techs, ...techs].map((tech, idx) => (
                        <span key={idx} className="text-base font-semibold text-slate-400 px-4">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
