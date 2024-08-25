import React from 'react';
import '../Style/Skills.css';

const SkillBar = ({ name, level }) => {
  return (
    <div className="skill-bar">
      <div className="skill-info">
        <span>{name}</span>
        <span>{level}%</span>
      </div>
      <div className="bar">
        <div
          className="progress"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
};

export default SkillBar;
