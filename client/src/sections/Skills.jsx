import { useEffect, useState } from 'react'

import jsLogo from '../assets/javascript.svg'
import tailwindLogo from '../assets/tailwind.svg'
import sassLogo from '../assets/sass.svg'
import reactLogo from '../assets/react.svg'
import reduxLogo from '../assets/redux.svg'
import nodeLogo from '../assets/nodejs.svg'
import expressLogo from '../assets/express-js.svg'
import mongoLogo from '../assets/mongo.svg'
import postgreLogo from '../assets/postgresql.svg'

const skills = [
  { name: 'JavaScript', image: jsLogo },
  { name: 'Tailwind', image: tailwindLogo },
  { name: 'Sass', image: sassLogo },
  { name: 'React', image: reactLogo },
  { name: 'Redux', image: reduxLogo },
  { name: 'Node.js', image: nodeLogo },
  { name: 'Express', image: expressLogo },
  { name: 'MongoDB', image: mongoLogo },
  { name: 'PostgreSQL', image: postgreLogo },
]

const Skills = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1200)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <section className="py-32 px-6 bg-[#362EED]/80">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">
            <div className="h-5 w-24 mx-auto rounded bg-white/20 animate-pulse mb-4" />
            <div className="h-12 w-96 max-w-full mx-auto rounded bg-white/20 animate-pulse" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {[...Array(9)].map((_, index) => (
              <div
                key={index}
                className="
                  h-56
                  w-72
                  rounded-3xl
                  bg-white/10
                  animate-pulse
                "
              />
            ))}
          </div>

        </div>
      </section>
    )
  }

  return (
    <section className="py-32 px-6 bg-[#362EED]/80">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Technologies I Work With
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {skills.map((skill) => (
            <SkillCard
              key={skill.name}
              skill={skill}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

const SkillCard = ({ skill }) => {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        flex justify-center items-center
        h-56
        w-72
        rounded-3xl
        bg-gradient-to-br
        from-[#362EED]
        via-[#4f46e5]
        to-[#1e1b4b]
        shadow-[0_0_30px_rgba(54,46,237,0.35)]
        transition-all duration-500
        hover:shadow-[0_0_50px_rgba(56,189,248,0.45)]
      "
    >
      <div
        className="
          absolute
          top-[-30px]
          left-[-30px]
          w-36
          h-36
          rounded-full
          bg-sky-400/20
          blur-3xl
        "
      />

      <div
        className="
          absolute
          bottom-[-30px]
          right-[-30px]
          w-36
          h-36
          rounded-full
          bg-purple-500/20
          blur-3xl
        "
      />

      <div
        className="
          absolute inset-0
          opacity-10
          bg-[linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)]
          bg-[size:24px_24px]
        "
      />

      <div className="relative z-10 flex flex-col items-center gap-5">

        <img
          src={skill.image}
          alt={skill.name}
          className="
            w-20
            h-20
            object-contain
            transition-all duration-700
            group-hover:scale-150
            group-hover:rotate-[360deg]
            group-hover:drop-shadow-[0_0_25px_rgba(56,189,248,0.9)]
          "
        />

        <p
          className="
            text-white
            text-lg
            font-semibold
            tracking-wide
            transition-all duration-300
            group-hover:text-sky-300
          "
        >
          {skill.name}
        </p>

      </div>
    </div>
  )
}

export default Skills