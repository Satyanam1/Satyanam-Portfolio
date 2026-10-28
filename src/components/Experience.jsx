
import { GraduationCap, Code2, Rocket } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const journey = [
  {
    period: "FOUNDATION",
    title: "Computer Science Graduate",
    description:
      "Built a foundation in programming, software development, databases, and computer science fundamentals.",
    icon: GraduationCap,
  },
  {
    period: "HANDS-ON DEVELOPMENT",
    title: "Learning Full-Stack Development",
    description:
      "Practising frontend development with React and Tailwind CSS, alongside backend development with Python, Django, and REST APIs.",
    icon: Code2,
  },
  {
    period: "CURRENT FOCUS",
    title: "Building Real-World Projects",
    description:
      "Developing Brewly, a café-management platform, and working toward building useful digital solutions for businesses.",
    icon: Rocket,
  },
];

const Experience = () => {

const sectionRef = useRef(null);

 





  return (
    <section
    ref={sectionRef}
      id="experience"
      className="bg-[#F3F5F1] px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="experience-heading mb-14 max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-green-800">
            My journey
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-[#17231D] sm:text-5xl">
            Learning, building,
            <span className="text-green-800"> improving.</span>
          </h2>

          <p className="mt-5 max-w-xl leading-7 text-gray-600">
            My journey so far has focused on building a strong
            technical foundation and applying it through practical
            projects.
          </p>
        </div>

        <div className="journey-list  relative ml-3 space-y-8 border-l border-green-900/20 pl-7 sm:ml-5 sm:pl-10">
          {journey.map((item, index) => {
            const Icon = item.icon;

            return (
              <article key={item.title} className="journey-card  relative">
                <div className="absolute -left-[39px] flex h-10 w-10 items-center justify-center rounded-full border border-green-900/15 bg-[#FAF9F6] text-green-800 sm:-left-[53px]">
                  <Icon size={19} strokeWidth={1.7} />
                </div>

                <div className="rounded-2xl border border-[#E1E6DE] bg-white p-6 sm:p-8">
                  <p className="text-xs font-semibold tracking-[0.16em] text-green-800">
                    {item.period}
                  </p>

                  <h3 className="mt-3 text-xl font-semibold text-[#17231D] sm:text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-600 sm:text-base">
                    {item.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
