import { useLanguage } from '../../contexts/LanguageContext';

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    titleEn: 'Web Applications',
    titleHe: 'אפליקציות ווב',
    descriptionEn: 'Full-stack web apps with React, Node.js, and modern frameworks. Scalable, secure, and lightning-fast SaaS platforms.',
    descriptionHe: 'אפליקציות ווב מלאות עם React, Node.js וטכנולוגיות מודרניות. פלטפורמות SaaS מאובטחות, מהירות וניתנות להרחבה.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    titleEn: 'Mobile Applications',
    titleHe: 'אפליקציות מובייל',
    descriptionEn: 'Native iOS and Android apps, or cross-platform solutions with React Native. Beautiful, performant mobile experiences.',
    descriptionHe: 'אפליקציות iOS ו-Android נייטיביות, או פתרונות חוצי-פלטפורמות עם React Native. חוויות מובייל יפות ומהירות.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    titleEn: 'AI Agents',
    titleHe: 'סוכני בינה מלאכותית',
    descriptionEn: 'Custom AI agents that automate workflows, handle customer interactions, and make intelligent decisions 24/7.',
    descriptionHe: 'סוכני AI מותאמים אישית שמבצעים אוטומציה של תהליכים, מטפלים בלקוחות ומקבלים החלטות חכמות 24/7.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    titleEn: 'Automation & APIs',
    titleHe: 'אוטומציה וממשקי API',
    descriptionEn: 'Streamline operations with Make, Zapier, and custom API integrations. Connect your tools and eliminate manual work.',
    descriptionHe: 'ייעול תהליכים עם Make, Zapier ואינטגרציות API מותאמות אישית. חיבור בין הכלים שלכם וביטול עבודה ידנית.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    titleEn: 'Dashboards & Analytics',
    titleHe: 'דשבורדים ואנליטיקה',
    descriptionEn: 'Real-time dashboards and data visualization. Turn complex data into actionable business insights.',
    descriptionHe: 'דשבורדים בזמן אמת וויזואליזציה של נתונים. הפיכת נתונים מורכבים לתובנות עסקיות ברורות.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    titleEn: 'Custom Software',
    titleHe: 'תוכנה מותאמת אישית',
    descriptionEn: 'Bespoke enterprise solutions, CRM systems, and specialized tools built exactly to your specifications.',
    descriptionHe: 'פתרונות ארגוניים ייחודיים, מערכות CRM וכלים מתמחים שנבנים בדיוק לפי הדרישות שלכם.'
  }
];

export default function JumindServices() {
  const { language } = useLanguage();

  const content = {
    en: {
      badge: 'What We Build',
      title1: 'Complete Technology',
      title2: 'Solutions',
      description: 'From web and mobile apps to AI agents and custom software - we build everything your business needs to thrive',
      ctaText: 'Don\'t see what you\'re looking for? We build custom solutions for unique challenges.',
      buttonText: 'Talk to Our Team',
    },
    he: {
      badge: 'מה אנחנו בונים',
      title1: 'פתרונות טכנולוגיים',
      title2: 'מקצה לקצה',
      description: 'מאפליקציות ווב ומובייל, דרך סוכני בינה מלאכותית ועד תוכנה מותאמת אישית - אנחנו בונים כל מה שהעסק שלכם צריך כדי לצמוח ולהצליח',
      ctaText: 'לא מצאתם בדיוק מה שחיפשתם? אנחנו מתמחים בפיתוח פתרונות ייחודיים לאתגרים מורכבים.',
      buttonText: 'בואו נדבר',
    },
  };

  const t = content[language];

  return (
    <section
      id="services"
      className="relative py-32 md:py-40 bg-black overflow-hidden"
      style={{ backgroundColor: '#000000' }}
    >
      {/* Solid background - no transparency */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f1419] via-black to-black"></div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
      
      <div className="container-jumind relative z-10">
        {/* Section Header - Professional */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {t.title1} <span className="text-white/40">{t.title2}</span>
          </h2>
          <p className="text-base md:text-lg text-white/50 max-w-2xl mx-auto">
            {t.description}
          </p>
        </div>

        {/* Services Grid - Minimal & Bold */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 md:p-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl hover:bg-white/10 hover:border-[#4DA8FF]/50 transition-all duration-500"
            >
              {/* Number */}
              <div className="absolute top-6 right-6 text-5xl font-black text-white/5 group-hover:text-[#4DA8FF]/10 transition-colors">
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Title - BOLD */}
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-[#4DA8FF] transition-colors leading-tight">
                {language === 'he' ? service.titleHe : service.titleEn}
              </h3>

              {/* Description */}
              <p className="text-white/60 leading-relaxed text-sm md:text-base">
                {language === 'he' ? service.descriptionHe : service.descriptionEn}
              </p>

              {/* Hover Indicator */}
              <div className="mt-6 w-12 h-1 bg-[#4DA8FF] opacity-0 group-hover:opacity-100 group-hover:w-20 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <p className="text-lg md:text-xl text-white/60 mb-8 max-w-2xl mx-auto">
            {t.ctaText}
          </p>
          <a 
            href="#contact" 
            className="inline-block px-8 py-4 bg-white text-[#0A0A0A] rounded-full font-bold text-sm md:text-base hover:bg-[#4DA8FF] hover:text-white transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[#4DA8FF]/50"
          >
            {t.buttonText}
            <svg className="w-5 h-5 inline-block ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

