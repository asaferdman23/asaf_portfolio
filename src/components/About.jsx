import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, slideIn } from '../lib/motion';
import Section from './Section';

export default function About() {
  const highlights = [
    {
      category: "Frontend",
      skills: "React, Vite, Tailwind, micro-frontends"
    },
    {
      category: "Backend",
      skills: "Node.js, Express, MongoDB/DynamoDB"
    },
    {
      category: "AI",
      skills: "prompts, agents, analytics, RAG prototypes"
    },
    {
      category: "DevOps",
      skills: "Docker, CI/CD, AWS basics"
    }
  ];

  return (
    <Section
      title="About Erdmind"
      subtitle="Building the next generation of web applications and AI-powered solutions"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={slideIn('left')}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="order-2 md:order-1"
        >
          <div className="card p-8">
            <p className="text-lg mb-6 leading-relaxed">
              <span className="font-bold text-blue-600">Erdmind is a full-stack development company.</span> With 4+ years of experience across high-growth startups and complex system architectures, we specialize in building scalable platforms that perform under pressure.
            </p>
            <p className="text-lg mb-6 leading-relaxed">
              We currently maintain live production platforms including <span className="font-semibold">eliteteamacademy.com</span> and an <span className="font-semibold">AI-powered fitness coaching application</span> serving real users. Our approach combines rapid execution with robust engineering practices—delivering solutions that scale from MVP to enterprise.
            </p>
            <p className="text-lg mb-6 leading-relaxed">
              From React-based SPAs to Node.js microservices, AI integrations to cloud infrastructure—Erdmind builds complete systems that drive business results. We deliver senior-level engineering expertise with the speed and focus of a dedicated development partner.
            </p>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-4"
            >
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.category}
                  variants={fadeInUp}
                  className="flex"
                >
                  <span className="font-semibold text-blue-600 min-w-[80px]">
                    {highlight.category}:
                  </span>
                  <span className="text-slate-600">{highlight.skills}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          variants={slideIn('right')}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative">
            <div className="w-80 h-80 bg-gradient-to-br from-blue-100 to-slate-200 rounded-2xl flex items-center justify-center">
              <div className="w-64 h-64 rounded-xl overflow-hidden">
                <img 
                  src="/assets/IMG_1553.jpeg" 
                  alt="Profile" 
                  className="w-full h-full object-cover object-[center_top]"
                />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}