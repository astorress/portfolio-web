import { GITHUB_USER, EMAIL } from "../data/projects";

export default function Footer() {
  return (
    <footer className="footer container">
      <p>
        © {new Date().getFullYear()} Sebastián Torres ·{" "}
        <a href={`https://github.com/${GITHUB_USER}`} target="_blank" rel="noreferrer">github.com/{GITHUB_USER}</a> ·{" "}
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
      </p>
      <p className="muted">Hecho con React, TypeScript y Vite · desplegado con Docker y GitHub Pages</p>
    </footer>
  );
}
