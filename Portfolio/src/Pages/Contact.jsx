import { useState } from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name || form.name.trim().length < 2)         e.name    = "Name must be at least 2 characters.";
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email))  e.email   = "Enter a valid email address.";
    if (!form.subject || form.subject.trim().length < 5)   e.subject = "Subject must be at least 5 characters.";
    if (!form.message || form.message.trim().length < 10)  e.message = "Message must be at least 10 characters.";
    return e;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSuccess(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSuccess(false), 6000);
  };

  const inputStyle = {
    width: "100%", padding: "13px 16px", borderRadius: 12,
    background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
    color: "#f1f5f9", fontSize: 15, fontFamily: "Inter, sans-serif",
    outline: "none", transition: "border-color 0.2s, box-shadow 0.2s",
    boxSizing: "border-box",
  };

  const labelStyle = { display: "block", fontSize: 13, fontWeight: 600, color: "#94a3b8", marginBottom: 7, letterSpacing: "0.01em" };
  const errorStyle = { color: "#f87171", fontSize: 12, marginTop: 5 };

  const contactInfo = [
    { emoji: "✉️", label: "Email",    value: "hello@akash.dev",       href: "mailto:hello@akash.dev" },
    { emoji: "📍", label: "Location", value: "New Delhi, India",       sub: "Available Worldwide · Remote" },
    { emoji: "🟢", label: "Status",   value: "Open for opportunities", green: true },
    { emoji: "🐙", label: "GitHub",   value: "github.com/akashupadhyay", href: "https://github.com/akashupadhyay" },
  ];

  return (
    <div className="page-enter" style={{ paddingTop: 100, paddingBottom: 80 }}>
      <div className="container">

        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <h1 className="section-title">Get In Touch</h1>
          <div className="section-bar" />
          <p style={{ color: "#64748b", fontSize: 17, maxWidth: 500, margin: "0 auto" }}>
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 56, alignItems: "start" }} className="contact-layout">

          {/* Left: Contact Info */}
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 800, color: "#f1f5f9", marginBottom: 12 }}>
              Let's build something awesome!
            </h2>
            <p style={{ color: "#475569", fontSize: 15, lineHeight: 1.85, marginBottom: 40 }}>
              I'm available for freelance projects, full-time roles, and collaborations. 
              Fill in the form or reach out directly.
            </p>

            {/* Info Cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {contactInfo.map((item) => (
                <div key={item.label} className="card" style={{ padding: "16px 20px", display: "flex", alignItems: "center", gap: 16 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                    background: item.green ? "rgba(74,222,128,0.08)" : "rgba(99,102,241,0.08)",
                    display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20,
                  }}>{item.emoji}</div>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: "#334155", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 3 }}>
                      {item.label}
                    </div>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noreferrer" style={{
                        fontSize: 14, fontWeight: 600, color: "#f1f5f9", textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#818cf8")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "#f1f5f9")}
                      >{item.value}</a>
                    ) : (
                      <span style={{ fontSize: 14, fontWeight: 600, color: item.green ? "#4ade80" : "#f1f5f9" }}>
                        {item.value}
                        {item.sub && <span style={{ display: "block", fontSize: 12, color: "#334155", fontWeight: 400, marginTop: 2 }}>{item.sub}</span>}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div style={{ marginTop: 32, display: "flex", gap: 12 }}>
              {[
                { label: "GH", href: "https://github.com/akashupadhyay",         title: "GitHub" },
                { label: "LI", href: "https://linkedin.com/in/akashupadhyay",    title: "LinkedIn" },
                { label: "TW", href: "https://twitter.com/akashupadhyay",        title: "Twitter" },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" title={s.title} style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#64748b", textDecoration: "none", fontSize: 12, fontWeight: 800,
                  transition: "all 0.25s ease",
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(99,102,241,0.12)"; e.currentTarget.style.borderColor = "rgba(99,102,241,0.35)"; e.currentTarget.style.color = "#818cf8"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.04)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.09)"; e.currentTarget.style.color = "#64748b"; e.currentTarget.style.transform = "translateY(0)"; }}
                >{s.label}</a>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="card" style={{ padding: 40 }}>
            {success && (
              <div style={{
                marginBottom: 24, padding: "14px 18px", borderRadius: 12,
                background: "rgba(74,222,128,0.08)", border: "1px solid rgba(74,222,128,0.25)",
                color: "#4ade80", fontWeight: 600, fontSize: 15, display: "flex", alignItems: "center", gap: 10,
              }}>
                <span style={{ fontSize: 20 }}>✅</span> Message sent! I'll get back to you within 24 hours.
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 22 }}>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="form-row">
                <div>
                  <label style={labelStyle}>Full Name</label>
                  <input name="name" value={form.name} onChange={handleChange} placeholder="John Doe"
                    style={inputStyle}
                    onFocus={(e) => { e.target.style.borderColor = "#6366f1"; e.target.style.boxShadow = "0 0 0 3px rgba(99,102,241,0.12)"; }}
                    onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; e.target.style.boxShadow = "none"; }}
                  />
                  {errors.name && <p style={errorStyle}>{errors.name}</p>}
                </div>
                <div>
                  <label style={labelStyle}>Email Address</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="john@example.com"
                    style={inputStyle}
                    onFocus={(e) => { e.target.style.borderColor = "#6366f1"; e.target.style.boxShadow = "0 0 0 3px rgba(99,102,241,0.12)"; }}
                    onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; e.target.style.boxShadow = "none"; }}
                  />
                  {errors.email && <p style={errorStyle}>{errors.email}</p>}
                </div>
              </div>

              <div>
                <label style={labelStyle}>Subject</label>
                <input name="subject" value={form.subject} onChange={handleChange} placeholder="Project Inquiry / Collaboration / Just saying hi"
                  style={inputStyle}
                  onFocus={(e) => { e.target.style.borderColor = "#6366f1"; e.target.style.boxShadow = "0 0 0 3px rgba(99,102,241,0.12)"; }}
                  onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; e.target.style.boxShadow = "none"; }}
                />
                {errors.subject && <p style={errorStyle}>{errors.subject}</p>}
              </div>

              <div>
                <label style={labelStyle}>Message</label>
                <textarea name="message" rows={6} value={form.message} onChange={handleChange}
                  placeholder="Tell me about your project, timeline, or any questions you have..."
                  style={{ ...inputStyle, resize: "vertical", minHeight: 140 }}
                  onFocus={(e) => { e.target.style.borderColor = "#6366f1"; e.target.style.boxShadow = "0 0 0 3px rgba(99,102,241,0.12)"; }}
                  onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.1)"; e.target.style.boxShadow = "none"; }}
                />
                {errors.message && <p style={errorStyle}>{errors.message}</p>}
              </div>

              <button type="submit" disabled={loading} style={{
                padding: "14px 0", borderRadius: 14, fontWeight: 700, fontSize: 16,
                border: "none", cursor: loading ? "not-allowed" : "pointer",
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                color: "#fff", opacity: loading ? 0.75 : 1,
                boxShadow: "0 8px 28px rgba(99,102,241,0.3)",
                transition: "all 0.3s ease", fontFamily: "Inter, sans-serif",
              }}
                onMouseEnter={(e) => { if (!loading) { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 14px 36px rgba(99,102,241,0.4)"; } }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(99,102,241,0.3)"; }}
              >
                {loading
                  ? <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
                      <span style={{ width: 18, height: 18, border: "2px solid rgba(255,255,255,0.3)", borderTopColor: "#fff", borderRadius: "50%", display: "inline-block", animation: "spin 0.8s linear infinite" }} />
                      Sending…
                    </span>
                  : "Send Message ✈"
                }
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 768px) {
          .contact-layout { grid-template-columns: 1fr !important; gap: 40px !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
