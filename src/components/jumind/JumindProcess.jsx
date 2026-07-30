import { useLanguage } from '../../contexts/LanguageContext';

const steps = [
  {
    numberEn: '01',
    titleEn: 'AI Audit',
    titleHe: 'אבחון',
    descriptionEn: 'A short call to map your workflows and find the one with the clearest ROI — no generic AI pitch, just a specific recommendation.',
    descriptionHe: 'שיחה קצרה שממפה את התהליכים בעסק שלכם ומאתרת את זה עם הערך הכי ברור - בלי מצגת כללית, רק המלצה ממוקדת.',
  },
  {
    numberEn: '02',
    titleEn: 'First Build',
    titleHe: 'גרסה ראשונה',
    descriptionEn: 'A small, working version ships in weeks, not months — scoped tight so you see real results before committing to more.',
    descriptionHe: 'גרסה ראשונה ועובדת עולה תוך שבועות, לא חודשים - בהיקף ממוקד כדי שתראו תוצאה אמיתית לפני שממשיכים הלאה.',
  },
  {
    numberEn: '03',
    titleEn: 'Launch',
    titleHe: 'השקה',
    descriptionEn: 'The system goes live in your real workflow — connected to your tools, your data, and your team, with guardrails in place.',
    descriptionHe: 'המערכת עולה לאוויר בתוך התהליך האמיתי שלכם - מחוברת לכלים, לנתונים ולצוות, עם גבולות ברורים להתנהגות שלה.',
  },
  {
    numberEn: '04',
    titleEn: 'Support & Iterate',
    titleHe: 'תמיכה ושיפור',
    descriptionEn: 'We watch how it performs in production and improve it based on real usage — plus ongoing support if you want it.',
    descriptionHe: 'עוקבים איך המערכת מתפקדת בשטח ומשפרים אותה לפי שימוש אמיתי - עם אפשרות לליווי שוטף אם תרצו.',
  },
];

export default function JumindProcess() {
  const { language } = useLanguage();

  const content = {
    en: {
      badge: 'How We Work',
      title1: 'From Idea to',
      title2: 'Working System',
      description: 'A simple, founder-led engagement model built to prove value fast — not a six-month roadmap before you see anything real.',
    },
    he: {
      badge: 'איך אנחנו עובדים',
      title1: 'מהרעיון,',
      title2: 'למערכת שבאמת עובדת',
      description: 'תהליך עבודה פשוט שבנוי להוכיח ערך מהר - לא מפת דרכים של חצי שנה לפני שרואים משהו אמיתי.',
    },
  };

  const t = content[language];

  return (
    <section className="section-jumind bg-gradient-to-b from-white to-gray-50">
      <div className="container-jumind">
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block px-6 py-2 bg-[#4DA8FF]/10 rounded-full mb-6">
            <span className="text-[#1E86F7] font-semibold text-sm tracking-wide uppercase">{t.badge}</span>
          </div>
          <h2 className="heading-jumind-lg mb-6">
            {t.title1}{' '}
            <span className="text-gradient-jumind">{t.title2}</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-6xl font-black text-[#4DA8FF]/15 mb-2">
                {step.numberEn}
              </div>
              <h3 className="text-2xl font-bold text-[#0A0A0A] mb-3">
                {language === 'he' ? step.titleHe : step.titleEn}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {language === 'he' ? step.descriptionHe : step.descriptionEn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
