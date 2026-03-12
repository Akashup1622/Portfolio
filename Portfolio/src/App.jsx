import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/"         element={<Home />} />
        <Route path="/about"    element={<About />} />
        <Route path="/skills"   element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog"     element={<Blog />} />
        <Route path="/contact"  element={<Contact />} />
      </Routes>
    </>
  );
}
