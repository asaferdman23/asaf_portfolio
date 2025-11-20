import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useLanguage } from '../../contexts/LanguageContext';
import { theme } from '../../lib/theme';
import { animateSectionEntry, staggerCards, createHoverGlow, createCardTilt } from '../../lib/gsapPremium';

const services = [
  {
    icon: '🌐',
    titleEn: 'Web Applications',
    titleHe: 'אפליקציות ווב',
    descriptionEn: 'Lightning-fast, scalable web apps built with React, Node.js, and cutting-edge frameworks. From MVP to enterprise-grade SaaS platforms.',
    descriptionHe: 'אפליקציות ווב מהירות ומדרגיות עם React, Node.js וטכנולוגיות מתקדמות. מ-MVP ועד פלטפורמות SaaS ארגוניות.',
  },
  {
    icon: '📱',
    titleEn: 'Mobile Apps',
    titleHe: 'אפליקציות מובייל',
    descriptionEn: 'Native iOS & Android or cross-platform with React Native. Beautiful, performant mobile experiences that users love.',
    descriptionHe: 'אפליקציות iOS ו-Android נייטיביות או חוצות-פלטפורמות עם React Native. חוויות מובייל יפות ומהירות שמשתמשים אוהבים.',
  },
  {
    icon: '🤖',
    titleEn: 'AI Agents',
    titleHe: 'סוכני AI',
    descriptionEn: 'Intelligent AI agents that automate workflows, handle customer interactions, and make data-driven decisions 24/7.',
    descriptionHe: 'סוכני AI חכמים שמבצעים אוטומציה של תהליכים, מטפלים בלקוחות ומקבלים החלטות מבוססות נתונים 24/7.',
  },
  {
    icon: '⚡',
    titleEn: 'Automation',
    titleHe: 'אוטומציה',
    descriptionEn: 'Streamline operations with Make, Zapier, and custom API integrations. Connect your tools and eliminate repetitive work.',
    descriptionHe: 'ייעול תהליכים עם Make, Zapier ואינטגרציות API מותאמות אישית. חיבור בין הכלים שלכם וביטול עבודה חוזרת.',
  },
  {
    icon: '📊',
    titleEn: 'Analytics Dashboards',
    titleHe: 'דשבורדים',
    descriptionEn: 'Real-time dashboards and data visualization. Transform complex data into clear, actionable business insights.',
    descriptionHe: 'דשבורדים בזמן אמת וויזואליזציה של נתונים. הפיכת נתונים מורכבים לתובנות עסקיות ברורות.',
  },
  {
    icon: '🛠️',
    titleEn: 'Custom Solutions',
    titleHe: 'פתרונות מותאמים',
    descriptionEn: 'Bespoke enterprise solutions, CRM systems, and specialized tools built precisely for your unique needs.',
    descriptionHe: 'פתרונות ארגוניים ייחודיים, מערכות CRM וכלים מתמחים שנבנים בדיוק לפי הצרכים הייחודיים שלכם.',
  },
];

export default function ServicesPremium() {
  const { language } = useLanguage();
  
  // Refs
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  const content = {
    en: {
      badge: 'WHAT WE BUILD',
      title: 'Complete Technology Solutions',
      subtitle: 'From Concept to Launch',
      description: 'We deliver full-stack solutions that drive real business results. Our expertise spans web, mobile, AI, and automation.',
    },
    he: {
      badge: 'מה אנחנו בונים',
      title: 'פתרונות טכנולוגיים מלאים',
      subtitle: 'מרעיון להשקה',
      description: 'אנחנו מספקים פתרונות מלאים שמניעים תוצאות עסקיות אמיתיות. המומחיות שלנו משתרעת על ווב, מובייל, AI ואוטומציה.',
    },
  };

  const t = content[language];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Add hover effects to each card
      const cleanups = [];
      cardsRef.current.forEach((card) => {
        if (card) {
          cleanups.push(createHoverGlow(card, theme.colors.electric[500]));
          cleanups.push(createCardTilt(card, 5));
        }
      });

      return () => {
        cleanups.forEach((cleanup) => cleanup && cleanup());
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: theme.colors.dark[800] }}
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(${theme.colors.electric[500]}33 1px, transparent 1px),
              linear-gradient(90deg, ${theme.colors.electric[500]}33 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Gradient Overlay */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent 0%, ${theme.colors.electric[500]} 50%, transparent 100%)`,
        }}
      />

      <div className="container-jumind relative z-10">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 md:mb-24 ${language === 'he' ? 'rtl' : ''}`}
        >
          {/* Title */}
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-4"
            style={{ color: theme.colors.white }}
          >
            {t.title}
          </h2>

          {/* Subtitle with Gradient */}
          <p
            className="text-2xl md:text-3xl font-bold mb-6"
            style={{
              background: theme.colors.electric.gradient,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {t.subtitle}
          </p>

          {/* Description */}
          <p
            className="text-lg md:text-xl max-w-3xl mx-auto"
            style={{ color: theme.colors.gray[300] }}
          >
            {t.description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group relative p-8 rounded-2xl transition-all duration-300"
              style={{
                background: theme.effects.glass.background,
                border: theme.effects.glass.border,
                backdropFilter: theme.effects.glass.backdropFilter,
              }}
            >
              {/* Icon */}
              <div
                className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300"
                style={{
                  filter: `drop-shadow(0 0 20px ${theme.colors.electric[500]}80)`,
                }}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3
                className="text-2xl md:text-3xl font-bold mb-4"
                style={{ color: theme.colors.white }}
              >
                {language === 'he' ? service.titleHe : service.titleEn}
              </h3>

              {/* Description */}
              <p
                className="leading-relaxed"
                style={{ color: theme.colors.gray[300] }}
              >
                {language === 'he' ? service.descriptionHe : service.descriptionEn}
              </p>

              {/* Hover Line */}
              <div
                className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500"
                style={{
                  background: theme.colors.electric.gradient,
                }}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 md:mt-24">
          <p
            className="text-lg md:text-xl mb-8"
            style={{ color: theme.colors.gray[300] }}
          >
            {language === 'he'
              ? 'לא מצאתם בדיוק מה שחיפשתם? אנחנו מתמחים בפיתוח פתרונות ייחודיים.'
              : 'Don\'t see what you need? We specialize in custom solutions for unique challenges.'}
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 rounded-full font-bold text-base transition-all duration-300 hover:scale-105 active:scale-95"
            style={{
              background: theme.colors.electric.gradient,
              color: theme.colors.white,
              boxShadow: theme.effects.glow.medium,
            }}
          >
            {language === 'he' ? 'בואו נדבר' : 'Let\'s Talk'}
          </a>
        </div>
      </div>
    </section>
  );
}

