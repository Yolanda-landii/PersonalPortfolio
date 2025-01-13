import React from "react";
import "./groupProjects.css";

function FeatureCard({ title, description, icon }) {
  return (
    <div className="feature-card">
      <div className="icon-title">
        <span className="icon">{icon}</span>
        <h4 className="title">{title}</h4>
      </div>
      <div>{description}</div>
    </div>
  );
}

function GroupProjects() {
  const groupProject = {
    title: "Restaurant Reservation Application",
    description: "Plan, design, and develop a restaurant reservation application with an admin dashboard. The backend of the project uses Node.js and MongoDB.",
    teamMembers: ["Yolanda Mabotja", "Mabohlale Nkuna"],
    techStack: ["React Native [Expo]", "MongoDB", "Node.js"],
    features: [
      "Allow users to select a restaurant and choose a date and time for their reservation.",
      "Provide a calendar view for users to see available reservation slots.",
      "Allow users to view and manage their reservations, including editing or cancelling reservations.",
      "Create a separate admin dashboard for each restaurant to manage reservations and restaurant details.",
      "Analyse and represent data in charts for the admin.",
    ],
    collaboration: `
      - Conducted daily stand-ups to ensure clear communication and task alignment.
      - Created two separate repositories for the backend and frontend to organize the codebase.
      - Used feature-specific branches for development and merged them into the main branch upon completion.
      - Utilized Trello for task management by creating cards for each feature or task, ensuring smooth progress tracking.
    `,
  };

  return (
    <div className="content-container">
      <h2>Group Projects</h2>
      <h3>{groupProject.title}</h3>

      <div className="features-grid">
        <FeatureCard
          title="Overview"
          description={<p>{groupProject.description}</p>}
          icon="📄"
        />

        <FeatureCard
          title="Team Members"
          description={
            <ul>
              {groupProject.teamMembers.map((member, index) => (
                <li key={index}>{member}</li>
              ))}
            </ul>
          }
          icon="👥"
        />

        <FeatureCard
          title="Tech Stack"
          description={
            <ul>
              {groupProject.techStack.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          }
          icon="🛠️"
        />

        <FeatureCard
          title="Features"
          description={
            <ul>
              {groupProject.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          }
          icon="✨"
        />

        <FeatureCard
          title="Collaboration Experience"
          description={<p>{groupProject.collaboration}</p>}
          icon="🤝"
        />
      </div>
    </div>
  );
}

export default GroupProjects;
