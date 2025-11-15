import { useLanguage } from '../../contexts/LanguageContext';

export default function JumindFooter() {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const content = {
    en: {
      tagline: 'AI-Powered Web & Automation Studio. We build intelligent systems that move your business forward.',
      quickLinks: 'Quick Links',
      about: 'About',
      services: 'Services',
      work: 'Work',
      contact: 'Contact',
      servicesTitle: 'Services',
      webApps: 'Web Applications',
      mobileApps: 'Mobile Apps',
      aiAgents: 'AI Agents',
      customSoftware: 'Custom Software',
      copyright: 'All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      motto: 'Intelligent Systems. Built Fast.',
    },
    he: {
      tagline: 'סטודיו לפיתוח מערכות תוכנה ואוטומציה מבוסס AI. אנחנו בונים מערכות חכמות שמקדמות את העסק שלכם קדימה.',
      quickLinks: 'קישורים מהירים',
      about: 'אודות',
      services: 'שירותים',
      work: 'עבודות',
      contact: 'צור קשר',
      servicesTitle: 'השירותים שלנו',
      webApps: 'אפליקציות ווב',
      mobileApps: 'אפליקציות מובייל',
      aiAgents: 'סוכני בינה מלאכותית',
      customSoftware: 'תוכנה מותאמת אישית',
      copyright: 'כל הזכויות שמורות.',
      privacy: 'מדיניות פרטיות',
      terms: 'תנאי שימוש',
      motto: 'מערכות חכמות. נבנות במהירות.',
    },
  };

  const t = content[language];

  return (
    <footer className="bg-[#0A0A0A] text-white py-16">
      <div className="container-jumind">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                  {/* Brand Column */}
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-4 mb-4">
                      <img 
                        src="/assets/jm_transparent.png" 
                        alt="Ju-Mind Logo" 
                        className="h-12 w-auto"
                      />
                      <h2 className="text-3xl font-display font-black tracking-tighter">
                        JU-MIND
                      </h2>
                    </div>
            <p className="text-white/60 mb-6 max-w-md">
              {t.tagline}
            </p>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com/ju__mind" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#4DA8FF] flex items-center justify-center transition-colors duration-300 border border-white/10 hover:border-[#4DA8FF]"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/><path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#4DA8FF] flex items-center justify-center transition-colors duration-300 border border-white/10 hover:border-[#4DA8FF]"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t.quickLinks}</h3>
            <ul className="space-y-3">
              <li>
                <a href="#founder" className="text-white/60 hover:text-[#4DA8FF] transition-colors duration-200">
                  {t.about}
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/60 hover:text-[#4DA8FF] transition-colors duration-200">
                  {t.services}
                </a>
              </li>
              <li>
                <a href="#projects" className="text-white/60 hover:text-[#4DA8FF] transition-colors duration-200">
                  {t.work}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/60 hover:text-[#4DA8FF] transition-colors duration-200">
                  {t.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t.servicesTitle}</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-white/60 hover:text-[#4DA8FF] transition-colors duration-200">
                  {t.webApps}
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/60 hover:text-[#4DA8FF] transition-colors duration-200">
                  {t.mobileApps}
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/60 hover:text-[#4DA8FF] transition-colors duration-200">
                  {t.aiAgents}
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/60 hover:text-[#4DA8FF] transition-colors duration-200">
                  {t.customSoftware}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <p>
            © {currentYear} Ju-Mind. {t.copyright}
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#4DA8FF] transition-colors duration-200">
              {t.privacy}
            </a>
            <a href="#" className="hover:text-[#4DA8FF] transition-colors duration-200">
              {t.terms}
            </a>
          </div>
        </div>

        {/* Subtle Tagline */}
        <div className="text-center mt-8 pt-8 border-t border-white/5">
          <p className="text-xs text-white/40">
            {t.motto}
          </p>
        </div>
      </div>
    </footer>
  );
}

