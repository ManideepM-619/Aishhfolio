# Aishhfolio - Project Documentation

> **Knowledge Transfer Document**  
> A comprehensive guide to the portfolio website's features, architecture, and functionalities.

---

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Project Structure](#project-structure)
4. [Components Overview](#components-overview)
5. [Key Features & Functionalities](#key-features--functionalities)
6. [Data Management](#data-management)
7. [Animations & Effects](#animations--effects)
8. [Responsive Design](#responsive-design)
9. [AI Integration](#ai-integration)
10. [Deployment](#deployment)
11. [How to Run](#how-to-run)

---

## 🎯 Project Overview

**Aishhfolio** is a modern, responsive portfolio website built for Aishwarya Madapati, an IAM & Cybersecurity Professional. The site showcases professional experience, projects, certifications, achievements, publications, and provides contact functionality.

### Key Highlights
- Single-page application with smooth scroll navigation
- Mobile-first responsive design
- Dynamic animations and micro-interactions
- AI-powered chat widget (Gemini API integration)
- Modern glassmorphism UI with purple/pink gradient theme

---

## 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 14** | React framework with App Router |
| **React 18** | UI component library |
| **Tailwind CSS 3** | Utility-first CSS styling |
| **Lucide React** | Icon library |
| **Gemini API** | AI chat functionality |

### Configuration Files
- `tailwind.config.js` - Custom theme, animations, and extended colors
- `postcss.config.js` - PostCSS configuration for Tailwind
- `next.config.js` - Next.js configuration
- `netlify.toml` - Netlify deployment settings

---

## 📁 Project Structure

```
Aishhfolio/
├── app/
│   ├── layout.js          # Root layout with metadata
│   ├── page.js             # Main page component (imports all sections)
│   └── globals.css         # Global styles
├── components/
│   ├── index.js            # Barrel export file
│   ├── data.js             # Centralized portfolio data + Gemini API
│   ├── Navbar.jsx          # Navigation with scroll spy
│   ├── Hero.jsx            # Hero section with profile
│   ├── TechStackBanner.jsx # Tech stack marquee/banner
│   ├── Skills.jsx          # Skills showcase
│   ├── Experience.jsx      # Work experience timeline
│   ├── Projects.jsx        # Project cards with details
│   ├── Certifications.jsx  # Certifications grid
│   ├── Achievements.jsx    # Awards and achievements
│   ├── Publication.jsx     # Research publications
│   ├── Education.jsx       # Education timeline
│   ├── About.jsx           # About section
│   ├── Contact.jsx         # Contact form
│   ├── ChatWidget.jsx      # AI chat widget (Gemini)
│   ├── Footer.jsx          # Footer
│   ├── SocialBar.jsx       # Fixed social links sidebar
│   └── FadeIn.jsx          # Reusable fade animation wrapper
├── public/
│   └── assets/             # Images and resume PDF
├── .env.local              # Environment variables (API keys)
└── package.json            # Dependencies and scripts
```

---

## 🧩 Components Overview

### 1. **Navbar.jsx**
- Fixed navigation bar with backdrop blur effect
- **Scroll Spy**: Highlights active section using `IntersectionObserver`
- **Animated Title**: Glitch effect transitioning between "Aishwarya" and "Portfolio"
- **Mobile Hamburger Menu**: Collapsible menu for mobile screens
- **Jumping Cat Icon**: Playful animation on active nav items

### 2. **Hero.jsx**
- Profile image with gradient overlay
- Gradient text name display
- "Security Focus" floating badge
- CTA buttons: "Projects" and "Resume" download
- Background animated blobs

### 3. **TechStackBanner.jsx**
- **Desktop**: Static horizontal display with hover effects
- **Mobile**: Auto-scrolling infinite marquee animation
- Technologies: ForgeRock, PingIdentity, Python, OAuth 2.0, OpenID Connect, Docker

### 4. **Skills.jsx**
- Grid display of technical skills
- Hover animations with color accents

### 5. **Experience.jsx**
- Timeline design with purple accent line
- **Mobile**: Click-to-expand job descriptions (accordion style)
- **Desktop**: All descriptions visible by default
- Chevron indicator for expandable items

### 6. **Projects.jsx**
- Project cards with category tags
- Expandable details showing: Problem, Approach, Tech Stack, Impact
- Hover effects and transitions

### 7. **Certifications.jsx**
- Grid layout with certification cards
- Icon-based visual indicators
- Issuer and date information

### 8. **Achievements.jsx**
- Card-based achievement display
- Icon indicators for different achievement types (Trophy, Award, Star, etc.)

### 9. **Publication.jsx**
- Research publication showcase
- External link to publication

### 10. **Education.jsx**
- Education timeline with degree cards
- Location and period information

### 11. **Contact.jsx**
- Contact form with email, subject, message fields
- Form validation and submission handling

### 12. **ChatWidget.jsx**
- Floating chat button (currently commented out in page.js)
- AI-powered responses using Gemini API
- Chat history display

### 13. **SocialBar.jsx**
- Fixed vertical sidebar with social links
- Visible on larger screens

### 14. **FadeIn.jsx**
- Reusable animation wrapper component
- Intersection Observer-based fade-in on scroll
- Configurable delay prop

### 15. **Footer.jsx**
- Copyright information
- Tech stack attribution

---

## ✨ Key Features & Functionalities

### Navigation
| Feature | Description |
|---------|-------------|
| Scroll Spy | Automatically highlights the current section in navbar |
| Smooth Scroll | Anchor links scroll smoothly to sections |
| Mobile Menu | Hamburger menu with slide-down animation |

### Animations
| Animation | Location | Description |
|-----------|----------|-------------|
| Glitch Effect | Navbar title | RGB split, skew distortion on text change |
| Jumping Cat | Active nav item | Playful bounce animation |
| Fade In | All sections | Scroll-triggered entrance animations |
| Marquee Scroll | Tech Stack (mobile) | Infinite horizontal scroll |
| Hover Effects | Cards, buttons | Scale, glow, and color transitions |

### Mobile-Specific Features
| Feature | Component | Description |
|---------|-----------|-------------|
| Accordion Experience | Experience.jsx | Tap to expand job descriptions |
| Scrolling Tech Stack | TechStackBanner.jsx | Auto-scrolling marquee |
| Side-by-side Buttons | Hero.jsx | Projects and Resume buttons in row |
| Collapsible Navigation | Navbar.jsx | Hamburger menu |

---

## 📊 Data Management

All portfolio content is centralized in `components/data.js`:

```javascript
export const portfolioData = {
    name: "...",
    role: "...",
    summary: "...",
    experience: [...],
    projects: [...],
    certifications: [...],
    achievements: [...],
    education: [...],
    publication: {...},
    skills: [...]
};

export const navigation = [...];  // Nav menu items
export async function callGemini(prompt, systemInstruction) {...}  // AI API
```

### Benefits of Centralized Data
- Easy content updates without modifying components
- Single source of truth
- Separation of concerns (data vs. presentation)

---

## 🎨 Animations & Effects

### CSS Keyframe Animations

1. **Glitch Effect** (Navbar)
   - RGB color splitting with text-shadow
   - Position jittering with transform
   - Skew distortion
   - Clip-path glitching

2. **Kitten Jump** (Navbar)
   - Vertical bounce with rotation
   - Applied to cat icon on active nav item

3. **Marquee Scroll** (Tech Stack)
   - Infinite horizontal translation
   - Seamless loop with duplicated content

4. **Fade In** (FadeIn.jsx wrapper)
   - Opacity and translateY transition
   - Triggered by Intersection Observer

### Tailwind Transitions
- `transition-all duration-300` on interactive elements
- `hover:scale-105`, `hover:bg-*` for hover states
- `backdrop-blur-md` for glassmorphism effects

---

## 📱 Responsive Design

### Breakpoints (Tailwind defaults)
| Breakpoint | Min Width | Usage |
|------------|-----------|-------|
| `sm` | 640px | Small tablets |
| `md` | 768px | Tablets |
| `lg` | 1024px | Laptops |
| `xl` | 1280px | Desktops |

### Mobile-First Patterns Used
```css
/* Example: Hidden on mobile, visible on md+ */
className="hidden md:block"

/* Example: Flex column on mobile, row on larger */
className="flex flex-col sm:flex-row"
```

---

## 🤖 AI Integration

### Gemini API Setup
1. Create `.env.local` file with:
   ```
   NEXT_PUBLIC_GEMINI_API_KEY=your_api_key_here
   ```

2. API function in `data.js`:
   - Makes POST requests to Gemini 2.0 Flash
   - Handles errors gracefully
   - Returns fallback messages if API unavailable

### Chat Widget Usage
- Currently disabled in `page.js` (commented out)
- Enable by uncommenting `<ChatWidget />`

---

## 🚀 Deployment

### Netlify Configuration (`netlify.toml`)
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

### Environment Variables
Set `NEXT_PUBLIC_GEMINI_API_KEY` in Netlify dashboard under Site Settings → Environment Variables.

---

## 💻 How to Run

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation
```bash
# Clone the repository
git clone <repository-url>

# Navigate to project
cd Aishhfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts
| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server (localhost:3000) |
| `npm run build` | Create production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## 📝 Quick Reference

### Adding New Content
1. **New Experience**: Add object to `portfolioData.experience` in `data.js`
2. **New Project**: Add object to `portfolioData.projects` in `data.js`
3. **New Certification**: Add object to `portfolioData.certifications` in `data.js`
4. **New Nav Item**: Add to `navigation` array and create corresponding section

### Modifying Animations
- Navbar animations: `Navbar.jsx` (inline `<style jsx>` block)
- Section fade-ins: Adjust `FadeIn.jsx` delay prop
- Hover effects: Modify Tailwind classes on elements

### Updating Theme Colors
- Primary: Purple (`purple-400`, `purple-500`, `purple-600`)
- Accent: Pink (`pink-400`, `pink-500`)
- Background: Slate (`slate-900`, `slate-950`)
- Modify in `tailwind.config.js` for global changes

---

## 👤 Author

**Aishwarya Madapati**  
MS Computer Science @ UIS | IAM & Cybersecurity Specialist

---

*Last Updated: December 2024*
