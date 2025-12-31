'use client';
import FadeIn from './FadeIn';

export default function About() {
    return (
        <section id="about" className="py-20 bg-slate-900/30 relative overflow-hidden">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <FadeIn>
                    <h2 className="text-sm font-bold tracking-widest text-purple-400 uppercase mb-3">About Me</h2>
                    <h3 className="text-3xl font-bold text-white mb-8">Passionate About Security,<br />Driven by Innovation.</h3>
                    <p className="text-lg text-slate-400 leading-relaxed mb-6 font-medium">
                        I'm a Computer Science graduate student at <strong className="text-white">University of Illinois at Springfield</strong>,
                        pursuing my Master's degree with a focus on System Security. Expected to graduate in <strong className="text-white">December 2025</strong>.
                        My journey in tech combines software development with cybersecurity, specializing in Identity and Access Management.
                    </p>
                    <p className="text-lg text-slate-400 leading-relaxed mb-6 font-medium">
                        With hands-on experience in <strong className="text-white">ForgeRock OpenAM, PingFederate, OAuth 2.0, and OIDC</strong>,
                        I've worked on integrating secure authentication solutions across enterprise environments. My internship at the
                        Illinois Department of Human Services strengthened my expertise in HIPAA compliance and healthcare data security.
                    </p>
                    <p className="text-lg text-slate-400 leading-relaxed font-medium">
                        My goal is to leverage my skills in <strong className="text-white">IAM, Python development, and cybersecurity</strong> to build
                        systems that protect digital identities and enable secure, seamless user experiences.
                    </p>
                </FadeIn>
            </div>
        </section>
    );
}
