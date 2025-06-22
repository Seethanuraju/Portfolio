import React from "react";
import { FaCertificate } from "react-icons/fa";
import '../style/Certification.css';

export default function Certifications() {
  const certs = [
    "Salesforce Developer - Smart Bridge",
    "Introduction To Machine Learning - Indian Servers",
    "Certified Java Full Stack",
    "PEGA Certified System Architect v8.8",
    "PEGA Certified Senior System Architect v8.8"
  ];

  return (
    <section className="section certifications-section" data-aos="fade-up">
      <h2 className="section-title">
        <FaCertificate style={{ marginRight: '8px', color: '#00aaff' }} />
        Certifications
      </h2>

      <div className="certifications-grid">
        {certs.map((cert, index) => (
          <div key={index} className="cert-card">
            <FaCertificate className="cert-icon" />
            <p>{cert}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
