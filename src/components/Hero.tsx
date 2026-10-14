import { projects, GITHUB_USER, EMAIL } from "../data/projects";
import ForecastDemo from "./ForecastDemo";

export default function Hero() {
  const repos = projects.reduce((n, p) => n + (p.links ? p.links.length : 1), 0);
  const stats = [
    [String(repos), "repositorios públicos"],
    ["2,88 M", "lecturas AMI procesadas en el lab"],
    ["9", "notebooks del pipeline MoE"],
    ["2", "stacks MLOps: open source y AWS"],
  ];
  return (
    <section id="top" className="hero container">
      <div className="hero-copy">
        <p className="pill-static"><span className="dot" /> Software & AI Solutions Engineer · MSc en IA Aplicada</p>
        <h1>
          Modelos que <em>pronostican</em>,<br />
          datos que <em>escalan</em>.
        </h1>
        <p className="lead">
          Soy <strong>Sebastián Torres</strong>. Diseño y construyo sistemas de IA (agentes LLM, aplicaciones RAG y pipelines
          de ML/DL) sobre arquitecturas serverless y orientadas a eventos en AWS. Mi investigación de maestría pronostica la
          demanda eléctrica horaria de Colombia con Transformers y Mixture of Experts.
        </p>
        <div className="cta">
          <a className="btn primary" href="#featured">Ver proyectos <span aria-hidden>→</span></a>
          <a className="btn" href={`https://github.com/${GITHUB_USER}`} target="_blank" rel="noreferrer">GitHub ↗</a>
          <a className="btn ghost" href={`mailto:${EMAIL}`}>Escríbeme</a>
        </div>
      </div>
      <ForecastDemo />
      <dl className="stats">
        {stats.map(([v, l]) => (
          <div key={l}><dt>{v}</dt><dd>{l}</dd></div>
        ))}
      </dl>
    </section>
  );
}
