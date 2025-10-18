import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fadeInUp, staggerContainer } from '../lib/motion';
import Section from './Section';

export default function ServicesPremium() {
  const services = [
    {
      icon: (
        <div className="relative">
          <div className="absolute inset-0 bg-blue-600/20 rounded-2xl blur-xl" />
          <div className="relative bg-gradient-to-br from-blue-600 to-blue-700 p-4 rounded-2xl">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
      ),
      title: 'Web Applications',
      description: 'Custom React & Next.js applications built for scale and performance.',
      features: ['React & Next.js', 'Cloud Native', 'Real-time Features']
    },
    {
      icon: (
        <div className="relative">
          <div className="absolute inset-0 bg-slate-600/20 rounded-2xl blur-xl" />
          <div className="relative bg-gradient-to-br from-slate-700 to-slate-800 p-4 rounded-2xl">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
      ),
      title: 'Mobile Apps',
      description: 'Native-quality iOS & Android applications with one codebase.',
      features: ['React Native', 'Cross-platform', 'App Store Ready']
    },
    {
      icon: (
        <div className="relative">
          <div className="absolute inset-0 bg-purple-600/20 rounded-2xl blur-xl" />
          <div className="relative bg-gradient-to-br from-purple-600 to-purple-700 p-4 rounded-2xl">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
        </div>
      ),
      title: 'AI Integration',
      description: 'ChatGPT, automation, and custom AI solutions for your business.',
      features: ['OpenAI APIs', 'Custom Models', 'Automation']
    },
    {
      icon: (
        <div className="relative">
          <div className="absolute inset-0 bg-green-600/20 rounded-2xl blur-xl" />
          <div className="relative bg-gradient-to-br from-green-600 to-green-700 p-4 rounded-2xl">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
      ),
      title: 'API Development',
      description: 'Scalable backend systems and third-party integrations.',
      features: ['REST & GraphQL', 'Microservices', 'Cloud Hosting']
    },
    {
      icon: (
        <div className="relative">
          <div className="absolute inset-0 bg-orange-600/20 rounded-2xl blur-xl" />
          <div className="relative bg-gradient-to-br from-orange-600 to-orange-700 p-4 rounded-2xl">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
          </div>
        </div>
      ),
      title: 'Cloud & DevOps',
      description: 'AWS deployment, CI/CD, and infrastructure management.',
      features: ['AWS Setup', 'CI/CD Pipelines', 'Auto-scaling']
    },
    {
      icon: (
        <div className="relative">
          <div className="absolute inset-0 bg-red-600/20 rounded-2xl blur-xl" />
          <div className="relative bg-gradient-to-br from-red-600 to-red-700 p-4 rounded-2xl">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        </div>
      ),
      title: 'MVP Development',
      description: 'Launch your startup idea in 4-8 weeks with investor-ready quality.',
      features: ['Rapid Launch', 'Core Features', 'Scalable Base']
    }
  ];

  return (
    <Section
      id="services"
      title="What We Build"
      subtitle="End-to-end software solutions that drive growth and innovation"
      className="bg-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.03),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(100,116,139,0.03),transparent_50%)]" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10"
      >
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            variants={fadeInUp}
            custom={index}
            className="group relative"
          >
            {/* Card */}
            <div className="card-premium p-8 h-full relative overflow-hidden">
              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-6">
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <Link
                  to="/services"
                  className="inline-flex items-center text-blue-600 font-semibold text-sm group-hover:gap-2 transition-all"
                >
                  Learn more
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center mt-16"
      >
        <Link to="/contact" className="btn btn-primary text-lg inline-flex items-center gap-2">
          Start Your Project
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
        <p className="text-slate-500 mt-4 text-sm">Free consultation • Fast response • Transparent pricing</p>
      </motion.div>
    </Section>
  );
}
