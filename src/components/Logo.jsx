import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Logo({ className = "", size = "default" }) {
  const sizeClasses = {
    small: "text-lg",
    default: "text-xl",
    large: "text-2xl",
    xlarge: "text-3xl"
  };

  return (
    <Link
      to="/"
      className={`flex items-center space-x-3 space-x-reverse group transition-all duration-300 ${className}`}
    >
      {/* Brain Icon */}
      <motion.div
        className="relative"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <svg
          width={size === "small" ? "32" : size === "large" ? "48" : "40"}
          height={size === "small" ? "32" : size === "large" ? "48" : "40"}
          viewBox="0 0 100 100"
          className="drop-shadow-lg"
        >
          <defs>
            <linearGradient id="brainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="50%" stopColor="#6366F1" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
            <linearGradient id="brainGradientRight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366F1" />
              <stop offset="50%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#A855F7" />
            </linearGradient>
          </defs>
          
          {/* Left Hemisphere */}
          <path
            d="M20 25 Q15 35, 20 45 Q25 55, 20 65 Q15 75, 20 85 Q30 80, 40 75 Q45 65, 40 55 Q45 45, 40 35 Q35 25, 25 20 Z"
            fill="url(#brainGradient)"
            className="transition-all duration-300 group-hover:brightness-110"
          />
          
          {/* Right Hemisphere */}
          <path
            d="M80 25 Q85 35, 80 45 Q75 55, 80 65 Q85 75, 80 85 Q70 80, 60 75 Q55 65, 60 55 Q55 45, 60 35 Q65 25, 75 20 Z"
            fill="url(#brainGradientRight)"
            className="transition-all duration-300 group-hover:brightness-110"
          />
          
          {/* Brain Stem */}
          <ellipse
            cx="50"
            cy="90"
            rx="8"
            ry="6"
            fill="url(#brainGradient)"
            className="transition-all duration-300 group-hover:brightness-110"
          />
          
          {/* Neural Connections */}
          <motion.circle
            cx="30"
            cy="40"
            r="2"
            fill="#FFFFFF"
            opacity="0.8"
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.circle
            cx="70"
            cy="60"
            r="1.5"
            fill="#FFFFFF"
            opacity="0.6"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
          />
          <motion.circle
            cx="45"
            cy="70"
            r="1"
            fill="#FFFFFF"
            opacity="0.7"
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          />
        </svg>
      </motion.div>
      
      {/* Company Name */}
      <div className="flex flex-col">
        <motion.span
          className={`font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300 ${sizeClasses[size]}`}
          whileHover={{ scale: 1.02 }}
        >
          Erdmind
        </motion.span>
        {size === "large" && (
          <motion.span
            className="text-xs font-medium text-slate-500 tracking-wider"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            אסף ארדמן • סטודיו לפיתוח דיגיטלי
          </motion.span>
        )}
      </div>
    </Link>
  );
}
