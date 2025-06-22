import React from "react";
import '../style/Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <a href="#about">About</a>
      <a href="#education">Education</a>
      <a href="#projects">Projects</a>
      <a href="#certifications">Certifications</a>
      <a href="#skills">Skills</a>
      <a href="#languages">Languages</a>
    </nav>
  );
}
