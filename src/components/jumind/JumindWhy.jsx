import { useLanguage } from '../../contexts/LanguageContext';

const reasons = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    titleEn: 'Fast First ROI',
    titleHe: 'ערך עסקי מהיר',
    subtitleEn: 'Launch the First Valuable Workflow',
    subtitleHe: 'מתחילים מהתהליך עם הכי הרבה ערך',
    descriptionEn: 'We identify one workflow, campaign, or AI use case with a clear business return and ship the first working version quickly.',
    descriptionHe: 'אנחנו מזהים תהליך, קמפיין או שימוש ב-AI שיכול לייצר ערך ברור, ובונים גרסה ראשונה עובדת בלי להסתבך בפרויקט גדול מדי.',
    featuresEn: [
      'AI audit before heavy build',
      'First working version in weeks',
      'Small scope, clear business target',
      'Improve from real usage'
    ],
    featuresHe: [
      'לפני שלב הפיתוח ',
      'גרסה עובדת תוך שבועות',
      'היקף ממוקד ומטרה ברורה',
      'שיפור לפי שימוש אמיתי בשטח'
    ]
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    titleEn: 'Business Outcomes',
    titleHe: 'תוצאות עסקיות',
    subtitleEn: 'Not AI Demos. Working Systems.',
    subtitleHe: 'לא דמו של AI. מערכת שעובדת באמת.',
    descriptionEn: 'Every build is tied to a practical outcome: fewer manual hours, faster lead response, better conversion, cleaner operations, or a new digital product your customers can use.',
    descriptionHe: 'כל פרויקט מחובר לתוצאה פרקטית: פחות עבודה ידנית, תגובה מהירה יותר ללידים, יותר המרות, תפעול מסודר יותר או מוצר דיגיטלי שלקוחות באמת משתמשים בו.',
    featuresEn: [
      'Manual work reduced',
      'Leads handled faster',
      'Campaign pages built to convert',
      'Dashboards make work visible'
    ],
    featuresHe: [
      'פחות שעות עבודה ידנית',
      'טיפול מהיר יותר בלידים',
      'דפי קמפיין שמכוונים להמרה',
      'דשבורדים שעושים סדר בנתונים'
    ]
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    titleEn: 'Reliable AI',
    titleHe: 'AI שאפשר לסמוך עליו',
    subtitleEn: 'Built With Guardrails and Ownership',
    subtitleHe: 'עם בקרה, גבולות ואחריות טכנולוגית',
    descriptionEn: 'AI systems need more than prompts. We build with clear data flow, fallback paths, human review where needed, analytics, and maintainable code.',
    descriptionHe: 'מערכות AI צריכות יותר מפרומפט טוב. אנחנו בונים זרימת מידע מסודרת, מנגנוני גיבוי כשצריך, בקרה אנושית במקומות רגישים, אנליטיקה וקוד שאפשר להמשיך לשפר.',
    featuresEn: [
      'Guardrails for AI behavior',
      'Human handoff when needed',
      'Clean integrations and APIs',
      'Support after launch'
    ],
    featuresHe: [
      'גבולות ברורים להתנהגות המערכת',
      'מעבר לנציג אנושי כשצריך',
      'אינטגרציות API מסודרות',
      'תמיכה לאחר ההשקה'
    ]
  }
];

export default function JumindWhy() {
  const { language } = useLanguage();

  const content = {
    en: {
      badge: 'Why Choose Ju-Mind',
      title1: 'AI Implementation',
      title2: 'That Makes Business Sense',
      description: 'We combine automation thinking, product design, full-stack engineering, and practical AI to build systems that are useful from day one.',
    },
    he: {
      badge: 'למה לבחור ב-Ju-Mind',
      title1: 'מערכות AI',
      title2: 'שמניבות תוצאות',
      description: 'אנחנו משלבים חשיבה עסקית, אוטומציה, עיצוב מוצר, פיתוח פול-סטאק ו-AI פרקטי כדי לבנות מערכות שנותנות ערך כבר מהגרסה הראשונה.',
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
