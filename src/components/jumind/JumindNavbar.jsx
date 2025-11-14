import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';

export default function JumindNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = language === 'he' 
    ? [
        { name: 'שירותים', href: '#services' },
        { name: 'פרויקטים', href: '#projects' },
        { name: 'אודות', href: '#founder' },
        { name: 'צור קשר', href: '#contact' },
      ]
    : [
        { name: 'Services', href: '#services' },
        { name: 'Projects', href: '#projects' },
        { name: 'About', href: '#founder' },
        { name: 'Contact', href: '#contact' },
      ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-black/5'
          : 'bg-transparent'
      }`}
    >
      <div className="container-jumind">
        <div className="flex items-center justify-between py-6">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="text-2xl font-display font-black tracking-tighter text-[#0A0A0A] group-hover:text-[#4DA8FF] transition-colors duration-300">
              JU-MIND
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#0A0A0A] hover:text-[#4DA8FF] font-medium transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#4DA8FF] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            
            {/* Language Switcher */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'he' : 'en')}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors font-medium text-[#0A0A0A]"
              aria-label="Switch language"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
              {language === 'en' ? 'עב' : 'EN'}
            </button>

            <a
              href="#contact"
              className="btn-jumind-primary !px-6 !py-3 text-base"
            >
              {language === 'he' ? 'בוא נדבר' : 'Let\'s Talk'}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-[#0A0A0A]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="container-jumind py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-[#0A0A0A] hover:text-[#4DA8FF] font-medium transition-colors duration-300 py-2"
                >
                  {link.name}
                </a>
              ))}
              
              {/* Mobile Language Switcher */}
              <button
                onClick={() => {
                  setLanguage(language === 'en' ? 'he' : 'en');
                  setIsMobileMenuOpen(false);
                }}
                className="w-full text-left py-2 text-[#0A0A0A] hover:text-[#4DA8FF] font-medium transition-colors duration-300"
              >
                {language === 'en' ? '🌐 עברית' : '🌐 English'}
              </button>

              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block btn-jumind-primary text-center"
              >
                {language === 'he' ? 'בוא נדבר' : 'Let\'s Talk'}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

