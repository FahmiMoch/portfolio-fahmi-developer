import { useEffect, useState } from "react"

const About = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <section className="px-6 md:px-10 py-28 bg-[#362EED]/80">
        <div className="max-w-5xl mx-auto">

          {/* TITLE SKELETON */}
          <div className="flex flex-col items-center mb-16 animate-pulse">
            <div className="w-56 h-12 bg-white/20 rounded-xl" />
            <div className="w-32 h-1.5 bg-white/20 rounded-full mt-7" />
          </div>

          {/* CARD SKELETON */}
          <div className="bg-white/10 rounded-[32px] p-8 md:p-14 animate-pulse">
            <div className="space-y-6">
              <div className="h-5 bg-white/20 rounded w-full" />
              <div className="h-5 bg-white/20 rounded w-11/12" />
              <div className="h-5 bg-white/20 rounded w-10/12" />

              <div className="h-5 bg-white/20 rounded w-full mt-10" />
              <div className="h-5 bg-white/20 rounded w-9/12" />

              <div className="h-5 bg-white/20 rounded w-full mt-10" />
              <div className="h-5 bg-white/20 rounded w-8/12" />
            </div>
          </div>

        </div>
      </section>
    )
  }

  return (
    <section className="px-6 md:px-10 py-28 bg-[#362EED]/80 overflow-hidden">
      <div className="max-w-5xl mx-auto">

        {/* TITLE */}
        <div
          className="
            text-center
            mb-16
            opacity-0
            animate-[fadeUp_1s_ease_forwards]
          "
        >
          <h2
            className="
              text-5xl md:text-6xl
              font-extrabold
              text-transparent
              bg-clip-text
              bg-gradient-to-r
              from-white
              via-sky-300
              to-purple-300
              animate-gradient
              tracking-wide
              drop-shadow-[0_0_25px_rgba(255,255,255,0.25)]
            "
          >
            About Me
          </h2>

          <div
            className="
              w-32 h-1.5
              bg-white/70
              mx-auto
              mt-7
              rounded-full
              shadow-[0_0_20px_rgba(255,255,255,0.5)]
            "
          />
        </div>

        {/* CONTENT CARD */}
        <div
          className="
            relative
            bg-white/10
            backdrop-blur-xl
            border border-white/10
            rounded-[32px]
            p-8 md:p-14
            overflow-hidden
            shadow-[0_0_45px_rgba(0,0,0,0.25)]
            opacity-0
            animate-[fadeUp_1.2s_ease_forwards]
          "
        >
          {/* GLOW EFFECT */}
          <div
            className="
              absolute
              w-72 h-72
              bg-sky-400/20
              blur-3xl
              rounded-full
              -top-24
              -left-20
            "
          />

          <div
            className="
              absolute
              w-72 h-72
              bg-purple-500/20
              blur-3xl
              rounded-full
              -bottom-24
              -right-20
            "
          />

          {/* CONTENT */}
          <div
            className="
              relative
              z-10
              space-y-8
              text-slate-100
              text-lg md:text-xl
              leading-[2.2]
              tracking-wide
              text-center
              md:text-left
            "
          >
            <p className="transition-all duration-300 hover:translate-x-2 hover:text-white">
              An Information Systems student at Universitas Komputer Indonesia,
              currently transitioning from logistics operations into Full Stack
              Web Development.
            </p>

            <p className="transition-all duration-300 hover:translate-x-2 hover:text-white">
              I am a graduate of the Dicoding Asah x Accenture program (2025),
              where I gained hands-on experience through project-based learning
              and real-world development workflows aligned with industry
              standards.
            </p>

            <p className="transition-all duration-300 hover:translate-x-2 hover:text-white">
              I focus on building modern and scalable web applications using
              technologies such as React, Next.js, and Node.js while
              implementing REST API integration and clean architecture
              principles.
            </p>

            <p className="transition-all duration-300 hover:translate-x-2 hover:text-white">
              I enjoy crafting responsive user interfaces, solving backend
              challenges, and creating efficient, user-focused digital
              experiences.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About