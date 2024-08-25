import React from 'react';
import Project from '../Component/Project.js';
import projects from '../Assets/Data.js'; // Import project data

const ProjectList = () => {
  return (
    <div className="portfolio">
      {projects.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          description={project.description}
          technologies={project.technologies}
          link={project.link}
          image={project.image}
        />
      ))}
    </div>
  );
};

export default ProjectList;
