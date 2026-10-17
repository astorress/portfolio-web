import Reveal from "./Reveal";
import { CVLAC, ORCID, complementary, education, proceedings, publications, currentFocus } from "../data/projects";

export default function About() {
  return (
    <section id="about" className="container section">
      <Reveal>
        <p className="kicker mono">03 — Sobre mí</p>
        <h2>Investigo, construyo y documento lo que aprendo</h2>
      </Reveal>

      <div className="about">
        <Reveal className="about-text">
          <p>
            Soy <strong>Software & AI Solutions Engineer</strong>. Diseño y construyo sistemas de IA (agentes LLM, aplicaciones
            RAG y pipelines de ML/DL) sobre arquitecturas serverless y orientadas a eventos en AWS, con Amazon Bedrock y SageMaker.
          </p>
          <p>
            Soy Magíster en Inteligencia Artificial Aplicada de la Universidad de Antioquia. Mi tesis investiga el pronóstico de
            demanda eléctrica de corto plazo con Transformers, Mixture of Experts y optimización de hiperparámetros con
            metaheurísticas, y la llevé a una librería abierta: <a href="https://github.com/astorress/moeforecast" target="_blank" rel="noreferrer">moeforecast</a>.
          </p>
          <p>
            Antes de pasar a la IA fui ingeniero de datos: construí pipelines ETL/ELT, integraciones IoT y de medición
            inteligente, y analítica empresarial. Mi formación en ingeniería eléctrica mantiene mis modelos anclados a
            sistemas físicos reales.
          </p>
          <p>
            Pregúntame por Python, AWS, agentes de IA, forecasting, matemáticas y música. Sigo a más de 500 artistas en Spotify 🎧
          </p>
          <ul className="tags">
            {currentFocus.map((l) => <li key={l} className="chip">{l}</li>)}
          </ul>
          <p className="links-row">
            <a href={CVLAC} target="_blank" rel="noreferrer">CvLAC ↗</a>
            <a href={ORCID} target="_blank" rel="noreferrer">ORCID ↗</a>
          </p>
        </Reveal>

        <Reveal delay={100}>
          <h3 className="mono label">Formación</h3>
          <ol className="timeline">
            {education.map((e) => (
              <li key={e.title}>
                <span className="mono period">{e.period}</span>
                <b>{e.title}</b>
                <em>{e.place}</em>
                <p>{e.detail}</p>
              </li>
            ))}
          </ol>
          <ul className="plain">
            {complementary.map((c) => <li key={c}>{c}</li>)}
          </ul>
        </Reveal>
      </div>

      <div className="academic">
        <Reveal>
          <h3 className="mono label">Publicaciones</h3>
          <ul className="pubs">
            {publications.map((p) => (
              <li key={p.title}>
                <span className="mono period">{p.year}</span>
                {p.href ? <a href={p.href} target="_blank" rel="noreferrer">{p.title} ↗</a> : <b>{p.title}</b>}
                <em>{p.venue}</em>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={100}>
          <h3 className="mono label">Memorias de congresos</h3>
          <ul className="pubs">
            {proceedings.map((p) => (
              <li key={p.title}>
                <span className="mono period">{p.year} · ponente</span>
                <b>{p.title}</b>
                <em>{p.venue}</em>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
      <p className="muted small source">Fuente: CvLAC (Minciencias).</p>
    </section>
  );
}
