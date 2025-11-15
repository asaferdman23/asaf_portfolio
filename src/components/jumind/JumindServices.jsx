import { motion } from 'framer-motion';
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

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

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
    <section id="services" className="section-jumind bg-gradient-to-b from-white to-gray-50">
      <div className="container-jumind">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-6 py-2 bg-[#4DA8FF]/10 rounded-full mb-6">
            <span className="text-[#1E86F7] font-semibold text-sm tracking-wide uppercase">{t.badge}</span>
          </div>
          <h2 className="heading-jumind-lg mb-6">
            {t.title1}
            <br />
            <span className="text-gradient-jumind">{t.title2}</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t.description}
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              className="card-jumind group"
            >
              {/* Icon */}
              <div className="icon-jumind text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-[#0A0A0A] mb-4">
                {language === 'he' ? service.titleHe : service.titleEn}
              </h3>

              {/* Description */}
              <p className="text-slate-600 leading-relaxed">
                {language === 'he' ? service.descriptionHe : service.descriptionEn}
              </p>

              {/* Hover Arrow */}
              <div className="mt-6 flex items-center text-[#4DA8FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm font-semibold mr-2">Learn More</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-slate-600 mb-8">
            {t.ctaText}
          </p>
          <a href="#contact" className="btn-jumind-secondary">
            {t.buttonText}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

