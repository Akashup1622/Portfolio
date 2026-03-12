const projects = [
  {
    title: "Dragon Ball Website",
    description:
      "An immersive Dragon Ball fan site featuring rich character showcases, animated UI elements, and a vibrant visual experience. Built with React and deployed on Vercel.",
    tech: ["HTML", "CSS", "JavaScript", "React"],
    gradient: "linear-gradient(135deg, #0d0d0d 0%, #7f1d1d 50%, #1a0000 100%)",
    emoji: "🐉",
    accentColor: "#ef4444",
    demo: "https://dragonball-sooty.vercel.app/",
    github: "https://github.com/akashupadhyay",
    features: ["Character Showcase", "Animated UI", "Responsive Design", "Dark Theme"],
  },
  {
    title: "Blog App",
    description:
      "A full-featured blogging platform where users can create, browse, and read articles. Features a clean, distraction-free reading experience with a focus on typography and performance.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    gradient: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0c1832 100%)",
    emoji: "✍️",
    accentColor: "#3b82f6",
    demo: "https://blogapp-iota-flame.vercel.app/",
    github: "https://github.com/akashupadhyay",
    features: ["Create & Read Posts", "Responsive Layout", "Clean Typography", "Fast Loading"],
  },
];

export default function Projects() {
  return (
    <div className="page-enter" style={{ paddingTop: 100, paddingBottom: 80 }}>
      <div className="container">

        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <h1 className="section-title">My Projects</h1>
          <div className="section-bar" />
          <p style={{ color: "#64748b", fontSize: 17, maxWidth: 500, margin: "0 auto" }}>
            Real-world projects I've designed, built, and shipped.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
          {projects.map((p, i) => (
            <div key={i} className="card" style={{ overflow: "hidden", padding: 0 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }} className="project-detail-grid">

                {/* Visual panel */}
                <div style={{
                  background: p.gradient,
                  minHeight: 320,
                  display: "flex", flexDirection: "column",
                  alignItems: "center", justifyContent: "center",
                  gap: 20, padding: 40, position: "relative",
                  order: i % 2 === 0 ? 0 : 1,
                }}>
                  <div style={{ fontSize: 100 }}>{p.emoji}</div>
                  <div style={{ display: "flex", gap: 12 }}>
                    <a href={p.demo} target="_blank" rel="noreferrer" style={{
                      padding: "10px 20px", borderRadius: 10, fontSize: 14, fontWeight: 700,
                      background: p.accentColor, color: "#fff", textDecoration: "none",
                      transition: "opacity 0.2s",
                    }}
                      onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                      onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                    >↗ Live Demo</a>
                    <a href={p.github} target="_blank" rel="noreferrer" style={{
                      padding: "10px 20px", borderRadius: 10, fontSize: 14, fontWeight: 700,
                      background: "rgba(255,255,255,0.1)", color: "#fff", textDecoration: "none",
                      border: "1px solid rgba(255,255,255,0.15)",
                    }}>GitHub</a>
                  </div>

                  {/* Live badge */}
                  <div style={{
                    position: "absolute", top: 16, right: 16,
                    display: "flex", alignItems: "center", gap: 6,
                    padding: "5px 12px", borderRadius: 999,
                    background: "rgba(0,0,0,0.5)", color: "#fff", fontSize: 12, fontWeight: 600,
                  }}>
                    <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 6px #4ade80", display: "inline-block" }} />
                    Live
                  </div>
                </div>

                {/* Info panel */}
                <div style={{ padding: 40, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#818cf8", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>
                    Project {String(i + 1).padStart(2, "0")}
                  </div>
                  <h2 style={{ fontSize: 26, fontWeight: 800, color: "#f1f5f9", marginBottom: 16, lineHeight: 1.3 }}>{p.title}</h2>
                  <p style={{ color: "#64748b", fontSize: 15, lineHeight: 1.8, marginBottom: 24 }}>{p.description}</p>

                  {/* Features */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 24 }}>
                    {p.features.map((f) => (
                      <div key={f} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#94a3b8" }}>
                        <span style={{ color: "#818cf8", fontWeight: 700 }}>✓</span> {f}
                      </div>
                    ))}
                  </div>

                  {/* Tech tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {p.tech.map((t) => (
                      <span key={t} style={{
                        padding: "5px 14px", borderRadius: 99, fontSize: 12, fontWeight: 600,
                        background: "rgba(99,102,241,0.1)", color: "#818cf8",
                        border: "1px solid rgba(99,102,241,0.2)",
                      }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .project-detail-grid { grid-template-columns: 1fr !important; }
          .project-detail-grid > div { order: unset !important; }
        }
      `}</style>
    </div>
  );
}
