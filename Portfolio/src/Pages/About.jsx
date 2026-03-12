import { Link } from "react-router-dom";

const timeline =  [
  {
    year: "Oct 2025 – Present",
    title: "Frontend Developer Trainee",
    org: "Dreamer Infotech",
    desc: "Currently undergoing professional training in frontend development using React, JavaScript, and Tailwind CSS while building real-world web applications.",
    type: "work",
  },
  {
    year: "Jan 2025 – Sept 2025",
    title: "Frontend Developer Intern",
    org: "VEHICURE BUZZ INDIA PVT LTD",
    desc: "Worked on responsive UI development using HTML, CSS, JavaScript, and React. Focused on performance and modern UI design.",
    type: "work",
  },
  {
    year: "2022 – 2025",
    title: "Bachelor of Computer Application (BCA)",
    org: "University",
    desc: "Studied programming, web development, databases, and software engineering fundamentals while building multiple projects.",
    type: "edu",
  },
  {
    year: "2022",
    title: "Higher Secondary (12th)",
    org: "Commerce Stream",
    desc: "Completed higher secondary education with commerce subjects including Business Studies, Economics, and Accountancy.",
    type: "edu",
  },
];

export default function About() {
  return (
    <div className="page-enter" style={{ paddingTop: 100, paddingBottom: 80 }}>
      <div className="container">

        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <h1 className="section-title">About Me</h1>
          <div className="section-bar" />
        </div>

        {/* Intro Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 64, alignItems: "center", marginBottom: 80 }} className="about-intro-grid">

          {/* Avatar */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ position: "relative", width: 280, height: 280 }}>
              <div style={{ position: "absolute", inset: 0, borderRadius: 28, background: "linear-gradient(135deg, #6366f1, #8b5cf6)", transform: "rotate(6deg)", opacity: 0.35, filter: "blur(24px)" }} />
              <div style={{ position: "absolute", inset: 0, borderRadius: 28, border: "2px solid rgba(99,102,241,0.3)", transform: "rotate(-3deg)" }} />
              <div style={{
                position: "relative", width: "100%", height: "100%",
                borderRadius: 24, background: "linear-gradient(135deg, #1e1b4b, #312e81)",
                border: "1px solid rgba(255,255,255,0.08)",
                display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1,
              }}>
                {/* Drop your photo here:  <img src="/images/avatar.jpg" alt="Akash" style={{width:"100%",height:"100%",objectFit:"cover",borderRadius:24}} /> */}
                <span style={{ fontSize: 72, fontWeight: 900, color: "rgba(255,255,255,0.18)" }}>AU</span>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div>
            <h2 style={{ fontSize: 26, fontWeight: 800, color: "#f1f5f9", marginBottom: 16 }}>
              Passionate Frontend Developer creating web experiences.
            </h2>
            <p style={{ color: "#64748b", fontSize: 16, lineHeight: 1.85, marginBottom: 16 }}>
              I'm <strong style={{ color: "#818cf8" }}>Akash Upadhyay</strong>, a frontend developer with 0.8 years of experience building
              fast, accessible, and visually polished web applications. I specialize in React and Tailwind CSS,
              and I care deeply about both code quality and design.
            </p>
            <p style={{ color: "#64748b", fontSize: 16, lineHeight: 1.85, marginBottom: 32 }}>
              I love turning complex problems into simple, beautiful, and intuitive solutions. When I'm not
              coding, I'm writing tech articles, exploring new frameworks, or contributing to open-source.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 32 }}>
              {["📍 New Delhi, India",  "🟢 Available for work"].map((item) => (
                <span key={item} style={{
                  padding: "8px 16px", borderRadius: 99, fontSize: 13, fontWeight: 500,
                  background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)",
                  color: "#94a3b8",
                }}>{item}</span>
              ))}
            </div>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link to="/projects" className="btn-primary">See My Work →</Link>
              <Link to="/contact" className="btn-outline">Contact Me</Link>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div>
          <h2 style={{ fontSize: 28, fontWeight: 800, color: "#f1f5f9", marginBottom: 32, textAlign: "center" }}>
            Experience & Education
          </h2>

          <div style={{ position: "relative", maxWidth: 760, margin: "0 auto" }}>
            {/* Vertical line */}
            <div style={{
              position: "absolute", left: "50%", top: 0, bottom: 0,
              width: 2, background: "rgba(99,102,241,0.2)", transform: "translateX(-50%)",
            }} className="timeline-line" />

            {timeline.map((item, i) => (
              <div key={i} style={{
                display: "flex",
                justifyContent: i % 2 === 0 ? "flex-start" : "flex-end",
                marginBottom: 32, position: "relative",
              }} className="timeline-item">
                <div className="card" style={{
                  width: "calc(50% - 32px)",
                  padding: 24,
                  marginLeft: i % 2 === 0 ? 0 : "auto",
                  marginRight: i % 2 === 1 ? 0 : "auto",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                    <span style={{
                      padding: "3px 10px", borderRadius: 99, fontSize: 11, fontWeight: 700,
                      background: item.type === "work" ? "rgba(99,102,241,0.12)" : "rgba(139,92,246,0.12)",
                      color: item.type === "work" ? "#818cf8" : "#a78bfa",
                    }}>{item.type === "work" ? "💼 Work" : "🎓 Education"}</span>
                    <span style={{ fontSize: 12, color: "#475569", fontWeight: 500 }}>{item.year}</span>
                  </div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: "#f1f5f9", marginBottom: 4 }}>{item.title}</h3>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "#818cf8", marginBottom: 8 }}>{item.org}</div>
                  <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.7 }}>{item.desc}</p>
                </div>

                {/* Dot */}
                <div style={{
                  position: "absolute", left: "50%", top: 24,
                  width: 12, height: 12, borderRadius: "50%",
                  background: "#6366f1", border: "3px solid #050816",
                  transform: "translateX(-50%)",
                  boxShadow: "0 0 12px rgba(99,102,241,0.5)",
                  zIndex: 1,
                }} className="timeline-dot" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-intro-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .timeline-line { left: 16px !important; }
          .timeline-dot  { left: 16px !important; transform: none !important; }
          .timeline-item { justify-content: flex-end !important; }
          .timeline-item > div.card { width: calc(100% - 48px) !important; margin-left: 48px !important; margin-right: 0 !important; }
        }
      `}</style>
    </div>
  );
}