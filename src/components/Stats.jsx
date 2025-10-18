import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../lib/motion';
import Section from './Section';

export default function Stats() {
  const stats = [
    {
      number: '50+',
      label: 'Projects Delivered',
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      description: 'From MVP to enterprise scale'
    },
    {
      number: '99.9%',
      label: 'Uptime',
      icon: (
        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      description: 'Production reliability'
    },
    {
      number: '4+',
      label: 'Years Experience',
      icon: (
        <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      description: 'Full-stack development'
    },
    {
      number: '24/7',
      label: 'Support',
      icon: (
        <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      description: 'Rapid response time'
    }
  ];

  return (
    <Section
      title="Proven Performance"
      subtitle="Enterprise-grade reliability with rapid deployment cycles"
      className="bg-gradient-to-br from-blue-50 to-slate-50"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            variants={fadeInUp}
            custom={index}
            className="card p-6 text-center hover:shadow-xl transition-shadow duration-300 bg-white/80 backdrop-blur"
          >
            <div className="mb-4 flex justify-center">{stat.icon}</div>
            <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
              {stat.number}
            </div>
            <div className="text-lg font-semibold text-slate-900 mb-2">
              {stat.label}
            </div>
            <div className="text-sm text-slate-600">
              {stat.description}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-12 text-center"
      >
        <div className="card p-8 max-w-3xl mx-auto bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <p className="text-xl md:text-2xl font-semibold mb-4">
            "Combining enterprise-grade architecture with startup agility to deliver solutions that scale."
          </p>
          <p className="text-blue-100 text-lg">
            Production-ready code. Scalable systems. Measurable impact.
          </p>
        </div>
      </motion.div>
    </Section>
  );
}
