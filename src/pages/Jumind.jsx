import { motion } from 'framer-motion';
import HeroSpline from '../components/jumind/HeroSpline';
import ServicesPremium from '../components/jumind/ServicesPremium';
import JumindProjectsHorizontal from '../components/jumind/JumindProjectsHorizontal';
import JumindWhy from '../components/jumind/JumindWhy';
import JumindFounder from '../components/jumind/JumindFounder';
import JumindContact from '../components/jumind/JumindContact';
import JumindFooter from '../components/jumind/JumindFooter';

export default function Jumind() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="overflow-hidden relative bg-[#09111C]"
    >
      <div className="relative">
        <HeroSpline />
        <ServicesPremium />
        <JumindProjectsHorizontal />
        <JumindWhy />
        <JumindFounder />
        <JumindContact />
        <JumindFooter />
      </div>
    </motion.div>
  );
}

