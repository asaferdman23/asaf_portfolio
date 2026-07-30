import { useLanguage } from '../../contexts/LanguageContext';

export default function JumindFounder() {
  const { language } = useLanguage();

  const content = {
    en: {
      badge: 'Founder & AI Builder',
      name: 'Asaf Erdman',
      title: 'One builder. No account managers, no handoffs.',
      description: 'Ju-Mind is founder-led by design. Asaf personally scopes, architects, builds, and ships every project — from AI agents and automations to full-stack systems. You talk directly to the person writing the code, which means faster decisions, no telephone-game between "sales" and "engineering," and a technical owner who is accountable for the system after launch, not just the pitch before it.',
      pills: ['AI Automation', 'AI Agents', 'Full-Stack AI Systems'],
    },
    he: {
      badge: 'מהנדס מייסד ומפתח מערכות AI',
      name: 'אסף ארדמן',
      title: 'מפתח אחד. בלי אנשי מכירות ובלי העברות בין גורמים.',
      description: 'אסף בעצמו מגדיר את ההיקף, בונה את הארכיטקטורה, מפתח ומעלה לאוויר כל פרויקט. אתם מדברים ישירות עם מי שכותב את הקוד, מה שאומר החלטות מהירות יותר, בלי "טלפון שבור" בין מכירות להנדסה, ובעל מקצוע אחד שאחראי על המערכת גם אחרי ההשקה - לא רק על המצגת לפני.',
      pills: ['אוטומציות AI', 'סוכני AI', 'מערכות AI פול-סטאק'],
    },
  };

  const t = content[language];

  return (
    <section className="section-jumind bg-gradient-to-b from-gray-50 to-white">
      <div className="container-jumind">
        <div
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
              <p className="text-lg text-slate-600 leading-relaxed">
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
        </div>
      </div>
    </section>
  );
}
