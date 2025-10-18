import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fadeInUp, staggerContainer, hoverScale } from '../lib/motion';
import Section from './Section';

export default function ServicesSection() {
  const services = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Web Application Development',
      description: 'Custom web applications built with React, Next.js, and Node.js. Scalable, fast, and designed for growth.',
      features: ['React & Next.js', 'Node.js Backend', 'Cloud Deployment', 'Responsive Design']
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that deliver seamless user experiences on iOS and Android.',
      features: ['React Native', 'iOS & Android', 'API Integration', 'Push Notifications']
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'AI Integration & Automation',
      description: 'Integrate cutting-edge AI into your products. From ChatGPT to custom ML models, we make AI work for your business.',
      features: ['OpenAI Integration', 'Custom AI Models', 'Automation Workflows', 'RAG Systems']
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: 'API Development & Integration',
      description: 'Build robust APIs or integrate third-party services. RESTful, GraphQL, microservices - we do it all.',
      features: ['REST & GraphQL APIs', 'Third-party Integration', 'Microservices', 'Database Design']
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      title: 'Cloud & DevOps',
      description: 'Deploy, scale, and maintain your applications with modern cloud infrastructure and CI/CD pipelines.',
      features: ['AWS & Cloud Hosting', 'CI/CD Pipelines', 'Docker & Kubernetes', 'Performance Optimization']
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'MVP Development',
      description: 'Launch your startup idea fast. We build MVPs that validate your concept and attract investors.',
      features: ['Rapid Prototyping', '4-8 Week Delivery', 'Investor-Ready', 'Scalable Foundation']
    }
  ];

  return (
    <Section
      id="services"
      title="Our Services"
      subtitle="Comprehensive software development solutions tailored to your business needs"
      className="bg-white"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            variants={fadeInUp}
            custom={index}
            className="card p-8 hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-500"
          >
            <div className="text-blue-600 mb-6">
              {service.icon}
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              {service.title}
            </h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              {service.description}
            </p>
            <ul className="space-y-2">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-center text-sm text-slate-600">
                  <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center mt-16"
      >
        <motion.div {...hoverScale}>
          <Link to="/contact" className="btn btn-primary text-lg px-10 py-4 inline-block">
            Start Your Project
          </Link>
        </motion.div>
        <p className="text-slate-500 mt-4">Free consultation • Fast response • No obligation</p>
      </motion.div>
    </Section>
  );
}
