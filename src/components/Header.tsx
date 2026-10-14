import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const links = [
  ["Destacados", "#featured"],
  ["Archivo", "#projects"],
  ["Sobre mí", "#about"],
  ["Stack", "#skills"],
  ["Contacto", "#contact"],
];

function initialTheme(): Theme {
  const saved = document.documentElement.dataset.theme as Theme | undefined;
  if (saved) return saved;
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

export default function Header() {
  // useState: memoria del componente. Al cambiar `theme`, React vuelve a pintar.
  const [theme, setTheme] = useState<Theme>(initialTheme);

  // useEffect: efectos secundarios (aquí, tocar el DOM y localStorage) cada vez que cambia `theme`.
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("theme", theme);
    } catch {
      /* modo privado: simplemente no se guarda */
    }
  }, [theme]);

  return (
    <header className="header">
      <a className="brand" href="#top">
        st<span>.</span>
      </a>
      <nav aria-label="Principal">
        {links.map(([label, href]) => (
          <a key={href} href={href}>
            {label}
          </a>
        ))}
      </nav>
      <button
        className="icon-btn"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        aria-label={`Cambiar a tema ${theme === "dark" ? "claro" : "oscuro"}`}
      >
        {theme === "dark" ? "☀" : "☾"}
      </button>
    </header>
  );
}
