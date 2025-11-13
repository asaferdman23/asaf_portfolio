import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { fadeInUp, hoverScale } from '../lib/motion';

export default function NotFound() {
  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center pt-16">
        <div className="container-custom">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="show"
            className="text-center max-w-2xl mx-auto"
          >
            <div className="mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="text-8xl md:text-9xl font-bold text-slate-200 mb-4"
              >
                404
              </motion.div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              העמוד שחיפשת לא קיים
            </h1>

            <p className="text-lg text-slate-600 mb-8">
              ייתכן שהזנת כתובת שגויה או שהעמוד ירד מהאוויר. בואו נחזור לאזור הבטוח.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div {...hoverScale}>
                <Link to="/" className="btn btn-primary">
                  חזרה לדף הבית
                </Link>
              </motion.div>

              <motion.div {...hoverScale}>
                <Link to="/projects" className="btn btn-ghost">
                  לראות פרויקטים
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-12"
            >
              <div className="w-64 h-64 mx-auto bg-slate-100 rounded-full flex items-center justify-center">
                <svg className="w-32 h-32 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 20a7.962 7.962 0 01-5-1.709V16h10v2.291zM20 12a8 8 0 11-16 0 8 8 0 0116 0z" />
                </svg>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
