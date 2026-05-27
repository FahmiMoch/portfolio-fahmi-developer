const Contact = () => {
  return (
    <section
      id="contact"
      className="
        relative
        py-32
        px-6
        overflow-hidden
        bg-gradient-to-b
        from-[#0f172a]
        via-[#1e1b4b]
        to-[#020617]
      "
    >
      {/* Blur Background Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-sky-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto">

        {/* Title */}
        <div className="text-center mb-16">
          <p className="text-sky-400 font-medium mb-4 tracking-widest uppercase">
            Contact
          </p>

          <h2 className="text-5xl font-bold text-white mb-5 leading-tight">
            Let’s Work Together
          </h2>
        </div>

        {/* Form Container */}
        <div className="flex justify-center items-center">

          <div
            className="
              w-full
              max-w-xl
              rounded-3xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              p-10
              shadow-[0_10px_40px_rgba(0,0,0,0.5)]
            "
          >

            <form className="flex flex-col gap-6">

              <h3 className="text-2xl font-semibold text-white text-center mb-2">
                Send Message
              </h3>

              <input
                type="text"
                placeholder="Your Name"
                className="
                  w-full
                  min-h-[56px]
                  bg-white/5
                  border
                  border-white/10
                  rounded-xl
                  px-5
                  text-white
                  placeholder:text-slate-400
                  outline-none
                  transition-all
                  duration-300
                  focus:border-sky-400
                  focus:bg-white/10
                  focus:shadow-[0_0_20px_rgba(56,189,248,0.25)]
                "
              />

              <input
                type="email"
                placeholder="Your Email"
                className="
                  w-full
                  min-h-[56px]
                  bg-white/5
                  border
                  border-white/10
                  rounded-xl
                  px-5
                  text-white
                  placeholder:text-slate-400
                  outline-none
                  transition-all
                  duration-300
                  focus:border-sky-400
                  focus:bg-white/10
                  focus:shadow-[0_0_20px_rgba(56,189,248,0.25)]
                "
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="
                  w-full
                  bg-white/5
                  border
                  border-white/10
                  rounded-xl
                  px-5
                  py-4
                  text-white
                  placeholder:text-slate-400
                  resize-none
                  outline-none
                  transition-all
                  duration-300
                  focus:border-sky-400
                  focus:bg-white/10
                  focus:shadow-[0_0_20px_rgba(56,189,248,0.25)]
                "
              />

              <button
                className="
                  py-4
                  rounded-xl
                  bg-gradient-to-r
                  from-sky-500
                  to-indigo-500
                  text-white
                  font-semibold
                  cursor-pointer
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                  hover:shadow-[0_10px_30px_rgba(59,130,246,0.4)]
                  active:scale-[0.98]
                "
              >
                Send Message
              </button>

            </form>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact