import React from "react";
import '../style/Header.css';

export default function Header() {
  return (
    <header className="hero">
      <h1 className="hero-title">Hi, I'm <span>Raju Seethanu</span></h1>
      <p className="hero-subtitle">Recent Graduate in Computer Science (AI & ML) | Java Full Stack</p>

      <div className="hero-contact">
        <p>📍 Gajuwaka, Visakhapatnam, Andhra Pradesh</p>
        <p>
          📧 <a href="mailto:rajuseethanu@gmail.com">rajuseethanu@gmail.com</a> |
          📞 +91 7995849016 |
          🔗 <a href="https://linkedin.com/in/raju-seethanu-a1383730b" target="_blank" rel="noreferrer">LinkedIn</a>
        </p>
      </div>
    </header>
  );
}
