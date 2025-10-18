import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import Section from '../components/Section';
import { fadeInUp, staggerContainer, hoverScale } from '../lib/motion';

export default function Services() {
  const services = [
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Web Application Development',
      description: 'We build modern, scalable web applications that drive business growth. From concept to deployment, we handle everything.',
      features: [
        'Custom React & Next.js applications',
        'Progressive Web Apps (PWA)',
        'E-commerce platforms',
        'SaaS product development',
        'Admin dashboards and CRM systems',
        'Responsive design for all devices'
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS'],
      pricing: 'Starting from $5,000'
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Mobile App Development',
      description: 'Native-quality mobile applications for iOS and Android. One codebase, dual platform deployment.',
      features: [
        'Cross-platform React Native apps',
        'Native iOS and Android development',
        'Mobile app UI/UX design',
        'App Store and Play Store deployment',
        'Push notifications and analytics',
        'Offline-first architecture'
      ],
      technologies: ['React Native', 'Expo', 'iOS', 'Android', 'Firebase'],
      pricing: 'Starting from $8,000'
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'AI Integration & Automation',
      description: 'Integrate cutting-edge AI capabilities into your existing products or build new AI-powered solutions.',
      features: [
        'ChatGPT and OpenAI API integration',
        'Custom AI chatbots and assistants',
        'Document processing with RAG',
        'Automated workflow systems',
        'AI-powered analytics and insights',
        'Machine learning model integration'
      ],
      technologies: ['OpenAI', 'LangChain', 'Pinecone', 'Python', 'TensorFlow'],
      pricing: 'Starting from $4,000'
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: 'API Development & Integration',
      description: 'Robust backend systems and seamless third-party integrations that power your applications.',
      features: [
        'RESTful API development',
        'GraphQL API implementation',
        'Third-party API integration (Stripe, Twilio, etc.)',
        'Microservices architecture',
        'Database design and optimization',
        'Authentication and security'
      ],
      technologies: ['Node.js', 'Express', 'GraphQL', 'MongoDB', 'PostgreSQL'],
      pricing: 'Starting from $3,000'
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      title: 'Cloud & DevOps',
      description: 'Deploy, scale, and maintain your applications with modern cloud infrastructure and best practices.',
      features: [
        'AWS cloud deployment and management',
        'CI/CD pipeline setup (GitHub Actions, etc.)',
        'Docker containerization',
        'Server configuration and optimization',
        'Performance monitoring and scaling',
        'Automated backups and disaster recovery'
      ],
      technologies: ['AWS', 'Docker', 'Kubernetes', 'GitHub Actions', 'Nginx'],
      pricing: 'Starting from $2,000'
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'MVP Development',
      description: 'Launch your startup idea fast. We build MVPs that validate your concept and attract investors in 4-8 weeks.',
      features: [
        'Rapid prototyping and development',
        'Core feature implementation',
        'User authentication and onboarding',
        'Payment integration (if needed)',
        'Investor-ready product',
        'Scalable foundation for future growth'
      ],
      technologies: ['Next.js', 'Vercel', 'Supabase', 'Stripe', 'Tailwind CSS'],
      pricing: 'Starting from $6,000'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery Call',
      description: 'We start with a free consultation to understand your needs, goals, and vision.'
    },
    {
      step: '02',
      title: 'Proposal & Planning',
      description: 'Receive a detailed proposal with timeline, milestones, and pricing within 24-48 hours.'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Regular updates and demos throughout the development cycle. Your feedback shapes the product.'
    },
    {
      step: '04',
      title: 'Launch & Support',
      description: 'Smooth deployment to production with ongoing support and maintenance options.'
    }
  ];

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-16 bg-gradient-to-br from-blue-50 via-white to-slate-50">
        <div className="container-custom relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Our Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8">
              End-to-end software development solutions that drive business growth
            </p>
            <motion.div {...hoverScale}>
              <Link to="/contact" className="btn btn-primary text-lg px-10 py-4 inline-block">
                Start Your Project
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <Section className="bg-white">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
          className="space-y-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={fadeInUp}
              custom={index}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <div className="text-blue-600 mb-6">{service.icon}</div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  {service.title}
                </h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="text-2xl font-bold text-blue-600 mb-6">
                  {service.pricing}
                </div>
                <motion.div {...hoverScale}>
                  <Link
                    to="/contact"
                    className="btn btn-primary inline-block"
                  >
                    Get Quote
                  </Link>
                </motion.div>
              </div>
              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <div className="card p-8 bg-slate-50">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">What's Included:</h3>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Process */}
      <Section
        title="Our Process"
        subtitle="From idea to launch in 4 simple steps"
        className="bg-slate-100"
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {process.map((item, index) => (
            <motion.div
              key={item.step}
              variants={fadeInUp}
              custom={index}
              className="text-center"
            >
              <div className="text-6xl font-bold text-blue-600 mb-4 opacity-20">
                {item.step}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {item.title}
              </h3>
              <p className="text-slate-600">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* CTA */}
      <Section
        title="Ready to Get Started?"
        subtitle="Free consultation • Fast turnaround • Transparent pricing"
        className="bg-gradient-to-br from-blue-600 to-blue-700 text-white"
        containerClassName="text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <motion.div {...hoverScale} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn bg-white text-blue-600 hover:bg-slate-100 text-lg px-10 py-4">
              Schedule Consultation
            </Link>
            <Link to="/projects" className="btn btn-ghost text-lg px-10 py-4 border-2 border-white hover:bg-white hover:text-blue-600">
              View Case Studies
            </Link>
          </motion.div>
        </motion.div>
      </Section>
    </PageTransition>
  );
}
