const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 px-6 py-16">

      <div
        className="
          max-w-7xl mx-auto
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-4
          gap-12
        "
      >

        {/* SECTION 1 */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Personal Portfolio
          </h2>

          <p className="text-slate-400 leading-relaxed">
            Building modern and scalable web applications with
            clean design and smooth user experiences.
          </p>
        </div>

        {/* SECTION 2 */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">
            Navigation
          </h3>

          <ul className="space-y-3 text-slate-400">
            <li>
              <a
                href="#about"
                className="hover:text-white transition"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#projects"
                className="hover:text-white transition"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#skills"
                className="hover:text-white transition"
              >
                Skills
              </a>
            </li>

            <li>
              <a
                href="#certificates"
                className="hover:text-white transition"
              >
                Certificates
              </a>
            </li>
          </ul>
        </div>

        {/* SECTION 3 */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">
            Social Media
          </h3>

          <ul className="space-y-3 text-slate-400">

            <li>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition"
              >
                GitHub
              </a>
            </li>

            <li>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-sky-400 transition"
              >
                LinkedIn
              </a>
            </li>

            <li>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-pink-400 transition"
              >
                Instagram
              </a>
            </li>

          </ul>
        </div>

        {/* SECTION 4 */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">
            Contact
          </h3>

          <div className="space-y-3 text-slate-400">

            <p>Email:</p>

            <a
              href="mailto:fahmi@example.com"
              className="hover:text-white transition block"
            >
              fahmi@example.com
            </a>

            <p>Location:</p>

            <span className="block">
              Indonesia
            </span>

          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div
        className="
          border-t border-slate-800
          mt-14
          pt-6
          text-center
          text-slate-500
          text-sm
        "
      >
        © 2026 Mochamad Fahmi Fadillah — All Rights Reserved.
      </div>

    </footer>
  )
}

export default Footer