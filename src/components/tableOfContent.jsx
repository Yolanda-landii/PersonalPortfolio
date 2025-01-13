import React from "react";
import "./tableOfContent.css";

function TableOfContents() {
  const sections = [
    { number: "1", label: "Cover Page", id: "cover-page", color: "#3DBFF2" },
    { number: "2", label: "Personal Introduction", id: "personal-introduction", color: "#6CD35C" },
    { number: "3", label: "Resume", id: "resume", color: "#FF9B3F" },
    { number: "4", label: "Skills Matrix", id: "skills-matrix", color: "#F06191" },
    { number: "5", label: "Individual Projects", id: "individual-projects", color: "#A46CDA" },
    { number: "6", label: "Group Projects", id: "group-projects", color: "#3DAAF2" },
    { number: "7", label: "Assessments", id: "assessments", color: "#6CC45C" },
    { number: "8", label: "Feedback and Reflections", id: "feedback-reflections", color: "#FF803F" },
    { number: "9", label: "Post-Program Goals", id: "post-program-goals", color: "#FF9B3F" },
  ];

  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="content-container">
      <h2 className="toc-title">Table of Contents</h2>
      <ul className="toc-list">
        {sections.map((section) => (
          <li
            key={section.number}
            className="toc-item"
            onClick={() => handleScroll(section.id)}
            style={{ borderColor: section.color }}
          >
            <span className="toc-number" style={{ backgroundColor: section.color }}>
              {section.number}
            </span>
            <span className="toc-link">{section.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TableOfContents;
