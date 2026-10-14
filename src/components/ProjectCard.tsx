import { gh, type Project } from "../data/projects";
import { spotlight } from "../hooks";

export default function ProjectCard({ p, big = false }: { p: Project; big?: boolean }) {
  const href = p.repo ? gh(p.repo) : undefined;
  return (
    <article className={`card spot ${big ? "big" : ""}`} onMouseMove={spotlight}>
      <div className="card-top">
        <span className="mono label">{p.category}</span>
        {href && (
          <a className="open" href={href} target="_blank" rel="noreferrer" aria-label={`Abrir ${p.name} en GitHub`}>↗</a>
        )}
      </div>
      {big && p.stat && (
        <div className="stat"><b>{p.stat.value}</b><span>{p.stat.label}</span></div>
      )}
      <h3>{p.name}</h3>
      <p>{p.summary}</p>
      {big && p.points && (
        <ul className="points">
          {p.points.map((t) => <li key={t}>{t}</li>)}
        </ul>
      )}
      <ul className="tags">
        {p.tags.map((t) => <li key={t} className="chip">{t}</li>)}
      </ul>
      {p.links && (
        <ul className="sublinks">
          {p.links.map((l) => (
            <li key={l.href}><a href={l.href} target="_blank" rel="noreferrer">{l.label}</a></li>
          ))}
        </ul>
      )}
    </article>
  );
}
