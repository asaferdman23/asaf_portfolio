import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useLanguage } from '../../contexts/LanguageContext';
import { theme } from '../../lib/theme';
import { SplineScene } from '../SplineScene';

/**
 * Premium Hero with Real Spline 3D
 * Awwwards-level design
 */
export default function HeroSpline() {
  const { language } = useLanguage();
  
  // Refs for GSAP animations
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const subheadlineRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonsRef = useRef(null);
  const splineContainerRef = useRef(null);

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
      .from(splineContainerRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 1.5,
        ease: 'back.out(1.7)',
      }, 0.5);

    }, heroRef);

    return () => ctx.revert();
  }, [language]);

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen py-20 lg:py-32 pb-24 md:pb-32">
          
          {/* LEFT: Content */}
          <div
            className={`space-y-8 ${language === 'he' ? 'lg:order-2 text-right' : 'lg:order-1'}`}
          >
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

          {/* RIGHT: Spline 3D Scene */}
          <div
            ref={splineContainerRef}
            className={`relative h-[400px] md:h-[500px] lg:h-[600px] ${language === 'he' ? 'lg:order-1' : 'lg:order-2'}`}
          >
            {/* Glow Effect Behind 3D */}
            <div
              className="absolute inset-0 blur-3xl opacity-60 pointer-events-none"
              style={{
                background: `radial-gradient(circle, ${theme.colors.electric[500]}40 0%, transparent 70%)`,
              }}
            />
            
            {/* Spline 3D Scene */}
            <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>

            {/* Floating Particles for Extra Premium Feel */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 rounded-full animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    background: theme.colors.electric[500],
                    opacity: Math.random() * 0.5,
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${2 + Math.random() * 3}s`,
                  }}
                />
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 z-20">
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
    </section>
  );
}

