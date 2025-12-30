import './globals.css'

export const metadata = {
    title: 'Aishhfolio | AI-Powered Portfolio',
    description: 'A stunning portfolio powered by Google Gemini AI.',
    keywords: ['portfolio', 'AI', 'Gemini', 'developer'],
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="scroll-smooth">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            </head>
            <body className="bg-dark-900 text-slate-50 antialiased">
                <div className="fixed inset-0 -z-10 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/20 rounded-full blur-[100px] animate-pulse" />
                    <div className="absolute top-1/2 -left-40 w-96 h-96 bg-accent-500/20 rounded-full blur-[120px] animate-pulse" />
                    <div className="absolute inset-0 grid-pattern opacity-50" />
                </div>
                <main className="relative min-h-screen">{children}</main>
            </body>
        </html>
    )
}
