import { motion } from 'framer-motion';
import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'AI Customer Support Agent',
    category: 'AI Agent',
    description: 'Intelligent chatbot that handles 10,000+ customer queries daily with 95% satisfaction rate.',
    tech: ['GPT-4', 'Python', 'FastAPI', 'React'],
    image: 'gradient-1', // placeholder
    color: 'from-blue-400 to-blue-600'
  },
  {
    id: 2,
    title: 'Enterprise Analytics Dashboard',
    category: 'Dashboard',
    description: 'Real-time data visualization platform processing 1M+ events per day.',
    tech: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
    image: 'gradient-2',
    color: 'from-purple-400 to-purple-600'
  },
  {
    id: 3,
    title: 'Multi-Platform Automation',
    category: 'Automation',
    description: 'Seamless integration connecting Salesforce, Slack, and custom APIs.',
    tech: ['Make', 'Zapier', 'REST API', 'Webhooks'],
    image: 'gradient-3',
    color: 'from-green-400 to-green-600'
  }
];

export default function JumindWork() {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <section id="work" className="section-jumind-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#4DA8FF] rounded-full mix-blend-screen filter blur-3xl opacity-10"></div>

      <div className="container-jumind relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
            <span className="text-[#4DA8FF] font-semibold text-sm tracking-wide uppercase">Featured Work</span>
          </div>
          <h2 className="heading-jumind-lg text-white mb-6">
            Projects That
            <br />
            <span className="text-gradient-jumind">Make an Impact</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            From concept to deployment, we deliver solutions that exceed expectations
          </p>
        </motion.div>

        {/* Projects Showcase */}
        <div className="max-w-6xl mx-auto">
          {/* Project Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {projects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => setActiveProject(index)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeProject === index
                    ? 'bg-[#4DA8FF] text-white shadow-lg shadow-[#4DA8FF]/30'
                    : 'bg-white/10 text-white/70 hover:bg-white/20 border border-white/20'
                }`}
              >
                {project.category}
              </button>
            ))}
          </div>

          {/* Active Project Display */}
          <motion.div
            key={activeProject}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Device Frame - Laptop Mockup */}
            <div className="relative mx-auto max-w-5xl">
              {/* Laptop Body */}
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-t-2xl p-4 shadow-2xl">
                {/* Screen Bezel */}
                <div className="bg-black rounded-lg p-3">
                  {/* Screen Content */}
                  <div className={`aspect-video rounded bg-gradient-to-br ${projects[activeProject].color} relative overflow-hidden`}>
                    {/* Simulated UI Elements */}
                    <div className="absolute inset-0 p-8 flex flex-col">
                      <div className="flex gap-2 mb-6">
                        <div className="w-3 h-3 rounded-full bg-white/30"></div>
                        <div className="w-3 h-3 rounded-full bg-white/30"></div>
                        <div className="w-3 h-3 rounded-full bg-white/30"></div>
                      </div>
                      <div className="flex-1 grid grid-cols-3 gap-4">
                        {[...Array(6)].map((_, i) => (
                          <div key={i} className="bg-white/20 backdrop-blur-sm rounded-lg"></div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>
                
                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-2 bg-gray-900 rounded-b-lg"></div>
              </div>
              
              {/* Laptop Base */}
              <div className="h-3 bg-gradient-to-b from-gray-800 to-gray-700 rounded-b-3xl shadow-xl"></div>
              
              {/* Bottom Shadow */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-4/5 h-4 bg-[#4DA8FF]/20 blur-2xl"></div>
            </div>

            {/* Project Info */}
            <div className="mt-16 text-center max-w-3xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {projects[activeProject].title}
              </h3>
              <p className="text-lg text-white/70 mb-8">
                {projects[activeProject].description}
              </p>
              
              {/* Tech Stack */}
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {projects[activeProject].tech.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white border border-white/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* View Project Button */}
              <button className="btn-jumind-outline">
                View Case Study
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-24"
        >
          <p className="text-lg text-white/70 mb-8">
            Want to see more? Check out our complete portfolio.
          </p>
          <a href="#contact" className="btn-jumind-outline">
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}

