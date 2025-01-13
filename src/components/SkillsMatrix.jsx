import React from "react";
import "./SkillsMatrix.css"; // Ensure this file contains your styles

function SkillsMatrix() {
  const skills = [
    { skill: "HTML", icon: "/assets/html.jpg", description: "Used in multiple projects.", level: "Intermediate" },
    { skill: "CSS", icon: "/assets/css.jpg", description: "Styled responsive layouts.", level: "Advanced" },
    { skill: "JavaScript", icon: "/assets/js.jpg", description: "Built dynamic web applications.", level: "Intermediate" },
    { skill: "TypeScript", icon: "/assets/ts.jpg", description: "Applied in API integrations.", level: "Beginner" },
    { skill: "React Native", icon: "/assets/react native.jpg", description: "Developed a to-do list app.", level: "Intermediate" },
  ];

  return (
    <div className="skills-container">
      <h2 className="skills-heading">My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <img src={skill.icon} alt={`${skill.skill} icon`} className="skill-icon" />
            <h3 className="skill-name">{skill.skill}</h3>
            <p className="skill-description">{skill.description}</p>
            <p className="skill-level">
              <strong>Proficiency Level:</strong> {skill.level}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsMatrix;
