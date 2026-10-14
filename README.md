# portfolio-web

Portafolio personal de Sebastian Torres. **React + TypeScript + Vite**, empaquetado con **Docker** y publicado en **GitHub Pages**.

## Ejecutar

Solo necesitas Docker (no hace falta instalar Node).

```bash
make dev    # http://localhost:5173, con hot reload
make prod   # http://localhost:8080, imagen nginx igual a la de producción
make down
```

## Estructura

```text
src/
├── main.tsx            # punto de entrada: monta <App /> en #root
├── App.tsx             # compone las secciones
├── styles.css          # tema claro/oscuro con variables CSS
├── data/projects.ts    # ← TODO el contenido: proyectos y skills
└── components/         # Header, Hero, About, Featured, Projects, Skills, Contact, Footer
```

**Para agregar un proyecto:** añade un objeto en `src/data/projects.ts`. Los contadores, filtros y tarjetas se actualizan solos.

## Conceptos de React usados (guía rápida)

| Concepto | Dónde verlo |
| --- | --- |
| Componente = función que devuelve JSX | cualquier archivo de `components/` |
| Props (datos que recibe un componente) | `ProjectCard.tsx` |
| `useState` (estado local) | `Projects.tsx` (filtro), `Header.tsx` (tema) |
| `useEffect` (efectos secundarios) | `Header.tsx` |
| Renderizar listas con `.map` y `key` | `Featured.tsx`, `Skills.tsx` |

## Despliegue en GitHub Pages

1. Sube el repo a GitHub (`astorress/portfolio-web`) en la rama `main`.
2. En **Settings → Pages → Build and deployment → Source**, elige **GitHub Actions**.
3. Cada `git push` ejecuta `.github/workflows/deploy.yml`, que construye con el mismo Dockerfile y publica.

URL resultante: `https://astorress.github.io/portfolio-web/`.
Si quieres la URL raíz `https://astorress.github.io/`, renombra el repo a `astorress.github.io` (el workflow detecta el nombre y ajusta la ruta base solo).

### Dominio propio (opcional)

Agrega un archivo `public/CNAME` con tu dominio y configúralo en Settings → Pages. Con dominio propio, la base debe ser `/`: define `VITE_BASE=/` en el paso "Calcular base" del workflow.

### Otras opciones de hosting

`docker build -f .docker/Dockerfile --target export --output dist .` deja los estáticos en `dist/`; sirven para Cloudflare Pages, Netlify o S3+CloudFront. La imagen `prod` (nginx) sirve para Fly.io, Cloud Run o cualquier VPS.

## VS Code (Dev Container)

Con la extensión *Dev Containers*: abre la carpeta en VS Code → **Reopen in Container**. Usa el servicio `web_dev` de `.docker/docker-compose.yml` (el mismo de `make dev`), así que Vite ya queda corriendo y el puerto 5173 se reenvía solo.

## Contenedores y volúmenes

| Recurso | Nombre | Para qué |
| --- | --- | --- |
| Proyecto compose | `portfolio-web` | agrupa todo |
| Contenedor | `PortfolioWebDev` | desarrollo (Vite, hot reload) y devcontainer |
| Contenedor | `PortfolioWebProd` | nginx con la imagen de producción |
| Volumen | `portfolio-web-node-modules` | `node_modules` de Linux, separado del Mac |
| Volumen | `portfolio-web-bashhistory` | historial de la terminal del contenedor |
