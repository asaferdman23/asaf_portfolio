import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../lib/motion';

export default function Section({
  children,
  title,
  subtitle,
  id,
  className = '',
  containerClassName = ''
}) {
  return (
    <section id={id} className={`py-16 md:py-20 ${className}`}>
      <div className={`container-custom ${containerClassName}`}>
        {(title || subtitle) && (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-12 md:mb-16"
          >
            {title && (
              <motion.h2
                variants={fadeInUp}
                className="section-title mb-4"
              >
                {title}
              </motion.h2>
            )}
            {subtitle && (
              <motion.p
                variants={fadeInUp}
                className="section-subtitle mx-auto"
              >
                {subtitle}
              </motion.p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}