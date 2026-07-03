import "./CurvedHelix.css";

// Cubic bezier point + tangent helpers
function bezierPoint(t, p0, p1, p2, p3) {
  const mt = 1 - t;
  const x = mt ** 3 * p0.x + 3 * mt ** 2 * t * p1.x + 3 * mt * t ** 2 * p2.x + t ** 3 * p3.x;
  const y = mt ** 3 * p0.y + 3 * mt ** 2 * t * p1.y + 3 * mt * t ** 2 * p2.y + t ** 3 * p3.y;
  return { x, y };
}

function bezierTangent(t, p0, p1, p2, p3) {
  const mt = 1 - t;
  const x = 3 * mt ** 2 * (p1.x - p0.x) + 6 * mt * t * (p2.x - p1.x) + 3 * t ** 2 * (p3.x - p2.x);
  const y = 3 * mt ** 2 * (p1.y - p0.y) + 6 * mt * t * (p2.y - p1.y) + 3 * t ** 2 * (p3.y - p2.y);
  const len = Math.hypot(x, y) || 1;
  return { x: x / len, y: y / len };
}

// A double helix whose backbone follows a curved arc (rather than a straight
// line), so it can wrap around a circular photo like a wreath — mirroring
// the reference image's curled, overlapping DNA strands.
export default function CurvedHelix({ className = "", colorOffset = 0, mirror = false }) {
  const width = 220;
  const height = 480;
  const rungCount = 22;
  const amplitude = 30;
  const turns = 2.15;

  // Backbone: a tall "C" curve — starts tucked in near the top, bulges
  // outward, tucks back in near the bottom.
  // Backbone: Left and Right curves
  const curve = mirror
    ? {
        // Right DNA (mirror)
        p0: { x: 45, y: 6 },
        p1: { x: 216, y: 90 },
        p2: { x: 226, y: 340 },
        p3: { x: 70, y: 474 },
      }
    : {
        // Left DNA
        p0: { x: 175, y: 6 },
        p1: { x: 4, y: 90 },
        p2: { x: -6, y: 340 },
        p3: { x: 150, y: 474 },
      };

  const { p0, p1, p2, p3 } = curve;

  const palette = ["var(--lavender-strong)", "var(--rose-strong)", "var(--sky-strong)", "var(--peach-strong)", "var(--mint-strong)"];

  const points = Array.from({ length: rungCount }, (_, i) => {
    const t = i / (rungCount - 1);
    const center = bezierPoint(t, p0, p1, p2, p3);
    const tangent = bezierTangent(t, p0, p1, p2, p3);
    const normal = { x: -tangent.y, y: tangent.x };
    const taper = 0.45 + 0.55 * Math.sin(t * Math.PI);
    const phase = t * Math.PI * 2 * turns;
    const offset = amplitude * taper * Math.sin(phase);
    const a = { x: center.x + normal.x * offset, y: center.y + normal.y * offset };
    const b = { x: center.x - normal.x * offset, y: center.y - normal.y * offset };
    const color = palette[(i + colorOffset) % palette.length];
    return { a, b, color, delay: i * 0.05 };
  });

  const strandA = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.a.x.toFixed(1)} ${p.a.y.toFixed(1)}`).join(" ");
  const strandB = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.b.x.toFixed(1)} ${p.b.y.toFixed(1)}`).join(" ");

  return (
    <svg
      className={`curved-helix ${className}`}
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Animated illustration of a DNA double helix curling around the photo"
    >
      <defs>
        <linearGradient id={`tubeGradient-${colorOffset}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--lavender)" />
          <stop offset="100%" stopColor="var(--lavender-strong)" />
        </linearGradient>
      </defs>

      <g className="curved-helix-glow">
        <path d={strandA} fill="none" stroke={`url(#tubeGradient-${colorOffset})`} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
        <path d={strandB} fill="none" stroke={`url(#tubeGradient-${colorOffset})`} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
      </g>

      {points.map((p, i) => (
        <g key={i} className="curved-helix-rung" style={{ animationDelay: `${p.delay}s` }}>
          <line x1={p.a.x} y1={p.a.y} x2={p.b.x} y2={p.b.y} stroke={p.color} strokeWidth="2.5" opacity="0.55" />
          <circle cx={p.a.x} cy={p.a.y} r="6.5" fill={p.color} />
          <circle cx={p.a.x - 1.6} cy={p.a.y - 1.6} r="2" fill="white" opacity="0.55" />
          <circle cx={p.b.x} cy={p.b.y} r="6.5" fill={p.color} />
          <circle cx={p.b.x - 1.6} cy={p.b.y - 1.6} r="2" fill="white" opacity="0.55" />
        </g>
      ))}
    </svg>
  );
}
