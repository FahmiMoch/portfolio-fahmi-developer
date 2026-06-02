import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    id: 1,
    title: 'Kirava Logistics',
    description:
      'Logistics management website focused on shipment tracking, responsive UI, and business workflow optimization.',
    image: '/Kirava-LandingPage.png',
    stack: ['React', 'Tailwind CSS', 'API'],
    github: 'https://github.com/mochamadfahmifadillah',
    demo: '#',
  },
  {
    id: 2,
    title: 'Education Learning',
    description:
      'Learning platform website designed for online education experience with responsive layout and interactive UI.',
    image: '/images/education-learning.png',
    stack: ['React', 'JavaScript', 'CSS'],
    github: 'https://github.com/mochamadfahmifadillah',
    demo: '#',
  },
]

const Projects = () => {
  return (
    <section className="py-32 px-6 bg-[#362EED]/80 overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div
          className="
            text-center
            mb-20

            opacity-0
            animate-[fadeUp_1s_ease_forwards]
          "
        >

          <h2
            className="
              text-4xl md:text-5xl
              font-extrabold

              text-white

              drop-shadow-[0_0_18px_rgba(255,255,255,0.25)]
            "
          >
            Featured Projects
          </h2>

          <div
            className="
              w-28 h-1
              bg-white/70

              mx-auto
              mt-6

              rounded-full

              shadow-[0_0_20px_rgba(255,255,255,0.35)]
            "
          />

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 place-items-center">

          {projects.map((project, index) => (
            <div
              key={project.id}
              className="
                group
                relative
                overflow-hidden

                w-full
                max-w-[520px]

                rounded-[32px]

                bg-gradient-to-br
                from-[#362EED]
                via-[#4f46e5]
                to-[#1e1b4b]

                border border-white/10

                shadow-[0_0_35px_rgba(54,46,237,0.35)]

                transition-all duration-500

                hover:-translate-y-3
                hover:shadow-[0_0_55px_rgba(56,189,248,0.35)]

                opacity-0
                animate-[fadeUp_1s_ease_forwards]
              "
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
            >

              {/* TOP GLOW */}
              <div
                className="
                  absolute
                  top-[-40px]
                  left-[-40px]

                  w-40
                  h-40

                  rounded-full
                  bg-sky-400/20
                  blur-3xl
                "
              />

              {/* BOTTOM GLOW */}
              <div
                className="
                  absolute
                  bottom-[-40px]
                  right-[-40px]

                  w-40
                  h-40

                  rounded-full
                  bg-purple-500/20
                  blur-3xl
                "
              />

              {/* GRID EFFECT */}
              <div
                className="
                  absolute inset-0
                  opacity-10

                  bg-[linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)]

                  bg-[size:24px_24px]
                "
              />

              {/* IMAGE */}
              <div className="relative overflow-hidden rounded-t-[32px]">

                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="
                    w-full
                    h-[280px]

                    object-cover

                    transition-all duration-700

                    group-hover:scale-110
                  "
                />

                {/* IMAGE OVERLAY */}
                <div
                  className="
                    absolute inset-0

                    bg-gradient-to-t
                    from-black/50
                    to-transparent
                  "
                />

              </div>

              {/* CONTENT */}
              <div className="relative z-10 p-8">

                {/* TITLE */}
                <h3
                  className="
                    text-3xl
                    font-bold
                    text-white

                    mb-4

                    transition duration-300

                    group-hover:text-sky-300
                  "
                >
                  {project.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                    text-slate-200
                    leading-relaxed

                    mb-7
                  "
                >
                  {project.description}
                </p>

                {/* STACK */}
                <div className="flex flex-wrap gap-3 mb-8">

                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="
                        px-4 py-2

                        rounded-full

                        bg-white/10
                        border border-white/10

                        text-sm
                        text-white

                        backdrop-blur-md

                        transition-all duration-300

                        hover:bg-sky-400/20
                        hover:border-sky-300/30
                        hover:scale-105
                      "
                    >
                      {item}
                    </span>
                  ))}

                </div>

                {/* BUTTONS */}
                <div className="flex gap-4">

                  {/* GITHUB */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex-1
                      flex items-center justify-center gap-2

                      py-3.5

                      rounded-2xl

                      bg-white/10
                      border border-white/10

                      text-white
                      font-semibold

                      transition-all duration-300

                      hover:bg-white
                      hover:text-[#1e1b4b]
                      hover:scale-105
                    "
                  >
                    <FaGithub size={18} />
                    GitHub
                  </a>

                  {/* DEMO */}
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex-1
                      flex items-center justify-center gap-2

                      py-3.5

                      rounded-2xl

                      bg-gradient-to-r
                      from-sky-400
                      to-purple-500

                      text-white
                      font-semibold

                      transition-all duration-300

                      hover:scale-105
                      hover:shadow-[0_0_25px_rgba(56,189,248,0.5)]
                    "
                  >
                    <FaExternalLinkAlt size={16} />
                    Live Demo
                  </a>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Projects