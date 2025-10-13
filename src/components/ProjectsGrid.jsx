import { motion } from 'framer-motion';
import { staggerContainer } from '../lib/motion';
import ProjectCard from './ProjectCard';

export default function ProjectsGrid({ projects, showAll = false }) {
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {displayedProjects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </motion.div>
  );
}