import { motion } from 'framer-motion';

const reasons = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Speed',
    subtitle: 'Launch in Weeks, Not Months',
    description: 'Our AI-powered development process and pre-built components mean your project goes from concept to deployment at unprecedented speed. We move fast without compromising quality.',
    features: [
      'Rapid prototyping',
      'Agile methodology',
      'Continuous deployment',
      'Real-time updates'
    ]
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Intelligence',
    subtitle: 'AI-First Architecture',
    description: 'Every solution we build leverages the latest AI technologies. From intelligent automation to predictive analytics, we infuse intelligence into every layer of your system.',
    features: [
      'Machine learning integration',
      'Smart automation',
      'Predictive insights',
      'Natural language processing'
    ]
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: 'Quality',
    subtitle: 'Enterprise-Grade Standards',
    description: 'We don&apos;t cut corners. Every line of code is crafted with precision, tested thoroughly, and built to scale. Your solution is production-ready from day one.',
    features: [
      'Clean, maintainable code',
      'Comprehensive testing',
      'Security best practices',
      'Scalable architecture'
    ]
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function JumindWhy() {
  return (
    <section className="section-jumind bg-white">
      <div className="container-jumind">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-6 py-2 bg-[#4DA8FF]/10 rounded-full mb-6">
            <span className="text-[#1E86F7] font-semibold text-sm tracking-wide uppercase">Why Choose Ju-Mind</span>
          </div>
          <h2 className="heading-jumind-lg mb-6">
            Built on Three
            <br />
            <span className="text-gradient-jumind">Core Principles</span>
          </h2>
          <p className="text-xl text-[#C9D1D9] max-w-3xl mx-auto">
            We combine speed, intelligence, and quality to deliver exceptional results
          </p>
        </motion.div>

        {/* Three Columns */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[#4DA8FF] to-[#1E86F7] text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#4DA8FF]/30">
                {reason.icon}
              </div>

              {/* Title */}
              <h3 className="text-3xl font-bold text-[#0A0A0A] mb-3">
                {reason.title}
              </h3>

              {/* Subtitle */}
              <p className="text-lg font-semibold text-[#4DA8FF] mb-4">
                {reason.subtitle}
              </p>

              {/* Description */}
              <p className="text-[#C9D1D9] leading-relaxed mb-6">
                {reason.description}
              </p>

              {/* Features List */}
              <ul className="space-y-3">
                {reason.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#4DA8FF] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[#C9D1D9]">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Decorative Line */}
              <div className="mt-8 h-1 w-20 bg-gradient-to-r from-[#4DA8FF] to-transparent rounded-full"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100">
            <div className="text-4xl font-bold text-gradient-jumind mb-2">95%</div>
            <div className="text-sm text-[#C9D1D9]">Client Satisfaction</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100">
            <div className="text-4xl font-bold text-gradient-jumind mb-2">50+</div>
            <div className="text-sm text-[#C9D1D9]">Projects Delivered</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100">
            <div className="text-4xl font-bold text-gradient-jumind mb-2">24/7</div>
            <div className="text-sm text-[#C9D1D9]">Support Available</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100">
            <div className="text-4xl font-bold text-gradient-jumind mb-2">100%</div>
            <div className="text-sm text-[#C9D1D9]">Custom Solutions</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

