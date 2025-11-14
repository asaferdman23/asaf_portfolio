import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';

export default function JumindFounder() {
  const { language } = useLanguage();

  const content = {
    en: {
      badge: 'Founder & CTO',
      name: 'Asaf Erdman',
      title: 'The founder behind every line of code',
      description: 'Asaf personally leads every Ju-Mind project—from product strategy and architecture to code reviews and deployment. He brings a unique blend of business intuition, startup energy, and senior engineering standards to every solution we deliver.',
      pills: ['CTO On-Demand', '4+ Years Experience', 'Dozens of Live Products'],
    },
    he: {
      badge: 'Founder & CTO',
      name: 'אסף ארדמן',
      title: 'המייסד שמוביל כל שורת קוד',
      description: 'אסף מוביל אישית כל פרויקט ב-Ju-Mind – מאסטרטגיית המוצר והארכיטקטורה ועד סקירת הקוד והעלייה לענן. הוא מביא שילוב ייחודי של חשיבה עסקית, אנרגיה של סטארטאפ וסטנדרט הנדסי בכל פתרון שאנחנו מספקים.',
      pills: ['CTO לפי דרישה', '4+ שנות ניסיון', 'עשרות מוצרים בפרודקשן'],
    },
  };

  const t = content[language];

  return (
    <section className="section-jumind bg-gradient-to-b from-gray-50 to-white">
      <div className="container-jumind">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-6 py-2 bg-[#4DA8FF]/10 rounded-full mb-6">
            <span className="text-[#1E86F7] font-semibold text-sm tracking-wide uppercase">
              {language === 'he' ? 'המייסד' : 'Meet The Founder'}
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="card-jumind-glow max-w-5xl mx-auto"
        >
          <div className="flex flex-col lg:flex-row items-center gap-10 p-8 lg:p-12">
            {/* Photo */}
            <div className="relative w-full max-w-xs lg:max-w-sm flex-shrink-0">
              <div className="w-full aspect-square rounded-3xl overflow-hidden shadow-2xl border-2 border-[#4DA8FF]/20">
                <img
                  src="/assets/IMG_1553.jpeg"
                  alt={`${t.name} - Founder & CTO`}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#4DA8FF] to-[#1E86F7] text-white text-xs font-bold px-6 py-2 rounded-full shadow-xl uppercase tracking-widest">
                {t.badge}
              </div>
            </div>

            {/* Content */}
            <div className={`text-center ${language === 'he' ? 'lg:text-right' : 'lg:text-left'} space-y-6 flex-1`}>
              <p className="text-sm uppercase tracking-widest text-[#4DA8FF] font-bold">
                {t.name}
              </p>
              <h3 className="text-3xl md:text-4xl font-bold text-[#0A0A0A] leading-snug">
                {t.title}
              </h3>
              <p className="text-lg text-[#C9D1D9] leading-relaxed">
                {t.description}
              </p>
              <div className={`flex flex-wrap ${language === 'he' ? 'justify-center lg:justify-end' : 'justify-center lg:justify-start'} gap-3`}>
                {t.pills.map((pill) => (
                  <span
                    key={pill}
                    className="px-4 py-2 bg-white border-2 border-[#4DA8FF]/30 rounded-full text-sm font-semibold text-[#0A0A0A] hover:bg-[#4DA8FF]/10 transition-colors"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

