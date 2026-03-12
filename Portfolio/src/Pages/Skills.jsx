import { useEffect, useRef, useState } from "react";

const skills = [
  { name: "HTML5",       pct: 95, color: "#f97316", icon: "🌐", desc: "Semantic markup, accessibility, SEO" },
  { name: "CSS3",        pct: 90, color: "#3b82f6", icon: "🎨", desc: "Flexbox, Grid, animations, responsive design" },
  { name: "JavaScript",  pct: 88, color: "#eab308", icon: "⚡", desc: "ES2024+, async/await, DOM manipulation" },
  { name: "React",       pct: 92, color: "#22d3ee", icon: "⚛️", desc: "Hooks, Context, React Router, performance" },
  { name: "Tailwind CSS",pct: 85, color: "#2dd4bf", icon: "💨", desc: "Utility-first styling, custom themes" },
];

const tools = [
  "VS Code","Git & GitHub","Vite","npm / pnpm",
  "Figma","Vercel","Chrome DevTools","Postman",
];

function SkillBar({ skill, animate }) {
  return (
    <div className="card" style={{ padding: 24 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
        <div style={{
          width: 48, height: 48, borderRadius: 14,
          background: `${skill.color}18`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 24, flexShrink: 0,
        }}>{skill.icon}</div>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
            <span style={{ fontWeight: 700, fontSize: 16, color: "#f1f5f9" }}>{skill.name}</span>
            <span style={{ fontSize: 14, fontWeight: 600, color: skill.color }}>{skill.pct}%</span>
          </div>
          <p style={{ fontSize: 12, color: "#475569" }}>{skill.desc}</p>
        </div>
      </div>
      <div style={{ width: "100%", height: 8, borderRadius: 99, background: "rgba(255,255,255,0.06)", overflow: "hidden" }}>
        <div style={{
          height: "100%", borderRadius: 99,
          background: `linear-gradient(90deg, ${skill.color}, ${skill.color}aa)`,
          width: animate ? `${skill.pct}%` : "0%",
          transition: "width 1.2s ease",
          boxShadow: `0 0 10px ${skill.color}55`,
        }} />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setAnimate(true), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="page-enter" style={{ paddingTop: 100, paddingBottom: 80 }}>
      <div className="container">

        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <h1 className="section-title">Technical Skills</h1>
          <div className="section-bar" />
          <p style={{ color: "#64748b", fontSize: 17, maxWidth: 520, margin: "0 auto" }}>
            Technologies I work with daily to bring ideas to life.
          </p>
        </div>

        {/* Skill Bars */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 64 }} className="skills-grid" ref={ref}>
          {skills.map((s, i) => (
            <div key={s.name} style={{ animationDelay: `${i * 0.1}s` }}>
              <SkillBar skill={s} animate={animate} />
            </div>
          ))}
        </div>

        {/* Tools */}
        <div style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: 24, fontWeight: 800, color: "#f1f5f9", marginBottom: 8 }}>Tools & Workflow</h2>
          <p style={{ color: "#475569", marginBottom: 32 }}>Other tools I use in my day-to-day work</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
            {tools.map((tool) => (
              <span key={tool} style={{
                padding: "10px 20px", borderRadius: 99, fontSize: 14, fontWeight: 500,
                background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)",
                color: "#94a3b8", transition: "all 0.3s ease", cursor: "default",
              }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(99,102,241,0.4)"; e.currentTarget.style.color = "#818cf8"; e.currentTarget.style.background = "rgba(99,102,241,0.08)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.09)"; e.currentTarget.style.color = "#94a3b8"; e.currentTarget.style.background = "rgba(255,255,255,0.04)"; }}
              >{tool}</span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
