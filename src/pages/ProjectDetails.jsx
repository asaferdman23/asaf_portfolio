import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import Chip from '../components/Chip';
import { projects } from '../data/projects';
import { fadeInUp, staggerContainer, hoverScale } from '../lib/motion';

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  return (
    <PageTransition>
      <div className="pt-24 pb-16">
        <div className="container-custom">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <span className="text-blue-600 font-medium">{project.year}</span>
                <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 2).map(tag => (
                    <Chip key={tag} variant="blue" className="text-sm">
                      {tag}
                    </Chip>
                  ))}
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                {project.excerpt}
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="mb-12">
              <div className="aspect-video bg-slate-200 rounded-2xl overflow-hidden">
                <img
                  src={project.cover}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden w-full h-full bg-slate-200 items-center justify-center">
                  <span className="text-slate-600 text-lg font-medium">{project.title} Cover</span>
                </div>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <motion.div variants={fadeInUp} className="md:col-span-2">
                <div className="prose prose-slate max-w-none">
                  {project.description.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-slate-700 leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-8">
                <div className="card p-6">
                  <h3 className="font-bold text-slate-900 mb-4">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <Chip key={tag} className="text-sm">
                        {tag}
                      </Chip>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  {project.github && (
                    <motion.a
                      {...hoverScale}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-ghost w-full flex items-center justify-center space-x-2"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      <span>View Code</span>
                    </motion.a>
                  )}

                  {project.demo && (
                    <motion.a
                      {...hoverScale}
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary w-full flex items-center justify-center space-x-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      <span>Live Demo</span>
                    </motion.a>
                  )}
                </div>
              </motion.div>
            </div>

            {project.gallery && project.gallery.length > 0 && (
              <motion.div variants={fadeInUp}>
                <h3 className="text-2xl font-bold text-slate-900 mb-8">Gallery</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {project.gallery.map((image, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="aspect-video bg-slate-200 rounded-xl overflow-hidden"
                    >
                      <img
                        src={image}
                        alt={`${project.title} screenshot ${index + 1}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextElementSibling.style.display = 'flex';
                        }}
                      />
                      <div className="hidden w-full h-full bg-slate-200 items-center justify-center">
                        <span className="text-slate-600 font-medium">Screenshot {index + 1}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}