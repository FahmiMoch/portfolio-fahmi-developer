import { useState, useEffect } from 'react'
import {
  FaUser,
  FaCode,
  FaCertificate,
  FaEnvelope,
  FaBars,
  FaTimes,
} from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <nav
      className="
        fixed top-0 left-0
        w-full
        bg-[#362EED]/80
        backdrop-blur-md
        border-b border-slate-800
        z-50
      "
    >

      {/* NAVBAR CONTAINER */}
      <div
        className="
          max-w-7xl
          mx-auto
          px-5 lg:px-10
          py-4
          min-h-[80px]
          flex items-center justify-between
        "
      >

        {/* LOADING */}
        {loading ? (
          <div className="w-full flex items-center justify-center">

            <div className="flex items-center gap-4">

              {/* SPINNER */}
              <div
                className="
                  w-10 h-10
                  border-[4px]
                  border-white/30
                  border-t-white
                  rounded-full
                  animate-spin
                "
              ></div>

              {/* TEXT */}
              <p
                className="
                  text-white
                  text-xl
                  font-bold
                  tracking-wide
                  animate-pulse
                "
              >
                Loading...
              </p>

            </div>

          </div>
        ) : (
          <>
            {/* LOGO */}
            <h1
              className="
                font-bold
                text-sm sm:text-md md:text-xl
                text-white
                tracking-wide
              "
            >
              Personal Portfolio
            </h1>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center gap-6">

              <div className="navigation-card">

                {/* ABOUT */}
                <a href="#about" className="tab about-tab">
                  <FaUser className="text-[22px]" />
                </a>

                {/* PROJECTS */}
                <a href="#projects" className="tab projects-tab">
                  <FaCode className="text-[22px]" />
                </a>

                {/* CERTIFICATES */}
                <a href="#certificate" className="tab certificates-tab">
                  <FaCertificate className="text-[22px]" />
                </a>

                {/* CONTACT */}
                <a href="#contact" className="tab contact-tab">
                  <FaEnvelope className="text-[22px]" />
                </a>

              </div>

            </div>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="
                md:hidden
                text-white
                text-2xl
                transition duration-300
              "
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </>
        )}

      </div>

      {/* MOBILE MENU */}
      {!loading && (
        <div
          className={`
            md:hidden
            overflow-hidden
            transition-all duration-500
            ${
              isOpen
                ? 'max-h-[400px] opacity-100'
                : 'max-h-0 opacity-0'
            }
          `}
        >

          <div
            className="
              px-6
              pb-6
              flex flex-col
              gap-4
            "
          >

            {/* ABOUT */}
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="
                flex items-center gap-3
                bg-white/10
                text-white
                px-5 py-4
                rounded-2xl
                transition-all duration-300
                hover:bg-sky-400
              "
            >
              <FaUser />
              About
            </a>

            {/* PROJECTS */}
            <a
              href="#projects"
              onClick={() => setIsOpen(false)}
              className="
                flex items-center gap-3
                bg-white/10
                text-white
                px-5 py-4
                rounded-2xl
                transition-all duration-300
                hover:bg-sky-400
              "
            >
              <FaCode />
              Projects
            </a>

            {/* CERTIFICATES */}
            <a
              href="#certificate"
              onClick={() => setIsOpen(false)}
              className="
                flex items-center gap-3
                bg-white/10
                text-white
                px-5 py-4
                rounded-2xl
                transition-all duration-300
                hover:bg-sky-400
              "
            >
              <FaCertificate />
              Certificates
            </a>

            {/* CONTACT */}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="
                flex items-center gap-3
                bg-white/10
                text-white
                px-5 py-4
                rounded-2xl
                transition-all duration-300
                hover:bg-sky-400
              "
            >
              <FaEnvelope />
              Contact
            </a>

          </div>

        </div>
      )}

    </nav>
  )
}

export default Navbar