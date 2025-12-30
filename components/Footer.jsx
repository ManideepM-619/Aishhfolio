'use client';

export default function Footer() {
    return (
        <footer className="bg-slate-950/50 backdrop-blur-md py-8 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <p className="text-slate-500 text-sm font-medium">
                    © {new Date().getFullYear()} Sarah.Dev. Built with React & Tailwind CSS.
                </p>
            </div>
        </footer>
    );
}
