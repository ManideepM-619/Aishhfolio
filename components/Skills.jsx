'use client';
import { Shield, Code, Server, Database, CheckCircle2 } from 'lucide-react';
import FadeIn from './FadeIn';

const skillCategories = [
    {
        icon: <Code className="text-purple-400" size={24} />,
        title: "Programming & Development",
        skills: ["Python (Flask)", "JavaScript", "Java", "TypeScript", "ReactJS", "Node.js", "Express JS"]
    },
    {
        icon: <Shield className="text-pink-400" size={24} />,
        title: "IAM & Security",
        skills: ["Microsoft Entra ID", "Ping Federate", "Okta", "OAuth 2.0", "OIDC", "SAML", "LDAP", "JWT", "Kerberos"]
    },
    {
        icon: <Server className="text-indigo-400" size={24} />,
        title: "Compliance & Standards",
        skills: ["HIPAA", "NIST", "PCI DSS", "SOX", "GDPR", "OWASP", "Active Directory"]
    },
    {
        icon: <Database className="text-green-400" size={24} />,
        title: "Data & Tools",
        skills: ["Pandas", "NumPy", "Power BI", "PostgreSQL", "MySQL", "Git", "Jira", "Wireshark", "Nessus"]
    }
];

export default function Skills() {
    return (
        <section id="skills" className="py-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <FadeIn>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white">Technical Expertise</h2>
                        <p className="mt-4 text-slate-400">Core competencies in IAM, Security & Development</p>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillCategories.map((category, idx) => (
                        <FadeIn key={idx} delay={idx * 100} className="h-full">
                            <div className="p-6 rounded-2xl bg-slate-900/40 backdrop-blur-md border border-white/5 h-full hover:bg-slate-800/40 hover:border-purple-500/20 hover:shadow-xl hover:shadow-purple-900/10 transition-all duration-300 group">
                                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 shadow-sm group-hover:scale-110 transition-transform">
                                    {category.icon}
                                </div>
                                <h3 className="text-lg font-bold text-white mb-4">{category.title}</h3>
                                <ul className="space-y-2">
                                    {category.skills.map((skill) => (
                                        <li key={skill} className="flex items-center text-sm text-slate-400">
                                            <CheckCircle2 size={14} className="text-purple-500 mr-2 flex-shrink-0" />
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
