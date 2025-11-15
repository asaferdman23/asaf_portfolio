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
      stat1Label: 'Client Satisfaction',
      stat2Label: 'AI Powered',
      stat3Label: 'Support Available',
      scrollText: 'Scroll to explore',
    },
    he: {
      tagline: 'סטודיו לפיתוח מערכות תוכנה ואוטומציה מבוסס AI',
      headline1: 'בונים מערכות.',
      headline2: 'חכמות.',
      description: 'אנחנו בונים מערכות חכמות שמקדמות את העסק שלכם קדימה.',
      ctaPrimary: 'בואו נבנה ביחד',
      ctaSecondary: 'צפו בעבודות שלנו',
      stat1Label: 'שביעות רצון',
      stat2Label: 'תמיכה שוטפת 24/7',
      stat3Label: 'התאמה אישית מלאה',
      scrollText: 'גללו למטה לגלות עוד',
    },
  };

  const t = content[language];
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A] pt-32 md:pt-20 lg:pt-24">
      {/* Subtle gradient backdrop matching logo style */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#0f1419] to-[#0A0A0A]"></div>
      
      {/* Very subtle ambient glow - barely visible */}
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#00d4ff]/5 via-[#4DA8FF]/8 to-[#4169E1]/5 rounded-full filter blur-[120px] opacity-60"></div>
      
      {/* Subtle side accents */}
      <div className="absolute top-20 -left-40 w-[400px] h-[400px] bg-[#00d4ff]/3 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 -right-40 w-[400px] h-[400px] bg-[#4169E1]/3 rounded-full filter blur-3xl"></div>
      
      {/* Content */}
      <div className="container-jumind relative z-10">
        <div className="text-center max-w-6xl mx-auto flex flex-col items-center justify-center min-h-screen py-20 space-y-10 md:space-y-14">
          {/* Logo - THE Main Title - Naturally integrated */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative group inline-block">
              {/* Main Logo - transparent, perfectly integrated */}
              <img 
                src="/assets/jm_transparent.png" 
                alt="Ju-Mind - Intelligent Systems Built Fast" 
                className="h-48 md:h-64 lg:h-80 w-auto relative z-10 animate-float"
              />
              
              {/* Subtle ambient glow - just enough to make logo pop */}
              <div className="absolute -inset-16 bg-gradient-to-r from-[#00d4ff]/12 via-[#4DA8FF]/15 to-[#4169E1]/12 blur-[60px] opacity-70 group-hover:opacity-100 transition-opacity duration-1000"></div>
              
              {/* Very subtle reflection effect */}
              <div className="absolute -inset-8 bg-gradient-to-b from-transparent via-[#4DA8FF]/5 to-transparent blur-2xl"></div>
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="px-4"
          >
            <div className="inline-block px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <p className="text-base md:text-lg font-medium text-gray-300 tracking-wide">
                {t.tagline}
              </p>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="px-4"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white/90 leading-tight max-w-4xl mx-auto">
              {t.headline1}
              {' '}
              <span className="text-white/70">
                {t.headline2}
              </span>
            </h2>
          </motion.div>

          {/* Subheadline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-3xl mx-auto px-4"
          >
            <p className="text-sm md:text-base lg:text-lg leading-relaxed text-gray-400/80">
              {t.description}
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4 px-4"
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
            transition={{ duration: 0.8, delay: 1.0 }}
            className="w-full grid grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto px-4 pt-8"
          >
            <div className="text-center p-3 md:p-5 rounded-xl bg-white/3 backdrop-blur-sm border border-white/5 hover:border-white/10 hover:bg-white/5 transition-all duration-500 group">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white/80 group-hover:text-white mb-2 transition-colors">100%</div>
              <div className="text-xs md:text-sm text-gray-500 group-hover:text-gray-400 transition-colors">{t.stat1Label}</div>
            </div>
            <div className="text-center p-3 md:p-5 rounded-xl bg-white/3 backdrop-blur-sm border border-white/5 hover:border-white/10 hover:bg-white/5 transition-all duration-500 group">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white/80 group-hover:text-white mb-2 transition-colors">24/7</div>
              <div className="text-xs md:text-sm text-gray-500 group-hover:text-gray-400 transition-colors">{t.stat2Label}</div>
            </div>
            <div className="text-center p-3 md:p-5 rounded-xl bg-white/3 backdrop-blur-sm border border-white/5 hover:border-white/10 hover:bg-white/5 transition-all duration-500 group">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white/80 group-hover:text-white mb-2 transition-colors">100%</div>
              <div className="text-xs md:text-sm text-gray-500 group-hover:text-gray-400 transition-colors">{t.stat3Label}</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

