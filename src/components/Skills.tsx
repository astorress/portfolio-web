import { skills } from "../data/projects";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="container section">
      <Reveal>
        <p className="kicker mono">04 — Herramientas</p>
        <h2>Stack</h2>
      </Reveal>
      <div className="skills">
        {skills.map((g, i) => (
          <Reveal key={g.group} delay={i * 70}>
            <h3 className="mono label">{g.group}</h3>
            <ul className="tags">
              {g.items.map((it) => <li key={it} className="chip">{it}</li>)}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
