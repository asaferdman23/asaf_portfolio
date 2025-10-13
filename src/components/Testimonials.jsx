import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../lib/motion';
import { testimonials } from '../data/testimonials';
import Section from './Section';

export default function Testimonials() {
  return (
    <Section
      title="What People Say"
      subtitle="Testimonials from clients and collaborators"
      className="bg-slate-100"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid md:grid-cols-3 gap-8"
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            variants={fadeInUp}
            className="card p-6"
          >
            <div className="mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>

            <blockquote className="text-slate-700 mb-6">
              "{testimonial.quote}"
            </blockquote>

            <div className="border-t border-slate-200 pt-4">
              <div className="font-semibold text-slate-900">
                {testimonial.name}
              </div>
              <div className="text-sm text-slate-600">
                {testimonial.role}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}