import React from "react";
import "./PersonalIntroduction.css"; // Add CSS styles here

function PersonalIntroduction() {
  return (
    <div className="introduction-container">
      <header className="intro-header">
        <h1>Welcome!</h1>
        <h2>Yolanda Mabotja</h2>
        <p>Full Stack Developer | Mobile & Web Applications</p>
        <div className="social-icons">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </header>
      
      <div className="intro-content">
        <div className="intro-image">
          <img
            src="/assets/IMG_4182.jpeg"
            alt="Yolanda Mabotja"
            className="profile-pic"
          />
        </div>
        <div className="intro-text">
          <p>
            Hello, I’m Yolanda Mabotja, a passionate software developer currently
            enrolled in a learnership program specializing in Full Stack
            Development. My journey into the world of technology began with a
            curiosity about how innovative solutions shape our daily lives.
          </p>
          <p>
            I’ve gained hands-on experience in building both mobile and web
            applications, enhancing my skills in modern frameworks and tools. My
            aspiration is to become a full-stack developer contributing to
            impactful projects that not only meet technical requirements but
            also provide exceptional user experiences.
          </p>

          <h3>Pre-Codetribe Academy Journey</h3>
          <p>
            Before joining the Codetribe Academy, I worked as a <strong>Python Animation Technical Director</strong> at the <strong>Tshimologong Precinct</strong> from January 2024 to April 2024. During this time, I:
          </p>
          <ul>
            <li>Assigned tasks to specific teams.</li>
            <li>Created production workflows to streamline development processes.</li>
            <li>Directed rendering processes for animation projects.</li>
            <li>Resolved minor technical issues that occurred during the development phase.</li>
            <li>Built complex rigging and character systems to assist the animation team in creating graphics that move seamlessly within game systems.</li>
            <li>Wrote Python scripts to optimize workflows for animators.</li>
          </ul>
          <p>
            This role allowed me to combine my technical expertise and leadership skills, enhancing my ability to solve complex problems and collaborate with creative teams.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PersonalIntroduction;
