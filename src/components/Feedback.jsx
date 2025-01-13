import React from "react";
import "./feedback.css";

function FeedbackReflections() {
  return (
    <div className="feedback-container">
      <h2 className="feedback-title">Feedback and Reflection?</h2>
      <div className="feedback-cards">
        <div className="feedback-card">
          <div className="feedback-avatar">VM</div>
          <div className="feedback-content">
            <h3>Facilitator Feedback</h3>
            <p>"Great progress throughout the program. Keep up the excellent work!"</p>
          </div>
        </div>
        <div className="feedback-card">
          <div className="feedback-avatar">YM</div>
          <div className="feedback-content">
            <h3>Self-Reflection</h3>
            <p>I’ve grown significantly in technical skills and learned the value of teamwork. My strengths lie in persistence and problem-solving, and I plan to improve my time management.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedbackReflections;
