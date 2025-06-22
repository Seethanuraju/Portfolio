import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import '../style/Education.css';

export default function Education() {
  return (
    <section className="section education-section" id="education" data-aos="fade-up">
      <h2 className="section-title">
        <FaGraduationCap style={{ marginRight: '8px', color: '#00aaff' }} />
        Education
      </h2>

      <div className="education-card">
        <p className="degree"><strong>B.Tech in CSE (AI & ML)</strong></p>
        <p className="institute">Avanthi Institute of Engineering and Technology</p>
        <p className="cgpa">CGPA: 7.79 (2020 - 2024)</p>
      </div>
    </section>
  );
}
