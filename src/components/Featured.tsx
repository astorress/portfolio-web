import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

export default function Featured() {
  const featured = projects.filter((p) => p.featured);
  return (
    <section id="featured" className="container section">
      <Reveal>
        <p className="kicker mono">01 — Trabajo destacado</p>
        <h2>Cinco proyectos que resumen cómo trabajo</h2>
      </Reveal>
      <div className="bento">
        {featured.map((p, i) => (
          <Reveal key={p.name} className={`b${i}`} delay={i * 70}>
            <ProjectCard p={p} big />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
