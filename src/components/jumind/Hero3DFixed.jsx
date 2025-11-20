import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useLanguage } from '../../contexts/LanguageContext';
import { theme } from '../../lib/theme';

/**
 * Premium Hero Section with CSS 3D (No Library Conflicts)
 * Awwwards-level design with pure CSS & GSAP
 */
export default function Hero3DFixed() {
  const { language } = useLanguage();
  
  // Refs for GSAP animations
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const headlineRef = useRef(null);
  const subheadlineRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonsRef = useRef(null);
  const sphere3DRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const content = {
    en: {
      badge: 'AI-POWERED STUDIO',
      headline: 'Building The Future of Digital Products',
      subheadline: 'Transform Your Vision Into Reality',
      description: 'We create intelligent web applications, mobile experiences, and AI-powered systems that drive exponential business growth.',
      ctaPrimary: 'Start Your Project',
      ctaSecondary: 'Explore Our Work',
    },
    he: {
      badge: 'סטודיו מבוסס AI',
      headline: 'בונים את העתיד של מוצרים דיגיטליים',
      subheadline: 'הופכים את החזון שלכם למציאות',
      description: 'אנחנו יוצרים אפליקציות ווב חכמות, חוויות מובייל ומערכות מבוססות AI שמניעות צמיחה עסקית משמעותית.',
      ctaPrimary: 'התחילו פרויקט',
      ctaSecondary: 'צפו בעבודות',
    },
  };

  const t = content[language];

  // GSAP Entrance Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' }
      });

      tl.from(headlineRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
      }, 0.3)
      .from(subheadlineRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
      }, 0.6)
      .from(descriptionRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
      }, 0.9)
      .from(buttonsRef.current.children, {
        y: 30,
        opacity: 0,
        scale: 0.9,
        duration: 0.6,
        stagger: 0.15,
      }, 1.2)
      .from(sphere3DRef.current, {
        scale: 0.5,
        opacity: 0,
        duration: 1.5,
        ease: 'back.out(1.7)',
      }, 0.5);

    }, heroRef);

    return () => ctx.revert();
  }, [language]);

  // Mouse Parallax Effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xPos = (clientX / innerWidth - 0.5) * 30;
      const yPos = (clientY / innerHeight - 0.5) * 30;
      
      setMousePosition({ x: xPos, y: yPos });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animate 3D sphere rotation
  useEffect(() => {
    if (!sphere3DRef.current) return;

    const animate = () => {
      gsap.to(sphere3DRef.current, {
        rotateY: '+=360',
        rotateX: '+=180',
        duration: 20,
        ease: 'none',
        repeat: -1,
      });
    };

    animate();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ 
        background: `linear-gradient(135deg, ${theme.colors.dark[900]} 0%, ${theme.colors.dark[700]} 100%)` 
      }}
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(${theme.colors.electric[500]}22 1px, transparent 1px),
              linear-gradient(90deg, ${theme.colors.electric[500]}22 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite',
          }}
        />
      </div>

      {/* Radial Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 70% 50%, ${theme.colors.electric[500]}15 0%, transparent 70%)`,
        }}
      />

      <div className="container-jumind relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen py-24 lg:py-32">
          
          {/* LEFT: Content */}
          <div
            ref={contentRef}
            className={`space-y-8 ${language === 'he' ? 'lg:order-2 text-right' : 'lg:order-1'}`}
          >
            {/* Badge */}
            <div className="inline-block">
              <div
                className="px-4 py-2 rounded-full text-xs font-bold tracking-[0.2em] uppercase"
                style={{
                  background: theme.effects.glass.background,
                  border: theme.effects.glass.border,
                  backdropFilter: theme.effects.glass.backdropFilter,
                  color: theme.colors.electric[500],
                }}
              >
                {t.badge}
              </div>
            </div>

            {/* Headline */}
            <h1
              ref={headlineRef}
              className="font-black leading-[1.05] tracking-tight"
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                color: theme.colors.white,
              }}
            >
              {t.headline}
            </h1>

            {/* Subheadline with Gradient */}
            <h2
              ref={subheadlineRef}
              className="text-2xl md:text-3xl lg:text-4xl font-bold"
              style={{
                background: theme.colors.electric.gradient,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {t.subheadline}
            </h2>

            {/* Description */}
            <p
              ref={descriptionRef}
              className="text-lg md:text-xl leading-relaxed"
              style={{ color: theme.colors.gray[300] }}
            >
              {t.description}
            </p>

            {/* CTA Buttons */}
            <div
              ref={buttonsRef}
              className={`flex flex-col sm:flex-row gap-4 ${language === 'he' ? 'sm:justify-end' : ''}`}
            >
              <a
                href="#contact"
                className="group relative px-8 py-4 rounded-full font-bold text-base overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95"
                style={{
                  background: theme.colors.electric.gradient,
                  color: theme.colors.white,
                  boxShadow: theme.effects.glow.medium,
                }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {t.ctaPrimary}
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>

              <a
                href="#projects"
                className="group px-8 py-4 rounded-full font-bold text-base border-2 transition-all duration-300 hover:scale-105 active:scale-95"
                style={{
                  borderColor: theme.colors.electric[500],
                  color: theme.colors.white,
                  background: 'transparent',
                }}
              >
                <span className="flex items-center justify-center gap-2">
                  {t.ctaSecondary}
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </a>
            </div>
          </div>

          {/* RIGHT: CSS 3D Sphere */}
          <div
            className={`relative h-[400px] md:h-[500px] lg:h-[600px] ${language === 'he' ? 'lg:order-1' : 'lg:order-2'}`}
            style={{
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
              transition: 'transform 0.3s ease-out',
            }}
          >
            {/* Glow Effect Behind 3D */}
            <div
              className="absolute inset-0 blur-3xl opacity-60"
              style={{
                background: `radial-gradient(circle, ${theme.colors.electric[500]}40 0%, transparent 70%)`,
              }}
            />
            
            {/* CSS 3D Sphere */}
            <div
              ref={sphere3DRef}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              style={{
                width: '400px',
                height: '400px',
                perspective: '1000px',
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Main Sphere */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: `
                    radial-gradient(circle at 30% 30%, ${theme.colors.electric[500]}, ${theme.colors.electric[400]})
                  `,
                  boxShadow: `
                    0 0 60px ${theme.colors.electric[500]}80,
                    0 0 120px ${theme.colors.electric[500]}40,
                    inset 0 0 60px ${theme.colors.electric[400]}40
                  `,
                  animation: 'pulse 4s ease-in-out infinite',
                }}
              />
              
              {/* Inner Glow Layer */}
              <div
                className="absolute inset-[10%] rounded-full"
                style={{
                  background: `radial-gradient(circle, ${theme.colors.electric[400]}60, transparent)`,
                  animation: 'pulseReverse 3s ease-in-out infinite',
                }}
              />
              
              {/* Orbiting Particles */}
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-3 h-3 rounded-full"
                  style={{
                    background: theme.colors.electric[500],
                    top: '50%',
                    left: '50%',
                    boxShadow: `0 0 20px ${theme.colors.electric[500]}`,
                    animation: `orbit${i} ${8 + i * 2}s linear infinite`,
                    animationDelay: `${i * 0.5}s`,
                  }}
                />
              ))}
            </div>

            {/* Floating Particles Background */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(30)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    background: theme.colors.electric[500],
                    opacity: Math.random() * 0.5,
                    animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 2}s`,
                  }}
                />
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <span className="text-xs uppercase tracking-widest" style={{ color: theme.colors.gray[400] }}>
          {language === 'he' ? 'גלול למטה' : 'Scroll Down'}
        </span>
        <div className="w-6 h-10 border-2 rounded-full flex items-start justify-center p-2" style={{ borderColor: theme.colors.gray[400] }}>
          <div
            className="w-1 h-2 rounded-full animate-bounce"
            style={{ background: theme.colors.electric[500] }}
          />
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.8; }
        }
        
        @keyframes pulseReverse {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(0.95); opacity: 1; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); opacity: 0.3; }
          50% { transform: translateY(-20px); opacity: 0.6; }
        }
        
        ${[...Array(8)].map((_, i) => `
          @keyframes orbit${i} {
            0% {
              transform: translate(-50%, -50%) rotate(${i * 45}deg) translateX(200px) rotate(-${i * 45}deg);
            }
            100% {
              transform: translate(-50%, -50%) rotate(${i * 45 + 360}deg) translateX(200px) rotate(-${i * 45 + 360}deg);
            }
          }
        `).join('\n')}
      `}</style>
    </section>
  );
}

