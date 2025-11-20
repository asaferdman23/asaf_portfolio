import { useEffect, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Environment } from '@react-three/drei';
import { gsap } from 'gsap';
import { useLanguage } from '../../contexts/LanguageContext';
import { theme } from '../../lib/theme';

/**
 * 3D Floating Sphere - Premium Interactive Element
 */
function FloatingSphere() {
  const meshRef = useRef();
  const materialRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    // Gentle rotation
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(t / 4) * 0.2;
      meshRef.current.rotation.y = Math.sin(t / 3) * 0.3;
      meshRef.current.rotation.z = Math.sin(t / 5) * 0.1;
    }
    
    // Pulsing distortion
    if (materialRef.current) {
      materialRef.current.distort = 0.4 + Math.sin(t) * 0.05;
    }
  });

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.6}
      floatIntensity={0.8}
      floatingRange={[-0.1, 0.1]}
    >
      <Sphere ref={meshRef} args={[1, 128, 128]} scale={2.4}>
        <MeshDistortMaterial
          ref={materialRef}
          color="#0DA4FF"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0}
          metalness={0.8}
        />
      </Sphere>
      
      {/* Inner Glow Sphere */}
      <Sphere args={[1, 64, 64]} scale={2.2}>
        <meshStandardMaterial
          color="#2B73FF"
          emissive="#2B73FF"
          emissiveIntensity={0.5}
          transparent
          opacity={0.3}
        />
      </Sphere>
    </Float>
  );
}

/**
 * 3D Scene Loader
 */
function Scene3D() {
  return (
    <Suspense fallback={null}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#0DA4FF" />
      <FloatingSphere />
      <Environment preset="city" />
    </Suspense>
  );
}

/**
 * Premium Hero Section with 3D Integration
 */
export default function Hero3D() {
  const { language } = useLanguage();
  
  // Refs for GSAP animations
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const headlineRef = useRef(null);
  const subheadlineRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonsRef = useRef(null);
  const canvasContainerRef = useRef(null);

  const content = {
    en: {
      badge: 'AI-POWERED STUDIO',
      headline: 'Building The Future of Digital Products',
      subheadline: 'Transform Your Vision Into Reality',
      description: 'We create intelligent web applications, mobile experiences, and AI-powered systems that drive exponential business growth.',
      ctaPrimary: 'Start Your Project',
      ctaSecondary: 'Explore Our Work',
      stats: [
        { value: '50+', label: 'Projects Delivered' },
        { value: '100%', label: 'Client Satisfaction' },
        { value: '24/7', label: 'Support' },
      ],
    },
    he: {
      badge: 'סטודיו מבוסס AI',
      headline: 'בונים את העתיד של מוצרים דיגיטליים',
      subheadline: 'הופכים את החזון שלכם למציאות',
      description: 'אנחנו יוצרים אפליקציות ווב חכמות, חוויות מובייל ומערכות מבוססות AI שמניעות צמיחה עסקית משמעותית.',
      ctaPrimary: 'התחילו פרויקט',
      ctaSecondary: 'צפו בעבודות',
      stats: [
        { value: '+50', label: 'פרויקטים שהושלמו' },
        { value: '100%', label: 'שביעות רצון לקוחות' },
        { value: '24/7', label: 'תמיכה' },
      ],
    },
  };

  const t = content[language];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' }
      });

      // Stagger entrance animation
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
      .from(canvasContainerRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 1.5,
        ease: 'back.out(1.7)',
      }, 0.5);

    }, heroRef);

    return () => ctx.revert();
  }, [language]);

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!canvasContainerRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xPos = (clientX / innerWidth - 0.5) * 20;
      const yPos = (clientY / innerHeight - 0.5) * 20;
      
      gsap.to(canvasContainerRef.current, {
        x: xPos,
        y: yPos,
        duration: 2,
        ease: 'power2.out',
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
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

          {/* RIGHT: 3D Canvas */}
          <div
            ref={canvasContainerRef}
            className={`relative h-[400px] md:h-[500px] lg:h-[600px] ${language === 'he' ? 'lg:order-1' : 'lg:order-2'}`}
          >
            {/* Glow Effect Behind 3D */}
            <div
              className="absolute inset-0 blur-3xl opacity-60"
              style={{
                background: `radial-gradient(circle, ${theme.colors.electric[500]}40 0%, transparent 70%)`,
              }}
            />
            
            {/* 3D Canvas */}
            <Canvas
              camera={{ position: [0, 0, 5], fov: 50 }}
              className="relative z-10"
              style={{ background: 'transparent' }}
            >
              <Scene3D />
            </Canvas>

            {/* Floating particles */}
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
    </section>
  );
}

