// Shared data and utilities for the portfolio
import { Shield, Server, Trophy, Award, Star, BookOpen, Users } from 'lucide-react';

export const portfolioData = {
    name: "Aishwarya Madapati",
    role: "IAM & Cybersecurity Professional",
    summary: "Hands-on experience in Software Development and Cybersecurity, with expertise in IAM, PAM, MFA, SSO, and securing APIs. Proficient in ForgeRock, PingFederate, and OAuth 2.0 protocols.",

    experience: [
        {
            role: "Information Technology Intern",
            company: "Illinois Department of Human Services | Chicago, IL",
            period: "June 2025 - July 2025",
            highlights: [
                "Managed Electronic Health Records (EHR) ensuring HIPAA compliance",
                "Supported health data audits and quality checks for state/federal standards",
                "Collaborated with IT security teams for secure handling of sensitive patient data",
                "Contributed to cybersecurity protocols for medical record retention per NIST guidelines"
            ]
        },
        {
            role: "Programmer Analyst Trainee",
            company: "Cognizant Technology Services | Hyderabad, India",
            period: "Oct 2023 - Mar 2024",
            highlights: [
                "Integrated OIDC with applications to enable Single Sign-On (SSO)",
                "Integrated Ping Federate with Active Directory, LDAP, and OAuth",
                "Configured Okta with Salesforce, Office 365, and Active Directory",
                "Managed application access, policies, and password rotation in Ping and AD"
            ]
        }
    ],

    projects: [
        {
            id: 1,
            title: "QR-Phish Guard + Voice Coach",
            category: "AI & Cybersecurity",
            summary: "AI-driven QR-code security application that detects, scores, and explains phishing risks in real time.",
            details: {
                problem: "QR-based phishing attacks are increasing, and users often lack awareness to identify malicious QR codes.",
                approach: "Integrated Runware Vision to decode QR images with a custom risk-analysis engine. Added ElevenLabs Voice Coach for spoken feedback. Validates URLs against trusted domains, flags IP-literals, punycode, shorteners, and risky TLDs.",
                stack: ["Bolt.new", "Runware", "ElevenLabs", "Next.js", "Node.js", "Python"],
                impact: "Strengthened cybersecurity awareness by merging AI Vision + Voice AI to help users recognize and avoid QR-based phishing attacks."
            }
        },
        {
            id: 2,
            title: "Techstore – E-commerce Web Application",
            category: "Full Stack Development",
            summary: "Dynamic e-commerce React project with responsive design and efficient state management.",
            details: {
                problem: "Need for a modern, responsive e-commerce platform with seamless navigation.",
                approach: "Built with React using Context API for state management. Implemented React Router DOM for navigation and React Hook Form for form handling.",
                stack: ["React", "HTML", "CSS", "Bootstrap", "Context API", "React Router DOM"],
                impact: "Delivered a fully functional e-commerce experience with enhanced user navigation and robust form validation."
            }
        },
        {
            id: 3,
            title: "Image Caption Generator",
            category: "Machine Learning",
            summary: "CNN-LSTM based model to generate descriptive captions for input images using Flickr_8K dataset.",
            details: {
                problem: "Automating image captioning for accessibility and content management applications.",
                approach: "Developed using Convolutional Neural Network (CNN) for feature extraction and Long Short-Term Memory (LSTM) for sequence generation. Trained on Flickr_8K dataset.",
                stack: ["Python", "TensorFlow", "CNN", "LSTM", "Flickr_8K Dataset"],
                impact: "Successfully generated accurate descriptive captions for diverse image inputs."
            }
        },
        {
            id: 4,
            title: "Image Fusion of CT and MRI",
            category: "Medical Imaging",
            summary: "Medical image fusion model using Dual Tree Complex Wavelet Transform (DTCWT).",
            details: {
                problem: "Combining complementary information from CT and MRI scans for better diagnostic imaging.",
                approach: "Implemented Dual Tree Complex Wavelet Transform (DTCWT) to extract intricate information from both CT and MRI images. Evaluated using RMSE metrics.",
                stack: ["Python", "DTCWT", "Image Processing", "NumPy"],
                impact: "Achieved improved fusion performance with low root mean square error (RMSE)."
            }
        }
    ],

    certifications: [
        { name: "Career Essentials in Cyber Security", issuer: "Microsoft & LinkedIn", date: "2024", iconType: "shield-blue" },
        { name: "Generative AI APIs for Practical Applications", issuer: "Skillsoft", date: "2024", iconType: "server" },
        { name: "Artificial Intelligence Training", issuer: "Oracle Academy", date: "2023", iconType: "server" },
        { name: "SQL Fluency", issuer: "Udacity", date: "2023", iconType: "server" },
        { name: "Introduction to Python Course", issuer: "NPTEL", date: "2022", iconType: "shield-orange" },
        { name: "Programming, Data Structures and Algorithms", issuer: "NPTEL", date: "2022", iconType: "shield-orange" },
        { name: "Microsoft Azure", issuer: "Udacity", date: "2022", iconType: "shield-blue" },
        { name: "Machine Learning Session", issuer: "Cognizance IIT Roorkee", date: "2021", iconType: "server" }
    ],

    achievements: [
        {
            title: "3rd Place - Data Analytics Cup",
            org: "University of Illinois Springfield",
            date: "April 2025",
            desc: "Analyzed R&D spending, advertising efficiency, and customer satisfaction using linear regression and correlation analysis. Developed a customer satisfaction index (CSI) model.",
            iconType: "trophy"
        },
        {
            title: "Target Cyber Defense Challenge",
            org: "Women in Cybersecurity",
            date: "June 2025",
            desc: "Executed red team and blue team exercises. Performed vulnerability scanning with Nessus and Wireshark. Demonstrated security monitoring and risk assessment under pressure.",
            iconType: "award"
        },
        {
            title: "IEEE CIS Chapter Chair",
            org: "IEEE GRIET CIS SBC",
            date: "May 2021 - May 2023",
            desc: "Led IEEE Computational Intelligence Society student chapter. Organized technical talks, workshops, and networking events for student learning and collaboration.",
            iconType: "star"
        },
        {
            title: "WiCyS Membership",
            org: "Women in Cybersecurity",
            date: "May 2025 - Present",
            desc: "Actively engaged in professional development, networking, and technical workshops to advance cybersecurity knowledge and leadership.",
            iconType: "users"
        }
    ],

    education: [
        {
            degree: "Master of Science, Computer Science",
            institution: "University of Illinois at Springfield",
            location: "Springfield, IL",
            period: "Aug 2024 - Dec 2025 (Expected)",
            type: "graduate"
        },
        {
            degree: "Graduate Certificate in System Security",
            institution: "University of Illinois at Springfield",
            location: "Springfield, IL",
            period: "Aug 2024 - Present",
            type: "certificate"
        },
        {
            degree: "Bachelor of Technology, Information Technology",
            institution: "Gokaraju Rangaraju Institute of Engineering & Technology",
            location: "Hyderabad, India",
            period: "March 2019 - August 2023",
            type: "undergraduate"
        }
    ],

    publication: {
        title: "Air Quality Index Prediction",
        link: "https://ui.adsabs.harvard.edu/link_gateway/2023E3SWC.39101103A/doi:10.1051/e3sconf/202339101103",
        description: "Compared Support Vector Machine (SVM) and Random Forest models to predict AQI based on air pollutants (SO2, NO2, PM10, PM2.5, CO). Evaluated model performance using error metrics."
    },

    skills: ["Python", "JavaScript", "Java", "TypeScript", "ReactJS", "Node.js", "OAuth 2.0", "OIDC", "SAML", "PingFederate", "Okta", "ForgeRock", "AWS", "Docker"]
};

export const navigation = [
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Publication', href: '#publication' },
    { name: 'Education', href: '#education' },
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
