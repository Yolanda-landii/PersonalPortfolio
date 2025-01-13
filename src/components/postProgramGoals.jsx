import React from "react";
import "./postProgramGoals.css";

function GoalItem({ text }) {
  return (
    <div className="goal-item">
      <span className="check-icon">✔</span>
      <p>{text}</p>
    </div>
  );
}

function PostProgramGoals() {
  return (
    <div className="content-container">
      <h2>Post-Program Goals</h2>
      
      <h3>Short-Term Goals:</h3>
      <div className="goals-list">
        <GoalItem text="Secure a job in web development." />
        <GoalItem text="Build 2-3 more portfolio projects." />
      </div>
      
      <h3>Long-Term Goals:</h3>
      <div className="goals-list">
        <GoalItem text="Become a permanent Junior full-stack developer." />
        <GoalItem text="Contribute to open-source projects." />
      </div>
    </div>
  );
}

export default PostProgramGoals;
