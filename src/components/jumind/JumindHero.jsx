import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';

export default function JumindHero() {
  const { language } = useLanguage();

  const content = {
    en: {
      tagline: 'Full-Stack Development & AI Solutions',
      headline1: 'Intelligent Systems.',
      headline2: 'Built Fast.',
      description: 'We build web applications, mobile apps, AI agents, automation systems, and custom software solutions. From SaaS platforms to enterprise systems, we deliver cutting-edge technology at unprecedented speed.',
      ctaPrimary: 'Let\'s Build Together',
      ctaSecondary: 'View Our Work',
      stat1Label: 'Faster Delivery',
      stat2Label: 'AI Powered',
      stat3Label: 'Custom Built',
      scrollText: 'Scroll to explore',
    },
    he: {
      tagline: 'פיתוח Full-Stack ופתרונות AI',
      headline1: 'מערכות חכמות.',
      headline2: 'נבנות מהר.',
      description: 'אנחנו בונים אפליקציות ווב, אפליקציות מובייל, סוכני AI, מערכות אוטומציה ופתרונות תוכנה מותאמים אישית. מפלטפורמות SaaS למערכות ארגוניות, אנחנו מספקים טכנולוגיה מתקדמת במהירות חסרת תקדים.',
      ctaPrimary: 'בוא נבנה ביחד',
      ctaSecondary: 'צפה בעבודות',
      stat1Label: 'אספקה מהירה יותר',
      stat2Label: 'מונע בינה מלאכותית',
      stat3Label: 'בנוי בהתאמה אישית',
      scrollText: 'גלול למטה',
    },
  };

  const t = content[language];
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-20 -left-20 w-96 h-96 bg-[#4DA8FF] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-[#1E86F7] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
      
      {/* Content */}
      <div className="container-jumind relative z-10">
        <div className="text-center max-w-5xl mx-auto space-y-12">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="inline-block"
          >
            <div className="relative">
              <h1 className="text-8xl md:text-9xl font-display font-black tracking-tighter text-[#0A0A0A] mb-4">
                JU-MIND
              </h1>
              <div className="absolute -inset-4 bg-gradient-to-r from-[#4DA8FF]/20 to-[#1E86F7]/20 blur-2xl -z-10"></div>
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xl md:text-2xl font-medium text-[#C9D1D9] tracking-wide">
              {t.tagline}
            </p>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="heading-jumind-xl mb-8">
              {t.headline1}
              <br />
              <span className="text-gradient-jumind">{t.headline2}</span>
            </h2>
          </motion.div>

          {/* Subheadline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-lg md:text-xl leading-relaxed text-[#C9D1D9]">
              {t.description}
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
          >
            <a href="#contact" className="btn-jumind-primary">
              {t.ctaPrimary}
              <svg className={`w-5 h-5 ${language === 'he' ? 'mr-2' : 'ml-2'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={language === 'he' ? 'M7 16l-4-4m0 0l4-4m-4 4h18' : 'M17 8l4 4m0 0l-4 4m4-4H3'} />
              </svg>
            </a>
            <a href="#projects" className="btn-jumind-secondary">
              {t.ctaSecondary}
            </a>
          </motion.div>

          {/* Stats or Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="pt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient-jumind mb-2">10x</div>
              <div className="text-sm text-[#C9D1D9]">{t.stat1Label}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient-jumind mb-2">24/7</div>
              <div className="text-sm text-[#C9D1D9]">{t.stat2Label}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient-jumind mb-2">100%</div>
              <div className="text-sm text-[#C9D1D9]">{t.stat3Label}</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-[#C9D1D9]">
          <span className="text-sm">{t.scrollText}</span>
          <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}

