import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// VITE_BASE controla la ruta base del sitio:
//  - "/"              → dominio propio o repo "astorress.github.io"
//  - "/portfolio-web/" → GitHub Pages de un repo normal (el workflow lo pone solo)
export default defineConfig({
  base: process.env.VITE_BASE ?? "/",
  plugins: [react()],
  server: { port: 5173, watch: { usePolling: true } }, // polling: hot reload fiable dentro de Docker en macOS
});
