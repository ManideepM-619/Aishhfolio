// Shared data and utilities for the portfolio
import { Shield, Server, Trophy, Award, Star } from 'lucide-react';

export const portfolioData = {
    name: "Sarah.Dev",
    role: "Identity & Access Management Professional",
    summary: "Experienced IAM professional seeking Software Engineering roles. Specializing in ForgeRock and PingFederate.",
    projects: [
        {
            id: 1,
            title: "Pet Paw: Local Pet Marketplace",
            category: "Full Stack Development",
            summary: "A website that helps users find nearby pet owners available to buy, sell, or adopt pets.",
            details: {
                problem: "Pet owners often struggle to find reliable, verified local buyers or sellers, leading to trust issues and scams.",
                approach: "Built a location-based marketplace using React and a Python (Django) backend. Integrated Google Maps API for geolocation filtering and a secure messaging system for user privacy.",
                stack: ["React", "Python (Django)", "PostgreSQL", "Google Maps API", "Docker"],
                impact: "Facilitated over 500 successful pet connections in the local community during the beta launch."
            }
        },
        {
            id: 2,
            title: "Automated Identity Lifecycle Management",
            category: "Automation & Python",
            summary: "Developed Python scripts to synchronize HR data with PingFederate, replacing manual entry.",
            details: {
                problem: "Manual provisioning took up to 3 days.",
                approach: "Built a Python service using Flask consuming Workday webhooks and PingFederate Admin API.",
                stack: ["Python", "Flask", "PingFederate API", "Docker", "Jenkins"],
                impact: "Reduced provisioning time to <5 minutes."
            }
        },
        {
            id: 3,
            title: "Secure Banking API Gateway",
            category: "Security Engineering",
            summary: "Assisted in implementing fine-grained authorization policies using OPA and PingAccess.",
            details: {
                problem: "Client needed granular control over data access attributes.",
                approach: "Deployed PingAccess integrated with OPA (Open Policy Agent) for complex authorization rules.",
                stack: ["PingAccess", "Open Policy Agent", "Rego", "OAuth 2.0"],
                impact: "Enabled secure launch of Open Banking platform."
            }
        }
    ],
    experience: [
        { role: "IAM Systems Analyst", company: "TechFin Global Solutions", period: "2021 - Present" },
        { role: "Application Support Engineer", company: "DataShield Systems", period: "2018 - 2021" },
        { role: "Junior IT Administrator", company: "StartUp Inc", period: "2016 - 2018" }
    ],
    certifications: [
        { name: "ForgeRock Certified Access Management Specialist", issuer: "ForgeRock", date: "2023", iconType: "shield-orange" },
        { name: "PingIdentity Certified Professional - PingFederate", issuer: "PingIdentity", date: "2022", iconType: "shield-red" },
        { name: "AWS Certified Solutions Architect – Associate", issuer: "Amazon Web Services", date: "2021", iconType: "server" }
    ],
    achievements: [
        { title: "Winner - Global Cyber Security Hackathon", org: "DevPost x Security Alliance", date: "2023", desc: "Built a zero-trust authentication prototype using Python and OPA. Beat 50+ teams.", iconType: "trophy" },
        { title: "Best Technical Talk", org: "PyCon Regional", date: "2022", desc: "Voted best session for presentation on 'Automating Legacy IAM with Modern Python Wrappers'.", iconType: "award" },
        { title: "Innovation Champion", org: "TechFin Global Solutions", date: "2021", desc: "Awarded for developing an internal Python tool that reduced user onboarding time by 80%.", iconType: "star" }
    ],
    skills: ["ForgeRock AM/IDM", "PingFederate", "Python", "OAuth 2.0", "OIDC", "SAML", "Docker", "AWS", "Java"]
};

export const navigation = [
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
];

// Gemini API call
const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

export async function callGemini(prompt, systemInstruction = "") {
    if (!apiKey) {
        console.warn("API Key missing");
        return "I'm in demo mode (API Key missing). Please add your Gemini API Key to .env.local to chat for real!";
    }

    try {
        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: prompt }] }],
                    systemInstruction: { parts: [{ text: systemInstruction }] },
                }),
            }
        );

        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        return data.candidates?.[0]?.content?.parts?.[0]?.text || "I couldn't generate a response at this time.";
    } catch (error) {
        console.error("Gemini API Error:", error);
        return "Sorry, I encountered a temporary error. Please try again.";
    }
}
