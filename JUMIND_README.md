# JUMIND - AI-Powered Web & Automation Studio

A modern, futuristic landing page for Jumind - an AI-powered web and automation studio. Built with React, Tailwind CSS, and Framer Motion.

## 🎨 Design Features

### Branding
- **Logo**: JUMIND (text-based, bold typography)
- **Tagline**: "AI-Powered Web & Automation Studio"
- **Colors**:
  - Primary Black: `#0A0A0A`
  - Primary White: `#FFFFFF`
  - AI Blue: `#4DA8FF`
  - Electric Blue: `#1E86F7`
  - Soft Gray: `#C9D1D9`

### Design Style
- Clean, modern, futuristic aesthetic
- High contrast with minimalist typography
- Smooth gradients and soft shadows
- Subtle neon blue glow effects
- Geometric sans-serif fonts (Space Grotesk, Inter)
- Generous spacing and breathing room
- 12-column responsive grid system

## 📐 Page Sections

### 1. Hero Section
- Large centered JUMIND logo with glowing effect
- Headline: "Intelligent Systems. Built Fast."
- Description of services
- CTA button: "Start Your Project"
- Animated floating gradient orbs
- Stats display (10x faster, 24/7 AI, 100% custom)
- Scroll indicator

### 2. What We Build (Services)
- 6 service cards in responsive grid:
  - AI Agents
  - Web Development
  - Automation (Make/Zapier)
  - CRM Integrations
  - Dashboards & Data Systems
- Icon, title, description for each
- Smooth hover effects with scale and shadow
- Staggered animation on scroll

### 3. Featured Work
- Project showcase with interactive tabs
- Laptop mockup frame displaying projects
- 3 featured projects:
  - AI Customer Support Agent
  - Enterprise Analytics Dashboard
  - Multi-Platform Automation
- Tech stack badges
- Smooth transitions between projects

### 4. Why Jumind
- Three-column layout highlighting:
  - **Speed**: Launch in weeks, not months
  - **Intelligence**: AI-first architecture
  - **Quality**: Enterprise-grade standards
- Each with icon, detailed description, and feature list
- Stats row at bottom (95% satisfaction, 50+ projects, etc.)

### 5. Testimonials
- 3 client testimonials in card grid
- Avatar images (using UI Avatars API)
- 5-star ratings
- Client name, role, and company
- Quote icon and gradient hover effects
- Social proof logos section
- Bottom CTA with gradient background

### 6. Contact Form
- Two-column layout (info + form)
- Form fields: Name, Phone, Email, Message
- Elegant blue accent styling
- Success state with checkmark animation
- Contact methods (email, location)
- Social media links (Instagram, LinkedIn)
- Why work with us list

### 7. Footer
- Minimalistic design on black background
- JUMIND logo and tagline
- Links: About, Services, Contact
- Social media icons
- Copyright and legal links
- Subtle tagline at bottom

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd /Users/user/Desktop/landing_page
```

2. Install dependencies (if not already installed):
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to the Jumind page:
```
http://localhost:5173/jumind
```

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- Mobile: 0-768px
- Tablet: 768px-1024px
- Desktop: 1024px+

All sections adapt beautifully to different screen sizes with:
- Flexible grid layouts
- Responsive typography
- Touch-friendly navigation
- Optimized spacing

## 🎭 Animations

Built with Framer Motion for smooth, professional animations:
- Fade-in on scroll (viewport detection)
- Slide-up entrance animations
- Staggered children animations
- Hover effects with scale and shadow
- Smooth page transitions
- Floating gradient orbs
- Pulsing glow effects

## 🎨 Custom CSS Classes

### Containers
- `.container-jumind` - Main content container with responsive padding

### Cards
- `.card-jumind` - Standard white card with shadow
- `.card-jumind-glow` - Card with blue glow effect

### Buttons
- `.btn-jumind-primary` - Blue gradient button
- `.btn-jumind-secondary` - White outlined button
- `.btn-jumind-outline` - Transparent with white border

### Typography
- `.heading-jumind-xl` - Extra large heading (5xl-7xl)
- `.heading-jumind-lg` - Large heading (4xl-6xl)
- `.heading-jumind-md` - Medium heading (3xl-5xl)
- `.text-gradient-jumind` - Blue gradient text effect

### Sections
- `.section-jumind` - Standard section padding
- `.section-jumind-dark` - Dark section with black background

## 🔧 Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router** - Client-side routing

## 📂 File Structure

```
src/
├── components/
│   └── jumind/
│       ├── JumindHero.jsx
│       ├── JumindServices.jsx
│       ├── JumindWork.jsx
│       ├── JumindWhy.jsx
│       ├── JumindTestimonials.jsx
│       ├── JumindContact.jsx
│       ├── JumindFooter.jsx
│       └── JumindNavbar.jsx
├── pages/
│   └── Jumind.jsx
├── styles/
│   └── index.css (with Jumind design system)
└── App.jsx (updated with /jumind route)
```

## 🎯 Key Features

- ✅ Fully responsive mobile-first design
- ✅ Smooth scroll animations
- ✅ Interactive project showcase
- ✅ Working contact form with validation
- ✅ Accessible navigation
- ✅ SEO-friendly structure
- ✅ Fast loading times
- ✅ Modern ES6+ JavaScript
- ✅ Component-based architecture
- ✅ Clean, maintainable code

## 🎨 Color Variables

CSS variables are defined for easy customization:

```css
--color-black: #0A0A0A
--color-white: #FFFFFF
--color-ai-blue: #4DA8FF
--color-electric-blue: #1E86F7
--color-soft-gray: #C9D1D9
--gradient-blue: linear-gradient(135deg, #4DA8FF 0%, #1E86F7 100%)
--shadow-glow: 0 0 40px rgba(77, 168, 255, 0.3)
```

## 📝 Customization

### Changing Colors
Update the CSS variables in `src/styles/index.css` and Tailwind config in `tailwind.config.js`.

### Adding Sections
Create new components in `src/components/jumind/` and import them into `src/pages/Jumind.jsx`.

### Modifying Content
Edit the content directly in each component file. Look for arrays of data (services, testimonials, projects) to update content easily.

## 🚢 Production Build

To build for production:

```bash
npm run build
```

The optimized files will be in the `dist/` directory.

## 📄 License

This is a custom design project for Jumind.

## 🙏 Credits

- Fonts: Google Fonts (Inter, Space Grotesk)
- Icons: Heroicons (inline SVG)
- Animations: Framer Motion
- Avatar Images: UI Avatars API

---

**Built with ❤️ for Jumind - Intelligent Systems. Built Fast.**

