import { motion } from 'framer-motion';

export default function Chip({ children, variant = 'default', className = '' }) {
  const baseClasses = 'chip';
  const variantClasses = {
    default: '',
    blue: 'chip-blue'
  };

  return (
    <motion.span
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.span>
  );
}