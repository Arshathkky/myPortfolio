import React, { useState } from 'react';
import Project from '../Component/Project';
import projects from '../Assets/Data';
import '../Style/Project.css';

const ProjectList = () => {
  const [showAll, setShowAll] = useState(false);

  const handleReadMore = () => {
    setShowAll(prev => !prev);
  };

  return (
    <div id='projects' className="portfolio">
      {projects.slice(0, showAll ? projects.length : 2).map((project, index) => (
        <Project
          key={index}
          title={project.title}
          description={project.description}
          technologies={project.technologies}
          link={project.link}
          image={project.image}
        />
      ))}
      {projects.length > 2 && (
        <div className="read-more-container">
          <button className="read-more-button" onClick={handleReadMore}>
            {showAll ? 'Show Less' : 'Read More'}
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectList;
