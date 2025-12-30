'use client';
import FadeIn from './FadeIn';

export default function About() {
    return (
        <section id="about" className="py-20 bg-slate-900/30 relative overflow-hidden">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <FadeIn>
                    <h2 className="text-sm font-bold tracking-widest text-purple-400 uppercase mb-3">About Me</h2>
                    <h3 className="text-3xl font-bold text-white mb-8">Passionate About Code,<br />Driven by Curiosity.</h3>
                    <p className="text-lg text-slate-400 leading-relaxed mb-6 font-medium">
                        I'm a Computer Science student at <strong className="text-white">Illinois State University, Springfield Chicago</strong>,
                        focused on software engineering and building innovative solutions. My journey in tech started with a love for problem-solving
                        and has grown into a passion for creating impactful applications.
                    </p>
                    <p className="text-lg text-slate-400 leading-relaxed font-medium">
                        My goal is to transition into a <strong className="text-white">Software Engineering</strong> role where I can apply my skills in
                        Python, web development, and security to build systems that make a real difference.
                    </p>
                </FadeIn>
            </div>
        </section>
    );
}
