import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const phrases = ["Building beautiful UIs", "React Developer", "CSS Craftsman", "Frontend Engineer"];

function TypingText() {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];
    let delay = deleting ? 50 : 100;
    if (!deleting && charIndex === current.length) delay = 2000;

    const t = setTimeout(() => {
      if (!deleting && charIndex < current.length) {
        setText(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      } else if (!deleting && charIndex === current.length) {
        setDeleting(true);
      } else if (deleting && charIndex > 0) {
        setText(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      } else {
        setDeleting(false);
        setPhraseIndex((i) => (i + 1) % phrases.length);
      }
    }, delay);
    return () => clearTimeout(t);
  }, [charIndex, deleting, phraseIndex]);

  return (
    <span style={{ color: "#818cf8" }}>
      {text}
      <span className="cursor-blink" style={{ display: "inline-block", width: 2, height: "0.9em", background: "#818cf8", marginLeft: 2, verticalAlign: "middle" }} />
    </span>
  );
}

export default function Home() {
  const quickLinks = [
    { to: "/about",    label: "About Me",  desc: "My story & background" },
    { to: "/skills",   label: "Skills",    desc: "What I work with" },
    { to: "/projects", label: "Projects",  desc: "Things I've built" },
    { to: "/blog",     label: "Blog",      desc: "My latest writings" },
  ];

  return (
    <div className="page-enter" style={{ paddingTop: 80 }}>

      {/* Hero */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
        {/* Blobs */}
        <div style={{ position: "absolute", top: "15%", left: "10%", width: 500, height: 500, borderRadius: "50%", background: "rgba(99,102,241,0.12)", filter: "blur(100px)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "15%", right: "10%", width: 400, height: 400, borderRadius: "50%", background: "rgba(139,92,246,0.12)", filter: "blur(100px)", pointerEvents: "none" }} />

        <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 1, padding: "60px 24px" }}>

          {/* Badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "8px 18px", borderRadius: 999,
            border: "1px solid rgba(99,102,241,0.3)",
            background: "rgba(99,102,241,0.08)",
            color: "#818cf8", fontSize: 13, fontWeight: 500, marginBottom: 32,
          }}>
            <span style={{ position: "relative", display: "inline-block", width: 8, height: 8 }}>
              <span className="dot-ping" style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "#818cf8", opacity: 0.7 }} />
              <span style={{ position: "relative", display: "inline-block", width: 8, height: 8, borderRadius: "50%", background: "#818cf8" }} />
            </span>
            Available for new opportunities
          </div>

          {/* Name */}
          <h1 style={{ fontSize: "clamp(40px, 8vw, 88px)", fontWeight: 900, lineHeight: 1.05, marginBottom: 20, color: "#f1f5f9", letterSpacing: "-1px" }}>
            Hi, I'm{" "}
            <span className="gradient-text">Akash Upadhyay</span>
          </h1>

          {/* Role */}
          <div style={{ fontSize: "clamp(20px, 3vw, 30px)", fontWeight: 600, marginBottom: 20, minHeight: 44 }}>
            <TypingText />
          </div>

          {/* Summary */}
          <p style={{ color: "#64748b", fontSize: "clamp(15px, 2vw, 18px)", lineHeight: 1.8, maxWidth: 600, margin: "0 auto 44px" }}>
            I craft fast, beautiful, and accessible web experiences using React and modern CSS. 
            Passionate about clean code and pixel-perfect design.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginBottom: 80 }}>
            <Link to="/projects" className="btn-primary">View My Work →</Link>
            <Link to="/contact" className="btn-outline">Let's Talk 👋</Link>
          </div>

          {/* Quick Nav Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, maxWidth: 860, margin: "0 auto" }} className="quick-grid">
            {quickLinks.map(({ to, label, desc }) => (
              <Link key={to} to={to} style={{ textDecoration: "none" }}>
                <div className="card" style={{ padding: "20px 16px", textAlign: "center", cursor: "pointer" }}>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "#f1f5f9", marginBottom: 6 }}>{label}</div>
                  <div style={{ fontSize: 12, color: "#475569" }}>{desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section style={{ background: "rgba(255,255,255,0.025)", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "40px 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32, textAlign: "center" }} className="stats-grid">
            {[
              { num: "3+",  label: "Years Experience" },
              { num: "2",   label: "Live Projects" },
              { num: "5",   label: "Tech Skills" },
              { num: "20+", label: "Happy Clients" },
            ].map((s) => (
              <div key={s.label}>
                <div style={{ fontSize: "clamp(28px,4vw,40px)", fontWeight: 900, color: "#818cf8", marginBottom: 6 }}>{s.num}</div>
                <div style={{ fontSize: 13, color: "#475569", fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 640px) {
          .quick-grid { grid-template-columns: 1fr 1fr !important; }
          .stats-grid { grid-template-columns: 1fr 1fr !important; gap: 24px !important; }
        }
      `}</style>
    </div>
  );
}
