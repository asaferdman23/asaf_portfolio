import { motion } from 'framer-motion';
import JumindHero from '../components/jumind/JumindHero';
import JumindServices from '../components/jumind/JumindServices';
import JumindProjects from '../components/jumind/JumindProjects';
import JumindWhy from '../components/jumind/JumindWhy';
import JumindFounder from '../components/jumind/JumindFounder';
import JumindTestimonials from '../components/jumind/JumindTestimonials';
import JumindContact from '../components/jumind/JumindContact';
import JumindFooter from '../components/jumind/JumindFooter';

export default function Jumind() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="overflow-hidden"
    >
      <JumindHero />
      <JumindServices />
      <JumindProjects />
      <JumindWhy />
      <JumindFounder />
      <JumindTestimonials />
      <JumindContact />
      <JumindFooter />
    </motion.div>
  );
}

