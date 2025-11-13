import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageSwitcher() {
  const { language, toggleLanguage, isHebrew, isEnglish } = useLanguage();

  return (
    <motion.button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 space-x-reverse p-2 rounded-lg hover:bg-slate-100 transition-colors group"
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${isHebrew ? 'English' : 'Hebrew'}`}
      title={`Switch to ${isHebrew ? 'English' : 'Hebrew'}`}
    >
      {/* Language Icons */}
      <div className="relative w-8 h-6 flex items-center justify-center">
        {/* Hebrew Flag */}
        <motion.div
          className={`absolute inset-0 flex items-center justify-center rounded ${
            isHebrew ? 'opacity-100' : 'opacity-50'
          }`}
          animate={{ scale: isHebrew ? 1.1 : 1 }}
          transition={{ duration: 0.2 }}
        >
        </motion.div>
        
        {/* English Flag */}
        <motion.div
          className={`absolute inset-0 flex items-center justify-center rounded ${
            isEnglish ? 'opacity-100' : 'opacity-50'
          }`}
          animate={{ scale: isEnglish ? 1.1 : 1 }}
          transition={{ duration: 0.2 }}
        >
        </motion.div>
      </div>

      {/* Language Label */}
      <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900 transition-colors">
        {isHebrew ? 'עברית' : 'English'}
      </span>
    </motion.button>
  );
}
