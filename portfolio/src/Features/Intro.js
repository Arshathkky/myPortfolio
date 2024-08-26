import React from 'react';
import { motion } from 'framer-motion';
import { ReactTyped as Typed } from 'react-typed';
import '../Style/Intro.css';

const Intro = () => {
  return (
    <div id="home" className="intro-container">
      <motion.div 
        className="intro-background"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      />
      
      <h1 className="greeting">
        <Typed
          strings={['Hey there! 👋']}
          typeSpeed={100}
          backSpeed={100}
          loop={false}
        />
      </h1>
      <h2 className="name">
        <Typed
          strings={["I'm Arshath"]}
          typeSpeed={100}
          backSpeed={100}
          loop={10}
        />
      </h2>
      <p className="description">
        <Typed
          strings={[
            'A passionate Full-Stack Developer',
            'Creating seamless digital experiences',
            'Welcome to my world of code, creativity, and innovation!',
          ]}
          typeSpeed={100}
          backSpeed={40}
          startDelay={3000}
          loop={1}
        />
      </p>
    </div>
  );
};

export default Intro;
