'use client';

export default function TechStackBanner() {
    const techs = ['ForgeRock', 'PingIdentity', 'Python', 'OAuth 2.0', 'OpenID Connect', 'Docker'];

    return (
        <div className="border-y border-white/5 bg-white/[0.02] backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-wrap justify-center gap-8 lg:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    {techs.map((tech) => (
                        <span key={tech} className="text-lg font-semibold text-slate-400 hover:text-purple-400 cursor-default transition-colors">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
