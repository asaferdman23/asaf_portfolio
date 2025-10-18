# Erdmind - Website

A modern, responsive portfolio website built with React, Vite, and Framer Motion. Features smooth animations, clean design, and optimized performance.

## 🚀 Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Framer Motion** - Animations and page transitions
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS & Autoprefixer** - CSS processing
- **ESLint** - Code linting

## ✨ Features

- **Responsive Design** - Mobile-first approach with clean layouts
- **Smooth Animations** - Framer Motion powered transitions and effects
- **Page Transitions** - Seamless navigation between routes
- **Parallax Effects** - Subtle background movements on scroll
- **Project Filtering** - Interactive project gallery with tag-based filtering
- **Contact Form** - Integrated with FormSubmit.co for easy form handling
- **SEO Optimized** - Meta tags, Open Graph, and semantic HTML
- **Performance Focused** - Optimized images, lazy loading, and efficient animations

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx      # Navigation with active route highlighting
│   ├── Hero.jsx        # Landing hero section
│   ├── About.jsx       # About section with highlights
│   ├── Skills.jsx      # Animated skills grid
│   ├── ProjectCard.jsx # Individual project display
│   ├── ProjectsGrid.jsx # Projects layout component
│   ├── Testimonials.jsx # Client testimonials
│   ├── ContactForm.jsx  # Contact form with validation
│   ├── Section.jsx     # Section wrapper with animations
│   ├── Chip.jsx        # Tag/chip component
│   ├── PageTransition.jsx # Page transition wrapper
│   ├── Parallax.jsx    # Parallax scroll component
│   ├── ScrollToTop.jsx # Auto-scroll on route change
│   └── Footer.jsx      # Site footer
├── pages/              # Route components
│   ├── Home.jsx        # Homepage with all sections
│   ├── Projects.jsx    # Projects index with filtering
│   ├── ProjectDetails.jsx # Individual project pages
│   ├── Contact.jsx     # Contact page
│   └── NotFound.jsx    # 404 error page
├── data/               # Static data
│   ├── projects.js     # Project information
│   └── testimonials.js # Client testimonials
├── lib/                # Utilities and helpers
│   └── motion.js       # Framer Motion variants
├── styles/             # Global styles
│   └── index.css       # Tailwind imports and custom components
├── App.jsx             # Main app component with routing
└── main.jsx            # App entry point
```

## 🎨 Design System

- **Colors**: Slate/stone palette with blue accents
- **Typography**: System font stack for optimal performance
- **Layout**: Max-width containers with generous whitespace
- **Components**: Consistent spacing, border radius, and shadows
- **Animations**: Subtle, purposeful motion with spring physics

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd landing_page
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Build & Deploy

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

### Deploy

#### Vercel (Recommended)
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

#### Netlify
1. Build the project: `npm run build`
2. Drag and drop the `dist/` folder to Netlify

#### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts: `"deploy": "gh-pages -d dist"`
3. Run: `npm run deploy`

## 🎯 Customization

### Update Content

1. **Personal Info**: Edit components in `src/components/`
2. **Projects**: Modify `src/data/projects.js`
3. **Testimonials**: Update `src/data/testimonials.js`
4. **Contact Info**: Edit `src/pages/Contact.jsx`

### Update Styling

1. **Colors**: Modify `tailwind.config.js`
2. **Components**: Edit `src/styles/index.css`
3. **Animations**: Customize `src/lib/motion.js`

### Add Images

1. Place images in `public/assets/`
2. Update file paths in data files
3. Ensure proper alt text for accessibility

## 🔧 Configuration

### Form Submission

Update the contact form action URL in `src/components/ContactForm.jsx`:

```javascript
// Replace with your email
const response = await fetch('https://formsubmit.co/your@email.com', {
```

### SEO & Meta Tags

Update meta tags in `index.html` and ensure proper titles throughout the app.

### Analytics

Add Google Analytics or other tracking scripts to `index.html`.

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Bundle Size**: < 200KB gzipped
- **Load Time**: < 3s on 3G connection
- **Animations**: 60fps with GPU acceleration

## 🐛 Troubleshooting

### Common Issues

1. **Build Errors**: Ensure all dependencies are installed
2. **Animation Issues**: Check for conflicting CSS or missing Framer Motion imports
3. **Routing Problems**: Verify React Router setup and route definitions
4. **Form Submission**: Confirm FormSubmit.co configuration

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you find bugs or have suggestions, please open an issue.

---

Built by Erdmind