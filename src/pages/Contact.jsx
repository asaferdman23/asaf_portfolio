import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import Section from '../components/Section';
import PageTransition from '../components/PageTransition';
import { fadeInUp, slideIn } from '../lib/motion';

export default function Contact() {
  const contactInfo = [
    {
      label: 'Email',
      value: 'asaf.erdman.dev@gmail.com',
      href: 'mailto:asaf.erdman.dev@gmail.com',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/asaferdman',
      href: 'https://linkedin.com/in/asaferdman',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      label: 'GitHub',
      value: 'github.com/asaferdman',
      href: 'https://github.com/asaferdman',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    }
  ];

  return (
    <PageTransition>
      <div className="pt-24 pb-16">
        <Section
          title="Get In Touch"
          subtitle="Ready to start your next project? Let's discuss how we can work together"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              variants={slideIn('left')}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Let's Create Something Amazing
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  We're currently available for new projects and partnerships.
                  Whether you need a full-stack web application, AI integration, or
                  mobile development, we'd love to hear about your ideas.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <motion.a
                    key={info.label}
                    variants={fadeInUp}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center space-x-4 p-4 rounded-lg hover:bg-slate-50 transition-colors group"
                  >
                    <div className="flex-shrink-0 text-blue-600 group-hover:text-blue-700 transition-colors">
                      {info.icon}
                    </div>
                    <div>
                      <div className="font-medium text-slate-900">{info.label}</div>
                      <div className="text-slate-600 group-hover:text-slate-700 transition-colors">
                        {info.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              <motion.div
                variants={fadeInUp}
                className="card p-6 bg-blue-50 border-blue-200"
              >
                <h4 className="font-semibold text-blue-900 mb-2">Response Time</h4>
                <p className="text-blue-800 text-sm">
                  I typically respond to messages within 24 hours during business days.
                  For urgent projects, please mention it in your message.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              variants={slideIn('right')}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </Section>
      </div>
    </PageTransition>
  );
}