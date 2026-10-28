
import {
  Monitor,
  LayoutDashboard,
  Workflow,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Websites & Landing Pages",
    description:
      "Responsive, modern websites that communicate your value clearly and help customers take the next step.",
    tags: ["React", "Tailwind CSS", "Responsive Design"],
    icon: Monitor,
  },
  {
    number: "02",
    title: "Web Apps & Dashboards",
    description:
      "Custom web applications that help businesses manage data, organize workflows, and work more efficiently.",
    tags: ["React", "Django", "REST APIs"],
    icon: LayoutDashboard,
  },
  {
    number: "03",
    title: "API Integration & Automation",
    description:
      "Connect applications to backend services and simplify repetitive workflows with practical integrations.",
    tags: ["Python", "Django REST", "Integrations"],
    icon: Workflow,
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="bg-[#FAF9F6] px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-green-800">
            What I can help with
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-[#17231D] sm:text-5xl">
            Turning business needs into{" "}
            <span className="text-green-800">digital solutions.</span>
          </h2>

          <p className="mt-5 max-w-xl leading-7 text-gray-600">
            From a professional online presence to custom business
            tools, I build practical digital experiences around
            your needs.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.number}
                className="group flex h-full flex-col rounded-2xl border border-[#E4E7DF] bg-white/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-green-800/30 hover:shadow-xl hover:shadow-green-950/5 sm:p-8"
              >
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-900/5 text-green-800 transition group-hover:bg-green-900 group-hover:text-white">
                    <Icon size={23} strokeWidth={1.7} />
                  </div>

                  <span className="text-sm font-medium text-gray-400">
                    {service.number}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-[#17231D]">
                  {service.title}
                </h3>

                <p className="mt-4 flex-1 text-sm leading-7 text-gray-600">
                  {service.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#F0F3EE] px-3 py-1.5 text-xs font-medium text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-green-900"
                >
                  Discuss a project
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
