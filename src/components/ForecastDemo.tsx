import { useMemo, useState } from "react";

// Demo ilustrativa (curvas sintéticas, no son datos reales de XM):
// tres "expertos" aprenden el perfil de demanda de cada régimen y el gating los mezcla.

const bump = (h: number, mu: number, s: number) => Math.exp(-((h - mu) ** 2) / (2 * s * s));

const experts = [
  { name: "Día laborable", color: "var(--c1)", f: (h: number) => 0.34 + 0.3 * bump(h, 10, 2.8) + 0.4 * bump(h, 19.5, 2.1) },
  { name: "Fin de semana", color: "var(--c2)", f: (h: number) => 0.3 + 0.14 * bump(h, 12, 3.5) + 0.3 * bump(h, 19.5, 2.4) },
  { name: "Festivo", color: "var(--c3)", f: (h: number) => 0.24 + 0.1 * bump(h, 12, 4) + 0.2 * bump(h, 20, 2.6) },
];

const presets: { label: string; w: number[] }[] = [
  { label: "Laborable", w: [100, 0, 0] },
  { label: "Fin de semana", w: [0, 100, 0] },
  { label: "Festivo", w: [0, 0, 100] },
  { label: "Lunes tras festivo", w: [55, 5, 40] },
];

const W = 640, H = 280, PAD = { l: 38, r: 12, t: 14, b: 30 };
const xs = Array.from({ length: 97 }, (_, i) => i / 4); // 0..24 h cada 15 min (la resolución de los medidores AMI)
const X = (h: number) => PAD.l + (h / 24) * (W - PAD.l - PAD.r);
const Y = (v: number) => H - PAD.b - ((v - 0.1) / 0.9) * (H - PAD.t - PAD.b);
const path = (f: (h: number) => number) => xs.map((h, i) => `${i ? "L" : "M"}${X(h).toFixed(1)},${Y(f(h)).toFixed(1)}`).join("");

export default function ForecastDemo() {
  const [w, setW] = useState<number[]>([100, 0, 0]);
  const total = w.reduce((a, b) => a + b, 0) || 1;
  const norm = w.map((v) => v / total);

  const mix = useMemo(() => (h: number) => experts.reduce((s, e, i) => s + norm[i] * e.f(h), 0), [norm.join(",")]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <figure className="demo">
      <figcaption>
        <span className="mono label">Demo interactiva · Mixture of Experts</span>
        <span className="muted small">Mueve el gating y mira cómo se mezclan los expertos (curvas ilustrativas).</span>
      </figcaption>

      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Curvas de demanda horaria de tres expertos y su mezcla según los pesos del gating">
        {[0.25, 0.5, 0.75, 1].map((v) => (
          <g key={v}>
            <line x1={PAD.l} x2={W - PAD.r} y1={Y(v)} y2={Y(v)} className="grid-line" />
            <text x={PAD.l - 8} y={Y(v) + 4} textAnchor="end" className="axis">{Math.round(v * 100)}</text>
          </g>
        ))}
        {[0, 6, 12, 18, 24].map((h) => (
          <text key={h} x={X(h)} y={H - 8} textAnchor="middle" className="axis">{h}h</text>
        ))}
        {experts.map((e, i) => (
          <path key={e.name} d={path(e.f)} fill="none" stroke={e.color} strokeWidth="1.5" strokeDasharray="4 4" opacity={0.25 + 0.6 * norm[i]} />
        ))}
        <path d={`${path(mix)}L${X(24)},${Y(0.1)}L${X(0)},${Y(0.1)}Z`} fill="url(#mixfill)" />
        <path d={path(mix)} fill="none" stroke="var(--text)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <defs>
          <linearGradient id="mixfill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="var(--c1)" stopOpacity=".35" />
            <stop offset="1" stopColor="var(--c1)" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <div className="presets" role="group" aria-label="Escenarios">
        {presets.map((p) => (
          <button key={p.label} className="pill" onClick={() => setW(p.w)}>{p.label}</button>
        ))}
      </div>

      <div className="sliders">
        {experts.map((e, i) => (
          <label key={e.name}>
            <span><i style={{ background: e.color }} />{e.name}<b className="mono">{Math.round(norm[i] * 100)}%</b></span>
            <input
              type="range" min={0} max={100} value={w[i]}
              onChange={(ev) => setW(w.map((v, j) => (j === i ? Number(ev.target.value) : v)))}
              style={{ accentColor: e.color }}
              aria-label={`Peso del experto ${e.name}`}
            />
          </label>
        ))}
      </div>
    </figure>
  );
}
