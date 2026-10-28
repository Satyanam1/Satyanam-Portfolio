import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";



const Hero = () => {
  

  return (
    <section
     
      id="home"
      className="hero-bg relative flex min-h-[calc(100svh-68px)] items-center justify-center overflow-hidden px-5 pt-12 pb-20 sm:px-8 sm:pt-14 sm:pb-24 lg:py-16"
    >
      <div className="hero-glow pointer-events-none absolute inset-0" />
      <div className="hero-grid pointer-events-none absolute inset-0" />

      <div className="relative z-10 mx-auto w-full max-w-5xl text-center">
        <div className="hero-badge mb-6 inline-flex items-center gap-2 rounded-full border border-green-900/10 bg-white/60 px-4 py-2 shadow-sm backdrop-blur-sm sm:mb-7">
          <span className="h-2 w-2 rounded-full bg-lime-500" />
          <span className="text-xs font-medium text-gray-600 sm:text-sm">
            Available for new projects
          </span>
        </div>

        <h1 className="text-4xl font-semibold leading-[1.12] tracking-tight text-[#15191B] sm:text-6xl lg:text-7xl">
          <span className="hero-title-line block">
            Building modern websites
          </span>
          <span className="hero-title-line block text-lime-500">
            and business web applications
          </span>
          <span className="hero-title-line block">
            that help businesses grow.
          </span>
        </h1>

        <p className="hero-description mx-auto mt-5 max-w-2xl text-sm leading-6 text-gray-500 sm:mt-6 sm:text-lg sm:leading-8">
          Hey, I'm Satyanam Kumar — a developer building modern
          responsive websites and full-stack web applications for
          businesses and startups. I turn ideas and business requirements
          into practical, user-friendly digital solutions.
        </p>

        <div className="hero-actions mt-7 flex flex-col items-center justify-center gap-3 sm:mt-8 sm:flex-row">
          <a
            href="#projects"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-lime-500 px-7 py-3 text-sm font-semibold text-[#182117] transition hover:bg-lime-400"
          >
            View My Work
            <ArrowRight size={17} />
          </a>

          <a
            href="#contact"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-green-900/30 px-7 py-3 text-sm font-semibold text-green-950 transition hover:bg-green-900/5"
          >
            Get In Touch
            <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="hero-tech mt-6 flex flex-wrap items-center justify-center gap-2 sm:mt-7">
          {["React", "Tailwind CSS", "Django", "REST APIs"].map(
            (tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/80 bg-white/65 px-3 py-1.5 text-xs font-medium text-gray-600 shadow-sm"
              >
                {tech}
              </span>
            )
          )}
        </div>
      </div>

      <a
        href="#about"
        className="hero-scroll absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1.5 whitespace-nowrap text-[10px] font-medium tracking-[0.16em] text-gray-500 transition hover:text-green-800 sm:bottom-5"
      >
        SCROLL TO EXPLORE
        <ArrowDown size={15} />
      </a>
    </section>
  );
};

export default Hero;
