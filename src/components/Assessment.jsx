import React from "react";
import "./assessment.css";

function Assessments() {
  const assessments = [
    { 
      name: "UI Challenge", 
      link: "https://https://github.com/Yolanda-landii/React_UI", 
      date: "2024-10-10", 
      grade: "85%" 
    },
    { 
      name: "JavaScript CardGuessingGame", 
      link: "https://https://github.com/Yolanda-landii/CardGuessingGame", 
      date: "2024-11-05", 
      grade: "90%" 
    },
    { 
      name: "React Native ImageGallery", 
      link: "https://https://github.com/Yolanda-landii/ImageGallery/tree/saveImage", 
      date: "2024-12-01", 
      grade: "92%" 
    },
  ];

  return (
    <div className="content-container">
      <h2>Assessments</h2>
      <div className="layout">
        <table className="assessments-table">
          <thead>
            <tr>
              <th>Assessment</th>
              <th>Date</th>
              <th>Grade</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {assessments.map((assessment, index) => (
              <tr key={index}>
                <td>{assessment.name}</td>
                <td>{assessment.date}</td>
                <td>{assessment.grade}</td>
                <td>
                  <a href={assessment.link} target="_blank" rel="noopener noreferrer">
                    View
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="image-container">
          <img src="/assets/assessments.jpg" alt="Assessments" />
        </div>
      </div>
    </div>
  );
}

export default Assessments;
