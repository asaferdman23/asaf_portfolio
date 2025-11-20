import { useLanguage } from '../../contexts/LanguageContext';

const reasons = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    titleEn: 'Speed',
    titleHe: 'מהירות',
    subtitleEn: 'Your Product Live in Weeks',
    subtitleHe: 'המוצר שלכם חי תוך שבועות',
    descriptionEn: 'Get to market before your competition. You receive a fully functional product faster than you thought possible, so you can start generating revenue and validating your idea immediately.',
    descriptionHe: 'הגיעו לשוק לפני המתחרים. אתם מקבלים מוצר פונקציונלי מלא מהר יותר ממה שחשבתם שאפשרי, כך שתוכלו להתחיל לייצר הכנסות ולאמת את הרעיון שלכם מיד.',
    featuresEn: [
      'First version in your hands within weeks',
      'Start earning revenue faster',
      'Test your market quickly',
      'Beat competitors to launch'
    ],
    featuresHe: [
      'גרסה ראשונה בידיים שלכם תוך שבועות',
      'התחילו להרוויח מהר יותר',
      'בדקו את השוק שלכם במהירות',
      'הקדימו מתחרים להשקה'
    ]
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    titleEn: 'Results',
    titleHe: 'תוצאות',
    subtitleEn: 'Built to Grow Your Business',
    subtitleHe: 'בנוי להצמיח את העסק שלכם',
    descriptionEn: 'You get a product that actually drives results. More customers, higher efficiency, increased revenue. Your system works for you 24/7, automating tasks and creating opportunities while you focus on strategy.',
    descriptionHe: 'אתם מקבלים מוצר שבאמת מניע תוצאות. יותר לקוחות, יעילות גבוהה יותר, הכנסות מוגברות. המערכת שלכם עובדת בשבילכם 24/7,  נותן את האופציה ליצירת הזדמנויות בזמן שאתם מתמקדים באסטרטגיה.',
    featuresEn: [
      'Increased revenue and efficiency',
      'Automated workflows save time',
      'Scale without adding headcount',
      'Data-driven decisions'
    ],
    featuresHe: [
      'הכנסות ויעילות מוגברות',
      'תהליכים אוטומטיים חוסכים זמן',
      'צמחו בלי להגדיל צוות',
      'החלטות מבוססות נתונים'
    ]
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    titleEn: 'Peace of Mind',
    titleHe: 'שקט נפשי',
    subtitleEn: 'Sleep Well at Night',
    subtitleHe: 'לישון בשקט בלילה',
    descriptionEn: 'Your product just works. No crashes, no security breaches, no surprises. You get ongoing support, regular updates, and the confidence that your business runs on a solid foundation.',
    descriptionHe: 'המוצר שלכם פשוט עובד. בלי קריסות, בלי פרצות אבטחה, בלי הפתעות. אתם מקבלים תמיכה שוטפת, עדכונים קבועים, והביטחון שהעסק שלכם רץ על בסיס יציב.',
    featuresEn: [
      'Reliable and stable',
      'Secure from day one',
      'Ongoing support and maintenance',
      'Scales as you grow'
    ],
    featuresHe: [
      'אמין ויציב',
      'מאובטח מהיום הראשון',
      'תמיכה ותחזוקה שוטפת',
      'גדל איתכם'
    ]
  }
];

export default function JumindWhy() {
  const { language } = useLanguage();

  const content = {
    en: {
      badge: 'Why Choose Ju-Mind',
      title1: 'Built on Three',
      title2: 'Core Principles',
      description: 'We combine speed, intelligence, and quality to deliver exceptional results',
    },
    he: {
      badge: 'למה לבחור ב-Ju-Mind',
      title1: 'שלושה עקרונות',
      title2: 'שמובילים אותנו',
      description: 'אנחנו מאמינים בשילוב של מהירות, אינטליגנציה ואיכות ללא פשרות - זה מה שמאפשר לנו לספק תוצאות יוצאות דופן',
    },
  };

  const t = content[language];

  return (
    <section className="section-jumind bg-white">
      <div className="container-jumind">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="heading-jumind-lg mb-6">
            {t.title1}
            <br />
            <span className="text-gradient-jumind">{t.title2}</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t.description}
          </p>
        </div>

        {/* Three Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[#4DA8FF] to-[#1E86F7] text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#4DA8FF]/30">
                {reason.icon}
              </div>

              {/* Title */}
              <h3 className="text-3xl font-bold text-[#0A0A0A] mb-3">
                {language === 'he' ? reason.titleHe : reason.titleEn}
              </h3>

              {/* Subtitle */}
              <p className="text-lg font-semibold text-[#4DA8FF] mb-4">
                {language === 'he' ? reason.subtitleHe : reason.subtitleEn}
              </p>

              {/* Description */}
              <p className="text-slate-600 leading-relaxed mb-6">
                {language === 'he' ? reason.descriptionHe : reason.descriptionEn}
              </p>

              {/* Features List */}
              <ul className="space-y-3">
                {(language === 'he' ? reason.featuresHe : reason.featuresEn).map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#4DA8FF] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-600">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Decorative Line */}
              <div className="mt-8 h-1 w-20 bg-gradient-to-r from-[#4DA8FF] to-transparent rounded-full"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

