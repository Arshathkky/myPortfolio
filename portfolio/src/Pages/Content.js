import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import MySkills from '../Features/MySkills';
import Services from '../Features/Services';
import ProjectList from '../Features/ProjectList';

const Content = () => {
  const { scrollYProgress } = useScroll();

  // Define animations for each section
  const slideInMySkills = useTransform(scrollYProgress, [0, 0.3], ['750px', '0px']);
  const rotateServices = useTransform(scrollYProgress, [0.3, 0.6], [0, 360]);

  return (
    <div>
      <motion.div
        style={{ x: slideInMySkills }}
        initial={{ x: '100px' }}
        animate={{ x: 0 }}
        transition={{ 
          duration: 0.5, 
          ease: 'easeInOut' 
        }}
      >
        <MySkills />
      </motion.div>

      <motion.div
        style={{ rotate: rotateServices }}
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ 
          duration: 0.5, 
          ease: 'easeOut' 
        }}
      >
        <Services />
      </motion.div>

      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 10
        }}
      >
        <ProjectList />
      </motion.div>
    </div>
  );
};

export default Content;
