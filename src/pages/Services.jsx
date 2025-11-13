import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import Section from '../components/Section';
import { fadeInUp, staggerContainer, hoverScale } from '../lib/motion';

export default function Services() {
  const services = [
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'אתרי פרימיום ואפליקציות ווב',
      description: 'עיצוב חוויית משתמש, פיתוח React/Next.js בעברית וחיבור לכלי שיווק ואוטומציה - הכל באחריות Erdmind.',
      features: [
        'SaaS ואתרי תדמית עם עיצוב ייחודי',
        'Headless CMS ותשתיות מאובטחות',
        'SEO טכני ומדידה מובנית',
        'התאמה מלאה למובייל ול-RTL',
        'CI/CD ומוניטורינג מובנה',
        'הדרכה וצוות תמיכה'
      ],
      technologies: ['React', 'Next.js', 'Headless CMS', 'Tailwind', 'Vercel'],
      pricing: 'החל מ-₪18,000'
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: 'אפליקציות מובייל',
      description: 'פיתוח React Native/Expo עם חוויית משתמש נייטיבית, בדיקות מלאות והעלאה לחנויות Apple ו-Google.',
      features: [
        'UI/UX מותאם לשתי הפלטפורמות',
        'שכבות אבטחה והתחברות',
        'Push notifications והעברת נתונים',
        'אנליטיקה מובייל בזמן אמת',
        'תמיכה במצב Offline',
        'פריסה והדרכה לצוות'
      ],
      technologies: ['React Native', 'Expo', 'Android', 'iOS', 'Firebase'],
      pricing: 'החל מ-₪28,000'
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'הטמעת AI ואוטומציה',
      description: 'בניית עוזרים חכמים, זרימות RAG ו-AI בעברית שמבינים את התהליכים שלכם ומתחברים למקורות המידע.',
      features: [
        'אינטגרציה ל-OpenAI/Azure ו-API ארגוניים',
        'עוזרי שירות ותמיכה בעברית',
        'תהליכי RAG למסמכים פנימיים',
        'אוטומציה בין צוותים וכלי SaaS',
        'מדידה ו-Insights בזמן אמת',
        'עמידה במדיניות אבטחת מידע'
      ],
      technologies: ['OpenAI', 'LangChain', 'Supabase', 'Pinecone', 'Azure'],
      pricing: 'החל מ-₪16,000'
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Backend ו-API',
      description: 'בניית שרותים מבוססי Node.js / NestJS, GraphQL ו-REST עם תיעוד מלא ואינטגרציה לכל מערכת.',
      features: [
        'ארכיטקטורת Microservices',
        'DB Design ו-Performance tuning',
        'אינטגרציות תשלום, CRM ו-ERP',
        'ניהול הרשאות ואבטחה (OAuth/SAML)',
        'תשתית בדיקות אוטומטית',
        'Observability ו-Alerts'
      ],
      technologies: ['Node.js', 'NestJS', 'PostgreSQL', 'MongoDB', 'GraphQL'],
      pricing: 'החל מ-₪14,000'
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      title: 'ענן ו-DevOps',
      description: 'פריסת תשתיות בענן, בניית CI/CD אוטומטי וניטור מלא - כדי שתוכלו להתמקד בליבה העסקית.',
      features: [
        'הקמה וניהול של AWS/Azure',
        'אבטחה, ניטור והתראות',
        'Docker/Kubernetes ו-Scaling',
        'CI/CD ללא Downtime',
        'גיבויים והתאוששות מאסון',
        'מסמכי Runbook והדרכה'
      ],
      technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform'],
      pricing: 'החל מ-₪9,000'
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'פיתוח MVP מהיר',
      description: 'חבילת השקה לסטארטאפים - מאיפיון חכם ועד מוצר עובד למשקיעים או לקוחות ראשונים תוך 4-8 שבועות.',
      features: [
        'סדנת Product קצרה',
        'UX/UI ומיתוג ראשוני',
        'אימות משתמשים ותשלומים',
        'חיבור לכלי ניתוח ושיווק',
        'תכנית פיתוח להמשך',
        'ליווי בהצגת המוצר'
      ],
      technologies: ['Next.js', 'Supabase', 'Stripe', 'Tailwind', 'Vercel'],
      pricing: 'החל מ-₪22,000'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'שיחת היכרות',
      description: 'מבינים יעדים, קהל ומדדים כבר בשיחה הראשונה (ללא עלות).'
    },
    {
      step: '02',
      title: 'הצעה ותכנון',
      description: 'מסמך תהליך, לוחות זמנים והשקעה מדויקת - נשלח אליכם תוך 48 שעות.'
    },
    {
      step: '03',
      title: 'פיתוח ושקיפות',
      description: 'ספרינטים קצרים, דמו שבועי וגישה לכלי המשימות כדי שתהיו בעניינים.'
    },
    {
      step: '04',
      title: 'השקה וליווי',
      description: 'עלייה חלקה לענן, מעקב מדדים ואפשרות לתחזוקה שוטפת וצוות on-call.'
    }
  ];

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-16 bg-gradient-to-br from-blue-50 via-white to-slate-50">
        <div className="container-custom relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">חבילות הפיתוח של Erdmind</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8">
              שירות מקצה לקצה - מחקר, UI/UX, פיתוח, DevOps והטמעת AI - שמותאם לשוק הישראלי ולצוות שלכם.
            </p>
            <motion.div {...hoverScale}>
              <Link to="/contact" className="btn btn-primary text-lg px-10 py-4 inline-block">
                להתחיל פרויקט
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <Section className="bg-white">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
          className="space-y-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={fadeInUp}
              custom={index}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <div className="text-blue-600 mb-6">{service.icon}</div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  {service.title}
                </h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="text-2xl font-bold text-blue-600 mb-6">
                  {service.pricing}
                </div>
                <motion.div {...hoverScale}>
                  <Link
                    to="/contact"
                    className="btn btn-primary inline-block"
                  >
                    לקבל הצעת מחיר
                  </Link>
                </motion.div>
              </div>
              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <div className="card p-8 bg-slate-50">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">מה מקבלים בחבילה</h3>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <svg className="w-6 h-6 text-green-500 ml-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Process */}
      <Section
        title="איך נראה התהליך"
        subtitle="ציר זמן שקוף שמתחיל בשיחת היכרות ומסתיים במוצר חי ומנוהל"
        className="bg-slate-100"
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {process.map((item, index) => (
            <motion.div
              key={item.step}
              variants={fadeInUp}
              custom={index}
              className="text-center"
            >
              <div className="text-6xl font-bold text-blue-600 mb-4 opacity-20">
                {item.step}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {item.title}
              </h3>
              <p className="text-slate-600">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* CTA */}
      <Section
        title="מוכנים להזניק את המוצר?"
        subtitle="שיחת ייעוץ ללא התחייבות • תגובה עד 24 שעות • הצעה שקופה בעברית"
        className="bg-gradient-to-br from-blue-600 to-blue-700 text-white"
        containerClassName="text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <motion.div {...hoverScale} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn bg-white text-blue-600 hover:bg-slate-100 text-lg px-10 py-4">
              לתאם שיחת ייעוץ
            </Link>
            <Link to="/projects" className="btn btn-ghost text-lg px-10 py-4 border-2 border-white hover:bg-white hover:text-blue-600">
              לראות פרויקטים חיים
            </Link>
          </motion.div>
        </motion.div>
      </Section>
    </PageTransition>
  );
}
