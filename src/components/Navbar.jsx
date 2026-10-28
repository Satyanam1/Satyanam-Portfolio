
import { useRef, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);


const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const navRef = useRef(null);

 
useGSAP(
  () => {
    const tl = gsap.timeline({
      defaults: { ease: "" },
    });

    tl.from(".nav-logo", {
      autoAlpha: 0,
      x: -20,
      duration: 0.5,
    });

    tl.from(
      ".nav-link",
      {
        autoAlpha: 0,
        y: -10,
        duration: 0.4,
        stagger: 0.08,
        clearProps: "all",
      },
      "-=0.25"
    );

    tl.from(
      ".nav-cta, .nav-mobile-toggle",
      {
        autoAlpha: 0,
        y: -8,
        duration: 0.4,
        clearProps: "all",
      },
      "-=0.25"
    );
  },
  { scope: navRef }
);


  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/70 bg-[#FAFBFA]/90 backdrop-blur-xl" ref={navRef} >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-5 sm:px-8"
      >

        <a
          href="/"
          onClick={closeMenu}
          className="nav-logo text-2xl font-bold tracking-tight text-[#17231D]"
          aria-label="Satyam home"
        >
          Satyanam<span className="text-lime-500">.</span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-7 md:flex lg:gap-9">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-link hover:font-bold px-4 py-2 rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-[#7CCE00] hover:to-[#F1F7E2]  hover:shadow-lg hover:shadow-indigo-500/30relative block py-2 text-slate-800 after:block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-sky-600 after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {link.name}
            </a>
          ))}
        </div>


        {/* Desktop CTA */}
        <a
          href="#contact"
          className="nav-cta hidden items-center gap-1.5 rounded-full bg-lime-500 px-5 py-3 text-sm font-semibold text-[#17231D] transition hover:bg-lime-400 md:inline-flex"
        >
          Let's Talk
          <ArrowUpRight size={16} />
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          className="nav-mobile-toggle inline-flex h-10 w-10 items-center justify-center rounded-lg text-[#17231D] transition hover:bg-gray-100 md:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMenuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </nav>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-gray-200 bg-[#FAFBFA] px-5 py-5 md:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-sm font-medium text-gray-700 transition hover:bg-green-900/5 hover:text-[#0F5132]"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-lime-500 px-5 py-3 text-sm font-semibold text-[#17231D]"
            >
              Let's Talk
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
