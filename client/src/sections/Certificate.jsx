const certificates = [
  {
    id: 1,
    title: 'Belajar Fundamental Front-End Web Development',
    issuer: 'Dicoding Indonesia',
    image: '/fundamental-front-end.webp',
    link: 'https://www.dicoding.com/dicodingassets/coursecertificate/324a8081369090c9e920c6fefa787c65b0fad6be/view',
  },
  {
    id: 2,
    title: 'Belajar Fundamental Aplikasi Web dengan React',
    issuer: 'Dicoding Indonesia',
    image: '/fundamental-react.webp',
    link: 'https://www.dicoding.com/dicodingassets/coursecertificate/5304c6faa81c59d78d07caa32e8a158bdb253d53/view',
  },
  {
    id: 3,
    title: 'Belajar Fundamental Back-End dengan JavaScript',
    issuer: 'Dicoding Indonesia',
    image: '/fundamental-backend.webp',
    link: 'https://www.dicoding.com/dicodingassets/coursecertificate/55243985356be883881414923d9524bf00644800/view',
  },
  {
    id: 4,
    title: 'Menjadi React Web Developer Expert',
    issuer: 'Dicoding Indonesia',
    image: '/expert-react.webp',
    link: 'https://www.dicoding.com/dicodingassets/coursecertificate/50941f0e3af4f895cd5ff266eda160594b4bf37e/view',
  },
  {
    id: 5,
    title: 'Lulus Program Dicoding Asah X Accenture',
    issuer: 'Dicoding Indonesia',
    image: '/dicoding-Asah.webp',
    link: 'https://drive.google.com/file/d/1fiJ8Fl_nHzo4IwzRAVzSm43hk1ZlrGtf/view?usp=sharing',
  },
]

const Certificates = () => {
  return (
    <section className="py-32 px-6 bg-[#362EED]/80">
      <div className="max-w-[1700px] mx-auto flex flex-col items-center">

        {/* HEADER */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My Certifications
          </h2>

          <p className="text-white mt-5 max-w-2xl leading-relaxed">
            Some professional certifications and learning achievements
            that represent my development journey in web technologies.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 justify-items-center">

          {certificates.map((cert) => (
            <CertificateCard key={cert.id} cert={cert} />
          ))}

        </div>

      </div>
    </section>
  )
}

const CertificateCard = ({ cert }) => {
  return (
    <div
      className={`
        group relative w-full max-w-[480px] lg:col-span-2
        rounded-[30px] overflow-hidden
        border border-white/10

        bg-slate-900/30
        backdrop-blur-md

        shadow-md

        transition-transform duration-300

        hover:-translate-y-2

        ${cert.id === 4 ? 'lg:col-start-2' : ''}
        ${cert.id === 5 ? 'lg:col-start-4' : ''}
      `}
    >

      {/* IMAGE */}
      <div className="h-[330px] overflow-hidden">
        <img
          src={cert.image}
          alt={cert.title}
          loading="lazy"
          decoding="async"
          className="
            w-full h-full object-cover
            transition-transform duration-500
            group-hover:scale-105
          "
        />
      </div>

      {/* OVERLAY */}
      <div
        className="
          absolute inset-0 bg-black/70
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300

          flex flex-col items-center justify-center text-center px-8
        "
      >
        <h3 className="text-white font-bold text-2xl leading-snug">
          {cert.title}
        </h3>

        <p className="text-slate-300 text-base mt-4">
          {cert.issuer}
        </p>

        <a
          href={cert.link}
          target="_blank"
          rel="noreferrer"
          className="
            mt-7 bg-[#362EED] hover:bg-[#4b44ff]
            px-6 py-3 rounded-2xl
            text-sm font-semibold text-white
            transition-transform duration-200
            hover:scale-105
          "
        >
          View Certificate
        </a>
      </div>

    </div>
  )
}

export default Certificates