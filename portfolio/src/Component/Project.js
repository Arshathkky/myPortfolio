import React from 'react';
import '../Style/Project.css'; // Import the CSS file

const Project = ({ title, description, technologies, link, image }) => {
  return (
    <div className="project">
      {image && <img src={image} alt={`${title} screenshot`} className="project-image" />}
      <div className="project-content">
        <h2 className="project-title">{title}</h2>
        <p className="project-description">{description}</p>
        <p className="project-technologies"><strong>Technologies:</strong> {technologies}</p>
        {link && <a href={link} className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>}
      </div>
    </div>
  );
};

export default Project;
