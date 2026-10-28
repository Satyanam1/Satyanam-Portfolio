
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);
import {
  ArrowUpRight,
  ExternalLink,
  Coffee,
  Layers3,
} from "lucide-react";
import { useRef } from "react";

const projects = [
  {
    number: "01",
    name: "Brewly",
    category: "SAAS · FULL-STACK WEB APPLICATION",
    description:
      "A café-management platform designed to bring everyday café operations into one place, including menu management, orders, and sales insights.",
    status: "In development",
    technologies: ["React", "Tailwind CSS", "Django", "REST APIs"],
    icon: Coffee,
    github: "https://github.com/Satyanam1/brewly",
    live: "https://satyanam.pythonanywhere.com/",
  },
  {
    number: "02",
    name: "LeadFlow",
    category: "BUSINESS TOOLS · WEB APPLICATION",
    description:
      "A planned lead-management tool for organizing enquiries, tracking lead statuses, and scheduling follow-ups in one dashboard.",
    status: "Planned",
    technologies: ["React", "Tailwind CSS", "Django REST"],
    icon: Layers3,
    github: "",
    live: "",
  },
];

const Projects = () => {

    const sectionRef = useRef(null);

  useGSAP(
    () => {
      // Reveal the section heading
      gsap.from(".projects-heading", {
        y: 30,
        autoAlpha: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".projects-heading",
          start: "top 85%",
          once: true,
        },
      });

      // Reveal project cards with a stagger
      gsap.from(".project-card", {
        y: 45,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 82%",
          once: true,
        },
      });

      // Subtle entrance for the project previews
      gsap.from(".project-visual", {
        scale: 0.96,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 82%",
          once: true,
        },
      });
    },
    { scope: sectionRef }
  );

   
  return (
    <section
      id="projects"
      ref={sectionRef}
      className="bg-[#F3F5F1] px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="projects-heading mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-green-800">
              Selected work
            </p>

            <h2 className="text-3xl font-semibold tracking-tight text-[#17231D] sm:text-5xl">
              Projects built with{" "}
              <span className="text-green-800">purpose.</span>
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-gray-600">
              A look at the products I'm building and the
              problems I'm exploring through code.
            </p>
          </div>

          <span className="text-sm text-gray-500">
            Personal projects & experiments
          </span>
        </div>

        {/* Equal-width project cards */}
        <div className="projects-grid grid grid-cols-1 items-stretch gap-6 md:grid-cols-2">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <article
                key={project.number}
                className="project-card flex w-full min-w-0 flex-col overflow-hidden rounded-2xl border border-[#E1E6DE] bg-white"
              >
                {/* Project visual */}
                <div className="project-visual relative flex min-h-64 items-center justify-center overflow-hidden bg-gradient-to-br from-[#EAF0E5] via-[#F7F8F4] to-[#DDEBE0] sm:min-h-80">
                  <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(#8AA38B_1px,transparent_1px),linear-gradient(90deg,#8AA38B_1px,transparent_1px)] [background-size:32px_32px]" />

                  <div className="relative mx-5 w-full max-w-md rounded-xl border border-white/80 bg-white/90 p-4 shadow-xl shadow-green-950/10 sm:p-6">
                    <div className="flex items-center justify-between gap-2 border-b border-gray-100 pb-4">
                      <div className="flex items-center gap-2">
                        <Icon
                          size={20}
                          className="shrink-0 text-green-800"
                        />
                        <span className="font-semibold text-gray-800">
                          {project.name}
                        </span>
                      </div>

                      <span className="shrink-0 rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600">
                        {project.status}
                      </span>
                    </div>

                    <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-3">
                      {[1, 2, 3].map((item) => (
                        <div
                          key={item}
                          className="h-14 rounded-lg bg-[#EEF3EC] sm:h-20"
                        />
                      ))}
                    </div>

                    <div className="mt-4 space-y-3">
                      <div className="h-3 w-full rounded bg-gray-100" />
                      <div className="h-3 w-4/5 rounded bg-gray-100" />
                      <div className="h-3 w-3/5 rounded bg-gray-100" />
                    </div>
                  </div>

                  <span className="absolute bottom-4 right-4 rounded-full border border-white/80 bg-white/70 px-3 py-1 text-xs text-gray-600 backdrop-blur">
                    Concept preview
                  </span>
                </div>

                {/* Project details */}
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <p className="text-xs font-semibold tracking-[0.14em] text-green-800">
                    {project.category}
                  </p>

                  <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                    <h3 className="text-2xl font-semibold text-[#17231D]">
                      {project.name}
                    </h3>

                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600">
                      {project.status}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-gray-600">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-[#F0F3EE] px-3 py-1.5 text-xs text-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap gap-5 pt-7">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-green-900"
                      >
                        <ExternalLink size={17} />
                        Source code
                        <ArrowUpRight size={15} />
                      </a>
                    )}

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-green-900"
                      >
                        Live project
                        <ExternalLink size={15} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
