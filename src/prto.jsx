import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { useTheme } from "./ThemeContext";

export default function Kojak() {
  const { darkMode, toggleMode } = useTheme();

  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <header className="header">
        <h1 className="title">My Portfolio</h1>
        <button className={darkMode ?"toggle-btnd" : "toggle-btnl"} onClick={toggleMode}>
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </header>

      <main className="main">
        <div className="diamond"></div>
        
        <section className="content">
          <h2>
            Hi, I'm <span className="highlight">XYC</span>
          </h2>
          <p>Frontend Developer | UI/UX Enthusiast | React Lover</p>
          <Link to="/project.jsx" className="btn">
            View Projects
          </Link>
        </section>
      </main>

      <footer className="footer">
        <br />
        <br />
        <hr />
        <br />
        <p>© 2025 XYC self. All rights reserved.</p>
      </footer>
    </div>
  );
}

