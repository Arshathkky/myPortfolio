import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Intro from '../Features/Intro';
import Navbar from '../Features/Navbar';

const Homepage = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  return (
    <motion.div id='Homepage' style={{ opacity, scale }}>
      <Navbar/>
      <Intro />
    </motion.div>
  );
};

export default Homepage;
