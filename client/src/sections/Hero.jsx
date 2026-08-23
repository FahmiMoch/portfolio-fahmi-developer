import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

import profile from '../assets/profile-fahmi.png'
import linkedin from '../assets/linkedin.svg'
import github from '../assets/github.svg'

import {
  FaTools,
  FaBookOpen,
  FaCode,
  FaSeedling,
} from 'react-icons/fa'

const Hero = () => {
  const roles = [
    'Front End Developer',
    'Fullstack Developer',
    'Dicoding Asah x Accenture Graduate',
  ]

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  // STATS VARIANT
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 80,
      scale: 0.7,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  }

  return (
    <section className="w-full bg-[#362EED]/80 px-6 pt-55 pb-20 flex overflow-hidden">

      <div className="w-full max-w-7xl mx-auto">

        {/* HERO GRID */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              ease: 'easeOut',
            }}
            className="text-center md:text-left"
          >

            {/* HELLO */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
              className="text-white-500 font-medium mb-4"
            >
              Hello, I'm Mochamad Fahmi Fadillah
            </motion.p>

            {/* DYNAMIC TITLE */}
            <motion.h1
              initial={{ opacity: 0, y: 80, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 1,
                delay: 0.3,
                type: 'spring',
                stiffness: 80,
              }}
              className="text-5xl md:text-7xl font-bold leading-tight text-white h-[80px] md:h-[120px]"
              style={{
                WebkitTextStroke: '0.1px black',
                textShadow: '4px 4px 0px rgba(0,0,0,2)',
              }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5 }}
                  className="block"
                >
                  {roles[index]}
                </motion.span>
              </AnimatePresence>
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.6,
              }}
              className="text-slate-300 mt-6 max-w-xl md:mx-0 mx-auto text-lg"
            >
              I build responsive, scalable, and modern web applications using
              React, Node.js, and clean architecture.
            </motion.p>

            {/* SOCIAL ICONS */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.2,
                    delayChildren: 0.8,
                  },
                },
              }}
              className="mt-10 flex justify-center md:justify-start gap-8"
            >

              {/* LINKEDIN */}
              <motion.a
                href="https://id.linkedin.com/in/mochamad-fahmi-fadillah"
                target="_blank"
                rel="noopener noreferrer"
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 50,
                    scale: 0.5,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  },
                }}
                transition={{
                  type: 'spring',
                  stiffness: 120,
                }}
                className="
                  w-[70px] h-[70px]
                  bg-white
                  rounded-full
                  flex items-center justify-center
                  shadow-[0_0_20px_rgba(0,0,0,0.5)]
                  transition-all duration-500
                  hover:scale-[1.3]
                  hover:-rotate-[360deg]
                  hover:-translate-y-3
                "
                style={{ animation: 'sway 2s infinite alternate' }}
              >
                <img
                  src={linkedin}
                  alt="LinkedIn"
                  className="w-8 h-8 transition-all duration-500 hover:scale-125"
                />
              </motion.a>

              {/* GITHUB */}
              <motion.a
                href="https://github.com/mochamadfahmifadillah/"
                target="_blank"
                rel="noopener noreferrer"
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 50,
                    scale: 0.5,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  },
                }}
                transition={{
                  type: 'spring',
                  stiffness: 120,
                }}
                className="
                  w-[70px] h-[70px]
                  bg-white
                  rounded-full
                  flex items-center justify-center
                  shadow-[0_0_20px_rgba(0,0,0,0.5)]
                  transition-all duration-500
                  hover:scale-[1.3]
                  hover:-rotate-[360deg]
                  hover:-translate-y-3
                "
                style={{ animation: 'sway 2s infinite alternate' }}
              >
                <img
                  src={github}
                  alt="GitHub"
                  className="w-8 h-8 transition-all duration-500 hover:scale-125"
                />
              </motion.a>

            </motion.div>

          </motion.div>

          {/* RIGHT IMAGE CARD */}
          <motion.div
            initial={{ opacity: 0, x: 120, rotate: 8 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{
              duration: 1.2,
              ease: 'easeOut',
            }}
            className="flex justify-center md:justify-end"
          >
            <div
              className="
                w-[260px] md:w-[340px]
                relative
                rounded-[0.5rem_2rem]
                shadow-[0_15px_30px_-5px_rgba(0,0,0,0.6)]
                transition-all duration-300
                hover:scale-[1.05]
              "
            >

              {/* IMAGE */}
              <div className="h-[340px] md:h-[430px] overflow-hidden rounded-[0.5rem_2rem]">
                <img
                  src={profile}
                  alt="Fahmi"
                  className="w-full h-full object-cover transition-all duration-300 hover:scale-125"
                />
              </div>

              {/* NAME */}
              <div
                className="
                  absolute bottom-3 left-3
                  w-[92%]
                  px-4 py-2
                  text-left
                  backdrop-blur-[3px]
                  bg-black/20
                  rounded-[0.5rem_2rem]
                  transition-all duration-500
                  hover:translate-x-2
                  hover:rotate-[3deg]
                "
              >
                <h3 className="text-white text-sm font-semibold">
                  Mochamad Fahmi Fadillah
                </h3>
              </div>

            </div>
          </motion.div>

        </motion.div>

        {/* STATS SECTION */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="
            mt-30
            grid grid-cols-2 md:grid-cols-4
            gap-6
          "
        >

          {/* CARD 1 */}
          <motion.div
            variants={cardVariants}
            transition={{
              duration: 0.8,
              type: 'spring',
            }}
            className="
              bg-white
              rounded-2xl
              border-[3px]
              border-[#000]
              h-44
              flex flex-col
              justify-center
              items-center
              text-neutral-700
              shadow-xl
              transition-all
              duration-500
              hover:-translate-y-3
              hover:shadow-2xl
              hover:border-sky-500
            "
          >
            <FaTools className="text-5xl mb-3 text-[#362EED]" />
            <p className="mt-2 font-bold text-[#362EED]">
              Building Skills
            </p>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            variants={cardVariants}
            transition={{
              duration: 0.8,
              type: 'spring',
            }}
            className="
              bg-white
              rounded-2xl
              border-[3px]
              border-[#000]
              h-44
              flex flex-col
              justify-center
              items-center
              text-neutral-700
              shadow-xl
              transition-all
              duration-500
              hover:-translate-y-3
              hover:shadow-2xl
              hover:border-sky-500
            "
          >
            <FaBookOpen className="text-5xl mb-3 text-[#362EED]" />
            <p className="mt-2 font-bold text-[#362EED]">
              Learning Everyday
            </p>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            variants={cardVariants}
            transition={{
              duration: 0.8,
              type: 'spring',
            }}
            className="
              bg-white
              rounded-2xl
              border-[3px]
              border-[#000]
              h-44
              flex flex-col
              justify-center
              items-center
              text-neutral-700
              shadow-xl
              transition-all
              duration-500
              hover:-translate-y-3
              hover:shadow-2xl
              hover:border-sky-500
            "
          >
            <FaCode className="text-5xl mb-3 text-[#362EED]" />
            <p className="mt-2 font-bold text-[#362EED]">
              Development
            </p>
          </motion.div>

          {/* CARD 4 */}
          <motion.div
            variants={cardVariants}
            transition={{
              duration: 0.8,
              type: 'spring',
            }}
            className="
              bg-white
              rounded-2xl
              border-[3px]
              border-[#000]
              h-44
              flex flex-col
              justify-center
              items-center
              text-neutral-700
              shadow-xl
              transition-all
              duration-500
              hover:-translate-y-3
              hover:shadow-2xl
              hover:border-sky-500
            "
          >
            <FaSeedling className="text-5xl mb-3 text-[#362EED]" />
            <p className="mt-2 font-bold text-[#362EED]">
              Growing Consistently
            </p>
          </motion.div>

        </motion.div>

      </div>
    </section>
  )
}

export default Hero