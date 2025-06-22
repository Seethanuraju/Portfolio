import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import '../style/Project.css';

export default function Projects() {
  const projectData = [
    {
      title: "Result Application",
      tech: "Spring Boot, Java, Oracle, HTML/CSS/JS, Thymeleaf",
      description:
        "A full-stack web application developed to manage student results and academic records. Enables admin/teachers to add, update, and view student marks and grades, while allowing students to log in and view their personal results."
    },
    {
      title: "Encrypt-Decrypt App",
      tech: "Java, Spring Boot, MySQL, React.js, REST API",
      description:
        "A full-stack application that allows users to encrypt a secret message using a password and later decrypt it using the correct password. The system ensures that sensitive messages are securely protected from unauthorized access."
    },
    {
      title: "AI Based Automatic Examination Paper Evaluation System ",
      tech: "NLP, Machine Learning, SQL",
      description:
        "Led a team to develop this project. This involved data collection, preprocessing, feature extraction, model training, and evaluation. Achieved a high accuracy rate by utilizing a diverse dataset and advanced text processing techniques. And Successfully improved the model's accuracy to 98% through iterative refinement and advanced preprocessing techniques."
    },
    {
      title: "Online Fraud Detection",
      tech: "Logistic Regression, Decision Tree, Random Forest",
      description:
        "Online payment fraud is a significant concern in today's digital world. This project aims to develop a fraud detection system using machine learning algorithms. Three primary classification algorithms have been used: Logistic Regression, Decision Tree, and Random Forest"
    },
    {
      title: "Drowsiness Detection",
      tech: "InceptionV3, OpenCV",
      description:
        "To develop a real-time drowsiness detection system using InceptionV3 and OpenCV that detects eye closure and yawning to prevent accidents caused by driver fatigue."
    }
  ];

  return (
    <section className="section projects-section" data-aos="fade-up">
      <h2 className="section-title">
        <FaLaptopCode style={{ marginRight: "8px", color: "#00aaff" }} />
        Projects
      </h2>

      <div className="projects-grid">
        {projectData.map((proj, index) => (
          <div key={index} className="project-card">
            <h3>{proj.title}</h3>
            <p className="tech">{proj.tech}</p>
            <p>{proj.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
