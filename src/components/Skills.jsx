import React from 'react';

const Skills = () => {
  const skills = {
    "Languages": ["C++", "Java", "JavaScript", "HTML", "CSS"],
    "Frameworks": ["ReactJS", "NodeJS", "Tailwind CSS"],
    "Databases": ["MySQL", "MongoDB"],
    "Tools/Platforms": ["Git", "VS Code"],
    "Technical Skills": ["Data Structures and Algorithms (DSA)", "Object Oriented Programming (OOP)"],
    "Soft Skills": ["Continuous Learning", "Consistency", "Adaptability", "Problem-Solving Skills", "Team Player"],
  };

  return (
    <div id="skills">
      <h2>Skills</h2>
      <section>
        {Object.entries(skills).map(([category, skillsList]) => (
          <div key={category} className="skill-category">
            <h3>{category}</h3>
            <ul>
              {skillsList.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Skills;
