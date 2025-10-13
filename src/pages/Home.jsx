import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import ProjectsGrid from '../components/ProjectsGrid';
import Testimonials from '../components/Testimonials';
import Section from '../components/Section';
import PageTransition from '../components/PageTransition';
import { projects } from '../data/projects';
import { hoverScale } from '../lib/motion';

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <About />
      <Skills />

      <Section
        id="projects"
        title="Featured Projects"
        subtitle="A selection of my recent work and personal projects"
        className="bg-slate-100"
      >
        <ProjectsGrid projects={projects} />
        <div className="text-center mt-12">
          <motion.div {...hoverScale}>
            <Link to="/projects" className="btn btn-primary">
              View All Projects
            </Link>
          </motion.div>
        </div>
      </Section>

      <Testimonials />

      <Section
        title="Let's build something great"
        subtitle="Have a project in mind? I'm available for freelance work."
        className="bg-slate-900 text-white"
        containerClassName="text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div {...hoverScale}>
            <Link to="/contact" className="btn btn-primary">
              Get in touch
            </Link>
          </motion.div>
        </motion.div>
      </Section>
    </PageTransition>
  );
}