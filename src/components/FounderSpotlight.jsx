import { motion } from 'framer-motion';
import { fadeInUp } from '../lib/motion';
import { useLanguage } from '../contexts/LanguageContext';

export default function FounderSpotlight() {
  const { language } = useLanguage();

  const copy = {
    he: {
      badge: 'Founder & CTO',
      name: 'אסף ארדמן',
      title: 'המייסד שמוביל כל שורת קוד',
      description:
        'אסף מוביל אישית כל פרויקט ב-Erdmind – מאסטרטגיית המוצר והארכיטקטורה ועד סקירת הקוד והעלייה לענן. הוא מביא שילוב  של חשיבה עסקית, אנרגיה של סטארטאפ וסטנדרט הנדסי של ארגונים גלובליים.',
      pills: ['CTO On-Demand', '4+ שנות ניסיון', 'עשרות מוצרים בפרודקשן'],
    },
    en: {
      badge: 'Founder & CTO',
      name: 'Asaf Erdman',
      title: 'The founder behind every line of code',
      description:
        'Asaf personally leads every Erdmind engagement—from product strategy and architecture to code reviews and cloud launches. He blends business intuition with senior engineering rigor so you work with someone who speaks both boardroom and terminal.',
      pills: ['CTO On-Demand', '4+ years experience', 'Dozens of live products'],
    },
  };

  const t = copy[language];

  return (
    <section className="py-16 bg-gradient-premium">
      <div className="container-custom">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="card-premium flex flex-col lg:flex-row items-center gap-10 p-10 lg:p-14"
        >
          <div className="relative w-full max-w-sm">
            <div className="w-full aspect-square rounded-[32px] overflow-hidden shadow-2xl border border-white/40 bg-gradient-to-br from-slate-100 to-slate-200">
              <img
                src="/assets/IMG_1553.jpeg"
                alt={`${t.name} - Founder & CTO`}
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-xl uppercase tracking-[0.3em]">
              {t.badge}
            </div>
          </div>

          <div className="text-center lg:text-right space-y-4 max-w-2xl">
            <p className="text-sm uppercase tracking-[0.4em] text-blue-500 font-semibold">{t.name}</p>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 leading-snug">{t.title}</h3>
            <p className="text-slate-600 leading-relaxed text-lg">{t.description}</p>
            <div className="flex flex-wrap justify-center lg:justify-end gap-3 text-sm">
              {t.pills.map((pill) => (
                <span key={pill} className="chip">
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
