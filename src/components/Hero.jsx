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
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="text-gradient">Asaf Erdman</span>
          </motion.h1>

          <motion.h2
            variants={fadeInUp}
            className="text-2xl md:text-3xl text-slate-600 mb-6"
          >
            Full-Stack Developer & AI Innovator
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-slate-600 mb-12 max-w-2xl mx-auto"
          >
            I build fast, reliable products that blend creativity, data, and clean engineering.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              {...hoverScale}
              onClick={scrollToProjects}
              className="btn btn-primary"
            >
              View My Work
            </motion.button>

            <motion.div {...hoverScale}>
              <Link to="/contact" className="btn btn-ghost">
                Contact Me
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