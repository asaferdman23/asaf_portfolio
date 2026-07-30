import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useLanguage } from '../../contexts/LanguageContext';
import { theme } from '../../lib/theme';
import { animateSectionEntry, staggerCards, createHoverGlow, createCardTilt } from '../../lib/gsapPremium';

const services = [
  {
    icon: '🌐',
    titleEn: 'Landing Pages That Convert',
    titleHe: 'דפי נחיתה שמייצרים לידים',
    descriptionEn: 'Fast, focused landing pages for campaigns, products, and service offers. Clear positioning, strong CTAs, tracking, and lead capture.',
    descriptionHe: 'דפי נחיתה מהירים ומדויקים לקמפיינים, מוצרים ושירותים. מסר חד, הנעה לפעולה, מדידה מסודרת ואיסוף לידים.',
  },
  {
    icon: '📱',
    titleEn: 'Custom Web & Mobile Apps',
    titleHe: 'אפליקציות ווב ומובייל מותאמות',
    descriptionEn: 'Custom products, MVPs, SaaS platforms, client portals, and mobile experiences built around the exact workflow your business needs.',
    descriptionHe: 'מוצרי MVP, פלטפורמות SaaS, פורטלים ללקוחות וחוויות מובייל שנבנים סביב הצורך והתהליך האמיתי של העסק.',
  },
  {
    icon: '🤖',
    titleEn: 'AI Agents',
    titleHe: 'סוכני AI לעסק',
    descriptionEn: 'Custom agents for sales, support, onboarding, research, and internal operations. Built with guardrails, memory, tools, and human handoff.',
    descriptionHe: 'סוכני AI למכירות, תמיכה, קליטת לקוחות, מחקר ותפעול פנימי. עם כלים, זיכרון, גבולות ברורים והעברה לנציג אנושי כשצריך.',
  },
  {
    icon: '⚡',
    titleEn: 'AI Automation Sprints',
    titleHe: 'אוטומציות AI',
    descriptionEn: 'We map one expensive manual workflow and ship a working automation with Make, Zapier, custom APIs, CRM updates, alerts, and reporting.',
    descriptionHe: 'ממפים תהליך ידני שגוזל זמן ובונים אוטומציה שעובדת בפועל עם Make, Zapier, חיבורי API, עדכוני CRM, התראות ודוחות.',
  },
  {
    icon: '📊',
    titleEn: 'Internal Tools & Dashboards',
    titleHe: 'כלים פנימיים ודשבורדים',
    descriptionEn: 'Operational dashboards, admin panels, lead systems, analytics views, and internal portals that give teams one reliable source of truth.',
    descriptionHe: 'דשבורדים תפעוליים, מערכות ניהול, מערכות לידים, אנליטיקות ופורטלים פנימיים שנותנים לצוות מקור מידע אחד וברור.',
  },
  {
    icon: '🛠️',
    titleEn: 'AI Full-Stack Systems',
    titleHe: 'מערכות AI מקצה לקצה',
    descriptionEn: 'Production-ready AI apps with frontend, backend, database, auth, payments, model integrations, and admin dashboards.',
    descriptionHe: 'אפליקציות AI מוכנות לפרודקשן עם ממשק משתמש, שרת, דאטהבייס, הרשאות, תשלומים, חיבורי מודלים ודשבורדי ניהול.',
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
      badge: 'WHAT WE IMPLEMENT',
      title: 'AI Agency Services',
      description: 'We turn your freelance-proven capabilities into practical offers: automations, AI agents, conversion landing pages, and full-stack AI systems that solve real operational problems.',
    },
    he: {
      badge: 'מה אנחנו בונים',
      title: 'שירותי AI לעסקים',
      description: 'אנחנו הופכים ניסיון מעשי באוטומציות, סוכני AI, דפי נחיתה ומערכות פול-סטאק לפתרונות שעוזרים לעסק לחסוך זמן, לטפל ביותר לידים ולעבוד חכם יותר.',
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
              ? 'לא בטוחים איפה AI יכול לחסוך לכם זמן או כסף? נתחיל באבחון קצר ונמצא את התהליך שבו הערך העסקי הכי ברור.'
              : 'Not sure where AI can save time or money? We start with a short audit and find the workflow with the clearest return.'}
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
            {language === 'he' ? 'קבעו שיחה' : 'Book an AI Audit'}
          </a>
        </div>
      </div>
    </section>
  );
}
