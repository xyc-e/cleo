import React from "react";
import "./App.css";

const skills = [
  {
    logo: "⚛️",
    title: "React",
    description: "Building dynamic UIs with hooks, context, and modern tooling.",
  },
  {
    logo: "🎨",
    title: "UI/UX",
    description: "Crafting accessible, responsive layouts with delightful motion.",
  },
  {
    logo: "⚙️",
    title: "Frontend Ops",
    description: "Optimizing builds, performance budgets, and deployment flows.",
  },
];

export default function Cards() {
  return (
    <section className="cards">
      {skills.map(({ logo, title, description }) => (
        <article className="card" key={title}>
          <div className="card-logo" aria-hidden="true">
            {logo}
          </div>
          <div className="card-body">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </article>
      ))}
    </section>
  );
}

