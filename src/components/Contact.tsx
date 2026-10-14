import { EMAIL } from "../data/projects";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="container section">
      <Reveal className="contact">
          <h2>¿Hablamos?</h2>
          <p className="muted">Si algo de lo que ves te interesa, escríbeme.</p>
          <a className="btn primary big-btn" href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </Reveal>
      </section>
  );
}
