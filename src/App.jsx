import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Education from "./components/Education";
import Projects from "./components/Project";
import Certifications from "./components/Certifications";
import Skills from "./components/Skills";
import Languages from "./components/Languages";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function App() {
    useEffect(() => {
   AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <div>
      <Navbar />
      <main className="container">
        <section id="about"><Header /></section>
        <section id="education"><Education /></section>
        <section id="projects"><Projects /></section>
        <section id="certifications"><Certifications /></section>
        <section id="skills"><Skills /></section>
       <section id="languages" data-aos="fade-up"><Languages /></section>

      </main>
    </div>
  );
}
