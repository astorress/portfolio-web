import { useState } from "react";
import { categories, projects, type Category } from "../data/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

export default function Projects() {
  const [active, setActive] = useState<Category | null>(null);
  const inCategory = (p: (typeof projects)[number], c: Category) => p.category === c || !!p.alsoIn?.includes(c);
  const visible = active ? projects.filter((p) => inCategory(p, active)) : projects;

  return (
    <section id="projects" className="container section">
      <Reveal>
        <p className="kicker mono">02 — Archivo</p>
        <h2>Todos los proyectos</h2>
      </Reveal>
      <div className="filters" role="group" aria-label="Filtrar por categoría">
        <button className={`pill ${active === null ? "on" : ""}`} onClick={() => setActive(null)}>
          Todos <small>{projects.length}</small>
        </button>
        {categories.map((c) => (
          <button key={c} className={`pill ${active === c ? "on" : ""}`} onClick={() => setActive(c)}>
            {c} <small>{projects.filter((p) => inCategory(p, c)).length}</small>
          </button>
        ))}
      </div>
      <div className="grid">
        {visible.map((p) => <ProjectCard key={p.name} p={p} />)}
      </div>
    </section>
  );
}
