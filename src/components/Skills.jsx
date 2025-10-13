import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../lib/motion';
import Section from './Section';
import Chip from './Chip';

export default function Skills() {
  const skills = [
    { name: 'React', category: 'frontend' },
    { name: 'Node.js', category: 'backend' },
    { name: 'TypeScript', category: 'language' },
    { name: 'AWS', category: 'cloud' },
    { name: 'Next.js', category: 'frontend' },
    { name: 'Vite', category: 'frontend' },
    { name: 'Tailwind CSS', category: 'frontend' },
    { name: 'Framer Motion', category: 'animation' },
    { name: 'MongoDB', category: 'database' },
    { name: 'DynamoDB', category: 'database' },
    { name: 'Java/Kotlin', category: 'language' },
    { name: 'AOSP', category: 'mobile' }
  ];

  const getCategoryColor = (category) => {
    const colors = {
      frontend: 'bg-blue-100 text-blue-800',
      backend: 'bg-green-100 text-green-800',
      language: 'bg-purple-100 text-purple-800',
      cloud: 'bg-orange-100 text-orange-800',
      animation: 'bg-pink-100 text-pink-800',
      database: 'bg-indigo-100 text-indigo-800',
      mobile: 'bg-teal-100 text-teal-800'
    };
    return colors[category] || 'bg-slate-100 text-slate-800';
  };

  return (
    <Section
      title="Skills & Technologies"
      subtitle="The tools and technologies I use to build amazing products"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            variants={fadeInUp}
            custom={index}
          >
            <Chip className={getCategoryColor(skill.category)}>
              {skill.name}
            </Chip>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}