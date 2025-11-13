import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fadeInUp, staggerContainer } from '../lib/motion';
import { useLanguage } from '../contexts/LanguageContext';

export default function HeroPremium() {
  const { language } = useLanguage();

  const copy = {
    he: {
      headline1: 'אנחנו בונים חוויות דיגיטליות',
      headline2: 'שמדברות ומייצרות תוצאות',
      subheadline:
        'הסטודיו שלנו מוביל פרויקטים מקצה לקצה - מאיפיון ועד עלייה לענן - עם שילוב מדויק של עיצוב פרימיום, פיתוח מלא ולוגיקה עסקית לעסקים ישראליים.',
      features: [
        'תהליך פרימיום מותאם אישית',
        'הובלה טכנולוגית',
        'עלייה לפרודקשן תוך 4-8 שבועות',
      ],
      primaryCta: 'לתאם שיחת היכרות',
      secondaryCta: 'לראות את השירותים',
      stack: 'Stack מרכזי',
      scroll: 'גללו להמשך',
    },
    en: {
      badge: 'Available for new projects',
      headline1: 'Erdmind crafts premium digital products',
      headline2: 'with measurable business outcomes',
      subheadline:
        'Led personally by Asaf Erdman, our studio delivers strategy, design, engineering, and AI integrations with enterprise rigor and boutique speed.',
      features: [
        'Bespoke premium process',
        'Hands-on leadership by Asaf Erdman',
        'Go-live windows of 4-8 weeks',
      ],
      primaryCta: 'Book a discovery call',
      secondaryCta: 'Explore our services',
      stack: 'Core stack',
      scroll: 'Scroll to explore',
    },
  };

  const t = copy[language];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-slate-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-300/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <div className="container-custom relative z-10 py-32">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="text-center max-w-6xl mx-auto"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] tracking-tight"
          >
            <span className="text-gradient-premium">{t.headline1}</span>
            <br />
            <span className="text-slate-900">{t.headline2}</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-slate-600 mb-6 max-w-3xl mx-auto font-light leading-relaxed"
          >
            {t.subheadline}
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center justify-center gap-8 mb-12 text-sm text-slate-500"
          >
            {t.features.map((feature) => (
              <div key={feature} className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{feature}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/contact" className="btn btn-primary text-lg flex-row-reverse gap-2 group">
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              <span>{t.primaryCta}</span>
            </Link>

            <Link to="/services" className="btn btn-ghost text-lg flex-row-reverse gap-2 group">
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              <span>{t.secondaryCta}</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-12  w-full flex justify-center"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-slate-400"
        >
          <span className="text-sm font-medium">{t.scroll}</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
