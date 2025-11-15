import React from "react";
import "./App.css";
import Cards from "./Cards";
import { useTheme } from "./ThemeContext";

export default function Project() {
  const { darkMode, toggleMode } = useTheme();

  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <header className="header">
        <h1 className="title">My Portfolio</h1>
        <button className={darkMode ?"toggle-btnd" : "toggle-btnl"} onClick={toggleMode}>
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </header>

      <main>
        <Cards/>
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

