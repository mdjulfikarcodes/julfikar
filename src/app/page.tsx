
import Image from "next/image";
import {
  ArrowDownToLine,
  ArrowRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Code2,
  Heart,
  ExternalLink,
} from "lucide-react";

import { portfolio, emailHref } from "@/data/portfolio";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";

export default function HomePage() {
  return (
    <main id="top">
      {/* Hero Section */}
      <section className="container grid min-h-[660px] items-center gap-12 py-16 md:grid-cols-[1.15fr_.85fr] md:py-24">
        <div>
          <span className="eyebrow">
            <span className="dot" />
            Available for learning & opportunities
          </span>

          <p className="mt-7 text-sm font-semibold text-slate-300">
            HELLO, I&apos;M
          </p>

          <h1 className="mt-2 text-5xl font-black leading-[1.04] tracking-[-.055em] sm:text-6xl lg:text-7xl">
            {portfolio.name.split(" ")[0]}{" "}
            <span className="gradient-text">
              {portfolio.name.split(" ").slice(1).join(" ")}
            </span>
          </h1>

          <h2 className="mt-5 text-xl font-bold text-slate-200 sm:text-2xl">
            {portfolio.designation}
          </h2>

          <p className="section-copy mt-5 max-w-xl">
            {portfolio.shortIntro}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              className="btn btn-primary"
              href={portfolio.resumePath}
              download
            >
              <ArrowDownToLine size={17} />
              Download Resume
            </a>

            <a className="btn btn-secondary" href="#projects">
              Explore Projects <ArrowRight size={17} />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-slate-400">
            <span className="flex items-center gap-2">
              <MapPin size={15} />
              {portfolio.location}
            </span>

            <a
              className="flex items-center gap-2 hover:text-white"
              href={portfolio.socials.github}
              target="_blank"
              rel="noreferrer"
            >
              <Github size={17} />
              GitHub
            </a>

            <a
              className="flex items-center gap-2 hover:text-white"
              href={portfolio.socials.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={17} />
              LinkedIn
            </a>
          </div>
        </div>

        {/* Profile Card - Floating cards removed */}
        <div className="relative mx-auto w-full max-w-[390px]">
          <div className="absolute -inset-5 rounded-[40px] bg-gradient-to-br from-blue-500/20 to-violet-500/20 blur-2xl" />

          <div className="panel relative p-4">
            <div className="rounded-[18px] border border-white/10 bg-[#0b1020] p-5">
              <div className="mb-5 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
              </div>

              <div className="flex flex-col items-center py-5 text-center">
                <div className="relative mb-5 h-40 w-40 overflow-hidden rounded-full border-2 border-blue-300/60 bg-gradient-to-br from-blue-500/30 to-violet-500/30 p-1">
                  <Image
                    src="/Protfolio.png"
                    alt="Profile photo"
                    width={320}
                    height={320}
                    className="h-full w-full rounded-full object-cover"
                    priority
                  />
                </div>

                <h3 className="text-2xl font-extrabold">
                  {portfolio.name}
                </h3>

                <p className="mt-1 text-sm text-blue-300">
                  {portfolio.designation}
                </p>

                <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">
                  Curious mind. Thoughtful UI. Clean code. Always learning.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-2 border-t border-white/10 pt-4 text-center">
                <div>
                  <p className="text-xl font-black">03+</p>
                  <p className="mt-1 text-[11px] text-slate-500">
                    Projects
                  </p>
                </div>

                <div>
                  <p className="text-xl font-black">UI</p>
                  <p className="mt-1 text-[11px] text-slate-500">
                    Focused
                  </p>
                </div>

                <div>
                  <p className="text-xl font-black">∞</p>
                  <p className="mt-1 text-[11px] text-slate-500">
                    Learning
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        className="section border-y border-white/[.06] bg-white/[.015]"
        id="about"
      >
        <div className="container grid gap-10 md:grid-cols-[.7fr_1.3fr]">
          <div>
            <SectionHeading
              kicker="A little about me"
              title="Building for the web, one idea at a time."
            />
          </div>

          <div className="panel p-6 sm:p-8">
            <p className="leading-8 text-slate-300">{portfolio.about}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="skill-chip">
                <Code2 size={16} /> Problem solving
              </span>

              <span className="skill-chip">
                <Heart size={16} /> Thoughtful design
              </span>

              <span className="skill-chip">
                <Sparkles size={16} /> Continuous learning
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section" id="skills">
        <div className="container">
          <SectionHeading
            kicker="What I work with"
            title="Skills & technologies"
            description="A growing toolkit for building accessible, responsive, and reliable web experiences."
          />

          <div className="grid gap-5 md:grid-cols-3">
            {portfolio.skills.map((group) => (
              <div className="panel p-6" key={group.category}>
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 text-blue-200">
                  <Code2 size={21} />
                </div>

                <h3 className="mb-4 text-lg font-bold">
                  {group.category}
                </h3>

                <div className="flex flex-wrap gap-2.5">
                  {group.items.map((skill) => (
                    <span className="skill-chip" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section
        className="section border-y border-white/[.06] bg-white/[.015]"
        id="education"
      >
        <div className="container">
          <SectionHeading
            kicker="My background"
            title="Education"
            description="Add your completed qualifications and relevant learning history here."
          />

          <div className="grid gap-4 md:grid-cols-2">
            {portfolio.education.map((item) => (
              <article
                className="panel p-6 sm:p-7"
                key={`${item.degree}-${item.institution}`}
              >
                <p className="text-sm font-bold text-blue-300">
                  {item.year}
                </p>

                <h3 className="mt-3 text-xl font-bold">{item.degree}</h3>

                <p className="mt-2 text-slate-300">{item.institution}</p>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section" id="experience">
        <div className="container">
          <SectionHeading
            kicker="What I've done"
            title="Experience & learning"
            description="Include real employment, internships, volunteer work, or relevant project-based experience."
          />

          <div className="relative ml-2 border-l border-blue-300/30 pl-7">
            {portfolio.experience.map((item) => (
              <article
                className="panel relative mb-5 p-6 sm:p-7"
                key={`${item.role}-${item.company}`}
              >
                <span className="absolute -left-[34px] top-7 h-3 w-3 rounded-full border-2 border-blue-300 bg-[#080b14]" />

                <p className="text-sm font-semibold text-blue-300">
                  {item.period}
                </p>

                <h3 className="mt-2 text-xl font-bold">{item.role}</h3>

                <p className="mt-1 text-sm text-slate-300">
                  {item.company}
                </p>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        className="section border-y border-white/[.06] bg-white/[.015]"
        id="projects"
      >
        <div className="container">
          <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <SectionHeading
              kicker="Selected work"
              title="Projects I've built"
              description="Explore a few projects and open each case study for the technology stack, challenges, and future plans."
            />

            <span className="eyebrow mb-10">
              <Code2 size={15} />
              {portfolio.projects.length} featured projects
            </span>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {portfolio.projects.map((project) => (
              <ProjectCard project={project} key={project.slug} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section" id="contact">
        <div className="container">
          <div className="panel relative overflow-hidden p-7 sm:p-12">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl" />

            <div className="relative grid gap-9 md:grid-cols-[1fr_.8fr] md:items-center">
              <div>
                <p className="section-kicker">Get in touch</p>

                <h2 className="section-title">Have a project in mind?</h2>

                <p className="section-copy">
                  I&apos;m always happy to connect, learn, and discuss
                  opportunities. Reach out using any of the options here.
                </p>

                <a className="btn btn-primary mt-6" href={emailHref}>
                  <Mail size={17} />
                  Send an Email
                  <ArrowUpRight size={16} />
                </a>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[.025] p-4 hover:border-blue-300/40"
                  href={emailHref}
                >
                  <span className="rounded-xl bg-blue-400/10 p-3 text-blue-300">
                    <Mail size={19} />
                  </span>

                  <span>
                    <span className="block text-xs text-slate-500">
                      Email
                    </span>
                    <span className="mt-1 block break-all text-sm font-semibold">
                      {portfolio.email}
                    </span>
                  </span>

                  <ExternalLink
                    size={15}
                    className="ml-auto text-slate-500"
                  />
                </a>

                <a
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[.025] p-4 hover:border-blue-300/40"
                  href={`tel:${portfolio.phone}`}
                >
                  <span className="rounded-xl bg-violet-400/10 p-3 text-violet-300">
                    <Phone size={19} />
                  </span>

                  <span>
                    <span className="block text-xs text-slate-500">
                      Phone
                    </span>
                    <span className="mt-1 block text-sm font-semibold">
                      {portfolio.phone}
                    </span>
                  </span>

                  <ExternalLink
                    size={15}
                    className="ml-auto text-slate-500"
                  />
                </a>

                <a
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[.025] p-4 hover:border-emerald-300/40"
                  href={`https://wa.me/${portfolio.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="rounded-xl bg-emerald-400/10 p-3 text-emerald-300">
                    <Phone size={19} />
                  </span>

                  <span>
                    <span className="block text-xs text-slate-500">
                      WhatsApp
                    </span>
                    <span className="mt-1 block text-sm font-semibold">
                      {portfolio.whatsapp}
                    </span>
                  </span>

                  <ExternalLink
                    size={15}
                    className="ml-auto text-slate-500"
                  />
                </a>
              </div>
            </div>

            <div className="relative mt-8 flex flex-wrap gap-3 border-t border-white/10 pt-6">
              <a
                className="btn btn-secondary"
                href={portfolio.socials.github}
                target="_blank"
                rel="noreferrer"
              >
                <Github size={17} />
                GitHub
              </a>

              <a
                className="btn btn-secondary"
                href={portfolio.socials.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={17} />
                LinkedIn
              </a>

              <a
                className="btn btn-secondary"
                href={portfolio.socials.facebook}
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
