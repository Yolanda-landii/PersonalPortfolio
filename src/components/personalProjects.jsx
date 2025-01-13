import React from "react";
import "./personalProjects.css";

function IndividualProjects() {
  const projects = [
    {
      title: "Employee Application",
      description: "The objective of this task is to assess your understanding of array methods, array manipulation, objects, React’s useState hook, props and also introduce you to JavaScript’s local storage.",
      techStack: ["HTML", "CSS", "JavaScript"],
      features: ["Admins should be able to do CRUD operations on the application", "Admins should be able to filter (search) employees"],
      challenges: "Responsiveness to different screen sizes.",
      screenshot: "/assets/employee app.jpg",
      demoLink: "https://https://github.com/Yolanda-landii/Admin-Portal/tree/updates",
    },
    {
      title: "Recipe Application",
      description: "Build an application using React.js and JSON server that allows users to store, manage, and refer to their favourite dishes as recipes. ",
      techStack: ["React", "Node.js"],
      features: ["Users should be able to register and  to login with their credentials", "Users can add a new recipe with the following details: Recipe Name, Ingredients, Instructions, Category (e.g., Dessert, Main Course, Appetiser), Preparation Time, Cooking Time, Servings"],
      challenges: "Resolved a complex API integration issue.",
      screenshot: "/assets/pexels-mike-jones-8804979.jpg",
      demoLink: "https://https://github.com/Yolanda-landii/ReactRecipeApp/tree/ReactRecipeApp",
    },
    {
      title: "Hotel Room Application",
      description: "The objective of the task is to build an interactive React application with CRUD operations that integrate with Firebase to assess your understanding of everything learnt so far. You will be expected to utilise React’s core concepts (State management, reusable components) everywhere applicable. The web application will take the form of two separate applications, one for admin and one for the client/customer. This will be the first task that involves real time communication between connected apps.",
      techStack: ["React", "Node.js"],
      features: ["Users can register and log in using Firebase Authentication.", "Users can view a list of available accommodations."],
      challenges: "Implementing the payment gateway and fetching data from firebase",
      screenshot: "/assets/logo.png",
      demoLink: "https://https://github.com/Yolanda-landii/HotelBooking_App/tree/Fixes",
    },
  ];

  return (
    <div className="content-container">
      <h2>Individual Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.screenshot}
              alt={`${project.title} screenshot`}
              className="project-image"
            />
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p>
                <strong>Tech Stack:</strong> {project.techStack.join(", ")}
              </p>
              <p>
                <strong>Key Features:</strong>
              </p>
              <ul>
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <p>
                <strong>Challenges:</strong> {project.challenges}
              </p>
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IndividualProjects;
