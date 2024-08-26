import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import '../Style/Aboutme.css'; // Import the updated CSS file

const AboutMe = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.1, 1]);

  return (
    <div id='contact' className="about-me">
      <motion.div
        className="container"
        style={{ scale }}
      >
        <h1>Hey, I am Mohamed Arshath</h1>
        <p>
          I'm a passionate developer with skills in both front-end and back-end technologies. I work with the MERN stack, Java Spring Boot, and React Native to build web and mobile apps. Right now, I'm working on a cool portfolio website with animated text and a smooth-scrolling homepage. I'm quick to pick up new tech and love solving problems. With experience in managing accounts and handling data, I bring a practical approach to my development work. I'm excited to use my skills to create great solutions and make a positive impact in any project I take on.
        </p>

        <section className="personal-details">
          <h2>Personal Details</h2>
          <p><strong>Name:</strong> Mohamed Iyoob Mohamed Arshath</p>
          <p><strong>Date of Birth:</strong> 2000.08.05</p>
          <p><strong>Address:</strong> No.03, Abrar Town, Nooraniya Refuge Road, New Kattankudy -06, Batticaloa</p>
          <p><strong>Email:</strong> <a href="mailto:arshathhaseen@gmail.com" className="contact-link">arshathhaseen@gmail.com</a></p>
          <p><strong>Phone:</strong> <a href="tel:+94778763765" className="contact-link">0778763765</a></p>
          <p><strong>GitHub:</strong> <a href="https://github.com/Arshathkky" target="_blank" rel="noopener noreferrer" className="contact-link">github.com/Arshathkky</a></p>
          <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/arshathhaseen" target="_blank" rel="noopener noreferrer" className="contact-link">linkedin.com/in/arshathhaseen</a></p>
        </section>

        <section className="contact">
          <h2>Download CV</h2>
          <a href="https://drive.google.com/file/d/12z4qtoYnd4Ggchtlp_geSKOs_lIBJ_0u/view?usp=drive_link" className="download-cv-button" download>
            Download CV
          </a>
        </section>
      </motion.div>

      <motion.div
        className="item"
        style={{ scaleY: scrollYProgress }}
      />
    </div>
  );
};

export default AboutMe;
