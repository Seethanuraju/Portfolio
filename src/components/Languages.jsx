import React from "react";
import { FaLanguage } from "react-icons/fa";
import '../style/Languages.css';

export default function Languages() {
  const languages = ["English", "Telugu", "Hindi"];

  return (
    <section className="section languages-section" id="languages" data-aos="fade-up">
      <h2 className="section-title">
        <FaLanguage style={{ marginRight: "8px", color: "#00aaff" }} />
        Languages Known
      </h2>

      <div className="language-tags">
        {languages.map((lang, index) => (
          <span key={index} className="language-tag">{lang}</span>
        ))}
      </div>
    </section>
  );
}
