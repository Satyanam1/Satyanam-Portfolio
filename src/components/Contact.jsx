
import { useState, useRef } from "react";
import {
  ArrowUpRight,
  Mail,
  Send,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  const sectionRef = useRef(null);

  

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Project enquiry from ${form.name}`
    );

    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nProject type: ${form.projectType || "Not specified"}\n\nProject details:\n${form.message}`
    );

    window.location.href =
      `mailto:satya949496@gmail.com?subject=${subject}&body=${body}`;
  };

  const inputClass =
    "w-full rounded-xl border border-[#E1E6DE] bg-white px-4 py-3 text-sm text-[#17231D] outline-none transition placeholder:text-gray-400 focus:border-green-800 focus:ring-2 focus:ring-green-800/10";

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="bg-[#FAF9F6] px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Contact introduction */}
          <div className="contact-intro">
            <p className=" mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-green-800">
              Get in touch
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-tight text-[#17231D] sm:text-6xl">
              Have an idea?
              <span className="block text-green-800">
                Let's build it.
              </span>
            </h2>

            <p className="mt-6 max-w-lg text-base leading-8 text-gray-600">
              Need a website or a custom web application for your
              business? Tell me what you're working on, and let's
              explore how I can help.
            </p>

            <a
              href="mailto:satya949496@gmail.com"
              className="mt-8 inline-flex items-center gap-3 text-sm font-medium text-green-900 transition hover:text-green-700"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-green-900/5">
                <Mail size={19} />
              </span>
              satya949496@gmail.com
              <ArrowUpRight size={16} />
            </a>

            <div className="mt-10 flex gap-3">
              <a
                href="https://github.com/Satyanam1"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                className="transition hover:underline transition hover:text-[#0F5132]"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/satyanam-kumar-95b713273/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="transition hover:underline hover:text-[#0F5132]"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          {/* Contact form */}
          <form
            onSubmit={handleSubmit}
            className="contact-form rounded-2xl border border-[#E1E6DE] bg-white p-6 shadow-sm sm:p-8"
          >
            <h3 className="text-xl font-semibold text-[#17231D]">
              Tell me about your project
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Share a few details to get the conversation started.
            </p>

            <div className="mt-7 space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
                  Your name
                </label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Your name"
                  autoComplete="name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Enter Your email"
                  autoComplete="email"
                  required
                />
              </div>

              <div>
                <label htmlFor="projectType" className="mb-2 block text-sm font-medium text-gray-700">
                  What do you need?
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={form.projectType}
                  onChange={handleChange}
                  className={inputClass}
                  required
                >
                  <option value="">Choose a project type</option>
                  <option value="Business website">Business website</option>
                  <option value="Landing page">Landing page</option>
                  <option value="Web application">Web application</option>
                  <option value="API or automation">API integration or automation</option>
                  <option value="Other">Something else</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
                  Project details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className={`${inputClass} min-h-32 resize-y`}
                  placeholder="What are you hoping to build?"
                  rows={4}
                  required
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-lime-500 px-6 py-3.5 text-sm font-semibold text-[#17231D] transition hover:bg-lime-400"
              >
                Send project enquiry
                <Send size={16} />
              </button>

              <p className="text-xs leading-5 text-gray-500">
                Submitting opens your default email app with the
                message prepared. It doesn't send automatically.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
