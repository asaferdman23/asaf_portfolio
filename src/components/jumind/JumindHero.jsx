import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useLanguage } from '../../contexts/LanguageContext';

export default function JumindHero() {
  const { language } = useLanguage();
  
  // Refs for GSAP animations
  const heroRef = useRef(null);
  const logoRef = useRef(null);
  const taglineRef = useRef(null);
  const headlineRef = useRef(null);
  const descriptionRef = useRef(null);
  const ctaRef = useRef(null);
  const backgroundRef = useRef(null);

  const content = {
    en: {
      badge: 'AI-Powered Studio',
      headline: 'Build. Ship. Scale.',
      subheadline: 'We create digital products that drive business growth',
      description: 'Web Development • Mobile Apps • AI Agents • Automation',
      ctaPrimary: 'Start Project',
      ctaSecondary: 'View Work',
    },
    he: {
      badge: 'סטודיו מבוסס AI',
      headline: 'בונים. משיקים. מרחיבים.',
      subheadline: 'אנחנו יוצרים מוצרים דיגיטליים שמניעים צמיחה עסקית',
      description: 'פיתוח ווב • אפליקציות מובייל • סוכני AI • אוטומציה',
      ctaPrimary: 'התחל פרויקט',
      ctaSecondary: 'צפה בעבודות',
    },
  };

  const t = content[language];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Simple staggered entrance animation
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // 1. Logo
      tl.fromTo(
        logoRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1 },
        0.3
      );

      // 2. Headline
      tl.fromTo(
        headlineRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2 },
        0.5
      );

      // 3. Subheadline
      tl.fromTo(
        taglineRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1 },
        0.8
      );

      // 4. Description
      tl.fromTo(
        descriptionRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        1
      );

      // 5. Buttons
      tl.fromTo(
        ctaRef.current.children,
        { opacity: 0, y: 20, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.1 },
        1.2
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Clean gradient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0A0F1A] to-black"></div>
      
      {/* Subtle ambient light */}
      <div
        ref={backgroundRef}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4DA8FF]/10 rounded-full filter blur-[120px]"
      ></div>
      
      {/* Content */}
      <div className="container-jumind relative z-10">
        <div className="flex flex-col items-center justify-center min-h-screen py-32 px-4 md:px-6 text-center">
          

          {/* Headline - Much Smaller */}
          <h1
            ref={headlineRef}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 md:mb-12 leading-[1.1] tracking-tight opacity-0"
          >
            {t.headline}
          </h1>

          {/* Subheadline */}
          <p
            ref={taglineRef}
            className="text-lg md:text-xl lg:text-2xl text-white/70 max-w-3xl mb-6 md:mb-8 leading-relaxed opacity-0"
          >
            {t.subheadline}
          </p>

          {/* Description */}
          <p
            ref={descriptionRef}
            className="text-sm md:text-base text-white/50 mb-12 md:mb-16 font-medium opacity-0"
          >
            {t.description}
          </p>

          {/* CTA Buttons */}
          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a 
              href="#contact" 
              className="group px-8 py-4 bg-white text-black rounded-full font-bold text-sm md:text-base hover:bg-white/90 hover:scale-105 transition-all duration-300 opacity-0"
            >
              <span className="flex items-center justify-center gap-2">
                {t.ctaPrimary}
                <svg 
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
            <a 
              href="#projects" 
              className="group px-8 py-4 border-2 border-white/30 text-white rounded-full font-bold text-sm md:text-base hover:border-white hover:bg-white/10 hover:scale-105 transition-all duration-300 opacity-0"
            >
              <span className="flex items-center justify-center gap-2">
                {t.ctaSecondary}
                <svg 
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

