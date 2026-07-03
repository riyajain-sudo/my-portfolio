import "./DnaHelix.css";

// Generates a double-helix made of rungs, each rung tinted with a pastel
// from the palette, gently breathing/rotating via CSS. This is the site's
// signature element — biotech's most recognizable shape, rendered like a
// piece of UI rather than a stock illustration.
export default function DnaHelix({ className = "" }) {
  const rungCount = 14;
  const height = 420;
  const width = 160;
  const amplitude = 46;
  const colors = ["var(--lavender-strong)", "var(--mint-strong)", "var(--peach-strong)", "var(--sky-strong)", "var(--rose-strong)"];

  const rungs = Array.from({ length: rungCount }, (_, i) => {
    const t = i / (rungCount - 1);
    const y = 20 + t * (height - 40);
    const phase = t * Math.PI * 2.6;
    const x1 = width / 2 + Math.sin(phase) * amplitude;
    const x2 = width / 2 - Math.sin(phase) * amplitude;
    const color = colors[i % colors.length];
    return { y, x1, x2, color, delay: i * 0.08 };
  });

  return (
    <svg
      className={`helix ${className}`}
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Animated illustration of a DNA double helix"
    >
      <g className="helix-strand-a">
        <path
          d={rungs.map((r, i) => `${i === 0 ? "M" : "L"} ${r.x1} ${r.y}`).join(" ")}
          fill="none"
          stroke="var(--lavender-strong)"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.55"
        />
      </g>
      <g className="helix-strand-b">
        <path
          d={rungs.map((r, i) => `${i === 0 ? "M" : "L"} ${r.x2} ${r.y}`).join(" ")}
          fill="none"
          stroke="var(--sky-strong)"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.55"
        />
      </g>
      {rungs.map((r, i) => (
        <g key={i} className="helix-rung" style={{ animationDelay: `${r.delay}s` }}>
          <line x1={r.x1} y1={r.y} x2={r.x2} y2={r.y} stroke={r.color} strokeWidth="2" opacity="0.5" />
          <circle cx={r.x1} cy={r.y} r="5" fill={r.color} />
          <circle cx={r.x2} cy={r.y} r="5" fill={r.color} />
        </g>
      ))}
    </svg>
  );
}
