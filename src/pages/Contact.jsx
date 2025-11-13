import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import Section from '../components/Section';
import PageTransition from '../components/PageTransition';
import { fadeInUp, slideIn } from '../lib/motion';

export default function Contact() {
  const contactInfo = [
    {
      label: 'טלפון',
      value: '052-562-8235',
      href: 'tel:+972525628235',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h2l3.6 10.59a1 1 0 00.95.66H19a1 1 0 00.96-.73L22 8H7" />
        </svg>
      )
    },
    {
      label: 'WhatsApp',
      value: 'לחץ לפתיחת שיחה',
      href: 'https://wa.me/972525628235',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      )
    },
    {
      label: 'Email',
      value: 'asaf.erdman.dev@gmail.com',
      href: 'mailto:asaf.erdman.dev@gmail.com',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/asaferdman',
      href: 'https://linkedin.com/in/asaferdman',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    }
  ];

  return (
    <PageTransition>
      <div className="pt-24 pb-16">
        <Section
          title="מדברים עם Erdmind"
          subtitle="הכירו את אסף ארדמן וצוות הסטודיו, ונבין יחד איך מחברים אתכם לפתרון הכי נכון."
        >
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              variants={slideIn('left')}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  בואו נוציא את הרעיון לפועל
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  הסטודיו פנוי לפרויקטים חדשים, שיתופי פעולה עם משרדי פרסום ופרויקטי In-house. אם אתם צריכים אתר פרימיום, מערכת ווב, אפליקציה או חיבור AI מתקדם - נבנה לכם תכנית ברורה.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <motion.a
                    key={info.label}
                    variants={fadeInUp}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center space-x-4 space-x-reverse p-4 rounded-lg hover:bg-slate-50 transition-colors group"
                  >
                    <div className="flex-shrink-0 text-blue-600 group-hover:text-blue-700 transition-colors">
                      {info.icon}
                    </div>
                    <div>
                      <div className="font-medium text-slate-900">{info.label}</div>
                      <div className="text-slate-600 group-hover:text-slate-700 transition-colors">
                        {info.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              <motion.div
                variants={fadeInUp}
                className="card p-6 bg-blue-50 border-blue-200"
              >
                <h4 className="font-semibold text-blue-900 mb-2">זמני תגובה</h4>
                <p className="text-blue-800 text-sm">
                  חוזרים לכל פנייה עד 24 שעות בימי עסקים. אם מדובר בלוח זמנים צפוף במיוחד, ציינו זאת ונשבץ שיחת חירום כבר היום.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              variants={slideIn('right')}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </Section>
      </div>
    </PageTransition>
  );
}
