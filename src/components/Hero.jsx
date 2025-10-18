import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fadeInUp, staggerContainer, hoverScale } from '../lib/motion';
import Parallax from './Parallax';
import Logo from './Logo';

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50" />
      <Parallax strength={30}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-slate-600/5" />
      </Parallax>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            x: [0, -150, 0],
            y: [0, 100, 0],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-full blur-xl"
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="text-center max-w-5xl mx-auto"
        >
          {/* Logo */}
          <motion.div
            variants={fadeInUp}
            className="mb-8 flex justify-center"
          >
            <Logo size="large" />
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-slate-600 mb-6 font-medium"
          >
            Professional Software Development Company
          </motion.p>

          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight"
          >
            Full-Stack Development &{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI Solutions
            </span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-slate-700 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
          >
            We build production-grade web applications, mobile solutions, and AI integrations that scale your business. From MVP to enterprise, we deliver results fast.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto"
          >
            <motion.div 
              className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20 hover:bg-white/70 transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="font-semibold text-lg text-slate-800">Rapid Delivery</span>
              <p className="text-slate-600 text-center text-sm">Fast turnaround times without compromising quality</p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20 hover:bg-white/70 transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="font-semibold text-lg text-slate-800">Production Ready</span>
              <p className="text-slate-600 text-center text-sm">Enterprise-grade solutions built for scale</p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20 hover:bg-white/70 transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <span className="font-semibold text-lg text-slate-800">Scalable Architecture</span>
              <p className="text-slate-600 text-center text-sm">Future-proof solutions that grow with your business</p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <motion.div {...hoverScale}>
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg px-10 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                Get Free Consultation
              </Link>
            </motion.div>

            <motion.div {...hoverScale}>
              <Link 
                to="/services" 
                className="bg-white/80 backdrop-blur-sm text-slate-700 font-semibold text-lg px-10 py-4 rounded-xl border border-white/20 hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Our Services
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-slate-400"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}