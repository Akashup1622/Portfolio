import { useState } from "react";

const posts = [
  {
    title: "Getting Started with React Hooks",
    excerpt: "A comprehensive guide to understanding and using React Hooks effectively in your modern functional components. Covers useState, useEffect, useRef, and custom hooks.",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "React",
    color: "#22d3ee",
    tags: ["React", "Hooks", "Frontend"],
  },
  {
    title: "Mastering CSS Grid Layout",
    excerpt: "Learn how to build complex, responsive web layouts using CSS Grid. From basic concepts like grid-template-columns to advanced techniques like auto-fill and minmax.",
    date: "February 28, 2024",
    readTime: "4 min read",
    category: "CSS",
    color: "#3b82f6",
    tags: ["CSS", "Layout", "Responsive"],
  },
  {
    title: "JavaScript ES2024 Features",
    excerpt: "Explore the newest features added to JavaScript in 2024 and how they can improve your daily development workflow — from Array groupBy to the new Temporal API.",
    date: "January 10, 2024",
    readTime: "6 min read",
    category: "JavaScript",
    color: "#eab308",
    tags: ["JavaScript", "ES2024", "Web Dev"],
  },
  {
    title: "Building Responsive UIs with Tailwind CSS",
    excerpt: "How to leverage Tailwind's utility-first approach to build fully responsive layouts without writing a single line of custom CSS. Includes real component examples.",
    date: "December 5, 2023",
    readTime: "7 min read",
    category: "Tailwind",
    color: "#2dd4bf",
    tags: ["Tailwind", "CSS", "UI"],
  },
  {
    title: "React Router v6 – Complete Guide",
    excerpt: "Everything you need to know about React Router v6 — from basic routing to nested routes, loaders, actions, and the new file-based routing patterns.",
    date: "November 20, 2023",
    readTime: "8 min read",
    category: "React",
    color: "#22d3ee",
    tags: ["React", "Router", "SPA"],
  },
  {
    title: "Vite vs Create React App in 2024",
    excerpt: "A detailed comparison of Vite and Create React App for starting new React projects. Benchmarks, DX comparison, and a verdict on which to choose.",
    date: "October 14, 2023",
    readTime: "4 min read",
    category: "Tooling",
    color: "#a78bfa",
    tags: ["Vite", "CRA", "Tooling"],
  },
];

const categories = ["All", "React", "CSS", "JavaScript", "Tailwind", "Tooling"];

export default function Blog() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? posts : posts.filter((p) => p.category === active);

  return (
    <div className="page-enter" style={{ paddingTop: 100, paddingBottom: 80 }}>
      <div className="container">

        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h1 className="section-title">Blog</h1>
          <div className="section-bar" />
          <p style={{ color: "#64748b", fontSize: 17, maxWidth: 480, margin: "0 auto" }}>
            Thoughts on frontend development, tools, and best practices.
          </p>
        </div>

        {/* Category Filter */}
        <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap", marginBottom: 48 }}>
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActive(cat)} style={{
              padding: "8px 20px", borderRadius: 99, fontSize: 13, fontWeight: 600,
              border: "1px solid",
              borderColor: active === cat ? "#6366f1" : "rgba(255,255,255,0.1)",
              background: active === cat ? "rgba(99,102,241,0.15)" : "rgba(255,255,255,0.04)",
              color: active === cat ? "#818cf8" : "#64748b",
              cursor: "pointer", transition: "all 0.2s ease", fontFamily: "Inter, sans-serif",
            }}>
              {cat}
            </button>
          ))}
        </div>

        {/* Posts Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="blog-grid">
          {filtered.map((post, i) => (
            <article key={i} className="card" style={{ padding: 24, display: "flex", flexDirection: "column" }}>

              {/* Top row */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                <span style={{
                  padding: "4px 12px", borderRadius: 99,
                  fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.07em",
                  color: post.color, background: `${post.color}18`,
                }}>{post.category}</span>
                <span style={{ fontSize: 12, color: "#334155" }}>{post.date}</span>
              </div>

              {/* Title */}
              <h2 style={{ fontSize: 17, fontWeight: 700, color: "#f1f5f9", lineHeight: 1.45, marginBottom: 12, flexGrow: 0 }}>
                {post.title}
              </h2>

              {/* Excerpt */}
              <p style={{ fontSize: 13, color: "#475569", lineHeight: 1.75, marginBottom: 20, flexGrow: 1 }}>
                {post.excerpt}
              </p>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
                {post.tags.map((t) => (
                  <span key={t} style={{
                    padding: "3px 10px", borderRadius: 99, fontSize: 11, fontWeight: 500,
                    background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
                    color: "#64748b",
                  }}>{t}</span>
                ))}
              </div>

              {/* Footer */}
              <div style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                paddingTop: 16, borderTop: "1px solid rgba(255,255,255,0.07)",
              }}>
                <span style={{ fontSize: 12, color: "#334155" }}>⏱ {post.readTime}</span>
                <button style={{
                  background: "none", border: "none", cursor: "pointer",
                  fontSize: 13, fontWeight: 700, color: "#818cf8",
                  fontFamily: "Inter, sans-serif", transition: "color 0.2s",
                  display: "flex", alignItems: "center", gap: 4,
                }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#a78bfa")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#818cf8")}
                >Read More →</button>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "60px 0", color: "#334155", fontSize: 16 }}>
            No posts in this category yet.
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 900px) { .blog-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 560px) { .blog-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}