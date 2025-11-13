import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectsGrid from '../components/ProjectsGrid';
import Section from '../components/Section';
import PageTransition from '../components/PageTransition';
import Chip from '../components/Chip';
import { projects } from '../data/projects';
import { fadeInUp, staggerContainer } from '../lib/motion';

export default function Projects() {
  const defaultFilter = 'הכל';
  const [activeFilter, setActiveFilter] = useState(defaultFilter);

  const allTags = [defaultFilter, ...new Set(projects.flatMap(project => project.tags))];

  const filteredProjects = activeFilter === defaultFilter
    ? projects
    : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <PageTransition>
      <div className="pt-24 pb-16">
        <Section
          title="כל הפרויקטים של Erdmind"
          subtitle="מערכות חיות שבנינו לסטארטאפים, מותגים וארגונים בישראל ובעולם"
        >
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="flex flex-wrap gap-3 justify-center mb-12"
          >
            {allTags.map((tag) => (
              <motion.button
                key={tag}
                variants={fadeInUp}
                onClick={() => setActiveFilter(tag)}
                className="transition-all duration-200"
              >
                <Chip
                  variant={activeFilter === tag ? 'blue' : 'default'}
                  className={`cursor-pointer ${
                    activeFilter === tag
                      ? 'ring-2 ring-blue-200'
                      : 'hover:bg-slate-200'
                  }`}
                >
                  {tag}
                </Chip>
              </motion.button>
            ))}
          </motion.div>

          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ProjectsGrid projects={filteredProjects} showAll />
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-slate-500 text-lg">
                אין פרויקטים שמתאימים לסינון שבחרתם.
              </p>
            </motion.div>
          )}
        </Section>
      </div>
    </PageTransition>
  );
}
