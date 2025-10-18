import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fadeInUp, staggerContainer, hoverScale } from '../lib/motion';
import Parallax from './Parallax';

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <Parallax strength={30}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-slate-50 opacity-70" />
      </Parallax>

      <div className="container-custom relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            <span className="text-gradient">ErdmMind</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-slate-500 mb-6"
          >
            Professional Development Company
          </motion.p>

          <motion.h2
            variants={fadeInUp}
            className="text-2xl md:text-3xl text-slate-600 mb-6"
          >
            Full-Stack Development & AI Solutions
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            We build production-grade web applications, mobile solutions, and AI integrations that scale your business. From MVP to enterprise, we deliver results fast.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap gap-8 justify-center text-sm md:text-base mb-12 max-w-3xl mx-auto"
          >
            <div className="flex flex-col items-center gap-2 text-slate-700">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="font-semibold">Rapid Delivery</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-slate-700">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="font-semibold">Production Ready</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-slate-700">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <span className="font-semibold">Scalable Architecture</span>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div {...hoverScale}>
              <Link to="/contact" className="btn btn-primary text-lg px-8 py-4">
                Get Free Consultation
              </Link>
            </motion.div>

            <motion.div {...hoverScale}>
              <Link to="/services" className="btn btn-ghost text-lg px-8 py-4">
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