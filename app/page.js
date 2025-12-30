'use client';

import {
    Navbar,
    Hero,
    TechStackBanner,
    Skills,
    Experience,
    Projects,
    Certifications,
    Achievements,
    About,
    Contact,
    ChatWidget,
    Footer,
    SocialBar
} from '../components';

export default function Home() {
    return (
        <div className="min-h-screen text-slate-200 font-sans selection:bg-purple-500/30 selection:text-white overflow-x-hidden relative">
            <Navbar />
            <SocialBar />
            <Hero />
            <TechStackBanner />
            <Skills />
            <Experience />
            <Projects />
            <Certifications />
            <Achievements />
            <About />
            <Contact />
            {/* <ChatWidget /> */}
            <Footer />
        </div>
    );
}