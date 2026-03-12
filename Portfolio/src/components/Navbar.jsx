import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const links = [
  { to: "/",         label: "Home"     },
  { to: "/about",    label: "About"    },
  { to: "/skills",   label: "Skills"   },
  { to: "/projects", label: "Projects" },
  { to: "/blog",     label: "Blog"     },
  { to: "/contact",  label: "Contact"  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      transition: "all 0.3s ease",
      backgroundColor: scrolled ? "rgba(5,8,22,0.92)" : "rgba(5,8,22,0.7)",
      backdropFilter: "blur(14px)",
      borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "1px solid transparent",
      padding: scrolled ? "12px 0" : "18px 0",
    }}>
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>

        {/* Logo */}
        <NavLink to="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <div style={{
            width: 38, height: 38, borderRadius: 10,
            background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#fff", fontWeight: 900, fontSize: 13, letterSpacing: "-0.5px",
          }}>AU</div>
          <span style={{ fontWeight: 800, fontSize: 18, color: "#f1f5f9", letterSpacing: "-0.3px" }}>
            Akash<span style={{ color: "#818cf8" }}>.dev</span>
          </span>
        </NavLink>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: 4 }} className="desktop-nav">
          {links.slice(0, 5).map(({ to, label }) => (
            <NavLink key={to} to={to} style={({ isActive }) => ({
              padding: "7px 14px", borderRadius: 8,
              fontSize: 14, fontWeight: 500,
              textDecoration: "none",
              color: isActive ? "#818cf8" : "#94a3b8",
              background: isActive ? "rgba(99,102,241,0.1)" : "transparent",
              transition: "all 0.2s ease",
            })}
              onMouseEnter={(e) => { if (!e.currentTarget.style.background.includes("rgba(99,102,241,0.1)")) { e.currentTarget.style.color = "#f1f5f9"; e.currentTarget.style.background = "rgba(255,255,255,0.05)"; } }}
              onMouseLeave={(e) => {
                const isActive = e.currentTarget.getAttribute("aria-current") === "page";
                e.currentTarget.style.color = isActive ? "#818cf8" : "#94a3b8";
                e.currentTarget.style.background = isActive ? "rgba(99,102,241,0.1)" : "transparent";
              }}
            >{label}</NavLink>
          ))}
          <NavLink to="/contact" className="btn-primary" style={{ padding: "9px 20px", borderRadius: 99, fontSize: 14, marginLeft: 8 }}>
            Hire Me
          </NavLink>
        </nav>

        {/* Hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} style={{
          background: "none", border: "none", cursor: "pointer",
          display: "none", padding: 6,
        }} className="hamburger-btn">
          <div style={{ display: "flex", flexDirection: "column", gap: 5, width: 24 }}>
            {[
              menuOpen ? "rotate(45deg) translate(5px,5px)" : "none",
              undefined,
              menuOpen ? "rotate(-45deg) translate(5px,-5px)" : "none",
            ].map((transform, i) => (
              i === 1
                ? <span key={i} style={{ display: "block", height: 2, background: "#94a3b8", borderRadius: 2, opacity: menuOpen ? 0 : 1, transition: "all 0.3s" }} />
                : <span key={i} style={{ display: "block", height: 2, background: "#94a3b8", borderRadius: 2, transition: "all 0.3s", transform }} />
            ))}
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          backgroundColor: "rgba(5,8,22,0.98)",
          borderTop: "1px solid rgba(255,255,255,0.07)",
          padding: "8px 24px 20px",
        }} className="mobile-menu">
          {links.map(({ to, label }) => (
            <NavLink key={to} to={to} style={({ isActive }) => ({
              display: "block", padding: "12px 0",
              borderBottom: "1px solid rgba(255,255,255,0.05)",
              color: isActive ? "#818cf8" : "#94a3b8",
              textDecoration: "none", fontSize: 16, fontWeight: 500,
            })}>{label}</NavLink>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: block !important; }
        }
        @media (min-width: 769px) {
          .mobile-menu { display: none !important; }
        }
      `}</style>
    </header>
  );
}
