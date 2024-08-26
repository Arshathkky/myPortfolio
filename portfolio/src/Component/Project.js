import React from 'react';
import { motion } from 'framer-motion';
import '../Style/Project.css'; 
const Project = ({ title, description, technologies, link, image }) => {
  
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="project"
      variants={variants}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {image ? (
        <img
          src={image} 
          alt={`${title} screenshot`}
          className="project-image"
        />
      ) : (
        <p>No image available</p>
      )}
      <div className="project-content">
        <h2 className="project-title">{title}</h2>
        <p className="project-description">{description}</p>
        <p className="project-technologies"><strong>Technologies:</strong> {technologies}</p>
        {link && <a href={link} className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>}
      </div>
    </motion.div>
  );
};

export default Project;
