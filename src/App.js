import React from "react";
import CoverPage from "./components/CoverPage";
import TableOfContents from "./components/tableOfContent";
import PersonalIntroduction from "./components/personalIntro";
import Resume from "./components/Resume";
import SkillsMatrix from "./components/SkillsMatrix";
import IndividualProjects from "./components/personalProjects";
import GroupProjects from "./components/groupProjects";
import Assessments from "./components/Assessment";
import FeedbackReflections from "./components/Feedback";
import PostProgramGoals from "./components/postProgramGoals";
import "./App.css";

function App() {
  return (
    <div className="portfolio-container">
      <section id="cover-page">
        <CoverPage />
      </section>
      <section id="table-of-contents">
        <TableOfContents />
      </section>
      <section id="personal-introduction">
        <PersonalIntroduction />
      </section>
      <section id="resume">
        <Resume />
      </section>
      <section id="skills-matrix">
        <SkillsMatrix />
      </section>
      <section id="individual-projects">
        <IndividualProjects />
      </section>
      <section id="group-projects">
        <GroupProjects />
      </section>
      <section id="assessments">
        <Assessments />
      </section>
      <section id="feedback-reflections">
        <FeedbackReflections />
      </section>
      <section id="post-program-goals">
        <PostProgramGoals />
      </section>
    </div>
  );
}

export default App;
