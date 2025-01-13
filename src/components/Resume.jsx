import React from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "./resume.css";

function Resume() {
  return (
    <div className="resume-container">
      <header className="resume-header">
        <div className="address-info">
          <h1>Address</h1>
          <p>Nellmapius, Pretoria, Gauteng, South Africa 0122</p>
        </div>
      </header>

      <div className="resume-content">
        <div className="expertise">
          <h2>Skills</h2>
          <ul>
            <li>React Native</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>MongoDB</li>
          </ul>
        </div>

        <div className="education">
          <h2>Education</h2>
          <div className="education-item">
          <div className="education-item">
            <h3>Matric</h3>
            <p>Bokamoso Senior Secondary School, 2014 - 2018</p>
            
          </div>
            <h3>NQF 5 Information Technology in Systems Development</h3>
            <p>WeThinkCode_, 2021 - 2022</p>
            {/* <p>Graduated with distinction in Software Engineering and Web Development.</p> */}
          </div>
        </div>
        <div className="experience">
          <h2>Experience</h2>
          <div>
            <h3>Full-Stack Developer (2024 - Present)</h3>
            <p>
              Worked on scalable mobile and web applications, handling both backend and frontend development using React, React Native, Firebase, Mongodb and Node.js.
            </p>
          </div>
          
        </div>


        <div className="objective">
          <h2>Objective</h2>
          <p>
            Dedicated Full Stack Developer with a strong background in mobile and web application development, specializing 
            in JavaScript, React, and Node.js. Proven track record in creating dynamic and responsive user interfaces, 
            developing robust server-side applications, and ensuring seamless integration between front-end and back-end 
            systems. Committed to delivering high-quality, efficient, and scalable solutions that enhance user experiences and 
            drive business success. Eager to leverage technical skills and collaborative mindset in a Software Engineer role to 
            contribute to innovative projects and make a meaningful impact in a dynamic work environment.
          </p>
        </div>
      </div>

      <button className="download-button" onClick={downloadResume}>
        Download Resume (PDF)
      </button>
    </div>
  );
}

const downloadResume = () => {
  const resumeElement = document.querySelector(".resume-container");

  html2canvas(resumeElement, { scale: 2 }).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("resume.pdf");
  });
};

export default Resume;
