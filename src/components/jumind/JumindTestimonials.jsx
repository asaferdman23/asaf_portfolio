import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'CEO, TechFlow',
    company: 'Enterprise SaaS',
    image: 'https://ui-avatars.com/api/?name=Sarah+Chen&background=4DA8FF&color=fff&size=200',
    quote: 'Ju-Mind transformed our customer support with an AI agent that handles thousands of inquiries daily. The speed and quality of their work exceeded all expectations.',
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    role: 'CTO, DataSync',
    company: 'Analytics Platform',
    image: 'https://ui-avatars.com/api/?name=Michael+Rodriguez&background=1E86F7&color=fff&size=200',
    quote: 'The custom dashboard they built processes millions of data points in real-time. Professional, fast, and exactly what we needed to scale our operations.',
    rating: 5
  },
  {
    id: 3,
    name: 'Emily Watson',
    role: 'Operations Director, AutoMate',
    company: 'Process Automation',
    image: 'https://ui-avatars.com/api/?name=Emily+Watson&background=4DA8FF&color=fff&size=200',
    quote: 'Our workflow automation reduced manual work by 80%. Ju-Mind\'s expertise in Make and Zapier integrations is unmatched. Highly recommend!',
    rating: 5
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

export default function JumindTestimonials() {
  const { language } = useLanguage();
  
  return (
    <section className="section-jumind bg-gradient-to-b from-gray-50 to-white">
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
            <span className="text-[#1E86F7] font-semibold text-sm tracking-wide uppercase">Client Success</span>
          </div>
          <h2 className="heading-jumind-lg mb-6">
            Trusted by
            <br />
            <span className="text-gradient-jumind">Industry Leaders</span>
          </h2>
          <p className="text-xl text-[#C9D1D9] max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={item}
              className="card-jumind-glow group relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-[#4DA8FF] to-[#1E86F7] rounded-full flex items-center justify-center text-white shadow-lg shadow-[#4DA8FF]/30">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#4DA8FF]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-[#0A0A0A] leading-relaxed mb-6 text-lg">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full border-2 border-[#4DA8FF]/20"
                />
                <div>
                  <div className="font-bold text-[#0A0A0A]">{testimonial.name}</div>
                  <div className="text-sm text-[#C9D1D9]">{testimonial.role}</div>
                  <div className="text-xs text-[#4DA8FF] font-semibold">{testimonial.company}</div>
                </div>
              </div>

              {/* Hover Effect Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#4DA8FF]/0 to-[#1E86F7]/0 group-hover:from-[#4DA8FF]/5 group-hover:to-[#1E86F7]/5 rounded-3xl transition-all duration-500 -z-10"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Social Proof Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 text-center"
        >
          <p className="text-[#C9D1D9] mb-8 text-sm uppercase tracking-wide font-semibold">
            Trusted by Leading Companies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-40">
            {/* Placeholder for company logos - using text for now */}
            {['TechFlow', 'DataSync', 'AutoMate', 'CloudScale', 'InnovateCo'].map((company, index) => (
              <div key={index} className="text-2xl font-bold text-[#0A0A0A] tracking-tight">
                {company}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16 p-12 bg-gradient-to-br from-[#4DA8FF]/10 to-[#1E86F7]/10 rounded-3xl border border-[#4DA8FF]/20"
        >
          <h3 className="text-3xl font-bold text-[#0A0A0A] mb-4">
            Ready to join our success stories?
          </h3>
          <p className="text-[#C9D1D9] mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how we can help transform your business with web apps, mobile apps, AI, and custom software solutions.
          </p>
          <a href="#contact" className="btn-jumind-primary">
            {language === 'he' ? 'בוא נדבר' : 'Let\'s Talk'}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

