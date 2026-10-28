
import { Code2, Lightbulb, Rocket, ArrowUpRight } from "lucide-react";

const strengths = [
  {
    icon: Code2,
    title: "Full-stack development",
    description:
      "Building responsive interfaces and connecting them to backend APIs and databases.",
  },
  {
    icon: Lightbulb,
    title: "Problem-solving mindset",
    description:
      "Understanding the problem first, then choosing a practical and maintainable solution.",
  },
  {
    icon: Rocket,
    title: "Learning by building",
    description:
      "Developing real projects to strengthen my skills and turn ideas into working software.",
  },
];

const About = () => {

  return (
    <section
    
      id="about"
      className="bg-[#FAF9F6] px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          {/* About introduction */}
          <div>
            <p className="about-intro mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-green-800">
              A little about me
            </p>

            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#17231D] sm:text-5xl">
              Developer by craft.
              <span className="mt-1 block text-green-800">
                Problem-solver by mindset.
              </span>
            </h2>

            <div className="mt-7 space-y-5 text-base leading-8 text-gray-600">
              <p>
                I'm Satyanam Kumar, a computer science graduate interested
                in building useful digital products for businesses.
                I work with modern frontend and backend technologies
                to create responsive websites and practical web apps.
              </p>

              <p>
                Currently, I'm developing Brewly, a café-management
                platform, while improving my full-stack skills and
                exploring how software can solve everyday business
                problems.
              </p>
            </div>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-green-900 transition hover:gap-3"
            >
              Have a project in mind?
              <ArrowUpRight size={18} />
            </a>
          </div>

          {/* Strengths */}
          <div className="about-strengths space-y-4">
            {strengths.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="about-strength group flex gap-5 rounded-2xl border border-[#E4E7DF] bg-white/70 p-5 transition hover:border-green-800/25 hover:shadow-lg hover:shadow-green-950/5 sm:p-6"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-900/5 text-green-800 transition group-hover:bg-green-900 group-hover:text-white">
                    <Icon size={22} strokeWidth={1.7} />
                  </div>

                  <div>
                    <p className="mb-1 text-xs font-medium tracking-widest text-gray-400">
                      0{index + 1}
                    </p>

                    <h3 className="text-lg font-semibold text-[#17231D]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
