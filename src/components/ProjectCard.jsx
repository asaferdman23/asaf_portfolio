import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { hoverScale, fadeInUp } from '../lib/motion';
import Chip from './Chip';

export default function ProjectCard({ project }) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="group"
    >
      <Link to={`/projects/${project.slug}`}>
        <motion.div
          {...hoverScale}
          className="card overflow-hidden group-hover:shadow-xl transition-shadow duration-300"
        >
          <div className="aspect-video bg-gradient-to-br from-slate-200 to-slate-300 relative overflow-hidden">
            <img
              src={project.cover}
              alt={project.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextElementSibling.style.display = 'flex';
              }}
            />
            <div className="hidden absolute inset-0 bg-slate-200 items-center justify-center">
              <span className="text-slate-600 font-medium">{project.title}</span>
            </div>
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {project.isLive && (
              <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                LIVE
              </div>
            )}
          </div>

          <div className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-slate-500 font-medium">{project.year}</span>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
              {project.title}
            </h3>

            <p className="text-slate-600 mb-4 line-clamp-2">
              {project.excerpt}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 3).map((tag) => (
                <Chip key={tag} variant="blue" className="text-xs">
                  {tag}
                </Chip>
              ))}
              {project.tags.length > 3 && (
                <Chip className="text-xs">
                  +{project.tags.length - 3} more
                </Chip>
              )}
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}