import { motion } from 'framer-motion';
import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

export default function JumindContact() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="section-jumind-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#4DA8FF] rounded-full mix-blend-screen filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#1E86F7] rounded-full mix-blend-screen filter blur-3xl opacity-10"></div>

      <div className="container-jumind relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
            <span className="text-[#4DA8FF] font-semibold text-sm tracking-wide uppercase">{language === 'he' ? 'צור קשר' : 'Get In Touch'}</span>
          </div>
          <h2 className="heading-jumind-lg text-white mb-6">
            {language === 'he' ? 'בואו נבנה משהו' : 'Let&apos;s Build Something'}
            <br />
            <span className="text-gradient-jumind">{language === 'he' ? 'מדהים ביחד' : 'Amazing Together'}</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            {language === 'he' 
              ? 'מוכנים להפוך את הרעיון שלכם למוצר דיגיטלי מצליח? מלאו את הטופס ונחזור אליכם תוך 24 שעות עם הצעה מותאמת אישית.'
              : 'Ready to have us build your next web app, mobile app, or AI solution? Fill out the form and we&apos;ll get back to you within 24 hours.'}
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Why Contact Us */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">{language === 'he' ? 'למה לעבוד איתנו?' : 'Why Work With Us?'}</h3>
              <ul className="space-y-4">
                {(language === 'he' ? [
                  'ייעוץ ראשוני ללא עלות',
                  'הצעת מחיר מפורטת תוך 48 שעות',
                  'תמחור שקוף - ללא עלויות נסתרות',
                  'ליווי אישי לאורך כל הדרך',
                  'תמיכה ותחזוקה שוטפת לאחר ההשקה'
                ] : [
                  'Free initial consultation',
                  'Custom proposals within 48 hours',
                  'Transparent pricing, no hidden fees',
                  'Dedicated project manager',
                  'Ongoing support & maintenance'
                ]).map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#4DA8FF] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-white/80">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-white/60">{language === 'he' ? 'אימייל' : 'Email'}</div>
                  <div className="font-semibold">hello@ju-mind.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4 text-white/80">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-white/60">{language === 'he' ? 'מיקום' : 'Location'}</div>
                  <div className="font-semibold">{language === 'he' ? 'צוות גלובלי מרחוק' : 'Global Remote Team'}</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a 
                href="https://instagram.com/ju__mind" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/10 hover:bg-[#4DA8FF] flex items-center justify-center transition-colors duration-300 border border-white/10 hover:border-[#4DA8FF]"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/><path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/10 hover:bg-[#4DA8FF] flex items-center justify-center transition-colors duration-300 border border-white/10 hover:border-[#4DA8FF]"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-2xl space-y-6">
              {submitted ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-[#4DA8FF] rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#0A0A0A] mb-2">{language === 'he' ? 'תודה רבה!' : 'Message Sent!'}</h3>
                  <p className="text-slate-600">{language === 'he' ? 'קיבלנו את פנייתכם ונחזור אליכם תוך 24 שעות.' : 'We\'ll get back to you within 24 hours.'}</p>
                </motion.div>
              ) : (
                <>
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-[#0A0A0A] mb-2">
                      {language === 'he' ? 'שם מלא *' : 'Full Name *'}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#4DA8FF] outline-none transition-colors bg-white text-[#0A0A0A]"
                      placeholder={language === 'he' ? 'ישראל ישראלי' : 'John Doe'}
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-[#0A0A0A] mb-2">
                      {language === 'he' ? 'מספר טלפון *' : 'Phone Number *'}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#4DA8FF] outline-none transition-colors bg-white text-[#0A0A0A]"
                      placeholder={language === 'he' ? '050-123-4567' : '+1 (555) 123-4567'}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-[#0A0A0A] mb-2">
                      {language === 'he' ? 'כתובת אימייל *' : 'Email Address *'}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#4DA8FF] outline-none transition-colors bg-white text-[#0A0A0A]"
                      placeholder={language === 'he' ? 'israeli@company.com' : 'john@company.com'}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-[#0A0A0A] mb-2">
                      {language === 'he' ? 'פרטי הפרויקט *' : 'Project Details *'}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#4DA8FF] outline-none transition-colors bg-white text-[#0A0A0A] resize-none"
                      placeholder={language === 'he' ? 'ספר לנו על הפרויקט שלך, לוח הזמנים ודרישות ספציפיות...' : 'Tell us about your project, timeline, and any specific requirements...'}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-jumind-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        {language === 'he' ? 'שולח...' : 'Sending...'}
                      </>
                    ) : (
                      <>
                        {language === 'he' ? 'שלח הודעה' : 'Send Message'}
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </button>

                  <p className="text-xs text-slate-500 text-center">
                    {language === 'he' 
                      ? 'בשליחת הטופס, אתם מאשרים שקראתם את מדיניות הפרטיות ותנאי השירות שלנו.'
                      : 'By submitting this form, you agree to our privacy policy and terms of service.'}
                  </p>
                </>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

