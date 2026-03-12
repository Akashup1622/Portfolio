export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t py-12" style={{ borderColor: "rgba(255,255,255,0.08)", backgroundColor: "rgba(255,255,255,0.02)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <span className="font-bold text-2xl block mb-3">Akash.dev</span>
            <p className="text-gray-400 text-sm leading-relaxed">
              Frontend developer dedicated to crafting beautiful, functional, and user-centered digital experiences.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-400">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {["about", "skills", "projects", "blog", "contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} className="text-gray-400 hover:text-indigo-400 transition-colors capitalize text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-400">Socials</h4>
            <div className="flex gap-3">
              {[
                { label: "GitHub", href: "https://github.com/akashupadhyay" },
                { label: "LinkedIn", href: "https://linkedin.com/in/akashupadhyay" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-indigo-400 hover:border-indigo-500/50 hover:-translate-y-1 transition-all duration-300 text-sm font-medium"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
          <p>© {year} Akash Upadhyay. All rights reserved.</p>
          <p>Made with ❤️ using React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}