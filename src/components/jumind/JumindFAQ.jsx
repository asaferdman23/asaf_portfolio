import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const faqs = [
  {
    questionEn: 'Will this replace my team?',
    questionHe: 'האם זה יחליף את הצוות שלי?',
    answerEn: 'No. The goal is to remove repetitive manual work — lead follow-ups, data entry, support triage — so your team spends time on things that actually need a human. Every system ships with a clear handoff point where a person takes over.',
    answerHe: 'לא. המטרה היא להוריד עבודה ידנית וחוזרת - מעקב אחרי לידים, הזנת נתונים, מיון פניות תמיכה - כדי שהצוות שלכם יתפנה למה שבאמת דורש בן אדם. כל מערכת בנויה עם נקודת מעבר ברורה לנציג אנושי.',
  },
  {
    questionEn: 'How much does this cost?',
    questionHe: 'כמה זה עולה?',
    answerEn: 'It depends on the workflow, but every engagement starts with a small, fixed-scope first build so you see working results before committing budget to anything larger. Pricing is discussed transparently on the audit call, with no hidden fees.',
    answerHe: 'תלוי בתהליך, אבל כל התקשרות מתחילה בגרסה ראשונה קטנה ובהיקף קבוע, כדי שתראו תוצאה עובדת לפני שמתחייבים לתקציב גדול יותר. התמחור נדון בשקיפות מלאה בשיחת האבחון, בלי עלויות נסתרות.',
  },
  {
    questionEn: 'How long does a first build take?',
    questionHe: 'כמה זמן לוקחת גרסה ראשונה?',
    answerEn: 'Most first builds ship in a few weeks. Scope is kept deliberately small — one workflow, one clear outcome — so you get something real to test quickly instead of waiting months for a big launch.',
    answerHe: 'רוב הגרסאות הראשונות עולות תוך מספר שבועות. ההיקף נשמר קטן בכוונה - תהליך אחד, תוצאה ברורה אחת - כדי שתקבלו משהו אמיתי לבדוק מהר, במקום לחכות חודשים להשקה גדולה.',
  },
  {
    questionEn: 'Is my data and customer information secure?',
    questionHe: 'האם המידע והנתונים של הלקוחות שלי מאובטחים?',
    answerEn: 'Yes. Every AI agent and automation is built with guardrails around what it can access and do, clear data flow between your systems, and no data used to train external models beyond what your provider agreements allow.',
    answerHe: 'כן. כל סוכן AI ואוטומציה נבנים עם גבולות ברורים למה שהם יכולים לגשת אליו ולעשות, זרימת נתונים מסודרת בין המערכות שלכם, ובלי שימוש בנתונים לאימון מודלים חיצוניים מעבר למה שהסכמי הספקים שלכם מאפשרים.',
  },
  {
    questionEn: 'What if we already tried AI tools and they didn\'t work?',
    questionHe: 'ומה אם כבר ניסינו כלי AI וזה לא עבד?',
    answerEn: 'That is common — most failed AI projects skip the audit step and jump straight to building. We start by finding the one workflow with a real, measurable return, and build around your actual process instead of a generic template.',
    answerHe: 'זה קורה הרבה - רוב פרויקטי ה-AI שנכשלים מדלגים על שלב האבחון וקופצים ישר לבנייה. אנחנו מתחילים במציאת התהליך האחד עם ערך אמיתי ומדיד, ובונים סביב התהליך האמיתי שלכם ולא סביב תבנית גנרית.',
  },
];

export default function JumindFAQ() {
  const { language } = useLanguage();
  const [openIndex, setOpenIndex] = useState(0);

  const content = {
    en: {
      badge: 'Questions',
      title1: 'Before You',
      title2: 'Book the Call',
      description: 'Straight answers to what business owners usually ask before adopting AI.',
    },
    he: {
      badge: 'שאלות נפוצות',
      title1: 'לפני שקובעים',
      title2: 'את השיחה',
      description: 'תשובות ישירות לשאלות שבעלי עסקים שואלים  על AI.',
    },
  };

  const t = content[language];

  return (
    <section className="relative py-24 md:py-32 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0A0F1A] to-black"></div>

      <div className="container-jumind relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-[#4DA8FF]/10 rounded-full mb-6">
            <span className="text-[#4DA8FF] font-semibold text-sm tracking-wide uppercase">{t.badge}</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {t.title1} <span className="text-white/40">{t.title2}</span>
          </h2>
          <p className="text-base md:text-lg text-white/50 max-w-2xl mx-auto">
            {t.description}
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className={`w-full flex items-center justify-between gap-4 p-6 text-white font-semibold ${language === 'he' ? 'text-right' : 'text-left'}`}
                  aria-expanded={isOpen}
                >
                  <span>{language === 'he' ? faq.questionHe : faq.questionEn}</span>
                  <svg
                    className={`w-5 h-5 flex-shrink-0 text-[#4DA8FF] transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
                {isOpen && (
                  <div className={`px-6 pb-6 text-white/60 leading-relaxed ${language === 'he' ? 'text-right' : 'text-left'}`}>
                    {language === 'he' ? faq.answerHe : faq.answerEn}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
