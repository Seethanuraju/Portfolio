import React from "react";
import { FaTools } from "react-icons/fa";
import '../style/Skills.css';

export default function Skills() {
  const programmingLanguages = [
    "Java", "Python", "HTML", "CSS", "Oracle SQL", "MySQL", "Spring Boot", "Spring MVC"
  ];

  const tools = [
    "VS Code", "Eclipse", "PEGA Tool", "Postman", "Swagger"
  ];

  const softSkills = [
    "Communication", "Teamwork", "Quick Learner", "Multitasking"
  ];

  return (
    <section className="section skills-section" data-aos="fade-up">
      <h2 className="section-title">
        <FaTools style={{ marginRight: "8px", color: "#00aaff" }} />
        Skills
      </h2>

      <div className="skill-group">
        <h3>Languages & Frameworks</h3>
        <div className="skill-tags">
          {programmingLanguages.map((lang, idx) => (
            <span key={idx} className="skill-tag">{lang}</span>
          ))}
        </div>
      </div>

      <div className="skill-group">
        <h3>Tools & Platforms</h3>
        <div className="skill-tags">
          {tools.map((tool, idx) => (
            <span key={idx} className="skill-tag">{tool}</span>
          ))}
        </div>
      </div>

      <div className="skill-group">
        <h3>Soft Skills</h3>
        <div className="skill-tags">
          {softSkills.map((skill, idx) => (
            <span key={idx} className="skill-tag">{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
