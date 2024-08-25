import React from 'react';

import SkillBar from '../Component/SkillBar';

const skills = [
  { name: 'HTML5', level: 90 },
  { name: 'CSS3', level: 85 },
  { name: 'JavaScript', level: 80 },
  { name: 'React', level: 75 },
  { name: 'Node.js', level: 85 },
  { name: 'Java Spring Boot', level: 50 },
  { name: 'MySQL', level: 75 },
  { name: 'MongoDB', level: 70 },
  { name: 'Git', level: 85 },
  { name: 'React Native', level: 75 },
  { name: 'Flutter', level: 30 },
];

const MySkills = () => {
  return (
    <div className="skills-container">
      <h2>My Skills</h2>
      {skills.map((skill, index) => (
        <SkillBar key={index} name={skill.name} level={skill.level} />
      ))}
    </div>
  );
};

export default MySkills;
