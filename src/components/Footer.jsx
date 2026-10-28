import { ArrowUp, ArrowUpRight } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Satyanam1",
    label: "GH",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/satyanam-kumar-95b713273/",
    label: "in",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/satyanam.ray/",
    label: "IG",
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#FAF9F6] px-5 pb-6 pt-16 sm:px-8 sm:pt-20">
      <div className="mx-auto max-w-7xl">
        {/* Closing CTA */}
        <div className="relative overflow-hidden rounded-3xl bg-[#0F5132] px-6 py-12 sm:px-10 sm:py-16 lg:px-16">
          {/* Decorative background accent */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border border-white/10 sm:h-80 sm:w-80"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-8 -top-12 h-48 w-48 rounded-full border border-white/10 sm:h-64 sm:w-64"
          />

          <div className="relative z-10 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-lime-300">
                Have a project in mind?
              </p>

              <h2 className="text-4xl font-semibold leading-tight tracking-tight text-[#FAF9F6] sm:text-5xl lg:text-6xl">
                Let's build something
                <span className="block text-lime-300">
                  meaningful.
                </span>
              </h2>

              <p className="mt-5 max-w-lg text-sm leading-7 text-white/70 sm:text-base">
                From business websites to web applications,
                let's turn your idea into something useful.
              </p>
            </div>

            <a
              href="#contact"
              className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-lime-400 px-6 py-4 text-sm font-semibold text-[#17231D] transition duration-300 hover:-translate-y-1 hover:bg-lime-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F5132]"
            >
              Start a conversation
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>
        </div>

        {/* Footer navigation */}
        <div className="flex flex-col gap-7 py-9 sm:flex-row sm:items-center sm:justify-between">
          {/* Brand */}
          <a
            href="#home"
            className="w-fit text-2xl font-bold tracking-tight text-[#0F5132] transition-opacity hover:opacity-75"
          >
            Satyanam<span className="text-lime-500">.</span>
          </a>

          {/* Social links */}
          <div className="flex flex-wrap items-center gap-3">
            {socialLinks.map(({ name, href, label }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="group flex items-center gap-2 rounded-full border border-[#0F5132]/10 px-4 py-2.5 text-sm text-gray-600 transition duration-300 hover:-translate-y-1 hover:border-[#0F5132]/30 hover:bg-white hover:text-[#0F5132] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F5132]"
              >
                <span className="flex h-5 min-w-5 items-center justify-center text-xs font-bold">
                  {label}
                </span>
                {}
              </a>
            ))}

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0F5132] text-white transition duration-300 hover:-translate-y-1 hover:bg-[#17452F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F5132] focus-visible:ring-offset-2"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="flex flex-col gap-2 border-t border-[#0F5132]/10 pt-5 text-xs leading-6 text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} Satyanam Kumar. All rights reserved.
          </p>

          <p>
            Designed with love ❤️ & care. 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;